import fs from 'node:fs';
const root = new URL('../', import.meta.url);
const read = file => fs.readFileSync(new URL(file, root), 'utf8');
const pkg = JSON.parse(read('package.json'));
const loader = read('app.js');
const styles = read('styles.css');
const core = read('app-v27-core.js');
const math = read('app-v27-math.js');
const language = read('app-v27-language.js');
const science = read('app-v27-science.js');
const social = read('app-v27-social.js');
const english = read('app-v27-english.js');
const css = ['core','math','language','science','social','english','motion'].map(x=>read(`styles-v27-${x}.css`)).join('\n');
const analytics = read('api/analytics.js');
const checks = [
  ['Versión 27.0.0', pkg.version === '27.0.0'],
  ['Carga V27 modular después de V26', loader.includes("load('/app-v26.js'") && loader.includes("load('/app-v27-core.js'") && loader.includes("load('/app-v27-boot.js')")],
  ['Importa styles-v27', styles.includes("@import url('/styles-v27.css')")],
  ['Clasifica por habilidad cognitiva', core.includes('EXPERIENCE_RULES') && core.includes("['spatial'") && core.includes("['place-value'")],
  ['Sin fallback de recta numérica genérica', !math.includes('numberline') && !math.includes('Toca un número y observa su posición')],
  ['Ubicación enseña con historia espacial', math.includes('Pon a Luma dentro de la cueva') && core.includes('makeDraggable')],
  ['Matemáticas visuales profundas', ['renderPlaceValue','renderMultiply','renderShare','renderFraction','renderMeasure','renderData'].every(x=>math.includes(x))],
  ['Lenguaje visual', ['renderWordForge','renderSentenceStage','renderStorySequence','renderReadingClues','renderEvidence'].every(x=>language.includes(x))],
  ['Ciencias de causa y efecto', ['renderSenses','renderLifeCycle','renderEcosystem','renderMatter','renderEnergy','renderSolar','renderExperiment'].every(x=>science.includes(x))],
  ['Sociales situacionales', ['renderCommunity','renderRules','renderMap','renderTimeline','renderEconomy','renderDigital'].every(x=>social.includes(x))],
  ['Inglés visual + audio', ['renderEnglishRoom','renderEnglishRoutine','renderEnglishDirection','renderEnglishCompare'].every(x=>english.includes(x)) && core.includes('SpeechSynthesisUtterance')],
  ['Texto infantil reducido', css.includes('v27-minimal-topic') && css.includes('display:none!important') && css.includes('-webkit-line-clamp:2')],
  ['Escenas inmersivas grandes', css.includes('min-height:330px')],
  ['Reduced motion', css.includes('prefers-reduced-motion:reduce')],
  ['Analítica V27', ['immersive_learning_enabled','immersive_scene_viewed','immersive_interaction'].every(x=>analytics.includes(`'${x}'`))]
];
let failed=false;
console.log('\nNOVA V27 · immersive visual learning audit\n');
for(const [name,ok] of checks){console.log(`${ok?'✓':'✗'} ${name}`);if(!ok)failed=true;}
if(failed)process.exit(1);
