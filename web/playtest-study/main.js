import { mountFeedback } from './feedback.js';
import './feedback.css';

const COPY = {
  it: {
    edition: 'Prova del viaggio 08',
    language: 'Lingua',
    title: 'Un viaggio sotto la pioggia.',
    premise:
      'Sei un bambino sul sedile posteriore. Fuori scorre la strada; sul vetro si muovono le gocce. Questa prova parte dal ricordo di quei viaggi.',
    instructions:
      'Trascina la vista o usa le frecce per guardarti intorno. Puoi cambiare luce e cielo, fermarti e riprendere il viaggio.',
    scope:
      'Prova in corso: guarda sguardo, pioggia e ripresa del viaggio. Auto provvisoria; suono, persone e storia sono ancora da aggiungere.',
    begin: 'Entra',
    feedback: 'Il tuo riscontro',
    loading: 'Preparazione del viaggio…',
    local: 'Nessun account. Scarica il riscontro e manda il file ad Antonio.',
    credits: 'Crediti',
    sceneTitle: 'Viaggio dal sedile posteriore',
  },
  en: {
    edition: 'Journey study 08',
    language: 'Language',
    title: 'A ride in the rain.',
    premise:
      'You are a child in the back seat. The road passes outside; raindrops move across the glass. This study starts with the memory of those rides.',
    instructions:
      'Drag the view or use the arrow keys to look around. Change the light or sky, pause, and return to a saved journey.',
    scope:
      'Work in progress: try looking around, watching the rain and resuming a journey. The car is provisional; sound, people and story are still to come.',
    begin: 'Enter',
    feedback: 'Your feedback',
    loading: 'Preparing the journey…',
    local: 'No accounts. Download your feedback and send the file to Antonio.',
    credits: 'Credits',
    sceneTitle: 'Backseat journey',
  },
};
const element = (id) => document.getElementById(id);
const frame = element('journey');
let language = 'en';
let feedback = null;
let started = false;

function setLanguage(next) {
  language = next === 'it' ? 'it' : 'en';
  const copy = COPY[language];
  document.documentElement.lang = language;
  document.title = `drops. - ${copy.title}`;
  for (const node of document.querySelectorAll('[data-copy]')) node.textContent = copy[node.dataset.copy];
  element('language').value = language;
  element('language-control').hidden = false;
  element('language-step').hidden = true;
  element('intro-step').hidden = false;
  frame.title = copy.sceneTitle;
  document.querySelector('.journey-panel').setAttribute('aria-label', copy.sceneTitle);
  feedback?.setLanguage(language);
  if (started)
    frame.contentWindow?.postMessage({ type: 'drops-journey-language', language }, location.origin);
}

for (const button of document.querySelectorAll('[data-language]')) {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
}
element('language').addEventListener('change', (event) => setLanguage(event.target.value));
element('begin').addEventListener('click', () => {
  if (started) return;
  started = true;
  element('entry').hidden = true;
  element('app').hidden = false;
  element('feedback-panel').open = window.matchMedia('(min-width: 1120px)').matches;
  feedback = mountFeedback(element('feedback-fields'), { language, sessionId: crypto.randomUUID() });
  frame.src = `./scene.html?lang=${language}&v=journey-v8`;
});
element('feedback-link').addEventListener('click', () => {
  element('feedback-panel').open = true;
});
window.addEventListener('message', (event) => {
  if (event.origin !== location.origin || event.source !== frame.contentWindow || !event.data) return;
  if (event.data.type === 'drops-journey-size' && Number.isFinite(event.data.height)) {
    frame.style.height = `${Math.max(240, Math.min(2400, Math.ceil(event.data.height)))}px`;
  }
  if (event.data.type === 'drops-journey-status' && event.data.ready === true) {
    element('scene-loading').hidden = true;
    frame.contentWindow?.postMessage({ type: 'drops-journey-language', language }, location.origin);
  }
});
