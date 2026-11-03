export let locale = new URLSearchParams(location.search).get('lang') === 'it' ? 'it' : 'en';
const labels = {
  fullscreen: ['Full screen', 'Schermo intero'],
  stage: ['The journey from the back seat', 'Il viaggio dal sedile posteriore'],
  canvas: [
    'Drag to look around. You can also use the arrow keys.',
    'Trascina per guardarti intorno. Puoi usare anche le frecce.',
  ],
  loading: ['Preparing the cabin...', 'Preparazione dell’abitacolo...'],
  start: ['Start', 'Parti'],
  gaze: ['Look around', 'Sguardo'],
  window: ['Window', 'Vetro'],
  front: ['Ahead', 'Davanti'],
  beside: ['Beside you', 'Accanto'],
  feet: ['Down', 'In basso'],
  back: ['Behind', 'Dietro'],
  lamp: ['Reading light', 'Luce di lettura'],
  weather: ['Overcast sky', 'Cielo coperto'],
  motion: ['Motion', 'Movimento'],
  motion24: ['24 with gaze blur', '24 con sfocatura dello sguardo'],
  motionClear: ['Clear reference', 'Riferimento nitido'],
  guide: [
    'Drag to look around. Use the buttons or arrow keys if you prefer. The journey continues when you look away.',
    'Trascina per guardarti intorno. Puoi usare i pulsanti o le frecce. Il viaggio continua anche quando guardi altrove.',
  ],
  message: [
    'You stay in your seat. No action is needed to continue.',
    'Lo sguardo resta nel sedile. Nessuna azione è necessaria per continuare.',
  ],
  yourJourney: ['Your journey', 'Il tuo viaggio'],
  preparingSave: ['Preparing local storage...', 'Preparazione del salvataggio locale...'],
  save: ['Save', 'Salva'],
  load: ['Load', 'Carica'],
  new: ['New journey', 'Nuovo viaggio'],
  saveHelp: [
    'Saved only in this browser. Loading starts paused. Saving happens during the journey; closing suddenly may lose the last few seconds. Clearing browser data removes your journey.',
    'Rimane su questo browser. La ripresa parte in pausa. Il salvataggio automatico avviene durante il viaggio; una chiusura improvvisa può perdere gli ultimi secondi. Cancellare i dati del browser elimina il viaggio.',
  ],
  scope: ['About this version', 'Questa versione'],
  scopeCurrent: [
    'An early, silent journey with a provisional cabin, moving landscape, rain and local save. No score or required action.',
    'Un primo viaggio senza suono, con abitacolo provvisorio, paesaggio in movimento, pioggia e salvataggio locale. Nessun punteggio o azione obbligatoria.',
  ],
  scopeMissing: [
    "People, cassette gestures, music and a story from home to arrival are still being built. The car's shape and materials remain unfinished.",
    'Persone, gesti con la cassetta, musica e storia da casa all’arrivo sono ancora da costruire. Forma e materiali dell’auto sono incompleti.',
  ],
};
const statuses = {
  Parti: 'Start',
  'Lo sguardo resta nel sedile. Nessuna azione è necessaria per continuare.':
    'You stay in your seat. No action is needed to continue.',
  Riprendi: 'Resume',
  Pausa: 'Pause',
  Carica: 'Load',
  Riprova: 'Try again',
  'La luce è accesa.': 'The light is on.',
  'La luce è spenta.': 'The light is off.',
  'Il viaggio è fermo per un problema. Puoi ancora guardarti intorno; ricarica per ripartire.':
    'The journey stopped because of a problem. You can still look around; reload to restart.',
  'Puoi continuare nella finestra del browser.': 'You can continue in the browser window.',
  'La prova non si è aperta. Ricarica per riprovare.': 'The journey could not open. Reload to try again.',
  'Salvato in questo browser alle ': 'Saved in this browser at ',
  'Lettura del salvataggio locale…': 'Reading your local save...',
  'Recuperata la copia precedente. Scegli Carica o Nuovo viaggio.':
    'Recovered the previous copy. Choose Load or New journey.',
  'Viaggio salvato. Scegli Carica o Nuovo viaggio.':
    'A saved journey is available. Choose Load or New journey.',
  'Salvataggio non leggibile. Puoi iniziare un nuovo viaggio.':
    'The save could not be read. You can start a new journey.',
  'Non hai ancora salvato un viaggio.': 'You have not saved a journey yet.',
  'Salvataggio locale non disponibile. Puoi comunque viaggiare.':
    'Local saving is unavailable. You can still travel.',
  'Un’altra scheda ha salvato. Carica quel viaggio o inizia da capo.':
    'Another tab saved a journey. Load that journey or start again.',
  'Non salvato. L’ultimo salvataggio rimane disponibile.': 'Not saved. The last save remains available.',
  'Caricata la copia precedente. Premi Riprendi.': 'Loaded the previous copy. Press Resume.',
  'Viaggio ritrovato. Premi Riprendi.': 'Your journey is back. Press Resume.',
  'Salvataggio non caricato. Il viaggio attuale è fermo.':
    'The save could not load. Your current journey is paused.',
  'Nuovo viaggio pronto. Premi Riprendi.': 'A new journey is ready. Press Resume.',
  'Non è stato possibile iniziare il nuovo viaggio.': 'The new journey could not start.',
};
export function text(value) {
  return locale === 'it' ? value : (statuses[value] ?? value);
}
export function localisePage() {
  document.documentElement.lang = locale;
  document.title = locale === 'it' ? 'drops. - Il viaggio' : 'drops. - The journey';
  for (const element of document.querySelectorAll('[data-text]'))
    element.textContent = labels[element.dataset.text][locale === 'it' ? 1 : 0];
  for (const element of document.querySelectorAll('[data-label]'))
    element.setAttribute('aria-label', labels[element.dataset.label][locale === 'it' ? 1 : 0]);
}

export function setLanguage(value) {
  locale = value === 'it' ? 'it' : 'en';
  localisePage();
}
