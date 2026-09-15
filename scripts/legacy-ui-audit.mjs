import fs from 'node:fs';

const root = new URL('../', import.meta.url);
const read = (file) => fs.readFileSync(new URL(file, root), 'utf8');

const loader = read('styles.css');
const learning = read('nova-legacy-learning-v24-4.css');
const states = read('nova-legacy-states-v24-4.css');
const shell = read('nova-legacy-shell-v24-4.css');

const checks = [
  ['Carga capa aprendizaje', loader.includes("@import url('/nova-legacy-learning-v24-4.css')")],
  ['Carga capa estados', loader.includes("@import url('/nova-legacy-states-v24-4.css')")],
  ['Carga shell legacy', loader.includes("@import url('/nova-legacy-shell-v24-4.css')")],

  ['Atlas hero claro', /#app \.hero-card[\s\S]*?background:[^;]*#fff/i.test(learning)],
  ['Atlas opciones legibles', learning.includes('#app .answer-btn{') && learning.includes('color:var(--nova-ink)!important')],
  ['Atlas CTA primario NOVA', learning.includes('#app .actions .primary-btn') && learning.includes('var(--nova-brand-primary)')],
  ['Atlas tutor contextual', states.includes('#app .ai-tutor-card')],

  ['Academia estado nuevo', states.includes('.academy-route-card.new')],
  ['Academia estado progreso', states.includes('.academy-route-card.progress')],
  ['Academia estado reforzar', learning.includes('.academy-route-card.reinforce')],
  ['Academia estado fuerte', learning.includes('.academy-route-card.strong')],
  ['Academia selección separada de acierto', states.includes('Respuestas y feedback: seleccionado no significa correcto')],

  ['Cuaderno superficie clara', learning.includes('#notebookModule .paper-layout-card')],
  ['Cuaderno CTA NOVA', learning.includes('#notebookModule .notebook-number-form button')],
  ['Cuaderno pasos active/done', learning.includes('#notebookModule .procedure-step.active') && learning.includes('#notebookModule .procedure-step.done')],

  ['Disabled sin opacidad', states.includes('opacity:1!important') && states.includes('--nova-disabled-background')],
  ['Focus visible', states.includes('outline:3px solid var(--nova-focus-ring)!important')],
  ['Shell content-focus claro', shell.includes('body.content-focus') && shell.includes('var(--nova-background)!important')],
  ['Reduced motion', states.includes('@media(prefers-reduced-motion:reduce)')]
];

let failed = false;
console.log('\nNOVA V24.4 · legacy UI coherence audit\n');

for (const [label, ok] of checks) {
  if (!ok) failed = true;
  console.log(`${ok ? '✓' : '✗'} ${label}`);
}

console.log('\nPrincipio: cada estado debe definir superficie + texto + borde; ninguna experiencia heredada puede depender del tema oscuro para ser legible.\n');

if (failed) process.exit(1);
