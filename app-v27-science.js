(() => {
  const {q,qa,instruction,reveal,register}=window.NOVAV27;
  function renderSenses(scene) {
    const world=q('[data-v27-world]',scene); world.innerHTML=`<div class="v27-face"><button data-sense="ver" class="eye">◉</button><button data-sense="oir" class="ear">)</button><button data-sense="oler" class="nose">⌁</button><button data-sense="saborear" class="mouth">⌣</button><button data-sense="tocar" class="hand">✋</button></div><div class="v27-sense-object">✿</div>`;let n=0;instruction(scene,'Descubre la flor con tus sentidos.',0);qa('[data-sense]',world).forEach(b=>b.onclick=()=>{if(b.dataset.done)return;b.dataset.done='1';b.classList.add('on');q('.v27-sense-object',world).classList.add(`s-${b.dataset.sense}`);n++;instruction(scene,b.dataset.sense.toUpperCase(),Math.min(3,n));if(n===5)reveal(scene,'5 SENTIDOS · 1 ENTORNO');});
  }

  function renderLivingSort(scene) {
    const world=q('[data-v27-world]',scene); const cards=[['plant','VIVO','✿'],['rock','NO VIVO','◆'],['bird','VIVO','◕'],['ball','NO VIVO','●']];
    world.innerHTML=`<div class="v27-sort-zones"><div data-kind="VIVO"><span>VIVE</span></div><div data-kind="NO VIVO"><span>NO VIVE</span></div></div><div class="v27-sort-cards">${cards.map((c,i)=>`<button data-kind="${c[1]}" data-card="${i}">${c[2]}</button>`).join('')}</div>`;let n=0;instruction(scene,'Clasifica tocando cada objeto.',0);qa('[data-card]',world).forEach(b=>b.onclick=()=>{if(b.dataset.done)return;b.dataset.done='1';b.classList.add(b.dataset.kind==='VIVO'?'live':'not-live');n++;if(n===cards.length)reveal(scene,'LOS SERES VIVOS CAMBIAN Y NECESITAN RECURSOS');});
  }

  function renderLifeCycle(scene) {
    const world=q('[data-v27-world]',scene); const phases=['●','🌱','🌿','✿'];let step=0;world.innerHTML=`<div class="v27-cycle-stage"><span>${phases[0]}</span><i class="sun"></i><i class="water"></i></div><button class="v27-grow-btn">Toca para crecer</button>`;instruction(scene,'Haz crecer la planta.',0);q('.v27-grow-btn',world).onclick=()=>{step=Math.min(phases.length-1,step+1);q('.v27-cycle-stage>span',world).textContent=phases[step];q('.v27-cycle-stage',world).classList.add('pulse');setTimeout(()=>q('.v27-cycle-stage',world).classList.remove('pulse'),350);instruction(scene,['Semilla','Brote','Planta','Flor'][step],step);if(step===3)reveal(scene,'SEMILLA → BROTE → PLANTA → FLOR');};
  }

  function renderEcosystem(scene) {
    const world=q('[data-v27-world]',scene);const chain=[['sun','☀'],['plant','✿'],['rabbit','◕'],['fox','◆']];let step=0;world.innerHTML=`<div class="v27-eco">${chain.map((c,i)=>`<button data-eco="${i}" class="${c[0]}">${c[1]}</button>${i<chain.length-1?'<i></i>':''}`).join('')}</div>`;instruction(scene,'Conecta la energía del ecosistema.',0);qa('[data-eco]',world).forEach((b,i)=>b.onclick=()=>{if(i!==step){b.classList.add('shake');setTimeout(()=>b.classList.remove('shake'),300);return;}b.classList.add('on');step++;if(step===chain.length)reveal(scene,'SOL → PLANTA → ANIMAL → DEPREDADOR');});
  }

  function renderMatter(scene) {
    const world=q('[data-v27-world]',scene);let state=0;const states=[['❄','SÓLIDO'],['≈','LÍQUIDO'],['⌁','GAS']];world.innerHTML=`<div class="v27-beaker"><span>${states[0][0]}</span><i></i></div><div class="v27-lab-actions"><button data-d="-1">ENFRÍA</button><button data-d="1">CALIENTA</button></div>`;instruction(scene,'Cambia la temperatura.',0);qa('[data-d]',world).forEach(b=>b.onclick=()=>{state=Math.max(0,Math.min(2,state+Number(b.dataset.d)));q('.v27-beaker span',world).textContent=states[state][0];q('.v27-beaker',world).dataset.state=String(state);instruction(scene,states[state][1],state);if(state===2)reveal(scene,'SÓLIDO ⇄ LÍQUIDO ⇄ GAS');});
  }

  function renderWeather(scene) {
    const world=q('[data-v27-world]',scene);world.innerHTML=`<div class="v27-weather"><i class="sun"></i><i class="cloud"></i><i class="wind"></i><i class="rain"></i><span class="thermo"></span></div><div class="v27-weather-actions"><button data-w="sun">☀</button><button data-w="rain">☂</button><button data-w="wind">≈</button></div>`;let n=0;instruction(scene,'Cambia el clima.',0);qa('[data-w]',world).forEach(b=>b.onclick=()=>{q('.v27-weather',world).dataset.mode=b.dataset.w;b.classList.add('on');n++;if(n>=3)reveal(scene,'SOL · LLUVIA · VIENTO');});
  }

  function renderEnergy(scene) {
    const world=q('[data-v27-world]',scene);world.innerHTML=`<div class="v27-circuit"><button class="switch">I / O</button><i class="wire w1"></i><i class="wire w2"></i><span class="bulb"></span><span class="fan">✣</span></div>`;instruction(scene,'Cierra el circuito.',0);q('.switch',world).onclick=()=>{world.classList.toggle('powered');if(world.classList.contains('powered'))reveal(scene,'ENERGÍA → LUZ + MOVIMIENTO');};
  }

  function renderSolar(scene) {
    const world=q('[data-v27-world]',scene);world.innerHTML=`<div class="v27-space"><span class="sun">●</span><span class="earth">●<i class="moon"></i></span><i class="orbit"></i></div><input class="v27-orbit-slider" type="range" min="0" max="360" value="0">`;instruction(scene,'Mueve la Tierra alrededor del Sol.',0);q('.v27-orbit-slider',world).oninput=e=>{world.style.setProperty('--orbit',`${e.target.value}deg`);if(Number(e.target.value)>330)reveal(scene,'UNA VUELTA = UN CICLO');};
  }

  function renderBody(scene) {
    const world=q('[data-v27-world]',scene);world.innerHTML=`<div class="v27-body"><i class="head"></i><i class="lungs"></i><i class="heart"></i><i class="stomach"></i><i class="flow"></i></div><div class="v27-body-actions"><button data-o="lungs">RESPIRA</button><button data-o="heart">PULSO</button><button data-o="stomach">DIGIERE</button></div>`;let n=0;instruction(scene,'Activa los sistemas.',0);qa('[data-o]',world).forEach(b=>b.onclick=()=>{q(`.${b.dataset.o}`,world).classList.add('active');b.classList.add('on');n++;if(n>=3)reveal(scene,'ÓRGANOS → SISTEMAS → CUERPO');});
  }

  function renderExperiment(scene) {
    const world=q('[data-v27-world]',scene);world.innerHTML=`<div class="v27-experiment"><div class="pot p1"><span>🌱</span><i></i></div><div class="pot p2"><span>🌱</span><i></i></div><span class="lamp">☀</span></div><div class="v27-exp-actions"><button data-exp="light">DA LUZ A UNA</button><button data-exp="observe">OBSERVA</button></div>`;let lit=false;instruction(scene,'Cambia una sola cosa.',0);q('[data-exp="light"]',world).onclick=()=>{lit=true;q('.p1',world).classList.add('lit');instruction(scene,'Ahora observa las dos.',1);};q('[data-exp="observe"]',world).onclick=()=>{if(!lit)return;q('.p1 span',world).textContent='🌿';q('.p2 span',world).textContent='🌱';reveal(scene,'CAMBIA 1 VARIABLE · COMPARA');};
  }


  register({'senses':renderSenses,'living-sort':renderLivingSort,'life-cycle':renderLifeCycle,'ecosystem':renderEcosystem,'matter-lab':renderMatter,'weather':renderWeather,'energy-lab':renderEnergy,'solar':renderSolar,'body-system':renderBody,'experiment':renderExperiment});
})();
