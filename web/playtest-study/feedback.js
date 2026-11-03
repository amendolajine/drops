export const FEEDBACK_SCHEMA = 'drops-journey-feedback-1';
export const STUDY_VERSION = 'journey-v8-2026-11-03';
export const COLLECTION_SCHEMA = 'drops-feedback-collection-1';
const DRAFT_KEY = `drops-feedback-draft:${STUDY_VERSION}`;
const UUID = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/;
const ANSWERS = {
  controls: ['yes', 'partly', 'no', 'not-tried'],
  gaze: ['comfortable', 'some-strain', 'uncomfortable', 'not-tried'],
  rain: ['clear', 'partly-visible', 'hard-to-see', 'not-tried'],
  resume: ['as-left', 'changed', 'could-not-resume', 'not-tried'],
};
const COPY = {
  en: {
    title: 'Your feedback',
    intro: 'All questions are optional. Answer only about what you tried.',
    privacy: 'Your draft stays in this browser. Download the file and send it to Antonio.',
    questions: {
      controls: ['Did you understand how to look around?', ['Yes', 'Partly', 'No', 'I did not try']],
      gaze: [
        'How did looking around feel?',
        ['Comfortable', 'Some strain', 'Uncomfortable', 'I did not try'],
      ],
      rain: [
        'Could you see the rain on the side window?',
        ['Clearly', 'Some of it', 'It was hard to see', 'I did not look'],
      ],
      resume: [
        'If you saved and reopened the journey, what happened?',
        ['It resumed as I left it', 'Something had changed', 'I could not resume', 'I did not try'],
      ],
    },
    happened: 'What happened? (optional)',
    change: 'What would you change? (optional)',
    notes: 'Please leave out names and contact details. Up to 1,500 characters per note.',
    download: 'Download feedback file',
    ready: 'Answer here, then download your file. Nothing is sent automatically.',
    restored: 'Your editable draft was restored from this browser.',
    saved: 'Draft saved in this browser. Download it when you are ready.',
    unavailable: 'This browser could not save the draft. You can still download the file before leaving.',
    downloaded:
      'Download requested. Check your downloads, then send the file to Antonio. Nothing has been sent from this page.',
    failed: 'The file could not be prepared. Your answers are still here. Try downloading again.',
  },
  it: {
    title: 'Il tuo parere',
    intro: 'Tutte le domande sono facoltative. Rispondi solo su ciò che hai provato.',
    privacy: 'La bozza resta in questo browser. Scarica il file e invialo ad Antonio.',
    questions: {
      controls: ['Hai capito come guardarti intorno?', ['Sì', 'In parte', 'No', 'Non ho provato']],
      gaze: [
        'Come ti sei trovato guardandoti intorno?',
        ['A mio agio', 'Un po’ affaticato', 'A disagio', 'Non ho provato'],
      ],
      rain: [
        'Riuscivi a vedere la pioggia sul finestrino laterale?',
        ['Chiaramente', 'Solo in parte', 'Era difficile vederla', 'Non ho guardato'],
      ],
      resume: [
        'Se hai salvato e riaperto il viaggio, cosa è successo?',
        [
          'È ripreso come lo avevo lasciato',
          'Qualcosa era cambiato',
          'Non sono riuscito a riprendere',
          'Non ho provato',
        ],
      ],
    },
    happened: 'Cosa è successo? (facoltativo)',
    change: 'Cosa cambieresti? (facoltativo)',
    notes: 'Non inserire nomi o contatti. Al massimo 1.500 caratteri per nota.',
    download: 'Scarica il file delle risposte',
    ready: 'Rispondi qui, poi scarica il file. Non viene inviato nulla automaticamente.',
    restored: 'La bozza modificabile è stata ripristinata da questo browser.',
    saved: 'Bozza salvata in questo browser. Scaricala quando vuoi.',
    unavailable:
      'Questo browser non ha potuto salvare la bozza. Puoi comunque scaricare il file prima di uscire.',
    downloaded:
      'Download richiesto. Controlla i file scaricati, poi invia il file ad Antonio. Questa pagina non ha inviato nulla.',
    failed:
      'Non è stato possibile preparare il file. Le risposte sono ancora qui. Prova a scaricarlo di nuovo.',
  },
};

