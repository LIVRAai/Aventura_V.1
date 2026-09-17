(() => {
  const {q,qa,norm,instruction,reveal,track,numberFrom,makeDraggable,register}=window.NOVAV27;
  function renderSpatial(scene) {
    const world = q('[data-v27-world]', scene);
    world.innerHTML = `<div class="v27-sky"><i class="cloud c1"></i><i class="cloud c2"></i><i class="rain"></i></div>
      <div class="v27-hill h1"></div><div class="v27-hill h2"></div>
      <div class="v27-tree"><i></i><b></b></div>
      <div class="v27-cave"><span></span></div>
      <div class="v27-rock"></div>
      <div class="v27-zone z-cave" data-rel="dentro"></div>
      <div class="v27-zone z-tree" data-rel="debajo"></div>
      <div class="v27-zone z-left" data-rel="izquierda"></div>
      <div class="v27-zone z-out" data-rel="fuera"></div>
      <button class="v27-mover" type="button" aria-label="Mover personaje">🦊</button>`;
    const tasks = [
      ['dentro', 'Pon a Luma dentro de la cueva.'],
      ['debajo', 'Ahora llévala debajo del árbol.'],
      ['izquierda', 'Déjala a la izquierda de la roca.'],
      ['fuera', 'Termina fuera de la cueva.']
    ];
    let step = 0;
    const mover = q('.v27-mover', world), targets = qa('.v27-zone', world);
    instruction(scene, tasks[0][1], 0);
    const reset = () => { mover.style.transform = 'translate(0px,0px)'; targets.forEach(z => z.classList.toggle('target', z.dataset.rel === tasks[step]?.[0])); };
    reset();
    makeDraggable(mover, scene, targets, hit => {
      if (hit.dataset.rel !== tasks[step][0]) { hit.classList.add('no'); setTimeout(() => hit.classList.remove('no'), 500); reset(); return; }
      hit.classList.add('yes'); mover.classList.add('happy');
      track('immersive_interaction', { type: 'spatial', relation: hit.dataset.rel });
      step++;
      if (step >= tasks.length) { instruction(scene, '¡Lo ubicaste usando el espacio!', 3); reveal(scene, 'DENTRO · DEBAJO · IZQUIERDA · FUERA'); return; }
      setTimeout(() => { mover.classList.remove('happy'); reset(); instruction(scene, tasks[step][1], step); }, 550);
    });
  }

  function renderPlaceValue(scene, context) {
    const world = q('[data-v27-world]', scene);
    const target = numberFrom(context, 3427);
    const digits = String(target).padStart(4, '0').slice(-4).split('').map(Number);
    world.innerHTML = `<div class="v27-city"><i class="sun"></i><i class="road"></i><i class="truck">▰</i></div>
      <div class="v27-place-grid">${['1000','100','10','1'].map((v,i)=>`<button data-place="${i}"><span>${v}</span><b>0</b><i></i></button>`).join('')}</div>
      <div class="v27-cargo">${['1000','100','10','1'].map((v,i)=>`<button data-add="${i}">+${v}</button>`).join('')}</div>`;
    const counts = [0,0,0,0];
    instruction(scene, `Construye ${target} con bloques.`, 0);
    qa('[data-add]', world).forEach(btn => btn.onclick = () => {
      const i = Number(btn.dataset.add); if (counts[i] >= digits[i]) return;
      counts[i]++;
      const slot = q(`[data-place="${i}"]`, world); q('b', slot).textContent = counts[i];
      slot.style.setProperty('--fill', `${Math.max(8, counts[i] * 11)}%`); slot.classList.add('pulse'); setTimeout(()=>slot.classList.remove('pulse'),300);
      q('.truck', world)?.classList.add('go'); setTimeout(()=>q('.truck', world)?.classList.remove('go'),450);
      const total = counts.reduce((sum,c,j)=>sum+c*[1000,100,10,1][j],0);
      instruction(scene, total === target ? '¡La ciudad quedó construida!' : `${total} de ${target}`, Math.min(2, counts.filter(Boolean).length));
      if (counts.every((c,j)=>c===digits[j])) { reveal(scene, `${digits[0]}M + ${digits[1]}C + ${digits[2]}D + ${digits[3]}U = ${target}`); track('immersive_interaction',{type:'place-value',target}); }
    });
  }

  function renderAddSub(scene, context) {
    const world = q('[data-v27-world]', scene);
    const raw = norm(context); const subtract = /rest|quitar|diferencia|-/.test(raw);
    const nums = (String(context).match(/\d+/g)||[]).map(Number); const a = Math.min(10, nums[0]||7), b = Math.min(subtract ? a : 8, nums[1]||3);
    world.innerHTML = `<div class="v27-market"><i class="awning"></i><span class="seller">N</span><div class="basket"></div></div>
      <div class="v27-fruit-bank">${Array.from({length:a},(_,i)=>`<button data-fruit="${i}">●</button>`).join('')}</div>
      <div class="v27-counter"><strong>${a}</strong><span>${subtract?'−':'+'}</span><strong>${b}</strong></div>`;
    let n=0;
    instruction(scene, subtract ? `Quita ${b} frutas de la canasta.` : `Agrega ${b} frutas a la canasta.`,0);
    const fruits = qa('[data-fruit]',world);
    if (!subtract) fruits.slice(b).forEach(x=>x.classList.add('ghost'));
    fruits.forEach((btn,i)=>btn.onclick=()=>{
      if(btn.dataset.done) return;
      if(!subtract && i>=b) return;
      btn.dataset.done='1'; btn.classList.add(subtract?'away':'in'); n++;
      if(n===b){const result=subtract?a-b:a+b; instruction(scene,'Mira lo que cambió.',2); reveal(scene,`${a} ${subtract?'−':'+'} ${b} = ${result}`);}
    });
  }

  function renderPattern(scene) {
    const world = q('[data-v27-world]', scene);
    const seq = ['◆','●','◆','●','◆'];
    world.innerHTML = `<div class="v27-night"><i class="moon"></i>${seq.map((x,i)=>`<span class="lantern l${i}">${x}</span>`).join('')}<span class="lantern missing">?</span></div>
      <div class="v27-choice-row"><button>◆</button><button>●</button><button>▲</button></div>`;
    instruction(scene,'¿Qué farol sigue?',0);
    qa('.v27-choice-row button',world).forEach(btn=>btn.onclick=()=>{
      if(btn.textContent==='●'){q('.missing',world).textContent='●';q('.missing',world).classList.add('lit');reveal(scene,'◆ ● ◆ ● ◆ ●');}
      else {btn.classList.add('shake');setTimeout(()=>btn.classList.remove('shake'),400);}
    });
  }

  function renderMultiply(scene, context) {
    const world=q('[data-v27-world]',scene); const nums=(String(context).match(/\d+/g)||[]).map(Number); const groups=Math.max(2,Math.min(4,nums[0]||3)), each=Math.max(2,Math.min(5,nums[1]||4));
    world.innerHTML=`<div class="v27-garden"><i class="sun"></i>${Array.from({length:groups},(_,i)=>`<button class="plot" data-plot="${i}"><span></span></button>`).join('')}<b class="gardener">N</b></div>`;
    let planted=0; instruction(scene,`Planta ${each} semillas en cada parcela.`,0);
    qa('.plot',world).forEach(plot=>plot.onclick=()=>{if(plot.dataset.done)return;plot.dataset.done='1';plot.querySelector('span').innerHTML=Array.from({length:each},()=>'<i>✦</i>').join('');plot.classList.add('grow');planted++;if(planted===groups)reveal(scene,`${groups} × ${each} = ${groups*each}`);});
  }

  function renderShare(scene, context) {
    const world=q('[data-v27-world]',scene); const nums=(String(context).match(/\d+/g)||[]).map(Number); let total=Math.max(6,Math.min(20,nums[0]||12)), kids=Math.max(2,Math.min(4,nums[1]||3)); if(total<kids)total=kids*3;
    world.innerHTML=`<div class="v27-picnic"><i class="cloth"></i>${Array.from({length:kids},(_,i)=>`<div class="friend f${i}"><span>${['◕','◔','◒','◓'][i]}</span><b>0</b></div>`).join('')}</div><div class="v27-berries">${Array.from({length:total},(_,i)=>`<button data-berry="${i}">●</button>`).join('')}</div>`;
    let n=0; instruction(scene,`Reparte ${total} por igual.`,0);
    qa('[data-berry]',world).forEach(btn=>btn.onclick=()=>{if(btn.dataset.done)return;btn.dataset.done='1';btn.classList.add('fly');const friend=qa('.friend',world)[n%kids];q('b',friend).textContent=String(Number(q('b',friend).textContent)+1);friend.classList.add('bounce');setTimeout(()=>friend.classList.remove('bounce'),300);n++;if(n===total){const each=Math.floor(total/kids);reveal(scene,`${total} ÷ ${kids} = ${each}${total%kids?` · sobra ${total%kids}`:''}`);}});
  }

  function renderFraction(scene, context) {
    const world=q('[data-v27-world]',scene); const raw=norm(context); const pieces=/tercio/.test(raw)?3:/cuarto/.test(raw)?4:4; const wanted=/mitad/.test(raw)?Math.round(pieces/2):/tercio/.test(raw)?1:/cuarto/.test(raw)?1:2;
    world.innerHTML=`<div class="v27-table"><div class="v27-pizza">${Array.from({length:pieces},(_,i)=>`<button data-slice="${i}" style="--r:${i*360/pieces}deg"></button>`).join('')}<i></i></div><span class="plate"></span></div>`;
    let n=0; instruction(scene,`Sirve ${wanted} de ${pieces} porciones.`,0);
    qa('[data-slice]',world).forEach(btn=>btn.onclick=()=>{if(btn.dataset.done||n>=wanted)return;btn.dataset.done='1';btn.classList.add('served');n++;if(n===wanted)reveal(scene,`${wanted}/${pieces}`);});
  }

  function renderMeasure(scene, context) {
    const world=q('[data-v27-world]',scene), raw=norm(context); const area=/area|perimetro/.test(raw), time=/hora|tiempo/.test(raw), money=/dinero|precio/.test(raw);
    if(time){world.innerHTML=`<div class="v27-clock"><i></i><b></b><span></span></div><div class="v27-time-actions"><button data-h="8">☀</button><button data-h="3">◐</button><button data-h="8n">☾</button></div>`;instruction(scene,'Mueve el reloj a cada momento.',0);qa('[data-h]',world).forEach((b,i)=>b.onclick=()=>{q('.v27-clock',world).style.setProperty('--hour',`${i*105}deg`);b.classList.add('on');if(qa('[data-h].on',world).length===3)reveal(scene,'MAÑANA · TARDE · NOCHE');});return;}
    if(money){world.innerHTML=`<div class="v27-shop"><span class="toy">◆</span><b>$ 7</b></div><div class="v27-coins">${[5,2,1,1].map((v,i)=>`<button data-v="${v}">$${v}</button>`).join('')}</div>`;let sum=0;instruction(scene,'Paga exactamente $7.',0);qa('[data-v]',world).forEach(b=>b.onclick=()=>{if(b.dataset.done)return;b.dataset.done='1';b.classList.add('paid');sum+=Number(b.dataset.v);instruction(scene,`$${sum}`,Math.min(2,sum));if(sum===7)reveal(scene,'5 + 2 = 7');if(sum>7){sum=0;qa('[data-v]',world).forEach(x=>{delete x.dataset.done;x.classList.remove('paid')});instruction(scene,'Prueba otra combinación.',0);}});return;}
    world.innerHTML=`<div class="v27-workshop"><div class="board a"></div><div class="board b"></div><div class="ruler">${Array.from({length:10},(_,i)=>`<i>${i}</i>`).join('')}</div></div><div class="v27-measure-actions"><button data-size="a">Mide A</button><button data-size="b">Mide B</button></div>`; instruction(scene,area?'Compara sus lados.':'¿Cuál es más largo?',0); qa('[data-size]',world).forEach(b=>b.onclick=()=>{qa('.board',world).forEach(x=>x.classList.remove('focus'));q(`.board.${b.dataset.size}`,world).classList.add('focus');if(b.dataset.size==='b')reveal(scene,area?'LADO × LADO':'B ES MÁS LARGO');});
  }

  function renderData(scene) {
    const world=q('[data-v27-world]',scene); const values=[3,5,2];
    world.innerHTML=`<div class="v27-poll">${['◕','◆','▲'].map((x,i)=>`<button data-bar="${i}"><span>${x}</span><i style="--h:${values[i]*16}%"></i><b>${values[i]}</b></button>`).join('')}</div>`; instruction(scene,'Toca la barra más alta.',0); qa('[data-bar]',world).forEach((b,i)=>b.onclick=()=>{if(i===1){b.classList.add('winner');reveal(scene,'5 ES LA MAYOR CANTIDAD');}else{b.classList.add('shake');setTimeout(()=>b.classList.remove('shake'),350);}});
  }

  function renderProblem(scene) {
    const world=q('[data-v27-world]',scene); world.innerHTML=`<div class="v27-story-problem"><div class="bus"><i></i><span>3</span></div><div class="stop"><i></i><span>+2</span></div><div class="people">● ● ●</div></div><div class="v27-choice-row"><button data-a="4">4</button><button data-a="5">5</button><button data-a="6">6</button></div>`; instruction(scene,'Suben 2. ¿Cuántos viajan ahora?',0); qa('[data-a]',world).forEach(b=>b.onclick=()=>{if(b.dataset.a==='5'){q('.bus',world).classList.add('drive');reveal(scene,'3 + 2 = 5');}else{b.classList.add('shake');setTimeout(()=>b.classList.remove('shake'),350);}});
  }


  register({'spatial':renderSpatial,'place-value':renderPlaceValue,'add-sub':renderAddSub,'pattern':renderPattern,'multiply':renderMultiply,'share':renderShare,'fraction':renderFraction,'measure':renderMeasure,'data':renderData,'problem':renderProblem});
})();
