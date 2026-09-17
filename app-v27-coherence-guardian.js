(() => {
  const VERSION='27.2-strict';
  const q=(s,r=document)=>r?.querySelector?.(s)||null;
  const qa=(s,r=document)=>[...(r?.querySelectorAll?.(s)||[])];
  const norm=(v='')=>String(v).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,' ').trim();
  const esc=(v='')=>String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const state={sig:''};
  const clean=v=>String(v||'').replace(/^\s*Un compañero respondió\s*[“\"][^”\"]+[”\"]\.\s*Ayúdalo a corregir el reto:\s*/i,'').replace(/^\s*Reto final\s*·\s*sin pista:\s*/i,'').replace(/\s+/g,' ').trim();
  const quoted=s=>[...String(s).matchAll(/[“\"]([^”\"]+)[”\"]/g)].map(m=>m[1]);
  const nums=s=>(String(s).match(/\d+(?:[.,]\d+)?/g)||[]).map(x=>Number(x.replace(/\./g,'').replace(',','.'))).filter(Number.isFinite);
  function context(modal){const prompt=clean(q('#curriculumGamePrompt',modal)?.textContent);const options=qa('#curriculumGameOptions .curriculum-game-option strong,#curriculumGameOptions button strong',modal).map(x=>String(x.textContent||'').trim()).filter(Boolean);const kicker=String(q('#curriculumGameKicker',modal)?.textContent||'');const title=String(q('#curriculumGameTitle',modal)?.textContent||'');const subject=/lenguaje/i.test(kicker)?'language':/ciencia/i.test(kicker)?'science':/social/i.test(kicker)?'social':/ingl[eé]s|english/i.test(kicker)?'english':'math';return{prompt,n:norm(prompt),options,kicker,title,subject};}
  function intent(c){const s=c.n;
    if(/con que sonido empieza|sonido inicial|empieza con el sonido/.test(s))return'initial-sound';
    if(/palabra empieza igual|empieza igual que/.test(s))return'same-sound';
    if(/rima con|que palabra rima/.test(s))return'rhyme';
    if(/cuantas silabas|separa.*silaba/.test(s))return'syllables';
    if(/completa.*_|letra.*falta|letra.*completa/.test(s))return'missing-letter';
    if(/menor a mayor|orden ascendente/.test(s))return'order-asc';
    if(/mayor a menor|orden descendente/.test(s))return'order-desc';
    if(/cual.*mayor|numero mayor|mas grande/.test(s))return'compare-max';
    if(/cual.*menor|numero menor|mas pequeno/.test(s))return'compare-min';
    if(/que numero viene despues|numero anterior|esta entre/.test(s))return'number-neighbor';
    if(/valor posicional|unidad|decena|centena|millares|descompon/.test(s))return'place-value';
    if(/\d+\s*[+−\-×÷]\s*\d+|cuantos.*quedan|cuantos.*tienes|reparte|grupos iguales|cada grupo|entre los dos/.test(s))return'arithmetic';
    if(/que operacion|operacion usar/.test(s))return'choose-operation';
    if(/patron|secuencia|cual sigue|completa.*,…/.test(s))return'pattern';
    if(/figura|triangulo|cuadrado|rectangulo|circulo|angulo|lados|perimetro|area|volumen/.test(s))return'geometry';
    if(/arriba|abajo|dentro|fuera|izquierda|derecha|al lado|sobre la mesa/.test(s))return'spatial';
    if(/longitud|medir|peso|capacidad|hora|minuto|kilogram|gramo|litro|centimet|metro|dinero|moneda/.test(s))return'measurement';
    if(/fraccion|mitad|tercio|cuarto|numerador|denominador|\d+\/\d+/.test(s))return'fraction';
    if(/grafica|pictograma|tabla|moda|media|mediana|probabilidad|votos/.test(s))return'data';
    if(c.subject==='language'){
      if(/verbo|sustantivo|adjetivo|pronombre|conector|oracion/.test(s))return'grammar';
      if(/mayuscula|punto|coma|signo|bien escrita|ortografia/.test(s))return'editing';
      if(/primero|luego|finalmente|orden logico/.test(s))return'story-sequence';
      if(/idea principal|idea central|resumen/.test(s))return'main-idea';
      if(/inferir|inferencia|pistas del texto/.test(s))return'inference';
      if(/quien|que hizo|que hace|lee:|segun el texto/.test(s))return'reading-explicit';
      if(/opinion|evidencia|argument|fuente/.test(s))return'evidence';
      return'language-safe';
    }
    if(c.subject==='science'){
      if(/cuerpo|organo|sentido|pulmon|corazon|hueso|sistema/.test(s))return'body';
      if(/habitat|ecosistema|cadena aliment|ser vivo|productor|consumidor/.test(s))return'ecosystem';
      if(/solido|liquido|gas|material|mezcla|derretir/.test(s))return'matter';
      if(/sonido|vibracion/.test(s))return'vibration';
      if(/fuerza|movimiento|energia|maquina/.test(s))return'force';
      if(/circuito|electric|bombillo/.test(s))return'circuit';
      if(/hipotesis|experimento|variable|conclusion/.test(s))return'experiment';
      if(/clima|lluvia|viento|nube|tierra|luna|solar|agua/.test(s))return'earth-cycle';
      return'science-safe';
    }
    if(c.subject==='social'){
      if(/mapa|croquis|ruta|territorio|region|direccion/.test(s))return'map';
      if(/antes|despues|pasado|presente|historia|linea de tiempo/.test(s))return'timeline';
      if(/derecho|responsabilidad|norma|acuerdo|democracia|convivencia/.test(s))return'civics';
      return'social-safe';
    }
    if(c.subject==='english'){
      if(/how do you say/.test(s))return'translation';
      if(/hello|goodbye|good morning|thank you|please/.test(s))return'greeting';
      if(/left|right|straight|turn|direction/.test(s))return'english-route';
      if(/complete:|___|\bam\b|\bis\b|\bare\b/.test(s))return'english-fill';
      return'english-safe';
    }
    return'math-safe';
  }
  function ensureStyles(){if(q('#v27StrictStyles'))return;const s=document.createElement('style');s.id='v27StrictStyles';s.textContent=`.v27-strict{height:100%;min-height:280px;display:grid;place-items:center;padding:24px;background:linear-gradient(180deg,#edf8ff 0 55%,#e1f2d8 55%);overflow:hidden}.v27-strict-center{display:grid;place-items:center;gap:14px;width:min(92%,760px);text-align:center}.v27-strict-word{font-size:clamp(2rem,5vw,4rem);font-weight:1000;color:#2e2948}.v27-strict-focus{color:#5b4bff;animation:v27StrictPulse 1s ease-in-out infinite}.v27-strict-mouth{font-size:3.6rem;animation:v27StrictTalk .75s ease-in-out infinite}.v27-strict-wave{display:flex;gap:6px;height:36px;align-items:center}.v27-strict-wave i{width:6px;border-radius:8px;background:#5b4bff;animation:v27StrictWave .8s ease-in-out infinite}.v27-strict-wave i:nth-child(2){animation-delay:.12s}.v27-strict-wave i:nth-child(3){animation-delay:.24s}.v27-strict-wave i:nth-child(4){animation-delay:.36s}.v27-strict-options,.v27-strict-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}.v27-strict-btn{border:0;border-radius:16px;background:#fff;padding:11px 16px;min-width:62px;font:inherit;font-weight:950;color:#302a51;box-shadow:0 8px 20px rgba(45,38,95,.11);transition:.25s}.v27-strict-btn:hover,.v27-strict-btn:focus-visible{transform:translateY(-5px);outline:3px solid rgba(91,75,255,.18)}.v27-strict-btn.good{background:#eafff1;box-shadow:0 0 0 3px #65cf8b}.v27-strict-btn.bad{animation:v27StrictShake .3s ease}.v27-strict-slot{min-width:100px;min-height:70px;border:2px dashed #aaa1df;border-radius:18px;background:rgba(255,255,255,.62);display:grid;place-items:center;font-weight:950}.v27-strict-slot.filled{border-style:solid;border-color:#5b4bff;background:#fff}.v27-strict-caption{font-size:.88rem;font-weight:850;color:#625b7f;max-width:620px}.v27-strict-icon{font-size:4.2rem;animation:v27StrictFloat 2s ease-in-out infinite}@keyframes v27StrictPulse{50%{transform:scale(1.15)}}@keyframes v27StrictTalk{50%{transform:scaleY(.8)}}@keyframes v27StrictWave{0%,100%{height:8px}50%{height:34px}}@keyframes v27StrictShake{25%{transform:translateX(-7px)}75%{transform:translateX(7px)}}@keyframes v27StrictFloat{50%{transform:translateY(-8px)}}@media(prefers-reduced-motion:reduce){.v27-strict *{animation:none!important;transition:none!important}}`;document.head.appendChild(s);}
  function setCommand(scene,t){const el=q('.v27-command',scene);if(el)el.textContent=t;}
  function setWorld(scene,html){const w=q('.v27-world',scene);if(!w)return null;w.innerHTML=html;return w;}
  function buttons(c){return c.options.slice(0,6).map((o,i)=>`<button class="v27-strict-btn" data-v="${esc(o)}" data-i="${i}">${esc(o)}</button>`).join('');}
  function wrong(b){b.classList.remove('bad');void b.offsetWidth;b.classList.add('bad');}
  function renderInitial(scene,c){const word=quoted(c.prompt)[0]||c.prompt.match(/\b([A-Za-zÁÉÍÓÚáéíóúÑñ]{2,})\b(?=[?”\"]?$)/)?.[1]||'';const first=norm(word).charAt(0);const rest=word.slice(1);setCommand(scene,`Escucha cómo empieza “${word}”`);const w=setWorld(scene,`<div class="v27-strict"><div class="v27-strict-center"><div class="v27-strict-mouth">👄</div><div class="v27-strict-wave"><i></i><i></i><i></i><i></i></div><div class="v27-strict-word"><span class="v27-strict-focus">${esc((first||'?').toUpperCase())}</span>${esc(rest)}</div><div class="v27-strict-options">${buttons(c)}</div><div class="v27-strict-caption">Toca la letra que representa el sonido inicial.</div></div></div>`);qa('.v27-strict-btn',w).forEach(b=>b.onclick=()=>norm(b.dataset.v)===first?b.classList.add('good'):wrong(b));}
  function renderOrder(scene,c,desc=false){const vals=[];c.options.forEach(o=>nums(o).forEach(n=>{if(!vals.includes(n))vals.push(n)}));if(vals.length<2)return renderSafe(scene,c,'Ordena usando la pregunta');const target=[...vals].sort((a,b)=>desc?b-a:a-b);let step=0;setCommand(scene,desc?'Del mayor al menor':'Del menor al mayor');const w=setWorld(scene,`<div class="v27-strict"><div class="v27-strict-center"><div class="v27-strict-row">${target.map((_,i)=>`<div class="v27-strict-slot" data-i="${i}">${i+1}</div>`).join('')}</div><div class="v27-strict-row">${[...target].reverse().map(v=>`<button class="v27-strict-btn" data-n="${v}">${v.toLocaleString('es-CO')}</button>`).join('')}</div></div></div>`);qa('.v27-strict-btn',w).forEach(b=>b.onclick=()=>{const n=Number(b.dataset.n);if(n!==target[step])return wrong(b);const slot=q(`.v27-strict-slot[data-i="${step}"]`,w);slot.textContent=n.toLocaleString('es-CO');slot.classList.add('filled');b.style.opacity='.25';b.disabled=true;step++;});}
  function renderCompare(scene,c,max=true){const vals=[];c.options.forEach(o=>nums(o).forEach(n=>{if(!vals.includes(n))vals.push(n)}));if(vals.length<2)return renderSafe(scene,c,'Compara los valores');const target=max?Math.max(...vals):Math.min(...vals);setCommand(scene,max?'Encuentra el mayor':'Encuentra el menor');const w=setWorld(scene,`<div class="v27-strict"><div class="v27-strict-center"><div class="v27-strict-icon">⚖️</div><div class="v27-strict-row">${vals.map(v=>`<button class="v27-strict-btn" data-n="${v}">${v.toLocaleString('es-CO')}</button>`).join('')}</div></div></div>`);qa('.v27-strict-btn',w).forEach(b=>b.onclick=()=>Number(b.dataset.n)===target?b.classList.add('good'):wrong(b));}
  function renderSyllables(scene,c){const word=quoted(c.prompt)[0]||'';setCommand(scene,word?`Da una palmada por cada sílaba de “${word}”`:'Cuenta las sílabas');setWorld(scene,`<div class="v27-strict"><div class="v27-strict-center"><div class="v27-strict-icon">👏</div><div class="v27-strict-word">${esc(word||c.prompt)}</div><div class="v27-strict-options">${buttons(c)}</div></div></div>`);}
  function renderGeometry(scene,c){setCommand(scene,'Mira la forma que describe la pregunta');setWorld(scene,`<div class="v27-strict"><div class="v27-strict-center"><div class="v27-strict-icon">🔷</div><div class="v27-strict-caption">${esc(c.prompt)}</div><div class="v27-strict-options">${buttons(c)}</div></div></div>`);}
  function renderProcess(scene,c,type){const icons={body:'🫀',ecosystem:'🌿',matter:'🧪',vibration:'🔊',force:'🧲',circuit:'💡',experiment:'🔬','earth-cycle':'🌦️',map:'🗺️',timeline:'🕰️',civics:'🤝',translation:'💬',greeting:'👋','english-route':'🧭'};setCommand(scene,shortCommand(c.prompt));setWorld(scene,`<div class="v27-strict"><div class="v27-strict-center"><div class="v27-strict-icon">${icons[type]||'✦'}</div><div class="v27-strict-caption">${esc(c.prompt)}</div><div class="v27-strict-options">${buttons(c)}</div></div></div>`);}
  function shortCommand(t){const s=String(t||'');return s.length>52?s.slice(0,51).trim()+'…':s;}
  function renderSafe(scene,c,label='Observa y decide'){setCommand(scene,label);setWorld(scene,`<div class="v27-strict"><div class="v27-strict-center"><div class="v27-strict-icon">✦</div><div class="v27-strict-caption">${esc(c.prompt)}</div><div class="v27-strict-options">${buttons(c)}</div><div class="v27-strict-caption">La escena usa únicamente información de este reto.</div></div></div>`);}
  function render(scene,c,type){scene.dataset.v27Strict='true';scene.dataset.v27Intent=type;
    if(type==='initial-sound'||type==='same-sound'||type==='rhyme'||type==='missing-letter')return renderInitial(scene,c);
    if(type==='syllables')return renderSyllables(scene,c);
    if(type==='order-asc')return renderOrder(scene,c,false);if(type==='order-desc')return renderOrder(scene,c,true);if(type==='compare-max')return renderCompare(scene,c,true);if(type==='compare-min')return renderCompare(scene,c,false);
    if(type==='geometry')return renderGeometry(scene,c);
    if(['body','ecosystem','matter','vibration','force','circuit','experiment','earth-cycle','map','timeline','civics','translation','greeting','english-route'].includes(type))return renderProcess(scene,c,type);
    return renderSafe(scene,c,type.replace(/-(safe|explicit)$/,'').replace(/-/g,' '));
  }
  function sync(){const modal=q('#curriculumGameModal');if(!modal||modal.hidden||!modal.getClientRects().length)return;const c=context(modal);if(!c.prompt)return;const type=intent(c);const sig=`${c.kicker}|${c.title}|${c.prompt}|${c.options.join('|')}|${type}`;const scene=q('.v27-story',modal);if(!scene)return;if(sig===state.sig&&scene.dataset.v27Strict==='true'&&scene.dataset.v27Intent===type)return;state.sig=sig;ensureStyles();render(scene,c,type);document.documentElement.dataset.novaCoherenceVersion=VERSION;}
  function schedule(){clearTimeout(schedule.t);schedule.t=setTimeout(sync,30)}
  function init(){ensureStyles();sync();const modal=q('#curriculumGameModal');if(modal)new MutationObserver(schedule).observe(modal,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['hidden','class']});window.addEventListener('nova:v25:updated',schedule);window.NOVACoherenceGuardian={version:VERSION,sync};}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(init,0),{once:true});else setTimeout(init,0);
})();