(() => {
  const $ = (s) => document.querySelector(s);
  const welcome = $('#trialWelcome');
  const mission = $('#trialMission');
  const result = $('#trialResult');
  const startForm = $('#trialStartForm');
  const childInput = $('#trialChildName');
  const missionLabel = $('#trialMissionLabel');
  const missionTitle = $('#trialMissionTitle');
  const questionCount = $('#trialQuestionCount');
  const progressBar = $('#trialProgressBar');
  const novaText = $('#trialNovaText');
  const skillLabel = $('#trialSkillLabel');
  const prompt = $('#trialQuestionPrompt');
  const options = $('#trialOptions');
  const hintBtn = $('#trialHintBtn');
  const hint = $('#trialHint');
  const feedback = $('#trialFeedback');
  const nextBtn = $('#trialNextBtn');

  const missionNames = [
    ['Misión 1 de 3', 'Entender los números'],
    ['Misión 2 de 3', 'Elegir una estrategia'],
    ['Misión 3 de 3', 'Resolver una situación']
  ];

  const skillMeta = {
    numbers: { label: 'Pensamiento numérico', short: 'Números y cantidades', good: 'Reconoce cantidades y relaciones numéricas con seguridad.', focus: 'Conviene reforzar valor posicional, comparación y sentido de los números.' },
    operations: { label: 'Estrategias de cálculo', short: 'Operaciones', good: 'Elige y ejecuta operaciones adecuadas para su grado.', focus: 'Conviene reforzar cómo elegir y ejecutar la operación paso a paso.' },
    problems: { label: 'Solución de problemas', short: 'Problemas escritos', good: 'Identifica lo que se pregunta y conecta los datos con una estrategia.', focus: 'Conviene reforzar cómo pasar de una situación escrita a una operación.' }
  };

  const banks = {
    1: [
      {skill:'numbers',q:'¿Cuál número es mayor?',o:['28','82','18','20'],a:1,h:'Mira primero las decenas.',e:'82 tiene 8 decenas; por eso es mayor que los demás.'},
      {skill:'numbers',q:'¿Qué número sigue? 37, 38, 39, …',o:['30','40','49','41'],a:1,h:'Cuenta uno más después de 39.',e:'Después de 39 viene 40.'},
      {skill:'operations',q:'Tienes 8 fichas y recibes 5 más. ¿Qué operación ayuda?',o:['8 + 5','8 - 5','8 ÷ 5','5 - 8'],a:0,h:'La cantidad aumenta.',e:'Si llegan más fichas, juntamos: 8 + 5.'},
      {skill:'operations',q:'¿Cuánto es 14 - 6?',o:['6','7','8','9'],a:2,h:'Piensa cuánto debes sumar a 6 para llegar a 14.',e:'6 + 8 = 14, así que 14 - 6 = 8.'},
      {skill:'problems',q:'Sara tenía 9 globos y perdió 3. ¿Cuántos quedan?',o:['6','12','3','9'],a:0,h:'“Perdió” indica que la cantidad disminuye.',e:'Quitamos 3 a 9: quedan 6.'},
      {skill:'problems',q:'Hay 4 perros y 3 gatos. ¿Cuántos animales hay en total?',o:['1','7','12','4'],a:1,h:'“En total” pide juntar las dos cantidades.',e:'4 + 3 = 7 animales.'}
    ],
    2: [
      {skill:'numbers',q:'¿Qué número representa 4 centenas, 3 decenas y 2 unidades?',o:['432','342','423','234'],a:0,h:'Escribe centenas, luego decenas y luego unidades.',e:'4 centenas, 3 decenas y 2 unidades forman 432.'},
      {skill:'numbers',q:'¿Cuál está más cerca de 500?',o:['498','450','520','401'],a:0,h:'Compara cuántos números faltan o sobran para llegar a 500.',e:'498 está a solo 2 de 500.'},
      {skill:'operations',q:'¿Cuánto es 46 + 27?',o:['63','73','83','69'],a:1,h:'Suma unidades y luego decenas.',e:'6 + 7 = 13 y 40 + 20 + 13 = 73.'},
      {skill:'operations',q:'3 grupos de 4 objetos representan…',o:['3 + 4','4 - 3','3 × 4','4 ÷ 3'],a:2,h:'Son grupos iguales repetidos.',e:'Tres grupos de cuatro se representan con 3 × 4.'},
      {skill:'problems',q:'Hay 20 dulces para repartir entre 4 niños por igual. ¿Cuántos recibe cada uno?',o:['4','5','16','24'],a:1,h:'Busca cuántos grupos iguales de 4 puedes formar con 20.',e:'20 ÷ 4 = 5.'},
      {skill:'problems',q:'Un cuaderno cuesta 18 y un lápiz 7. ¿Cuánto cuestan juntos?',o:['11','25','126','18'],a:1,h:'“Juntos” pide sumar.',e:'18 + 7 = 25.'}
    ],
    3: [
      {skill:'numbers',q:'¿Qué valor tiene el 6 en 6.482?',o:['6','60','600','6.000'],a:3,h:'El 6 está en la posición de los miles.',e:'En 6.482, el 6 representa 6.000.'},
      {skill:'numbers',q:'¿Cuál fracción representa una mitad?',o:['1/2','1/3','2/3','1/4'],a:0,h:'Una mitad divide el entero en dos partes iguales.',e:'1/2 significa una de dos partes iguales.'},
      {skill:'operations',q:'¿Cuánto es 7 × 8?',o:['54','56','64','48'],a:1,h:'Piensa en la tabla del 7 o del 8.',e:'7 × 8 = 56.'},
      {skill:'operations',q:'¿Cuánto es 36 ÷ 4?',o:['8','9','10','6'],a:1,h:'¿Qué número multiplicado por 4 da 36?',e:'4 × 9 = 36, entonces 36 ÷ 4 = 9.'},
      {skill:'problems',q:'24 estudiantes forman equipos de 6. ¿Cuántos equipos se forman?',o:['4','6','18','30'],a:0,h:'Necesitamos saber cuántos grupos de 6 caben en 24.',e:'24 ÷ 6 = 4 equipos.'},
      {skill:'problems',q:'Una caja tiene 5 filas con 7 lápices cada una. ¿Cuántos lápices hay?',o:['12','35','30','57'],a:1,h:'Hay grupos iguales: 5 grupos de 7.',e:'5 × 7 = 35 lápices.'}
    ],
    4: [
      {skill:'numbers',q:'¿Cuál número es mayor?',o:['3.908','3.980','3.890','3.809'],a:1,h:'Compara primero miles, luego centenas y decenas.',e:'3.980 es el mayor.'},
      {skill:'numbers',q:'¿Cuál decimal es mayor?',o:['0,4','0,35','0,09','0,38'],a:0,h:'Piensa 0,4 como 0,40.',e:'0,40 es mayor que 0,38, 0,35 y 0,09.'},
      {skill:'operations',q:'¿Cuánto es 125 × 4?',o:['500','450','425','520'],a:0,h:'Multiplica 100, 20 y 5 por 4.',e:'125 × 4 = 500.'},
      {skill:'operations',q:'¿Cuánto es 864 ÷ 4?',o:['206','216','226','214'],a:1,h:'Empieza por 8 ÷ 4 y continúa cifra por cifra.',e:'864 ÷ 4 = 216.'},
      {skill:'problems',q:'Se reparten 156 libros en 6 estantes iguales. ¿Cuántos van en cada estante?',o:['24','25','26','28'],a:2,h:'Es un reparto en partes iguales.',e:'156 ÷ 6 = 26.'},
      {skill:'problems',q:'Un rectángulo mide 8 m de largo y 5 m de ancho. ¿Cuál es su área?',o:['13 m²','26 m²','40 m²','80 m²'],a:2,h:'Área de rectángulo = largo × ancho.',e:'8 × 5 = 40 m².'}
    ],
    5: [
      {skill:'numbers',q:'¿Cuál es equivalente a 1/2?',o:['2/4','2/3','3/5','4/10'],a:0,h:'Multiplica numerador y denominador por el mismo número.',e:'1/2 × 2/2 = 2/4.'},
      {skill:'numbers',q:'25% de 100 representa…',o:['10','20','25','50'],a:2,h:'25% significa 25 de cada 100.',e:'25% de 100 es 25.'},
      {skill:'operations',q:'¿Cuál es el resultado de 1.248 ÷ 6?',o:['208','218','228','198'],a:0,h:'Comprueba con multiplicación: opción × 6.',e:'208 × 6 = 1.248.'},
      {skill:'operations',q:'3,5 + 2,75 es…',o:['5,25','6,25','6,15','5,75'],a:1,h:'Alinea la coma decimal antes de sumar.',e:'3,50 + 2,75 = 6,25.'},
      {skill:'problems',q:'Una camiseta de 80.000 tiene 25% de descuento. ¿Cuánto se descuenta?',o:['10.000','20.000','25.000','60.000'],a:1,h:'25% es la cuarta parte del precio.',e:'La cuarta parte de 80.000 es 20.000.'},
      {skill:'problems',q:'Una receta usa 3/4 de taza. Si haces el doble, necesitas…',o:['6/4 de taza','3/8 de taza','1 taza','4/3 de taza'],a:0,h:'Duplicar significa multiplicar por 2.',e:'2 × 3/4 = 6/4 = 1 1/2 tazas.'}
    ]
  };

  let state = { child:'', grade:0, index:0, answers:[], locked:false };

  function cleanName(value){ return String(value || '').replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s'-]/g,'').replace(/\s+/g,' ').trim().slice(0,40); }
  function current(){ return banks[state.grade][state.index]; }

  function render(){
    const item = current();
    const missionIndex = Math.floor(state.index / 2);
    const missionInfo = missionNames[missionIndex];
    state.locked = false;
    missionLabel.textContent = missionInfo[0].toUpperCase();
    missionTitle.textContent = missionInfo[1];
    questionCount.textContent = `${state.index + 1}/6`;
    progressBar.style.width = `${(state.index / 6) * 100}%`;
    skillLabel.textContent = skillMeta[item.skill].label.toUpperCase();
    prompt.textContent = item.q;
    novaText.textContent = missionIndex === 0
      ? `${state.child}, no buscamos rapidez. Mira con calma qué te está preguntando cada reto.`
      : missionIndex === 1
        ? 'Ahora me interesa ver qué estrategia eliges. Una respuesta equivocada también nos da información útil.'
        : 'Última misión: conecta los datos con lo que realmente te están preguntando.';
    options.innerHTML = '';
    item.o.forEach((label, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'trial-option';
      btn.textContent = label;
      btn.addEventListener('click', () => answer(idx, btn));
      options.appendChild(btn);
    });
    hint.hidden = true;
    hint.textContent = '';
    feedback.hidden = true;
    feedback.className = 'feedback-box';
    nextBtn.hidden = true;
    hintBtn.hidden = false;
  }

  function answer(index, button){
    if(state.locked) return;
    state.locked = true;
    const item = current();
    const correct = index === item.a;
    state.answers.push({ skill:item.skill, correct });
    [...options.children].forEach((btn, idx) => {
      btn.disabled = true;
      if(idx === item.a) btn.classList.add('correct');
      else if(idx === index && !correct) btn.classList.add('wrong');
    });
    button.classList.add(correct ? 'correct' : 'wrong');
    feedback.hidden = false;
    feedback.classList.add(correct ? 'success' : 'review');
    feedback.textContent = correct ? `Eso es. ${item.e}` : `Miremos la lógica: ${item.e}`;
    hintBtn.hidden = true;
    nextBtn.hidden = false;
    nextBtn.textContent = state.index === 5 ? 'Ver mi resultado →' : 'Siguiente reto →';
    progressBar.style.width = `${((state.index + 1) / 6) * 100}%`;
  }

  function finish(){
    const total = state.answers.filter(x => x.correct).length;
    const percent = Math.round((total / 6) * 100);
    const grouped = {numbers:[],operations:[],problems:[]};
    state.answers.forEach(a => grouped[a.skill].push(a.correct ? 1 : 0));
    const rates = Object.fromEntries(Object.entries(grouped).map(([k,v]) => [k, v.reduce((a,b)=>a+b,0) / Math.max(v.length,1)]));
    const ordered = Object.keys(rates).sort((a,b) => rates[b] - rates[a]);
    const strongest = ordered[0];
    const focus = ordered[ordered.length - 1];
    const payload = {version:'24.1',completed:true,child:state.child,grade:state.grade,score:percent,strongest,focus,completedAt:new Date().toISOString()};
    try { localStorage.setItem('novaTrialV24', JSON.stringify(payload)); } catch {}

    $('#trialScore').textContent = `${percent}%`;
    $('#trialResultIntro').textContent = `${state.child} completó sus primeras tres misiones de ${state.grade}.º. Esto no es una nota: es una primera señal para decidir por dónde conviene empezar.`;
    $('#trialStrength').textContent = skillMeta[strongest].short;
    $('#trialStrengthText').textContent = skillMeta[strongest].good;
    $('#trialFocus').textContent = skillMeta[focus].short;
    $('#trialFocusText').textContent = skillMeta[focus].focus;
    $('#trialRecommendation').textContent = rates[focus] >= .5
      ? `${state.child} muestra una base equilibrada. Su ruta debería empezar con práctica breve y subir de dificultad según sus respuestas.`
      : `Empezaría reforzando ${skillMeta[focus].short.toLowerCase()} y mantendría ${skillMeta[strongest].short.toLowerCase()} como una fortaleza para darle confianza.`;
    mission.hidden = true;
    result.hidden = false;
    window.scrollTo({top:0,behavior:'auto'});
  }

  startForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const grade = Number(new FormData(startForm).get('trialGrade'));
    const child = cleanName(childInput.value);
    if(!child || !banks[grade]) return;
    state = {child,grade,index:0,answers:[],locked:false};
    welcome.hidden = true;
    mission.hidden = false;
    render();
    window.scrollTo({top:0,behavior:'auto'});
  });

  hintBtn.addEventListener('click', () => {
    const item = current();
    hint.textContent = item.h;
    hint.hidden = false;
  });

  nextBtn.addEventListener('click', () => {
    if(!state.locked) return;
    if(state.index >= 5){ finish(); return; }
    state.index += 1;
    render();
    window.scrollTo({top:0,behavior:'smooth'});
  });
})();
