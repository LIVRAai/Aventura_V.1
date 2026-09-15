import fs from 'node:fs';

const root = new URL('../', import.meta.url);
const read = file => fs.readFileSync(new URL(file, root), 'utf8');
const json = file => JSON.parse(read(file));

const loader = read('app.js');
const styles = read('styles.css');
const engine = read('app-v25.js');
const cloud = read('app-v25-cloud.js');
const growth = read('app-v25-growth.js');
const analytics = read('api/analytics.js');
const pkg = json('package.json');

const checks = [
  ['Versión 25.0.0', pkg.version === '25.0.0'],
  ['Runtime Node 24.x', pkg.engines?.node === '24.x'],
  ['Carga app-v25', loader.includes("load('/app-v25.js'")],
  ['Carga growth V25', loader.includes("load('/app-v25-growth.js'")],
  ['Carga cloud V25', loader.includes("load('/app-v25-cloud.js'")],
  ['Carga styles V25', styles.includes("@import url('/styles-v25.css')")],
  ['Carga styles growth', styles.includes("@import url('/styles-v25-growth.css')")],
  ['Estados por habilidad', ['new','progress','reinforce','mastered'].every(value => engine.includes(value))],
  ['Umbral de dominio 80%', engine.includes('rate(item) >= .8')],
  ['Ruta adaptativa', engine.includes('recommendationFor') && engine.includes('adaptive_recommendation_started')],
  ['Meta semanal', engine.includes('targetDays: 4') && engine.includes('targetMinutes: 60')],
  ['Panel familiar V25', engine.includes('v25-family-intelligence')],
  ['Gamificación V25', engine.includes('badgesFor') && engine.includes('level')],
  ['Fix login directo', engine.includes("route:'direct_home'")],
  ['Persistencia adaptiveProfile', cloud.includes('adaptiveProfile') && cloud.includes('curriculum_state')],
  ['Persistencia engagement', cloud.includes('engagement') && cloud.includes('curriculum_state')],
  ['Merge remoto no destructivo', cloud.includes('...remoteState')],
  ['Personaje NOVA', growth.includes('v25-nova-face') && growth.includes('characterMood')],
  ['Compartir avance', growth.includes('achievement_shared')],
  ['Compartir resumen semanal', growth.includes('weekly_summary_shared')],
  ['Analítica estado habilidad', analytics.includes("'skill_state_changed'")],
  ['Analítica recomendación', analytics.includes("'adaptive_recommendation_started'")],
  ['Analítica logros', analytics.includes("'badge_unlocked'")],
  ['Analítica familia', analytics.includes("'parent_summary_viewed'")],
  ['Analítica crecimiento', analytics.includes("'achievement_shared'") && analytics.includes("'weekly_summary_shared'")]
];

let failed = false;
console.log('\nNOVA V25 · integral release audit\n');
for (const [label, ok] of checks) {
  if (!ok) failed = true;
  console.log(`${ok ? '✓' : '✗'} ${label}`);
}

console.log('\nPrincipio: V25 agrega inteligencia sobre el progreso existente; no reemplaza ni destruye el historial V24.\n');
if (failed) process.exit(1);