const plain = (value) =>
  value !== null &&
  typeof value === 'object' &&
  !Array.isArray(value) &&
  Object.getPrototypeOf(value) === Object.prototype;
function exact(value, keys) {
  return (
    plain(value) &&
    Object.keys(value).length === keys.length &&
    keys.every((key) => Object.hasOwn(value, key))
  );
}
function safeNote(value, max = 1500) {
  return (
    typeof value === 'string' &&
    value.length <= max &&
    [...value].every((character) => {
      const code = character.charCodeAt(0);
      return code >= 32 || code === 9 || code === 10 || code === 13;
    })
  );
}
function validTimestamp(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d{3}Z$/.test(value)) return false;
  const date = new Date(value);
  return Number.isFinite(date.getTime()) && date.toISOString() === value;
}
function validateAnswers(value) {
  if (!exact(value, [...Object.keys(ANSWERS), 'happened', 'change'])) throw Error('Invalid journey answers.');
  const answers = {};
  for (const [key, options] of Object.entries(ANSWERS)) {
    if (value[key] !== null && !options.includes(value[key])) throw Error(`Invalid answer: ${key}.`);
    answers[key] = value[key];
  }
  for (const key of ['happened', 'change']) {
    if (!safeNote(value[key])) throw Error('Invalid journey note.');
    answers[key] = value[key];
  }
  return answers;
}

export function validateJourneyResponse(value) {
  if (
    !exact(value, ['schema', 'studyVersion', 'language', 'sessionId', 'timestamp', 'answers']) ||
    value.schema !== FEEDBACK_SCHEMA ||
    value.studyVersion !== STUDY_VERSION ||
    !['it', 'en'].includes(value.language) ||
    typeof value.sessionId !== 'string' ||
    !UUID.test(value.sessionId) ||
    !validTimestamp(value.timestamp)
  )
    throw Error('Invalid or unsupported journey feedback.');
  return {
    schema: FEEDBACK_SCHEMA,
    studyVersion: STUDY_VERSION,
    language: value.language,
    sessionId: value.sessionId,
    timestamp: value.timestamp,
    answers: validateAnswers(value.answers),
  };
}

