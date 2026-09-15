import fs from 'node:fs';
const root = new URL('../', import.meta.url);
const read = file => fs.readFileSync(new URL(file, root), 'utf8');
const pkg = JSON.parse(read('package.json'));
const loader = read('app.js');
const styles = read('styles.css');
const v26 = read('app-v26.js');
const css = read('styles-v26.css');
const analytics = read('api/analytics.js');
const checks = [
  ['Versión 26.0.0', pkg.version === '26.0.0'],
  ['Carga V26 después de V25 cloud', loader.includes("load('/app-v25-cloud.js', () => load('/app-v26.js'))")],
  ['Importa styles-v26', styles.includes("@import url('/styles-v26.css')")],
  ['Motor para 5 materias', ['math','language','science','social','english'].every(x => v26.includes(`${x}:{`) || v26.includes(`${x}: {`))],
  ['Escena curricular', v26.includes('v26GameScene') && v26.includes('curriculumGamePrompt')],
  ['Escena por tema', v26.includes('v26TopicScene')],
  ['Atlas narrativo', v26.includes('v26AtlasScene')],
  ['Academia visual', v26.includes('v26AcademyScene')],
  ['Cuaderno animado', v26.includes('v26NotebookMotion')],
  ['NOVA animado', v26.includes('v26TutorMotion')],
  ['Matemáticas adaptativas', ['Juntemos','¿Qué queda?','Grupos iguales','¿Repartimos?'].every(x => v26.includes(x))],
  ['Interacción Lenguaje', v26.includes('v26-words')],
  ['Interacción Ciencias', v26.includes('v26-phases')],
  ['Interacción Sociales', v26.includes('v26-stops')],
  ['Interacción Inglés', v26.includes('v26-room')],
  ['Reducción visual de texto', css.includes('v26-condensed') && css.includes('-webkit-line-clamp:2')],
  ['Reduced motion', css.includes('prefers-reduced-motion:reduce')],
  ['Analítica narrativa', analytics.includes("'narrative_scene_viewed'") && analytics.includes("'visual_narrative_enabled'")]
];
let failed=false;
console.log('\nNOVA V26 · visual narrative audit\n');
for(const [name,ok] of checks){console.log(`${ok?'✓':'✗'} ${name}`);if(!ok)failed=true;}
if(failed)process.exit(1);
