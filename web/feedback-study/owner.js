import {
  COLLECTION_SCHEMA,
  downloadFeedback,
  FEEDBACK_SCHEMA,
  mergeFeedbackResponses,
  validateFeedbackImport,
} from '../playtest-study/feedback.js';

let imported = [];
const status = document.querySelector('#status');
const exportButton = document.querySelector('#export');
const filesInput = document.querySelector('#files');
const target = document.querySelector('#responses');
function textNode(tag, text, parent) {
  const node = document.createElement(tag);
  node.textContent = text;
  parent.append(node);
  return node;
}
const CURRENT = {
  controls: [
    'Comandi per guardarsi intorno',
    { yes: 'Compresi', partly: 'In parte', no: 'Non compresi', 'not-tried': 'Non provati' },
  ],
  gaze: [
    'Comfort dello sguardo',
    {
      comfortable: 'A proprio agio',
      'some-strain': 'Un po’ affaticato',
      uncomfortable: 'A disagio',
      'not-tried': 'Non provato',
    },
  ],
  rain: [
    'Pioggia laterale',
    {
      clear: 'Visibile chiaramente',
      'partly-visible': 'Visibile in parte',
      'hard-to-see': 'Difficile da vedere',
      'not-tried': 'Non osservata',
    },
  ],
  resume: [
    'Salvataggio e ripresa',
    {
      'as-left': 'Ripreso come lasciato',
      changed: 'Qualcosa cambiato',
      'could-not-resume': 'Impossibile riprendere',
      'not-tried': 'Non provati',
    },
  ],
};
const LEGACY = {
  device: ['Dispositivo', { computer: 'Computer', phone: 'Telefono', tablet: 'Tablet' }],
  races: ['Corse provate', { unfinished: 'Nessuna conclusa', one: 'Una', two: 'Due', more: 'Più di due' }],
  goal: [
    'Obiettivo compreso prima della corsa',
    { finish: 'Arrivare primo', watch: 'Guardare senza influire', other: 'Altro', unsure: 'Non chiaro' },
  ],
  follow: [
    'Seguire la propria goccia',
    { yes: 'Sempre', partly: 'In parte', no: 'Persa di vista', untried: 'Non arrivato a quel punto' },
  ],
  knock: [
    'Risultato del colpo',
    {
      expected: 'Come previsto',
      different: 'Diverso dal previsto',
      unclear: 'Cambiamento non chiaro',
      untried: 'Non provato',
    },
  ],
  pace: [
    'Durata della corsa',
    {
      short: 'Troppo breve',
      right: 'Adeguata',
      long: 'Troppo lunga',
      unfinished: 'Non conclusa',
      interrupted: 'Interrotta per rispondere',
    },
  ],
  again: ['Altra corsa adesso', { yes: 'Sì', maybe: 'Forse', no: 'No' }],
};
const ISSUES = {
  selection: 'Scelta goccia',
  follow: 'Seguire la goccia',
  knock: 'Colpo sul vetro',
  result: 'Risultato',
  motion: 'Disagio visivo o movimento',
  technical: 'Problema tecnico',
  none: 'Nessuna di queste',
};
function detail(dl, label, value) {
  textNode('dt', label, dl);
  textNode('dd', value || 'Non indicato', dl);
}
function render() {
  target.replaceChildren();
  document.querySelector('#count').textContent =
    imported.length === 1 ? '1 risposta' : `${imported.length} risposte uniche`;
  exportButton.disabled = imported.length === 0;
  const groups = new Map();
  for (const row of imported) {
    const key = row.schema === FEEDBACK_SCHEMA ? row.studyVersion : `Corsa precedente - ${row.context.build}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(row);
  }
  for (const [version, rows] of groups) {
    const group = textNode('section', '', target);
    textNode('h2', `${version} (${rows.length})`, group);
    for (const [index, row] of rows.entries()) {
      const current = row.schema === FEEDBACK_SCHEMA;
      const item = textNode('details', '', group);
      textNode(
        'summary',
        `Risposta ${index + 1} - ${current ? row.sessionId.slice(0, 8) : row.id.slice(0, 8)}`,
        item,
      );
      const dl = textNode('dl', '', item);
      detail(dl, 'Versione', current ? row.studyVersion : row.context.build);
      detail(dl, 'Lingua', (current ? row.language : row.context.language) || 'Non fornita');
      if (current) detail(dl, 'Data del file', row.timestamp);
      for (const [key, [label, options]] of Object.entries(current ? CURRENT : LEGACY))
        detail(dl, label, row.answers[key] === null ? 'Non risposto' : options[row.answers[key]]);
      if (current) {
        detail(dl, 'Cosa è successo', row.answers.happened);
        detail(dl, 'Cosa cambierebbe', row.answers.change);
      } else {
        detail(dl, 'Difficoltà', row.issues.map((key) => ISSUES[key]).join(', '));
        detail(dl, 'Colpo sul vetro', row.moment);
        detail(dl, 'Fine della corsa', row.outcome);
        detail(dl, 'Un cambiamento', row.change);
        detail(dl, 'Numero corsa', row.context.seed);
        detail(dl, 'Fase', row.context.phase);
      }
    }
  }
}
filesInput.addEventListener('change', async (event) => {
  try {
    const files = [...event.target.files];
    if (files.length > 100) throw Error('Seleziona al massimo 100 file alla volta.');
    const groups = [];
    for (const file of files) {
      if (file.size > 5_000_000) throw Error('Un file supera il limite di 5 MB.');
      groups.push(validateFeedbackImport(JSON.parse(await file.text())));
    }
    const candidate = mergeFeedbackResponses(imported, ...groups);
    imported = candidate;
    render();
    status.textContent = 'File importati. Scarica tutte le risposte prima di chiudere questa scheda.';
    status.classList.remove('error');
  } catch (error) {
    status.textContent = `Importazione annullata. ${error.message}`;
    status.classList.add('error');
  } finally {
    filesInput.value = '';
  }
});
exportButton.addEventListener('click', () => {
  try {
    downloadFeedback({ schema: COLLECTION_SCHEMA, responses: imported }, 'drops-feedback-all.json');
    status.textContent =
      'Download richiesto. Controlla che il file sia nei download prima di chiudere la scheda.';
    status.classList.remove('error');
  } catch {
    status.textContent = 'Download non riuscito. Le risposte restano in questa scheda: riprova.';
    status.classList.add('error');
  }
});
render();