const LEGACY_OPTIONS = {
  device: ['computer', 'phone', 'tablet'],
  races: ['unfinished', 'one', 'two', 'more'],
  goal: ['finish', 'watch', 'other', 'unsure'],
  follow: ['yes', 'partly', 'no', 'untried'],
  knock: ['expected', 'different', 'unclear', 'untried'],
  pace: ['short', 'right', 'long', 'unfinished', 'interrupted'],
  again: ['yes', 'maybe', 'no'],
};
const LEGACY_ISSUES = ['selection', 'follow', 'knock', 'result', 'motion', 'technical', 'none'];
function validateLegacyResponse(value) {
  const keys = ['study', 'id', 'answers', 'issues', 'moment', 'change'];
  if (plain(value) && Object.hasOwn(value, 'outcome')) keys.push('outcome');
  if (plain(value) && Object.hasOwn(value, 'context')) keys.push('context');
  if (
    !exact(value, keys) ||
    value.study !== 'drops-race-2026-10-17' ||
    typeof value.id !== 'string' ||
    !UUID.test(value.id) ||
    !exact(value.answers, Object.keys(LEGACY_OPTIONS))
  )
    throw Error('Invalid legacy race feedback.');
  const answers = {};
  for (const [key, options] of Object.entries(LEGACY_OPTIONS)) {
    if (!options.includes(value.answers[key])) throw Error('Invalid legacy answer.');
    answers[key] = value.answers[key];
  }
  if (
    !Array.isArray(value.issues) ||
    value.issues.length > LEGACY_ISSUES.length ||
    new Set(value.issues).size !== value.issues.length ||
    value.issues.some((issue) => !LEGACY_ISSUES.includes(issue)) ||
    (value.issues.includes('none') && value.issues.length > 1)
  )
    throw Error('Invalid legacy issues.');
  for (const key of ['moment', 'change', ...(Object.hasOwn(value, 'outcome') ? ['outcome'] : [])]) {
    if (!safeNote(value[key], 240)) throw Error('Invalid legacy note.');
  }
  const context = Object.hasOwn(value, 'context')
    ? value.context
    : { build: 'not-provided', seed: 'not-provided', phase: 'not-provided' };
  if (
    !(exact(context, ['build', 'seed', 'phase']) || exact(context, ['build', 'seed', 'phase', 'language'])) ||
    !Object.values(context).every((item) => typeof item === 'string' && item.length <= 80) ||
    !/^[A-Za-z0-9][A-Za-z0-9._-]{0,79}$/.test(context.build) ||
    (context.seed !== 'not-provided' && !/^\d{1,20}$/.test(context.seed)) ||
    !['pick', 'racing', 'done', 'not-provided'].includes(context.phase) ||
    (context.language !== undefined && !['it', 'en'].includes(context.language))
  )
    throw Error('Invalid legacy context.');
  return {
    study: value.study,
    id: value.id,
    answers,
    issues: [...value.issues].sort(),
    moment: value.moment,
    change: value.change,
    ...(Object.hasOwn(value, 'outcome') ? { outcome: value.outcome } : {}),
    context: {
      build: context.build,
      seed: context.seed,
      phase: context.phase,
      ...(context.language === undefined ? {} : { language: context.language }),
    },
  };
}

export function validateFeedbackImport(value) {
  if (plain(value) && value.schema === FEEDBACK_SCHEMA) return [validateJourneyResponse(value)];
  const currentCollection = exact(value, ['schema', 'responses']) && value.schema === COLLECTION_SCHEMA;
  const legacyCollection = exact(value, ['schemaVersion', 'responses']) && value.schemaVersion === 1;
  if (
    (!currentCollection && !legacyCollection) ||
    !Array.isArray(value.responses) ||
    value.responses.length > 10000
  )
    throw Error('Expected a supported feedback file, with at most 10,000 responses.');
  return value.responses.map((row) =>
    currentCollection && row?.schema === FEEDBACK_SCHEMA
      ? validateJourneyResponse(row)
      : validateLegacyResponse(row),
  );
}

export function mergeFeedbackResponses(...groups) {
  const rows = new Map();
  for (const row of groups.flat()) {
    const clean =
      row?.schema === FEEDBACK_SCHEMA ? validateJourneyResponse(row) : validateLegacyResponse(row);
    const key = clean.schema ? `${clean.studyVersion}:${clean.sessionId}` : `${clean.study}:${clean.id}`;
    const old = rows.get(key);
    if (old && JSON.stringify(old) !== JSON.stringify(clean))
      throw Error(
        'Different answers share the same response ID. No files were imported. Keep the version you want in a separate import.',
      );
    rows.set(key, clean);
  }
  if (rows.size > 10000) throw Error('Too many responses.');
  return [...rows.values()];
}

export function downloadFeedback(value, filename) {
  const url = URL.createObjectURL(
    new Blob([`${JSON.stringify(value, null, 2)}\n`], { type: 'application/json' }),
  );
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

function element(tag, text, parent) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  parent?.append(node);
  return node;
}

