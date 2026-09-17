import fs from 'node:fs';
const root = new URL('../', import.meta.url);
const read = file => fs.readFileSync(new URL(file, root), 'utf8');
const pkg = JSON.parse(read('package.json'));
const loader = read('app.js');
const styles = read('styles.css');
const v27 = read('app-v27.js');
const css = read('styles-v27.css');
const requiredSkills = ['spatial','place-value','fractions','division','multiplication','addition','subtraction','patterns','measurement','geometry','data','story-order','grammar','phonics','reading-clues','argument','life-cycle','ecosystem','materials','force-energy','weather','body','solar','experiment','map-route','timeline','choices','community','english-room','english-action','greetings','english-match'];
const checks = [
  ['Versión 27.0.0', pkg.version === '27.0.0'],
  ['Carga V27 directamente después de V25 cloud', loader.includes("load('/app-v25-cloud.js', () => load('/app-v27.js'))")],
  ['V26 queda disponible para rollback pero no se ejecuta en V27', !loader.includes("load('/app-v26.js'") && fs.existsSync(new URL('app-v26.js', root))],
  ['Preload de capas críticas', loader.includes("link.rel = 'preload'") && loader.includes("'/app-v27.js'")],
  ['Analytics no bloquea el arranque', loader.includes("load('/analytics-client.js', null, true)")],
  ['Timeout legado limitado a ~2 s', loader.includes('attempts > 20')],
  ['Importa styles-v27', styles.includes("@import url('/styles-v27.css')")],
  ['No parsea styles-v26 en V27', !styles.includes("@import url('/styles-v26.css')")],
  ['Modelo visual-first', v27.includes("novaLearningModel='visual-first'")],
  ['Clasificación por habilidad, no solo materia', requiredSkills.every(skill => v27.includes(`'${skill}'`))],
  ['Escena específica de ubicación', v27.includes('spatialScene') && v27.includes('DENTRO') && v27.includes('IZQUIERDA')],
  ['Escena de valor posicional', v27.includes('placeValueScene') && v27.includes("['UM', 'C', 'D', 'U']")],
  ['Escenas narrativas matemáticas', ['groupMathScene','fractionScene','patternScene','measurementScene','geometryScene','dataScene'].every(x=>v27.includes(x))],
  ['Escenas de Lenguaje', ['storyOrderScene','grammarScene','phonicsScene','readingCluesScene','argumentScene'].every(x=>v27.includes(x))],
  ['Escenas de Ciencias', ['processScienceScene','ecosystemScene','materialsScene','forceScene'].every(x=>v27.includes(x))],
  ['Escenas de Sociales', ['mapScene','timelineScene','choicesScene','communityScene'].every(x=>v27.includes(x))],
  ['Escenas de Inglés', ['englishRoomScene','englishActionScene','greetingsScene','englishMatchScene'].every(x=>v27.includes(x))],
  ['Secuencia acción-consecuencia-concepto', v27.includes('finish(scene') && v27.includes('flash(scene') && v27.includes('setBeat(scene')],
  ['Texto infantil reducido', css.includes('#curriculumTopicGoal') && css.includes('.topic-focus-card') && css.includes('-webkit-line-clamp:2')],
  ['Movimiento abundante', (css.match(/@keyframes/g)||[]).length >= 20],
  ['Reduced motion preservado', css.includes('prefers-reduced-motion:reduce')],
  ['Analítica conserva eventos narrativos', v27.includes("track('narrative_scene_viewed'") && v27.includes("track('visual_narrative_enabled'")]
];
let failed=false;
console.log('\nNOVA V27 · visual-first audit\n');
for(const [name,ok] of checks){console.log(`${ok?'✓':'✗'} ${name}`);if(!ok)failed=true;}
if(failed)process.exit(1);
