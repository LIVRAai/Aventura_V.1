(() => {
  const {q,qa,instruction,reveal,say,register}=window.NOVAV27;
  function renderWordForge(scene) {
    const world=q('[data-v27-world]',scene); const letters=['C','A','S','A']; let n=0;
    world.innerHTML=`<div class="v27-forge"><i class="spark-core"></i><div class="word-slot">${letters.map(()=>'<span></span>').join('')}</div></div><div class="v27-letter-bank">${['S','C','A','O','A'].map((l,i)=>`<button data-letter="${l}" data-i="${i}">${l}</button>`).join('')}</div>`; instruction(scene,'Construye CASA.',0); qa('[data-letter]',world).forEach(btn=>btn.onclick=()=>{if(btn.dataset.done||btn.dataset.letter!==letters[n]){btn.classList.add('shake');setTimeout(()=>btn.classList.remove('shake'),300);return;}btn.dataset.done='1';btn.classList.add('fly');qa('.word-slot span',world)[n].textContent=letters[n];n++;if(n===letters.length)reveal(scene,'C · A · S · A');});
  }

  function renderSentenceStage(scene) {
    const world=q('[data-v27-world]',scene); world.innerHTML=`<div class="v27-stage-play"><span class="actor">●</span><span class="prop">◆</span><i class="motion"></i></div><div class="v27-role-row"><button data-role="noun">GATO</button><button data-role="verb">CORRE</button><button data-role="adj">RÁPIDO</button></div>`; instruction(scene,'Toca las palabras y mira qué hacen.',0); qa('[data-role]',world).forEach(b=>b.onclick=()=>{b.classList.add('on');if(b.dataset.role==='noun')q('.actor',world).classList.add('appear');if(b.dataset.role==='verb')q('.actor',world).classList.add('run');if(b.dataset.role==='adj')q('.motion',world).classList.add('fast');if(qa('[data-role].on',world).length===3)reveal(scene,'GATO · CORRE · RÁPIDO');});
  }

  function renderStorySequence(scene) {
    const world=q('[data-v27-world]',scene); const cards=[['2','🌱'],['1','●'],['3','✿']]; let next=1;
    world.innerHTML=`<div class="v27-story-cards">${cards.map(c=>`<button data-order="${c[0]}"><span>${c[1]}</span></button>`).join('')}</div><div class="v27-story-line"></div>`; instruction(scene,'Ordena lo que pasó.',0); qa('[data-order]',world).forEach(b=>b.onclick=()=>{if(Number(b.dataset.order)!==next){b.classList.add('shake');setTimeout(()=>b.classList.remove('shake'),300);return;}b.classList.add('placed');b.style.order=String(next);next++;if(next===4)reveal(scene,'PRIMERO → DESPUÉS → FINAL');});
  }

  function renderReadingClues(scene) {
    const world=q('[data-v27-world]',scene); world.innerHTML=`<div class="v27-clue-world"><span class="character">●</span><i class="umbrella"></i><i class="puddle"></i><i class="cloud"></i><div class="spotlight"></div></div><div class="v27-clues"><button data-clue="umbrella">☂</button><button data-clue="puddle">≈</button><button data-clue="cloud">☁</button></div>`; let n=0;instruction(scene,'Encuentra las pistas de lluvia.',0);qa('[data-clue]',world).forEach(b=>b.onclick=()=>{if(b.dataset.done)return;b.dataset.done='1';b.classList.add('on');q(`.${b.dataset.clue}`,world)?.classList.add('glow');n++;if(n===3)reveal(scene,'LAS PISTAS CUENTAN LO QUE NO SE DICE');});
  }

  function renderEvidence(scene) {
    const world=q('[data-v27-world]',scene); world.innerHTML=`<div class="v27-claim"><strong>“La planta necesita luz”</strong><span class="plant"></span></div><div class="v27-evidence-cards"><button data-good="0">“Me gusta el sol”</button><button data-good="1">Creció hacia la ventana</button><button data-good="0">La maceta es azul</button></div>`;instruction(scene,'Toca la evidencia que sí prueba la idea.',0);qa('[data-good]',world).forEach(b=>b.onclick=()=>{if(b.dataset.good==='1'){q('.plant',world).classList.add('grow');reveal(scene,'IDEA + EVIDENCIA');}else{b.classList.add('fade');}});
  }

  function renderConversation(scene, english=false) {
    const world=q('[data-v27-world]',scene); world.innerHTML=`<div class="v27-dialog"><div class="speaker a"><span>●</span><i></i></div><div class="speaker b"><span>◕</span><i></i></div></div><div class="v27-dialog-actions">${english?'<button data-line="Hi!">Hi!</button><button data-line="How are you?">How are you?</button><button data-line="Bye!">Bye!</button>':'<button data-line="Escucho">👂</button><button data-line="Pregunto">?</button><button data-line="Respondo">✓</button>'}</div>`;let n=0;instruction(scene,english?'Toca para conversar.':'Haz turnos para conversar.',0,english?'en-US':'es-CO');qa('[data-line]',world).forEach(b=>b.onclick=()=>{if(b.dataset.done)return;b.dataset.done='1';b.classList.add('on');qa('.speaker',world)[n%2].classList.add('talk');setTimeout(()=>qa('.speaker',world)[n%2]?.classList.remove('talk'),500);if(english)say(b.dataset.line,'en-US');n++;if(n===3)reveal(scene,english?'HELLO → TALK → BYE':'ESCUCHO → PREGUNTO → RESPONDO');});
  }


  register({'word-forge':renderWordForge,'sentence-stage':renderSentenceStage,'story-sequence':renderStorySequence,'reading-clues':renderReadingClues,'evidence':renderEvidence,'conversation':scene=>renderConversation(scene,false),'english-dialog':scene=>renderConversation(scene,true)});
})();
