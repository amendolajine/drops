import { createJourneyStore, SaveConflictError } from './journey-store.js';
import { locale, text as translate } from './language.js';

// Scene adapters supply actual state. Browser writes are local and explicitly bounded.
export function createContinuityController({
  getCheckpoint,
  prepare,
  apply,
  startNew,
  pause,
  getElement,
  supported = true,
  dbName,
  autoIntervalMs = 10000,
} = {}) {
  const el = getElement,
    ui = {
      panel: el('continuity'),
      status: el('save-status'),
      save: el('save-journey'),
      load: el('load-journey'),
      fresh: el('new-journey'),
      play: el('pause'),
    };
  let ready = false,
    pendingChoice = false,
    busy = false,
    conflict = false,
    dirty = 0,
    savedDirty = 0,
    record = null,
    lastResult = null,
    lastError = null,
    disposed = false,
    timer,
    operation = null,
    lastNote = null,
    lastAutomatic = false;
  const store = createJourneyStore({ accept: prepare, dbName });
  function note(text, automatic = false) {
    lastNote = text;
    lastAutomatic = automatic;
    if (ui.status) {
      ui.status.setAttribute('aria-live', automatic ? 'off' : 'polite');
      ui.status.textContent = translate(typeof text === 'function' ? text() : text);
    }
  }
  function refresh() {
    if (ui.save) ui.save.disabled = !supported || !ready || pendingChoice || busy || conflict;
    if (ui.load) ui.load.disabled = !supported || busy || (ready && !record);
    if (ui.load) ui.load.textContent = ready ? translate('Carica') : translate('Riprova');
    if (ui.fresh) ui.fresh.disabled = !supported || busy;
    if (ui.play && supported) ui.play.disabled = pendingChoice || (busy && operation !== 'save');
  }
  function markDirty() {
    dirty++;
  }
  function savedText(at) {
    return `${translate('Salvato in questo browser alle ') + new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit' }).format(new Date(at))}.`;
  }
  async function initialise() {
    clearInterval(timer);
    if (!supported || !ui.panel) {
      if (ui.panel) ui.panel.hidden = true;
      return;
    }
    busy = true;
    operation = 'init';
    refresh();
    note('Lettura del salvataggio locale…');
    try {
      const found = await store.load();
      record = found.record;
      ready = true;
      pendingChoice = Boolean(found.record || found.issues.length);
      if (found.record) {
        ui.panel.open = true;
        note(
          found.source === 'previous'
            ? 'Recuperata la copia precedente. Scegli Carica o Nuovo viaggio.'
            : 'Viaggio salvato. Scegli Carica o Nuovo viaggio.',
        );
      } else
        note(
          found.issues.length
            ? 'Salvataggio non leggibile. Puoi iniziare un nuovo viaggio.'
            : 'Non hai ancora salvato questo viaggio.',
        );
    } catch (error) {
      lastError = String(error.message || error);
      ready = false;
      note('Salvataggio locale non disponibile. Puoi comunque viaggiare.');
    } finally {
      busy = false;
      operation = null;
      refresh();
    }
    if (autoIntervalMs > 0)
      timer = setInterval(() => {
        if (document.visibilityState === 'visible') void save('automatic');
      }, autoIntervalMs);
  }
  async function save(reason = 'manual') {
    const automatic = reason !== 'manual';
    if (
      disposed ||
      !supported ||
      !ready ||
      pendingChoice ||
      conflict ||
      busy ||
      (automatic && dirty === savedDirty)
    )
      return null;
    busy = true;
    operation = 'save';
    refresh();
    const version = dirty;
    try {
      const checkpoint = getCheckpoint(),
        result = await store.save(checkpoint);
      record = result.record;
      lastResult = {
        bytes: result.bytes,
        preparedMs: result.preparedMs,
        transactionMs: result.transactionMs,
        steps: checkpoint.steps,
        savedAt: result.record.savedAt,
      };
      savedDirty = version;
      lastError = null;
      note(() => savedText(result.record.savedAt), automatic);
      return result;
    } catch (error) {
      lastError = String(error.message || error);
      if (error instanceof SaveConflictError) {
        conflict = true;
        note('Un’altra scheda ha salvato. Carica quel viaggio o inizia da capo.');
      } else note('Non salvato. L’ultimo salvataggio rimane disponibile.');
      return null;
    } finally {
      busy = false;
      operation = null;
      refresh();
    }
  }
  async function load() {
    if (disposed || !supported || busy) return false;
    if (!ready) {
      pause();
      await initialise();
      return false;
    }
    pause();
    busy = true;
    operation = 'load';
    refresh();
    try {
      const found = await store.load();
      if (!found.value) throw Error('No valid saved journey');
      apply(found.value);
      record = found.record;
      pendingChoice = false;
      conflict = false;
      dirty = savedDirty = 0;
      lastError = null;
      note(
        found.source === 'previous'
          ? 'Caricata la copia precedente. Premi Riprendi.'
          : 'Viaggio ritrovato. Premi Riprendi.',
      );
      return true;
    } catch (error) {
      lastError = String(error.message || error);
      note('Salvataggio non caricato. Il viaggio attuale è fermo.');
      return false;
    } finally {
      busy = false;
      operation = null;
      refresh();
    }
  }
  async function fresh() {
    if (disposed || !supported || busy) return false;
    pause();
    busy = true;
    operation = 'fresh';
    refresh();
    try {
      if (ready) await store.load();
      startNew();
      pendingChoice = false;
      conflict = false;
      dirty++;
      lastError = null;
      note('Nuovo viaggio pronto. Premi Riprendi.');
      return true;
    } catch (error) {
      lastError = String(error.message || error);
      note('Non è stato possibile iniziare il nuovo viaggio.');
      return false;
    } finally {
      busy = false;
      operation = null;
      refresh();
    }
  }
  function hidden() {
    if (document.hidden) void save('hidden');
  }
  function pagehide() {
    void save('pagehide');
  }
  ui.save?.addEventListener('click', () => void save());
  ui.load?.addEventListener('click', () => void load());
  ui.fresh?.addEventListener('click', () => void fresh());
  document.addEventListener('visibilitychange', hidden);
  window.addEventListener('pagehide', pagehide);
  return {
    refreshLanguage() {
      refresh();
      if (lastNote) note(lastNote, lastAutomatic);
    },
    initialise,
    save,
    load,
    fresh,
    markDirty,
    state: () => ({
      supported,
      ready,
      pendingChoice,
      busy,
      playLocked: pendingChoice || (busy && operation !== 'save'),
      conflict,
      dirty: dirty !== savedDirty,
      lastResult,
      lastError,
      hasSave: Boolean(record),
    }),
    dispose() {
      disposed = true;
      clearInterval(timer);
      document.removeEventListener('visibilitychange', hidden);
      window.removeEventListener('pagehide', pagehide);
      void store.close();
    },
  };
}
