(() => {
  const VERSION = '27.0';
  const q = (s, r = document) => r?.querySelector?.(s) || null;
  const qa = (s, r = document) => [...(r?.querySelectorAll?.(s) || [])];
  const txt = (s, r = document) => String(q(s, r)?.textContent || '').replace(/\s+/g, ' ').trim();
  const norm = (v = '') => String(v).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const esc = (v = '') => String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const visible = el => Boolean(el && !el.hidden && el.getClientRects().length);
  const track = (event, properties = {}) => window.NOVAAnalytics?.track?.(event, { version: VERSION, ...properties }, 'app');
  const short = (v, n = 52) => { const s = String(v || '').replace(/\s+/g, ' ').trim(); return s.length > n ? `${s.slice(0, n - 1).trim()}…` : s; };
  const nums = value => (String(value || '').match(/\d+(?:[.,]\d+)?/g) || []).map(x => Number(x.replace(/\./g, '').replace(',', '.'))).filter(Number.isFinite);

  const SUBJECTS = {
    math: { icon: '✦', world: 'Taller NOVA' },
    language: { icon: '📖', world: 'Biblioteca NOVA' },
    science: { icon: '🔬', world: 'Laboratorio NOVA' },
    social: { icon: '🗺️', world: 'Ciudad NOVA' },
    english: { icon: '💬', world: 'NOVA House' }
  };

  const state = { game: '', topic: '', home: false, tutor: false };

  function subjectFrom(value = '') {
    const s = norm(value);
    if (/lenguaje|lectura|escrit|oracion|palabra|texto|gramatica|ortografia/.test(s)) return 'language';
    if (/ciencia|animal|planta|agua|materia|energia|cuerpo|ecosistema|celula|tierra|solar/.test(s)) return 'science';
    if (/social|historia|geograf|comunidad|colombia|mapa|territorio|ciudadania|democracia/.test(s)) return 'social';
    if (/ingles|english|vocab|word|sentence|present|past|future|comparative/.test(s)) return 'english';
    return 'math';
  }

  function contextFor(root = document) {
    const title = txt('#curriculumGameTitle', root) || txt('#curriculumTopicTitle') || txt('#curriculumSubjectTitle');
    const prompt = txt('#curriculumGamePrompt', root);
    const goal = txt('#curriculumTopicGoal') || txt('.topic-focus-card p');
    const realWorld = txt('#curriculumTopicRealWorld');
    const skill = txt('#curriculumTopicSkill');
    const kicker = txt('#curriculumGameKicker', root) || txt('#curriculumTopicKicker') || txt('#curriculumSubjectKicker');
    const raw = [kicker, title, goal, realWorld, skill, prompt].join(' · ');
    return { title, prompt, goal, realWorld, skill, kicker, raw, n: norm(raw), subject: subjectFrom(raw) };
  }

  function skillFrom(ctx) {
    const s = ctx.n;
    if (/figura|ubicacion|arriba|abajo|dentro|fuera|izquierda|derecha|orientacion espacial/.test(s)) return 'spatial';
    if (/valor posicional|descompon|unidad|decena|centena|millares|cifras/.test(s)) return 'place-value';
    if (/fraccion|mitad|tercio|cuarto|equivalent/.test(s)) return 'fractions';
    if (/division|dividir|repart|cociente|residuo|grupos iguales/.test(s)) return 'division';
    if (/multiplic|veces|tabla|arreglo|grupos de/.test(s)) return 'multiplication';
    if (/sumar|suma|adicion|juntar|agregar/.test(s)) return 'addition';
    if (/restar|resta|quitar|diferencia|falta/.test(s)) return 'subtraction';
    if (/patron|secuencia|continua|repite/.test(s)) return 'patterns';
    if (/medir|medida|longitud|peso|capacidad|perimetro|area|volumen|hora|tiempo|dinero/.test(s)) return 'measurement';
    if (/geometr|angulo|simetr|forma/.test(s)) return 'geometry';
    if (/dato|grafico|tabla|estadistica|probabilidad|promedio/.test(s)) return 'data';
    if (/sonido|letra|silaba|fonema/.test(s)) return 'phonics';
    if (/primero|despues|final|secuencia|narrar|historia/.test(s) && ctx.subject === 'language') return 'story-order';
    if (/sustant|verbo|adjet|pronombre|conector|gramatica|oracion/.test(s)) return 'grammar';
    if (/infer|idea principal|comprension|detalle|leer|lectura|texto/.test(s) && ctx.subject === 'language') return 'reading-clues';
    if (/argument|opinion|evidencia|razon/.test(s)) return 'argument';
    if (/ciclo|etapa|crecimiento|vida/.test(s) && ctx.subject === 'science') return 'life-cycle';
    if (/habitat|ecosistema|cadena aliment|productor|consumidor|ambiente/.test(s)) return 'ecosystem';
    if (/material|solido|liquido|mezcla|temperatura|cambio fisico|separacion/.test(s)) return 'materials';
    if (/luz|sonido|fuerza|movimiento|energia|electric|maquina/.test(s)) return 'force-energy';
    if (/clima|lluvia|viento|nube|atmosfer|agua/.test(s) && ctx.subject === 'science') return 'weather';
    if (/cuerpo|sentido|organo|sistema|celula/.test(s)) return 'body';
    if (/solar|tierra|luna|universo|dia|noche/.test(s)) return 'solar';
    if (/investig|metodo cient|hipotes|evidencia|experimento/.test(s)) return 'experiment';
    if (/mapa|croquis|direccion|coordenada|ruta|territorio|region/.test(s) && ctx.subject === 'social') return 'map-route';
    if (/antes|ahora|despues|pasado|presente|histor/.test(s) && ctx.subject === 'social') return 'timeline';
    if (/norma|acuerdo|derecho|responsabilidad|convivencia|democracia|conflicto/.test(s)) return 'choices';
    if (/familia|colegio|comunidad|barrio|municipio|departamento|oficio|institucion/.test(s) && ctx.subject === 'social') return 'community';
    if (/hello|saludo|good morning|good night/.test(s)) return 'greetings';
    if (/color|number|numero/.test(s) && ctx.subject === 'english') return 'english-match';
    if (/family|classroom|home|body|food|school|community|place|object/.test(s) && ctx.subject === 'english') return 'english-room';
    if (/direction|left|right|straight|turn/.test(s) && ctx.subject === 'english') return 'english-directions';
    if (/routine|present continuous|accion|action|can |can\/|like|don.t like|present simple/.test(s) && ctx.subject === 'english') return 'english-action';
    if (/comparative|comparing|description|describ/.test(s) && ctx.subject === 'english') return 'english-compare';
    if (ctx.subject === 'language') return 'grammar';
    if (ctx.subject === 'science') return 'experiment';
    if (ctx.subject === 'social') return 'map-route';
    if (ctx.subject === 'english') return 'english-room';
    return 'number-sense';
  }

  function shell(ctx, skill, compact = false) {
    const cfg = SUBJECTS[ctx.subject] || SUBJECTS.math;
    return `<section class="v27-story v27-${ctx.subject}${compact ? ' v27-compact' : ''}" data-v27-skill="${skill}" aria-label="Experiencia visual de aprendizaje">
      <div class="v27-story-head"><span class="v27-nova">N</span><span class="v27-world-name">${cfg.icon} ${esc(cfg.world)}</span><div class="v27-beats" aria-hidden="true"><i class="on"></i><i></i><i></i></div></div>
      <div class="v27-command" aria-live="polite"></div>
      <div class="v27-world" role="group"></div>
      <div class="v27-flash" aria-live="polite"></div>
    </section>`;
  }

  function setBeat(scene, n) { qa('.v27-beats i', scene).forEach((b, i) => b.classList.toggle('on', i <= n)); }
  function command(scene, value) { const el = q('.v27-command', scene); if (el) el.textContent = short(value, 44); }
  function flash(scene, value, icon = '✓') {
    const el = q('.v27-flash', scene); if (!el) return;
    el.innerHTML = `<span>${icon}</span><b>${esc(short(value, 32))}</b>`;
    el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
  }
  function celebrate(scene) {
    for (let i = 0; i < 10; i++) {
      const p = document.createElement('i'); p.className = 'v27-spark'; p.textContent = i % 3 ? '✦' : '★';
      p.style.setProperty('--dx', `${-130 + Math.random() * 260}px`); p.style.left = `${35 + Math.random() * 30}%`; p.style.top = `${40 + Math.random() * 20}%`;
      scene.appendChild(p); setTimeout(() => p.remove(), 1100);
    }
  }
  function finish(scene, concept) { setBeat(scene, 2); flash(scene, concept, '★'); celebrate(scene); scene.classList.add('v27-complete'); }
  function markButtons(root, selector, active) { qa(selector, root).forEach((x, i) => x.classList.toggle('active', i === active)); }

  function spatialScene(scene) {
    const world = q('.v27-world', scene); const missions = [
      { word: 'DENTRO', cmd: 'Milo necesita refugio', target: 'inside' },
      { word: 'ARRIBA', cmd: 'La estrella quiere subir', target: 'above' },
      { word: 'IZQUIERDA', cmd: 'Luna busca el mapa', target: 'left' },
      { word: 'DERECHA', cmd: 'Ahora cruza al otro lado', target: 'right' }
    ];
    world.innerHTML = `<div class="v27-sky"><i></i><i></i><i></i></div><div class="v27-rain"></div><div class="v27-scene-ground"></div>
      <div class="v27-landmark cave">🏠</div><div class="v27-landmark tree">🌳</div><div class="v27-landmark rock">🪨</div>
      <button class="v27-zone z-inside" data-zone="inside" aria-label="Dentro de la casa"></button>
      <button class="v27-zone z-above" data-zone="above" aria-label="Arriba de la roca"></button>
      <button class="v27-zone z-left" data-zone="left" aria-label="A la izquierda del árbol"></button>
      <button class="v27-zone z-right" data-zone="right" aria-label="A la derecha del árbol"></button>
      <span class="v27-hero fox">🦊</span><span class="v27-friend">🐰</span>`;
    let i = 0; const hero = q('.v27-hero', world);
    const apply = () => { const m = missions[i]; command(scene, `${m.cmd} · ${m.word}`); world.dataset.mission = m.target; setBeat(scene, Math.min(1, i)); };
    qa('.v27-zone', world).forEach(zone => zone.addEventListener('click', () => {
      const target = missions[i]; hero.className = `v27-hero fox at-${zone.dataset.zone}`;
      if (zone.dataset.zone !== target.target) { flash(scene, 'Prueba otro lugar', '↺'); world.classList.add('shake'); setTimeout(() => world.classList.remove('shake'), 350); return; }
      flash(scene, target.word, '✦'); i += 1;
      if (i >= missions.length) { command(scene, '¡Ya dominas las posiciones!'); finish(scene, 'UBICACIÓN'); return; }
      setTimeout(apply, 550);
    })); apply();
  }

  function placeValueScene(scene, ctx) {
    const world = q('.v27-world', scene); const ns = nums(ctx.prompt); let value = 3427;
    if (ns.length >= 4 && ns.some(n => n >= 100)) value = Math.round(ns.slice(0, 4).reduce((a, b) => a + b, 0));
    else if (ns.length) value = Math.round(Math.max(...ns));
    value = Math.max(0, Math.min(9999, value));
    const digits = String(value).padStart(4, '0').slice(-4).split('').map(Number);
    const labels = ['UM', 'C', 'D', 'U'];
    world.innerHTML = `<div class="v27-town"><div class="v27-road"></div>${labels.map((l, i) => `<div class="v27-tower t${i}"><b>${l}</b><span data-count="${i}">0</span></div>`).join('')}
      <div class="v27-truck">🚚<span>✦</span></div></div><div class="v27-parcels">${digits.map((d, i) => `<button data-i="${i}" data-d="${d}"><b>${d}</b><small>${labels[i]}</small></button>`).join('')}</div><div class="v27-result-number" aria-live="polite"></div>`;
    command(scene, 'Entrega cada cifra en su casa'); let done = 0;
    qa('.v27-parcels button', world).forEach(btn => btn.addEventListener('click', () => {
      if (btn.dataset.done) return; btn.dataset.done = '1'; const i = Number(btn.dataset.i); const d = Number(btn.dataset.d);
      btn.classList.add('fly'); q(`[data-count="${i}"]`, world).textContent = String(d); q(`.t${i}`, world).classList.add('filled'); done += 1; setBeat(scene, done > 2 ? 1 : 0);
      if (done === 4) { q('.v27-result-number', world).textContent = value.toLocaleString('es-CO'); command(scene, 'Las cifras construyen el número'); finish(scene, value.toLocaleString('es-CO')); }
    }));
  }

  function groupMathScene(scene, ctx, kind) {
    const world = q('.v27-world', scene); const n = nums(ctx.prompt); let a = Math.max(2, Math.min(12, Math.round(n[0] || (kind === 'division' ? 12 : 4)))); let b = Math.max(2, Math.min(6, Math.round(n[1] || 3)));
    if (kind === 'addition') { a = Math.min(a, 8); b = Math.min(b, 8); world.innerHTML = `<div class="v27-picnic"><span class="v27-kid k1">🐼</span><span class="v27-kid k2">🐸</span><div class="v27-basket target"></div></div><div class="v27-objects">${Array.from({length:a+b}, (_,i)=>`<button>${i<a?'🍎':'🍊'}</button>`).join('')}</div>`; command(scene, 'Junta toda la merienda'); let moved=0; qa('.v27-objects button',world).forEach(btn=>btn.onclick=()=>{if(btn.dataset.done)return;btn.dataset.done='1';btn.classList.add('move');moved++;q('.target',world).insertAdjacentHTML('beforeend',`<i>${btn.textContent}</i>`);if(moved===a+b)finish(scene,`${a} + ${b} = ${a+b}`)}); return; }
    if (kind === 'subtraction') { const remove=Math.min(b,a-1); world.innerHTML=`<div class="v27-pond"><span>🦆</span><div class="v27-basket apples">${Array.from({length:a},()=>'<button>🍎</button>').join('')}</div></div>`; command(scene, `El pato se lleva ${remove}`); let gone=0; qa('.apples button',world).forEach(btn=>btn.onclick=()=>{if(btn.dataset.done||gone>=remove)return;btn.dataset.done='1';btn.classList.add('away');gone++;flash(scene,`${remove-gone} por quitar`,'→');if(gone===remove)finish(scene,`${a} − ${remove} = ${a-remove}`)}); return; }
    if (kind === 'multiplication') { const groups=Math.min(a,5), each=Math.min(b,5); world.innerHTML=`<div class="v27-garden">${Array.from({length:groups},(_,i)=>`<button class="v27-plot" data-i="${i}"><span>🌱</span><i></i></button>`).join('')}</div>`; command(scene, `${groups} huertas · ${each} flores cada una`); let planted=0; qa('.v27-plot',world).forEach(plot=>plot.onclick=()=>{if(plot.dataset.done)return;plot.dataset.done='1';plot.classList.add('bloom');q('i',plot).innerHTML=Array.from({length:each},()=>'<b>🌼</b>').join('');planted++;if(planted===groups)finish(scene,`${groups} × ${each} = ${groups*each}`)}); return; }
    const total=Math.max(6,Math.min(18,a)); const groups=Math.max(2,Math.min(4,b)); world.innerHTML=`<div class="v27-camp"><div class="v27-food">${Array.from({length:total},()=>'<button>🍓</button>').join('')}</div><div class="v27-friends">${Array.from({length:groups},(_,i)=>`<div><span>${['🐰','🦊','🐸','🐧'][i]}</span><b>0</b></div>`).join('')}</div></div>`; command(scene,'Reparte sin dejar a nadie atrás'); let moved=0; qa('.v27-food button',world).forEach(btn=>btn.onclick=()=>{if(btn.dataset.done)return;btn.dataset.done='1';btn.classList.add('fly');const target=qa('.v27-friends div',world)[moved%groups];q('b',target).textContent=String(Number(q('b',target).textContent)+1);target.classList.add('pop');setTimeout(()=>target.classList.remove('pop'),250);moved++;if(moved===total)finish(scene,`${total} ÷ ${groups} = ${Math.floor(total/groups)}`)});
  }

  function fractionScene(scene, ctx) {
    const world=q('.v27-world',scene); const n=nums(ctx.prompt); const den=Math.max(2,Math.min(8,Math.round(n[1]||n[0]||4))); const num=Math.max(1,Math.min(den,Math.round(n[0]||1)));
    world.innerHTML=`<div class="v27-table"><div class="v27-pizza">${Array.from({length:den},(_,i)=>`<button style="--r:${i*360/den}deg" data-i="${i}"><span>🍕</span></button>`).join('')}</div><span class="v27-chef">🐼</span></div><div class="v27-fraction-meter"><b>0</b><span>/ ${den}</span></div>`; command(scene,`Sirve ${num} de ${den} porciones`);let selected=0;qa('.v27-pizza button',world).forEach(btn=>btn.onclick=()=>{if(btn.dataset.on||selected>=num)return;btn.dataset.on='1';btn.classList.add('served');selected++;q('.v27-fraction-meter b',world).textContent=String(selected);if(selected===num)finish(scene,`${num}/${den}`)});
  }

  function patternScene(scene) { const world=q('.v27-world',scene); const seq=['🔵','🟡','🔵','🟡']; const options=['🟢','🔵','🟣']; world.innerHTML=`<div class="v27-train"><span>🚂</span>${seq.map(x=>`<i>${x}</i>`).join('')}<i class="missing">?</i></div><div class="v27-choice-row">${options.map(x=>`<button>${x}</button>`).join('')}</div>`;command(scene,'¿Qué vagón continúa?');qa('.v27-choice-row button',world).forEach(btn=>btn.onclick=()=>{if(btn.textContent==='🔵'){q('.missing',world).textContent='🔵';q('.v27-train',world).classList.add('go');finish(scene,'PATRÓN ENCONTRADO')}else{btn.classList.add('no');flash(scene,'Mira lo que se repite','↺')}}); }
  function measurementScene(scene) { const world=q('.v27-world',scene);world.innerHTML=`<div class="v27-workbench"><div class="v27-object short">✏️</div><div class="v27-object long">🧹</div><div class="v27-ruler">${Array.from({length:10},(_,i)=>`<i>${i+1}</i>`).join('')}</div></div><div class="v27-choice-row"><button data-a="long">MÁS LARGO</button><button data-a="short">MÁS CORTO</button></div>`;command(scene,'Toca lo que es más largo');qa('.v27-choice-row button',world).forEach(btn=>btn.onclick=()=>{if(btn.dataset.a==='long'){q('.long',world).classList.add('winner');q('.v27-ruler',world).classList.add('measure');finish(scene,'COMPARAR Y MEDIR')}else{flash(scene,'Compara con la regla','↺')}}); }
  function geometryScene(scene) { const world=q('.v27-world',scene);world.innerHTML=`<div class="v27-shape-lab"><div class="v27-outline triangle"></div><button class="v27-shape square">■</button><button class="v27-shape tri">▲</button><button class="v27-shape circle">●</button></div>`;command(scene,'¿Qué figura encaja?');qa('.v27-shape',world).forEach(btn=>btn.onclick=()=>{if(btn.classList.contains('tri')){btn.classList.add('fit');finish(scene,'TRIÁNGULO')}else{btn.classList.add('spin');flash(scene,'Gírala en tu mente','↺')}}); }
  function dataScene(scene) { const world=q('.v27-world',scene);const values=[3,5,2,4];world.innerHTML=`<div class="v27-chart">${values.map((v,i)=>`<button style="--h:${v*18}%" data-v="${v}"><i></i><span>${['🍎','🍌','🍇','🍐'][i]}</span></button>`).join('')}</div>`;command(scene,'Haz crecer los datos');let n=0;qa('.v27-chart button',world).forEach(btn=>btn.onclick=()=>{if(btn.dataset.on)return;btn.dataset.on='1';btn.classList.add('grow');n++;if(n===values.length)finish(scene,'LOS DATOS CUENTAN UNA HISTORIA')}); }
  function numberSenseScene(scene, ctx) { const world=q('.v27-world',scene); const n=nums(ctx.prompt); const target=Math.max(0,Math.min(10,Math.round(n[0]||5)));world.innerHTML=`<div class="v27-number-path"><span class="v27-runner">🐇</span>${Array.from({length:11},(_,i)=>`<button data-n="${i}">${i}</button>`).join('')}</div>`;command(scene,`Lleva al conejo hasta ${target}`);qa('.v27-number-path button',world).forEach(btn=>btn.onclick=()=>{const v=Number(btn.dataset.n);q('.v27-runner',world).style.left=`${4+v*8.8}%`;markButtons(world,'.v27-number-path button',v);if(v===target)finish(scene,`LLEGASTE A ${target}`)}); }
  function storyOrderScene(scene) { const world=q('.v27-world',scene);const frames=[['🌧️','1'],['☂️','2'],['🌈','3']];const shuffled=[frames[1],frames[2],frames[0]];world.innerHTML=`<div class="v27-storyline"><span class="v27-character-walk">🦊</span>${shuffled.map(([e,id])=>`<button data-id="${id}"><span>${e}</span><b></b></button>`).join('')}</div>`;command(scene,'Ordena lo que pasó');let next=1;qa('.v27-storyline button',world).forEach(btn=>btn.onclick=()=>{if(Number(btn.dataset.id)!==next){flash(scene,'Busca qué ocurrió antes','↺');return;}btn.classList.add('ordered');q('b',btn).textContent=String(next);next++;if(next===4){q('.v27-character-walk',world).classList.add('cross');finish(scene,'INICIO · DESPUÉS · FINAL')}}); }
  function grammarScene(scene, ctx) { const world=q('.v27-world',scene);const words=String(ctx.prompt||'El zorro corre rápido').replace(/[¿?¡!.,:;]/g,'').split(/\s+/).filter(Boolean).slice(0,7);const safe=words.length>=3?words:['El','zorro','corre','rápido'];world.innerHTML=`<div class="v27-language-stage"><span class="v27-actor">🦊</span><span class="v27-prop">🌳</span></div><div class="v27-word-deck">${safe.map((w,i)=>`<button data-i="${i}">${esc(w)}</button>`).join('')}</div>`;command(scene,'Toca palabras y haz vivir la frase');let touched=0;qa('.v27-word-deck button',world).forEach((btn,i)=>btn.onclick=()=>{if(!btn.dataset.on){btn.dataset.on='1';touched++;}btn.classList.toggle('on');const actor=q('.v27-actor',world);actor.classList.remove('run','jump','look');void actor.offsetWidth;actor.classList.add(i%3===0?'look':i%3===1?'run':'jump');flash(scene,btn.textContent,'✦');if(touched>=Math.min(3,safe.length))finish(scene,'PALABRAS EN ACCIÓN')}); }
  function phonicsScene(scene) { const world=q('.v27-world',scene);world.innerHTML=`<div class="v27-sound-lab"><button data-l="M">M<span>〰</span></button><button data-l="A">A<span>〰</span></button><div class="v27-mouth">🙂</div><div class="v27-built-word"></div></div>`;command(scene,'Une los sonidos');const out=q('.v27-built-word',world);qa('.v27-sound-lab button',world).forEach(btn=>btn.onclick=()=>{btn.classList.add('sound');out.textContent+=btn.dataset.l;setTimeout(()=>btn.classList.remove('sound'),500);if(out.textContent.length>=2)finish(scene,out.textContent)}); }
  function readingCluesScene(scene) { const world=q('.v27-world',scene);world.innerHTML=`<div class="v27-clue-scene"><span class="sun">☀️</span><span class="kid">🧒</span><span class="sweat">💦</span><span class="bottle">🧴</span><span class="tree">🌳</span></div><div class="v27-choice-row"><button data-ok="1">HACE CALOR</button><button>HACE FRÍO</button></div>`;command(scene,'Mira las pistas, no el texto');qa('.v27-choice-row button',world).forEach(btn=>btn.onclick=()=>{if(btn.dataset.ok){qa('.v27-clue-scene span',world).forEach(x=>x.classList.add('clue'));finish(scene,'INFERIR = UNIR PISTAS')}else flash(scene,'Mira el sol y las gotas','↺')}); }
  function argumentScene(scene) { const world=q('.v27-world',scene);world.innerHTML=`<div class="v27-debate"><span>🐼</span><b>“El parque necesita más árboles.”</b><div class="v27-evidence"><button data-ok="1">🌳 + sombra</button><button>🎮 videojuegos</button><button data-ok="1">🐦 + hogar</button></div></div>`;command(scene,'Elige razones que sí apoyan la idea');let ok=0;qa('.v27-evidence button',world).forEach(btn=>btn.onclick=()=>{if(!btn.dataset.ok){flash(scene,'Eso no demuestra la idea','↺');return;}if(btn.dataset.on)return;btn.dataset.on='1';btn.classList.add('on');ok++;if(ok===2)finish(scene,'IDEA + RAZONES')}); }
  function processScienceScene(scene, type) { const world=q('.v27-world',scene);let steps;if(type==='life-cycle') steps=[['🥚',''],['🐛',''],['🟤',''],['🦋','']];else if(type==='weather') steps=[['☀️',''],['💧',''],['☁️',''],['🌧️','']];else if(type==='solar') steps=[['☀️',''],['🌍',''],['🌙',''],['✨','']];else if(type==='body') steps=[['👀',''],['👂',''],['✋',''],['🧠','']];else steps=[['👀',''],['🔬',''],['🧪',''],['💡','']];world.innerHTML=`<div class="v27-process"><span class="v27-process-core">${steps[0][0]}</span>${steps.map((x,i)=>`<button data-i="${i}">${x[0]}</button>`).join('')}</div>`;command(scene,'Activa el proceso');let next=0;qa('.v27-process button',world).forEach(btn=>btn.onclick=()=>{const i=Number(btn.dataset.i);if(i!==next){flash(scene,'Sigue el orden','↺');return;}btn.classList.add('on');q('.v27-process-core',world).textContent=steps[i][0];q('.v27-process-core',world).classList.remove('pulse');void q('.v27-process-core',world).offsetWidth;q('.v27-process-core',world).classList.add('pulse');next++;if(next===steps.length)finish(scene,'PROCESO COMPLETO')}); }
  function ecosystemScene(scene) { const world=q('.v27-world',scene);world.innerHTML=`<div class="v27-ecosystem"><button data-i="0">☀️</button><span>→</span><button data-i="1">🌿</button><span>→</span><button data-i="2">🐇</button><span>→</span><button data-i="3">🦊</button></div>`;command(scene,'Conecta quién necesita a quién');let next=0;qa('.v27-ecosystem button',world).forEach(btn=>btn.onclick=()=>{if(Number(btn.dataset.i)!==next){flash(scene,'Empieza por la energía','↺');return;}btn.classList.add('on');next++;if(next===4)finish(scene,'TODO ESTÁ CONECTADO')}); }
  function materialsScene(scene) { const world=q('.v27-world',scene);world.innerHTML=`<div class="v27-lab"><span class="v27-beaker">🧊</span><button data-step="1">☀️</button><button data-step="2">❄️</button><div class="v27-temp"></div></div>`;command(scene,'Cambia la temperatura');let step=1;qa('.v27-lab button',world).forEach(btn=>btn.onclick=()=>{if(Number(btn.dataset.step)!==step){flash(scene,'Primero calienta','↺');return;}q('.v27-beaker',world).textContent=step===1?'💧':'🧊';q('.v27-temp',world).className=`v27-temp s${step}`;step++;if(step===3)finish(scene,'SÓLIDO ⇄ LÍQUIDO')}); }
  function forceScene(scene) { const world=q('.v27-world',scene);world.innerHTML=`<div class="v27-ramp"><span class="v27-ball">⚽</span><button class="push">👉</button><span class="finish">🏁</span></div>`;command(scene,'Empuja y mira qué cambia');q('.push',world).onclick=()=>{q('.v27-ball',world).classList.add('roll');q('.push',world).classList.add('hit');setTimeout(()=>finish(scene,'FUERZA → MOVIMIENTO'),900)}; }
  function mapScene(scene) { const world=q('.v27-world',scene);world.innerHTML=`<div class="v27-map"><span class="v27-bike">🚲</span><div class="street h"></div><div class="street v"></div><button data-i="0" style="--x:14%;--y:70%">🏠</button><button data-i="1" style="--x:44%;--y:30%">🏫</button><button data-i="2" style="--x:72%;--y:58%">🏥</button><button data-i="3" style="--x:86%;--y:20%">🌳</button></div>`;command(scene,'Recorre la ciudad');let next=0;qa('.v27-map button',world).forEach(btn=>btn.onclick=()=>{if(Number(btn.dataset.i)!==next){flash(scene,'Sigue la ruta','↺');return;}const bike=q('.v27-bike',world);bike.style.left=btn.style.getPropertyValue('--x');bike.style.top=btn.style.getPropertyValue('--y');btn.classList.add('on');next++;if(next===4)finish(scene,'RUTA COMPLETA')}); }
  function timelineScene(scene) { const world=q('.v27-world',scene);world.innerHTML=`<div class="v27-time"><button data-i="0">👶</button><i></i><button data-i="1">🧒</button><i></i><button data-i="2">🧑</button><span class="v27-time-runner">⏳</span></div>`;command(scene,'Viaja del antes al después');let next=0;qa('.v27-time button',world).forEach(btn=>btn.onclick=()=>{if(Number(btn.dataset.i)!==next)return flash(scene,'Empieza por antes','↺');btn.classList.add('on');q('.v27-time-runner',world).style.left=`${15+next*35}%`;next++;if(next===3)finish(scene,'ANTES · AHORA · DESPUÉS')}); }
  function choicesScene(scene) { const world=q('.v27-world',scene);world.innerHTML=`<div class="v27-crossing"><span class="v27-kids">🧒 🧒</span><span class="v27-ball2">⚽</span><button data-ok="1">🤝 TURNARSE</button><button>💥 EMPUJAR</button></div>`;command(scene,'Dos quieren el mismo balón');qa('.v27-crossing button',world).forEach(btn=>btn.onclick=()=>{if(btn.dataset.ok){q('.v27-kids',world).classList.add('agree');finish(scene,'ACUERDO = CONVIVIR')}else{q('.v27-ball2',world).classList.add('shake');flash(scene,'Busca una solución para ambos','↺')}}); }
  function communityScene(scene) { const world=q('.v27-world',scene);world.innerHTML=`<div class="v27-community"><button data-i="0">🏠</button><button data-i="1">🏫</button><button data-i="2">🏥</button><button data-i="3">🚒</button><span class="v27-person">🧒</span></div>`;command(scene,'Descubre quién ayuda en cada lugar');let count=0;qa('.v27-community button',world).forEach(btn=>btn.onclick=()=>{if(btn.dataset.on)return;btn.dataset.on='1';btn.classList.add('open');count++;flash(scene,['HOGAR','COLEGIO','SALUD','EMERGENCIA'][Number(btn.dataset.i)],'✦');if(count===4)finish(scene,'UNA COMUNIDAD TRABAJA EN EQUIPO')}); }
  function englishRoomScene(scene, ctx) { const world=q('.v27-world',scene);const s=ctx.n;let items=/family/.test(s)?[['👩','mother'],['👨','father'],['👧','sister'],['👦','brother']]:/body/.test(s)?[['👀','eyes'],['👂','ears'],['👃','nose'],['✋','hand']]:/food/.test(s)?[['🍎','apple'],['🥛','milk'],['🍞','bread'],['🍌','banana']]:[['🪑','chair'],['📘','book'],['🚪','door'],['🪟','window']];world.innerHTML=`<div class="v27-english-room">${items.map((x,i)=>`<button class="o${i}" data-word="${x[1]}"><span>${x[0]}</span><b>${x[1]}</b></button>`).join('')}<span class="v27-frog">🐸</span></div>`;command(scene,'Touch. Look. Remember.');let count=0;qa('.v27-english-room button',world).forEach(btn=>btn.onclick=()=>{if(!btn.dataset.on){btn.dataset.on='1';count++;}btn.classList.add('on');flash(scene,btn.dataset.word,'🔊');if(count>=3)finish(scene,'IMAGE + WORD')}); }
  function englishActionScene(scene) { const world=q('.v27-world',scene);world.innerHTML=`<div class="v27-english-action"><span class="v27-actor2">🐸</span><button data-a="run">RUN</button><button data-a="jump">JUMP</button><button data-a="sleep">SLEEP</button></div>`;command(scene,'Make NOVA Frog move');let count=0;qa('.v27-english-action button',world).forEach(btn=>btn.onclick=()=>{const actor=q('.v27-actor2',world);actor.className=`v27-actor2 ${btn.dataset.a}`;flash(scene,btn.textContent,'✦');if(!btn.dataset.on){btn.dataset.on='1';count++;}if(count===3)finish(scene,'ACTION WORDS')}); }
  function greetingsScene(scene) { const world=q('.v27-world',scene);world.innerHTML=`<div class="v27-greetings"><span>🐼</span><span>🐸</span><button data-i="0">HELLO!</button><button data-i="1">GOODBYE!</button></div>`;command(scene,'Start and finish the meeting');let next=0;qa('.v27-greetings button',world).forEach(btn=>btn.onclick=()=>{if(Number(btn.dataset.i)!==next)return flash(scene,'First: say hello','↺');btn.classList.add('say');next++;if(next===2)finish(scene,'HELLO → GOODBYE')}); }
  function englishMatchScene(scene) { const world=q('.v27-world',scene);world.innerHTML=`<div class="v27-color-world"><button data-v="red">🔴</button><button data-v="blue">🔵</button><button data-v="green">🟢</button><span class="v27-target-word">BLUE</span></div>`;command(scene,'Touch BLUE');qa('.v27-color-world button',world).forEach(btn=>btn.onclick=()=>{if(btn.dataset.v==='blue'){btn.classList.add('on');finish(scene,'BLUE 🔵')}else flash(scene,'Try again','↺')}); }

  function render(scene, ctx, skill) {
    if (!scene) return;
    const map = {
      'spatial': () => spatialScene(scene), 'place-value': () => placeValueScene(scene, ctx), 'fractions': () => fractionScene(scene, ctx),
      'division': () => groupMathScene(scene, ctx, 'division'), 'multiplication': () => groupMathScene(scene, ctx, 'multiplication'), 'addition': () => groupMathScene(scene, ctx, 'addition'), 'subtraction': () => groupMathScene(scene, ctx, 'subtraction'),
      'patterns': () => patternScene(scene), 'measurement': () => measurementScene(scene), 'geometry': () => geometryScene(scene), 'data': () => dataScene(scene), 'number-sense': () => numberSenseScene(scene, ctx),
      'story-order': () => storyOrderScene(scene), 'grammar': () => grammarScene(scene, ctx), 'phonics': () => phonicsScene(scene), 'reading-clues': () => readingCluesScene(scene), 'argument': () => argumentScene(scene),
      'life-cycle': () => processScienceScene(scene, 'life-cycle'), 'weather': () => processScienceScene(scene, 'weather'), 'solar': () => processScienceScene(scene, 'solar'), 'body': () => processScienceScene(scene, 'body'), 'experiment': () => processScienceScene(scene, 'experiment'), 'ecosystem': () => ecosystemScene(scene), 'materials': () => materialsScene(scene), 'force-energy': () => forceScene(scene),
      'map-route': () => mapScene(scene), 'timeline': () => timelineScene(scene), 'choices': () => choicesScene(scene), 'community': () => communityScene(scene),
      'english-room': () => englishRoomScene(scene, ctx), 'english-action': () => englishActionScene(scene), 'greetings': () => greetingsScene(scene), 'english-match': () => englishMatchScene(scene), 'english-directions': () => mapScene(scene), 'english-compare': () => measurementScene(scene)
    };
    (map[skill] || map['number-sense'])();
    track('narrative_scene_viewed', { surface: scene.dataset.surface || 'lesson', subject: ctx.subject, skill, title: short(ctx.title, 70) });
  }

  function hideV26() { qa('#v26GameScene,#v26TopicScene,#v26HomeStory,#v26SubjectMotion,#v26AtlasScene,#v26AcademyScene,#v26NotebookMotion').forEach(el => el.setAttribute('aria-hidden', 'true')); }
  function syncGame() {
    const modal=q('#curriculumGameModal'); if(!visible(modal)) return;
    const ctx=contextFor(modal); if(!ctx.prompt) return; const skill=skillFrom(ctx); const sig=`${ctx.title}|${ctx.prompt}|${skill}`;
    if(sig===state.game && q('#v27GameStory',modal)) return; state.game=sig;
    q('#v27GameStory',modal)?.remove(); const host=document.createElement('div');host.id='v27GameStory';host.innerHTML=shell(ctx,skill,false);const scene=q('.v27-story',host);scene.dataset.surface='curriculum_game';
    q('#curriculumGamePrompt',modal)?.insertAdjacentElement('beforebegin',host);render(scene,ctx,skill); modal.dataset.v27Skill=skill; modal.classList.add('v27-game-mode');
  }
  function syncTopic() {
    const hub=q('#curriculumTopicHub'); if(!visible(hub)) return;
    const ctx=contextFor(hub); if(!ctx.title) return; const skill=skillFrom(ctx); const sig=`${ctx.title}|${ctx.goal}|${skill}`;
    if(sig===state.topic && q('#v27TopicStory',hub)) return; state.topic=sig;
    q('#v27TopicStory',hub)?.remove();const host=document.createElement('div');host.id='v27TopicStory';host.innerHTML=shell(ctx,skill,true);const scene=q('.v27-story',host);scene.dataset.surface='topic';
    const anchor=q('.topic-focus-card',hub) || q('.curriculum-topic-hero',hub); anchor?.insertAdjacentElement('afterend',host);render(scene,ctx,skill);hub.dataset.v27Skill=skill;
  }
  function installHome() {
    if(state.home) return; const home=q('#learningHub'), head=q('.home-head',home); if(!home||!head) return;
    const hero=document.createElement('section');hero.id='v27HomeMotion';hero.className='v27-home-motion';hero.innerHTML=`<div class="v27-home-nova"><span>N</span><i></i><i></i></div><div class="v27-home-worlds"><button>➗</button><button>📖</button><button>🔬</button><button>🌎</button><button>💬</button></div><strong>Elige · toca · descubre</strong>`;
    head.insertAdjacentElement('afterend',hero);state.home=true;
  }
  function installTutor() { if(state.tutor) return; const hub=q('#novaTutorHub'),hero=q('.nova-tutor-hero',hub);if(!hub||!hero)return;const el=document.createElement('div');el.className='v27-tutor-face';el.innerHTML='<span>N</span><i></i><i></i>';hero.appendChild(el);state.tutor=true; }
  function sync() { hideV26(); installHome(); installTutor(); syncTopic(); syncGame(); document.body.classList.add('nova-v27'); }
  function init() {
    document.documentElement.dataset.novaVisualVersion='27.0'; document.documentElement.dataset.novaLearningModel='visual-first';
    sync(); new MutationObserver(() => requestAnimationFrame(sync)).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['hidden','class']});
    window.addEventListener('nova:v25:updated',sync); track('visual_narrative_enabled',{model:'visual-first',skills:34}); window.NOVAVisualFirst={version:VERSION,sync,skillFrom,subjectFrom};
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(init,0),{once:true});else setTimeout(init,0);
})();
