(() => {
  const VERSION = '27.1-coherence';
  const q = (s, r = document) => r?.querySelector?.(s) || null;
  const qa = (s, r = document) => [...(r?.querySelectorAll?.(s) || [])];
  const norm = (v = '') => String(v).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
  const esc = (v = '') => String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const state = { signature: '' };

  function cleanQuestion(value = '') {
    return String(value)
      .replace(/^\s*Un compañero respondió\s*[“\"][^”\"]+[”\"]\.\s*Ayúdalo a corregir el reto:\s*/i, '')
      .replace(/^\s*Reto final\s*·\s*sin pista:\s*/i, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function subjectFrom(kicker = '') {
    const s = norm(kicker);
    if (s.includes('lenguaje')) return 'language';
    if (s.includes('ciencia')) return 'science';
    if (s.includes('social')) return 'social';
    if (s.includes('ingles') || s.includes('english')) return 'english';
    return 'math';
  }

  function context(modal) {
    const rawPrompt = String(q('#curriculumGamePrompt', modal)?.textContent || '').trim();
    const prompt = cleanQuestion(rawPrompt);
    const options = qa('#curriculumGameOptions .curriculum-game-option strong, #curriculumGameOptions button strong', modal)
      .map(el => String(el.textContent || '').trim()).filter(Boolean);
    const kicker = String(q('#curriculumGameKicker', modal)?.textContent || '').trim();
    const title = String(q('#curriculumGameTitle', modal)?.textContent || '').trim();
    return { rawPrompt, prompt, n: norm(prompt), options, kicker, title, subject: subjectFrom(kicker) };
  }

  const quoted = s => [...String(s).matchAll(/[“\"]([^”\"]+)[”\"]/g)].map(m => m[1]);
  const numbers = s => (String(s).match(/\d+(?:[.,]\d+)?/g) || []).map(x => Number(x.replace(/\./g, '').replace(',', '.'))).filter(Number.isFinite);

  function classify(c) {
    const s = c.n;
    if (/menor a mayor|orden ascendente/.test(s)) return 'order-asc';
    if (/mayor a menor|orden descendente/.test(s)) return 'order-desc';
    if (/cual.*mayor|numero mayor|mas grande|que pesa mas|que dura mas|mayor capacidad/.test(s)) return 'compare-max';
    if (/cual.*menor|numero menor|mas pequeno/.test(s)) return 'compare-min';
    if (/con que sonido empieza|empieza con el sonido|sonido inicial/.test(s)) return 'initial-sound';
    if (/palabra empieza igual que|empieza igual que/.test(s)) return 'same-sound';
    if (/cuantas silabas/.test(s)) return 'syllables';
    if (/completa:.*_|_\w+.*formar|letra.*completa/.test(s)) return 'missing-letter';
    if (/que numero viene despues|numero anterior|esta entre/.test(s)) return 'number-neighbor';
    if (/decena|centena|unidad|millares|valor posicional|descompos/.test(s)) return 'place-value';
    if (/\d+\s*[+−\-×÷]\s*\d+|cuantos.*tienes|cuantos.*quedan|entre los dos|reparte.*grupos|cajas con .* cada/.test(s)) return 'arithmetic';
    if (/que operacion|que haces\?|operacion usar/.test(s)) return 'choose-operation';
    if (/completa:.*[,…]|cual sigue|patron|secuencia aumenta|secuencia baja/.test(s)) return 'pattern';
    if (/figura|lados|angulo|triangulo|cuadrado|rectangulo|circulo|perimetro|area|volumen/.test(s)) return 'geometry';
    if (/arriba|abajo|dentro|fuera|izquierda|derecha|sobre la mesa|al lado/.test(s)) return 'spatial';
    if (/medir|longitud|pesa|capacidad|hora|minuto|kilogram|gramo|litro|centimet|metro|dinero|moneda/.test(s)) return 'measurement';
    if (/fraccion|mitad|tercio|cuarto|numerador|denominador|\d+\/\d+/.test(s)) return 'fraction';
    if (/grafica|tabla dice|pictograma|datos:|moda|media|mediana|probabilidad|votos/.test(s)) return 'data';

    if (c.subject === 'language') {
      if (/quien |que hace|que cocina|respuesta aparece|lee:/.test(s)) return 'reading-explicit';
      if (/idea principal|idea central|resumen|detalle.*esencial/.test(s)) return 'main-idea';
      if (/inferir|podemos inferir|pistas del texto/.test(s)) return 'inference';
      if (/primero|luego|finalmente|orden logico|conector.*final|inicio/.test(s)) return 'story-sequence';
      if (/verbo|sustantivo|adjetivo|pronombre|conector|oracion.*clara|gramatica/.test(s)) return 'grammar';
      if (/bien escrita|mayuscula|punto|signo|coma|separada correctamente|revisar un texto/.test(s)) return 'editing';
      if (/opinion|evidencia|fuente|noticia|disentir|argument|escuchar bien/.test(s)) return 'evidence';
      if (/texto.*narrativo|texto.*informativo|antes de escribir|narracion|describir/.test(s)) return 'text-type';
      if (/pausa|leer con sentido|fluidez/.test(s)) return 'fluency';
      return 'neutral-language';
    }

    if (c.subject === 'science') {
      if (/sentido|escuchar|ver\?|organo|esqueleto|cuerpo|circulatorio|respiratorio|pulmon|corazon|hueso/.test(s)) return 'body';
      if (/ser vivo|habitat|ecosistema|cadena aliment|productor|biodiversidad|especie/.test(s)) return 'ecosystem';
      if (/solido|liquido|gas|material|mezcla|derretir|tamiz|estado fisico/.test(s)) return 'matter';
      if (/sonido.*produce|vibracion/.test(s)) return 'vibration';
      if (/fuerza|movimiento|maquina simple|energia/.test(s)) return 'force';
      if (/circuito|bombillo|corriente|electric/.test(s)) return 'circuit';
      if (/hipotesis|experimento|variable|datos sirven|conclusion cientifica|investig/.test(s)) return 'experiment';
      if (/clima|lluvia|viento|nube|dia|noche|tierra|luna|solar|agua/.test(s)) return 'earth-cycle';
      if (/cuidar|reciclar|responsable|equilibrado/.test(s)) return 'environment';
      return 'neutral-science';
    }

    if (c.subject === 'social') {
      if (/comunidad|colegio|barrio|espacio publico|participar|familia/.test(s)) return 'community';
      if (/derecho|responsabilidad|norma|acuerdo|democracia|constitucion|convivencia/.test(s)) return 'civics';
      if (/mapa|croquis|ruta|territorio|region|direccion|coordenada/.test(s)) return 'map';
      if (/antes|despues|pasado|presente|historia|linea de tiempo/.test(s)) return 'timeline';
      return 'neutral-social';
    }

    if (c.subject === 'english') {
      if (/how do you say/.test(s)) return 'translation';
      if (/hello|goodbye|good morning|thank you|you.re welcome|polite|please/.test(s)) return 'greeting';
      if (/what number|what color|number is|color is/.test(s)) return 'english-match';
      if (/complete:|___|\b am\b|\b is\b|\b are\b|present simple|goes|eat /.test(s)) return 'english-fill';
      if (/do you like|likes|preference/.test(s)) return 'preference';
      if (/direction|left|right|straight|turn/.test(s)) return 'english-route';
      return 'neutral-english';
    }
    return 'neutral-math';
  }

  function ensureStyles() {
    if (q('#v27CoherenceStyles')) return;
    const style = document.createElement('style');
    style.id = 'v27CoherenceStyles';
    style.textContent = `
      .v27-coh{height:100%;min-height:280px;display:grid;place-items:center;position:relative;overflow:hidden;padding:24px;background:linear-gradient(180deg,#edf8ff 0 54%,#e1f2d8 54%)}
      .v27-coh-center{display:grid;place-items:center;gap:12px;z-index:2;text-align:center;max-width:92%}.v27-coh-big{font-size:clamp(2rem,6vw,4.6rem);font-weight:1000;color:#302a51;letter-spacing:-.05em}.v27-coh-word{font-size:clamp(1.7rem,5vw,3.6rem);font-weight:1000;color:#2e2948}.v27-coh-word .focus{color:#5b4bff;display:inline-block;animation:v27CohPulse 1.15s ease-in-out infinite}
      .v27-coh-mouth{font-size:3.2rem;animation:v27CohTalk .75s ease-in-out infinite}.v27-coh-wave{display:flex;gap:6px;align-items:center;height:34px}.v27-coh-wave i{display:block;width:6px;border-radius:9px;background:#6655ff;animation:v27CohWave .8s ease-in-out infinite}.v27-coh-wave i:nth-child(2){animation-delay:.12s}.v27-coh-wave i:nth-child(3){animation-delay:.24s}.v27-coh-wave i:nth-child(4){animation-delay:.36s}
      .v27-coh-options{display:flex;gap:9px;flex-wrap:wrap;justify-content:center;max-width:760px}.v27-coh-pill{border:0;background:#fff;border-radius:16px;padding:11px 16px;min-width:58px;font:inherit;font-weight:900;color:#302a51;box-shadow:0 7px 20px rgba(45,38,95,.11);transition:.25s}.v27-coh-pill:hover,.v27-coh-pill:focus-visible{transform:translateY(-5px);outline:3px solid rgba(91,75,255,.17)}.v27-coh-pill.good{background:#ecfff3;box-shadow:0 0 0 3px #5bd58b}.v27-coh-pill.bad{animation:v27CohShake .3s ease}
      .v27-coh-row{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap}.v27-coh-card{background:#fff;border-radius:20px;padding:16px 18px;min-width:100px;box-shadow:0 8px 24px rgba(42,37,79,.11);font-weight:1000;font-size:1.25rem;transition:.3s}.v27-coh-card.used{opacity:.22;transform:translateY(-55px) scale(.82)}.v27-coh-slots{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}.v27-coh-slot{width:112px;min-height:74px;border:2px dashed #aaa1df;border-radius:18px;display:grid;place-items:center;background:rgba(255,255,255,.58);font-weight:900}.v27-coh-slot.filled{border-style:solid;background:#fff;border-color:#6655ff}.v27-coh-arrow{font-size:2rem;animation:v27CohArrow 1.3s ease-in-out infinite}.v27-coh-emoji{font-size:4.2rem;animation:v27CohFloat 2s ease-in-out infinite}.v27-coh-caption{font-size:.85rem;font-weight:900;color:#615a7c;max-width:570px}.v27-coh-neutral .v27-coh-options{margin-top:8px}.v27-coh-neutral .v27-coh-pill{animation:v27CohEnter .45s both}.v27-coh-neutral .v27-coh-pill:nth-child(2){animation-delay:.07s}.v27-coh-neutral .v27-coh-pill:nth-child(3){animation-delay:.14s}.v27-coh-neutral .v27-coh-pill:nth-child(4){animation-delay:.21s}
      @keyframes v27CohPulse{50%{transform:scale(1.16);text-shadow:0 0 18px rgba(91,75,255,.3)}}@keyframes v27CohTalk{50%{transform:scaleY(.78)}}@keyframes v27CohWave{0%,100%{height:8px}50%{height:31px}}@keyframes v27CohShake{25%{transform:translateX(-7px)}75%{transform:translateX(7px)}}@keyframes v27CohArrow{50%{transform:translateX(8px)}}@keyframes v27CohFloat{50%{transform:translateY(-8px)}}@keyframes v27CohEnter{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
      @media(max-width:620px){.v27-coh{min-height:250px;padding:16px}.v27-coh-card{min-width:78px;padding:12px}.v27-coh-slot{width:88px}.v27-coh-pill{padding:9px 12px}}
      @media(prefers-reduced-motion:reduce){.v27-coh *{animation:none!important;transition:none!important}}
    `;
    document.head.appendChild(style);
  }

  function setCommand(scene, text) { const el = q('.v27-command', scene); if (el) el.textContent = text; }
  function setWorld(scene, html, cls = '') { const w = q('.v27-world', scene); if (!w) return null; w.className = `v27-world ${cls}`.trim(); w.innerHTML = html; return w; }
  function pillOptions(c) { return c.options.slice(0, 6).map((o,i)=>`<button type="button" class="v27-coh-pill" data-i="${i}" data-value="${esc(o)}">${esc(o)}</button>`).join(''); }
  function mark(scene, label) { scene.dataset.v27Coherent = 'true'; scene.dataset.v27Intent = label; scene.dataset.v27Skill = label; }
  function pulseWrong(btn){btn.classList.remove('bad');void btn.offsetWidth;btn.classList.add('bad');}

  function renderInitialSound(scene, c) {
    const word = quoted(c.prompt)[0] || 'palabra'; const first = norm(word).charAt(0); const rest = word.slice(1);
    setCommand(scene, `Escucha el inicio de “${word}”`); mark(scene,'initial-sound');
    const w = setWorld(scene, `<div class="v27-coh"><div class="v27-coh-center"><div class="v27-coh-mouth">👄</div><div class="v27-coh-wave"><i></i><i></i><i></i><i></i></div><div class="v27-coh-word"><span class="focus">?</span>${esc(rest)}</div><div class="v27-coh-options">${pillOptions(c)}</div><div class="v27-coh-caption">Escucha el primer sonido. No mires otra cosa.</div></div></div>`);
    qa('.v27-coh-pill', w).forEach(btn => btn.onclick = () => { const val = norm(btn.dataset.value); if (val.charAt(0) === first && val.length <= 2) { btn.classList.add('good'); q('.v27-coh-word .focus',w).textContent = word.charAt(0).toUpperCase(); setCommand(scene, `${word.charAt(0).toLowerCase()}… ${word}`); } else pulseWrong(btn); });
  }

  function renderSameSound(scene,c){
    const source = quoted(c.prompt)[0] || ''; const first = norm(source).charAt(0);
    setCommand(scene, `Busca otra palabra que empiece como “${source}”`); mark(scene,'same-sound');
    const w=setWorld(scene,`<div class="v27-coh"><div class="v27-coh-center"><div class="v27-coh-word"><span class="focus">${esc(source.charAt(0).toUpperCase())}</span>${esc(source.slice(1))}</div><div class="v27-coh-arrow">↓</div><div class="v27-coh-options">${pillOptions(c)}</div></div></div>`);
    qa('.v27-coh-pill',w).forEach(btn=>btn.onclick=()=>{if(norm(btn.dataset.value).charAt(0)===first)btn.classList.add('good');else pulseWrong(btn)});
  }

  function renderSyllables(scene,c){
    const word=quoted(c.prompt)[0]||'palabra'; setCommand(scene,`Da una palmada por cada parte de “${word}”`); mark(scene,'syllables');
    const w=setWorld(scene,`<div class="v27-coh"><div class="v27-coh-center"><div class="v27-coh-word">${esc(word)}</div><div class="v27-coh-row"><span class="v27-coh-emoji">👏</span><span class="v27-coh-emoji" style="animation-delay:.35s">👏</span></div><div class="v27-coh-options">${pillOptions(c)}</div></div></div>`);
    qa('.v27-coh-pill',w).forEach(btn=>btn.onclick=()=>btn.classList.toggle('good'));
  }

  function renderMissingLetter(scene,c){
    const complete=quoted(c.prompt).at(-1)||''; const first=complete.charAt(0).toUpperCase(); const blank=(c.prompt.match(/\b_\w+/)||['_ato'])[0];
    setCommand(scene,'Completa la palabra'); mark(scene,'missing-letter');
    const w=setWorld(scene,`<div class="v27-coh"><div class="v27-coh-center"><div class="v27-coh-word">${esc(blank)}</div><div class="v27-coh-options">${pillOptions(c)}</div></div></div>`);
    qa('.v27-coh-pill',w).forEach(btn=>btn.onclick=()=>{if(norm(btn.dataset.value)===norm(first)){btn.classList.add('good');q('.v27-coh-word',w).textContent=complete||first+blank.slice(1)}else pulseWrong(btn)});
  }

  function renderOrder(scene,c,dir){
    const vals=[]; c.options.forEach(o=>numbers(o).forEach(n=>{if(!vals.includes(n))vals.push(n)})); if(vals.length<2)return renderNeutral(scene,c,'Orden y comparación');
    const target=[...vals].sort((a,b)=>dir==='asc'?a-b:b-a).slice(0,5); const cards=[...target].reverse(); let step=0;
    setCommand(scene,dir==='asc'?'Del menor al mayor':'Del mayor al menor'); mark(scene,dir==='asc'?'order-asc':'order-desc');
    const w=setWorld(scene,`<div class="v27-coh"><div class="v27-coh-center"><div class="v27-coh-slots">${target.map((_,i)=>`<div class="v27-coh-slot" data-i="${i}">${i+1}</div>`).join('')}</div><div class="v27-coh-row">${cards.map(v=>`<button class="v27-coh-card" data-v="${v}">${v.toLocaleString('es-CO')}</button>`).join('')}</div></div></div>`);
    qa('.v27-coh-card',w).forEach(btn=>btn.onclick=()=>{const v=Number(btn.dataset.v);if(v!==target[step])return pulseWrong(btn);const slot=q(`.v27-coh-slot[data-i="${step}"]`,w);slot.textContent=v.toLocaleString('es-CO');slot.classList.add('filled');btn.classList.add('used');step++;});
  }

  function renderCompare(scene,c,wantMax){
    const vals=[];c.options.forEach(o=>numbers(o).forEach(n=>{if(!vals.includes(n))vals.push(n)}));if(vals.length<2)return renderNeutral(scene,c,'Comparar');const target=wantMax?Math.max(...vals):Math.min(...vals);
    setCommand(scene,wantMax?'Encuentra el mayor':'Encuentra el menor');mark(scene,wantMax?'compare-max':'compare-min');const w=setWorld(scene,`<div class="v27-coh"><div class="v27-coh-center"><div class="v27-coh-row">${vals.slice(0,6).map(v=>`<button class="v27-coh-card" data-v="${v}">${v.toLocaleString('es-CO')}</button>`).join('')}</div><div class="v27-coh-caption">Compara de izquierda a derecha.</div></div></div>`);qa('.v27-coh-card',w).forEach(btn=>btn.onclick=()=>{if(Number(btn.dataset.v)===target)btn.classList.add('good');else pulseWrong(btn)});
  }

  function renderEquation(scene,c){
    const match=c.prompt.match(/(\d+(?:[.,]\d+)?)\s*([+−\-×÷])\s*(\d+(?:[.,]\d+)?)/);const icon=match?.[2]==='+'?'➕':/−|-/.test(match?.[2]||'')?'➖':match?.[2]==='×'?'✖️':match?.[2]==='÷'?'➗':'🧮';
    setCommand(scene,'Haz que la operación ocurra');mark(scene,'arithmetic');setWorld(scene,`<div class="v27-coh"><div class="v27-coh-center"><div class="v27-coh-emoji">${icon}</div><div class="v27-coh-big">${esc(match?`${match[1]} ${match[2]} ${match[3]}`:c.prompt)}</div><div class="v27-coh-options">${pillOptions(c)}</div></div></div>`);
  }

  function renderPattern(scene,c){setCommand(scene,'Descubre qué se repite o cambia');mark(scene,'pattern');setWorld(scene,`<div class="v27-coh"><div class="v27-coh-center"><div class="v27-coh-big">${esc(c.prompt.replace(/^Completa:\s*/i,''))}</div><div class="v27-coh-arrow">→</div><div class="v27-coh-options">${pillOptions(c)}</div></div></div>`)}
  function renderGeometry(scene,c){const map={triangulo:'🔺',cuadrado:'🟪',circulo:'🟣',rectangulo:'▭',ovalo:'⬭'};const opts=c.options.map(o=>map[norm(o)]||o);setCommand(scene,'Mira la propiedad que pregunta el reto');mark(scene,'geometry');setWorld(scene,`<div class="v27-coh"><div class="v27-coh-center"><div class="v27-coh-options">${opts.map((o,i)=>`<span class="v27-coh-card" style="font-size:2.2rem" title="${esc(c.options[i])}">${esc(o)}</span>`).join('')}</div><div class="v27-coh-caption">${esc(c.prompt)}</div></div></div>`)}
  function renderSpatial(scene,c){setCommand(scene,'Ubica el objeto como dice la pregunta');mark(scene,'spatial');setWorld(scene,`<div class="v27-coh"><div class="v27-coh-center"><div class="v27-coh-row"><span class="v27-coh-emoji">📘</span><span class="v27-coh-emoji">🪑</span></div><div class="v27-coh-caption">${esc(c.prompt)}</div><div class="v27-coh-options">${pillOptions(c)}</div></div></div>`)}
  function renderBody(scene,c){const s=c.n;const em=/escuchar|oido/.test(s)?'👂':/ver|ojos|vista/.test(s)?'👀':/esqueleto|hueso/.test(s)?'🦴':/circulator|corazon/.test(s)?'❤️':/respir|pulmon/.test(s)?'🫁':'🧍';setCommand(scene,'Relaciona la función con la parte del cuerpo');mark(scene,'body');setWorld(scene,`<div class="v27-coh"><div class="v27-coh-center"><div class="v27-coh-emoji">${em}</div><div class="v27-coh-options">${pillOptions(c)}</div></div></div>`)}
  function renderProcess(scene,c,kind){const icons=kind==='ecosystem'?['☀️','🌿','🐛','🐦']:kind==='matter'?['🧊','💧','♨️']:kind==='vibration'?['🔊','〰️','👂']:kind==='circuit'?['🔋','➰','💡']:kind==='force'?['✋','⚽','➡️']:kind==='earth-cycle'?['☀️','💧','☁️','🌧️']:kind==='experiment'?['❓','🧪','📊','💡']:['🌱','♻️','🌎'];setCommand(scene,'Observa la relación que pregunta el reto');mark(scene,kind);setWorld(scene,`<div class="v27-coh"><div class="v27-coh-center"><div class="v27-coh-row">${icons.map((x,i)=>`<span class="v27-coh-emoji" style="animation-delay:${i*.16}s">${x}</span>${i<icons.length-1?'<span class="v27-coh-arrow">→</span>':''}`).join('')}</div><div class="v27-coh-options">${pillOptions(c)}</div></div></div>`)}
  function renderCommunity(scene,c,kind){const icons=kind==='civics'?['🙋','📜','🤝']:kind==='map'?['📍','🛣️','🏁']:kind==='timeline'?['🕰️','➡️','📅']:['🏠','🏫','🌳','🤝'];setCommand(scene,'Conecta la situación con la idea correcta');mark(scene,kind);setWorld(scene,`<div class="v27-coh"><div class="v27-coh-center"><div class="v27-coh-row">${icons.map(x=>`<span class="v27-coh-emoji">${x}</span>`).join('')}</div><div class="v27-coh-options">${pillOptions(c)}</div></div></div>`)}
  function renderEnglish(scene,c,kind){const icon=kind==='greeting'?'👋':kind==='translation'?'🌐':kind==='preference'?'❤️':kind==='english-route'?'🧭':'💬';setCommand(scene,kind==='translation'?'Une significado y palabra':'Mira la situación y completa');mark(scene,kind);setWorld(scene,`<div class="v27-coh"><div class="v27-coh-center"><div class="v27-coh-emoji">${icon}</div><div class="v27-coh-word">${esc(c.prompt)}</div><div class="v27-coh-options">${pillOptions(c)}</div></div></div>`)}
  function renderLanguageConcept(scene,c,kind){const icon=kind==='story-sequence'?'🧩':kind==='grammar'?'✍️':kind==='editing'?'✏️':kind==='evidence'?'🔎':kind==='inference'?'🕵️':kind==='main-idea'?'💡':kind==='fluency'?'📖':'📝';setCommand(scene,'Usa solo las pistas de esta pregunta');mark(scene,kind);setWorld(scene,`<div class="v27-coh"><div class="v27-coh-center"><div class="v27-coh-emoji">${icon}</div><div class="v27-coh-caption">${esc(c.prompt)}</div><div class="v27-coh-options">${pillOptions(c)}</div></div></div>`)}

  function renderNeutral(scene,c,label='Este reto'){
    setCommand(scene,'Mira la pregunta y compara sus opciones');mark(scene,'neutral-coherent');setWorld(scene,`<div class="v27-coh v27-coh-neutral"><div class="v27-coh-center"><div class="v27-coh-caption">${esc(c.prompt)}</div><div class="v27-coh-options">${pillOptions(c)}</div><div class="v27-coh-caption">${esc(label)} · Sin elementos ajenos al concepto</div></div></div>`);
  }

  function render(scene,c,type){
    if(type==='initial-sound')return renderInitialSound(scene,c);if(type==='same-sound')return renderSameSound(scene,c);if(type==='syllables')return renderSyllables(scene,c);if(type==='missing-letter')return renderMissingLetter(scene,c);
    if(type==='order-asc')return renderOrder(scene,c,'asc');if(type==='order-desc')return renderOrder(scene,c,'desc');if(type==='compare-max')return renderCompare(scene,c,true);if(type==='compare-min')return renderCompare(scene,c,false);
    if(type==='arithmetic')return renderEquation(scene,c);if(type==='pattern')return renderPattern(scene,c);if(type==='geometry')return renderGeometry(scene,c);if(type==='spatial')return renderSpatial(scene,c);
    if(['body'].includes(type))return renderBody(scene,c);if(['ecosystem','matter','vibration','force','circuit','experiment','earth-cycle','environment'].includes(type))return renderProcess(scene,c,type);
    if(['community','civics','map','timeline'].includes(type))return renderCommunity(scene,c,type);if(['translation','greeting','english-match','english-fill','preference','english-route'].includes(type))return renderEnglish(scene,c,type);
    if(['reading-explicit','main-idea','inference','story-sequence','grammar','editing','evidence','text-type','fluency'].includes(type))return renderLanguageConcept(scene,c,type);
    return renderNeutral(scene,c,type.replace(/^neutral-/,'')||'Reto');
  }

  function sync(){
    const modal=q('#curriculumGameModal');if(!modal||modal.hidden||!modal.getClientRects().length)return;
    const c=context(modal);if(!c.prompt)return;const type=classify(c);const signature=`${c.kicker}|${c.title}|${c.prompt}|${c.options.join('|')}|${type}`;if(signature===state.signature)return;
    const scene=q('#v27GameStory .v27-story',modal);if(!scene)return;ensureStyles();state.signature=signature;render(scene,c,type);
    document.documentElement.dataset.novaCoherenceVersion=VERSION;
    window.dispatchEvent(new CustomEvent('nova:v27:coherence',{detail:{type,subject:c.subject,prompt:c.prompt}}));
  }

  function init(){sync();new MutationObserver(()=>requestAnimationFrame(sync)).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['hidden','class']});window.NOVAQuestionIntent={version:VERSION,sync,classify,context,cleanQuestion};}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(init,0),{once:true});else setTimeout(init,0);
})();
