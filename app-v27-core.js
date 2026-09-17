(() => {
  const VERSION = '27.0';
  const q = (s, r = document) => r?.querySelector?.(s) || null;
  const qa = (s, r = document) => [...(r?.querySelectorAll?.(s) || [])];
  const text = (s, r = document) => String(q(s, r)?.textContent || '').replace(/\s+/g, ' ').trim();
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const visible = el => Boolean(el && !el.hidden && el.getClientRects().length);
  const clamp = (value, n = 54) => { const s = String(value || '').replace(/\s+/g, ' ').trim(); return s.length > n ? `${s.slice(0, n - 1).trim()}…` : s; };
  const track = (event, properties = {}) => window.NOVAAnalytics?.track?.(event, properties, 'app');
  const renderers = {};
  const signatures = { topic:'', game:'' };

  const EXPERIENCE_RULES = [
    ['spatial',/figuras|ubicacion|orientacion espacial|geometria|izquierda|derecha|dentro|fuera|arriba|abajo|angulo|simetr/],
    ['place-value',/valor posicional|numeros hasta|numeros grandes|descomponer|unidades|decenas|centenas|millares/],
    ['add-sub',/sumar|restar|suma y resta|reagrupacion|adicion|diferencia/],['pattern',/patrones|secuencias|continua|regla/],
    ['multiply',/multiplicacion|multiplicaciones|grupos iguales|tablas/],['share',/division|reparto|repartos|divisibilidad|cociente|residuo/],
    ['fraction',/fraccion|fracciones|mitad|tercio|cuarto|porcentaje|decimales/],['measure',/medir|medicion|perimetro|area|volumen|hora|dinero|medidas|longitud|peso|capacidad/],
    ['data',/datos|grafico|tabla|estadistica|probabilidad|promedio/],['problem',/problemas de la vida|problemas multietapa|solucion de problemas|tomar decisiones/],
    ['word-forge',/letras|sonidos|silabas|palabras|ortografia basica/],['sentence-stage',/oraciones|sustantivos|verbos|adjetivos|gramatica|conectores|pronombres/],
    ['story-sequence',/ordenar una historia|parrafos y secuencias|narrar|relatos|inicio.*desarrollo.*cierre/],['reading-clues',/comprender cuentos|comprension|inferencias|idea principal|lectura inferencial|resumen|leer con fluidez|tipos de texto/],
    ['evidence',/argumentar|opinion|evidencia|punto de vista|medios e informacion|lectura critica/],['conversation',/hablar y escuchar|comunicacion social|explicar|conversacion/],
    ['senses',/cuerpo y los sentidos|sentidos|observar.*escucha.*toca/],['living-sort',/seres vivos y no vivos|clasificacion/],['life-cycle',/ciclos de vida|plantas y animales|crecimiento|reproduccion/],
    ['ecosystem',/habitat|ecosistema|cadena alimentaria|redes alimentarias|adaptaciones/],['matter-lab',/materiales|solidos|liquidos|materia|mezclas|cambios fisicos|separacion/],
    ['weather',/dia, noche y clima|tiempo atmosferico|lluvia|viento|nubosidad|atmosfera/],['energy-lab',/luz, sonido|fuerza|energia|electricidad|maquinas|movimiento/],
    ['solar',/tierra y sistema solar|universo|sol y la luna|movimientos de la tierra/],['body-system',/celulas|sistemas del cuerpo|tejidos|organos|nutricion/],['experiment',/investigar|investigacion|metodo cientifico|hipotesis|variables|evidencia/],
    ['community',/familia|colegio|comunidad|barrio|municipio|departamento|oficios|instituciones/],['rules',/normas|acuerdos|derechos|responsabilidades|convivencia|democracia|participacion|constitucion/],
    ['map-route',/mapas|simbolos|territorio|regiones|paisajes|colombia|coordenadas|direcciones|escalas/],['timeline',/antes, ahora|cambios en el tiempo|pasado y presente|historico|historia|independencia|republicana|colonial/],
    ['culture',/somos diferentes|diversidad|tradiciones|cultura|pueblos|identidad|paz|prejuicios/],['economy',/economia|consumo|produccion|intercambio|trabajo|ahorro|recursos/],['digital',/ciudadania digital|fuentes|informacion confiable|publicidad|contenidos digitales/],
    ['english-dialog',/hello|about me|conversation|questions and answers|simple questions|everyday conversation/],['english-room',/classroom|my home|school and community|family|my family|body|food and drinks|numbers and colors/],
    ['english-routine',/daily routines|present simple|frequency|present continuous|past simple|future intentions/],['english-direction',/directions and places|where|places/],
    ['english-compare',/comparatives|comparing and describing|descriptions/],['english-reading',/reading short|reading for details|informational texts|writing simple|writing connected|short messages/]
  ];

  function subjectFrom(value=''){
    const s=norm(value); if(/lenguaje|lectura|escrit|oracion|palabra|verbo|sustant/.test(s))return'language';
    if(/ciencia|animal|planta|agua|materia|energia|cuerpo|ecosistema|celula/.test(s))return'science';
    if(/social|historia|geograf|comunidad|colombia|mapa|territorio|democracia/.test(s))return'social';
    if(/ingles|english|vocab|word|sentence|hello|routine|family|classroom/.test(s))return'english'; return'math';
  }
  function classify({subject,title,goal,prompt}){
    const choose=(hay,rules=EXPERIENCE_RULES)=>{for(const [type,rx] of rules)if(rx.test(hay))return type;return''};
    const englishRules=EXPERIENCE_RULES.filter(([type])=>type.startsWith('english-'));
    const promptText=norm(prompt), full=norm(`${title} ${goal} ${prompt}`);
    if(subject==='english') return choose(promptText,englishRules)||choose(full,englishRules)||'english-dialog';
    return (promptText&&choose(promptText))||choose(full)||{math:'problem',language:'reading-clues',science:'experiment',social:'community'}[subject]||'problem';
  }
  function say(value,lang='es-CO'){if(!('speechSynthesis'in window)||!value)return;window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(String(value));u.lang=lang;u.rate=.93;u.pitch=1.04;window.speechSynthesis.speak(u)}
  function sceneShell({subject,title,type}){const icon={math:'✦',language:'◌',science:'✺',social:'⌖',english:'◍'}[subject]||'✦';return `<section class="v27-scene v27-${subject}" data-v27-type="${type}"><div class="v27-topbar"><span class="v27-subject-dot">${icon}</span><strong>${esc(clamp(title,42))}</strong><button class="v27-audio" type="button" aria-label="Escuchar">◖)))</button></div><div class="v27-world" data-v27-world></div><div class="v27-hud"><div class="v27-dots"><i class="on"></i><i></i><i></i><i></i></div><strong data-v27-instruction>Explora la escena.</strong></div><div class="v27-concept" data-v27-concept hidden></div></section>`}
  function instruction(scene,value,beat=0,lang='es-CO'){const el=q('[data-v27-instruction]',scene);if(el){el.textContent=clamp(value,62);el.dataset.say=value;el.dataset.lang=lang}qa('.v27-dots i',scene).forEach((d,i)=>d.classList.toggle('on',i<=Math.min(3,beat)))}
  function reveal(scene,value){const p=q('[data-v27-concept]',scene);if(!p)return;p.hidden=false;p.innerHTML=`<span>DESCUBRISTE</span><strong>${esc(value)}</strong>`;scene.classList.add('v27-complete');burst(scene)}
  function burst(root){for(let i=0;i<12;i++){const s=document.createElement('i');s.className='v27-spark';s.style.setProperty('--dx',`${-120+Math.random()*240}px`);s.style.setProperty('--dy',`${-90+Math.random()*100}px`);root.appendChild(s);setTimeout(()=>s.remove(),1200)}}
  function wireAudio(scene){q('.v27-audio',scene)?.addEventListener('click',()=>{const el=q('[data-v27-instruction]',scene);say(el?.dataset.say||el?.textContent,el?.dataset.lang||'es-CO')})}
  function numberFrom(v,fallback=3427){
    const raw=String(v||'').replace(/(?<=\d)[.,](?=\d{3}\b)/g,'');
    const nums=(raw.match(/\d+/g)||[]).map(Number).filter(Number.isFinite);
    if(raw.includes('+')&&nums.length>1){const total=nums.slice(-5).reduce((a,b)=>a+b,0);if(total>0&&total<10000)return total;}
    const candidate=[...nums].reverse().find(n=>n>=10&&n<10000);
    return Number.isFinite(candidate)?candidate:fallback;
  }
  function makeDraggable(el,scene,targets,onDrop){let active=false,sx=0,sy=0,ox=0,oy=0;el.addEventListener('pointerdown',e=>{active=true;sx=e.clientX;sy=e.clientY;const tr=getComputedStyle(el).transform,m=tr!=='none'?new DOMMatrixReadOnly(tr):null;ox=m?.m41||0;oy=m?.m42||0;el.setPointerCapture?.(e.pointerId);el.classList.add('dragging')});el.addEventListener('pointermove',e=>{if(active)el.style.transform=`translate(${ox+e.clientX-sx}px,${oy+e.clientY-sy}px)`});const end=()=>{if(!active)return;active=false;el.classList.remove('dragging');const r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,hit=targets.find(t=>{const b=t.getBoundingClientRect();return cx>=b.left&&cx<=b.right&&cy>=b.top&&cy<=b.bottom});if(hit)onDrop(hit);else el.style.transform=`translate(${ox}px,${oy}px)`};el.addEventListener('pointerup',end);el.addEventListener('pointercancel',end)}
  function register(map){Object.assign(renderers,map)}
  function removeV26(root=document){qa('[id^="v26"]',root).forEach(el=>el.remove())}
  function mount(anchor,id,data,before=false){q(`#${id}`,anchor.parentElement||document)?.remove();const m=document.createElement('div');m.id=id;m.className='v27-mount';m.innerHTML=sceneShell(data);before?anchor.insertAdjacentElement('beforebegin',m):anchor.insertAdjacentElement('afterend',m);const scene=q('.v27-scene',m);wireAudio(scene);(renderers[data.type]||renderers.problem)?.(scene,`${data.title} ${data.goal||''} ${data.prompt||''}`);track('immersive_scene_viewed',{surface:data.surface,subject:data.subject,type:data.type,title:clamp(data.title,80)})}
  function syncTopic(){const hub=q('#curriculumTopicHub');if(!visible(hub))return;const title=text('#curriculumTopicTitle',hub),goal=text('#curriculumTopicGoal',hub),kicker=text('#curriculumTopicKicker',hub);if(!title)return;const subject=subjectFrom(`${kicker} ${title}`),type=classify({subject,title,goal,prompt:''}),sig=`${title}|${goal}|${type}`;if(sig===signatures.topic&&q('#v27TopicExperience',hub))return;signatures.topic=sig;removeV26(hub);q('#v27TopicExperience',hub)?.remove();const anchor=q('.topic-focus-card',hub)||q('.curriculum-topic-hero',hub)||hub.firstElementChild;if(anchor)mount(anchor,'v27TopicExperience',{subject,title,type,goal,surface:'topic'});hub.classList.add('v27-minimal-topic')}
  function syncGame(){const modal=q('#curriculumGameModal');if(!visible(modal))return;const title=text('#curriculumGameTitle',modal),prompt=text('#curriculumGamePrompt',modal),kicker=text('#curriculumGameKicker',modal),round=text('#curriculumGameRound',modal);if(!prompt)return;const subject=subjectFrom(`${kicker} ${title}`),type=classify({subject,title,goal:'',prompt}),sig=`${title}|${round}|${prompt}|${type}`;if(sig===signatures.game&&q('#v27GameExperience',modal))return;signatures.game=sig;removeV26(modal);q('#v27GameExperience',modal)?.remove();const anchor=q('#curriculumGamePrompt',modal);if(anchor)mount(anchor,'v27GameExperience',{subject,title,type,prompt,surface:'game'},true);modal.classList.add('v27-minimal-game')}
  function installHome(){const home=q('#learningHub'),head=q('.home-head',home);if(!home||!head||q('#v27HomePortal',home))return;const el=document.createElement('section');el.id='v27HomePortal';el.className='v27-home-portal';el.innerHTML='<div class="v27-portal-world"><span class="nova">N</span><i class="orbit o1"></i><i class="orbit o2"></i><i class="orbit o3"></i><b class="p1">✦</b><b class="p2">◌</b><b class="p3">✺</b><b class="p4">⌖</b><b class="p5">◍</b></div><div><small>HOY</small><strong>Entra, toca y descubre.</strong></div>';head.insertAdjacentElement('afterend',el);home.classList.add('v27-minimal-home')}
  function sync(){document.body.classList.add('nova-v27');installHome();syncTopic();syncGame()}
  function init(){document.documentElement.dataset.novaVisualVersion=VERSION;track('immersive_learning_enabled',{version:VERSION,model:'visual-first'});sync();new MutationObserver(()=>requestAnimationFrame(sync)).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['hidden','class']});window.addEventListener('nova:v25:updated',sync)}
  window.NOVAV27={VERSION,q,qa,text,norm,esc,clamp,track,classify,say,instruction,reveal,wireAudio,numberFrom,makeDraggable,register,sync,init,renderers};
})();
