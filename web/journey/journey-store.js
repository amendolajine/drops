// Two local generations. A completed request alone is never reported as a saved transaction.
export const SAVE_ENVELOPE_SCHEMA = 'drops-journey-envelope-1';
export const MAX_SAVE_BYTES = 24 * 1024 * 1024;
export class SaveConflictError extends Error {
  constructor() {
    super('Another tab saved a newer journey');
    this.name = 'SaveConflictError';
  }
}
export function createJourneyStore({
  accept,
  dbName = 'drops-journey-v9-bari-1',
  database = globalThis.indexedDB,
  cryptoApi = globalThis.crypto,
} = {}) {
  if (typeof accept !== 'function') throw Error('A complete journey validator is required');
  let opened = null,
    expectedStamp = null,
    loaded = false,
    healthyStamp = null,
    queue = Promise.resolve(),
    closed = false;
  const measure = () => globalThis.performance?.now?.() ?? Date.now();
  async function hash(text) {
    if (!cryptoApi?.subtle) throw Error('Local save integrity support is unavailable');
    return Array.from(
      new Uint8Array(await cryptoApi.subtle.digest('SHA-256', new TextEncoder().encode(text))),
      (n) => n.toString(16).padStart(2, '0'),
    ).join('');
  }
  function open() {
    if (closed) return Promise.reject(Error('Local store is closed'));
    if (opened) return opened;
    opened = new Promise((resolve, reject) => {
      if (!database) {
        reject(Error('Local storage is unavailable'));
        return;
      }
      let rejected = false;
      const request = database.open(dbName, 1);
      request.onupgradeneeded = () => request.result.createObjectStore('checkpoints');
      request.onerror = () => {
        rejected = true;
        reject(request.error || Error('Local store could not open'));
      };
      request.onblocked = () => {
        rejected = true;
        reject(Error('Local store upgrade is blocked by another tab'));
      };
      request.onsuccess = () => {
        const db = request.result;
        if (rejected || closed) {
          db.close();
          reject(Error('Local store open was cancelled'));
          return;
        }
        db.onversionchange = () => {
          db.close();
          opened = null;
        };
        resolve(db);
      };
    });
    opened = opened.catch((error) => {
      opened = null;
      throw error;
    });
    return opened;
  }
  function read(db) {
    return new Promise((resolve, reject) => {
      let latest, previous;
      const tx = db.transaction('checkpoints', 'readonly'),
        store = tx.objectStore('checkpoints');
      const a = store.get('latest'),
        b = store.get('previous');
      a.onsuccess = () => {
        latest = a.result ?? null;
      };
      b.onsuccess = () => {
        previous = b.result ?? null;
      };
      tx.oncomplete = () => resolve({ latest, previous });
      tx.onabort = () => reject(tx.error || Error('Local read was aborted'));
      tx.onerror = () => {};
    });
  }
  async function unpack(record) {
    if (
      !record ||
      record.schema !== SAVE_ENVELOPE_SCHEMA ||
      typeof record.stamp !== 'string' ||
      !Number.isFinite(Date.parse(record.savedAt)) ||
      typeof record.checksum !== 'string'
    )
      throw Error('Invalid save envelope');
    const text = JSON.stringify(record.checkpoint),
      bytes = new TextEncoder().encode(text).byteLength;
    if (bytes > MAX_SAVE_BYTES) throw Error('Saved journey is too large');
    if ((await hash(text)) !== record.checksum) throw Error('Saved journey integrity check failed');
    const value = await accept(record.checkpoint);
    return { record, value, bytes };
  }
  async function readValidated() {
    const db = await open(),
      records = await read(db);
    expectedStamp = typeof records.latest?.stamp === 'string' ? records.latest.stamp : null;
    loaded = true;
    healthyStamp = null;
    const issues = [];
    for (const source of ['latest', 'previous'])
      if (records[source]) {
        try {
          const result = await unpack(records[source]);
          healthyStamp = result.record.stamp;
          return { ...result, source, issues };
        } catch (error) {
          issues.push({ source, message: String(error.message || error) });
        }
      }
    return { record: null, value: null, source: null, bytes: 0, issues };
  }
  async function write(checkpoint) {
    if (!loaded) throw Error('Read the existing journey before saving');
    const start = measure();
    await accept(checkpoint);
    const text = JSON.stringify(checkpoint),
      bytes = new TextEncoder().encode(text).byteLength;
    if (bytes > MAX_SAVE_BYTES) throw Error('Journey exceeds the local save budget');
    const record = {
      schema: SAVE_ENVELOPE_SCHEMA,
      stamp: cryptoApi.randomUUID(),
      savedAt: new Date().toISOString(),
      checksum: await hash(text),
      checkpoint: JSON.parse(text),
    };
    const preparedMs = measure() - start,
      db = await open(),
      stamp = expectedStamp,
      validStamp = healthyStamp,
      writeStart = measure();
    await new Promise((resolve, reject) => {
      let problem = null;
      const tx = db.transaction('checkpoints', 'readwrite'),
        store = tx.objectStore('checkpoints'),
        get = store.get('latest');
      get.onsuccess = () => {
        const current = get.result ?? null,
          currentStamp = typeof current?.stamp === 'string' ? current.stamp : null;
        if (currentStamp !== stamp) {
          problem = new SaveConflictError();
          tx.abort();
          return;
        }
        if (current && current.stamp === validStamp) store.put(current, 'previous');
        store.put(record, 'latest');
      };
      tx.oncomplete = resolve;
      tx.onabort = () => reject(problem || tx.error || Error('Local write was aborted'));
      tx.onerror = () => {};
    });
    expectedStamp = healthyStamp = record.stamp;
    return { record, bytes, preparedMs, transactionMs: measure() - writeStart };
  }
  function load() {
    const result = queue.then(readValidated);
    queue = result.catch(() => {});
    return result;
  }
  function save(checkpoint) {
    const detached = structuredClone(checkpoint);
    const result = queue.then(() => write(detached));
    queue = result.catch(() => {});
    return result;
  }
  async function close() {
    closed = true;
    try {
      (await opened)?.close();
    } catch {}
    opened = null;
  }
  return { load, save, close, limits: { maxBytes: MAX_SAVE_BYTES, generations: 2 } };
}
