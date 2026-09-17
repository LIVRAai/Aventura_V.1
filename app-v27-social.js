(() => {
  const {q,qa,instruction,reveal,register}=window.NOVAV27;
  function renderCommunity(scene) {
    const world=q('[data-v27-world]',scene);world.innerHTML=`<div class="v27-town"><div class="house">⌂</div><div class="school">▣</div><div class="clinic">✚</div><div class="park">♧</div><span class="walker">●</span></div><div class="v27-town-actions"><button data-go="school">COLEGIO</button><button data-go="clinic">SALUD</button><button data-go="park">PARQUE</button></div>`;let n=0;instruction(scene,'Recorre los lugares que ayudan a la comunidad.',0);qa('[data-go]',world).forEach((b,i)=>b.onclick=()=>{q('.walker',world).className=`walker go-${b.dataset.go}`;b.classList.add('on');n++;if(n>=3)reveal(scene,'PERSONAS + LUGARES + SERVICIOS = COMUNIDAD');});
  }

  function renderRules(scene) {
    const world=q('[data-v27-world]',scene);world.innerHTML=`<div class="v27-crossing"><i class="road"></i><i class="light red"></i><span class="kid">●</span></div><div class="v27-choice-row"><button data-rule="wait">ESPERAR</button><button data-rule="cross">CRUZAR</button></div>`;instruction(scene,'La luz está roja. ¿Qué haces?',0);qa('[data-rule]',world).forEach(b=>b.onclick=()=>{if(b.dataset.rule==='wait'){q('.red',world).classList.add('green');setTimeout(()=>q('.kid',world).classList.add('cross'),500);reveal(scene,'LAS REGLAS PROTEGEN A TODOS');}else{b.classList.add('shake');setTimeout(()=>b.classList.remove('shake'),350);}});
  }

  function renderMap(scene) {
    const world=q('[data-v27-world]',scene); const path=['right','right','down','right']; let step=0;world.innerHTML=`<div class="v27-map"><span class="start">●</span><span class="goal">★</span>${Array.from({length:12},()=>'<i></i>').join('')}<span class="avatar">◕</span></div><div class="v27-arrows"><button data-dir="up">↑</button><button data-dir="left">←</button><button data-dir="down">↓</button><button data-dir="right">→</button></div>`;instruction(scene,'Guía al personaje hasta la estrella.',0);qa('[data-dir]',world).forEach(b=>b.onclick=()=>{if(b.dataset.dir!==path[step]){b.classList.add('shake');setTimeout(()=>b.classList.remove('shake'),250);return;}step++;q('.avatar',world).dataset.step=String(step);if(step===path.length)reveal(scene,'RUTA = DIRECCIONES + REFERENCIAS');});
  }

  function renderTimeline(scene) {
    const world=q('[data-v27-world]',scene);world.innerHTML=`<div class="v27-time-machine"><div class="frame"><span>⌂</span></div><input type="range" min="0" max="2" value="0"><div class="labels"><b>ANTES</b><b>AHORA</b><b>DESPUÉS</b></div></div>`;instruction(scene,'Viaja por el tiempo.',0);q('input',world).oninput=e=>{const v=Number(e.target.value);q('.frame span',world).textContent=['♙','⌂','▣'][v];q('.frame',world).dataset.time=String(v);instruction(scene,['ANTES','AHORA','DESPUÉS'][v],v);if(v===2)reveal(scene,'EL TIEMPO CAMBIA PERSONAS Y LUGARES');};
  }

  function renderCulture(scene) {
    const world=q('[data-v27-world]',scene);world.innerHTML=`<div class="v27-people"><button>◕</button><button>◒</button><button>◓</button><button>◔</button></div><div class="v27-culture-wheel"><span>♫</span><span>✿</span><span>◆</span><span>⌂</span></div>`;let n=0;instruction(scene,'Toca a cada persona y mira su aporte.',0);qa('.v27-people button',world).forEach((b,i)=>b.onclick=()=>{if(b.dataset.done)return;b.dataset.done='1';b.classList.add('on');qa('.v27-culture-wheel span',world)[i].classList.add('show');n++;if(n===4)reveal(scene,'DIFERENTES + JUNTOS');});
  }

  function renderEconomy(scene) {
    const world=q('[data-v27-world]',scene);world.innerHTML=`<div class="v27-supply"><div class="factory">▥</div><div class="truck">▰</div><div class="store">⌂</div><div class="home">⌂</div><i></i></div><button class="v27-flow-btn">MOVER PRODUCTO</button>`;let step=0;instruction(scene,'Sigue el producto.',0);q('.v27-flow-btn',world).onclick=()=>{step++;world.style.setProperty('--s',String(Math.min(3,step)));q('.truck',world).dataset.step=String(Math.min(3,step));if(step>=3)reveal(scene,'PRODUCIR → TRANSPORTAR → VENDER → USAR');};
  }

  function renderDigital(scene) {
    const world=q('[data-v27-world]',scene);world.innerHTML=`<div class="v27-phone"><div class="msg bad">“Ganaste un premio. Envía tu clave.”</div><div class="msg good">“Tarea publicada en el aula oficial.”</div></div><div class="v27-choice-row"><button data-msg="bad">⚠</button><button data-msg="good">✓</button></div>`;instruction(scene,'¿Qué mensaje parece confiable?',0);qa('[data-msg]',world).forEach(b=>b.onclick=()=>{if(b.dataset.msg==='good'){q('.good',world).classList.add('trusted');q('.bad',world).classList.add('blocked');reveal(scene,'FUENTE + EVIDENCIA + CUIDADO');}else{q('.bad',world).classList.add('blocked');instruction(scene,'No compartas claves ni datos.',1);}});
  }

  register({'community':renderCommunity,'rules':renderRules,'map-route':renderMap,'timeline':renderTimeline,'culture':renderCulture,'economy':renderEconomy,'digital':renderDigital});
})();
