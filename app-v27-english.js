(() => {
  const {q,qa,norm,instruction,reveal,say,register}=window.NOVAV27;
  function renderEnglishRoom(scene, context) {
    const world=q('[data-v27-world]',scene); const raw=norm(context); const set=/family/.test(raw)?[['◕','mother'],['◒','father'],['◓','sister'],['◔','brother']]:/body/.test(raw)?[['◉','eyes'],[')','ears'],['✋','hand'],['⌣','mouth']]:/food/.test(raw)?[['●','apple'],['◒','bread'],['≈','water'],['◓','milk']]:/color|number/.test(raw)?[['●','red'],['●','blue'],['●','green'],['●','yellow']]:[['▱','book'],['▰','chair'],['▯','door'],['▣','window']];
    world.innerHTML=`<div class="v27-english-room">${set.map((o,i)=>`<button data-word="${o[1]}" class="o${i}"><span>${o[0]}</span><b>${o[1]}</b></button>`).join('')}<span class="v27-english-nova">N</span></div>`;let n=0;instruction(scene,'Touch and listen.',0,'en-US');qa('[data-word]',world).forEach(b=>b.onclick=()=>{b.classList.add('on');say(b.dataset.word,'en-US');n++;if(n>=4)reveal(scene,set.map(x=>x[1]).join(' · ').toUpperCase());});
  }

  function renderEnglishRoutine(scene) {
    const world=q('[data-v27-world]',scene);const acts=[['☀','wake up'],['◆','eat'],['▣','study'],['☾','sleep']];let step=0;world.innerHTML=`<div class="v27-routine"><span class="char">◕</span><span class="clock">◴</span>${acts.map((a,i)=>`<button data-r="${i}"><span>${a[0]}</span><b>${a[1]}</b></button>`).join('')}</div>`;instruction(scene,'Tap the routine in order.',0,'en-US');qa('[data-r]',world).forEach((b,i)=>b.onclick=()=>{if(i!==step){b.classList.add('shake');setTimeout(()=>b.classList.remove('shake'),250);return;}b.classList.add('on');say(acts[i][1],'en-US');step++;if(step===acts.length)reveal(scene,'WAKE UP → EAT → STUDY → SLEEP');});
  }

  function renderEnglishDirection(scene) {
    window.NOVAV27.renderers['map-route']?.(scene); instruction(scene,'Follow the arrows to the star.',0,'en-US');
  }

  function renderEnglishCompare(scene) {
    const world=q('[data-v27-world]',scene);world.innerHTML=`<div class="v27-compare"><div class="obj small">●</div><div class="obj big">●</div></div><div class="v27-choice-row"><button data-c="bigger">bigger</button><button data-c="smaller">smaller</button></div>`;instruction(scene,'Which word describes the big circle?',0,'en-US');qa('[data-c]',world).forEach(b=>b.onclick=()=>{say(b.dataset.c,'en-US');if(b.dataset.c==='bigger')reveal(scene,'BIG → BIGGER');else b.classList.add('shake');});
  }

  function renderEnglishReading(scene) {
    const world=q('[data-v27-world]',scene);world.innerHTML=`<div class="v27-picture-story"><span class="sun">☀</span><span class="kid">◕</span><span class="ball">●</span><span class="park">♧</span></div><div class="v27-english-facts"><button data-e="park">park</button><button data-e="ball">ball</button><button data-e="sunny">sunny</button></div>`;let n=0;instruction(scene,'Read the picture.',0,'en-US');qa('[data-e]',world).forEach(b=>b.onclick=()=>{b.classList.add('on');say(b.dataset.e,'en-US');n++;if(n>=3)reveal(scene,'SUNNY · PARK · BALL');});
  }

  register({'english-room':renderEnglishRoom,'english-routine':renderEnglishRoutine,'english-direction':renderEnglishDirection,'english-compare':renderEnglishCompare,'english-reading':renderEnglishReading});
})();