export function mountFeedback(container, { language = 'en', sessionId = crypto.randomUUID() } = {}) {
  if (!(container instanceof HTMLElement)) throw Error('Feedback needs a container.');
  if (!UUID.test(sessionId)) throw Error('Feedback needs a random session ID.');
  let activeLanguage = language === 'it' ? 'it' : 'en';
  let id = sessionId;
  let answers = { controls: null, gaze: null, rain: null, resume: null, happened: '', change: '' };
  let messageKey = 'ready';
  try {
    const saved = localStorage.getItem(DRAFT_KEY);
    if (saved) {
      const draft = validateJourneyResponse(JSON.parse(saved));
      answers = draft.answers;
      id = draft.sessionId;
      messageKey = 'restored';
    }
  } catch {
    messageKey = 'unavailable';
  }
  const form = element('form', undefined, container);
  form.className = 'journey-feedback';
  form.lang = activeLanguage;
  form.setAttribute('aria-label', COPY[activeLanguage].title);
  const title = element('h2', undefined, form);
  const intro = element('p', undefined, form);
  const privacy = element('p', undefined, form);
  privacy.className = 'feedback-privacy';
  const labels = [];
  const capture = () => ({
    schema: FEEDBACK_SCHEMA,
    studyVersion: STUDY_VERSION,
    language: activeLanguage,
    sessionId: id,
    timestamp: new Date().toISOString(),
    answers: { ...answers },
  });
  const status = document.createElement('p');
  status.className = 'feedback-status';
  status.setAttribute('role', 'status');
  const updateStatus = () => {
    status.textContent = COPY[activeLanguage][messageKey];
  };
  const save = () => {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(validateJourneyResponse(capture())));
      messageKey = 'saved';
    } catch {
      messageKey = 'unavailable';
    }
    updateStatus();
  };
  for (const [key, options] of Object.entries(ANSWERS)) {
    const fieldset = element('fieldset', undefined, form);
    const legend = element('legend', undefined, fieldset);
    labels.push(() => {
      legend.textContent = COPY[activeLanguage].questions[key][0];
    });
    for (const [index, value] of options.entries()) {
      const label = element('label', undefined, fieldset);
      const input = element('input', undefined, label);
      input.type = 'radio';
      input.name = key;
      input.value = value;
      input.checked = answers[key] === value;
      input.addEventListener('change', () => {
        answers[key] = value;
        save();
      });
      const text = element('span', undefined, label);
      labels.push(() => {
        text.textContent = COPY[activeLanguage].questions[key][1][index];
      });
    }
  }
  const noteHint = element('p', undefined, form);
  noteHint.id = `feedback-note-hint-${id}`;
  for (const key of ['happened', 'change']) {
    const label = element('label', undefined, form);
    label.className = 'feedback-note';
    const text = element('span', undefined, label);
    labels.push(() => {
      text.textContent = COPY[activeLanguage][key];
    });
    const textarea = element('textarea', undefined, label);
    textarea.name = key;
    textarea.maxLength = 1500;
    textarea.rows = 4;
    textarea.value = answers[key];
    textarea.setAttribute('aria-describedby', noteHint.id);
    textarea.addEventListener('input', () => {
      answers[key] = textarea.value;
      save();
    });
  }
  const download = element('button', undefined, form);
  download.type = 'submit';
  form.append(status);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    try {
      const response = validateJourneyResponse(capture());
      downloadFeedback(response, `drops-journey-feedback-${id.slice(0, 8)}.json`);
      save();
      messageKey = 'downloaded';
    } catch {
      messageKey = 'failed';
    }
    updateStatus();
  });
  const setLanguage = (next) => {
    activeLanguage = next === 'it' ? 'it' : 'en';
    const copy = COPY[activeLanguage];
    form.lang = activeLanguage;
    form.setAttribute('aria-label', copy.title);
    title.textContent = copy.title;
    intro.textContent = copy.intro;
    privacy.textContent = copy.privacy;
    noteHint.textContent = copy.notes;
    download.textContent = copy.download;
    for (const update of labels) update();
    updateStatus();
  };
  setLanguage(activeLanguage);
  return { setLanguage, sessionId: id, destroy: () => form.remove() };
}
