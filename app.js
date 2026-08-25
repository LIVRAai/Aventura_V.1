(() => {
  const $ = (s) => document.querySelector(s);
  const gameArea = $('#gameArea');
  const checkBtn = $('#checkBtn');
  const hintBtn = $('#hintBtn');
  const aiTutorBtn = $('#aiTutorBtn');
  const aiTutorCard = $('#aiTutorCard');
  const aiTutorTitle = $('#aiTutorTitle');
  const aiTutorChat = $('#aiTutorChat');
  const aiTutorForm = $('#aiTutorForm');
  const aiTutorInput = $('#aiTutorInput');
  const aiTutorSendBtn = $('#aiTutorSendBtn');
  const aiTutorQuickBtns = [...document.querySelectorAll('[data-tutor-prompt]')];
  const aiStatus = $('#aiStatus');
  const soundBtn = $('#soundBtn');
  const resetBtn = $('#resetBtn');
  const settingsModal = $('#settingsModal');
  const closeSettingsBtn = $('#closeSettingsBtn');
  const testerSettingsBtn = $('#testerSettingsBtn');
  const testerModal = $('#testerModal');
  const closeTesterBtn = $('#closeTesterBtn');
  const testerAuthView = $('#testerAuthView');
  const testerNavigatorView = $('#testerNavigatorView');
  const testerPinForm = $('#testerPinForm');
  const testerPinInput = $('#testerPinInput');
  const testerPinError = $('#testerPinError');
  const testerMissionGrid = $('#testerMissionGrid');
  const testerNotebookGrid = $('#testerNotebookGrid');
  const exitTesterModeBtn = $('#exitTesterModeBtn');
  const rewardCard = $('#rewardCard');
  const rewardTitle = $('#rewardTitle');
  const rewardText = $('#rewardText');
  const rewardEmoji = $('#rewardEmoji');
  const animalFact = $('#animalFact');
  const progressBar = $('#progressBar');
  const progressText = $('#progressText');
  const missionNumber = $('#missionNumber');
  const missionTotal = $('#missionTotal');
  const missionTitle = $('#missionTitle');
  const missionPrompt = $('#missionPrompt');
  const storyLine = $('#storyLine');
  const animalEmoji = $('#animalEmoji');
  const animalName = $('#animalName');
  const worldIcon = $('#worldIcon');
  const worldName = $('#worldName');
  const worldProgress = $('#worldProgress');
  const chapterText = $('#chapterText');
  const toast = $('#toast');
  const intro = $('#intro');
  const app = $('#app');
  const startBtn = $('#startBtn');
  const skipIntroBtn = $('#skipIntroBtn');
  const reviewModeBar = $('#reviewModeBar');
  const reviewModeLabel = $('#reviewModeLabel');
  const reviewModeNote = $('#reviewModeNote');
  const reviewHomeBtn = $('#reviewHomeBtn');
  const reviewPanelBtn = $('#reviewPanelBtn');
  const reviewExitBtn = $('#reviewExitBtn');

  // Capa comercial. No modifica las mecánicas del Atlas ni de la Academia.
  const accessGate = $('#accessGate');
  const subscriptionForm = $('#subscriptionForm');
  const parentEmailInput = $('#parentEmailInput');
  const childNameInput = $('#childNameInput');
  const subscribeBtn = $('#subscribeBtn');
  const paymentPanel = $('#paymentPanel');
  const closePaymentPanelBtn = $('#closePaymentPanelBtn');
  const paymentProgress = $('#paymentProgress');
  const mpCardholderEmail = $('#form-checkout__cardholderEmail');
  const mpSubmitBtn = $('#form-checkout__submit');
  const verifySubscriptionBtn = $('#verifySubscriptionBtn');
  const subscriptionPrice = $('#subscriptionPrice');
  const subscribePriceText = $('#subscribePriceText');
  const mpSubmitPriceText = $('#mpSubmitPriceText');
  const accessStatus = $('#accessStatus');
  const ownerAccessBtn = $('#ownerAccessBtn');
  const ownerPinForm = $('#ownerPinForm');
  const ownerPinInput = $('#ownerPinInput');
  const subscriptionSettingsText = $('#subscriptionSettingsText');
  const subscriptionSettingsBtn = $('#subscriptionSettingsBtn');
  const planManagementModal = $('#planManagementModal');
  const closePlanManagementBtn = $('#closePlanManagementBtn');
  const planOverviewView = $('#planOverviewView');
  const planCancelView = $('#planCancelView');
  const planStatusBadge = $('#planStatusBadge');
  const planStatusDetail = $('#planStatusDetail');
  const planManagementPrice = $('#planManagementPrice');
  const planDateLabel = $('#planDateLabel');
  const planDateValue = $('#planDateValue');
  const planAccountEmail = $('#planAccountEmail');
  const planCanceledNotice = $('#planCanceledNotice');
  const planCanceledNoticeText = $('#planCanceledNoticeText');
  const planManagementActions = $('#planManagementActions');
  const cancelPlanBtn = $('#cancelPlanBtn');
  const planCancelCopy = $('#planCancelCopy');
  const planCancelAccessUntil = $('#planCancelAccessUntil');
  const keepPlanBtn = $('#keepPlanBtn');
  const confirmCancelPlanBtn = $('#confirmCancelPlanBtn');
  const planCancelStatus = $('#planCancelStatus');
  const learningProgressSettingsBtn = $('#learningProgressSettingsBtn');
  const learningProgressModal = $('#learningProgressModal');
  const closeLearningProgressBtn = $('#closeLearningProgressBtn');
  const learningProgressChild = $('#learningProgressChild');
  const parentOverallProgress = $('#parentOverallProgress');
  const parentCurrentFocus = $('#parentCurrentFocus');
  const parentCurrentFocusDetail = $('#parentCurrentFocusDetail');
  const parentConceptProgress = $('#parentConceptProgress');
  const parentConceptSkills = $('#parentConceptSkills');
  const parentProcedureStatus = $('#parentProcedureStatus');
  const parentProcedureSkills = $('#parentProcedureSkills');
  const parentNumbersStatus = $('#parentNumbersStatus');
  const parentNumbersSkills = $('#parentNumbersSkills');
  const parentApplicationStatus = $('#parentApplicationStatus');
  const parentApplicationSkills = $('#parentApplicationSkills');
  const parentRecommendation = $('#parentRecommendation');
  const introChildName = $('#introChildName');
  const finalChildName = $('#finalChildName');
  const learningHub = $('#learningHub');
  const mathHub = $('#mathHub');
  const curriculumSubjectHub = $('#curriculumSubjectHub');
  const curriculumTopicHub = $('#curriculumTopicHub');
  const gradeSelector = $('#gradeSelector');
  const subjectGradeSelector = $('#subjectGradeSelector');
  const subjectsGradeLabel = $('#subjectsGradeLabel');
  const curriculumSubjectBackBtn = $('#curriculumSubjectBackBtn');
  const curriculumSubjectProfileBtn = $('#curriculumSubjectProfileBtn');
  const curriculumSubjectIcon = $('#curriculumSubjectIcon');
  const curriculumSubjectKicker = $('#curriculumSubjectKicker');
  const curriculumSubjectTitle = $('#curriculumSubjectTitle');
  const curriculumSubjectDescription = $('#curriculumSubjectDescription');
  const curriculumGradeTitle = $('#curriculumGradeTitle');
  const curriculumTopicCount = $('#curriculumTopicCount');
  const curriculumTopicGrid = $('#curriculumTopicGrid');
  const curriculumCompetencyText = $('#curriculumCompetencyText');
  const curriculumTopicBackBtn = $('#curriculumTopicBackBtn');
  const curriculumTopicProfileBtn = $('#curriculumTopicProfileBtn');
  const curriculumTopicIcon = $('#curriculumTopicIcon');
  const curriculumTopicKicker = $('#curriculumTopicKicker');
  const curriculumTopicTitle = $('#curriculumTopicTitle');
  const curriculumTopicGoal = $('#curriculumTopicGoal');
  const curriculumTopicRealWorld = $('#curriculumTopicRealWorld');
  const curriculumTopicSkill = $('#curriculumTopicSkill');
  const curriculumPracticeBtn = $('#curriculumPracticeBtn');
  const curriculumGameStartBtn = $('#curriculumGameStartBtn');
  const curriculumGameBest = $('#curriculumGameBest');
  const curriculumGameModal = $('#curriculumGameModal');
  const curriculumGameCloseBtn = $('#curriculumGameCloseBtn');
  const curriculumGameKicker = $('#curriculumGameKicker');
  const curriculumGameTitle = $('#curriculumGameTitle');
  const curriculumGameScore = $('#curriculumGameScore');
  const curriculumGameProgressBar = $('#curriculumGameProgressBar');
  const curriculumGameRound = $('#curriculumGameRound');
  const curriculumGameCombo = $('#curriculumGameCombo');
  const curriculumGameEmoji = $('#curriculumGameEmoji');
  const curriculumGamePrompt = $('#curriculumGamePrompt');
  const curriculumGameOptions = $('#curriculumGameOptions');
  const curriculumGameHintBtn = $('#curriculumGameHintBtn');
  const curriculumGameHint = $('#curriculumGameHint');
  const curriculumGameFeedback = $('#curriculumGameFeedback');
  const curriculumGameNextBtn = $('#curriculumGameNextBtn');
  const curriculumGameFinish = $('#curriculumGameFinish');
  const curriculumGameFinishStars = $('#curriculumGameFinishStars');
  const curriculumGameFinishTitle = $('#curriculumGameFinishTitle');
  const curriculumGameFinishText = $('#curriculumGameFinishText');
  const curriculumGameReplayBtn = $('#curriculumGameReplayBtn');
  const curriculumGameNovaBtn = $('#curriculumGameNovaBtn');
  const curriculumGameDoneBtn = $('#curriculumGameDoneBtn');
  const curriculumAskBtn = $('#curriculumAskBtn');
  const curriculumDivisionLabBtn = $('#curriculumDivisionLabBtn');
  const novaNewConversationBtn = $('#novaNewConversationBtn');
  const parentCurriculumGrade = $('#parentCurriculumGrade');
  const parentCurriculumSubjects = $('#parentCurriculumSubjects');
  const novaTutorHub = $('#novaTutorHub');
  const askNovaHomeBtn = $('#askNovaHomeBtn');
  const novaTutorBackBtn = $('#novaTutorBackBtn');
  const novaTutorProfileBtn = $('#novaTutorProfileBtn');
  const novaGeneralChat = $('#novaGeneralChat');
  const novaGeneralForm = $('#novaGeneralForm');
  const novaGeneralInput = $('#novaGeneralInput');
  const novaGeneralSendBtn = $('#novaGeneralSendBtn');
  const hubChildName = $('#hubChildName');
  const hubProfileBtn = $('#hubProfileBtn');
  const mathProfileBtn = $('#mathProfileBtn');
  const mathSubjectBtn = $('#mathSubjectBtn');
  const continueLearningBtn = $('#continueLearningBtn');
  const continueLearningTitle = $('#continueLearningTitle');
  const continueLearningMeta = $('#continueLearningMeta');
  const continueLearningProgressBar = $('#continueLearningProgressBar');
  const mathBackBtn = $('#mathBackBtn');
  const mathContinueBtn = $('#mathContinueBtn');
  const mathContinueTitle = $('#mathContinueTitle');
  const mathContinueMeta = $('#mathContinueMeta');
  const atlasPathBtn = $('#atlasPathBtn');
  const atlasPathProgressBar = $('#atlasPathProgressBar');
  const atlasPathStatus = $('#atlasPathStatus');
  const atlasPathState = $('#atlasPathState');
  const academyPathBtn = $('#academyPathBtn');
  const academyPathProgressBar = $('#academyPathProgressBar');
  const academyPathStatus = $('#academyPathStatus');
  const academyPathState = $('#academyPathState');
  const mathRecommendation = $('#mathRecommendation');
  const atlasBackBtn = $('#atlasBackBtn');
  const introBackBtn = $('#introBackBtn');
  const hubMathStatus = $('#hubMathStatus');
  const hubMathProgressBar = $('#hubMathProgressBar');
  const accountLoadingView = $('#accountLoadingView');
  const accountLoadingTitle = $('#accountLoadingTitle');
  const accountLoadingText = $('#accountLoadingText');
  const accountLoadingActions = $('#accountLoadingActions');
  const accountRetryBtn = $('#accountRetryBtn');
  const accountLoadingSignOutBtn = $('#accountLoadingSignOutBtn');
  const authView = $('#authView');
  const signupTabBtn = $('#signupTabBtn');
  const loginTabBtn = $('#loginTabBtn');
  const authForm = $('#authForm');
  const parentPasswordInput = $('#parentPasswordInput');
  const childNameField = $('#childNameField');
  const authSubmitBtn = $('#authSubmitBtn');
  const authStatus = $('#authStatus');
  const childSetupView = $('#childSetupView');
  const childSetupEmail = $('#childSetupEmail');
  const childProfileForm = $('#childProfileForm');
  const childProfileNameInput = $('#childProfileNameInput');
  const createChildBtn = $('#createChildBtn');
  const childSetupSignOutBtn = $('#childSetupSignOutBtn');
  const subscriberView = $('#subscriberView');
  const accountEmailText = $('#accountEmailText');
  const accountChildText = $('#accountChildText');
  const accessSignOutBtn = $('#accessSignOutBtn');
  const accountSettingsText = $('#accountSettingsText');
  const accountSettingsRow = $('#accountSettingsRow');
  const accountSettingsTitle = $('#accountSettingsTitle');
  const subscriptionSettingsRow = $('#subscriptionSettingsRow');
  const testerSettingsRow = $('#testerSettingsRow');
  const accountSignOutBtn = $('#accountSignOutBtn');
  const finalCard = $('#finalCard');
  const replayBtn = $('#replayBtn');
  const mapBtn = $('#mapBtn');
  const worldModal = $('#worldModal');
  const closeMapBtn = $('#closeMapBtn');
  const worldMap = $('#worldMap');
  const animalCardBtn = $('#animalCardBtn');
  const fieldGuideBtn = $('#fieldGuideBtn');
  const animalModal = $('#animalModal');
  const closeAnimalBtn = $('#closeAnimalBtn');
  const animalModalTitle = $('#animalModalTitle');
  const animalProfile = $('#animalProfile');
  const guideModal = $('#guideModal');
  const closeGuideBtn = $('#closeGuideBtn');
  const fieldGuideGrid = $('#fieldGuideGrid');
  const guideProgress = $('#guideProgress');
  const fieldAnimalName = $('#fieldAnimalName');
  const profileType = $('#profileType');
  const profileHabitat = $('#profileHabitat');
  const profileDiet = $('#profileDiet');
  const profilePower = $('#profilePower');
  const novaFeedbackCard = $('#novaFeedbackCard');
  const novaFeedbackStatus = $('#novaFeedbackStatus');
  const novaFeedbackText = $('#novaFeedbackText');
  const nextTeaser = $('#nextTeaser');
  const rewardNextBtn = $('#rewardNextBtn');
  const notebookStartBtn = $('#notebookStartBtn');
  const notebookModule = $('#notebookModule');
  const notebookBackBtn = $('#notebookBackBtn');
  const notebookLessonCounter = $('#notebookLessonCounter');
  const notebookMissionLabel = $('#notebookMissionLabel');
  const notebookTitle = $('#notebookTitle');
  const notebookStory = $('#notebookStory');
  const notebookAnimal = $('#notebookAnimal');
  const notebookProgressBar = $('#notebookProgressBar');
  const notebookProgressText = $('#notebookProgressText');
  const notebookDividend = $('#notebookDividend');
  const notebookDivisor = $('#notebookDivisor');
  const notebookQuotient = $('#notebookQuotient');
  const notebookCycleLabel = $('#notebookCycleLabel');
  const notebookJournal = $('#notebookJournal');
  const notebookStepTitle = $('#notebookStepTitle');
  const notebookStepCount = $('#notebookStepCount');
  const notebookWhy = $('#notebookWhy');
  const notebookForWhat = $('#notebookForWhat');
  const notebookHow = $('#notebookHow');
  const notebookDiscovery = $('#notebookDiscovery');
  const notebookPrompt = $('#notebookPrompt');
  const notebookAnswerArea = $('#notebookAnswerArea');
  const showPlacementBtn = $('#showPlacementBtn');
  const placementHelp = $('#placementHelp');
  const notebookHelpBtn = $('#notebookHelpBtn');
  const notebookChat = $('#notebookChat');
  const notebookChatMessages = $('#notebookChatMessages');
  const notebookChatForm = $('#notebookChatForm');
  const notebookChatInput = $('#notebookChatInput');
  const notebookChatSend = $('#notebookChatSend');
  const notebookLessonDone = $('#notebookLessonDone');
  const notebookDoneTitle = $('#notebookDoneTitle');
  const notebookDoneFeedback = $('#notebookDoneFeedback');
  const notebookNextBtn = $('#notebookNextBtn');

  const academyHome = $('#academyHome');
  const academyHomeBtn = $('#academyHomeBtn');
  const academyRouteGrid = $('#academyRouteGrid');
  const academySkillGrid = $('#academySkillGrid');
  const academyMasteryText = $('#academyMasteryText');
  const academyMasteryBar = $('#academyMasteryBar');
  const academyRecommendation = $('#academyRecommendation');
  const academyPracticeView = $('#academyPracticeView');
  const academyPracticeIcon = $('#academyPracticeIcon');
  const academyPracticeKicker = $('#academyPracticeKicker');
  const academyPracticeTitle = $('#academyPracticeTitle');
  const academyPracticeGoal = $('#academyPracticeGoal');
  const academyPracticeCounter = $('#academyPracticeCounter');
  const academyPracticeBar = $('#academyPracticeBar');
  const academyNovaExplain = $('#academyNovaExplain');
  const academyChallenge = $('#academyChallenge');
  const academyFeedback = $('#academyFeedback');
  const academyFeedbackLabel = $('#academyFeedbackLabel');
  const academyFeedbackTitle = $('#academyFeedbackTitle');
  const academyFeedbackText = $('#academyFeedbackText');
  const academyContinueBtn = $('#academyContinueBtn');
  const academyAskNovaBtn = $('#academyAskNovaBtn');
  const academyChat = $('#academyChat');
  const academyChatMessages = $('#academyChatMessages');
  const academyChatForm = $('#academyChatForm');
  const academyChatInput = $('#academyChatInput');
  const notebookLessonView = $('#notebookLessonView');



  // ---------------------------------------------------------------------------
  // CUENTA FAMILIAR + SUPABASE + MERCADO PAGO
  //
  // La lógica pedagógica sigue intacta. Supabase se usa como capa de cuenta,
  // perfil del niño y sincronización en la nube de los mismos objetos que hoy
  // guarda localStorage.
  // ---------------------------------------------------------------------------
  const FAMILY_PROFILE_KEY = 'expeditionFamilyProfileV1';
  const SUBSCRIPTION_KEY = 'expeditionSubscriptionV1';
  const OWNER_DEMO_KEY = 'expeditionOwnerDemoSession';
  const CLOUD_PROGRESS_KEYS = {
    atlas: 'emilianoGameStateV2',
    notebook: 'emilianoNotebookV1',
    academy: 'emilianoAcademyV1'
  };

  const CURRICULUM_GRADE_KEY = 'novaCurriculumGradeV1';
  const CURRICULUM_ACTIVITY_KEY = 'novaCurriculumActivityV1';
  const CURRICULUM_GAME_PROGRESS_KEY = 'novaCurriculumGameProgressV1';
  const CURRICULUM_SUBJECTS = {
    math: { name:'Matemáticas', icon:'➗', description:'Números, operaciones, geometría, datos y solución de problemas.', competency:'Pensamiento lógico, razonamiento numérico y solución de problemas.' },
    language: { name:'Lenguaje', icon:'📖', description:'Lectura, escritura, comprensión, expresión y argumentación.', competency:'Comprensión lectora, comunicación clara y capacidad de argumentar.' },
    science: { name:'Ciencias', icon:'🔬', description:'Seres vivos, materia, energía, Tierra e investigación.', competency:'Curiosidad, pensamiento científico y uso de evidencia.' },
    social: { name:'Sociales', icon:'🌎', description:'Territorio, historia, ciudadanía, diversidad y convivencia.', competency:'Ciudadanía, pensamiento histórico y comprensión del entorno social.' },
    english: { name:'Inglés', icon:'💬', description:'Comprensión y comunicación básica y progresiva en inglés.', competency:'Comunicación funcional y apertura a contextos globales.' }
  };
  const CURRICULUM = {"1":{"math":[{"id":"math-1-1","title":"Números hasta 100","goal":"Leer, escribir, comparar y ordenar números; reconocer unidades y decenas.","realWorld":"Contar objetos, saber cuánto hay y comparar cantidades.","skill":"Pensamiento numérico","legacyDivision":false},{"id":"math-1-2","title":"Sumar y restar","goal":"Comprender la suma como juntar y la resta como quitar, comparar o encontrar lo que falta.","realWorld":"Resolver situaciones sencillas con objetos, puntos, dinero y cantidades.","skill":"Razonamiento lógico","legacyDivision":false},{"id":"math-1-3","title":"Patrones y secuencias","goal":"Reconocer qué se repite, qué cambia y cuál elemento continúa.","realWorld":"Anticipar, ordenar y descubrir reglas.","skill":"Pensamiento lógico","legacyDivision":false},{"id":"math-1-4","title":"Figuras y ubicación","goal":"Reconocer figuras básicas y usar palabras como arriba, abajo, dentro, fuera, izquierda y derecha.","realWorld":"Orientarse y describir posiciones y formas del entorno.","skill":"Orientación espacial","legacyDivision":false},{"id":"math-1-5","title":"Medir y comparar","goal":"Comparar longitud, peso, capacidad y duración con unidades cotidianas.","realWorld":"Decidir qué es más largo, pesado, lleno o duradero.","skill":"Resolución práctica","legacyDivision":false},{"id":"math-1-6","title":"Problemas de la vida diaria","goal":"Elegir si conviene sumar o restar a partir de una situación corta.","realWorld":"Usar los números para tomar decisiones sencillas.","skill":"Solución de problemas","legacyDivision":false}],"language":[{"id":"language-1-1","title":"Letras, sonidos y palabras","goal":"Relacionar sonidos con letras, formar palabras y reconocer sílabas frecuentes.","realWorld":"Leer nombres, avisos y palabras de uso cotidiano.","skill":"Comunicación","legacyDivision":false},{"id":"language-1-2","title":"Leer oraciones cortas","goal":"Leer frases sencillas y comprender quién hace qué.","realWorld":"Seguir instrucciones y comprender mensajes breves.","skill":"Comprensión lectora","legacyDivision":false},{"id":"language-1-3","title":"Ordenar una historia","goal":"Identificar qué pasó primero, después y al final.","realWorld":"Contar experiencias de forma clara y ordenada.","skill":"Organización de ideas","legacyDivision":false},{"id":"language-1-4","title":"Escribir oraciones","goal":"Construir oraciones con sentido, mayúscula inicial y punto final.","realWorld":"Expresar por escrito ideas sencillas.","skill":"Expresión escrita","legacyDivision":false},{"id":"language-1-5","title":"Comprender cuentos","goal":"Reconocer personajes, lugares, acciones y hechos explícitos.","realWorld":"Entender relatos y conversar sobre lo leído.","skill":"Comprensión y conversación","legacyDivision":false},{"id":"language-1-6","title":"Hablar y escuchar","goal":"Explicar una idea, escuchar turnos y hacer preguntas relacionadas.","realWorld":"Participar en conversaciones con claridad y respeto.","skill":"Comunicación social","legacyDivision":false}],"science":[{"id":"science-1-1","title":"Mi cuerpo y los sentidos","goal":"Reconocer partes del cuerpo y cómo los sentidos ayudan a conocer el entorno.","realWorld":"Cuidarse y describir lo que observa, escucha, toca, huele o saborea.","skill":"Observación","legacyDivision":false},{"id":"science-1-2","title":"Seres vivos y no vivos","goal":"Distinguir seres vivos de objetos y reconocer necesidades básicas de los seres vivos.","realWorld":"Comprender y cuidar plantas, animales y personas.","skill":"Clasificación","legacyDivision":false},{"id":"science-1-3","title":"Plantas y animales","goal":"Reconocer características, necesidades y hábitats cercanos.","realWorld":"Observar semejanzas y diferencias en la naturaleza.","skill":"Pensamiento científico","legacyDivision":false},{"id":"science-1-4","title":"Materiales que me rodean","goal":"Comparar objetos por textura, dureza, forma y uso.","realWorld":"Elegir materiales según lo que se necesita construir o usar.","skill":"Exploración","legacyDivision":false},{"id":"science-1-5","title":"Día, noche y clima","goal":"Observar cambios entre el día y la noche y reconocer condiciones del tiempo.","realWorld":"Relacionar rutinas con el ambiente y prepararse para el clima.","skill":"Observación del entorno","legacyDivision":false},{"id":"science-1-6","title":"Cuidar nuestro entorno","goal":"Reconocer acciones para cuidar agua, animales, plantas y espacios comunes.","realWorld":"Tomar decisiones responsables con el ambiente.","skill":"Responsabilidad","legacyDivision":false}],"social":[{"id":"social-1-1","title":"Mi familia y quienes me cuidan","goal":"Reconocer roles, vínculos y formas diversas de familia y cuidado.","realWorld":"Valorar a las personas con quienes convive.","skill":"Identidad y empatía","legacyDivision":false},{"id":"social-1-2","title":"Mi colegio","goal":"Reconocer espacios, personas, normas y responsabilidades del entorno escolar.","realWorld":"Participar mejor en la vida del colegio.","skill":"Convivencia","legacyDivision":false},{"id":"social-1-3","title":"Normas y acuerdos","goal":"Comprender por qué existen reglas y cómo ayudan a convivir.","realWorld":"Resolver situaciones cotidianas respetando acuerdos.","skill":"Ciudadanía","legacyDivision":false},{"id":"social-1-4","title":"Mi casa y mi barrio","goal":"Describir lugares cercanos y reconocer puntos importantes del entorno.","realWorld":"Ubicarse y comprender la comunidad donde vive.","skill":"Pertenencia","legacyDivision":false},{"id":"social-1-5","title":"Antes, ahora y después","goal":"Ordenar hechos personales y familiares en el tiempo.","realWorld":"Comprender cambios y construir memoria.","skill":"Pensamiento temporal","legacyDivision":false},{"id":"social-1-6","title":"Somos diferentes","goal":"Reconocer gustos, costumbres y características diferentes entre personas.","realWorld":"Relacionarse con respeto y valorar la diversidad.","skill":"Respeto y diversidad","legacyDivision":false}],"english":[{"id":"english-1-1","title":"Hello!","goal":"Usar saludos, despedidas y expresiones básicas de cortesía.","realWorld":"Iniciar y cerrar interacciones sencillas.","skill":"Comunicación básica","legacyDivision":false},{"id":"english-1-2","title":"Numbers and colors","goal":"Reconocer y usar números básicos y colores frecuentes.","realWorld":"Describir objetos y cantidades sencillas.","skill":"Vocabulario funcional","legacyDivision":false},{"id":"english-1-3","title":"My family","goal":"Nombrar miembros de la familia y usar expresiones muy simples sobre ellos.","realWorld":"Hablar de personas cercanas.","skill":"Expresión personal","legacyDivision":false},{"id":"english-1-4","title":"My classroom","goal":"Reconocer objetos del salón y seguir instrucciones básicas.","realWorld":"Comprender rutinas frecuentes de clase.","skill":"Comprensión oral","legacyDivision":false},{"id":"english-1-5","title":"My body","goal":"Nombrar partes principales del cuerpo y acciones sencillas.","realWorld":"Comprender canciones, juegos e instrucciones.","skill":"Vocabulario corporal","legacyDivision":false},{"id":"english-1-6","title":"I like / I don’t like","goal":"Expresar gustos y preferencias con estructuras sencillas.","realWorld":"Comunicar lo que le gusta y escuchar preferencias de otros.","skill":"Interacción social","legacyDivision":false}]},"2":{"math":[{"id":"math-2-1","title":"Números hasta 1.000","goal":"Leer, escribir, descomponer, comparar y ordenar números de tres cifras.","realWorld":"Comprender cantidades mayores y usarlas en situaciones reales.","skill":"Pensamiento numérico","legacyDivision":false},{"id":"math-2-2","title":"Suma y resta con reagrupación","goal":"Resolver sumas y restas comprendiendo unidades, decenas y centenas.","realWorld":"Calcular cambios, totales y diferencias.","skill":"Precisión y razonamiento","legacyDivision":false},{"id":"math-2-3","title":"Primeras multiplicaciones","goal":"Comprender la multiplicación como grupos iguales y suma repetida.","realWorld":"Calcular colecciones organizadas en grupos.","skill":"Pensamiento multiplicativo","legacyDivision":false},{"id":"math-2-4","title":"Repartos y grupos iguales","goal":"Introducir la división como repartir o formar grupos del mismo tamaño.","realWorld":"Compartir cantidades de manera justa y contar grupos.","skill":"Razonamiento lógico","legacyDivision":false},{"id":"math-2-5","title":"Hora, dinero y medidas","goal":"Leer horas sencillas, reconocer monedas y comparar medidas.","realWorld":"Organizar rutinas y resolver compras o mediciones básicas.","skill":"Autonomía cotidiana","legacyDivision":false},{"id":"math-2-6","title":"Figuras, datos y problemas","goal":"Reconocer formas, leer pictogramas/tablas sencillas y elegir operaciones.","realWorld":"Interpretar información y resolver situaciones.","skill":"Solución de problemas","legacyDivision":false}],"language":[{"id":"language-2-1","title":"Leer con fluidez y sentido","goal":"Leer textos breves respetando pausas y comprender información explícita.","realWorld":"Entender instrucciones, cuentos y mensajes cotidianos.","skill":"Comprensión lectora","legacyDivision":false},{"id":"language-2-2","title":"Idea principal","goal":"Identificar de qué trata principalmente un texto corto.","realWorld":"Resumir lo más importante sin perderse en detalles.","skill":"Síntesis","legacyDivision":false},{"id":"language-2-3","title":"Narrar y describir","goal":"Diferenciar textos que cuentan hechos de textos que describen personas, lugares u objetos.","realWorld":"Explicar experiencias y describir con precisión.","skill":"Comunicación","legacyDivision":false},{"id":"language-2-4","title":"Sustantivos, verbos y adjetivos","goal":"Reconocer palabras que nombran, indican acciones y describen.","realWorld":"Construir oraciones más claras y completas.","skill":"Lenguaje y expresión","legacyDivision":false},{"id":"language-2-5","title":"Ortografía básica","goal":"Practicar mayúsculas, punto, separación de palabras y combinaciones frecuentes.","realWorld":"Escribir mensajes comprensibles.","skill":"Precisión escrita","legacyDivision":false},{"id":"language-2-6","title":"Escribir textos cortos","goal":"Planear y escribir pequeños relatos, descripciones o mensajes con inicio y cierre.","realWorld":"Comunicar ideas por escrito.","skill":"Organización de ideas","legacyDivision":false}],"science":[{"id":"science-2-1","title":"Ciclos de vida","goal":"Reconocer cambios en plantas, animales y seres humanos a lo largo del tiempo.","realWorld":"Comprender crecimiento y transformación de los seres vivos.","skill":"Pensamiento temporal","legacyDivision":false},{"id":"science-2-2","title":"Hábitats y necesidades","goal":"Relacionar seres vivos con alimento, agua, refugio y condiciones del lugar donde viven.","realWorld":"Comprender por qué los ambientes deben cuidarse.","skill":"Relación causa-efecto","legacyDivision":false},{"id":"science-2-3","title":"Cuidado del cuerpo","goal":"Reconocer hábitos de higiene, alimentación, descanso y actividad física.","realWorld":"Tomar decisiones cotidianas de autocuidado.","skill":"Autonomía","legacyDivision":false},{"id":"science-2-4","title":"Sólidos, líquidos y cambios","goal":"Observar propiedades de materiales y cambios sencillos por temperatura o mezcla.","realWorld":"Explicar fenómenos cotidianos con evidencia.","skill":"Experimentación","legacyDivision":false},{"id":"science-2-5","title":"Luz, sonido y movimiento","goal":"Reconocer fuentes de luz y sonido y describir movimientos y fuerzas sencillas.","realWorld":"Entender situaciones del entorno físico.","skill":"Curiosidad científica","legacyDivision":false},{"id":"science-2-6","title":"El tiempo atmosférico","goal":"Observar lluvia, viento, temperatura y nubosidad y registrar cambios.","realWorld":"Leer el entorno y hacer predicciones sencillas.","skill":"Registro de información","legacyDivision":false}],"social":[{"id":"social-2-1","title":"Mi comunidad","goal":"Reconocer personas, oficios, servicios e instituciones cercanas.","realWorld":"Comprender cómo las personas colaboran para que una comunidad funcione.","skill":"Participación","legacyDivision":false},{"id":"social-2-2","title":"Derechos y responsabilidades","goal":"Reconocer derechos básicos y responsabilidades en casa y colegio.","realWorld":"Convivir con mayor autonomía y respeto.","skill":"Ciudadanía","legacyDivision":false},{"id":"social-2-3","title":"Mapas y símbolos","goal":"Usar croquis, puntos de referencia, símbolos y direcciones básicas.","realWorld":"Ubicarse y comunicar rutas sencillas.","skill":"Orientación espacial","legacyDivision":false},{"id":"social-2-4","title":"Campo y ciudad","goal":"Comparar características, actividades y formas de vida de espacios rurales y urbanos.","realWorld":"Comprender diversidad de territorios y trabajos.","skill":"Pensamiento comparativo","legacyDivision":false},{"id":"social-2-5","title":"Tradiciones y cultura","goal":"Reconocer celebraciones, costumbres y expresiones culturales de distintas comunidades.","realWorld":"Valorar la diversidad cultural.","skill":"Identidad y respeto","legacyDivision":false},{"id":"social-2-6","title":"Cambios en el tiempo","goal":"Comparar objetos, lugares y costumbres de antes y de ahora.","realWorld":"Comprender que las sociedades cambian.","skill":"Pensamiento histórico","legacyDivision":false}],"english":[{"id":"english-2-1","title":"About me","goal":"Decir nombre, edad y datos personales muy básicos con frases sencillas.","realWorld":"Presentarse en situaciones básicas.","skill":"Comunicación","legacyDivision":false},{"id":"english-2-2","title":"Daily routines","goal":"Comprender y nombrar acciones frecuentes del día.","realWorld":"Hablar de hábitos y seguir secuencias.","skill":"Autonomía","legacyDivision":false},{"id":"english-2-3","title":"My home","goal":"Nombrar espacios y objetos comunes de la casa.","realWorld":"Describir dónde están objetos de forma sencilla.","skill":"Vocabulario funcional","legacyDivision":false},{"id":"english-2-4","title":"Food and drinks","goal":"Reconocer alimentos frecuentes y expresar gustos básicos.","realWorld":"Participar en intercambios sencillos sobre comida.","skill":"Comunicación cotidiana","legacyDivision":false},{"id":"english-2-5","title":"Can / can’t","goal":"Expresar habilidades sencillas y comprender lo que otros pueden hacer.","realWorld":"Hablar de capacidades y pedir ayuda.","skill":"Interacción","legacyDivision":false},{"id":"english-2-6","title":"Simple questions","goal":"Comprender y responder preguntas básicas con what, who, where y how old.","realWorld":"Sostener intercambios muy breves.","skill":"Comprensión e interacción","legacyDivision":false}]},"3":{"math":[{"id":"math-3-1","title":"Valor posicional y números grandes","goal":"Leer, escribir, comparar y descomponer números de varias cifras.","realWorld":"Comprender precios, distancias, cantidades y datos más grandes.","skill":"Pensamiento numérico","legacyDivision":false},{"id":"math-3-2","title":"Multiplicación","goal":"Consolidar tablas, estrategias y multiplicaciones por una cifra.","realWorld":"Calcular grupos, arreglos, costos y cantidades repetidas.","skill":"Agilidad y razonamiento","legacyDivision":false},{"id":"math-3-3","title":"División y reparto","goal":"Comprender la división, relacionarla con multiplicación y resolver divisiones básicas.","realWorld":"Repartir, formar grupos y resolver problemas de partes iguales.","skill":"Solución de problemas","legacyDivision":true},{"id":"math-3-4","title":"Fracciones básicas","goal":"Reconocer mitad, tercio, cuarto y otras partes iguales de una unidad o colección.","realWorld":"Interpretar repartos, recetas y porciones.","skill":"Pensamiento proporcional","legacyDivision":false},{"id":"math-3-5","title":"Medición, perímetro y tiempo","goal":"Medir longitudes y calcular perímetros sencillos; usar unidades de tiempo.","realWorld":"Planear espacios, recorridos y horarios.","skill":"Aplicación matemática","legacyDivision":false},{"id":"math-3-6","title":"Datos y problemas","goal":"Leer tablas y gráficos sencillos y resolver problemas de uno o dos pasos.","realWorld":"Interpretar información y tomar decisiones con datos.","skill":"Pensamiento crítico","legacyDivision":false}],"language":[{"id":"language-3-1","title":"Comprensión e inferencias sencillas","goal":"Identificar ideas principales, detalles y deducir información no dicha de forma directa.","realWorld":"Comprender mejor cuentos, instrucciones y textos informativos.","skill":"Lectura comprensiva","legacyDivision":false},{"id":"language-3-2","title":"Párrafos y secuencias","goal":"Organizar oraciones alrededor de una idea y conectar inicio, desarrollo y cierre.","realWorld":"Escribir explicaciones y relatos más claros.","skill":"Organización de ideas","legacyDivision":false},{"id":"language-3-3","title":"Tipos de texto","goal":"Reconocer narraciones, descripciones, instrucciones e información.","realWorld":"Elegir cómo leer y cómo escribir según el propósito.","skill":"Flexibilidad comunicativa","legacyDivision":false},{"id":"language-3-4","title":"Gramática en contexto","goal":"Usar sustantivos, verbos, adjetivos, pronombres y concordancia básica.","realWorld":"Expresarse con mayor precisión.","skill":"Comunicación","legacyDivision":false},{"id":"language-3-5","title":"Ortografía y puntuación","goal":"Usar mayúsculas, puntos, comas y reglas frecuentes de escritura.","realWorld":"Producir textos fáciles de entender.","skill":"Precisión escrita","legacyDivision":false},{"id":"language-3-6","title":"Explicar y argumentar","goal":"Expresar una opinión sencilla y sostenerla con una razón o ejemplo.","realWorld":"Participar en conversaciones y defender ideas con respeto.","skill":"Argumentación","legacyDivision":false}],"science":[{"id":"science-3-1","title":"Seres vivos y sus funciones","goal":"Reconocer funciones básicas de nutrición, relación y reproducción en seres vivos.","realWorld":"Comprender cómo organismos responden y sobreviven.","skill":"Pensamiento científico","legacyDivision":false},{"id":"science-3-2","title":"Ecosistemas","goal":"Relacionar organismos, alimento, hábitat y condiciones del ambiente.","realWorld":"Comprender consecuencias de cambios ambientales.","skill":"Pensamiento sistémico","legacyDivision":false},{"id":"science-3-3","title":"Materia y sus cambios","goal":"Comparar materiales, estados y cambios físicos observables.","realWorld":"Explicar transformaciones cotidianas.","skill":"Observación y explicación","legacyDivision":false},{"id":"science-3-4","title":"Luz, sonido y energía","goal":"Explorar cómo se producen y perciben luz y sonido y reconocer usos de la energía.","realWorld":"Comprender tecnologías y fenómenos del entorno.","skill":"Curiosidad científica","legacyDivision":false},{"id":"science-3-5","title":"Tierra y sistema solar","goal":"Reconocer movimientos y características básicas de la Tierra, el Sol y la Luna.","realWorld":"Interpretar día, noche y algunos ciclos naturales.","skill":"Pensamiento espacial","legacyDivision":false},{"id":"science-3-6","title":"Investigar como científico","goal":"Hacer preguntas, observar, registrar datos y comparar resultados.","realWorld":"Resolver dudas usando evidencia y no solo suposiciones.","skill":"Pensamiento crítico","legacyDivision":false}],"social":[{"id":"social-3-1","title":"Colombia y su territorio","goal":"Ubicar Colombia y reconocer elementos básicos de su territorio.","realWorld":"Comprender dónde vive y cómo se organiza el espacio nacional.","skill":"Identidad territorial","legacyDivision":false},{"id":"social-3-2","title":"Regiones y paisajes","goal":"Comparar paisajes, climas, recursos y formas de vida de distintas regiones.","realWorld":"Entender la diversidad geográfica del país.","skill":"Pensamiento comparativo","legacyDivision":false},{"id":"social-3-3","title":"Municipio y departamento","goal":"Reconocer niveles cercanos de organización territorial y autoridades básicas.","realWorld":"Comprender cómo se organiza la comunidad.","skill":"Ciudadanía","legacyDivision":false},{"id":"social-3-4","title":"Diversidad cultural","goal":"Reconocer aportes de pueblos indígenas, afrocolombianos y otras comunidades.","realWorld":"Valorar identidades y combatir prejuicios.","skill":"Respeto y diversidad","legacyDivision":false},{"id":"social-3-5","title":"Pasado y presente","goal":"Usar fuentes sencillas para comparar formas de vida de diferentes épocas.","realWorld":"Comprender cambios sociales y culturales.","skill":"Pensamiento histórico","legacyDivision":false},{"id":"social-3-6","title":"Convivencia y participación","goal":"Resolver desacuerdos, respetar normas y participar en decisiones sencillas.","realWorld":"Construir relaciones y ciudadanía democrática.","skill":"Competencia ciudadana","legacyDivision":false}],"english":[{"id":"english-3-1","title":"Present simple","goal":"Usar frases sencillas para hablar de rutinas, gustos y hechos habituales.","realWorld":"Hablar de la vida diaria.","skill":"Comunicación funcional","legacyDivision":false},{"id":"english-3-2","title":"Questions and answers","goal":"Formar y responder preguntas sencillas sobre personas, lugares y rutinas.","realWorld":"Sostener conversaciones cortas.","skill":"Interacción","legacyDivision":false},{"id":"english-3-3","title":"Descriptions","goal":"Describir personas, animales y lugares con vocabulario frecuente.","realWorld":"Compartir información con mayor detalle.","skill":"Expresión oral","legacyDivision":false},{"id":"english-3-4","title":"School and community","goal":"Usar vocabulario de colegio, lugares y actividades del entorno.","realWorld":"Comprender instrucciones y situaciones conocidas.","skill":"Vocabulario contextual","legacyDivision":false},{"id":"english-3-5","title":"Reading short texts","goal":"Comprender idea general y datos explícitos en textos breves.","realWorld":"Leer mensajes, diálogos y descripciones.","skill":"Comprensión lectora","legacyDivision":false},{"id":"english-3-6","title":"Writing simple paragraphs","goal":"Escribir varias oraciones conectadas sobre un tema familiar.","realWorld":"Comunicar ideas breves por escrito.","skill":"Producción escrita","legacyDivision":false}]},"4":{"math":[{"id":"math-4-1","title":"Operaciones con números naturales","goal":"Resolver sumas, restas y multiplicaciones de varias cifras usando estrategias y algoritmos.","realWorld":"Calcular costos, diferencias y cantidades en problemas de varios pasos.","skill":"Razonamiento numérico","legacyDivision":false},{"id":"math-4-2","title":"División paso a paso","goal":"Resolver divisiones con una o más cifras y comprender cociente y residuo.","realWorld":"Distribuir cantidades y resolver problemas más complejos.","skill":"Solución de problemas","legacyDivision":true},{"id":"math-4-3","title":"Fracciones equivalentes","goal":"Representar, comparar y encontrar fracciones equivalentes.","realWorld":"Interpretar porciones y distintas formas de representar la misma cantidad.","skill":"Pensamiento proporcional","legacyDivision":false},{"id":"math-4-4","title":"Decimales","goal":"Leer, comparar y usar décimas y centésimas en contextos sencillos.","realWorld":"Trabajar con dinero, medidas y cantidades no enteras.","skill":"Precisión numérica","legacyDivision":false},{"id":"math-4-5","title":"Área, perímetro y geometría","goal":"Calcular perímetros y áreas de figuras comunes y describir ángulos y propiedades.","realWorld":"Analizar espacios, diseños y medidas.","skill":"Pensamiento espacial","legacyDivision":false},{"id":"math-4-6","title":"Datos, probabilidad y problemas","goal":"Interpretar tablas y gráficos, comparar datos y estimar posibilidades sencillas.","realWorld":"Tomar decisiones con información cuantitativa.","skill":"Pensamiento crítico","legacyDivision":false}],"language":[{"id":"language-4-1","title":"Lectura inferencial","goal":"Relacionar pistas del texto para deducir causas, intenciones y consecuencias.","realWorld":"Comprender mensajes que no dicen todo de forma explícita.","skill":"Pensamiento crítico","legacyDivision":false},{"id":"language-4-2","title":"Resumen e idea central","goal":"Distinguir información principal de detalles y producir resúmenes claros.","realWorld":"Estudiar mejor y comunicar lo esencial.","skill":"Síntesis","legacyDivision":false},{"id":"language-4-3","title":"Textos narrativos e informativos","goal":"Analizar estructura, propósito y recursos de diferentes tipos de texto.","realWorld":"Adaptar la lectura a lo que se necesita comprender.","skill":"Comprensión textual","legacyDivision":false},{"id":"language-4-4","title":"Oraciones y conectores","goal":"Construir oraciones y párrafos usando conectores de causa, secuencia, contraste y consecuencia.","realWorld":"Explicar ideas de forma lógica.","skill":"Comunicación estructurada","legacyDivision":false},{"id":"language-4-5","title":"Ortografía y revisión","goal":"Aplicar reglas frecuentes y revisar un texto antes de entregarlo.","realWorld":"Escribir con mayor claridad y autonomía.","skill":"Autocorrección","legacyDivision":false},{"id":"language-4-6","title":"Opinión con razones","goal":"Formular una postura y respaldarla con razones, ejemplos o información del texto.","realWorld":"Debatir y participar respetuosamente.","skill":"Argumentación","legacyDivision":false}],"science":[{"id":"science-4-1","title":"Células y organización de los seres vivos","goal":"Reconocer la célula como unidad básica y relacionarla con tejidos, órganos y sistemas.","realWorld":"Comprender cómo se organiza la vida.","skill":"Pensamiento sistémico","legacyDivision":false},{"id":"science-4-2","title":"Cadenas alimentarias y ecosistemas","goal":"Analizar productores, consumidores, descomponedores y relaciones en ecosistemas.","realWorld":"Comprender impactos cuando cambia una parte del ambiente.","skill":"Relación causa-efecto","legacyDivision":false},{"id":"science-4-3","title":"Mezclas y materiales","goal":"Distinguir sustancias, mezclas y métodos sencillos de separación.","realWorld":"Explicar procesos cotidianos como filtrar o decantar.","skill":"Experimentación","legacyDivision":false},{"id":"science-4-4","title":"Fuerza y energía","goal":"Relacionar fuerzas con cambios de movimiento y reconocer formas y transformaciones de energía.","realWorld":"Comprender máquinas y fenómenos cotidianos.","skill":"Razonamiento científico","legacyDivision":false},{"id":"science-4-5","title":"Tierra, agua y atmósfera","goal":"Reconocer componentes y cambios básicos de los sistemas terrestres.","realWorld":"Comprender fenómenos ambientales y cuidado de recursos.","skill":"Pensamiento ambiental","legacyDivision":false},{"id":"science-4-6","title":"Diseñar una investigación","goal":"Plantear preguntas, variables simples, registros y conclusiones basadas en resultados.","realWorld":"Aprender a comprobar ideas con evidencia.","skill":"Pensamiento crítico","legacyDivision":false}],"social":[{"id":"social-4-1","title":"Regiones naturales de Colombia","goal":"Comparar características geográficas, culturales y económicas de las regiones.","realWorld":"Comprender la diversidad territorial del país.","skill":"Pensamiento geográfico","legacyDivision":false},{"id":"social-4-2","title":"Mapas y escalas básicas","goal":"Interpretar convenciones, coordenadas sencillas, orientación y distancias aproximadas.","realWorld":"Leer información espacial con autonomía.","skill":"Orientación y análisis","legacyDivision":false},{"id":"social-4-3","title":"Pueblos y procesos históricos","goal":"Reconocer sociedades prehispánicas, encuentro de culturas y cambios de la época colonial.","realWorld":"Comprender que la historia tiene múltiples actores y perspectivas.","skill":"Pensamiento histórico","legacyDivision":false},{"id":"social-4-4","title":"Independencia y cambios políticos","goal":"Reconocer causas y consecuencias básicas de procesos de independencia y organización republicana.","realWorld":"Relacionar hechos y cambios políticos.","skill":"Causa y consecuencia","legacyDivision":false},{"id":"social-4-5","title":"Economía y territorio","goal":"Distinguir actividades económicas y su relación con recursos y regiones.","realWorld":"Comprender cómo se producen bienes y servicios.","skill":"Pensamiento económico","legacyDivision":false},{"id":"social-4-6","title":"Democracia y convivencia","goal":"Reconocer formas de participación, autoridades y estrategias pacíficas para resolver conflictos.","realWorld":"Participar de manera informada y respetuosa.","skill":"Ciudadanía","legacyDivision":false}],"english":[{"id":"english-4-1","title":"Present simple and frequency","goal":"Hablar de rutinas usando expresiones de frecuencia y vocabulario cotidiano.","realWorld":"Describir hábitos propios y de otros.","skill":"Comunicación","legacyDivision":false},{"id":"english-4-2","title":"Present continuous","goal":"Describir acciones que ocurren en este momento.","realWorld":"Hablar de situaciones visibles o actuales.","skill":"Expresión oral","legacyDivision":false},{"id":"english-4-3","title":"Comparatives","goal":"Comparar personas, animales, objetos y lugares con estructuras sencillas.","realWorld":"Explicar semejanzas y diferencias.","skill":"Pensamiento comparativo","legacyDivision":false},{"id":"english-4-4","title":"Directions and places","goal":"Dar y seguir indicaciones básicas y nombrar lugares de la comunidad.","realWorld":"Orientarse y pedir ayuda en contextos sencillos.","skill":"Comunicación funcional","legacyDivision":false},{"id":"english-4-5","title":"Reading for details","goal":"Identificar idea general y detalles específicos en textos cortos.","realWorld":"Comprender información práctica.","skill":"Comprensión lectora","legacyDivision":false},{"id":"english-4-6","title":"Short messages and descriptions","goal":"Escribir mensajes, descripciones y pequeños textos con vocabulario conocido.","realWorld":"Comunicar información por escrito.","skill":"Producción escrita","legacyDivision":false}]},"5":{"math":[{"id":"math-5-1","title":"Operaciones y problemas multietapa","goal":"Combinar operaciones con números naturales y justificar el procedimiento elegido.","realWorld":"Resolver situaciones con varios datos y pasos.","skill":"Planificación y razonamiento","legacyDivision":false},{"id":"math-5-2","title":"Fracciones y operaciones","goal":"Comparar fracciones y resolver sumas o restas sencillas con fracciones compatibles.","realWorld":"Trabajar con repartos, recetas y medidas.","skill":"Pensamiento proporcional","legacyDivision":false},{"id":"math-5-3","title":"Decimales, porcentajes y dinero","goal":"Relacionar decimales con fracciones y porcentajes básicos en contextos cotidianos.","realWorld":"Interpretar descuentos, cantidades y dinero.","skill":"Competencia financiera básica","legacyDivision":false},{"id":"math-5-4","title":"Divisibilidad y razonamiento multiplicativo","goal":"Usar múltiplos, divisores, divisiones y relaciones entre operaciones para resolver problemas.","realWorld":"Detectar patrones numéricos y organizar cantidades.","skill":"Razonamiento lógico","legacyDivision":true},{"id":"math-5-5","title":"Área, volumen y geometría","goal":"Calcular áreas y explorar volumen, ángulos, simetría y propiedades de figuras.","realWorld":"Analizar objetos, espacios y diseños.","skill":"Pensamiento espacial","legacyDivision":false},{"id":"math-5-6","title":"Estadística y decisiones","goal":"Leer, producir y comparar tablas/gráficos; usar promedio simple e interpretar datos.","realWorld":"Tomar decisiones sustentadas en información.","skill":"Pensamiento crítico","legacyDivision":false}],"language":[{"id":"language-5-1","title":"Lectura crítica inicial","goal":"Distinguir hechos, opiniones, propósitos y puntos de vista en textos apropiados para la edad.","realWorld":"Evaluar mejor la información que recibe.","skill":"Pensamiento crítico","legacyDivision":false},{"id":"language-5-2","title":"Inferir y relacionar información","goal":"Conectar diferentes partes de un texto y usar conocimientos previos para construir significado.","realWorld":"Comprender textos más complejos.","skill":"Comprensión profunda","legacyDivision":false},{"id":"language-5-3","title":"Planear y escribir textos","goal":"Definir propósito, organizar ideas, redactar, revisar y mejorar un texto.","realWorld":"Comunicarse con mayor autonomía.","skill":"Producción escrita","legacyDivision":false},{"id":"language-5-4","title":"Argumentar con evidencia","goal":"Presentar una idea y apoyarla con razones, ejemplos o información verificable.","realWorld":"Defender puntos de vista sin agredir.","skill":"Argumentación","legacyDivision":false},{"id":"language-5-5","title":"Gramática y estilo","goal":"Usar tiempos verbales, pronombres, conectores y puntuación para mejorar claridad.","realWorld":"Expresarse con precisión.","skill":"Comunicación","legacyDivision":false},{"id":"language-5-6","title":"Medios e información","goal":"Analizar mensajes de medios, publicidad y contenidos digitales sencillos.","realWorld":"Reconocer intención, fuente y posibles sesgos.","skill":"Alfabetización mediática","legacyDivision":false}],"science":[{"id":"science-5-1","title":"Células y sistemas del cuerpo","goal":"Relacionar células, tejidos, órganos y sistemas y comprender funciones básicas del cuerpo.","realWorld":"Entender cómo se coordinan procesos del organismo.","skill":"Pensamiento sistémico","legacyDivision":false},{"id":"science-5-2","title":"Ecosistemas y equilibrio","goal":"Analizar redes alimentarias, adaptaciones y efectos de cambios ambientales.","realWorld":"Comprender consecuencias ecológicas y tomar decisiones responsables.","skill":"Pensamiento ambiental","legacyDivision":false},{"id":"science-5-3","title":"Materia, mezclas y cambios","goal":"Comparar propiedades, cambios físicos y químicos sencillos y métodos de separación.","realWorld":"Explicar transformaciones de materiales.","skill":"Experimentación","legacyDivision":false},{"id":"science-5-4","title":"Energía, electricidad y máquinas","goal":"Explorar circuitos simples, transformaciones de energía y máquinas sencillas.","realWorld":"Comprender tecnologías del entorno.","skill":"Razonamiento científico","legacyDivision":false},{"id":"science-5-5","title":"Tierra, sistema solar y universo","goal":"Relacionar movimientos de la Tierra y la Luna con fenómenos observables.","realWorld":"Interpretar ciclos y modelos básicos del sistema solar.","skill":"Pensamiento espacial","legacyDivision":false},{"id":"science-5-6","title":"Método científico y evidencia","goal":"Formular preguntas, hipótesis, procedimientos, datos y conclusiones.","realWorld":"Evaluar afirmaciones usando evidencia.","skill":"Pensamiento crítico","legacyDivision":false}],"social":[{"id":"social-5-1","title":"Colombia: territorio y población","goal":"Relacionar relieve, clima, regiones, población y actividades humanas.","realWorld":"Comprender cómo territorio y sociedad se influyen.","skill":"Pensamiento geográfico","legacyDivision":false},{"id":"social-5-2","title":"Colombia republicana","goal":"Reconocer procesos y cambios fundamentales de la vida republicana en un nivel introductorio.","realWorld":"Comprender cómo decisiones del pasado afectan el presente.","skill":"Pensamiento histórico","legacyDivision":false},{"id":"social-5-3","title":"Constitución, derechos y democracia","goal":"Comprender principios básicos de derechos, deberes, participación y organización del Estado.","realWorld":"Ejercer ciudadanía informada desde la escuela.","skill":"Ciudadanía","legacyDivision":false},{"id":"social-5-4","title":"Economía y consumo responsable","goal":"Reconocer producción, intercambio, trabajo, ahorro y decisiones de consumo.","realWorld":"Tomar decisiones económicas básicas con responsabilidad.","skill":"Competencia económica","legacyDivision":false},{"id":"social-5-5","title":"Diversidad, paz y resolución de conflictos","goal":"Analizar diferencias, prejuicios, acuerdos y formas pacíficas de manejar conflictos.","realWorld":"Convivir en contextos diversos.","skill":"Competencia social","legacyDivision":false},{"id":"social-5-6","title":"Información y ciudadanía digital","goal":"Distinguir fuentes, reconocer información confiable y comportarse responsablemente en entornos digitales.","realWorld":"Participar de forma segura y crítica en sociedad.","skill":"Ciudadanía digital","legacyDivision":false}],"english":[{"id":"english-5-1","title":"Present and past simple","goal":"Usar estructuras frecuentes para hablar de rutinas y acontecimientos pasados sencillos.","realWorld":"Contar experiencias y describir hábitos.","skill":"Comunicación","legacyDivision":false},{"id":"english-5-2","title":"Future intentions","goal":"Usar expresiones básicas para planes e intenciones futuras.","realWorld":"Hablar de metas y planes.","skill":"Expresión personal","legacyDivision":false},{"id":"english-5-3","title":"Comparing and describing","goal":"Comparar y describir personas, lugares y objetos con mayor variedad de vocabulario.","realWorld":"Comunicar diferencias y preferencias.","skill":"Comunicación precisa","legacyDivision":false},{"id":"english-5-4","title":"Reading short informational texts","goal":"Comprender idea general, secuencia y detalles en textos apropiados para primaria.","realWorld":"Acceder a información sencilla en inglés.","skill":"Comprensión lectora","legacyDivision":false},{"id":"english-5-5","title":"Writing connected texts","goal":"Escribir párrafos breves conectando ideas con and, but, because, then y otras expresiones conocidas.","realWorld":"Explicar y narrar por escrito.","skill":"Producción escrita","legacyDivision":false},{"id":"english-5-6","title":"Everyday conversation","goal":"Participar en intercambios sobre escuela, gustos, rutinas, lugares, planes y necesidades.","realWorld":"Desenvolverse en conversaciones sencillas.","skill":"Competencia comunicativa","legacyDivision":false}]}};
  let curriculumCurrentSubject = 'math';
  let curriculumCurrentTopicIndex = 0;
  let curriculumGameState = null;

  let commercialAccessGranted = false;
  let supabaseClient = null;
  let currentSession = null;
  let currentUser = null;
  let activeChild = null;
  let cloudReady = false;
  let cloudSyncTimer = null;
  let cloudSyncInFlight = false;
  let cloudSyncQueued = false;
  let authMode = 'signup';
  let familyLoadPromise = null;
  let mercadoPagoClient = null;
  let mercadoPagoCardForm = null;
  let mercadoPagoFormReady = false;
  let mercadoPagoFormInitializing = false;
  let mercadoPagoInitPromise = null;
  let mercadoPagoSubmitting = false;
  let currentSubscriptionInfo = null;
  let subscriptionCancelBusy = false;

  let subscriptionConfig = {
    enabled: true,
    paymentConfigured: false,
    publicKey: '',
    flow: 'authorized-card-token',
    amount: null,
    currency: 'COP',
    formattedAmount: ''
  };

  function readLocalJson(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function writeLocalJson(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  }

  function familyProfile() {
    return readLocalJson(FAMILY_PROFILE_KEY) || {};
  }

  function explorerName() {
    const dbName = activeChild?.name;
    const name = String(dbName || familyProfile().childName || 'Explorador').trim();
    return name || 'Explorador';
  }

  function explorerLabel() {
    return explorerName().toLocaleUpperCase('es-CO');
  }


  function curriculumScopeSuffix() {
    const userId = String(currentUser?.id || 'anonymous');
    const childId = String(activeChild?.id || familyProfile()?.childId || explorerName() || 'child');
    return `${userId}:${childId}`;
  }

  function curriculumGradeStorageKey() {
    return `${CURRICULUM_GRADE_KEY}:${curriculumScopeSuffix()}`;
  }

  function curriculumActivityStorageKey() {
    return `${CURRICULUM_ACTIVITY_KEY}:${curriculumScopeSuffix()}`;
  }

  function selectedCurriculumGrade() {
    const value = Number(localStorage.getItem(curriculumGradeStorageKey()) || 0);
    return value >= 1 && value <= 5 ? value : 0;
  }

  function curriculumActivity() {
    return readLocalJson(curriculumActivityStorageKey()) || { started:{} };
  }

  function saveCurriculumActivity(value) {
    writeLocalJson(curriculumActivityStorageKey(), value);
  }

  function markCurriculumTopicStarted(subjectKey, grade, topicId) {
    const activity = curriculumActivity();
    if (!activity.started || typeof activity.started !== 'object') activity.started = {};
    activity.started[`${grade}:${subjectKey}:${topicId}`] = Date.now();
    saveCurriculumActivity(activity);
  }

  function visitedCurriculumTopics(subjectKey, grade) {
    const activity = curriculumActivity();
    const topics = CURRICULUM[String(grade)]?.[subjectKey] || [];
    return topics.filter(topic => activity.started?.[`${grade}:${subjectKey}:${topic.id}`]).length;
  }

  function setCurriculumGrade(grade) {
    const value = Number(grade);
    if (value < 1 || value > 5) return;
    try { localStorage.setItem(curriculumGradeStorageKey(), String(value)); } catch {}
    renderCurriculumHome();
    if (curriculumSubjectHub && !curriculumSubjectHub.hidden) renderCurriculumSubject(curriculumCurrentSubject);
    renderParentCurriculumPlan();
    playTap();
  }

  function syncGradeSelectors() {
    const grade = selectedCurriculumGrade();
    [gradeSelector, subjectGradeSelector].forEach(container => {
      container?.querySelectorAll('[data-grade]').forEach(btn => {
        const active = Number(btn.dataset.grade) === grade;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
      });
    });
  }

  function renderCurriculumHome() {
    const grade = selectedCurriculumGrade();
    syncGradeSelectors();
    if (subjectsGradeLabel) subjectsGradeLabel.textContent = grade ? `${grade}.º de primaria` : 'Elige tu grado';

    Object.keys(CURRICULUM_SUBJECTS).forEach(subjectKey => {
      const topics = grade ? (CURRICULUM[String(grade)]?.[subjectKey] || []) : [];
      const visited = grade ? visitedCurriculumTopics(subjectKey, grade) : 0;
      const status = subjectKey === 'math'
        ? hubMathStatus
        : document.querySelector(`[data-subject-status="${subjectKey}"]`);
      const bar = subjectKey === 'math'
        ? hubMathProgressBar
        : document.querySelector(`[data-subject-bar="${subjectKey}"]`);

      if (status) status.textContent = grade
        ? `${topics.length} temas para jugar${visited ? ` · ${visited} iniciado${visited === 1 ? '' : 's'}` : ''}`
        : 'Selecciona tu grado';
      if (bar) bar.style.width = grade && topics.length ? `${Math.round((visited / topics.length) * 100)}%` : '0%';
    });
  }

  function renderParentCurriculumPlan() {
    if (!parentCurriculumGrade || !parentCurriculumSubjects) return;
    const grade = selectedCurriculumGrade();
    parentCurriculumGrade.textContent = grade ? `${grade}.º de primaria` : 'Selecciona el grado desde Inicio';
    if (learningProgressChild) learningProgressChild.textContent = grade ? `Primaria · ${grade}.º` : 'Primaria · grado por seleccionar';
    parentCurriculumSubjects.innerHTML = '';
    Object.entries(CURRICULUM_SUBJECTS).forEach(([key, meta]) => {
      const count = grade ? (CURRICULUM[String(grade)]?.[key] || []).length : 0;
      const visited = grade ? visitedCurriculumTopics(key, grade) : 0;
      const item = document.createElement('div');
      item.innerHTML = `<span>${meta.icon}</span><p><strong>${meta.name}</strong><small>${grade ? `${count} aprendizajes · ${visited} explorados` : 'Pendiente de grado'}</small></p>`;
      parentCurriculumSubjects.appendChild(item);
    });
  }

  function curriculumTopicIconFor(subjectKey, index) {
    const pools = {
      math:['🔢','➕','✖️','➗','📐','📊'],
      language:['🔤','📚','✍️','🧩','📝','💬'],
      science:['🧬','🌱','🧪','⚡','🌍','🔎'],
      social:['🧭','🏘️','🗺️','🏛️','🤝','🕰️'],
      english:['👋','🔤','🗣️','📖','✍️','🌐']
    };
    return (pools[subjectKey] || ['🧠'])[index % 6];
  }

  function renderCurriculumSubject(subjectKey = curriculumCurrentSubject) {
    const grade = selectedCurriculumGrade();
    if (!grade) return;
    const meta = CURRICULUM_SUBJECTS[subjectKey] || CURRICULUM_SUBJECTS.math;
    const topics = CURRICULUM[String(grade)]?.[subjectKey] || [];
    curriculumCurrentSubject = subjectKey;
    syncGradeSelectors();

    if (curriculumSubjectIcon) curriculumSubjectIcon.textContent = meta.icon;
    if (curriculumSubjectKicker) curriculumSubjectKicker.textContent = `${meta.name.toLocaleUpperCase('es-CO')} · ${grade}.º`;
    if (curriculumSubjectTitle) curriculumSubjectTitle.textContent = meta.name;
    if (curriculumSubjectDescription) curriculumSubjectDescription.textContent = meta.description;
    if (curriculumGradeTitle) curriculumGradeTitle.textContent = `${grade}.º`;
    if (curriculumTopicCount) curriculumTopicCount.textContent = `${topics.length} aprendizajes`;
    if (curriculumCompetencyText) curriculumCompetencyText.textContent = meta.competency;

    if (curriculumTopicGrid) {
      curriculumTopicGrid.innerHTML = '';
      const activity = curriculumActivity();
      topics.forEach((topic, index) => {
        const started = Boolean(activity.started?.[`${grade}:${subjectKey}:${topic.id}`]);
        const gameResult = curriculumGameProgress()[curriculumGameTopicKey(grade, subjectKey, topic.id)];
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `curriculum-topic-card${started ? ' started' : ''}`;
        btn.dataset.topicIndex = String(index);
        btn.innerHTML = `
          <span class="curriculum-topic-icon">${curriculumTopicIconFor(subjectKey,index)}</span>
          <span class="curriculum-topic-copy">
            <small>${String(index + 1).padStart(2,'0')} · ${gameResult?.plays ? `${'★'.repeat(gameResult.bestStars || 0)}${'☆'.repeat(3-(gameResult.bestStars || 0))} · ${gameResult.bestScore || 0}/5` : (started ? 'EN PRÁCTICA' : '5 RETOS PARA JUGAR')}</small>
            <strong>${topic.title}</strong>
            <em>${topic.goal}</em>
            <b>${topic.skill}</b>
          </span>
          <span class="curriculum-topic-arrow">→</span>`;
        btn.addEventListener('click', () => {
          playTap();
          showCurriculumTopic(subjectKey, index);
        });
        curriculumTopicGrid.appendChild(btn);
      });
    }
  }

  function hideCurriculumViews() {
    if (curriculumSubjectHub) curriculumSubjectHub.hidden = true;
    if (curriculumTopicHub) curriculumTopicHub.hidden = true;
  }

  function showCurriculumSubject(subjectKey = 'math') {
    if (!commercialAccessGranted) {
      showCommercialGate('Activa el plan familiar para explorar las materias con NOVA.');
      return;
    }
    const grade = selectedCurriculumGrade();
    if (!grade) {
      showLearningHubView();
      showToast('Primero elige el grado escolar para mostrarte la ruta correcta ✨', 3000);
      return;
    }

    closeNavigationOverlays();
    saveGameState();
    saveNotebookState();
    saveAcademyState();
    if (intro) intro.hidden = true;
    if (app) app.hidden = true;
    if (learningHub) learningHub.hidden = true;
    if (mathHub) mathHub.hidden = true;
    if (novaTutorHub) novaTutorHub.hidden = true;
    if (curriculumTopicHub) curriculumTopicHub.hidden = true;
    if (curriculumSubjectHub) curriculumSubjectHub.hidden = false;
    renderCurriculumSubject(subjectKey);
    document.body.classList.remove('content-focus');
    resetViewScroll(curriculumSubjectHub);
  }

  function showCurriculumTopic(subjectKey, index) {
    const grade = selectedCurriculumGrade();
    const meta = CURRICULUM_SUBJECTS[subjectKey];
    const topic = CURRICULUM[String(grade)]?.[subjectKey]?.[index];
    if (!grade || !meta || !topic) return;
    curriculumCurrentSubject = subjectKey;
    curriculumCurrentTopicIndex = index;

    if (curriculumSubjectHub) curriculumSubjectHub.hidden = true;
    if (curriculumTopicHub) curriculumTopicHub.hidden = false;
    if (curriculumTopicIcon) curriculumTopicIcon.textContent = curriculumTopicIconFor(subjectKey,index);
    if (curriculumTopicKicker) curriculumTopicKicker.textContent = `${meta.name.toLocaleUpperCase('es-CO')} · ${grade}.º`;
    if (curriculumTopicTitle) curriculumTopicTitle.textContent = topic.title;
    if (curriculumTopicGoal) curriculumTopicGoal.textContent = topic.goal;
    if (curriculumTopicRealWorld) curriculumTopicRealWorld.textContent = topic.realWorld;
    if (curriculumTopicSkill) curriculumTopicSkill.textContent = topic.skill;
    if (curriculumDivisionLabBtn) curriculumDivisionLabBtn.hidden = !topic.legacyDivision;
    updateCurriculumGameBest();
    resetViewScroll(curriculumTopicHub);
  }

  function currentCurriculumTopic() {
    const grade = selectedCurriculumGrade();
    const subjectKey = curriculumCurrentSubject;
    const meta = CURRICULUM_SUBJECTS[subjectKey];
    const topic = CURRICULUM[String(grade)]?.[subjectKey]?.[curriculumCurrentTopicIndex];
    return { grade, subjectKey, meta, topic };
  }

  function practiceCurrentCurriculumTopic({ askOnly = false } = {}) {
    const { grade, subjectKey, meta, topic } = currentCurriculumTopic();
    if (!grade || !meta || !topic) return;
    markCurriculumTopicStarted(subjectKey, grade, topic.id);
    renderCurriculumHome();
    renderParentCurriculumPlan();
    showNovaTutorView();

    if (!askOnly) {
      const prompt = `Estoy en ${grade}.º de primaria y quiero reforzar ${topic.title} en ${meta.name}. ${topic.goal} Explícame primero la idea con un ejemplo corto y luego hazme una sola pregunta para que yo la intente. No me des la respuesta antes de que yo responda.`;
      setTimeout(() => askGeneralNova(prompt, `Quiero practicar: ${topic.title}`), 140);
    } else if (novaGeneralInput) {
      novaGeneralInput.placeholder = `Pregunta sobre ${topic.title}…`;
    }
  }


  function curriculumGameStorageKey() {
    const profile = familyProfile();
    const childId = activeChild?.id || profile?.childId || profile?.childName || 'child';
    return `${CURRICULUM_GAME_PROGRESS_KEY}:${childId}`;
  }

  function curriculumGameProgress() {
    try {
      const parsed = JSON.parse(localStorage.getItem(curriculumGameStorageKey()) || '{}');
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
      return {};
    }
  }

  function saveCurriculumGameResult(topicKey, score, total = 5) {
    const progress = curriculumGameProgress();
    const previous = progress[topicKey] || {};
    const stars = score >= total ? 3 : score >= Math.ceil(total * .8) ? 2 : score >= Math.ceil(total * .6) ? 1 : 0;
    progress[topicKey] = {
      bestScore: Math.max(Number(previous.bestScore || 0), score),
      bestStars: Math.max(Number(previous.bestStars || 0), stars),
      plays: Number(previous.plays || 0) + 1,
      total,
      lastPlayedAt: new Date().toISOString()
    };
    try { localStorage.setItem(curriculumGameStorageKey(), JSON.stringify(progress)); } catch {}
    return progress[topicKey];
  }

  function curriculumGameTopicKey(grade, subjectKey, topicId) {
    return `${grade}:${subjectKey}:${topicId}`;
  }

  function gameChoice(question, answer, wrong = [], explanation = '', hint = '', emoji = '🧠') {
    const options = [String(answer), ...wrong.map(String)]
      .filter((value, index, arr) => value && arr.indexOf(value) === index)
      .slice(0, 4);
    return { question, answer: String(answer), options, explanation, hint, emoji };
  }

  function shuffled(values = []) {
    return [...values].sort(() => Math.random() - .5);
  }

  function numericWrongs(answer, spread = 4) {
    const n = Number(answer);
    const candidates = [n + 1, n - 1, n + spread, Math.max(0, n - spread), n + 10, Math.max(0, n - 10)];
    return [...new Set(candidates.filter(v => v !== n))].slice(0, 3).map(String);
  }

  function mathExercisePack(grade, topic) {
    const id = topic.id;
    const g = Number(grade);
    const q = [];
    const add = (question, answer, wrong, explanation, hint, emoji='🔢') => q.push(gameChoice(question, answer, wrong, explanation, hint, emoji));

    if (id === 'math-1-1') {
      add('¿Cuál número es mayor?', '72', ['27','62','52'], '72 tiene 7 decenas; los demás tienen menos.', 'Mira primero las decenas.');
      add('¿Cuántas decenas tiene 46?', '4', ['6','46','10'], '46 está formado por 4 decenas y 6 unidades.', 'La cifra de la izquierda indica las decenas.');
      add('¿Qué número viene después de 59?', '60', ['58','69','50'], 'Después de 59 comienza una nueva decena: 60.', 'Cuenta uno más.');
      add('¿Cuál orden va de menor a mayor?', '18, 31, 45', ['45, 31, 18','31, 18, 45','18, 45, 31'], '18 es el menor, luego 31 y finalmente 45.', 'Compara primero las decenas.');
      add('8 decenas y 3 unidades forman…', '83', ['38','803','11'], '8 decenas son 80 y 3 unidades completan 83.', '80 + 3.');
    } else if (id === 'math-1-2') {
      add('Tienes 7 fichas y ganas 5. ¿Cuántas tienes?', '12', ['2','11','13'], 'Juntar cantidades significa sumar: 7 + 5 = 12.', 'Cuenta 5 más desde 7.','➕');
      add('15 − 6 = …', '9', ['8','10','21'], 'Si a 15 le quitamos 6 quedan 9.', 'Retrocede 6 pasos desde 15.','➖');
      add('¿Qué operación sirve para juntar 8 globos y 4 globos?', 'Sumar', ['Restar','Dividir','Comparar'], 'Cuando juntamos dos cantidades usamos la suma.', 'Juntar = hacer un total.','➕');
      add('Había 13 pájaros y 3 se fueron. ¿Cuántos quedan?', '10', ['16','9','11'], 'Como se fueron, restamos: 13 − 3 = 10.', 'Si algo se va, la cantidad disminuye.','➖');
      add('9 + 9 = …', '18', ['17','19','0'], '9 + 9 es el doble de 9: 18.', 'Piensa en dos grupos de 9.','➕');
    } else if (id === 'math-1-3') {
      add('Completa: 2, 4, 6, 8, …', '10', ['9','11','12'], 'La secuencia aumenta de 2 en 2.', 'Mira cuánto cambia entre dos números.','🧩');
      add('Completa: 🔵 🔴 🔵 🔴 …', '🔵', ['🔴','🟢','🟡'], 'El patrón alterna azul, rojo, azul, rojo.', 'Busca lo que se repite.','🧩');
      add('Completa: 5, 10, 15, …', '20', ['16','25','30'], 'Cada número aumenta 5.', 'Suma lo mismo otra vez.','🧩');
      add('¿Cuál sigue? ▲ ▲ ● ▲ ▲ ● …', '▲', ['●','■','◆'], 'Se repite el grupo ▲ ▲ ●.', 'Identifica el grupo completo que se repite.','🧩');
      add('Completa: 20, 18, 16, …', '14', ['15','12','19'], 'La secuencia baja de 2 en 2.', 'También hay patrones que disminuyen.','🧩');
    } else if (id === 'math-1-4') {
      add('¿Qué figura tiene 3 lados?', 'Triángulo', ['Cuadrado','Círculo','Rectángulo'], 'Un triángulo tiene tres lados.', 'Tri significa tres.','📐');
      add('¿Qué figura no tiene lados rectos?', 'Círculo', ['Triángulo','Cuadrado','Rectángulo'], 'El círculo es una curva cerrada.', 'Piensa en una rueda.','📐');
      add('Si el libro está sobre la mesa, está…', 'Arriba de la mesa', ['Debajo de la mesa','Dentro de la mesa','Lejos de la mesa'], '“Sobre” indica una posición arriba.', 'Sobre = encima.','🧭');
      add('¿Cuál tiene 4 lados iguales?', 'Cuadrado', ['Triángulo','Círculo','Óvalo'], 'El cuadrado tiene cuatro lados de la misma longitud.', 'Cuenta sus lados.','📐');
      add('Tu mano izquierda está al lado…', 'Izquierdo de tu cuerpo', ['Derecho','Arriba','Dentro'], 'Izquierda y derecha sirven para ubicarnos.', 'Piensa en los dos lados de tu cuerpo.','🧭');
    } else if (id === 'math-1-5') {
      add('¿Qué usarías para medir el largo de una mesa?', 'Una regla o cinta', ['Una balanza','Un reloj','Un vaso'], 'La longitud se mide con regla o cinta.', 'Busca una herramienta para medir largo.','📏');
      add('¿Qué pesa más normalmente?', 'Una sandía', ['Una uva','Una hoja','Un grano de arroz'], 'Una sandía tiene mucha más masa que esos objetos.', 'Compara objetos reales.','⚖️');
      add('¿Qué recipiente suele tener mayor capacidad?', 'Una jarra', ['Una cuchara','Una tapa','Un dedal'], 'Una jarra puede contener mucho más líquido.', 'Capacidad = cuánto cabe.','🥛');
      add('¿Qué dura más?', 'Una hora', ['Un minuto','Un segundo','Medio minuto'], 'Una hora contiene 60 minutos.', 'Compara las unidades de tiempo.','⏰');
      add('Si dos lápices miden igual, tienen…', 'La misma longitud', ['El mismo peso siempre','Distinto tamaño','Distinta duración'], 'La longitud describe qué tan largo es algo.', 'Igual de largos = misma longitud.','📏');
    } else if (id === 'math-1-6') {
      add('Ana tiene 8 dulces y recibe 3 más. ¿Qué haces?', '8 + 3', ['8 − 3','3 − 8','8 ÷ 3'], 'Recibir más aumenta la cantidad, por eso sumamos.', 'Busca palabras como “más” o “recibe”.','🧠');
      add('Había 12 carros y se fueron 5. ¿Qué haces?', '12 − 5', ['12 + 5','5 + 12','12 × 5'], 'Si algunos se van, la cantidad disminuye.', 'Se fueron = quitar.','🧠');
      add('Luis tiene 6 canicas y Marta 9. ¿Cuántas tienen entre los dos?', '15', ['3','54','9'], '“Entre los dos” pide un total: 6 + 9 = 15.', 'Junta las dos cantidades.','➕');
      add('Tenías 10 monedas y gastaste 4. ¿Cuántas quedan?', '6', ['14','5','40'], 'Gastar reduce la cantidad: 10 − 4 = 6.', 'Quita 4 de 10.','➖');
      add('¿Qué pregunta suele pedir una resta?', '¿Cuántos quedan?', ['¿Cuántos hay en total?','¿Cuántos juntamos?','¿Cuántos recibimos?'], '“Cuántos quedan” suele implicar quitar una cantidad.', 'Piensa si la cantidad aumenta o disminuye.','🧠');
    } else if (id === 'math-2-1') {
      add('¿Cuántas centenas tiene 684?', '6', ['8','4','68'], '684 tiene 6 centenas, 8 decenas y 4 unidades.', 'Mira la primera cifra de un número de tres dígitos.');
      add('500 + 70 + 2 = …', '572', ['527','752','507'], 'La descomposición forma 572.', 'Centenas + decenas + unidades.');
      add('¿Cuál es mayor?', '809', ['790','798','780'], '809 tiene 8 centenas y los otros 7.', 'Compara primero centenas.');
      add('¿Qué número está entre 399 y 401?', '400', ['398','410','391'], '400 está justo después de 399 y antes de 401.', 'Cuenta uno más desde 399.');
      add('Ordena de menor a mayor.', '205, 250, 502', ['502, 250, 205','250, 205, 502','205, 502, 250'], '205 < 250 < 502.', 'Compara centenas y luego decenas.');
    } else if (id === 'math-2-2') {
      for (const [a,b,op] of [[47,28,'+'],[63,27,'-'],[156,87,'+'],[204,79,'-'],[328,145,'+']]) {
        const ans = op === '+' ? a+b : a-b;
        add(`${a} ${op} ${b} = …`, String(ans), numericWrongs(ans,10), `El resultado correcto es ${ans}.`, op==='+'?'Suma primero las unidades.':'Resta por valor posicional.', op==='+'?'➕':'➖');
      }
    } else if (id === 'math-2-3') {
      for (const [a,b] of [[3,4],[5,2],[4,6],[2,8],[5,5]]) {
        const ans=a*b; add(`${a} grupos de ${b} tienen…`,String(ans),numericWrongs(ans, b),`${a} × ${b} = ${ans}.`,'Puedes sumar el mismo número varias veces.','✖️');
      }
    } else if (id === 'math-2-4') {
      for (const [total,groups] of [[12,3],[10,2],[15,5],[18,3],[20,4]]) {
        const ans=total/groups; add(`Reparte ${total} objetos en ${groups} grupos iguales. ¿Cuántos van en cada grupo?`,String(ans),numericWrongs(ans,2),`${total} ÷ ${groups} = ${ans}.`,'Haz grupos iguales hasta usar todos los objetos.','➗');
      }
    } else if (id === 'math-2-5') {
      add('Si son las 3:00 y pasa una hora, serán…','4:00',['3:30','2:00','5:30'],'Una hora después de las 3:00 son las 4:00.','Avanza una hora.','⏰');
      add('Dos monedas de $500 suman…','$1.000',['$500','$1.500','$100'],'500 + 500 = 1.000.','Junta el valor de ambas monedas.','💰');
      add('¿Qué unidad sirve para medir una puerta?','Centímetros o metros',['Litros','Kilogramos','Minutos'],'La altura es una longitud.','Piensa en qué tan alta es.','📏');
      add('¿Qué pesa más: 1 kg o 500 g?','1 kg',['500 g','Pesan igual','No se puede comparar'],'1 kg equivale a 1.000 g.','Convierte 1 kg a gramos.','⚖️');
      add('Media hora tiene…','30 minutos',['15 minutos','60 minutos','20 minutos'],'Una hora tiene 60 minutos; la mitad son 30.','Busca la mitad de 60.','⏰');
    } else if (id === 'math-2-6') {
      add('Un pictograma muestra 4 ⭐ y cada ⭐ vale 2 votos. ¿Cuántos votos hay?','8',['4','6','10'],'4 símbolos × 2 votos = 8.','Cada símbolo representa 2.','📊');
      add('¿Qué figura tiene 4 lados, dos largos y dos cortos?','Rectángulo',['Triángulo','Círculo','Pentágono'],'Un rectángulo tiene cuatro lados y ángulos rectos.','Piensa en la forma de una puerta.','📐');
      add('Hay 24 libros y llegan 10 más. ¿Cuántos hay?','34',['14','240','25'],'24 + 10 = 34.','“Llegan más” indica suma.','➕');
      add('Una tabla dice lunes 5, martes 8, miércoles 6. ¿Qué día tuvo más?','Martes',['Lunes','Miércoles','Todos igual'],'8 es el valor mayor.','Compara los tres números.','📊');
      add('¿Qué operación usarías si tienes 30 y gastas 12?','Resta',['Suma','Multiplicación','Ninguna'],'Gastar reduce una cantidad.','La cantidad final será menor.','🧠');
    } else if (id === 'math-3-1') {
      add('En 4.582, el 5 representa…','500',['5','50','5.000'],'El 5 está en la posición de centenas.','Ubica unidades, decenas, centenas y millares.');
      add('3.000 + 400 + 20 + 7 = …','3.427',['3.247','3.407','3.4270'],'La suma de valores posicionales forma 3.427.','Une millares, centenas, decenas y unidades.');
      add('¿Cuál es mayor?','7.105',['6.999','7.015','7.051'],'7.105 tiene 7 millares y 1 centena.','Compara cifra por cifra desde la izquierda.');
      add('Redondea 347 a la centena más cercana.','300',['400','350','340'],'47 es menor que 50, por eso queda más cerca de 300.','Mira las decenas.');
      add('El número anterior a 10.000 es…','9.999',['9.990','10.001','9.000'],'Uno menos que 10.000 es 9.999.','Resta 1.');
    } else if (id === 'math-3-2') {
      for (const [a,b] of [[7,6],[8,4],[9,5],[12,3],[23,4]]) {
        const ans=a*b; add(`${a} × ${b} = …`,String(ans),numericWrongs(ans,b),`${a} × ${b} = ${ans}.`,'Usa grupos iguales o descompón el número.','✖️');
      }
    } else if (id === 'math-3-3') {
      for (const [a,b] of [[24,4],[35,5],[42,6],[56,7],[63,9]]) {
        const ans=a/b; add(`${a} ÷ ${b} = …`,String(ans),numericWrongs(ans,2),`${a} repartido en ${b} grupos da ${ans} por grupo.`,'Busca qué número multiplicado por el divisor da el total.','➗');
      }
    } else if (id === 'math-3-4') {
      add('Una pizza tiene 8 porciones y comes 2. ¿Qué fracción comiste?','2/8',['8/2','6/8','2/6'],'El numerador cuenta las partes tomadas y el denominador todas las partes.','Partes comidas / partes totales.','🍕');
      add('¿Cuál representa la mitad?','1/2',['1/3','2/3','3/4'],'Una mitad es una de dos partes iguales.','Mitad significa dividir en 2.','🥧');
      add('¿Cuál es mayor?','3/4',['1/4','2/4','1/8'],'Con el mismo denominador, mayor numerador significa mayor fracción.','Compara cuántas partes de 4 se toman.','🥧');
      add('4/4 equivale a…','1 entero',['1/4','0','4 enteros'],'Tomar las 4 partes de 4 completa el entero.','Todas las partes forman el todo.','🥧');
      add('En 2/5, el 5 indica…','Las partes iguales del total',['Las partes tomadas','El resultado de sumar','Dos enteros'],'El denominador muestra en cuántas partes iguales se divide el todo.','Mira el número de abajo.','🥧');
    } else if (id === 'math-3-5') {
      add('Un rectángulo mide 5 cm por 3 cm. Su perímetro es…','16 cm',['8 cm','15 cm','10 cm'],'Perímetro = 5 + 3 + 5 + 3 = 16 cm.','Suma todos los lados.','📐');
      add('¿Cuántos minutos hay en 2 horas?','120',['60','90','200'],'Cada hora tiene 60 minutos: 2 × 60 = 120.','Dos grupos de 60.','⏰');
      add('¿Qué unidad usarías para medir una carretera?','Kilómetros',['Milímetros','Litros','Gramos'],'Las distancias largas suelen medirse en kilómetros.','Piensa en una distancia entre lugares.','📏');
      add('Un cuadrado tiene lado 4 cm. Su perímetro es…','16 cm',['8 cm','12 cm','20 cm'],'4 + 4 + 4 + 4 = 16 cm.','Tiene cuatro lados iguales.','📐');
      add('De 2:30 a 3:15 pasan…','45 minutos',['30','60','15'],'De 2:30 a 3:00 son 30 min y de 3:00 a 3:15 son 15 min.', 'Suma dos tramos de tiempo.','⏰');
    } else if (id === 'math-3-6') {
      add('Datos: 4, 7, 7, 9. ¿Qué número aparece más?','7',['4','9','Todos igual'],'7 aparece dos veces; los demás una.', 'Cuenta repeticiones.','📊');
      add('Una gráfica muestra 12 gatos y 8 perros. ¿Cuántos animales hay?','20',['4','96','12'],'12 + 8 = 20.', 'El total se obtiene sumando categorías.','📊');
      add('Tienes $50.000 y compras algo de $18.000. ¿Cuánto queda?','$32.000',['$68.000','$22.000','$38.000'],'50.000 − 18.000 = 32.000.','El dinero disminuye al comprar.','💰');
      add('Hay 6 cajas con 4 lápices cada una. ¿Cuántos lápices?','24',['10','20','28'],'6 × 4 = 24.','Son grupos iguales.','✖️');
      add('¿Qué dato ayuda a decidir cuál fruta prefieren más?','La cantidad de votos por fruta',['El color de la tabla','El tamaño del papel','El nombre del colegio'],'Para comparar preferencias necesitamos frecuencias o cantidades.','Busca el dato que permite comparar.','📊');
    } else if (id === 'math-4-1') {
      for (const [question,answer] of [['3.482 + 2.719',6201],['8.000 − 3.475',4525],['326 × 4',1304],['125 × 8',1000],['9.450 − 2.980',6470]]) add(`${question} = …`,String(answer),numericWrongs(answer,100),`El resultado es ${answer.toLocaleString('es-CO')}.`,'Trabaja por valor posicional y revisa el cálculo.','🧮');
    } else if (id === 'math-4-2') {
      for (const [a,b] of [[144,12],[156,6],[225,9],[384,8],[728,7]]) { const ans=a/b; add(`${a} ÷ ${b} = …`,String(ans),numericWrongs(ans,5),`${a} ÷ ${b} = ${ans}.`,'DIVIDO → MULTIPLICO → RESTO → BAJO → REPITO.','➗'); }
    } else if (id === 'math-4-3') {
      add('¿Cuál fracción equivale a 1/2?','2/4',['2/3','3/4','1/4'],'Multiplicar numerador y denominador por 2 da 2/4.','Haz el mismo cambio arriba y abajo.','🥧');
      add('3/6 simplificada es…','1/2',['1/3','2/3','3/3'],'Dividimos 3 y 6 entre 3: 1/2.','Busca un divisor común.','🥧');
      add('¿Cuál equivale a 2/3?','4/6',['3/6','4/5','2/6'],'2/3 × 2/2 = 4/6.','Multiplica ambos números por el mismo valor.','🥧');
      add('1/4 y 2/8 son…','Equivalentes',['Opuestas','Una suma','Incomparables'],'Ambas representan la misma parte del entero.','Simplifica 2/8.','🥧');
      add('Para crear una fracción equivalente debes…','Multiplicar o dividir numerador y denominador por el mismo número',['Sumar solo arriba','Cambiar solo abajo','Invertir siempre'],'La proporción se conserva si hacemos la misma operación en ambos.','Mismo cambio arriba y abajo.','🥧');
    } else if (id === 'math-4-4') {
      add('0,5 equivale a…','5 décimas',['5 centésimas','50 enteros','1 décima'],'La primera cifra después de la coma son décimas.','Mira la posición decimal.','🔟');
      add('¿Cuál es mayor?','0,8',['0,5','0,08','0,18'],'8 décimas es mayor que 5 décimas y 8 centésimas.','Compara primero las décimas.','🔟');
      add('2,35 + 1,20 = …','3,55',['3,45','2,55','4,55'],'Alineamos la coma y sumamos cada posición decimal.','Coma debajo de coma.','➕');
      add('4,0 − 1,75 = …','2,25',['3,25','2,75','1,25'],'4,00 − 1,75 = 2,25.','Escribe 4,00 para alinear.','➖');
      add('$3,50 + $2,25 = …','$5,75',['$5,25','$6,75','$1,25'],'3,50 + 2,25 = 5,75.','Suma unidades y centavos.','💰');
    } else if (id === 'math-4-5') {
      add('Rectángulo 8 cm × 3 cm. Área = …','24 cm²',['22 cm²','11 cm²','48 cm²'],'Área = largo × ancho = 8 × 3.', 'Multiplica las dos dimensiones.','📐');
      add('Cuadrado de lado 6 cm. Perímetro = …','24 cm',['36 cm','12 cm','18 cm'],'Perímetro = 4 × 6 = 24 cm.','Suma sus cuatro lados.','📐');
      add('¿Qué mide el área?','La superficie interior',['El borde solamente','El peso','El tiempo'],'El área indica cuánto espacio ocupa una superficie.','Piensa en cubrir el piso.','📐');
      add('Un ángulo recto mide…','90°',['45°','180°','360°'],'Un ángulo recto forma una esquina cuadrada: 90°.', 'Piensa en una esquina de un cuadrado.','📐');
      add('Triángulo con tres lados iguales se llama…','Equilátero',['Isósceles','Escaleno','Rectángulo'],'Equilátero significa tres lados iguales.','“Equi” recuerda igualdad.','📐');
    } else if (id === 'math-4-6') {
      add('Al lanzar una moneda, ¿qué resultados posibles hay?','Cara o sello',['Solo cara','1, 2, 3','Rojo o azul'],'Una moneda tiene dos resultados usuales.', 'Enumera todas las posibilidades.','🎲');
      add('Datos: 2, 3, 3, 5, 7. La moda es…','3',['2','5','7'],'La moda es el valor que más se repite.', 'Cuenta frecuencias.','📊');
      add('En una bolsa hay 9 bolas rojas y 1 azul. Es más probable sacar…','Roja',['Azul','Ambas igual','Ninguna'],'Hay muchas más rojas que azules.', 'Más casos favorables = mayor probabilidad.','🎲');
      add('Una gráfica sube de 10 a 15. El aumento fue…','5',['25','10','15'],'15 − 10 = 5.', 'Compara el valor final con el inicial.','📊');
      add('Para tomar una decisión con datos conviene…','Comparar la información relevante',['Elegir al azar siempre','Ignorar los números','Mirar solo el color'],'Los datos ayudan cuando los interpretamos y comparamos.','Pregunta qué dato responde la decisión.','📊');
    } else if (id === 'math-5-1') {
      add('Una tienda vende 24 cajas con 18 cuadernos cada una. ¿Cuántos cuadernos?','432',['42','288','442'],'24 × 18 = 432.','Identifica grupos iguales.','🧮');
      add('Tienes 900, gastas 275 y luego recibes 120. ¿Con cuánto terminas?','745',['505','1.295','625'],'900 − 275 + 120 = 745.','Resuelve en el orden de la historia.','🧠');
      add('48 estudiantes van en buses de 12. ¿Cuántos buses completos?','4',['3','5','576'],'48 ÷ 12 = 4.','Busca cuántos grupos de 12 caben.','➗');
      add('3 × (20 + 5) = …','75',['65','60','28'],'Primero 20 + 5 = 25 y luego 3 × 25 = 75.','Resuelve primero el paréntesis.','🧮');
      add('¿Qué conviene hacer primero en un problema multietapa?','Identificar datos, pregunta y operaciones',['Multiplicar todo','Elegir la respuesta más grande','Ignorar unidades'],'Planear evita usar operaciones sin sentido.','Pregunta qué se sabe y qué se busca.','🧠');
    } else if (id === 'math-5-2') {
      add('1/4 + 2/4 = …','3/4',['3/8','2/8','1/2'],'Con igual denominador sumamos numeradores.', 'El denominador se conserva.','🥧');
      add('3/5 − 1/5 = …','2/5',['2/10','4/5','3/4'],'Con igual denominador restamos numeradores.','El 5 se mantiene.','🥧');
      add('1/2 + 1/4 = …','3/4',['2/6','1/6','2/4'],'1/2 = 2/4; entonces 2/4 + 1/4 = 3/4.','Busca denominador común.','🥧');
      add('2/3 de 12 es…','8',['6','4','18'],'12 ÷ 3 = 4 y 4 × 2 = 8.','Divide por el denominador y multiplica por el numerador.','🥧');
      add('¿Cuál es una fracción impropia?','7/4',['3/4','1/2','2/5'],'En una impropia el numerador es mayor que el denominador.','Compara arriba y abajo.','🥧');
    } else if (id === 'math-5-3') {
      add('25% de 100 es…','25',['75','4','250'],'25% significa 25 de cada 100.','Porcentaje = de cada 100.','💯');
      add('0,75 equivale a…','75%',['7,5%','0,75%','750%'],'0,75 × 100 = 75%.','Mueve dos lugares al convertir a porcentaje.','💯');
      add('Un producto de $40.000 tiene 10% de descuento. El descuento es…','$4.000',['$400','$36.000','$10.000'],'10% de 40.000 = 4.000.','10% es la décima parte.','💰');
      add('$12,50 + $8,75 = …','$21,25',['$20,25','$21,75','$4,25'],'12,50 + 8,75 = 21,25.','Alinea los decimales.','💰');
      add('50% equivale a…','1/2',['1/4','3/4','1/5'],'50 de 100 es la mitad.','Piensa en 50/100 y simplifica.','💯');
    } else if (id === 'math-5-4') {
      add('¿Cuál es divisible entre 3?','123',['124','125','127'],'1 + 2 + 3 = 6 y 6 es divisible entre 3.','Suma sus cifras.','🔢');
      add('¿Cuál es primo?','13',['12','15','21'],'13 solo tiene divisores 1 y 13.','Un primo tiene exactamente dos divisores positivos.','🔢');
      add('MCD de 12 y 18 = …','6',['2','3','12'],'6 es el mayor número que divide a ambos.','Lista divisores comunes.','🔢');
      add('¿Cuál es múltiplo de 8?','56',['54','58','62'],'8 × 7 = 56.','Piensa en la tabla del 8.','✖️');
      add('Un número termina en 0. Seguro es divisible entre…','10',['3','7','9'],'Todos los múltiplos de 10 terminan en 0.','Observa la última cifra.','🔢');
    } else if (id === 'math-5-5') {
      add('Prisma rectangular 4 × 3 × 2. Volumen = …','24 u³',['18 u³','9 u³','12 u³'],'Volumen = largo × ancho × alto.','Multiplica las tres dimensiones.','📦');
      add('Rectángulo 10 × 4. Área = …','40 u²',['28 u²','14 u²','80 u²'],'Área = 10 × 4 = 40.','Multiplica largo por ancho.','📐');
      add('¿Qué unidad corresponde al volumen?','cm³',['cm','cm²','kg'],'El volumen usa unidades cúbicas.','Tiene tres dimensiones.','📦');
      add('Un cubo tiene…','6 caras cuadradas',['4 caras','8 caras triangulares','2 caras'],'Un cubo está formado por seis cuadrados.','Piensa en un dado.','📦');
      add('Perímetro de un cuadrado de lado 9 = …','36',['81','18','27'],'4 × 9 = 36.','Suma los cuatro lados.','📐');
    } else if (id === 'math-5-6') {
      add('Datos: 2, 4, 4, 5, 10. La media es…','5',['4','10','25'],'La suma es 25 y 25 ÷ 5 = 5.','Suma todos y divide por la cantidad de datos.','📊');
      add('Datos ordenados 1, 3, 7, 8, 12. La mediana es…','7',['3','8','12'],'La mediana es el valor central.','Busca el dato de la mitad.','📊');
      add('La moda de 4, 4, 4, 6, 7 es…','4',['6','7','5'],'4 es el valor que más se repite.','Cuenta apariciones.','📊');
      add('Para comparar dos grupos de tamaños distintos conviene mirar…','Proporciones o medidas comparables',['Solo el número mayor','El color de la gráfica','El primer dato'],'Una comparación justa usa medidas que tengan sentido en ambos grupos.','Pregunta si los tamaños son equivalentes.','📊');
      add('Una encuesta a 5 amigos representa mejor…','A esos 5 amigos',['A toda Colombia','A todos los niños del mundo','A toda la ciudad necesariamente'],'Una muestra pequeña no permite generalizar a poblaciones enormes.','Piensa a quiénes se preguntó realmente.','📊');
    }

    return q;
  }

  function languageExercisePack(grade, topic) {
    const q=[]; const t=topic.title.toLowerCase();
    const add=(question,answer,wrong,explanation,hint,emoji='📖')=>q.push(gameChoice(question,answer,wrong,explanation,hint,emoji));
    if (/letras|sonidos/.test(t)) {
      add('¿Con qué sonido empieza “mesa”?','M',['S','A','P'],'“Mesa” empieza con el sonido /m/.','Pronuncia lentamente: mmmesa.','🔤');
      add('¿Cuál palabra empieza igual que “sol”?','Sapo',['Mesa','Luna','Pato'],'Sol y sapo empiezan con S.','Escucha el primer sonido.','🔤');
      add('¿Cuántas sílabas tiene “casa”?','2',['1','3','4'],'Ca-sa tiene dos golpes de voz.','Da una palmada por cada parte.','👏');
      add('Completa: _ato para formar “gato”.','G',['M','S','L'],'La letra G completa la palabra gato.','Di la palabra y escucha el inicio.','🔤');
      add('¿Cuál es una palabra?','Luna',['LN','123','...'],'“Luna” tiene letras ordenadas que expresan una idea.','Busca algo que puedas leer y entender.','🔤');
    } else if (/oraciones cortas|fluidez/.test(t)) {
      add('Lee: “Sara riega la planta.” ¿Quién riega?','Sara',['La planta','Nadie','El agua'],'La oración dice que Sara realiza la acción.','Busca quién hace la acción.');
      add('“El perro corre rápido.” ¿Qué hace el perro?','Corre',['Duerme','Come','Lee'],'El verbo de la oración es “corre”.','Busca la acción.');
      add('¿Dónde conviene hacer una pausa?','Al encontrar un punto',['En cada letra','Nunca','En mitad de una palabra'],'Los signos ayudan a leer con sentido.','Mira la puntuación.');
      add('“Mamá cocina sopa.” ¿Qué cocina?','Sopa',['Mamá','Casa','Mesa'],'La respuesta aparece explícitamente en la oración.','Busca qué recibe la acción.');
      add('Leer con sentido significa…','Entender lo que dice el texto',['Leer lo más rápido posible','Saltarse palabras','Memorizar letras sueltas'],'La fluidez sirve para comprender, no solo para correr.','Pregúntate qué entendiste.');
    } else if (/idea principal|resumen|idea central/.test(t)) {
      const text='Las abejas visitan flores para recoger néctar. Al moverse entre flores también transportan polen y ayudan a muchas plantas a reproducirse.';
      add(`${text} ¿Cuál es la idea principal?`,'Las abejas ayudan a las plantas mientras buscan néctar',['Todas las flores son amarillas','El polen es una bebida','Las abejas viven en el agua'],'La idea principal reúne lo más importante de todo el texto.','Busca una opción que abarque las dos oraciones.','📝');
      add('Un buen resumen debe…','Conservar las ideas más importantes',['Copiar cada palabra','Agregar datos inventados','Ser más largo que el texto'],'Resumir es reducir sin perder lo esencial.','Pregunta: ¿qué no puede faltar?','📝');
      add('¿Qué detalle NO sería esencial en un resumen sobre cómo sembrar una planta?','El color de la camiseta de quien siembra',['Preparar la tierra','Sembrar la semilla','Regar con cuidado'],'Un resumen elimina detalles que no cambian la explicación.','Busca el dato que no afecta el proceso.','📝');
      add('La idea central de un párrafo es…','Lo que principalmente quiere comunicar',['La palabra más larga','La primera letra','Un dato cualquiera'],'La idea central organiza los detalles.','Pregunta: ¿de qué trata principalmente?','📝');
      add('Si dos frases repiten la misma idea, al resumir conviene…','Unirlas en una sola idea clara',['Copiarlas dos veces','Borrarlas todas','Cambiar el tema'],'Un resumen evita repeticiones innecesarias.','Reduce sin perder significado.','📝');
    } else if (/ordenar una historia|secuencias|párrafos y secuencias/.test(t)) {
      add('Primero Ana sembró una semilla. Luego la regó. Finalmente…','La planta empezó a crecer',['Volvió atrás en el tiempo','Compró la semilla antes de sembrarla','La semilla se convirtió en lápiz'],'Una secuencia mantiene un orden lógico de acciones.','Piensa qué puede pasar después.','🧩');
      add('¿Qué palabra suele indicar el inicio?','Primero',['Finalmente','Después','Por último'],'“Primero” marca el comienzo de una secuencia.','Busca la palabra de inicio.','🧩');
      add('¿Qué conector indica que algo ocurre al final?','Finalmente',['Mientras','Porque','Antes'],'“Finalmente” cierra la secuencia.','Piensa en el último paso.','🧩');
      add('En un párrafo, las oraciones deben…','Relacionarse con una misma idea',['Hablar de temas sin relación','Estar siempre en desorden','No usar puntos'],'La unidad del párrafo ayuda a comprenderlo.','Busca una idea que las conecte.','🧩');
      add('Orden lógico: despertar → vestirse → …','Ir al colegio',['Dormirse de nuevo siempre','Almorzar ayer','Nacer'],'Las acciones siguen una secuencia cotidiana.','Piensa qué suele ocurrir después.','🧩');
    } else if (/sustantivos|gramática|oraciones y conectores|gramática y estilo/.test(t)) {
      add('En “La niña canta”, ¿cuál es el verbo?','canta',['niña','la','ninguna'],'El verbo expresa la acción: canta.','Busca qué hace alguien.','✍️');
      add('¿Cuál es un sustantivo?','montaña',['rápido','correr','azulmente'],'Un sustantivo nombra seres, objetos, lugares o ideas.','Busca una palabra que nombre algo.','✍️');
      add('En “perro grande”, “grande” es…','Adjetivo',['Verbo','Sustantivo','Artículo'],'Un adjetivo describe al sustantivo.','Pregunta: ¿cómo es el perro?','✍️');
      add('Completa: “Estudié, ___ quería aprender.”','porque',['pero','aunque','sin'],'“Porque” introduce una causa o razón.','Busca un conector de causa.','🔗');
      add('¿Cuál oración es más clara?','Laura terminó la tarea y después la revisó.',['Laura tarea después terminó la revisó.','Terminó Laura y tarea después.','La tarea Laura revisar terminada.'],'El orden y los conectores ayudan a expresar ideas con claridad.','Busca sujeto, acción y secuencia.','✍️');
    } else if (/narrar|tipos de texto|narrativos e informativos|planear y escribir|escribir oraciones|escribir textos cortos/.test(t)) {
      add('¿Qué texto cuenta personajes y acontecimientos?','Narrativo',['Lista de compras','Tabla numérica','Etiqueta de precio'],'Un texto narrativo relata hechos o historias.','Busca una historia.','📚');
      add('¿Qué texto busca explicar datos sobre los volcanes?','Informativo',['Narrativo ficticio necesariamente','Poema de amor necesariamente','Diálogo sin tema'],'Un texto informativo presenta información sobre un tema.','Pregunta si quiere contar una historia o informar.','📚');
      add('Antes de escribir un texto conviene…','Definir propósito e ideas principales',['Escribir al azar','Evitar releer','Cambiar de tema cada línea'],'Planear ayuda a organizar las ideas.','Pregunta: ¿para qué y para quién escribo?','📝');
      add('Una narración suele tener…','Inicio, desarrollo y cierre',['Solo título','Solo números','Palabras sin relación'],'La estructura ayuda a seguir los acontecimientos.','Piensa en cómo empieza y termina una historia.','📚');
      add('Para describir un lugar conviene usar…','Detalles y adjetivos pertinentes',['Solo operaciones matemáticas','Palabras al azar','Ningún detalle'],'Describir es mostrar cómo es algo mediante palabras.','Piensa en color, tamaño, forma o ambiente.','✍️');
    } else if (/ortografía|puntuación|revisión/.test(t)) {
      add('¿Cuál oración está bien escrita?','Marta vive en Bogotá.',['marta vive en bogotá','Marta vive en bogotá','marta vive en Bogotá'],'Los nombres propios empiezan con mayúscula y la oración cierra con punto.','Revisa inicio, nombres propios y final.','✏️');
      add('¿Qué signo usamos al terminar una pregunta?','?',['.','!',','],'Las preguntas cierran con signo de interrogación.','Piensa en ¿...?.','✏️');
      add('¿Cuál palabra está separada correctamente?','la casa',['lacasa','l acasa','la-casa siempre'],'Las palabras se separan con espacios.','Identifica dos palabras diferentes.','✏️');
      add('Revisar un texto sirve para…','Encontrar y mejorar errores o ideas poco claras',['Hacerlo más confuso','Borrar todo','Evitar leerlo'],'La revisión mejora claridad y corrección.','Lee como si fueras otra persona.','✏️');
      add('La coma puede ayudar a…','Separar elementos de una enumeración',['Terminar todas las preguntas','Reemplazar todas las letras','Unir palabras sin espacio'],'Ejemplo: pan, leche, fruta y arroz.','Piensa en una lista.','✏️');
    } else if (/comprender cuentos|inferenc|lectura crítica|relacionar información|reading/.test(t)) {
      const text='Tomás salió con paraguas aunque todavía no llovía. El cielo estaba muy oscuro y soplaba viento.';
      add(`${text} ¿Qué podemos inferir?`,'Tomás cree que puede llover',['Tomás va a nadar','Es medianoche seguro','El paraguas está roto'],'La inferencia combina pistas del texto con conocimiento previo.','Observa cielo oscuro + paraguas.','🔎');
      add('Una inferencia es…','Una conclusión basada en pistas',['Copiar una frase exacta','Inventar sin evidencia','Contar letras'],'Inferir es leer entre líneas usando evidencia.','Busca pistas, no adivinanzas.','🔎');
      add('Para lectura crítica conviene preguntar…','¿Qué afirma y qué evidencia presenta?',['¿Cuántas letras tiene? solamente','¿Me gusta el color?','¿Puedo ignorar la fuente?'],'Leer críticamente implica evaluar afirmaciones y soporte.','Distingue opinión, dato y evidencia.','🔎');
      add('Dos textos sobre el mismo tema pueden…','Aportar información diferente o perspectivas distintas',['Ser siempre idénticos','No poder compararse','Tener exactamente las mismas palabras'],'Relacionar fuentes amplía la comprensión.','Compara qué aporta cada uno.','🔎');
      add('Si un texto afirma algo sorprendente, lo mejor es…','Buscar evidencia y una fuente confiable',['Creerlo de inmediato','Compartirlo sin leer','Cambiar las palabras'],'La lectura crítica verifica antes de aceptar o difundir.','Pregunta de dónde sale la información.','🔎');
    } else if (/hablar|explicar|argumentar|opinión|evidencia|medios/.test(t)) {
      add('Una opinión bien sustentada incluye…','Una razón relacionada con la idea',['Solo “porque sí”','Un insulto','Un dato sin relación'],'Las razones permiten explicar por qué pensamos algo.','Usa “porque” y una razón pertinente.','💬');
      add('¿Cuál es una forma respetuosa de disentir?','“Entiendo tu idea, pero pienso distinto porque…”',['“Cállate”','“Eso es tonto”','Irse sin escuchar siempre'],'Argumentar también implica escuchar y responder con respeto.','Separa la persona de la idea.','💬');
      add('La evidencia sirve para…','Apoyar una afirmación',['Decorar el texto','Evitar explicar','Cambiar de tema'],'Una afirmación es más sólida cuando tiene datos, ejemplos o fuentes.','Pregunta: ¿cómo lo sé?','🔎');
      add('Antes de compartir una noticia conviene…','Revisar fuente, fecha y evidencia',['Compartir solo por el título','Ignorar quién la publicó','Cambiar el contenido'],'Verificar reduce la desinformación.','No te quedes solo con el titular.','📰');
      add('Escuchar bien significa…','Prestar atención y responder a lo que la otra persona dijo',['Interrumpir siempre','Pensar solo en responder','Ignorar preguntas'],'La conversación necesita turnos y comprensión.','Resume lo que entendiste antes de responder.','👂');
    }
    return q;
  }

  function scienceExercisePack(grade, topic) {
    const q=[]; const t=topic.title.toLowerCase();
    const add=(question,answer,wrong,explanation,hint,emoji='🔬')=>q.push(gameChoice(question,answer,wrong,explanation,hint,emoji));
    if (/cuerpo|sentidos/.test(t)) {
      add('¿Qué sentido usamos principalmente para escuchar?','Oído',['Vista','Olfato','Gusto'],'El oído detecta sonidos.','Piensa en tus orejas.','👂');
      add('¿Qué órgano usamos principalmente para ver?','Ojos',['Nariz','Lengua','Manos'],'Los ojos reciben información visual.','Está en tu cara y detecta luz.','👀');
      add('Una función del esqueleto es…','Dar soporte y proteger órganos',['Producir luz','Digestionar todo','Bombear aire'],'Los huesos sostienen el cuerpo y protegen estructuras.','Piensa en el cráneo y las costillas.','🦴');
      add('Para cuidar el cuerpo conviene…','Dormir, alimentarse y moverse adecuadamente',['No beber agua','Dormir muy poco','Evitar higiene'],'Los hábitos saludables ayudan a los sistemas del cuerpo.','Piensa en necesidades básicas.','❤️');
      add('Los sentidos nos ayudan a…','Obtener información del entorno',['Cambiar el clima','Crear planetas','Detener el tiempo'],'Los sentidos captan estímulos del ambiente.','Ver, oír, tocar, oler y saborear.','🧠');
    } else if (/seres vivos|plantas|animales|ciclos de vida|hábitat|ecosistemas|cadenas alimentarias/.test(t)) {
      add('¿Cuál es un ser vivo?','Un árbol',['Una piedra','Una cuchara','Una nube de plástico'],'Los seres vivos nacen, crecen, realizan funciones y cambian.','Busca algo que crece y necesita recursos.','🌱');
      add('Un hábitat es…','El lugar donde vive un organismo',['Una operación matemática','Una parte del reloj','Un color'],'El hábitat ofrece condiciones y recursos para vivir.','Piensa en “hogar natural”.','🏞️');
      add('En una cadena alimentaria, las plantas suelen ser…','Productores',['Consumidores superiores','Objetos inertes','Depredadores siempre'],'Las plantas producen su alimento mediante fotosíntesis.','Empieza por quién capta energía solar.','🌿');
      add('Si desaparece una especie de un ecosistema…','Puede afectar a otras especies',['Nunca cambia nada','Todas se vuelven plantas','El agua desaparece automáticamente'],'Los organismos están conectados por relaciones ecológicas.','Piensa en cadenas y redes alimentarias.','🕸️');
      add('¿Qué necesitan los seres vivos?','Recursos como agua, energía y condiciones adecuadas',['Solo juguetes','Solo metal','Nada del ambiente'],'Las necesidades varían, pero todos dependen del ambiente.','Piensa en agua, alimento, luz o refugio.','🌎');
    } else if (/material|sólidos|líquidos|materia|mezclas/.test(t)) {
      add('¿Cuál conserva forma propia normalmente?','Un sólido',['Un líquido','Un gas','El sonido'],'Los sólidos mantienen forma y volumen en condiciones comunes.','Piensa en una piedra.','🧊');
      add('Un líquido…','Toma la forma del recipiente',['Siempre tiene forma fija','No ocupa espacio','Es siempre invisible'],'Los líquidos conservan volumen pero cambian de forma.','Piensa en agua dentro de distintos vasos.','💧');
      add('Derretir hielo es un cambio de…','Estado físico',['Especie viva','Planeta','Idioma'],'El agua pasa de sólido a líquido.','La sustancia sigue siendo agua.','🧪');
      add('Arena mezclada con piedras puede separarse por…','Tamaño, usando un tamiz',['Evaporar metal','Apagar la luz','Imantar siempre'],'El tamizado separa partículas de tamaños distintos.','Piensa en una rejilla.','🧪');
      add('Una mezcla es…','La combinación de dos o más sustancias',['Un único átomo siempre','Un ser vivo','Una unidad de tiempo'],'En una mezcla se juntan materiales sin necesariamente formar una sustancia nueva.','Piensa en agua con sal o ensalada.','🧪');
    } else if (/luz|sonido|movimiento|fuerza|energía|electricidad|máquinas/.test(t)) {
      add('¿Qué puede cambiar el movimiento de un objeto?','Una fuerza',['Un color','Una palabra','Una fecha'],'Empujar o halar puede acelerar, frenar o cambiar dirección.','Piensa en empujar una pelota.','⚡');
      add('El sonido se produce por…','Vibraciones',['Sombras','Colores','Números'],'Una fuente que vibra puede producir ondas sonoras.','Toca tu garganta al hablar.','🔊');
      add('Para que un bombillo en un circuito simple encienda debe haber…','Un camino cerrado para la corriente',['Un cable cortado','Solo plástico','Ninguna fuente de energía'],'La corriente necesita un circuito cerrado.','Piensa en una ruta completa.','💡');
      add('Una máquina simple ayuda a…','Realizar trabajo cambiando la fuerza o su dirección',['Crear energía de la nada','Detener el tiempo','Cambiar materia en vida'],'Palancas y poleas facilitan ciertas tareas.','Piensa en levantar o mover objetos.','⚙️');
      add('La energía puede…','Transformarse de una forma a otra',['Desaparecer siempre sin efecto','Ser solo electricidad','Existir solo en baterías'],'En sistemas cotidianos la energía cambia de forma.','Bombillo: eléctrica → luz y calor.','⚡');
    } else if (/día|noche|clima|tiempo atmosférico|tierra|solar|universo|atmósfera|agua/.test(t)) {
      add('El día y la noche ocurren principalmente por…','La rotación de la Tierra',['La lluvia','La Luna apagándose','Las nubes'],'La Tierra gira sobre su eje.','Piensa en qué parte queda frente al Sol.','🌍');
      add('El tiempo atmosférico describe…','Condiciones como lluvia, viento y temperatura en un momento y lugar',['La edad de una persona','El tamaño de un libro','Una operación'],'El tiempo cambia y se observa diariamente.','Mira el cielo y la temperatura de hoy.','🌦️');
      add('La Tierra tarda aproximadamente un año en…','Dar una vuelta alrededor del Sol',['Girar una vez sobre su eje','Cambiar de planeta','Dar una vuelta a la Luna'],'La traslación alrededor del Sol define el año.','Rotación ≈ día; traslación ≈ año.','☀️');
      add('La atmósfera es…','La capa de gases que rodea la Tierra',['El núcleo de metal','Todo el océano','Una montaña'],'La atmósfera contiene aire y participa en el clima.','Está alrededor del planeta.','🌎');
      add('El agua puede encontrarse en la naturaleza como…','Sólido, líquido y gas',['Solo líquido','Solo sólido','Solo gas'],'El ciclo del agua muestra cambios entre estados.','Hielo, agua y vapor.','💧');
    } else if (/células|sistemas del cuerpo|organización/.test(t)) {
      add('La célula es…','Una unidad básica de los seres vivos',['Un planeta','Una roca siempre','Una unidad de dinero'],'Los organismos están formados por una o más células.','Piensa en la unidad más pequeña con funciones vitales.','🧬');
      add('Un tejido está formado por…','Células organizadas con funciones relacionadas',['Planetas','Solo huesos','Ecosistemas'],'Las células se organizan en tejidos, órganos y sistemas.','Célula → tejido → órgano.','🧬');
      add('El sistema circulatorio ayuda a…','Transportar sustancias por el cuerpo',['Producir luz','Escuchar sonidos','Masticar exclusivamente'],'La sangre transporta oxígeno, nutrientes y otras sustancias.','Piensa en corazón y vasos sanguíneos.','❤️');
      add('Los órganos trabajan…','Coordinados dentro de sistemas',['Siempre aislados','Solo de noche','Sin células'],'Un sistema reúne órganos que colaboran en funciones.','Piensa en el sistema digestivo.','🫀');
      add('El intercambio de oxígeno ocurre principalmente en…','El sistema respiratorio',['El sistema solar','La piel únicamente','Los huesos'],'Los pulmones participan en el intercambio de gases.','Piensa en respirar.','🫁');
    } else if (/investigar|diseñar una investigación|método científico|evidencia/.test(t)) {
      add('Una hipótesis es…','Una explicación o predicción que puede ponerse a prueba',['Un resultado inventado','Una verdad que no se revisa','Una lista de compras'],'La hipótesis guía una investigación y debe contrastarse con evidencia.','Debe poder probarse.','🔎');
      add('¿Qué conviene cambiar en un experimento justo?','La variable que quieres investigar, manteniendo otras condiciones controladas',['Todo al mismo tiempo','Los resultados después','Nada nunca'],'Controlar variables permite interpretar mejor el efecto observado.','Cambia una cosa principal a la vez.','🧪');
      add('Los datos sirven para…','Analizar qué ocurrió y evaluar la hipótesis',['Decorar el informe','Elegir cualquier conclusión','Ocultar resultados'],'La evidencia conecta observaciones con conclusiones.','Pregunta qué muestran las mediciones.','📊');
      add('Si los datos contradicen tu idea inicial debes…','Revisar la explicación a la luz de la evidencia',['Cambiar los datos','Ignorarlos','Afirmar lo mismo sin revisar'],'La ciencia ajusta explicaciones cuando aparece nueva evidencia.','Los datos mandan sobre la preferencia personal.','🔬');
      add('Una conclusión científica debe…','Relacionarse con la pregunta y los datos obtenidos',['Agregar resultados no observados','Cambiar el experimento retroactivamente','Ser una opinión sin soporte'],'La conclusión responde usando la evidencia disponible.','Vuelve a la pregunta inicial.','🔎');
    } else if (/cuidar|equilibrio/.test(t)) {
      add('¿Qué acción ayuda a cuidar el agua?','Cerrar la llave cuando no se usa',['Dejarla abierta','Botar aceite al desagüe','Ensuciar ríos'],'Usar solo el agua necesaria reduce desperdicio.','Piensa en ahorrar y no contaminar.','💧');
      add('La biodiversidad es importante porque…','Los seres vivos cumplen funciones y mantienen relaciones en los ecosistemas',['Todos los seres vivos son iguales','Solo importan los animales grandes','No afecta a las personas'],'La diversidad contribuye al funcionamiento y resiliencia de ecosistemas.','Piensa en muchas especies conectadas.','🌿');
      add('Una decisión ambiental responsable considera…','Sus efectos sobre recursos y seres vivos',['Solo comodidad inmediata','Ignorar residuos','Usar más de lo necesario'],'Cuidar el entorno implica pensar en consecuencias.','Pregunta qué pasa después.','🌎');
      add('Reciclar funciona mejor después de…','Reducir y reutilizar cuando sea posible',['Comprar más basura','Mezclar todos los residuos siempre','Botar todo'],'La jerarquía prioriza evitar residuos antes de procesarlos.','Reducir → reutilizar → reciclar.','♻️');
      add('Un ecosistema equilibrado depende de…','Relaciones entre organismos y condiciones del ambiente',['Una sola especie','Cero cambios','Solo lluvia'],'Los ecosistemas son redes de componentes vivos y no vivos.','Piensa en una red, no en un elemento aislado.','🌱');
    }
    return q;
  }

  function socialExercisePack(grade, topic) {
    const q=[]; const t=topic.title.toLowerCase();
    const add=(question,answer,wrong,explanation,hint,emoji='🌎')=>q.push(gameChoice(question,answer,wrong,explanation,hint,emoji));
    if (/familia|colegio|comunidad|barrio/.test(t)) {
      add('Una comunidad está formada por…','Personas que comparten un entorno y relaciones',['Solo edificios','Solo carreteras','Una sola persona siempre'],'Una comunidad incluye personas, lugares, actividades y vínculos.','Piensa en quienes viven y participan cerca.','🏘️');
      add('¿Qué ayuda a convivir en el colegio?','Respetar acuerdos y responsabilidades',['Ignorar a todos','Dañar espacios comunes','Interrumpir siempre'],'Las normas y responsabilidades protegen la convivencia.','Piensa en lo que permite aprender juntos.','🏫');
      add('Un espacio público del barrio puede ser…','Un parque',['Un cajón privado','Una almohada','Un cuaderno personal'],'Los espacios públicos son compartidos por la comunidad.','Piensa en lugares de uso común.','🏘️');
      add('Cuidar a alguien significa…','Atender sus necesidades y respetar su bienestar',['Decidir todo por él','Ignorar sus necesidades','Burlarse'],'El cuidado implica responsabilidad y respeto.','Piensa en acciones que protegen.','🤝');
      add('Participar en la comunidad puede ser…','Colaborar en una actividad para mejorar un espacio común',['Romper señales','Botar basura','Evitar todos los acuerdos'],'Participar es aportar a asuntos que afectan a todos.','Busca una acción colectiva.','🤝');
    } else if (/normas|derechos|responsabilidades|democracia|constitución/.test(t)) {
      add('Un derecho es…','Una garantía que protege la dignidad y el bienestar de las personas',['Un premio opcional siempre','Una orden sin límite','Una preferencia de una sola persona'],'Los derechos reconocen protecciones fundamentales.','Piensa en algo que debe ser respetado.','⚖️');
      add('Una responsabilidad es…','Un deber o compromiso relacionado con nuestras acciones',['Hacer siempre lo que quiero','Ignorar consecuencias','Un color'],'Los derechos conviven con responsabilidades.','Piensa en lo que te corresponde cumplir.','🤝');
      add('La democracia busca que las personas puedan…','Participar en decisiones colectivas mediante reglas y derechos',['Obedecer a una sola persona sin límites','Evitar todas las opiniones','Eliminar acuerdos'],'La participación y las reglas comunes son centrales en democracia.','Piensa en elegir, deliberar y respetar normas.','🗳️');
      add('Una regla justa debería…','Aplicarse de manera razonable y proteger la convivencia',['Favorecer siempre al más fuerte','Cambiar sin explicación cada minuto','Humillar a alguien'],'Las normas deben servir al bienestar común y respetar derechos.','Pregunta para qué existe la regla.','⚖️');
      add('Si dos estudiantes no están de acuerdo, una opción democrática es…','Escucharse, proponer soluciones y llegar a acuerdos',['Golpearse','Imponer por miedo','No dejar hablar al otro'],'Resolver diferencias requiere participación y respeto.','Busca diálogo y acuerdos.','🤝');
    } else if (/mapas|territorio|regiones|paisajes|campo y ciudad|municipio|departamento/.test(t)) {
      add('Un mapa sirve para…','Representar un territorio y ubicar lugares',['Medir el peso','Cocinar','Escuchar música'],'Los mapas representan espacios mediante símbolos y convenciones.','Piensa en ubicación.','🗺️');
      add('La leyenda de un mapa explica…','Qué significan sus símbolos y colores',['La edad del lector','El clima de todo el planeta siempre','El precio del papel'],'La leyenda permite interpretar la representación.','Busca el “diccionario” del mapa.','🗺️');
      add('El relieve incluye…','Montañas, valles, llanuras y otras formas del terreno',['Solo edificios','Solo fronteras políticas','Solo nombres'],'El relieve describe formas de la superficie terrestre.','Piensa en alturas y formas del terreno.','⛰️');
      add('Un municipio es…','Una entidad territorial local con población y administración',['Un continente','Un océano','Una familia'],'Los municipios organizan parte del territorio y gobierno local.','Piensa en alcaldía y territorio local.','🏛️');
      add('Campo y ciudad se relacionan porque…','Intercambian productos, servicios, trabajo y población',['Nunca tienen contacto','Son exactamente iguales','Uno no necesita del otro'],'Los territorios están conectados por flujos y actividades.','Piensa en alimentos, servicios y transporte.','🚚');
    } else if (/antes|cambios en el tiempo|pasado|históric|independencia|republicana/.test(t)) {
      add('Una fuente histórica puede ser…','Una carta, fotografía, objeto o testimonio del pasado',['Solo una predicción futura','Una respuesta inventada','Un número sin contexto'],'Las fuentes aportan evidencia para estudiar el pasado.','Piensa en rastros o testimonios.','🕰️');
      add('Ordenar acontecimientos por fecha ayuda a construir…','Una cronología',['Un mapa físico','Una receta','Una ecuación'],'La cronología organiza hechos en el tiempo.','Antes → durante → después.','🕰️');
      add('Estudiar historia implica…','Interpretar cambios, continuidades, causas y consecuencias',['Memorizar fechas sin contexto solamente','Inventar hechos','Ignorar fuentes'],'La historia busca comprender procesos humanos en el tiempo.','Pregunta qué cambió y por qué.','📜');
      add('La Independencia de Colombia fue…','Un proceso histórico con cambios políticos y conflictos',['Un solo evento sin antecedentes','Una fiesta deportiva','Un fenómeno natural'],'Los procesos históricos tienen actores, causas y consecuencias.','No la pienses como un instante aislado.','🏛️');
      add('Una consecuencia es…','Algo que ocurre como resultado de hechos o decisiones anteriores',['Lo mismo que una causa','Un dato sin relación','Algo que siempre pasa antes'],'Causa y consecuencia ayudan a explicar procesos.','Pregunta: ¿qué ocurrió después por esto?','🧠');
    } else if (/diversidad|cultura|tradiciones|paz|conflictos|convivencia/.test(t)) {
      add('La diversidad cultural significa…','Que existen distintas costumbres, saberes, identidades y formas de vida',['Que todos deben ser iguales','Que una cultura vale más','Que nadie puede compartir tradiciones'],'La diversidad reconoce diferencias y riqueza cultural.','Piensa en distintas maneras de vivir y expresarse.','🌈');
      add('Una forma pacífica de resolver un conflicto es…','Dialogar y buscar acuerdos',['Amenazar','Golpear','Difundir rumores'],'El diálogo permite expresar necesidades y construir soluciones.','Busca una solución sin violencia.','🤝');
      add('Un prejuicio es…','Una idea previa sobre alguien sin conocer suficiente evidencia',['Una medida exacta','Una ley científica','Un mapa'],'Los prejuicios pueden producir trato injusto.','Pregunta si se está juzgando sin conocer.','🧠');
      add('Respetar diferencias implica…','Reconocer derechos y dignidad aunque no pensemos igual',['Obligar a todos a pensar igual','Excluir','Burlarse'],'La convivencia democrática admite diferencias.','Se puede discrepar con respeto.','🤝');
      add('Una tradición puede…','Transmitirse y cambiar con el tiempo',['Ser idéntica para siempre necesariamente','Existir sin personas','Ser solo una ley'],'Las culturas conservan y transforman prácticas.','Piensa en generaciones.','🎭');
    } else if (/economía|consumo|producción/.test(t)) {
      add('Ahorrar significa…','Reservar parte de los recursos para usarlos después',['Gastar todo de inmediato','Pedir siempre prestado','Perder dinero'],'El ahorro permite prepararse para metas o imprevistos.','No usar todo hoy.','💰');
      add('Antes de comprar conviene…','Comparar necesidad, precio y alternativas',['Comprar siempre lo más caro','Ignorar el presupuesto','Comprar por impulso'],'El consumo responsable considera recursos y consecuencias.','Pregunta: ¿lo necesito y puedo pagarlo?','🛒');
      add('La producción es…','El proceso de crear bienes o prestar servicios',['Solo comprar','Solo ahorrar','Solo votar'],'La economía incluye producción, intercambio y consumo.','Piensa en cómo llega un producto al mercado.','🏭');
      add('Un presupuesto ayuda a…','Planear ingresos y gastos',['Eliminar todos los precios','Gastar sin límite','Adivinar el futuro'],'Organizar recursos mejora decisiones económicas.','Anota lo que entra y sale.','📒');
      add('Consumo responsable también considera…','Impactos sociales y ambientales de las decisiones',['Solo el empaque bonito','Comprar más siempre','Ignorar residuos'],'Las decisiones de consumo tienen efectos más allá del precio.','Piensa en origen, uso y residuos.','🌱');
    } else if (/información|digital/.test(t)) {
      add('Antes de compartir una publicación conviene…','Verificar fuente, fecha y evidencia',['Compartir solo por el título','Ignorar quién la creó','Repetirla sin leer'],'Verificar ayuda a evitar desinformación.','Busca quién, cuándo y con qué evidencia.','📱');
      add('Una contraseña segura debe…','Ser difícil de adivinar y mantenerse privada',['Ser “1234”','Compartirse con desconocidos','Usar solo el nombre propio'],'La seguridad digital protege cuentas e información.','Evita datos obvios.','🔐');
      add('Si una fuente afirma algo, una buena pregunta es…','¿Qué evidencia presenta y quién la publica?',['¿Tiene muchos emojis?','¿Me gusta el color?','¿Está en mayúsculas?'],'La confiabilidad depende de evidencia, autoría y contexto.','Evalúa la fuente, no solo la apariencia.','🔎');
      add('Ciudadanía digital responsable incluye…','Tratar a otros con respeto y proteger la privacidad',['Difundir datos privados','Acosar','Suplantar identidades'],'Las normas de convivencia también aplican en línea.','Piensa antes de publicar.','🌐');
      add('Si recibes un mensaje que pide una contraseña…','No la compartas y busca ayuda de un adulto responsable',['Envíala de inmediato','Publícala','Úsala como comentario'],'Las contraseñas son información privada.','Una contraseña no se comparte por mensaje.','🔐');
    } else if (/somos diferentes|identidad/.test(t)) {
      add('La identidad incluye…','Características, historias, vínculos y formas de reconocernos',['Solo la estatura','Solo una nota escolar','Nada de nuestra historia'],'La identidad se construye con múltiples dimensiones.','Piensa en quién eres y qué te conecta con otros.','🪪');
      add('Dos personas pueden…','Tener gustos distintos y merecer el mismo respeto',['Tener que pensar igual','Perder derechos por ser diferentes','No poder convivir'],'La igualdad en dignidad no exige ser idénticos.','Diferencia no significa inferioridad.','🤝');
      add('Conocer otras costumbres ayuda a…','Comprender mejor la diversidad',['Eliminar diferencias','Burlarse','Decidir que una sola es válida'],'El conocimiento favorece respeto y convivencia.','Pregunta antes de juzgar.','🌈');
      add('La empatía implica…','Intentar comprender lo que otra persona puede sentir o necesitar',['Adivinar y decidir por ella','Ignorarla','Estar de acuerdo siempre'],'Empatía no es pensar igual, sino considerar la perspectiva ajena.','Escucha y pregunta.','💛');
      add('Una convivencia respetuosa permite…','Ser diferente sin ser excluido',['Excluir a quien piensa distinto','Usar apodos ofensivos','Imponer gustos'],'El respeto protege la dignidad de todos.','Piensa en cómo quieres ser tratado.','🤝');
    }
    return q;
  }

  function englishExercisePack(grade, topic) {
    const q=[]; const t=topic.title.toLowerCase();
    const add=(question,answer,wrong,explanation,hint,emoji='💬')=>q.push(gameChoice(question,answer,wrong,explanation,hint,emoji));
    if (/hello/.test(t)) {
      add('How do you say “Hola”?','Hello',['Goodbye','Please','Thanks'],'“Hello” is a greeting.','It starts a conversation.','👋');
      add('How do you say “Adiós”?','Goodbye',['Hello','Blue','Family'],'“Goodbye” is used when leaving.','It closes a conversation.','👋');
      add('Choose the polite word to ask for something.','Please',['Red','Run','Book'],'“Please” makes a request polite.','Think: por favor.','🙂');
      add('Someone says “Thank you”. You can answer…','You’re welcome',['Good night yesterday','Blue','Ten'],'“You’re welcome” is a common response to thanks.','Think: con gusto.','🙂');
      add('“Good morning” is used…','In the morning',['Only at midnight','To count','To name a color'],'It is a greeting for the morning.','Morning = mañana.','☀️');
    } else if (/numbers and colors/.test(t)) {
      add('What number is “eight”?','8',['18','3','80'],'Eight = 8.','Count after seven.','🔢');
      add('What color is “blue”?','Azul',['Rojo','Verde','Amarillo'],'Blue means azul.','Think of the sky.','🎨');
      add('“Three red balls” means…','Tres pelotas rojas',['Tres pelotas azules','Dos pelotas rojas','Trece pelotas rojas'],'Three = tres; red = rojo/roja.','Translate number + color.','🎨');
      add('Which word means “amarillo”?','Yellow',['Green','Black','White'],'Yellow = amarillo.','Think of the sun.','🎨');
      add('Ten = …','10',['2','20','100'],'Ten means diez.','It comes after nine.','🔢');
    } else if (/family/.test(t)) {
      add('“Mother” means…','Madre',['Hermano','Padre','Prima'],'Mother = madre.','Think: mom.','👨‍👩‍👧');
      add('“Brother” means…','Hermano',['Hermana','Abuela','Tía'],'Brother = hermano.','A male sibling.','👨‍👩‍👧');
      add('Complete: “This is ___ dad.”','my',['I','am','can'],'“My” expresses possession: mi.','Think: mi papá.','👨‍👩‍👧');
      add('“Grandmother” means…','Abuela',['Madre','Hija','Prima'],'Grandmother = abuela.','The mother of your mother or father.','👵');
      add('Choose a family word.','sister',['pencil','window','school'],'Sister is a family member.','Think: hermana.','👧');
    } else if (/classroom|school and community/.test(t)) {
      add('“Pencil” means…','Lápiz',['Mesa','Puerta','Libro'],'Pencil = lápiz.','You use it to write.','✏️');
      add('Teacher says “Open your book.” What do you do?','Abrir el libro',['Cerrar la puerta','Correr','Guardar el libro'],'Open your book = abre tu libro.','Open = abrir.','📘');
      add('“Chair” means…','Silla',['Ventana','Cuaderno','Colegio'],'Chair = silla.','You sit on it.','🪑');
      add('“Library” is a place with…','Books',['Cars','Planes only','Swimming pools only'],'A library has books and reading resources.','Think: biblioteca.','📚');
      add('Complete: “I study at ___.”','school',['banana','blue','run'],'School is the place where students learn.','Think: colegio/escuela.','🏫');
    } else if (/body/.test(t)) {
      add('“Hand” means…','Mano',['Pie','Ojo','Cabeza'],'Hand = mano.','You have fingers on it.','✋');
      add('“Eyes” means…','Ojos',['Orejas','Rodillas','Brazos'],'Eyes = ojos.','You see with them.','👀');
      add('Touch your “head”. What do you touch?','Cabeza',['Pie','Nariz only','Codo'],'Head = cabeza.','It is above your neck.','🙂');
      add('“Foot” means…','Pie',['Mano','Boca','Espalda'],'Foot = pie.','It is at the end of your leg.','🦶');
      add('We hear with our…','ears',['eyes','hands','feet'],'Ears are used for hearing.','Think: orejas.','👂');
    } else if (/like/.test(t)) {
      add('“I like apples” means…','Me gustan las manzanas',['No me gustan las manzanas','Tengo manzanas','Vendo manzanas'],'I like = me gusta/me gustan.','Like expresses preference.','🍎');
      add('Choose the negative sentence.','I don’t like milk',['I like milk','Milk is white','I have milk'],'Don’t makes the preference negative.','Don’t = no.','🥛');
      add('Complete: “I ___ soccer.”','like',['am','is','can’t always'],'Like expresses what you enjoy.','Think: me gusta el fútbol.','⚽');
      add('Ask about preference:','Do you like pizza?',['You pizza like.','Pizza is do.','Like you?'],'“Do you like…?” asks about likes.','Start with Do you like…?','🍕');
      add('“She likes music” talks about…','Her preference',['Her age','Her address','The weather'],'Likes expresses what she enjoys.','What does she enjoy?','🎵');
    } else if (/about me/.test(t)) {
      add('Complete: “My name ___ Leo.”','is',['am','are','do'],'With “my name” we use “is”.','My name is…','🙂');
      add('“I am nine years old” tells…','Age',['Color','Address','Food'],'Years old expresses age.','How old?','🎂');
      add('How do you ask someone’s name?','What is your name?',['How blue are you?','Where food?','Can name?'],'This is the standard question for a name.','What is your…?','💬');
      add('Complete: “I ___ from Colombia.”','am',['is','are','do'],'With I we use am.','I am.','🌎');
      add('“I like drawing” tells…','A preference',['A date','A price','A direction'],'Like tells what someone enjoys.','What do I enjoy?','🎨');
    } else if (/daily routines|present simple|frequency/.test(t)) {
      add('Complete: “I ___ breakfast at 7.”','eat',['eats','eating','ate yesterday'], 'With I in present simple, use the base verb.', 'I eat.','⏰');
      add('Complete: “She ___ to school every day.”','goes',['go','going','gone'],'With he/she/it, present simple often adds -s/-es.','She → verb with s/es.','🏫');
      add('Which word means “siempre”?','always',['never','sometimes','yesterday'],'Always = siempre.','Frequency word.','🔁');
      add('“He usually reads at night.” How often?','Usually',['Never','Right now','Yesterday'],'Usually indicates frequency.','It means normalmente.','📖');
      add('Choose a routine sentence.','I brush my teeth every morning.',['I am a blue chair.','Yesterday is tomorrow.','Three pencils fly.'],'A routine is a repeated activity.','Look for every morning/day.','🪥');
    } else if (/home/.test(t)) {
      add('“Kitchen” means…','Cocina',['Baño','Habitación','Jardín'],'Kitchen = cocina.','You prepare food there.','🏠');
      add('“Bedroom” means…','Habitación/dormitorio',['Cocina','Garaje','Escuela'],'Bedroom is where you sleep.','Bed + room.','🛏️');
      add('Complete: “The sofa is ___ the living room.”','in',['eat','blue','can'],'In means dentro de.','The sofa is inside the room.','🛋️');
      add('“Bathroom” means…','Baño',['Sala','Techo','Puerta'],'Bathroom = baño.','Room for washing/toilet.','🚿');
      add('Where do you usually cook?','Kitchen',['Bedroom','Bathroom','Garage'],'Cooking usually happens in the kitchen.','Think: cocina.','🍳');
    } else if (/food/.test(t)) {
      add('“Water” means…','Agua',['Pan','Leche','Jugo'],'Water = agua.','You drink it.','💧');
      add('Which is a fruit?','apple',['bread','rice','cheese'],'Apple is a fruit.','Think: manzana.','🍎');
      add('“I am hungry” means…','Tengo hambre',['Tengo sed','Estoy cansado','Tengo frío'],'Hungry = con hambre.','You want food.','🍽️');
      add('Which word means “leche”?','milk',['juice','water','bread'],'Milk = leche.','A white drink.','🥛');
      add('Complete: “I would like ___ apple.”','an',['a','is','are'],'Use “an” before a vowel sound like apple.','Apple starts with a vowel sound.','🍎');
    } else if (/can \/ can’t/.test(t)) {
      add('“I can swim” means…','Puedo nadar',['No puedo nadar','Estoy nadando ahora','Nadé ayer'],'Can expresses ability.','Can = poder.','🏊');
      add('Choose the negative ability.','She can’t fly',['She can fly','She flies every day','She is flying'],'Can’t = cannot.','Look for not able.','🪽');
      add('Complete: “___ you ride a bike?”','Can',['Are','Is','Do always'],'Can starts a question about ability.','Can you…?','🚲');
      add('After “can” use…','The base verb',['Verb + s always','Verb + ing always','Past tense always'],'Modal can is followed by base form.','Can play, can run.','💬');
      add('A bird can usually…','fly',['read a book','drive a car','write an email'],'Fly is a typical bird ability.','Think of wings.','🐦');
    } else if (/simple questions|questions and answers/.test(t)) {
      add('Question for a place:','Where do you live?',['When is blue?','How many name?','Who color?'],'Where asks about place.','Where = dónde.','❓');
      add('Question for a person:','Who is your teacher?',['Where is Monday?','What time blue?','How many happy?'],'Who asks about a person.','Who = quién.','❓');
      add('“What is your favorite food?” asks about…','A preference',['An address','The weather only','A past date'],'Favorite asks which one you prefer.','Favorite = favorito.','❓');
      add('Answer “How old are you?”','I am ten years old.',['I am in the kitchen.','Blue.','On Monday.'],'The question asks age.','Years old.','🎂');
      add('Answer “Where is the book?”','It is on the table.',['It is ten years old.','It is hungry.','It is Monday.'],'Where requires a location.','Use a place expression.','📚');
    } else if (/descriptions|comparing|comparatives/.test(t)) {
      add('Complete: “The elephant is ___ than the mouse.”','bigger',['biggest always','more small','biger'],'Comparative of big is bigger.','Compare two things.','🐘');
      add('“She has curly hair” describes…','Appearance',['A time','A price','A direction'],'Curly hair describes how someone looks.','Hair = cabello.','🙂');
      add('Comparative of “small” is…','smaller',['smallest','more small always','smalled'],'For short adjectives, add -er.','small + er.','📏');
      add('“The red car is faster than the blue car.” Which is faster?','The red car',['The blue car','Both always','Neither'],'The sentence directly compares speed.','Look before “is faster”.','🚗');
      add('Choose a description.','The park is quiet and green.',['The park yesterday tomorrow.','Five is running blue.','Where park?'],'Adjectives describe qualities.','Quiet and green describe the park.','🌳');
    } else if (/present continuous/.test(t)) {
      add('Complete: “She ___ reading now.”','is',['are','am','do'],'Present continuous: she is + verb-ing.','She → is.','📖');
      add('“They are playing” means…','Están jugando',['Jugaron ayer','Juegan siempre necesariamente','Jugarán mañana'],'Present continuous describes an action happening now.','are + playing.','⚽');
      add('Complete: “I am ___.”','studying',['study every day as base only','studies','studied yesterday'],'After am, use verb-ing for present continuous.','am + ing.','📝');
      add('Which sentence is happening now?','He is eating now.',['He eats every Sunday.','He ate yesterday.','He will eat tomorrow.'],'Is eating + now signals present continuous.','Look for be + -ing.','🍽️');
      add('Negative: “She ___ sleeping.”','isn’t',['don’t','aren’t with she','not can'],'She isn’t sleeping = ella no está durmiendo.','She → is/isn’t.','😴');
    } else if (/directions and places/.test(t)) {
      add('“Turn left” means…','Gira a la izquierda',['Gira a la derecha','Sigue recto','Detente siempre'],'Left = izquierda.','Think of left/right.','⬅️');
      add('“Go straight” means…','Sigue derecho',['Gira atrás','Sube','Siéntate'],'Go straight gives a direction forward.','Do not turn.','⬆️');
      add('“The bank is next to the park.” means…','El banco está al lado del parque',['Está debajo del parque','Está muy lejos necesariamente','Está dentro del parque'],'Next to = al lado de.','Two places side by side.','🗺️');
      add('Ask for directions:','How do I get to the library?',['How old library?','What color Monday?','Can library eat?'],'This asks how to reach a place.','How do I get to…?','🧭');
      add('“Across from” means…','Enfrente de',['Dentro de','Debajo de','Lejos de siempre'],'Across from indicates opposite sides.','Think: frente a frente.','🗺️');
    } else if (/reading/.test(t)) {
      const text='Mia has a small dog named Max. Every afternoon, they walk to the park. Max likes to run after a red ball.';
      add(`${text} What pet does Mia have?`,'A dog',['A cat','A bird','A fish'],'The text says Mia has a small dog.','Look at the first sentence.','📖');
      add(`${text} When do they go to the park?`,'Every afternoon',['Every morning','At midnight','Only on Monday'],'The text says every afternoon.','Find the time expression.','📖');
      add(`${text} What color is the ball?`,'Red',['Blue','Green','Black'],'The last sentence says red ball.','Look near “ball”.','📖');
      add('To find a detail in a text, first…','Look for key words connected to the question',['Guess without reading','Read only the title always','Ignore names and numbers'],'Keywords help locate explicit information.','Repeat the important word from the question.','🔎');
      add('The “main idea” is…','What the text is mostly about',['Every single word','Only the last letter','A random detail'],'Main idea captures the central message.','Ask: what is this mostly about?','📖');
    } else if (/writing|messages/.test(t)) {
      add('Choose the best short message.','Hi Ana, I will be at the library at 3. See you!',['Library blue three because.','Ana at the is.','Will see book.'],'A clear message has purpose, understandable sentences and useful details.','Who, what, when.','✍️');
      add('Connect ideas: “I like soccer ___ I play every Saturday.”','and',['because always impossible','yesterday','under'],'And connects related ideas.','and = y.','🔗');
      add('“I stayed home ___ it was raining.”','because',['and only','but only','then only'],'Because gives the reason.','Why did I stay home?','🔗');
      add('A paragraph should have…','Connected sentences about a main idea',['Random words','Only one letter','No relation between ideas'],'Connected writing is easier to understand.','Keep one main idea.','✍️');
      add('Before sending a message, it is useful to…','Read it again and check clarity',['Delete the purpose','Add unrelated words','Remove names and details always'],'Review helps correct mistakes and missing information.','Would the reader understand?','✍️');
    } else if (/future intentions/.test(t)) {
      add('Complete: “I am going to ___ tomorrow.”','study',['studied','studies with I','studying after to'], 'Going to + base verb expresses a future plan.', 'going to + verb.','🔮');
      add('“We are going to visit grandma” is about…','A future plan',['A past event','A color','A price'],'Going to often expresses intentions or plans.','What will happen later?','📅');
      add('Ask about a plan:','What are you going to do this weekend?',['What did blue?','Where is hungry?','Can weekend color?'],'This asks about future intention.','What are you going to…?','❓');
      add('Negative plan:','I am not going to travel.',['I not travel going.','I am travel yesterday.','I going not to.'],'Place not after am/is/are.','am not going to.','🔮');
      add('Choose a future time expression.','next week',['yesterday','last year','two days ago'],'Next week refers to the future.','Next = próximo.','📅');
    } else if (/present and past simple/.test(t)) {
      add('Present: “I ___ soccer every Saturday.”','play',['played yesterday','plays with I','playing now'], 'Present simple describes routines.', 'Every Saturday = routine.','⚽');
      add('Past: “Yesterday I ___ soccer.”','played',['play every day','plays','am playing'], 'Regular past often adds -ed.', 'Yesterday signals past.','⚽');
      add('Past of “go” is…','went',['goed','goes','going'],'Go is irregular: went.','It does not use -ed.','🚶');
      add('Which is a past time expression?','last night',['every day','usually','right now'],'Last night refers to completed past time.','Last = pasado/anterior.','🌙');
      add('“She studies every day” describes…','A routine',['A finished event yesterday','A future plan','A current action necessarily'],'Present simple + every day expresses routine.','Look for frequency.','📚');
    } else if (/everyday conversation/.test(t)) {
      add('At a store, ask for a price:','How much is it?',['How old is it?','Where color?','Can it Monday?'],'How much asks about price.','Much = cuánto in price context.','🛍️');
      add('Someone asks “How are you?” A natural answer is…','I’m fine, thanks.',['Blue.','At five dollars.','On the left.'],'How are you asks how someone is feeling/doing.','Respond about yourself.','🙂');
      add('Ask for help politely:','Can you help me, please?',['Help me now! only','You help? no please','Why blue?'],'Can you… please? is a polite request.','Use can + please.','🤝');
      add('At school, “I don’t understand” means…','No entiendo',['No tengo hambre','No puedo correr','No vivo aquí'],'Understand = entender.','Useful phrase when learning.','🏫');
      add('To keep a conversation going, you can…','Ask a related question',['Change to random words','Never listen','Repeat one word only'],'Related questions show listening and create interaction.','Respond to what the other person said.','💬');
    }
    return q;
  }

  function fallbackCurriculumExercises(grade, subjectKey, topic) {
    const topics = CURRICULUM[String(grade)]?.[subjectKey] || [];
    const others = topics.filter(item => item.id !== topic.id);
    const wrongGoals = others.slice(0,3).map(item => item.goal);
    const wrongReal = others.slice(-3).map(item => item.realWorld);
    return [
      gameChoice(`¿Qué describe mejor lo que vas a aprender en “${topic.title}”?`, topic.goal, wrongGoals, topic.goal, 'Busca la opción que coincide con el propósito del tema.', '🎯'),
      gameChoice(`¿En cuál situación es más útil “${topic.title}”?`, topic.realWorld, wrongReal, `Este tema te ayuda a: ${topic.realWorld}`, 'Conecta el aprendizaje con una situación de la vida real.', '🌟'),
      gameChoice('¿Qué habilidad estás fortaleciendo principalmente?', topic.skill, others.slice(0,3).map(item => item.skill), `La habilidad principal de este tema es ${topic.skill}.`, 'Piensa qué tipo de pensamiento necesitas para resolver el tema.', '🧠')
    ];
  }

  function buildCurriculumExercisePack(grade, subjectKey, topic) {
    let pack = [];
    if (subjectKey === 'math') pack = mathExercisePack(grade, topic);
    else if (subjectKey === 'language') pack = languageExercisePack(grade, topic);
    else if (subjectKey === 'science') pack = scienceExercisePack(grade, topic);
    else if (subjectKey === 'social') pack = socialExercisePack(grade, topic);
    else if (subjectKey === 'english') pack = englishExercisePack(grade, topic);

    const fallback = fallbackCurriculumExercises(grade, subjectKey, topic);
    pack = [...pack, ...fallback].filter(Boolean).slice(0,5);
    while (pack.length < 5) pack.push(fallback[pack.length % fallback.length]);
    return pack.map(item => ({ ...item, options: shuffled(item.options) }));
  }

  function curriculumGameStarsFor(score, total=5) {
    if (score >= total) return 3;
    if (score >= Math.ceil(total * .8)) return 2;
    if (score >= Math.ceil(total * .6)) return 1;
    return 0;
  }

  function updateCurriculumGameBest() {
    if (!curriculumGameBest) return;
    const { grade, subjectKey, topic } = currentCurriculumTopic();
    if (!grade || !topic) { curriculumGameBest.hidden = true; return; }
    const saved = curriculumGameProgress()[curriculumGameTopicKey(grade, subjectKey, topic.id)];
    if (!saved?.plays) { curriculumGameBest.hidden = true; return; }
    const stars = '★'.repeat(Number(saved.bestStars || 0)) + '☆'.repeat(Math.max(0,3-Number(saved.bestStars||0)));
    curriculumGameBest.innerHTML = `<span>${stars}</span><small>Tu mejor ronda: ${saved.bestScore || 0}/${saved.total || 5}</small>`;
    curriculumGameBest.hidden = false;
  }

  function openCurriculumGame() {
    const { grade, subjectKey, meta, topic } = currentCurriculumTopic();
    if (!grade || !meta || !topic || !curriculumGameModal) return;
    markCurriculumTopicStarted(subjectKey, grade, topic.id);
    const pack = buildCurriculumExercisePack(grade, subjectKey, topic);
    curriculumGameState = { grade, subjectKey, meta, topic, pack, index:0, score:0, combo:0, answered:false };
    curriculumGameModal.hidden = false;
    document.body.classList.add('curriculum-game-open');
    if (curriculumGameKicker) curriculumGameKicker.textContent = `${meta.name.toLocaleUpperCase('es-CO')} · ${grade}.º`;
    if (curriculumGameTitle) curriculumGameTitle.textContent = topic.title;
    if (curriculumGameFinish) curriculumGameFinish.hidden = true;
    const stage = curriculumGameModal.querySelector('.curriculum-game-stage');
    if (stage) stage.hidden = false;
    renderCurriculumGameQuestion();
  }

  function closeCurriculumGame() {
    if (!curriculumGameModal) return;
    curriculumGameModal.hidden = true;
    document.body.classList.remove('curriculum-game-open');
    curriculumGameState = null;
    updateCurriculumGameBest();
    renderCurriculumSubject(curriculumCurrentSubject);
    renderCurriculumHome();
  }

  function renderCurriculumGameQuestion() {
    const state = curriculumGameState;
    if (!state) return;
    const item = state.pack[state.index];
    state.answered = false;
    const total = state.pack.length;
    if (curriculumGameScore) curriculumGameScore.textContent = String(state.score);
    if (curriculumGameProgressBar) curriculumGameProgressBar.style.width = `${(state.index / total) * 100}%`;
    if (curriculumGameRound) curriculumGameRound.textContent = `RETO ${state.index + 1} DE ${total}`;
    if (curriculumGameCombo) curriculumGameCombo.textContent = state.combo >= 2 ? `🔥 RACHA ×${state.combo}` : '⚡ A POR EL RETO';
    if (curriculumGameEmoji) curriculumGameEmoji.textContent = item.emoji || curriculumTopicIconFor(state.subjectKey, curriculumCurrentTopicIndex);
    if (curriculumGamePrompt) curriculumGamePrompt.textContent = item.question;
    if (curriculumGameHint) { curriculumGameHint.hidden = true; curriculumGameHint.textContent = item.hint || 'Piensa en lo que ya aprendiste y elimina las opciones que no encajan.'; }
    if (curriculumGameHintBtn) { curriculumGameHintBtn.hidden = false; curriculumGameHintBtn.disabled = false; }
    if (curriculumGameFeedback) { curriculumGameFeedback.hidden = true; curriculumGameFeedback.className = 'curriculum-game-feedback'; curriculumGameFeedback.textContent = ''; }
    if (curriculumGameNextBtn) curriculumGameNextBtn.hidden = true;
    if (curriculumGameOptions) {
      curriculumGameOptions.innerHTML = '';
      item.options.forEach((option, optionIndex) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'curriculum-game-option';
        btn.innerHTML = `<span>${String.fromCharCode(65 + optionIndex)}</span><strong>${option}</strong>`;
        btn.addEventListener('click', () => answerCurriculumGame(option, btn));
        curriculumGameOptions.appendChild(btn);
      });
    }
  }

  function answerCurriculumGame(option, button) {
    const state = curriculumGameState;
    if (!state || state.answered) return;
    state.answered = true;
    const item = state.pack[state.index];
    const correct = String(option) === String(item.answer);
    if (correct) { state.score += 1; state.combo += 1; }
    else state.combo = 0;

    curriculumGameOptions?.querySelectorAll('.curriculum-game-option').forEach(btn => {
      btn.disabled = true;
      const text = btn.querySelector('strong')?.textContent || '';
      if (text === String(item.answer)) btn.classList.add('correct');
      else if (btn === button && !correct) btn.classList.add('wrong');
    });
    button?.classList.add(correct ? 'chosen-correct' : 'chosen-wrong');
    if (curriculumGameScore) curriculumGameScore.textContent = String(state.score);
    if (curriculumGameCombo) curriculumGameCombo.textContent = correct ? (state.combo >= 2 ? `🔥 RACHA ×${state.combo}` : '✨ ¡BIEN!') : '💪 SIGAMOS';
    if (curriculumGameFeedback) {
      curriculumGameFeedback.hidden = false;
      curriculumGameFeedback.className = `curriculum-game-feedback ${correct ? 'success' : 'learn'}`;
      curriculumGameFeedback.innerHTML = `<strong>${correct ? '¡Correcto! +1 estrella' : 'Todavía no. Mira cómo se piensa:'}</strong><p>${item.explanation || `La respuesta correcta es ${item.answer}.`}</p>`;
    }
    if (curriculumGameHintBtn) curriculumGameHintBtn.hidden = true;
    if (curriculumGameNextBtn) {
      curriculumGameNextBtn.hidden = false;
      curriculumGameNextBtn.textContent = state.index >= state.pack.length - 1 ? 'Ver mi resultado →' : 'Siguiente reto →';
    }
    playTap();
  }

  function nextCurriculumGameQuestion() {
    const state = curriculumGameState;
    if (!state || !state.answered) return;
    if (state.index < state.pack.length - 1) {
      state.index += 1;
      renderCurriculumGameQuestion();
      return;
    }
    finishCurriculumGame();
  }

  function finishCurriculumGame() {
    const state = curriculumGameState;
    if (!state) return;
    const total = state.pack.length;
    const saved = saveCurriculumGameResult(curriculumGameTopicKey(state.grade,state.subjectKey,state.topic.id), state.score, total);
    const stars = curriculumGameStarsFor(state.score,total);
    if (curriculumGameProgressBar) curriculumGameProgressBar.style.width = '100%';
    const stage = curriculumGameModal?.querySelector('.curriculum-game-stage');
    if (stage) stage.hidden = true;
    if (curriculumGameFinish) curriculumGameFinish.hidden = false;
    if (curriculumGameFinishStars) curriculumGameFinishStars.textContent = stars ? '⭐'.repeat(stars) : '✨';
    if (curriculumGameFinishTitle) curriculumGameFinishTitle.textContent = state.score === total ? '¡Dominaste esta ronda!' : state.score >= 3 ? '¡Vas muy bien!' : '¡Cada intento te hace mejor!';
    if (curriculumGameFinishText) curriculumGameFinishText.textContent = `Acertaste ${state.score} de ${total}. Tu mejor resultado es ${saved.bestScore}/${total}. ${state.score < total ? 'Puedes jugar otra vez o pedirle a NOVA que te explique lo que costó.' : 'Excelente: ahora intenta explicarlo con tus propias palabras.'}`;
    renderCurriculumSubject(state.subjectKey);
    renderCurriculumHome();
  }

  function replayCurriculumGame() {
    const state = curriculumGameState;
    if (!state) return;
    state.pack = buildCurriculumExercisePack(state.grade,state.subjectKey,state.topic);
    state.index=0; state.score=0; state.combo=0; state.answered=false;
    if (curriculumGameFinish) curriculumGameFinish.hidden = true;
    const stage = curriculumGameModal?.querySelector('.curriculum-game-stage');
    if (stage) stage.hidden = false;
    renderCurriculumGameQuestion();
  }

  function openNovaFromCurriculumGame() {
    const state = curriculumGameState;
    if (!state) return;
    const { grade, meta, topic } = state;
    closeCurriculumGame();
    showNovaTutorView();
    const prompt = `Estoy en ${grade}.º de primaria y estaba jugando ejercicios de ${topic.title} en ${meta.name}. Quiero entender mejor este tema. Explícame una idea clave con un ejemplo corto y luego hazme una sola pregunta para que yo la intente.`;
    setTimeout(() => askGeneralNova(prompt, `Ayúdame con: ${topic.title}`), 140);
  }

  function updatePersonalization() {
    const name = explorerName();
    if (introChildName) introChildName.textContent = name.toLocaleUpperCase('es-CO');
    if (finalChildName) finalChildName.textContent = name;
    if (hubChildName) hubChildName.textContent = name;
    if (aiTutorTitle) aiTutorTitle.textContent = `Estoy aquí, ${name}`;

    const profile = familyProfile();
    if (parentEmailInput && !parentEmailInput.value) parentEmailInput.value = currentUser?.email || profile.email || '';
    if (childNameInput && !childNameInput.value) childNameInput.value = profile.childName || '';
    if (childProfileNameInput && !childProfileNameInput.value) childProfileNameInput.value = profile.childName || '';

    if (accountEmailText) accountEmailText.textContent = currentUser?.email || profile.email || '—';
    if (accountChildText) accountChildText.textContent = name;
    if (childSetupEmail) childSetupEmail.textContent = currentUser?.email || '—';
    if (accountSettingsText) {
      accountSettingsText.textContent = currentUser
        ? `${currentUser.email} · Perfil: ${name}`
        : 'Sin sesión iniciada.';
    }

    renderCurriculumHome();
    renderParentCurriculumPlan();
  }

  function formatCop(amount) {
    try {
      return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0
      }).format(Number(amount) || 0);
    } catch {
      return `$${Number(amount || 0).toLocaleString('es-CO')}`;
    }
  }

  function setAccessStatus(message = '', kind = '') {
    if (!accessStatus) return;
    accessStatus.textContent = message;
    accessStatus.className = `access-status${kind ? ` ${kind}` : ''}`;
  }

  function setAuthStatus(message = '', kind = '') {
    if (!authStatus) return;
    authStatus.textContent = message;
    authStatus.className = `access-status${kind ? ` ${kind}` : ''}`;
  }

  function setSubscriptionSettings(message) {
    if (subscriptionSettingsText) subscriptionSettingsText.textContent = message;
  }

  function formatPlanDate(value) {
    if (!value) return '—';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '—';
    try {
      return new Intl.DateTimeFormat('es-CO', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(date);
    } catch {
      return date.toLocaleDateString('es-CO');
    }
  }

  function normalizeSubscriptionInfo(data = {}) {
    const status = String(data.status || 'unknown').toLowerCase() === 'cancelled'
      ? 'canceled'
      : String(data.status || 'unknown').toLowerCase();
    return {
      id: data.id || null,
      status,
      active: Boolean(data.active),
      renews: data.renews !== undefined ? Boolean(data.renews) : status === 'authorized',
      accessUntil: data.accessUntil || null,
      canceledAt: data.canceledAt || null,
      nextPaymentDate: data.nextPaymentDate || null,
      amount: data.amount ?? subscriptionConfig.amount ?? null,
      currency: data.currency || subscriptionConfig.currency || 'COP'
    };
  }

  function updateSubscriptionSummary(info = currentSubscriptionInfo) {
    if (!subscriptionSettingsBtn) return;
    if (!info) {
      setSubscriptionSettings('Aún no hay un plan activo.');
      subscriptionSettingsBtn.textContent = 'Ver plan';
      return;
    }

    if (info.status === 'authorized' && info.renews) {
      const date = formatPlanDate(info.nextPaymentDate);
      setSubscriptionSettings(date !== '—' ? `Activo · próxima renovación ${date}` : 'Plan activo · renovación mensual');
      subscriptionSettingsBtn.textContent = 'Administrar';
      return;
    }

    if (info.status === 'canceled' && info.active && info.accessUntil) {
      setSubscriptionSettings(`Renovación cancelada · acceso hasta ${formatPlanDate(info.accessUntil)}`);
      subscriptionSettingsBtn.textContent = 'Ver plan';
      return;
    }

    if (info.status === 'canceled') {
      setSubscriptionSettings('Plan finalizado · sin nuevos cobros');
      subscriptionSettingsBtn.textContent = 'Ver plan';
      return;
    }

    if (info.status === 'paused') {
      setSubscriptionSettings('Plan pausado.');
      subscriptionSettingsBtn.textContent = 'Ver plan';
      return;
    }

    setSubscriptionSettings('Estamos confirmando el estado del plan.');
    subscriptionSettingsBtn.textContent = 'Ver plan';
  }

  function updatePlanManagementUi(info = currentSubscriptionInfo) {
    if (!planManagementModal) return;
    const plan = info || normalizeSubscriptionInfo({});
    const isCanceled = plan.status === 'canceled';
    const isRenewing = plan.status === 'authorized' && plan.renews;

    if (planManagementPrice) planManagementPrice.textContent = formatCop(plan.amount || subscriptionConfig.amount);
    if (planAccountEmail) planAccountEmail.textContent = currentUser?.email || familyProfile().email || '—';

    if (planStatusBadge) {
      planStatusBadge.classList.toggle('active', isRenewing);
      planStatusBadge.classList.toggle('canceled', isCanceled);
      planStatusBadge.textContent = isRenewing ? 'ACTIVO' : isCanceled ? 'CANCELADO' : 'ESTADO DEL PLAN';
    }

    if (isRenewing) {
      if (planStatusDetail) planStatusDetail.textContent = 'Tu plan se renueva automáticamente cada mes.';
      if (planDateLabel) planDateLabel.textContent = 'PRÓXIMA RENOVACIÓN';
      if (planDateValue) planDateValue.textContent = formatPlanDate(plan.nextPaymentDate);
      if (planCanceledNotice) planCanceledNotice.hidden = true;
      if (planManagementActions) planManagementActions.hidden = false;
      if (cancelPlanBtn) cancelPlanBtn.hidden = false;
    } else if (isCanceled) {
      if (planStatusDetail) planStatusDetail.textContent = plan.active
        ? 'La renovación está cancelada. Puedes seguir usando la app durante el periodo ya pagado.'
        : 'La renovación está cancelada y el periodo de acceso ya terminó.';
      if (planDateLabel) planDateLabel.textContent = plan.active ? 'ACCESO HASTA' : 'ESTADO';
      if (planDateValue) planDateValue.textContent = plan.active ? formatPlanDate(plan.accessUntil) : 'Finalizado';
      if (planCanceledNotice) planCanceledNotice.hidden = false;
      if (planCanceledNoticeText) planCanceledNoticeText.textContent = plan.active && plan.accessUntil
        ? `No se realizarán nuevos cobros. El acceso continúa hasta ${formatPlanDate(plan.accessUntil)}.`
        : 'No se realizarán nuevos cobros.';
      if (planManagementActions) planManagementActions.hidden = true;
    } else {
      if (planStatusDetail) planStatusDetail.textContent = 'Estamos verificando el estado actual de tu plan.';
      if (planDateLabel) planDateLabel.textContent = 'ESTADO';
      if (planDateValue) planDateValue.textContent = plan.status === 'paused' ? 'Pausado' : 'Por confirmar';
      if (planCanceledNotice) planCanceledNotice.hidden = true;
      if (planManagementActions) planManagementActions.hidden = true;
    }

    if (planCancelCopy) {
      planCancelCopy.textContent = plan.nextPaymentDate
        ? `Conservarás el acceso hasta ${formatPlanDate(plan.nextPaymentDate)}, que corresponde al periodo ya pagado. Después no se harán nuevos cobros.`
        : 'La renovación se detendrá y no se harán nuevos cobros. Si existe un periodo ya pagado, conservaremos ese acceso.';
    }
    if (planCancelAccessUntil) planCancelAccessUntil.textContent = formatPlanDate(plan.nextPaymentDate || plan.accessUntil);
  }

  function showPlanOverview() {
    if (planOverviewView) planOverviewView.hidden = false;
    if (planCancelView) planCancelView.hidden = true;
    if (planCancelStatus) planCancelStatus.textContent = '';
  }

  function showPlanCancelConfirmation() {
    if (!currentSubscriptionInfo?.renews || currentSubscriptionInfo?.status !== 'authorized') return;
    updatePlanManagementUi(currentSubscriptionInfo);
    if (planOverviewView) planOverviewView.hidden = true;
    if (planCancelView) planCancelView.hidden = false;
    if (planCancelStatus) planCancelStatus.textContent = '';
    const card = planManagementModal?.querySelector('.modal-card');
    if (card) card.scrollTop = 0;
  }

  function isOwnerReviewSession() {
    return sessionStorage.getItem(OWNER_DEMO_KEY) === 'yes';
  }

  function updateReviewUi() {
    const ownerReview = isOwnerReviewSession();
    const active = ownerReview || testerMode;

    if (reviewModeBar) reviewModeBar.hidden = !active;
    document.body.classList.toggle('review-active', active);

    if (reviewModeLabel) {
      reviewModeLabel.textContent = ownerReview ? 'Revisión para adultos' : 'Modo de pruebas';
    }
    if (reviewModeNote) {
      reviewModeNote.textContent = ownerReview
        ? 'Puedes recorrer toda la app. El progreso no se guarda.'
        : 'Lo que hagas aquí no modifica el progreso del niño.';
    }
    if (reviewExitBtn) {
      reviewExitBtn.textContent = ownerReview ? 'Volver al acceso' : 'Salir de pruebas';
    }
    if (exitTesterModeBtn) {
      exitTesterModeBtn.textContent = ownerReview
        ? 'Salir de la revisión y volver al inicio de sesión'
        : 'Salir de pruebas y volver al progreso real';
    }

    // En revisión sin una cuenta familiar real, evitamos mostrar controles que no aplican.
    if (accountSettingsTitle) accountSettingsTitle.textContent = ownerReview ? 'Revisión para adultos' : 'Cuenta familiar';
    if (accountSettingsText && ownerReview) accountSettingsText.textContent = 'Sesión temporal de revisión. No guarda cambios.';
    if (accountSignOutBtn && ownerReview) accountSignOutBtn.textContent = '↪ Volver al acceso';
    if (subscriptionSettingsRow) subscriptionSettingsRow.hidden = ownerReview;
    if (testerSettingsRow) testerSettingsRow.hidden = false;
  }

  function academyCompletionPercent(academy = {}) {
    const routeProgress = academy.routeProgress && typeof academy.routeProgress === 'object' ? academy.routeProgress : {};
    const notebook = readLocalJson(CLOUD_PROGRESS_KEYS.notebook) || {};
    const completedNotebook = Math.max(0, Number(notebook.completed) || Number(notebookCompletedLessons) || 0);
    let earned = 0;
    let possible = 0;

    academyRoutes.forEach(route => {
      if (route.id === 'long') {
        possible += notebookLessons.length;
        earned += Math.max(0, Math.min(notebookLessons.length, completedNotebook));
        return;
      }
      const total = (academyChallengeSets[route.id] || []).length;
      possible += total;
      earned += Math.max(0, Math.min(total, Number(routeProgress[route.id]) || 0));
    });

    return possible ? Math.round((earned / possible) * 100) : 0;
  }

  function learningSnapshot() {
    const atlas = readLocalJson(CLOUD_PROGRESS_KEYS.atlas) || {};
    const academy = readLocalJson(CLOUD_PROGRESS_KEYS.academy) || {};
    const total = missions.length || 36;
    const currentMission = Math.max(0, Math.min(total - 1, Number(atlas.mission) || Number(mission) || 0));
    const unlocked = Math.max(0, Number(atlas.unlocked) || unlockedCount?.() || currentMission);
    const atlasCompleted = atlas.gameCompleted === true || gameCompleted === true || unlocked >= total;
    const atlasPct = atlasCompleted ? 100 : Math.max(0, Math.min(100, Math.round((Math.max(unlocked, currentMission) / total) * 100)));
    const academyPct = academyCompletionPercent(academy);
    const academyStarted = academyPct > 0 || Boolean(academy.lastRoute);
    const lastRoute = academy.lastRoute || null;
    const route = academyRoutes.find(r => r.id === lastRoute) || null;

    return {
      atlas, academy, total, currentMission, unlocked, atlasCompleted, atlasPct,
      academyPct, academyStarted, lastRoute, route
    };
  }

  function updateHubProgress() {
    const snap = learningSnapshot();
    const hasDivisionProgress = snap.atlasPct > 0 || snap.academyStarted || snap.atlasCompleted;
    if (continueLearningBtn) continueLearningBtn.hidden = !hasDivisionProgress;


    if (continueLearningTitle) {
      continueLearningTitle.textContent = snap.atlasCompleted
        ? (snap.route ? snap.route.title : 'Resolver divisiones paso a paso')
        : 'Comprender la división';
    }
    if (continueLearningMeta) {
      continueLearningMeta.textContent = snap.atlasCompleted
        ? (snap.route ? `División · ${snap.route.goal}` : 'División · empieza el procedimiento con NOVA')
        : `División · comprender · misión ${snap.currentMission + 1} de ${snap.total}`;
    }
    if (continueLearningProgressBar) {
      continueLearningProgressBar.style.width = `${snap.atlasCompleted ? snap.academyPct : snap.atlasPct}%`;
    }

    if (atlasPathProgressBar) atlasPathProgressBar.style.width = `${snap.atlasPct}%`;
    if (atlasPathStatus) atlasPathStatus.textContent = snap.atlasCompleted
      ? '36 de 36 misiones · completado'
      : `Misión ${snap.currentMission + 1} de ${snap.total}`;
    if (atlasPathState) atlasPathState.textContent = snap.atlasCompleted ? '✓ Completado' : 'Continuar →';
    atlasPathBtn?.classList.toggle('completed', snap.atlasCompleted);

    if (academyPathProgressBar) academyPathProgressBar.style.width = `${snap.academyPct}%`;
    if (academyPathStatus) academyPathStatus.textContent = snap.atlasCompleted
      ? (snap.academyStarted ? `${snap.academyPct}% del entrenamiento recorrido` : 'Lista para comenzar')
      : 'Se desbloquea al completar la comprensión';
    if (academyPathState) academyPathState.textContent = snap.atlasCompleted
      ? (snap.academyStarted ? 'Continuar →' : 'Empezar →')
      : '🔒';
    academyPathBtn?.classList.toggle('locked', !snap.atlasCompleted && !testerMode);
    academyPathBtn?.setAttribute('aria-disabled', String(!snap.atlasCompleted && !testerMode));

    if (mathContinueTitle) mathContinueTitle.textContent = snap.atlasCompleted
      ? (snap.route ? snap.route.title : 'Resolver divisiones paso a paso')
      : 'Comprender la división';
    if (mathContinueMeta) mathContinueMeta.textContent = snap.atlasCompleted
      ? (snap.route ? `Retoma esta habilidad: ${snap.route.goal}` : 'Empieza a resolver divisiones con NOVA')
      : `Sigue construyendo la idea de división · misión ${snap.currentMission + 1} de ${snap.total}`;

    if (mathRecommendation) {
      mathRecommendation.textContent = !snap.atlasCompleted
        ? `Sigue reforzando qué significa dividir. Vas en la misión ${snap.currentMission + 1} de ${snap.total}.`
        : snap.route
          ? `Continúa con “${snap.route.title}”. NOVA retomará el punto donde quedaste.`
          : 'Ya comprendiste la base. Ahora puedes empezar a resolver divisiones paso a paso con NOVA.';
    }
    renderCurriculumHome();
  }

  function continueLearning() {
    const snap = learningSnapshot();
    if (!snap.atlasCompleted && !testerMode) {
      showAtlasView({ respectIntro: true });
      return;
    }

    showAcademyView();
    if (snap.lastRoute && academyRoutes.some(r => r.id === snap.lastRoute)) {
      startAcademyRoute(snap.lastRoute);
    }
  }
  function closeNavigationOverlays() {
    [settingsModal, planManagementModal, learningProgressModal, worldModal, animalModal, guideModal, testerModal].forEach(modal => {
      if (modal) modal.hidden = true;
    });
    document.body.classList.remove('modal-open');
  }

  function resetViewScroll(view = null) {
    if (view && 'scrollTop' in view) view.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  function showLearningHubView() {
    if (!commercialAccessGranted) {
      showCommercialGate('Activa el plan familiar para empezar a aprender con NOVA.');
      return;
    }
    closeNavigationOverlays();
    saveGameState();
    saveNotebookState();
    saveAcademyState();
    updateHubProgress();
    if (intro) intro.hidden = true;
    if (app) app.hidden = true;
    if (mathHub) mathHub.hidden = true;
    if (novaTutorHub) novaTutorHub.hidden = true;
    hideCurriculumViews();
    if (learningHub) learningHub.hidden = false;
    renderCurriculumHome();
    document.body.classList.remove('content-focus');
    resetViewScroll(learningHub);
  }

  function showMathHubView() {
    if (!commercialAccessGranted) {
      showCommercialGate('Activa el plan familiar para explorar Matemáticas.');
      return;
    }
    closeNavigationOverlays();
    saveGameState();
    saveNotebookState();
    saveAcademyState();
    updateHubProgress();
    if (intro) intro.hidden = true;
    if (app) app.hidden = true;
    if (learningHub) learningHub.hidden = true;
    if (novaTutorHub) novaTutorHub.hidden = true;
    hideCurriculumViews();
    if (mathHub) mathHub.hidden = false;
    document.body.classList.remove('content-focus');
    resetViewScroll(mathHub);
  }

  function showNovaTutorView() {
    if (!commercialAccessGranted) {
      showCommercialGate('Activa el plan familiar para preguntarle a NOVA.');
      return;
    }

    closeNavigationOverlays();
    saveGameState();
    saveNotebookState();
    saveAcademyState();

    if (intro) intro.hidden = true;
    if (app) app.hidden = true;
    if (learningHub) learningHub.hidden = true;
    if (mathHub) mathHub.hidden = true;
    hideCurriculumViews();
    if (novaTutorHub) novaTutorHub.hidden = false;

    renderGeneralTutorConversation();
    document.body.classList.remove('content-focus');
    resetViewScroll(novaTutorHub);

    setTimeout(() => {
      novaGeneralInput?.focus({ preventScroll: true });
    }, 80);
  }

  function showAtlasView({ respectIntro = true } = {}) {
    if (!commercialAccessGranted) {
      showCommercialGate('Activa el plan familiar para entrar al Atlas.');
      return;
    }
    closeNavigationOverlays();
    if (learningHub) learningHub.hidden = true;
    if (mathHub) mathHub.hidden = true;
    if (novaTutorHub) novaTutorHub.hidden = true;
    hideCurriculumViews();
    const introSeen = localStorage.getItem('emilianoIntroSeen') === 'yes';
    if (respectIntro && !introSeen) {
      if (app) app.hidden = true;
      if (intro) {
        intro.hidden = false;
        intro.classList.remove('intro-exit');
      }
      document.body.classList.add('content-focus');
      resetViewScroll(intro);
      return;
    }
    if (intro) intro.hidden = true;
    if (app) app.hidden = false;
    showNormalMissionShell();
    if (gameCompleted) {
      gameArea.hidden = true;
      finalCard.hidden = false;
      checkBtn.hidden = true;
      hintBtn.hidden = true;
    } else {
      renderMission({ restore: true });
    }
    document.body.classList.add('content-focus');
    resetViewScroll(app);
  }

  function showAcademyView() {
    if (!commercialAccessGranted) {
      showCommercialGate('Activa el plan familiar para continuar con las habilidades de división.');
      return;
    }
    if (!gameCompleted && unlockedCount() < missions.length && !testerMode) {
      showMathHubView();
      showToast('Primero completa la etapa “Comprender la división” ✨', 2800);
      return;
    }
    closeNavigationOverlays();
    if (learningHub) learningHub.hidden = true;
    if (mathHub) mathHub.hidden = true;
    if (novaTutorHub) novaTutorHub.hidden = true;
    hideCurriculumViews();
    if (intro) intro.hidden = true;
    if (app) app.hidden = false;
    openNotebookModule();
    document.body.classList.add('content-focus');
    resetViewScroll(app);
  }

  function openSettingsView() {
    if (!commercialAccessGranted) return;
    updatePersonalization();
    updateReviewUi();
    settingsModal.hidden = false;
    document.body.classList.add('modal-open');
    const card = settingsModal.querySelector('.modal-card');
    if (card) card.scrollTop = 0;
  }
  function setAuthMode(mode = 'signup') {
    authMode = mode === 'login' ? 'login' : 'signup';
    const signingUp = authMode === 'signup';
    signupTabBtn?.classList.toggle('active', signingUp);
    loginTabBtn?.classList.toggle('active', !signingUp);
    signupTabBtn?.setAttribute('aria-selected', String(signingUp));
    loginTabBtn?.setAttribute('aria-selected', String(!signingUp));
    if (childNameField) childNameField.hidden = !signingUp;
    if (childNameInput) childNameInput.required = signingUp;
    if (parentPasswordInput) parentPasswordInput.autocomplete = signingUp ? 'new-password' : 'current-password';
    if (authSubmitBtn) authSubmitBtn.textContent = signingUp ? 'Crear cuenta familiar' : 'Iniciar sesión';
    setAuthStatus('');
  }

  function showAccountStage(stage = 'auth') {
    if (accessGate) accessGate.dataset.stage = stage;
    if (accountLoadingView) accountLoadingView.hidden = stage !== 'loading';
    if (authView) authView.hidden = stage !== 'auth';
    if (childSetupView) childSetupView.hidden = stage !== 'child';
    if (subscriberView) subscriberView.hidden = stage !== 'subscriber';
    updatePersonalization();
  }

  function setAccountLoadingState({
    title = 'Preparando tu espacio de aprendizaje…',
    text = 'Estamos dejando todo listo para continuar donde quedaste.',
    error = false
  } = {}) {
    if (accountLoadingTitle) accountLoadingTitle.textContent = title;
    if (accountLoadingText) accountLoadingText.textContent = text;
    if (accountLoadingView) {
      accountLoadingView.classList.toggle('is-error', Boolean(error));
      accountLoadingView.setAttribute('aria-busy', String(!error));
    }
    if (accountLoadingActions) accountLoadingActions.hidden = !error;
  }

  function grantCommercialAccess(reason = 'subscription') {
    commercialAccessGranted = true;

    // El acceso de revisión es siempre temporal y nunca debe alterar el progreso real.
    if (reason === 'owner') {
      sessionStorage.setItem(OWNER_DEMO_KEY, 'yes');
      activateTesterMode();
    }

    updatePersonalization();
    updateReviewUi();
    if (paymentPanel) paymentPanel.hidden = true;
    if (accessGate) accessGate.hidden = true;
    document.body.classList.remove('access-locked');
    if (learningHub && app?.hidden) learningHub.hidden = false;
    if (mathHub) mathHub.hidden = true;
    if (novaTutorHub) novaTutorHub.hidden = true;
    updateHubProgress();

    if (reason === 'owner') {
      setSubscriptionSettings('Revisión para adultos activa.');
    } else {
      setSubscriptionSettings('Plan activo ✅');
    }
  }

  function showCommercialGate(message = '') {
    commercialAccessGranted = false;
    if (accessGate) accessGate.hidden = false;
    if (learningHub) learningHub.hidden = true;
    if (mathHub) mathHub.hidden = true;
    if (novaTutorHub) novaTutorHub.hidden = true;
    hideCurriculumViews();
    if (intro) intro.hidden = true;
    if (app) app.hidden = true;
    document.body.classList.add('access-locked');
    updatePersonalization();
    updateReviewUi();
    if (message) setAccessStatus(message);
  }

  function storedSubscription() {
    return readLocalJson(SUBSCRIPTION_KEY) || {};
  }

  function currentAuthHeaders(extra = {}) {
    const token = currentSession?.access_token;
    return token ? { ...extra, Authorization: `Bearer ${token}` } : extra;
  }

  function currentSubscriptionPriceLabel() {
    const amount = Number(subscriptionConfig.amount);
    if (!Number.isFinite(amount) || amount <= 0) return '';
    return subscriptionConfig.formattedAmount || formatCop(amount);
  }

  function renderSubscriptionPrice() {
    const price = currentSubscriptionPriceLabel();
    const currency = subscriptionConfig.currency || 'COP';

    if (subscriptionPrice) {
      subscriptionPrice.innerHTML = price
        ? `${price} <small>${currency} / mes</small>`
        : '<span class="price-loading">Precio no disponible</span>';
    }

    if (subscribePriceText) {
      subscribePriceText.textContent = price ? `${price} / mes` : 'Precio no disponible';
    }

    if (mpSubmitPriceText) {
      mpSubmitPriceText.textContent = price ? `${price} / mes` : 'Precio no disponible';
    }
  }

  async function loadPublicConfig() {
    try {
      const res = await fetch('/api/public-config', { headers: { Accept: 'application/json' }, cache: 'no-store' });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'No fue posible cargar la configuración.');

      subscriptionConfig = {
        ...subscriptionConfig,
        ...(data.subscription || {})
      };

      if (data.supabase?.url && data.supabase?.publishableKey && window.supabase?.createClient) {
        supabaseClient = window.supabase.createClient(
          data.supabase.url,
          data.supabase.publishableKey,
          {
            auth: {
              persistSession: true,
              autoRefreshToken: true,
              detectSessionInUrl: true
            }
          }
        );
      }
    } catch (error) {
      console.error('public config error', error);
      setAuthStatus('No pudimos iniciar la cuenta en este momento. Intenta de nuevo en unos minutos.', 'error');
    }

    renderSubscriptionPrice();
  }

  function setPaymentBusy(busy, message = '') {
    mercadoPagoSubmitting = Boolean(busy);
    if (mpSubmitBtn) mpSubmitBtn.disabled = Boolean(busy) || !mercadoPagoFormReady;
    if (closePaymentPanelBtn) closePaymentPanelBtn.disabled = Boolean(busy);
    if (paymentProgress) {
      if (busy) paymentProgress.removeAttribute('value');
      else paymentProgress.setAttribute('value', '0');
    }
    if (message) setAccessStatus(message, busy ? 'loading' : 'info');
  }

  function fillPaymentAccountEmail() {
    if (mpCardholderEmail) mpCardholderEmail.value = currentUser?.email || '';
  }

  function paymentErrorMessage(data = {}) {
    const raw = String(data?.error || '').toLowerCase();
    if (raw.includes('insufficient') || raw.includes('fondos') || raw.includes('saldo')) return 'No hay fondos suficientes en este medio de pago. Puedes intentar con otra tarjeta.';
    if (raw.includes('rejected') || raw.includes('rechaz')) return 'El banco no autorizó el pago. Prueba con otra tarjeta o revisa con tu banco.';
    if (raw.includes('expired') || raw.includes('venc')) return 'Revisa la fecha de vencimiento de la tarjeta.';
    if (raw.includes('security') || raw.includes('cvv')) return 'Revisa el código de seguridad de la tarjeta.';
    return 'No pudimos autorizar el pago. Revisa los datos o intenta con otra tarjeta.';
  }

  async function submitAuthorizedSubscription(cardData = {}) {
    if (mercadoPagoSubmitting) return;
    const token = String(cardData?.token || '').trim();
    if (!token) {
      setAccessStatus('No fue posible proteger los datos de la tarjeta. Revisa los campos e intenta otra vez.', 'error');
      return;
    }
    if (!currentSession?.access_token || !currentUser || !activeChild) {
      setAccessStatus('Tu sesión ya no está disponible. Inicia sesión de nuevo.', 'error');
      return;
    }

    setPaymentBusy(true, 'Activando tu plan…');

    try {
      const res = await fetch('/api/subscription-create', {
        method: 'POST',
        headers: currentAuthHeaders({ 'Content-Type': 'application/json', Accept: 'application/json' }),
        body: JSON.stringify({ childId: activeChild.id, cardTokenId: token })
      });
      const data = await res.json().catch(() => ({}));

      if (res.status === 409 && data.active) {
        currentSubscriptionInfo = normalizeSubscriptionInfo(data);
        writeLocalJson(SUBSCRIPTION_KEY, {
          id: currentSubscriptionInfo.id,
          status: currentSubscriptionInfo.status,
          active: true,
          renews: currentSubscriptionInfo.renews,
          accessUntil: currentSubscriptionInfo.accessUntil,
          email: currentUser.email,
          checkedAt: Date.now()
        });
        grantCommercialAccess('subscription');
        updateSubscriptionSummary(currentSubscriptionInfo);
        return;
      }

      if (!res.ok) throw new Error(paymentErrorMessage(data));

      currentSubscriptionInfo = normalizeSubscriptionInfo(data);
      writeLocalJson(SUBSCRIPTION_KEY, {
        id: currentSubscriptionInfo.id,
        status: currentSubscriptionInfo.status,
        active: currentSubscriptionInfo.active,
        renews: currentSubscriptionInfo.renews,
        accessUntil: currentSubscriptionInfo.accessUntil,
        nextPaymentDate: currentSubscriptionInfo.nextPaymentDate,
        email: currentUser.email,
        createdAt: Date.now()
      });

      if (currentSubscriptionInfo.active || currentSubscriptionInfo.status === 'authorized') {
        setAccessStatus('¡Plan activo! ✨ Preparando Aprende con NOVA…', 'success');
        grantCommercialAccess('subscription');
        updateSubscriptionSummary(currentSubscriptionInfo);
        return;
      }

      if (verifySubscriptionBtn) verifySubscriptionBtn.hidden = false;
      setAccessStatus('El pago está siendo confirmado. Esto puede tardar unos segundos.', 'warning');
      await verifySubscription({ silent: false });
    } catch (error) {
      console.error('authorized subscription error', error);
      // El CardToken es de un solo uso. Limpiamos el token oculto para que
      // MercadoPago.js genere uno nuevo en el siguiente intento.
      const hiddenToken = document.querySelector('input[name="MPHiddenInputToken"]');
      if (hiddenToken) hiddenToken.value = '';
      setAccessStatus(error.message || 'No fue posible activar la suscripción.', 'error');
    } finally {
      setPaymentBusy(false);
    }
  }

  async function initializeMercadoPagoCardForm() {
    if (mercadoPagoFormReady && mercadoPagoCardForm) return mercadoPagoCardForm;
    if (mercadoPagoInitPromise) return mercadoPagoInitPromise;

    mercadoPagoInitPromise = (async () => {
      if (!subscriptionConfig.publicKey) {
        throw new Error('El pago no está disponible en este momento.');
      }
      const configuredAmount = Number(subscriptionConfig.amount);
      if (!Number.isFinite(configuredAmount) || configuredAmount <= 0) {
        throw new Error('El precio del plan no está disponible en este momento.');
      }
      if (!window.MercadoPago) {
        throw new Error('No pudimos cargar el formulario de pago. Revisa tu conexión e intenta nuevamente.');
      }
      if (mercadoPagoFormInitializing) return mercadoPagoCardForm;
      mercadoPagoFormInitializing = true;
      fillPaymentAccountEmail();

      mercadoPagoClient = new window.MercadoPago(subscriptionConfig.publicKey, { locale: 'es-CO' });
      mercadoPagoCardForm = mercadoPagoClient.cardForm({
        amount: String(configuredAmount),
        iframe: true,
        form: {
          id: 'form-checkout',
          cardNumber: { id: 'form-checkout__cardNumber', placeholder: 'Número de tarjeta' },
          expirationDate: { id: 'form-checkout__expirationDate', placeholder: 'MM/AA' },
          securityCode: { id: 'form-checkout__securityCode', placeholder: 'CVV' },
          cardholderName: { id: 'form-checkout__cardholderName', placeholder: 'Nombre del titular' },
          issuer: { id: 'form-checkout__issuer' },
          installments: { id: 'form-checkout__installments' },
          identificationType: { id: 'form-checkout__identificationType' },
          identificationNumber: { id: 'form-checkout__identificationNumber', placeholder: 'Documento' },
          cardholderEmail: { id: 'form-checkout__cardholderEmail', placeholder: 'correo@ejemplo.com' }
        },
        callbacks: {
          onFormMounted: error => {
            mercadoPagoFormInitializing = false;
            if (error) {
              mercadoPagoFormReady = false;
              console.error('Mercado Pago CardForm mount error', error);
              setAccessStatus('No pudimos cargar el formulario de pago. Intenta nuevamente.', 'error');
              return;
            }
            mercadoPagoFormReady = true;
            setPaymentBusy(false);
            setAccessStatus('Todo listo. Completa los datos para activar el plan.', 'info');
          },
          onSubmit: event => {
            event.preventDefault();
            if (mercadoPagoSubmitting) return;
            const cardData = mercadoPagoCardForm.getCardFormData();
            submitAuthorizedSubscription(cardData);
          },
          onFetching: () => {
            if (paymentProgress) paymentProgress.removeAttribute('value');
            return () => paymentProgress?.setAttribute('value', '0');
          }
        }
      });
      return mercadoPagoCardForm;
    })().finally(() => {
      mercadoPagoFormInitializing = false;
      mercadoPagoInitPromise = null;
    });

    return mercadoPagoInitPromise;
  }

  async function openPaymentPanel() {
    if (!subscriptionConfig.paymentConfigured) {
      setAccessStatus('El pago no está disponible en este momento. Intenta nuevamente más tarde.', 'warning');
      return;
    }
    if (!paymentPanel) return;
    paymentPanel.hidden = false;
    fillPaymentAccountEmail();
    if (subscribeBtn) subscribeBtn.hidden = true;
    setAccessStatus('Preparando el pago seguro…', 'loading');
    try {
      await initializeMercadoPagoCardForm();
      paymentPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (error) {
      console.error('Mercado Pago initialization error', error);
      setAccessStatus('No pudimos abrir el pago seguro. Revisa tu conexión e intenta nuevamente.', 'error');
      if (subscribeBtn) subscribeBtn.hidden = false;
      paymentPanel.hidden = true;
    }
  }

  function closePaymentPanel() {
    if (mercadoPagoSubmitting) return;
    if (paymentPanel) paymentPanel.hidden = true;
    if (subscribeBtn) subscribeBtn.hidden = false;
    setAccessStatus('Puedes activar el plan mensual cuando quieras.', 'info');
  }

  function captureLocalProgress() {
    return {
      atlas: readLocalJson(CLOUD_PROGRESS_KEYS.atlas) || {},
      notebook: readLocalJson(CLOUD_PROGRESS_KEYS.notebook) || {},
      academy: readLocalJson(CLOUD_PROGRESS_KEYS.academy) || {}
    };
  }

  function jsonHasContent(value) {
    return Boolean(value && typeof value === 'object' && Object.keys(value).length);
  }

  function progressHasContent(progress) {
    return jsonHasContent(progress?.atlas) || jsonHasContent(progress?.notebook) || jsonHasContent(progress?.academy);
  }

  function progressLatestTimestamp(progress) {
    return Math.max(
      Number(progress?.atlas?.savedAt || 0),
      Number(progress?.notebook?.savedAt || 0),
      Number(progress?.academy?.savedAt || 0)
    );
  }

  function sameProgress(local, remote) {
    try {
      return JSON.stringify(local.atlas || {}) === JSON.stringify(remote.atlas_state || {})
        && JSON.stringify(local.notebook || {}) === JSON.stringify(remote.notebook_state || {})
        && JSON.stringify(local.academy || {}) === JSON.stringify(remote.academy_state || {});
    } catch {
      return false;
    }
  }

  function applyRemoteProgress(remote) {
    if (remote?.atlas_state && typeof remote.atlas_state === 'object') writeLocalJson(CLOUD_PROGRESS_KEYS.atlas, remote.atlas_state);
    if (remote?.notebook_state && typeof remote.notebook_state === 'object') writeLocalJson(CLOUD_PROGRESS_KEYS.notebook, remote.notebook_state);
    if (remote?.academy_state && typeof remote.academy_state === 'object') writeLocalJson(CLOUD_PROGRESS_KEYS.academy, remote.academy_state);
  }

  async function hydrateCloudProgress() {
    if (!supabaseClient || !currentUser || !activeChild) return { ready: false };

    const { data: remote, error } = await supabaseClient
      .from('child_progress')
      .select('child_id, atlas_state, notebook_state, academy_state, updated_at')
      .eq('child_id', activeChild.id)
      .maybeSingle();

    if (error) throw error;

    const local = captureLocalProgress();
    const localHas = progressHasContent(local);

    if (!remote) {
      const { error: insertError } = await supabaseClient
        .from('child_progress')
        .insert({
          child_id: activeChild.id,
          atlas_state: local.atlas,
          notebook_state: local.notebook,
          academy_state: local.academy,
          last_device: String(navigator.userAgent || '').slice(0, 240)
        });
      if (insertError) throw insertError;
      cloudReady = true;
      return { ready: true, migratedLocal: localHas };
    }

    if (sameProgress(local, remote)) {
      cloudReady = true;
      return { ready: true };
    }

    const remoteHas = jsonHasContent(remote.atlas_state) || jsonHasContent(remote.notebook_state) || jsonHasContent(remote.academy_state);
    const remoteTimestamp = Date.parse(remote.updated_at || '') || 0;
    const localTimestamp = progressLatestTimestamp(local);

    // Si este dispositivo tiene progreso y es claramente más reciente, lo subimos.
    if (localHas && localTimestamp > remoteTimestamp) {
      const { error: updateError } = await supabaseClient
        .from('child_progress')
        .update({
          atlas_state: local.atlas,
          notebook_state: local.notebook,
          academy_state: local.academy,
          last_device: String(navigator.userAgent || '').slice(0, 240)
        })
        .eq('child_id', activeChild.id);
      if (updateError) throw updateError;
      cloudReady = true;
      return { ready: true, uploadedLocal: true };
    }

    // Si Supabase ya tiene progreso (por ejemplo desde otra tablet), lo cargamos.
    if (remoteHas) {
      applyRemoteProgress(remote);
      cloudReady = true;
      return { ready: true, reloadNeeded: true };
    }

    // Nube vacía + local disponible: migración inicial del progreso existente.
    if (localHas) {
      const { error: updateError } = await supabaseClient
        .from('child_progress')
        .update({
          atlas_state: local.atlas,
          notebook_state: local.notebook,
          academy_state: local.academy,
          last_device: String(navigator.userAgent || '').slice(0, 240)
        })
        .eq('child_id', activeChild.id);
      if (updateError) throw updateError;
    }

    cloudReady = true;
    return { ready: true };
  }

  async function syncProgressToCloud() {
    if (!cloudReady || !supabaseClient || !currentUser || !activeChild || testerMode) return false;
    if (cloudSyncInFlight) {
      cloudSyncQueued = true;
      return false;
    }

    cloudSyncInFlight = true;
    try {
      const local = captureLocalProgress();
      const { error } = await supabaseClient
        .from('child_progress')
        .upsert({
          child_id: activeChild.id,
          atlas_state: local.atlas,
          notebook_state: local.notebook,
          academy_state: local.academy,
          last_device: String(navigator.userAgent || '').slice(0, 240)
        }, { onConflict: 'child_id' });
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('cloud sync error', error);
      return false;
    } finally {
      cloudSyncInFlight = false;
      if (cloudSyncQueued) {
        cloudSyncQueued = false;
        scheduleCloudSync(200);
      }
    }
  }

  function scheduleCloudSync(delay = 900) {
    if (!cloudReady || testerMode) return;
    clearTimeout(cloudSyncTimer);
    cloudSyncTimer = setTimeout(() => { syncProgressToCloud(); }, delay);
  }

  async function createChildProfile(name) {
    if (!supabaseClient || !currentUser) throw new Error('Debes iniciar sesión primero.');
    const cleaned = String(name || '').trim().replace(/\s+/g, ' ');
    if (cleaned.length < 2) throw new Error('Escribe un nombre de al menos 2 caracteres.');

    const { data, error } = await supabaseClient
      .from('children')
      .insert({ parent_id: currentUser.id, name: cleaned })
      .select('id, name, parent_id, is_active, created_at')
      .single();
    if (error) throw error;

    activeChild = data;
    writeLocalJson(FAMILY_PROFILE_KEY, {
      email: currentUser.email,
      childName: activeChild.name,
      childId: activeChild.id,
      updatedAt: Date.now()
    });
    updatePersonalization();
    return data;
  }

  async function loadOrCreateChild() {
    if (!supabaseClient || !currentUser) return null;

    const { data, error } = await supabaseClient
      .from('children')
      .select('id, name, parent_id, is_active, created_at')
      .eq('parent_id', currentUser.id)
      .eq('is_active', true)
      .order('created_at', { ascending: true })
      .limit(1)
      .maybeSingle();

    if (error) throw error;
    if (data) {
      activeChild = data;
      writeLocalJson(FAMILY_PROFILE_KEY, {
        email: currentUser.email,
        childName: data.name,
        childId: data.id,
        updatedAt: Date.now()
      });
      updatePersonalization();
      return data;
    }

    const pending = familyProfile();
    if (pending.email === currentUser.email && String(pending.childName || '').trim().length >= 2) {
      return createChildProfile(pending.childName);
    }

    activeChild = null;
    updatePersonalization();
    return null;
  }

  async function verifySubscription({ silent = false } = {}) {
    if (!currentSession?.access_token) {
      if (!silent) setAccessStatus('Inicia sesión para revisar tu acceso.', 'warning');
      return false;
    }

    if (!silent) setAccessStatus('Revisando tu acceso…', 'loading');
    if (verifySubscriptionBtn) verifySubscriptionBtn.disabled = true;

    try {
      const res = await fetch('/api/subscription-status', {
        headers: currentAuthHeaders({ Accept: 'application/json' }),
        cache: 'no-store'
      });
      const data = await res.json().catch(() => ({}));

      if (res.status === 404) {
        currentSubscriptionInfo = null;
        if (verifySubscriptionBtn) verifySubscriptionBtn.hidden = true;
        updateSubscriptionSummary(null);
        if (!silent) setAccessStatus('Tu cuenta está lista. Activa el plan familiar para comenzar.', 'info');
        return false;
      }
      if (!res.ok) throw new Error(data.error || 'No pudimos verificar el pago.');

      currentSubscriptionInfo = normalizeSubscriptionInfo(data);
      writeLocalJson(SUBSCRIPTION_KEY, {
        id: currentSubscriptionInfo.id,
        status: currentSubscriptionInfo.status,
        active: currentSubscriptionInfo.active,
        renews: currentSubscriptionInfo.renews,
        accessUntil: currentSubscriptionInfo.accessUntil,
        nextPaymentDate: currentSubscriptionInfo.nextPaymentDate,
        email: currentUser.email,
        checkedAt: Date.now()
      });
      updateSubscriptionSummary(currentSubscriptionInfo);

      if (currentSubscriptionInfo.active) {
        if (currentSubscriptionInfo.status === 'canceled') {
          if (!silent) {
            const until = formatPlanDate(currentSubscriptionInfo.accessUntil);
            setAccessStatus(
              until !== '—'
                ? `Tu renovación está cancelada. Conservas acceso hasta ${until}.`
                : 'Tu renovación está cancelada. Conservas el acceso del periodo ya pagado.',
              'success'
            );
          }
        } else if (!silent) {
          setAccessStatus('¡Plan activo! ✨ Todo listo para aprender con NOVA.', 'success');
        }
        grantCommercialAccess('subscription');
        updateSubscriptionSummary(currentSubscriptionInfo);
        return true;
      }

      if (verifySubscriptionBtn) verifySubscriptionBtn.hidden = false;
      const labels = {
        pending: 'El pago todavía está pendiente. Puedes actualizar el acceso en unos segundos.',
        paused: 'El plan está pausado.',
        canceled: 'El plan está cancelado y el periodo de acceso ya terminó.'
      };
      const text = labels[currentSubscriptionInfo.status] || 'El plan todavía no está activo.';
      if (!silent) setAccessStatus(text, 'warning');
      updateSubscriptionSummary(currentSubscriptionInfo);
      return false;
    } catch (error) {
      if (!silent) setAccessStatus('No pudimos revisar el acceso en este momento. Intenta nuevamente.', 'error');
      setSubscriptionSettings('No pudimos revisar el plan.');
      // null significa “no pudimos verificar”. Nunca debe convertirse en una invitación a pagar.
      return null;
    } finally {
      if (verifySubscriptionBtn) verifySubscriptionBtn.disabled = false;
    }
  }

  async function openPlanManagement() {
    if (!currentUser || isOwnerReviewSession()) return;

    const previous = currentSubscriptionInfo;
    await verifySubscription({ silent: true });
    if (!currentSubscriptionInfo && previous) currentSubscriptionInfo = previous;

    if (!currentSubscriptionInfo) {
      showToast('Aún no hay un plan para administrar.');
      return;
    }

    updatePlanManagementUi(currentSubscriptionInfo);
    showPlanOverview();
    if (settingsModal) settingsModal.hidden = true;
    if (planManagementModal) planManagementModal.hidden = false;
    document.body.classList.add('modal-open');
    const card = planManagementModal?.querySelector('.modal-card');
    if (card) card.scrollTop = 0;
  }

  function closePlanManagement() {
    if (subscriptionCancelBusy) return;
    if (planManagementModal) planManagementModal.hidden = true;
    document.body.classList.remove('modal-open');
    showPlanOverview();
  }

  function setCancelPlanBusy(busy, message = '') {
    subscriptionCancelBusy = Boolean(busy);
    if (confirmCancelPlanBtn) {
      confirmCancelPlanBtn.disabled = Boolean(busy);
      confirmCancelPlanBtn.textContent = busy ? 'Cancelando…' : 'Sí, cancelar renovación';
    }
    if (keepPlanBtn) keepPlanBtn.disabled = Boolean(busy);
    if (closePlanManagementBtn) closePlanManagementBtn.disabled = Boolean(busy);
    if (planCancelStatus) planCancelStatus.textContent = message;
  }

  async function cancelCurrentSubscription() {
    if (subscriptionCancelBusy) return;
    if (!currentSession?.access_token || !currentUser) {
      if (planCancelStatus) planCancelStatus.textContent = 'Tu sesión terminó. Inicia sesión nuevamente.';
      return;
    }

    setCancelPlanBusy(true, 'Cancelando la renovación de forma segura…');

    try {
      const res = await fetch('/api/subscription-cancel', {
        method: 'POST',
        headers: currentAuthHeaders({ 'Content-Type': 'application/json', Accept: 'application/json' }),
        body: JSON.stringify({ confirm: true })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'No pudimos cancelar la renovación.');

      currentSubscriptionInfo = normalizeSubscriptionInfo({
        ...currentSubscriptionInfo,
        ...data,
        status: 'canceled',
        renews: false
      });

      writeLocalJson(SUBSCRIPTION_KEY, {
        id: currentSubscriptionInfo.id,
        status: 'canceled',
        active: currentSubscriptionInfo.active,
        renews: false,
        accessUntil: currentSubscriptionInfo.accessUntil,
        email: currentUser.email,
        checkedAt: Date.now()
      });

      updateSubscriptionSummary(currentSubscriptionInfo);
      updatePlanManagementUi(currentSubscriptionInfo);
      showPlanOverview();
      showToast('Renovación cancelada. No habrá nuevos cobros.');

      if (!currentSubscriptionInfo.active) {
        closePlanManagement();
        showCommercialGate('Tu plan fue cancelado. Puedes activar uno nuevo cuando quieras.');
      }
    } catch (error) {
      setCancelPlanBusy(false, error.message || 'No pudimos cancelar la renovación. Intenta nuevamente.');
      return;
    }

    setCancelPlanBusy(false, '');
  }

  async function handleAuthenticatedFamily() {
    if (!currentUser) return;

    // Nunca enseñamos el checkout hasta saber con certeza si esta cuenta necesita pagar.
    showCommercialGate();
    showAccountStage('loading');
    setAccessStatus('');
    setAccountLoadingState();

    try {
      const child = await loadOrCreateChild();
      if (!child) {
        showAccountStage('child');
        setAccessStatus('');
        return;
      }

      const hydration = await hydrateCloudProgress();
      if (hydration.reloadNeeded) {
        setAccountLoadingState({
          title: 'Recuperando tu progreso…',
          text: 'Encontramos tu avance guardado. Ya casi está listo tu espacio de aprendizaje.'
        });
        setTimeout(() => window.location.reload(), 250);
        return;
      }

      if (subscriptionConfig.enabled === false) {
        grantCommercialAccess('owner');
        setSubscriptionSettings('Acceso habilitado para administración.');
        return;
      }

      const accessState = await verifySubscription({ silent: true });

      if (accessState === true) {
        // verifySubscription ya concedió el acceso. No se muestra ninguna pantalla intermedia de cobro.
        return;
      }

      if (accessState === null) {
        // Si no pudimos verificar el plan, protegemos al cliente de un posible doble cobro.
        showAccountStage('loading');
        setAccountLoadingState({
          title: 'No pudimos abrir tu cuenta',
          text: 'Tu plan no cambió. Revisa tu conexión e inténtalo nuevamente.',
          error: true
        });
        return;
      }

      // Solo llegamos aquí cuando el servidor confirmó que no existe acceso vigente.
      showCommercialGate();
      showAccountStage('subscriber');
      const returned = new URLSearchParams(window.location.search).get('subscription') === 'return';
      setAccessStatus(
        returned
          ? 'Estamos terminando de confirmar tu pago. Puedes actualizar el acceso en unos segundos.'
          : '',
        returned ? 'info' : ''
      );
      if (verifySubscriptionBtn) verifySubscriptionBtn.hidden = !returned;
    } catch (error) {
      console.error('family initialization error', error);
      showCommercialGate();
      showAccountStage('loading');
      setAccessStatus('');
      setAccountLoadingState({
        title: 'No pudimos abrir tu cuenta',
        text: 'No hicimos ningún cambio. Intenta nuevamente en unos segundos.',
        error: true
      });
    }
  }

  async function handleAuthSession(session) {
    currentSession = session || null;
    currentUser = session?.user || null;
    cloudReady = false;

    if (!currentUser) {
      familyLoadPromise = null;
      activeChild = null;
      showCommercialGate();
      showAccountStage('auth');
      updatePersonalization();
      setAuthStatus('');
      return;
    }

    updatePersonalization();
    if (familyLoadPromise) return familyLoadPromise;
    familyLoadPromise = handleAuthenticatedFamily().finally(() => { familyLoadPromise = null; });
    return familyLoadPromise;
  }

  function clearLocalFamilyState() {
    [
      CLOUD_PROGRESS_KEYS.atlas,
      CLOUD_PROGRESS_KEYS.notebook,
      CLOUD_PROGRESS_KEYS.academy,
      'emilianoMission',
      'emilianoUnlocked',
      'emilianoIntroSeen'
    ].forEach(key => localStorage.removeItem(key));
    localStorage.removeItem(FAMILY_PROFILE_KEY);
    localStorage.removeItem(SUBSCRIPTION_KEY);
  }

  async function exitReviewToAccess() {
    // Si la revisión había saltado entre ejercicios, primero devolvemos el snapshot
    // y después limpiamos la sesión local para que el siguiente usuario inicie desde cero.
    try { restoreTesterSnapshot(); } catch {}
    testerMode = false;
    testerUnlocked = false;
    testerSnapshot = null;
    sessionStorage.removeItem(OWNER_DEMO_KEY);
    clearGeneralTutorSession();
    commercialAccessGranted = false;
    cloudReady = false;
    activeChild = null;
    currentUser = null;
    currentSession = null;
    clearLocalFamilyState();
    updateReviewUi();

    try {
      if (supabaseClient) await supabaseClient.auth.signOut();
    } catch {}

    const cleanUrl = `${window.location.origin}${window.location.pathname}`;
    window.location.replace(cleanUrl);
  }

  async function signOutFamily() {
    // Si alguien pulsa salir durante una revisión, debe volver de verdad al acceso.
    if (isOwnerReviewSession()) {
      await exitReviewToAccess();
      return;
    }

    try {
      await syncProgressToCloud();
    } catch {}

    if (testerMode) {
      try { restoreTesterSnapshot(); } catch {}
      testerMode = false;
      testerUnlocked = false;
      testerSnapshot = null;
    }

    sessionStorage.removeItem(OWNER_DEMO_KEY);
    clearGeneralTutorSession();
    cloudReady = false;
    activeChild = null;
    currentUser = null;
    currentSession = null;
    clearLocalFamilyState();
    updateReviewUi();

    if (supabaseClient) await supabaseClient.auth.signOut();
    const cleanUrl = `${window.location.origin}${window.location.pathname}`;
    window.location.replace(cleanUrl);
  }

  async function initializeCommercialAccess() {
    updatePersonalization();
    await loadPublicConfig();

    if (sessionStorage.getItem(OWNER_DEMO_KEY) === 'yes') {
      grantCommercialAccess('owner');
      return;
    }

    showCommercialGate();

    if (!supabaseClient) {
      showAccountStage('auth');
      setAuthStatus('El acceso no está disponible en este momento. Intenta nuevamente más tarde.', 'error');
      return;
    }

    supabaseClient.auth.onAuthStateChange((event, session) => {
      if (event === 'TOKEN_REFRESHED') {
        currentSession = session;
        currentUser = session?.user || currentUser;
        return;
      }

      if (event === 'SIGNED_OUT') {
        setTimeout(() => { handleAuthSession(null); }, 0);
        return;
      }

      if (event === 'SIGNED_IN') {
        const incomingUserId = session?.user?.id || null;
        const sameUser = Boolean(
          incomingUserId &&
          currentUser?.id &&
          incomingUserId === currentUser.id
        );

        currentSession = session || currentSession;
        currentUser = session?.user || currentUser;

        // Supabase puede volver a confirmar SIGNED_IN cuando la pestaña recupera
        // el foco. Si es el mismo usuario y ya tiene acceso, no reconstruimos
        // toda la aplicación ni sacamos al niño de la pantalla en la que estaba.
        if (sameUser && commercialAccessGranted) {
          updatePersonalization();
          return;
        }

        setTimeout(() => { handleAuthSession(session); }, 0);
        return;
      }

      if (event === 'USER_UPDATED') {
        currentSession = session || currentSession;
        currentUser = session?.user || currentUser;

        if (commercialAccessGranted) {
          updatePersonalization();
          return;
        }

        setTimeout(() => { handleAuthSession(session); }, 0);
      }
    });

    const { data, error } = await supabaseClient.auth.getSession();
    if (error) {
      setAuthStatus('No pudimos recuperar la sesión. Intenta iniciar sesión.', 'error');
      showAccountStage('auth');
      return;
    }

    await handleAuthSession(data.session);
  }

  const NOTEBOOK_SAVE_KEY = 'emilianoNotebookV1';
  const TESTER_PIN = '123456';
  let testerMode = false;
  let testerUnlocked = false;
  let testerSnapshot = null;

  const notebookLessons = [
    { dividend:84, divisor:4, animal:'🦥', title:'Las huellas del perezoso', story:'El perezoso guardó un código en tu cuaderno. NOVA te enseñará dónde va cada número.', focus:'Aprender el ciclo completo con dos cifras.' },
    { dividend:96, divisor:3, animal:'🐬', title:'El código del delfín', story:'El delfín rosado dejó un segundo código. Esta vez repetiremos el mismo orden para que empiece a sentirse familiar.', focus:'Repetir DIVIDO → MULTIPLICO → RESTO → BAJO.' },
    { dividend:68, divisor:2, animal:'🦎', title:'La ruta del gecko', story:'El gecko quiere comprobar que puedes mantener cada número en su lugar mientras avanzas.', focus:'Ubicación correcta del cociente y las restas.' },
    { dividend:125, divisor:5, animal:'🦆', title:'El rastro del ornitorrinco', story:'Ahora aparece una división de tres cifras. El procedimiento no cambia: lo repetimos una vez más.', focus:'Trabajar con tres cifras.' },
    { dividend:248, divisor:4, animal:'🦦', title:'Las piedras de la nutria', story:'La nutria encontró una división más larga. Tu cuaderno será el mapa para no perder ningún paso.', focus:'Repetir el ciclo varias veces.' },
    { dividend:156, divisor:12, animal:'🦈', title:'El primer divisor de dos cifras', story:'El tiburón duende trae un nuevo reto: ahora el divisor tiene dos cifras, pero la lógica sigue siendo la misma.', focus:'Divisor de dos cifras.' },
    { dividend:144, divisor:12, animal:'🦀', title:'La señal del cangrejo yeti', story:'El cangrejo yeti quiere que compruebes que también puedes escribir divisiones exactas con divisores de dos cifras.', focus:'Consolidar divisor de dos cifras.' },
    { dividend:3225, divisor:25, animal:'🔬', title:'El desafío del tardígrado', story:'Llegó un código especial: 3225 dividido entre 25. Lo haremos despacio y completamente en el cuaderno.', focus:'Procedimiento largo completo.' },
    { dividend:17, divisor:5, animal:'🦊', title:'Cuando queda algo', story:'El fénec encontró un reparto que no termina exactamente. NOVA te mostrará cómo registrar lo que sobra.', focus:'Introducción al residuo.', allowRemainder:true },
    { dividend:43, divisor:4, animal:'🐧', title:'El residuo del pingüino', story:'Otro código deja una cantidad sin repartir. Vamos a practicar cómo reconocerla y escribirla.', focus:'Consolidar residuo.', allowRemainder:true },
    { dividend:408, divisor:4, animal:'🐙', title:'El cero del pulpo Dumbo', story:'Esta división es especial porque aparece un cero dentro del procedimiento. Ese cero también tiene un lugar en el cociente.', focus:'Aprender cuándo escribir 0 en el cociente.' },
    { dividend:936, divisor:6, animal:'🏆', title:'Código maestro del cuaderno', story:'Último reto del módulo. NOVA seguirá explicando la lógica, pero tú llevarás todo el procedimiento en tu cuaderno.', focus:'Integrar todo el algoritmo.' }
  ];

  let notebookLessonIndex = 0;
  let notebookStepIndex = 0;
  let notebookSteps = [];
  let notebookCompletedLessons = 0;
  let notebookRevealedQuotient = '';
  let notebookJournalLines = [];
  let notebookChatHistory = [];

  const ACADEMY_SAVE_KEY = 'emilianoAcademyV1';

  const academyRoutes = [
    { id:'terms', icon:'🧩', title:'Conozco mi división', goal:'Reconocer dividendo, divisor, cociente y residuo.', skills:['terms'] },
    { id:'fits', icon:'🎯', title:'¿Cuántas veces cabe?', goal:'Encontrar el múltiplo correcto sin pasarse.', skills:['fits','multiply'] },
    { id:'long', icon:'✏️', title:'Divido en mi cuaderno', goal:'Hacer la división a mano siguiendo el ciclo completo.', skills:['fits','multiply','subtract','bring','placement'] },
    { id:'exact', icon:'⚖️', title:'Exacta o inexacta', goal:'Usar el residuo para clasificar una división.', skills:['exact'] },
    { id:'divisors', icon:'🔎', title:'Divisores de un número', goal:'Descubrir qué números dividen exactamente.', skills:['divisors'] },
    { id:'prime', icon:'💎', title:'Primo o compuesto', goal:'Reconocer si un número tiene dos divisores o más.', skills:['prime'] },
    { id:'factors', icon:'🧱', title:'Factores primos', goal:'Descomponer números usando solo factores primos.', skills:['factors'] },
    { id:'problems', icon:'🧠', title:'¿Qué operación necesito?', goal:'Reconocer cuándo un problema necesita división.', skills:['problems'] }
  ];

  const academyChallengeSets = {
    terms: [
      { dividend:125, divisor:5, quotient:25, remainder:0, ask:'¿Cuál es el DIVIDENDO?', answer:'125', choices:['5','25','125','0'],
        explain:'El dividendo es la cantidad que vamos a dividir. En 125 ÷ 5, la cantidad que empieza la operación es 125.' },
      { dividend:125, divisor:5, quotient:25, remainder:0, ask:'¿Cuál es el DIVISOR?', answer:'5', choices:['125','5','25','0'],
        explain:'El divisor indica entre cuánto dividimos. Aquí estamos dividiendo entre 5.' },
      { dividend:125, divisor:5, quotient:25, remainder:0, ask:'¿Cuál es el COCIENTE?', answer:'25', choices:['0','5','25','125'],
        explain:'El cociente es el resultado que construimos arriba o al lado de la división. Aquí es 25.' },
      { dividend:79, divisor:2, quotient:39, remainder:1, ask:'¿Cuál es el RESIDUO?', answer:'1', choices:['2','39','1','79'],
        explain:'El residuo es lo que queda cuando ya no podemos formar otro grupo completo. Aquí queda 1.' },
      { dividend:84, divisor:5, quotient:16, remainder:4, ask:'¿Qué número nos dice ENTRE CUÁNTO estamos dividiendo?', answer:'5', choices:['84','16','5','4'],
        explain:'Ese papel lo cumple el divisor. En 84 ÷ 5, el divisor es 5.' },
      { dividend:63, divisor:3, quotient:21, remainder:0, ask:'¿Qué número muestra CUÁNTO SOBRÓ?', answer:'0', choices:['21','3','63','0'],
        explain:'Lo que sobra se llama residuo. Como quedó 0, esta división es exacta.' }
    ],
    fits: [
      { current:9, divisor:3, answer:3 },
      { current:17, divisor:5, answer:3 },
      { current:30, divisor:7, answer:4 },
      { current:41, divisor:6, answer:6 },
      { current:32, divisor:5, answer:6 },
      { current:68, divisor:9, answer:7 },
      { current:22, divisor:4, answer:5 },
      { current:72, divisor:8, answer:9 }
    ],
    exact: [
      { dividend:63, divisor:3, q:21, r:0, answer:'Exacta' },
      { dividend:79, divisor:2, q:39, r:1, answer:'Inexacta' },
      { dividend:84, divisor:5, q:16, r:4, answer:'Inexacta' },
      { dividend:32, divisor:8, q:4, r:0, answer:'Exacta' },
      { dividend:93, divisor:3, q:31, r:0, answer:'Exacta' },
      { dividend:68, divisor:4, q:17, r:0, answer:'Exacta' }
    ],
    divisors: [
      { n:12, answers:[1,2,3,4,6,12], choices:[1,2,3,4,5,6,8,12] },
      { n:15, answers:[1,3,5,15], choices:[1,2,3,4,5,6,10,15] },
      { n:20, answers:[1,2,4,5,10,20], choices:[1,2,3,4,5,8,10,20] },
      { n:24, answers:[1,2,3,4,6,8,12,24], choices:[1,2,3,4,5,6,8,12,24] },
      { n:39, answers:[1,3,13,39], choices:[1,2,3,6,9,13,19,39] }
    ],
    prime: [
      { n:19, answer:'Primo', divisors:[1,19] },
      { n:16, answer:'Compuesto', divisors:[1,2,4,8,16] },
      { n:37, answer:'Primo', divisors:[1,37] },
      { n:51, answer:'Compuesto', divisors:[1,3,17,51] },
      { n:79, answer:'Primo', divisors:[1,79] },
      { n:26, answer:'Compuesto', divisors:[1,2,13,26] }
    ],
    factors: [
      { n:20, answer:'2 × 2 × 5', choices:['2 × 2 × 5','4 × 5','2 × 10','1 × 20'] },
      { n:12, answer:'2 × 2 × 3', choices:['2 × 2 × 3','3 × 4','2 × 6','1 × 12'] },
      { n:18, answer:'2 × 3 × 3', choices:['2 × 3 × 3','3 × 6','2 × 9','1 × 18'] },
      { n:24, answer:'2 × 2 × 2 × 3', choices:['2 × 2 × 2 × 3','4 × 6','3 × 8','2 × 12'] },
      { n:30, answer:'2 × 3 × 5', choices:['2 × 3 × 5','3 × 10','5 × 6','2 × 15'] }
    ],
    problems: [
      { text:'Un libro tiene 135 páginas. Si leo 5 páginas cada día, ¿cuántos días necesito?', answer:'División', op:'135 ÷ 5 = 27',
        explain:'Conocemos el total, 135, y el tamaño de cada grupo, 5 páginas por día. Buscamos cuántos grupos de 5 caben en 135.' },
      { text:'Hay 321 cajas y cada caja tiene 4 bolsos. ¿Cuántos bolsos hay en total?', answer:'Multiplicación', op:'321 × 4 = 1284',
        explain:'Tenemos 321 grupos de 4 y queremos juntar todos los objetos. Por eso multiplicamos.' },
      { text:'Hay 68 globos para repartir por igual entre 2 niños. ¿Cuántos recibe cada niño?', answer:'División', op:'68 ÷ 2 = 34',
        explain:'Tenemos un total y queremos repartirlo entre 2 grupos iguales. Eso es división.' },
      { text:'27 dulces se reparten entre 3 niños. ¿Cuántos recibe cada uno?', answer:'División', op:'27 ÷ 3 = 9',
        explain:'Buscamos cuánto le corresponde a cada uno de 3 grupos iguales.' },
      { text:'7 cajas tienen 6 lápices cada una. ¿Cuántos lápices hay?', answer:'Multiplicación', op:'7 × 6 = 42',
        explain:'Conocemos cuántos grupos hay y cuánto contiene cada grupo. Queremos el total, así que multiplicamos.' },
      { text:'48 estudiantes forman equipos de 6. ¿Cuántos equipos se forman?', answer:'División', op:'48 ÷ 6 = 8',
        explain:'Conocemos el total y el tamaño de cada equipo. Buscamos cuántos grupos caben.' }
    ]
  };

  let academyState = {
    routeProgress:{},
    stats:{},
    lastRoute:null
  };
  let academyCurrentRoute = null;
  let academyChallengeIndex = 0;
  let academySelected = new Set();
  let academyChatHistory = [];



  function readAcademyState() {
    try {
      const raw = localStorage.getItem(ACADEMY_SAVE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data && typeof data === 'object') {
        academyState.routeProgress = data.routeProgress || {};
        academyState.stats = data.stats || {};
        academyState.lastRoute = data.lastRoute || null;
      }
    } catch {}
  }

  function saveAcademyState() {
    if (testerMode) return;
    try {
      localStorage.setItem(ACADEMY_SAVE_KEY, JSON.stringify({
        routeProgress:academyState.routeProgress,
        stats:academyState.stats,
        lastRoute:academyState.lastRoute,
        savedAt:Date.now()
      }));
    } catch {}
    scheduleCloudSync();
  }

  function recordAcademySkill(skill, correct) {
    if (!skill) return;
    const s = academyState.stats[skill] || {attempts:0, correct:0};
    s.attempts += 1;
    if (correct) s.correct += 1;
    academyState.stats[skill] = s;
    saveAcademyState();
    if (learningProgressModal && !learningProgressModal.hidden) renderParentLearningProgress();
  }

  function skillAccuracy(skill) {
    const s = academyState.stats[skill];
    if (!s || !s.attempts) return null;
    return Math.round((s.correct / s.attempts) * 100);
  }

  function skillStatus(skill) {
    const acc = skillAccuracy(skill);
    if (acc === null) return {label:'Sin practicar', cls:'new'};
    if (acc >= 85) return {label:`Fuerte · ${acc}%`, cls:'strong'};
    if (acc >= 65) return {label:`En progreso · ${acc}%`, cls:'progress'};
    return {label:`Reforzar · ${acc}%`, cls:'reinforce'};
  }

  function routeStatus(route) {
    const values = route.skills.map(skillAccuracy).filter(v => v !== null);
    if (!values.length) return {label:'Empezar', cls:'new'};
    const avg = Math.round(values.reduce((a,b)=>a+b,0) / values.length);
    if (avg >= 85) return {label:`Fuerte · ${avg}%`, cls:'strong'};
    if (avg >= 65) return {label:`En progreso · ${avg}%`, cls:'progress'};
    return {label:`Reforzar · ${avg}%`, cls:'reinforce'};
  }

  function overallAcademyMastery() {
    const values = Object.keys(academyState.stats)
      .map(skillAccuracy)
      .filter(v => v !== null);
    return values.length ? Math.round(values.reduce((a,b)=>a+b,0)/values.length) : 0;
  }

  function bestAcademyRecommendation() {
    const priority = ['fits','terms','placement','multiply','subtract','bring','exact','problems','divisors','prime','factors'];
    const practiced = priority
      .map(skill => ({skill, acc:skillAccuracy(skill)}))
      .filter(x => x.acc !== null)
      .sort((a,b) => a.acc - b.acc);

    if (practiced.length && practiced[0].acc < 80) {
      const names = {
        fits:'¿Cuántas veces cabe?',
        terms:'Conozco mi división',
        placement:'Divido en mi cuaderno',
        multiply:'¿Cuántas veces cabe?',
        subtract:'Divido en mi cuaderno',
        bring:'Divido en mi cuaderno',
        exact:'Exacta o inexacta',
        problems:'¿Qué operación necesito?',
        divisors:'Divisores de un número',
        prime:'Primo o compuesto',
        factors:'Factores primos'
      };
      return `Conviene reforzar: ${names[practiced[0].skill]}.`;
    }
    if (!practiced.length) return 'Empieza por comprender cuántas veces cabe el divisor y después practica el procedimiento escrito.';
    return 'Vas construyendo una base sólida. Alterna la práctica del cuaderno con los retos de comprensión.';
  }

  const parentSkillMeta = {
    terms:['🧩','Partes de una división','Reconoce dividendo, divisor, cociente y residuo.'],
    fits:['🎯','Cuántas veces cabe','Encuentra el múltiplo correcto sin pasarse.'],
    multiply:['✖️','Multiplicar para comprobar','Calcula cuánto se usó en cada paso.'],
    subtract:['➖','Restar para hallar lo que queda','Encuentra el residuo parcial correctamente.'],
    bring:['⬇️','Bajar la siguiente cifra','Forma el nuevo número de trabajo.'],
    placement:['📐','Ubicar cada número','Escribe cociente y operaciones en el lugar correcto.'],
    exact:['⚖️','División exacta e inexacta','Interpreta el residuo final.'],
    divisors:['🔎','Divisores','Identifica qué números dividen exactamente.'],
    prime:['💎','Primos y compuestos','Distingue números con dos divisores de los que tienen más.'],
    factors:['🧱','Factores primos','Descompone números usando factores primos.'],
    problems:['🧠','Problemas con división','Reconoce cuándo una situación requiere dividir.']
  };

  function parentSkillState(skill) {
    const acc = skillAccuracy(skill);
    if (acc === null) return { label:'Aún no trabajado', cls:'not-started', acc:null };
    if (acc >= 85) return { label:`Dominado · ${acc}%`, cls:'mastered', acc };
    if (acc >= 65) return { label:`En progreso · ${acc}%`, cls:'progress', acc };
    return { label:`Necesita refuerzo · ${acc}%`, cls:'reinforce', acc };
  }

  function parentGroupState(skills) {
    const values = skills.map(skillAccuracy).filter(v => v !== null);
    if (!values.length) return { label:'Sin practicar', cls:'not-started', avg:null };
    const avg = Math.round(values.reduce((a,b)=>a+b,0) / values.length);
    if (avg >= 85) return { label:`Dominado · ${avg}%`, cls:'mastered', avg };
    if (avg >= 65) return { label:`En progreso · ${avg}%`, cls:'progress', avg };
    return { label:`Necesita refuerzo · ${avg}%`, cls:'reinforce', avg };
  }

  function renderParentSkillList(container, skills) {
    if (!container) return;
    container.innerHTML = '';
    skills.forEach(skill => {
      const meta = parentSkillMeta[skill] || ['•', skill, ''];
      const state = parentSkillState(skill);
      const row = document.createElement('article');
      row.className = `parent-skill-row ${state.cls}`;
      row.innerHTML = `
        <span class="parent-skill-icon">${meta[0]}</span>
        <div class="parent-skill-copy"><strong>${meta[1]}</strong><small>${meta[2]}</small></div>
        <b>${state.label}</b>
      `;
      container.appendChild(row);
    });
  }

  function renderParentConceptSkills(snap) {
    if (!parentConceptSkills) return;
    const perWorld = 6;
    const completed = snap.atlasCompleted ? snap.total : Math.max(0, Math.min(snap.total, Number(snap.unlocked) || 0));
    parentConceptSkills.innerHTML = '';
    worlds.forEach((world, index) => {
      const start = index * perWorld;
      const done = Math.max(0, Math.min(perWorld, completed - start));
      const pct = Math.round((done / perWorld) * 100);
      const state = done >= perWorld
        ? {label:'Recorrido completado', cls:'mastered'}
        : done > 0 || (snap.currentMission >= start && snap.currentMission < start + perWorld)
          ? {label:`En curso · ${Math.max(1, done)}/${perWorld} misiones`, cls:'progress'}
          : {label:'Pendiente', cls:'not-started'};
      const row = document.createElement('article');
      row.className = `parent-skill-row ${state.cls}`;
      row.innerHTML = `
        <span class="parent-skill-icon">${world.icon}</span>
        <div class="parent-skill-copy"><strong>${world.subtitle}</strong><small>${world.name} · ${pct}% del recorrido</small></div>
        <b>${state.label}</b>
      `;
      parentConceptSkills.appendChild(row);
    });
  }

  function renderParentLearningProgress() {
    readAcademyState();
    const snap = learningSnapshot();
    const name = explorerName();
    const combined = snap.atlasCompleted ? Math.round(50 + (snap.academyPct / 2)) : Math.round(snap.atlasPct / 2);

    if (learningProgressChild) learningProgressChild.textContent = `${name} · Matemáticas · División`;
    if (parentOverallProgress) parentOverallProgress.textContent = `${combined}%`;
    if (parentConceptProgress) parentConceptProgress.textContent = `${snap.atlasPct}% recorrido`;

    renderParentConceptSkills(snap);

    const procedureSkills = ['terms','fits','multiply','subtract','bring','placement'];
    const numbersSkills = ['exact','divisors','prime','factors'];
    const applicationSkills = ['problems'];
    renderParentSkillList(parentProcedureSkills, procedureSkills);
    renderParentSkillList(parentNumbersSkills, numbersSkills);
    renderParentSkillList(parentApplicationSkills, applicationSkills);

    const procedureState = parentGroupState(procedureSkills);
    const numbersState = parentGroupState(numbersSkills);
    const applicationState = parentGroupState(applicationSkills);
    if (parentProcedureStatus) { parentProcedureStatus.textContent = procedureState.label; parentProcedureStatus.className = procedureState.cls; }
    if (parentNumbersStatus) { parentNumbersStatus.textContent = numbersState.label; parentNumbersStatus.className = numbersState.cls; }
    if (parentApplicationStatus) { parentApplicationStatus.textContent = applicationState.label; parentApplicationStatus.className = applicationState.cls; }

    if (parentCurrentFocus && parentCurrentFocusDetail) {
      if (!snap.atlasCompleted) {
        const currentWorld = worlds[missions[snap.currentMission]?.w || 0] || worlds[0];
        parentCurrentFocus.textContent = 'Comprender qué significa dividir';
        parentCurrentFocusDetail.textContent = `${currentWorld.subtitle}. Está recorriendo “${currentWorld.name}”, misión ${snap.currentMission + 1} de ${snap.total}.`;
      } else if (snap.route) {
        parentCurrentFocus.textContent = snap.route.title;
        parentCurrentFocusDetail.textContent = snap.route.goal;
      } else {
        parentCurrentFocus.textContent = 'Resolver divisiones paso a paso';
        parentCurrentFocusDetail.textContent = 'La comprensión inicial está completa. El siguiente objetivo es practicar el procedimiento con NOVA.';
      }
    }

    if (parentRecommendation) {
      const practiced = Object.keys(academyState.stats || {}).some(key => Number(academyState.stats[key]?.attempts) > 0);
      if (!snap.atlasCompleted) {
        parentRecommendation.textContent = 'Ahora conviene terminar la etapa de comprensión. El recorrido construye la idea de reparto, grupos iguales y relación con las tablas antes de entrar al algoritmo escrito.';
      } else if (!practiced) {
        parentRecommendation.textContent = 'La base conceptual ya está completa. El siguiente paso es observar cómo resuelve “cuántas veces cabe” y después practicar la división escrita.';
      } else {
        parentRecommendation.textContent = bestAcademyRecommendation();
      }
    }
  }

  function openLearningProgressView() {
    if (!commercialAccessGranted || !learningProgressModal) return;
    playTap();
    renderParentLearningProgress();
    renderParentCurriculumPlan();
    settingsModal.hidden = true;
    learningProgressModal.hidden = false;
    document.body.classList.add('modal-open');
    const card = learningProgressModal.querySelector('.modal-card');
    if (card) card.scrollTop = 0;
  }

  function renderAcademyHome() {
    academyHome.hidden = false;
    academyPracticeView.hidden = true;
    notebookLessonView.hidden = true;
    academyHomeBtn.hidden = true;

    const mastery = overallAcademyMastery();
    academyMasteryBar.style.width = `${mastery}%`;
    academyMasteryText.textContent = mastery ? `${mastery}% de dominio observado` : 'Empezando';
    academyRecommendation.textContent = bestAcademyRecommendation();

    academyRouteGrid.innerHTML = '';
    const learningGroups = [
      {
        icon:'✏️',
        label:'PASO 1',
        title:'Aprender el procedimiento',
        description:'Entiende las partes de la división y practica el ciclo para resolverla en el cuaderno.',
        routes:['terms','fits','long']
      },
      {
        icon:'🔎',
        label:'PASO 2',
        title:'Entender las propiedades',
        description:'Interpreta el residuo y descubre divisores, números primos y factores.',
        routes:['exact','divisors','prime','factors']
      },
      {
        icon:'🧠',
        label:'PASO 3',
        title:'Aplicar lo aprendido',
        description:'Decide cuándo una situación se resuelve con división y cuándo requiere otra operación.',
        routes:['problems']
      }
    ];

    learningGroups.forEach(group => {
      const section = document.createElement('section');
      section.className = 'academy-learning-group';
      section.innerHTML = `
        <div class="academy-learning-group-head">
          <span class="academy-learning-group-icon">${group.icon}</span>
          <div>
            <small>${group.label}</small>
            <strong>${group.title}</strong>
            <p>${group.description}</p>
          </div>
        </div>
        <div class="academy-route-group-grid"></div>
      `;
      const grid = section.querySelector('.academy-route-group-grid');

      group.routes.forEach(routeId => {
        const route = academyRoutes.find(item => item.id === routeId);
        if (!route) return;
        const status = routeStatus(route);
        const progress = academyState.routeProgress[route.id] || 0;
        const btn = document.createElement('button');
        btn.className = `academy-route-card ${status.cls}`;
        btn.type = 'button';
        btn.innerHTML = `
          <div class="academy-route-icon">${route.icon}</div>
          <div class="academy-route-copy">
            <span>${status.label}</span>
            <strong>${route.title}</strong>
            <p>${route.goal}</p>
            ${route.id === 'long'
              ? `<small>${Math.min(notebookCompletedLessons, notebookLessons.length)} / ${notebookLessons.length} divisiones practicadas</small>`
              : `<small>Práctica ${Math.min(progress + 1, (academyChallengeSets[route.id] || []).length)} de ${(academyChallengeSets[route.id] || []).length}</small>`
            }
          </div>
          <b>→</b>
        `;
        btn.addEventListener('click', () => startAcademyRoute(route.id));
        grid.appendChild(btn);
      });

      academyRouteGrid.appendChild(section);
    });

    const skillNames = {
      terms:['🧩','Términos','Dividendo, divisor, cociente y residuo'],
      fits:['🎯','Cuántas veces cabe','Elegir el múltiplo correcto sin pasarse'],
      multiply:['✖️','Multiplicación','Comprobar cuánto se usó'],
      subtract:['➖','Resta','Encontrar cuánto quedó'],
      bring:['⬇️','Bajar cifra','Formar el nuevo número de trabajo'],
      placement:['📐','Ubicación','Escribir cada número en el lugar correcto'],
      exact:['⚖️','Exacta / inexacta','Interpretar el residuo'],
      divisors:['🔎','Divisores','Encontrar divisiones exactas'],
      prime:['💎','Primos','Distinguir primo y compuesto'],
      factors:['🧱','Factores primos','Descomponer un número'],
      problems:['🧠','Problemas','Elegir la operación adecuada']
    };

    academySkillGrid.innerHTML = '';
    Object.entries(skillNames).forEach(([key, meta]) => {
      const st = skillStatus(key);
      const div = document.createElement('article');
      div.className = `academy-skill ${st.cls}`;
      div.innerHTML = `
        <span class="academy-skill-icon">${meta[0]}</span>
        <div><strong>${meta[1]}</strong><small>${meta[2]}</small></div>
        <b>${st.label}</b>
      `;
      academySkillGrid.appendChild(div);
    });

    saveAcademyState();
  }

  function showAcademyFeedback(correct, title, text, label = 'MIRA LA LÓGICA') {
    academyFeedback.hidden = false;
    academyFeedback.classList.toggle('correct', !!correct);
    academyFeedback.classList.toggle('review', !correct);
    academyFeedbackLabel.textContent = label;
    academyFeedbackTitle.textContent = title;
    academyFeedbackText.textContent = text;
    academyChallenge.querySelectorAll('button,input').forEach(el => el.disabled = true);
    academyFeedback.scrollIntoView({behavior:'smooth', block:'nearest'});
  }

  function academyMultiplesMarkup(current, divisor, answer) {
    let items = '';
    for (let i=1; i<=Math.min(answer+1,9); i++) {
      const val = divisor*i;
      const cls = i === answer ? 'best' : (val > current ? 'too-big' : '');
      items += `<div class="academy-multiple ${cls}"><span>${divisor} × ${i}</span><strong>${val}</strong>${val > current ? '<small>se pasa</small>' : ''}</div>`;
    }
    return `<div class="academy-multiple-row">${items}</div>`;
  }

  function renderAcademyChallenge() {
    if (!academyCurrentRoute || academyCurrentRoute === 'long') return;
    const set = academyChallengeSets[academyCurrentRoute] || [];
    if (!set.length) return;

    academyChallengeIndex = Math.max(0, Math.min(set.length-1, academyChallengeIndex));
    const c = set[academyChallengeIndex];
    const route = academyRoutes.find(r => r.id === academyCurrentRoute);

    academyPracticeIcon.textContent = route.icon;
    academyPracticeKicker.textContent = `HABILIDAD · ${route.title.toUpperCase()}`;
    academyPracticeTitle.textContent = route.title;
    academyPracticeGoal.textContent = route.goal;
    academyPracticeCounter.textContent = `${academyChallengeIndex + 1} / ${set.length}`;
    academyPracticeBar.style.width = `${Math.round((academyChallengeIndex / set.length)*100)}%`;
    academyFeedback.hidden = true;
    academySelected = new Set();
    academyChat.hidden = true;
    academyChatHistory = [];
    academyChatMessages.innerHTML = `<div class="tutor-message nova-message"><span>NOVA</span><p>Pregúntame, yo puedo ayudarte a entender este reto.</p></div>`;

    if (academyCurrentRoute === 'terms') {
      academyNovaExplain.textContent = 'Antes de calcular, quiero que sepas qué papel cumple cada número dentro de una división.';
      academyChallenge.innerHTML = `
        <div class="academy-division-diagram">
          <div><span>DIVIDENDO</span><strong>${c.dividend}</strong></div>
          <div><span>DIVISOR</span><strong>${c.divisor}</strong></div>
          <div><span>COCIENTE</span><strong>${c.quotient}</strong></div>
          <div><span>RESIDUO</span><strong>${c.remainder}</strong></div>
        </div>
        <h4>${c.ask}</h4>
        <div class="academy-choice-grid">
          ${c.choices.map(x => `<button type="button" class="academy-choice" data-value="${x}">${x}</button>`).join('')}
        </div>`;
      academyChallenge.querySelectorAll('.academy-choice').forEach(btn => {
        btn.addEventListener('click', () => {
          const ok = btn.dataset.value === c.answer;
          recordAcademySkill('terms', ok);
          if (ok) {
            playSuccess();
            showAcademyFeedback(true, 'Sí. Ese es el número.', c.explain);
          } else {
            playOops();
            showAcademyFeedback(false, 'Miremos el papel de cada número.', c.explain);
          }
        });
      });
    }

    if (academyCurrentRoute === 'fits') {
      academyNovaExplain.textContent = `No tienes que adivinar. Busca los múltiplos de ${c.divisor} y detente antes de pasar de ${c.current}.`;
      academyChallenge.innerHTML = `
        <div class="academy-big-question">¿Cuántas veces cabe <b>${c.divisor}</b> en <b>${c.current}</b> sin pasarse?</div>
        ${academyMultiplesMarkup(c.current,c.divisor,c.answer)}
        <div class="academy-number-answer">
          <input inputmode="numeric" pattern="[0-9]*" maxlength="2" placeholder="¿Cuántas veces?" />
          <button type="button">Comprobar</button>
        </div>`;
      const input = academyChallenge.querySelector('input');
      academyChallenge.querySelector('button').addEventListener('click', () => {
        const value = Number(input.value);
        const ok = value === c.answer;
        recordAcademySkill('fits', ok);
        if (ok) {
          recordAcademySkill('multiply', true);
          playSuccess();
          showAcademyFeedback(true, `${c.divisor} cabe ${c.answer} veces.`, `${c.divisor} × ${c.answer} = ${c.divisor*c.answer}. El siguiente múltiplo sería ${c.divisor*(c.answer+1)}, que ${c.divisor*(c.answer+1)>c.current?'se pasa':'todavía cabe'}. Por eso usamos ${c.answer}.`);
        } else {
          playOops();
          showAcademyFeedback(false, 'No lo adivines: compruébalo con la multiplicación.', `Busca el múltiplo más cercano a ${c.current} sin superarlo. ${c.divisor} × ${c.answer} = ${c.divisor*c.answer} y ${c.divisor} × ${c.answer+1} = ${c.divisor*(c.answer+1)}.`);
        }
      });
    }

    if (academyCurrentRoute === 'exact') {
      academyNovaExplain.textContent = 'Para decidir si una división es exacta o inexacta, mira solamente qué quedó al final: el residuo.';
      academyChallenge.innerHTML = `
        <div class="academy-result-card">
          <span>${c.dividend} ÷ ${c.divisor}</span>
          <strong>Cociente: ${c.q}</strong>
          <b>Residuo: ${c.r}</b>
        </div>
        <h4>¿Esta división es exacta o inexacta?</h4>
        <div class="academy-choice-grid two">
          <button type="button" class="academy-choice" data-value="Exacta">Exacta</button>
          <button type="button" class="academy-choice" data-value="Inexacta">Inexacta</button>
        </div>`;
      academyChallenge.querySelectorAll('.academy-choice').forEach(btn => {
        btn.addEventListener('click', () => {
          const ok = btn.dataset.value === c.answer;
          recordAcademySkill('exact', ok);
          const logic = c.r === 0
            ? 'El residuo es 0. No sobró nada, por eso la división es exacta.'
            : `El residuo es ${c.r}, distinto de 0. Sobró una cantidad, por eso la división es inexacta.`;
          if (ok) { playSuccess(); showAcademyFeedback(true, c.answer, logic); }
          else { playOops(); showAcademyFeedback(false, 'Mira el residuo.', logic); }
        });
      });
    }

    if (academyCurrentRoute === 'divisors') {
      academyNovaExplain.textContent = `Un divisor de ${c.n} es un número que lo divide exactamente, sin dejar residuo. Puedes comprobar cada opción multiplicando.`;
      academyChallenge.innerHTML = `
        <div class="academy-big-question">Selecciona TODOS los divisores de <b>${c.n}</b></div>
        <div class="academy-choice-grid multi">
          ${c.choices.map(x => `<button type="button" class="academy-choice academy-toggle" data-value="${x}">${x}</button>`).join('')}
        </div>
        <button type="button" class="primary-btn academy-check-multi">Comprobar selección</button>`;
      academyChallenge.querySelectorAll('.academy-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
          const v = Number(btn.dataset.value);
          if (academySelected.has(v)) academySelected.delete(v); else academySelected.add(v);
          btn.classList.toggle('selected', academySelected.has(v));
        });
      });
      academyChallenge.querySelector('.academy-check-multi').addEventListener('click', () => {
        const chosen = [...academySelected].sort((a,b)=>a-b);
        const target = [...c.answers].sort((a,b)=>a-b);
        const ok = JSON.stringify(chosen) === JSON.stringify(target);
        recordAcademySkill('divisors', ok);
        const pairs = [];
        for (let i=0;i<c.answers.length;i++) {
          const a=c.answers[i], b=c.n/a;
          if (a<=b && Number.isInteger(b)) pairs.push(`${a} × ${b}`);
        }
        const text = `Los divisores son ${target.join(', ')}. Puedes encontrarlos con parejas que forman ${c.n}: ${pairs.join('; ')}.`;
        if (ok) { playSuccess(); showAcademyFeedback(true, 'Encontraste todos los divisores.', text); }
        else { playOops(); showAcademyFeedback(false, 'Revisa qué divisiones dejan residuo 0.', text); }
      });
    }

    if (academyCurrentRoute === 'prime') {
      academyNovaExplain.textContent = 'Un número primo tiene exactamente dos divisores: 1 y él mismo. Un compuesto tiene más.';
      academyChallenge.innerHTML = `
        <div class="academy-prime-number">${c.n}</div>
        <h4>¿Es primo o compuesto?</h4>
        <div class="academy-choice-grid two">
          <button type="button" class="academy-choice" data-value="Primo">Primo</button>
          <button type="button" class="academy-choice" data-value="Compuesto">Compuesto</button>
        </div>`;
      academyChallenge.querySelectorAll('.academy-choice').forEach(btn => {
        btn.addEventListener('click', () => {
          const ok = btn.dataset.value === c.answer;
          recordAcademySkill('prime', ok);
          const text = `${c.n} tiene estos divisores: ${c.divisors.join(', ')}. ${c.answer === 'Primo' ? 'Son exactamente dos.' : 'Tiene más de dos.'} Por eso es ${c.answer.toLowerCase()}.`;
          if (ok) { playSuccess(); showAcademyFeedback(true, `${c.n} es ${c.answer.toLowerCase()}.`, text); }
          else { playOops(); showAcademyFeedback(false, 'Cuenta cuántos divisores tiene.', text); }
        });
      });
    }

    if (academyCurrentRoute === 'factors') {
      academyNovaExplain.textContent = `Descomponer ${c.n} significa escribirlo como una multiplicación formada solamente por números primos.`;
      academyChallenge.innerHTML = `
        <div class="academy-prime-number">${c.n}</div>
        <h4>¿Cuál es su descomposición en factores primos?</h4>
        <div class="academy-choice-grid">
          ${c.choices.map(x => `<button type="button" class="academy-choice factor-choice" data-value="${x}">${x}</button>`).join('')}
        </div>`;
      academyChallenge.querySelectorAll('.academy-choice').forEach(btn => {
        btn.addEventListener('click', () => {
          const ok = btn.dataset.value === c.answer;
          recordAcademySkill('factors', ok);
          const text = `${c.answer} = ${c.n}. Todos los factores de esa expresión son números primos, por eso es la descomposición que buscamos.`;
          if (ok) { playSuccess(); showAcademyFeedback(true, 'Esa descomposición usa solo primos.', text); }
          else { playOops(); showAcademyFeedback(false, 'No basta con que la multiplicación dé el número.', `La descomposición debe usar únicamente factores primos. ${text}`); }
        });
      });
    }

    if (academyCurrentRoute === 'problems') {
      academyNovaExplain.textContent = 'Antes de calcular, identifica qué estás buscando: total, cuánto toca a cada grupo o cuántos grupos caben.';
      academyChallenge.innerHTML = `
        <div class="academy-story-card">${c.text}</div>
        <h4>¿Qué operación necesitas?</h4>
        <div class="academy-choice-grid two">
          <button type="button" class="academy-choice" data-value="División">➗ División</button>
          <button type="button" class="academy-choice" data-value="Multiplicación">✖️ Multiplicación</button>
        </div>`;
      academyChallenge.querySelectorAll('.academy-choice').forEach(btn => {
        btn.addEventListener('click', () => {
          const ok = btn.dataset.value === c.answer;
          recordAcademySkill('problems', ok);
          const text = `${c.explain} La operación es ${c.op}.`;
          if (ok) { playSuccess(); showAcademyFeedback(true, `Necesitas ${c.answer.toLowerCase()}.`, text); }
          else { playOops(); showAcademyFeedback(false, 'Primero decide qué estás buscando.', text); }
        });
      });
    }

    saveAcademyState();
  }

  function startAcademyRoute(routeId) {
    academyCurrentRoute = routeId;
    academyState.lastRoute = routeId;
    academyHome.hidden = true;
    academyHomeBtn.hidden = false;

    if (routeId === 'long') {
      academyPracticeView.hidden = true;
      notebookLessonView.hidden = false;
      const saved = readNotebookState();
      if (saved) {
        notebookLessonIndex = Math.max(0, Math.min(notebookLessons.length - 1, Number(saved.lesson) || 0));
        notebookStepIndex = Math.max(0, Number(saved.step) || 0);
        notebookCompletedLessons = Math.max(0, Number(saved.completed) || 0);
        notebookRevealedQuotient = String(saved.quotient || '');
        notebookJournalLines = Array.isArray(saved.journal) ? saved.journal.slice(-20) : [];
        notebookChatHistory = Array.isArray(saved.chat) ? saved.chat.slice(-12) : [];
        startNotebookLesson(notebookLessonIndex, true);
      } else {
        startNotebookLesson(0, false);
      }
    } else {
      notebookLessonView.hidden = true;
      academyPracticeView.hidden = false;
      const set = academyChallengeSets[routeId] || [];
      academyChallengeIndex = Math.max(0, Math.min(set.length-1, Number(academyState.routeProgress[routeId]) || 0));
      renderAcademyChallenge();
    }
    saveAcademyState();
    window.scrollTo({top:0, behavior:'smooth'});
  }

  function appendAcademyChatMessage(role, text, pending=false) {
    const wrap = document.createElement('div');
    wrap.className = `tutor-message ${role === 'user' ? 'emi-message' : 'nova-message'}${pending ? ' pending' : ''}`;
    const who = document.createElement('span');
    who.textContent = role === 'user' ? explorerLabel() : 'NOVA';
    const p = document.createElement('p');
    p.textContent = text;
    wrap.append(who,p);
    academyChatMessages.appendChild(wrap);
    academyChatMessages.scrollTop = academyChatMessages.scrollHeight;
    return wrap;
  }

  async function askAcademyNova(question) {
    const q = String(question || '').trim().slice(0,180);
    if (!q || !academyCurrentRoute) return;
    const route = academyRoutes.find(r => r.id === academyCurrentRoute);
    const set = academyChallengeSets[academyCurrentRoute] || [];
    const challenge = set[academyChallengeIndex] || {};
    const previous = academyChatHistory.slice(-10);

    appendAcademyChatMessage('user', q);
    academyChatHistory.push({role:'user',content:q});
    const pending = appendAcademyChatMessage('assistant','Estoy mirando este reto…',true);

    try {
      const res = await fetch('/api/tutor',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          mode:'academy',
          question:q,
          history:previous,
          academy:{
            route:route.title,
            goal:route.goal,
            challenge:JSON.stringify(challenge)
          }
        })
      });
      const data = await res.json().catch(()=>({}));
      pending.remove();
      if (!res.ok) throw new Error(data.error || 'No pude conectar con NOVA.');
      const message = data.message || 'Miremos juntos qué información te da el reto y qué necesitas descubrir.';
      appendAcademyChatMessage('assistant',message);
      academyChatHistory.push({role:'assistant',content:message});
      academyChatHistory = academyChatHistory.slice(-12);
    } catch {
      pending.remove();
      appendAcademyChatMessage('assistant','No pude conectarme ahora. Usa la explicación del reto y vuelve a intentarlo.');
    }
  }

  function readNotebookState() {
    try {
      const raw = localStorage.getItem(NOTEBOOK_SAVE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (!data || typeof data !== 'object') return null;
      return data;
    } catch {
      return null;
    }
  }

  function saveNotebookState() {
    if (testerMode) return;
    try {
      localStorage.setItem(NOTEBOOK_SAVE_KEY, JSON.stringify({
        lesson: notebookLessonIndex,
        step: notebookStepIndex,
        completed: notebookCompletedLessons,
        quotient: notebookRevealedQuotient,
        journal: notebookJournalLines.slice(-20),
        chat: notebookChatHistory.slice(-12),
        savedAt: Date.now()
      }));
    } catch {}
    scheduleCloudSync();
  }

  function resetNotebookState() {
    notebookLessonIndex = 0;
    notebookStepIndex = 0;
    notebookCompletedLessons = 0;
    notebookRevealedQuotient = '';
    notebookJournalLines = [];
    notebookChatHistory = [];
    localStorage.removeItem(NOTEBOOK_SAVE_KEY);
    scheduleCloudSync(250);
  }

  function buildDivisionDiscovery(current, divisor) {
    const quotientDigit = Math.floor(current / divisor);

    if (current < divisor) {
      return {
        method:'zero',
        values:[],
        next:divisor,
        text:`${divisor} es mayor que ${current}. No alcanza para formar ni un grupo completo, así que en esta posición corresponde 0.`
      };
    }

    const values = [];
    const maxVisible = Math.min(quotientDigit, 9);

    for (let i = 1; i <= maxVisible; i++) {
      values.push({
        count:i,
        value:divisor * i,
        reaches:divisor * i === current
      });
    }

    const nextValue = divisor * (quotientDigit + 1);

    return {
      method:'multiples',
      values,
      next:nextValue,
      exact:quotientDigit * divisor === current,
      text:`Cuenta de ${divisor} en ${divisor} sin pasar de ${current}. Cada salto representa una vez que ${divisor} cabe.`
    };
  }

  function discoveryMarkup(step) {
    if (!step) return '';

    if (step.kind === 'divide' && step.discovery) {
      if (step.discovery.method === 'zero') {
        return `
          <div class="discovery-label">CÓMO LO DESCUBRO</div>
          <div class="zero-discovery">
            <strong>${step.current} &lt; ${step.divisor}</strong>
            <span>No cabe ni una vez completa.</span>
            <b>Entonces escribo 0 en el cociente.</b>
          </div>
        `;
      }

      const chips = step.discovery.values.map((item) => `
        <div class="multiple-chip${item.reaches ? ' exact' : ''}">
          <span>${step.divisor} × ${item.count}</span>
          <strong>${item.value}</strong>
        </div>
      `).join('');

      const nextIsTooBig = step.discovery.next > step.current;
      return `
        <div class="discovery-label">CÓMO LO DESCUBRO</div>
        <p class="discovery-explain">${step.discovery.text}</p>
        <div class="multiple-path">${chips}</div>
        ${nextIsTooBig ? `
          <div class="too-far">
            <span>Si doy otro salto:</span>
            <strong>${step.divisor} × ${step.expected + 1} = ${step.discovery.next}</strong>
            <b>${step.discovery.next} se pasa de ${step.current}, así que me detengo.</b>
          </div>
        ` : ''}
        <div class="discovery-conclusion">
          <span>Cuenta los saltos que sí pudiste dar.</span>
          <strong>Ese número es la cifra que irá arriba.</strong>
        </div>
      `;
    }

    if (step.kind === 'multiply') {
      return `
        <div class="discovery-label">CÓMO LO DESCUBRO</div>
        <div class="operation-model">
          <span>Tomo la cifra que acabo de escribir arriba</span>
          <strong>${step.quotientDigit} × ${step.divisor} = ?</strong>
          <small>Multiplico esa cifra por el divisor.</small>
        </div>
      `;
    }

    if (step.kind === 'subtract') {
      return `
        <div class="discovery-label">CÓMO LO DESCUBRO</div>
        <div class="operation-model">
          <span>Tenía ${step.current} y ya usé ${step.product}</span>
          <strong>${step.current} − ${step.product} = ?</strong>
          <small>La resta me dice cuánto quedó.</small>
        </div>
      `;
    }

    if (step.kind === 'bring') {
      return `
        <div class="discovery-label">CÓMO LO DESCUBRO</div>
        <div class="bring-model">
          <div><span>Quedó</span><strong>${step.remainder}</strong></div>
          <div class="bring-arrow">＋</div>
          <div><span>Bajo</span><strong>${step.nextDigit}</strong></div>
          <div class="bring-arrow">→</div>
          <div class="bring-result"><span>Ahora trabajo con</span><strong>${step.nextCurrent}</strong></div>
        </div>
      `;
    }

    if (step.kind === 'repeat') {
      return `
        <div class="discovery-label">RECUERDA EL CICLO</div>
        <div class="repeat-cycle-model">
          <strong>DIVIDO</strong><span>→</span>
          <strong>MULTIPLICO</strong><span>→</span>
          <strong>RESTO</strong><span>→</span>
          <strong>BAJO</strong><span>→</span>
          <b>REPITO</b>
        </div>
        <p class="repeat-next">Ahora vuelves a DIVIDIR usando <strong>${step.nextCurrent}</strong>, no el número completo del inicio.</p>
      `;
    }

    return '';
  }

  function buildLongDivisionSteps(dividend, divisor) {
    const digits = String(dividend).split('').map(Number);
    const steps = [];
    let current = 0;
    let started = false;
    let quotient = '';
    let cycle = 0;

    steps.push({
      kind:'setup',
      phase:'prepare',
      cycle:0,
      title:'Prepara la división en tu cuaderno',
      why:`Antes de comenzar necesitamos colocar ${dividend} y ${divisor} en sus lugares.`,
      forWhat:'Así podrás repetir siempre el mismo procedimiento sin perderte.',
      how:`Copia ${dividend} y ${divisor} usando la misma forma de división que ves en la pantalla.`,
      prompt:'Cuando la tengas escrita, toca “Ya la escribí”.',
      placement:`Copia la operación ${dividend} ÷ ${divisor} con el mismo formato del modelo.`,
      confirm:true
    });

    for (let i = 0; i < digits.length; i++) {
      current = current * 10 + digits[i];

      // Antes de iniciar el primer ciclo, identificamos la primera parte
      // del dividendo que puede dividirse. Esto NO es un paso del ciclo.
      if (!started && current < divisor && i < digits.length - 1) {
        const nextCombined = current * 10 + digits[i + 1];

        steps.push({
          kind:'observe',
          phase:'prepare',
          cycle:0,
          title:'Encuentra dónde empieza la división',
          why:`Con ${current} todavía no podemos formar un grupo completo de ${divisor}.`,
          forWhat:`Necesitamos encontrar la primera parte de ${dividend} donde ${divisor} sí quepa al menos una vez.`,
          how:`Mira también la siguiente cifra. Así formarás ${nextCombined}. Ese será el primer número con el que trabajarás.`,
          prompt:`Señala ${nextCombined} en tu cuaderno. Todavía no escribas nada en el cociente.`,
          placement:`Solo identifica ${nextCombined} dentro del dividendo. El ciclo todavía no ha comenzado.`,
          confirm:true
        });

        continue;
      }

      started = true;
      cycle += 1;

      const q = Math.floor(current / divisor);
      const product = q * divisor;
      const remainder = current - product;
      quotient += String(q);

      // 1. DIVIDO
      steps.push({
        kind:'divide',
        phase:'divide',
        cycle,
        title:`Ciclo ${cycle}: DIVIDO`,
        why:`Trabaja solamente con ${current}. Ahora debes descubrir cuántas veces cabe ${divisor} sin pasarte.`,
        forWhat:`Descubrirás la siguiente cifra del cociente: cuántos grupos completos de ${divisor} caben en ${current}.`,
        how:`Cuenta de ${divisor} en ${divisor}: ${divisor}, ${divisor * 2}${q >= 3 ? `, ${divisor * 3}` : ''}… Detente antes de superar ${current}. Luego cuenta cuántos saltos diste.`,
        prompt:`Haz los saltos. ¿Cuántas veces cabe ${divisor} en ${current} sin pasarse?`,
        current,
        divisor,
        quotientDigit:q,
        discovery:buildDivisionDiscovery(current, divisor),
        expected:q,
        write:`Escribe ${q} arriba, en el cociente.`,
        placement:`El ${q} va arriba, alineado con la cifra del dividendo que acabas de trabajar.`,
        quotientAfter:quotient,
        journal:`VUELTA ${cycle} · DIVIDO: ${current} ÷ ${divisor} = ${q}`
      });

      // 2. MULTIPLICO
      steps.push({
        kind:'multiply',
        phase:'multiply',
        cycle,
        title:`Ciclo ${cycle}: MULTIPLICO`,
        why:`Toma la cifra ${q} que acabas de escribir arriba y multiplícala por el divisor ${divisor}.`,
        forWhat:`Descubrirás cuánto de ${current} ya quedó usado por los ${q} grupos que encontraste.`,
        how:`Haz ${q} × ${divisor}. Después escribe el resultado debajo de ${current}, alineando las unidades.`,
        prompt:`Calcula en tu cuaderno: ${q} × ${divisor}. ¿Cuánto obtienes?`,
        current,
        divisor,
        quotientDigit:q,
        product,
        expected:product,
        write:`Escribe ${product} debajo de ${current}.`,
        placement:`El ${product} va debajo de ${current}, porque representa la cantidad que acabas de usar.`,
        quotientAfter:quotient,
        journal:`VUELTA ${cycle} · MULTIPLICO: ${q} × ${divisor} = ${product}`
      });

      // 3. RESTO
      steps.push({
        kind:'subtract',
        phase:'subtract',
        cycle,
        title:`Ciclo ${cycle}: RESTO`,
        why:`Tenías ${current} y la multiplicación mostró que ya usaste ${product}. Ahora quita lo que ya utilizaste.`,
        forWhat:`Descubrirás cuánto quedó sin repartir antes de continuar.`,
        how:`Escribe ${product} debajo de ${current}, traza la resta y calcula ${current} − ${product}.`,
        prompt:`Haz la resta en tu cuaderno: ${current} − ${product}. ¿Cuánto quedó?`,
        current,
        product,
        remainder,
        expected:remainder,
        write:`Escribe ${remainder} como resultado de la resta.`,
        placement:`El ${remainder} va debajo de la resta. Es lo que quedó después de usar ${product}.`,
        quotientAfter:quotient,
        journal:`VUELTA ${cycle} · RESTO: ${current} − ${product} = ${remainder}`
      });

      if (i < digits.length - 1) {
        const nextDigit = digits[i + 1];
        const nextCurrent = remainder * 10 + nextDigit;

        // 4. BAJO
        steps.push({
          kind:'bring',
          phase:'bring',
          cycle,
          title:`Ciclo ${cycle}: BAJO`,
          why:`Todavía queda la cifra ${nextDigit} del dividendo sin trabajar.`,
          forWhat:`Al unirla con el residuo ${remainder}, formarás el nuevo número sobre el que vuelve a empezar el ciclo.`,
          how:`Traza visualmente el ${nextDigit} hacia abajo y escríbelo a la derecha de ${remainder}. Así formas ${nextCurrent}.`,
          prompt:`Hazlo en tu cuaderno hasta que veas ${nextCurrent}.`,
          remainder,
          nextDigit,
          nextCurrent,
          placement:`Baja el ${nextDigit} hasta dejarlo a la derecha del residuo ${remainder}.`,
          confirm:true,
          quotientAfter:quotient,
          journal:`VUELTA ${cycle} · BAJO: ${nextDigit} → ahora tengo ${nextCurrent}`
        });

        // 5. REPITO
        steps.push({
          kind:'repeat',
          phase:'repeat',
          cycle,
          title:`Ciclo ${cycle}: REPITO`,
          why:`Ya formaste un nuevo número de trabajo: ${nextCurrent}.`,
          forWhat:'Esto te permite repetir exactamente la misma secuencia sin inventar un procedimiento nuevo.',
          how:`Vuelve a DIVIDIR, pero ahora usando ${nextCurrent}. Después volverás a MULTIPLICAR, RESTAR y BAJAR si quedan cifras.`,
          prompt:`Repite la regla: DIVIDO, MULTIPLICO, RESTO, BAJO y REPITO.`,
          nextCurrent,
          placement:`Tu siguiente número de trabajo es ${nextCurrent}. No uses de nuevo ${dividend} completo.`,
          confirm:true,
          quotientAfter:quotient,
          journal:`↻ REPITO · La siguiente vuelta empieza con ${nextCurrent}`
        });

        // CRÍTICO: el siguiente ciclo debe comenzar con el residuo.
        // En la siguiente iteración se añadirá la cifra que acabamos de bajar.
        current = remainder;
      } else {
        steps.push({
          kind:'finish',
          phase:'finish',
          cycle,
          title:'Terminamos la división',
          why: remainder === 0
            ? 'Ya no quedan cifras por bajar y la última resta terminó en 0.'
            : `Ya no quedan cifras por bajar y quedó ${remainder}.`,
          forWhat: remainder === 0
            ? 'Eso nos confirma que la división es exacta.'
            : `Ese ${remainder} es el residuo: ya no alcanza para formar otro grupo completo de ${divisor}.`,
          how: remainder === 0
            ? `Lee el cociente completo: ${quotient}. Revisa en tu cuaderno que el último residuo sea 0.`
            : `Lee el cociente ${quotient} y registra el residuo ${remainder}.`,
          prompt:'Compara tu cuaderno con el procedimiento. Cuando esté listo, toca “Terminé la división”.',
          placement:'Revisa el cociente y que cada multiplicación, resta y cifra bajada esté alineada.',
          confirm:true,
          final:true,
          quotientAfter:quotient,
          remainder,
          journal: remainder === 0
            ? `RESULTADO: ${dividend} ÷ ${divisor} = ${quotient}`
            : `RESULTADO: ${dividend} ÷ ${divisor} = ${quotient} y sobra ${remainder}`
        });
      }
    }

    return steps;
  }

  function currentNotebookLesson() {
    return notebookLessons[Math.max(0, Math.min(notebookLessons.length - 1, notebookLessonIndex))];
  }

  function currentNotebookStep() {
    return notebookSteps[Math.max(0, Math.min(notebookSteps.length - 1, notebookStepIndex))];
  }

  function notebookProgressPercent() {
    const lessonPart = notebookLessonIndex / notebookLessons.length;
    const stepPart = notebookSteps.length ? (notebookStepIndex / notebookSteps.length) / notebookLessons.length : 0;
    return Math.round(Math.min(1, lessonPart + stepPart) * 100);
  }

  function updateProcedureStrip(step) {
    const order = ['divide','multiply','subtract','bring','repeat'];
    const currentIdx = order.indexOf(step.phase);

    document.querySelectorAll('.procedure-step').forEach((el, idx) => {
      const finished = step.phase === 'finish';
      el.classList.toggle('active', idx === currentIdx);
      el.classList.toggle('done', finished || (currentIdx >= 0 && idx < currentIdx));
    });

    if (notebookCycleLabel) {
      if (step.phase === 'prepare') {
        notebookCycleLabel.textContent = 'Antes del ciclo: identifica dónde empezar';
      } else if (step.phase === 'finish') {
        notebookCycleLabel.textContent = 'Ciclo completo · división terminada';
      } else if (step.phase === 'repeat') {
        notebookCycleLabel.textContent = `Vuelta ${step.cycle}: REPITO → vuelvo a DIVIDIR`;
      } else {
        notebookCycleLabel.textContent = `Vuelta ${step.cycle}: ${String(step.phase || '').toUpperCase()}`;
      }
    }
  }

  function renderNotebookJournal() {
    notebookJournal.innerHTML = '';

    const visible = notebookJournalLines.slice(-5);
    if (!visible.length) return;

    const title = document.createElement('div');
    title.className = 'journal-title';
    title.textContent = 'LO QUE YA HICISTE EN EL CUADERNO';
    notebookJournal.appendChild(title);

    visible.forEach(line => {
      const div = document.createElement('div');
      div.className = line.startsWith('↻') ? 'journal-line journal-repeat' : 'journal-line';
      div.textContent = line;
      notebookJournal.appendChild(div);
    });
  }

  function setNotebookQuotient(step) {
    // Nunca mostramos una cifra del cociente antes de que Emiliano la descubra.
    notebookQuotient.textContent = notebookRevealedQuotient || '?';
  }

  function renderNotebookStep() {
    const lesson = currentNotebookLesson();
    const step = currentNotebookStep();
    if (!lesson || !step) return;

    notebookLessonDone.hidden = true;
    notebookLessonCounter.textContent = `${notebookLessonIndex + 1} / ${notebookLessons.length}`;
    notebookMissionLabel.textContent = `MISIÓN ${notebookLessonIndex + 1} · ${lesson.focus.toUpperCase()}`;
    notebookTitle.textContent = lesson.title;
    notebookStory.textContent = lesson.story;
    notebookAnimal.textContent = lesson.animal;
    notebookDividend.textContent = lesson.dividend;
    notebookDivisor.textContent = lesson.divisor;
    notebookProgressBar.style.width = `${notebookProgressPercent()}%`;
    notebookProgressText.textContent = `${notebookProgressPercent()}%`;

    notebookStepTitle.textContent = step.title;
    notebookStepCount.textContent = `PASO ${notebookStepIndex + 1} / ${notebookSteps.length}`;
    notebookWhy.textContent = step.why;
    notebookForWhat.textContent = step.forWhat;
    notebookHow.textContent = step.how;
    notebookPrompt.textContent = step.prompt;

    const discovery = discoveryMarkup(step);
    notebookDiscovery.innerHTML = discovery;
    notebookDiscovery.hidden = !discovery;

    placementHelp.hidden = true;
    placementHelp.textContent = step.placement || 'Copia la ubicación que ves en el modelo.';
    updateProcedureStrip(step);
    setNotebookQuotient(step);
    renderNotebookJournal();

    notebookAnswerArea.innerHTML = '';

    if (step.expected != null) {
      const form = document.createElement('form');
      form.className = 'notebook-number-form';
      form.innerHTML = `
        <input inputmode="numeric" pattern="[0-9]*" aria-label="Respuesta del paso" placeholder="Escribe el número que obtuviste" />
        <button type="submit">Comprobar</button>
      `;
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input');
        const value = Number(String(input.value).trim());
        if (!Number.isFinite(value)) {
          showToast('Escribe el número que obtuviste en tu cuaderno.');
          return;
        }
        if (value !== step.expected) {
          const skillMap = {divide:'fits', multiply:'multiply', subtract:'subtract'};
          recordAcademySkill(skillMap[step.kind] || 'placement', false);
          playOops();
          showToast(`Revisa este paso con NOVA. No adivines: usa el método del paso actual.`, 2600);
          input.select();
          return;
        }
        {
          const skillMap = {divide:'fits', multiply:'multiply', subtract:'subtract'};
          recordAcademySkill(skillMap[step.kind] || 'placement', true);
        }
        playSuccess();
        if (step.journal) notebookJournalLines.push(step.journal);

        // La nueva cifra del cociente aparece únicamente después
        // de que Emiliano la encontró correctamente en el paso DIVIDO.
        if (step.kind === 'divide' && step.quotientAfter != null) {
          notebookRevealedQuotient = String(step.quotientAfter);
        }

        showToast(step.write || 'Ese paso quedó listo en tu cuaderno.', 1800);
        advanceNotebookStep();
      });
      notebookAnswerArea.appendChild(form);
      setTimeout(() => form.querySelector('input')?.focus({preventScroll:true}), 60);
    } else {
      const btn = document.createElement('button');
      btn.className = 'notebook-confirm-btn';
      btn.type = 'button';
      btn.textContent = step.final
        ? '✅ Terminé la división'
        : step.kind === 'setup'
          ? '✏️ Ya la escribí'
          : step.kind === 'repeat'
            ? '🔁 Volver a DIVIDIR'
            : '✅ Ya lo hice';
      btn.addEventListener('click', () => {
        playTap();
        if (step.kind === 'bring') recordAcademySkill('bring', true);
        if (step.kind === 'setup' || step.kind === 'observe') recordAcademySkill('placement', true);
        if (step.journal) notebookJournalLines.push(step.journal);
        advanceNotebookStep();
      });
      notebookAnswerArea.appendChild(btn);
    }

    saveNotebookState();
  }

  function showNotebookLessonDone() {
    const lesson = currentNotebookLesson();
    const lastStep = notebookSteps[notebookSteps.length - 1];
    const quotient = Math.floor(lesson.dividend / lesson.divisor);
    const remainder = lesson.dividend % lesson.divisor;

    notebookLessonDone.hidden = false;
    notebookDoneTitle.textContent = `Terminaste ${lesson.dividend} ÷ ${lesson.divisor}`;
    notebookDoneFeedback.textContent = remainder === 0
      ? `La regla fue siempre la misma: DIVIDO para saber cuántas veces cabe, MULTIPLICO para saber cuánto usé, RESTO para saber cuánto quedó, BAJO la siguiente cifra y REPITO. Al terminar no quedó residuo. El resultado es ${quotient}.`
      : `La regla fue siempre la misma: DIVIDO, MULTIPLICO, RESTO, BAJO y REPITO. Cuando ya no quedaron cifras por bajar, quedó ${remainder}; por eso el cociente es ${quotient} y el residuo es ${remainder}.`;

    recordAcademySkill('exact', true);
    notebookCompletedLessons = Math.max(notebookCompletedLessons, notebookLessonIndex + 1);
    academyState.routeProgress.long = notebookCompletedLessons;
    notebookProgressBar.style.width = `${Math.round((notebookCompletedLessons / notebookLessons.length) * 100)}%`;
    notebookProgressText.textContent = `${Math.round((notebookCompletedLessons / notebookLessons.length) * 100)}%`;
    notebookNextBtn.textContent = notebookLessonIndex === notebookLessons.length - 1
      ? '🏆 Terminar módulo'
      : 'Siguiente división →';
    saveNotebookState();
    notebookLessonDone.scrollIntoView({behavior:'smooth', block:'nearest'});
    playSuccess();
  }

  function advanceNotebookStep() {
    const step = currentNotebookStep();
    if (step?.final || notebookStepIndex >= notebookSteps.length - 1) {
      showNotebookLessonDone();
      return;
    }
    notebookStepIndex += 1;
    renderNotebookStep();
  }

  function startNotebookLesson(index, restore = false) {
    notebookLessonIndex = Math.max(0, Math.min(notebookLessons.length - 1, index));
    const lesson = currentNotebookLesson();
    notebookSteps = buildLongDivisionSteps(lesson.dividend, lesson.divisor);

    if (!restore) {
      notebookStepIndex = 0;
      notebookRevealedQuotient = '';
      notebookJournalLines = [];
      notebookChatHistory = [];
    } else {
      notebookStepIndex = Math.max(0, Math.min(notebookSteps.length - 1, notebookStepIndex));
    }

    notebookChat.hidden = true;
    notebookChatMessages.innerHTML = `
      <div class="tutor-message nova-message">
        <span>NOVA</span>
        <p>Pregúntame, yo puedo ayudarte con este paso.</p>
      </div>
    `;
    notebookChatHistory.forEach(item => appendNotebookChatMessage(item.role, item.content));

    renderNotebookStep();
    saveNotebookState();
  }

  function openNotebookModule() {
    if (!gameCompleted && unlockedCount() < missions.length && !testerMode) {
      showToast('Primero completa la etapa “Comprender la división” ✨', 2800);
      return;
    }

    playTap();
    finalCard.hidden = true;
    rewardCard.hidden = true;
    gameArea.hidden = true;
    document.querySelector('.actions').hidden = true;
    document.querySelector('.progress-wrap').hidden = true;
    document.querySelector('.hero-card').hidden = true;
    document.querySelector('.world-strip').hidden = true;
    document.querySelector('.topbar').hidden = true;
    aiTutorCard.hidden = true;
    notebookModule.hidden = false;

    readAcademyState();
    const saved = readNotebookState();
    if (saved) {
      notebookCompletedLessons = Math.max(0, Number(saved.completed) || 0);
    }
    renderAcademyHome();
    window.scrollTo({top:0, behavior:'smooth'});
  }

  function closeNotebookModule() {
    saveNotebookState();
    saveAcademyState();
    academyCurrentRoute = null;
    notebookModule.hidden = true;
    document.querySelector('.topbar').hidden = false;
    document.querySelector('.actions').hidden = false;
    document.querySelector('.progress-wrap').hidden = false;
    document.querySelector('.hero-card').hidden = false;
    document.querySelector('.world-strip').hidden = false;
    if (gameCompleted) {
      finalCard.hidden = false;
      gameArea.hidden = true;
      checkBtn.hidden = true;
      hintBtn.hidden = true;
    } else {
      gameArea.hidden = false;
    }
    showMathHubView();
  }

  function appendNotebookChatMessage(role, text, pending = false) {
    const wrap = document.createElement('div');
    wrap.className = `tutor-message ${role === 'user' ? 'emi-message' : 'nova-message'}${pending ? ' pending' : ''}`;
    const label = document.createElement('span');
    label.textContent = role === 'user' ? explorerLabel() : 'NOVA';
    const p = document.createElement('p');
    p.textContent = text;
    wrap.append(label, p);
    notebookChatMessages.appendChild(wrap);
    notebookChatMessages.scrollTop = notebookChatMessages.scrollHeight;
    return wrap;
  }

  async function askNotebookNova(question) {
    const lesson = currentNotebookLesson();
    const step = currentNotebookStep();
    const cleanQuestion = String(question || '').trim().slice(0,180);
    if (!cleanQuestion) return;

    appendNotebookChatMessage('user', cleanQuestion);
    notebookChatHistory.push({role:'user', content:cleanQuestion});
    const pending = appendNotebookChatMessage('assistant', 'Estoy mirando este paso contigo…', true);
    notebookChatSend.disabled = true;
    notebookChatInput.disabled = true;

    try {
      const res = await fetch('/api/tutor', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          mode:'notebook',
          question:cleanQuestion,
          history:notebookChatHistory.slice(-12),
          notebook:{
            dividend:lesson.dividend,
            divisor:lesson.divisor,
            lessonTitle:lesson.title,
            focus:lesson.focus,
            phase:step.phase,
            stepTitle:step.title,
            why:step.why,
            forWhat:step.forWhat,
            how:step.how,
            prompt:step.prompt,
            expected:step.expected ?? null
          }
        })
      });
      const data = await res.json().catch(()=>({}));
      if (!res.ok) throw new Error(data.error || 'No fue posible conectar con NOVA.');
      pending.remove();
      const message = data.message || 'Miremos solo este paso. Dime qué parte no entiendes y la revisamos juntos.';
      appendNotebookChatMessage('assistant', message);
      notebookChatHistory.push({role:'assistant', content:message});
      notebookChatHistory = notebookChatHistory.slice(-12);
      saveNotebookState();
    } catch {
      pending.remove();
      appendNotebookChatMessage('assistant', `En este paso recuerda tres cosas. Por qué: ${step.why} Para qué: ${step.forWhat} Cómo: ${step.how}`);
    } finally {
      notebookChatSend.disabled = false;
      notebookChatInput.disabled = false;
      notebookChatInput.focus({preventScroll:true});
    }
  }

  const worlds = [
    { name: 'Bosque de los Repartos', icon: '🌿', color: '#70f0a7', subtitle: 'Aprender a repartir' },
    { name: 'Ríos Secretos', icon: '💧', color: '#58e6ff', subtitle: 'Formar grupos iguales' },
    { name: 'Océano Profundo', icon: '🌊', color: '#78a6ff', subtitle: 'Usar el símbolo ÷' },
    { name: 'Desierto de las Tablas', icon: '🏜️', color: '#ffd84d', subtitle: 'Dividir con rapidez' },
    { name: 'Tierras Heladas', icon: '❄️', color: '#cdd6ff', subtitle: 'Números más grandes' },
    { name: 'Santuario Perdido', icon: '🗿', color: '#ff9fe0', subtitle: 'El gran desafío' }
  ];

  const animalProfiles = {
    'Gecko': {type:'Reptil', habitat:'Bosques, zonas rocosas y también lugares cercanos a personas en regiones cálidas.', region:'Regiones tropicales y subtropicales de varios continentes.', diet:'Principalmente insectos y otros pequeños invertebrados.', power:'Sus dedos tienen estructuras diminutas que le permiten adherirse a muchas superficies.'},
    'Panda rojo': {type:'Mamífero', habitat:'Bosques montañosos frescos con abundante bambú.', region:'Himalaya oriental y suroeste de China.', diet:'Sobre todo bambú; también frutos, huevos e insectos.', power:'Su larga cola le ayuda a mantener el equilibrio y a cubrirse del frío.'},
    'Rana de cristal': {type:'Anfibio', habitat:'Bosques húmedos, normalmente cerca de quebradas y ríos.', region:'América Central y norte de América del Sur.', diet:'Pequeños insectos y otros invertebrados.', power:'En muchas especies, la piel del vientre es tan translúcida que permite ver órganos internos.'},
    'Perezoso': {type:'Mamífero', habitat:'Copas de árboles en bosques tropicales.', region:'América Central y América del Sur.', diet:'Hojas, brotes y, según la especie, algunos frutos.', power:'Ahorra muchísima energía moviéndose lentamente y tiene adaptaciones para vivir colgado.'},
    'Tucán': {type:'Ave', habitat:'Bosques tropicales y subtropicales.', region:'México, América Central y América del Sur.', diet:'Principalmente frutos; también insectos y pequeños animales.', power:'Su enorme pico es sorprendentemente liviano y sirve para alcanzar alimento.'},
    'Coatí': {type:'Mamífero', habitat:'Bosques, matorrales y zonas arboladas.', region:'Desde el sur de Norteamérica hasta América del Sur, según la especie.', diet:'Frutos, insectos, huevos y pequeños animales.', power:'Su hocico largo y flexible funciona como una herramienta para buscar comida.'},
    'Ajolote': {type:'Anfibio', habitat:'Canales y lagos de agua dulce.', region:'Es nativo del sistema de Xochimilco, en Ciudad de México.', diet:'Gusanos, larvas, pequeños crustáceos y otros animales acuáticos.', power:'Puede regenerar extremidades y otros tejidos; además conserva rasgos juveniles al llegar a adulto.'},
    'Ornitorrinco': {type:'Mamífero', habitat:'Ríos, arroyos y lagos de agua dulce.', region:'Este de Australia y Tasmania.', diet:'Larvas de insectos, gusanos y pequeños animales acuáticos.', power:'Pone huevos y detecta señales eléctricas de sus presas con el pico.'},
    'Nutria marina': {type:'Mamífero marino', habitat:'Costas frías, bosques de kelp y aguas poco profundas.', region:'Océano Pacífico Norte.', diet:'Erizos, moluscos, cangrejos y otros invertebrados marinos.', power:'Puede usar piedras como herramientas para romper caparazones.'},
    'Delfín rosado': {type:'Mamífero acuático', habitat:'Grandes ríos, lagunas y bosques inundados de agua dulce.', region:'Cuencas del Amazonas y del Orinoco.', diet:'Peces, crustáceos y otros animales acuáticos.', power:'Tiene un cuello muy flexible para maniobrar entre ramas y vegetación inundada.'},
    'Capibara': {type:'Mamífero · roedor', habitat:'Humedales, sabanas inundables y orillas de ríos.', region:'Gran parte de América del Sur.', diet:'Pastos y plantas acuáticas.', power:'Es el roedor vivo más grande y nada muy bien.'},
    'Manatí': {type:'Mamífero acuático', habitat:'Ríos, estuarios y costas cálidas poco profundas.', region:'América y África, según la especie.', diet:'Plantas acuáticas y vegetación.', power:'Puede pasar horas alimentándose de plantas y está completamente adaptado a la vida acuática.'},
    'Pulpo Dumbo': {type:'Molusco · cefalópodo', habitat:'Fondos oceánicos muy profundos.', region:'Océanos de distintas partes del mundo.', diet:'Pequeños crustáceos, gusanos y otros animales del fondo.', power:'Nada moviendo unas aletas que parecen orejas.'},
    'Medusa': {type:'Cnidario', habitat:'Mares y océanos; algunas especies también viven en agua dulce.', region:'Prácticamente todo el planeta.', diet:'Plancton, huevos, larvas y pequeños animales.', power:'Su cuerpo gelatinoso se mueve contrayendo una campana y muchas especies poseen células urticantes.'},
    'Cangrejo yeti': {type:'Crustáceo', habitat:'Zonas profundas cercanas a fuentes hidrotermales o filtraciones frías.', region:'Océanos profundos.', diet:'Bacterias, materia orgánica y pequeños organismos, según la especie.', power:'Sus pinzas y patas pueden estar cubiertas de filamentos donde crecen bacterias.'},
    'Isópodo gigante': {type:'Crustáceo', habitat:'Fondo del mar a cientos de metros de profundidad.', region:'Océanos tropicales y templados profundos.', diet:'Restos de animales y otras fuentes de alimento del fondo marino.', power:'Es un pariente gigante de las cochinillas terrestres y posee 14 patas.'},
    'Tiburón duende': {type:'Pez cartilaginoso', habitat:'Aguas oceánicas profundas.', region:'Registrado en distintos océanos del mundo.', diet:'Peces, calamares y crustáceos.', power:'Puede lanzar sus mandíbulas hacia adelante con enorme rapidez para capturar presas.'},
    'Calamar vampiro': {type:'Molusco · cefalópodo', habitat:'Aguas profundas con muy poco oxígeno.', region:'Océanos tropicales y templados.', diet:'Partículas orgánicas que caen desde capas superiores, llamadas “nieve marina”.', power:'Puede vivir donde el oxígeno es demasiado bajo para muchos otros animales.'},
    'Fénec': {type:'Mamífero', habitat:'Desiertos arenosos y zonas áridas.', region:'Norte de África, especialmente el Sahara.', diet:'Insectos, pequeños vertebrados, frutos y raíces.', power:'Sus enormes orejas detectan sonidos y ayudan a liberar calor.'},
    'Saiga': {type:'Mamífero · antílope', habitat:'Estepas y semidesiertos abiertos.', region:'Asia Central.', diet:'Hierbas y otras plantas.', power:'Su gran nariz ayuda a filtrar polvo y a acondicionar el aire antes de que llegue a los pulmones.'},
    'Diablo espinoso': {type:'Reptil', habitat:'Desiertos y matorrales secos.', region:'Australia.', diet:'Principalmente hormigas.', power:'Puede conducir agua entre sus escamas hasta la boca mediante diminutos canales.'},
    'Jerbo': {type:'Mamífero · roedor', habitat:'Desiertos y estepas secas.', region:'Norte de África y Asia, según la especie.', diet:'Semillas, plantas e insectos.', power:'Sus patas traseras largas le permiten desplazarse con grandes saltos.'},
    'Sidewinder': {type:'Reptil · serpiente', habitat:'Desiertos de arena y grava.', region:'Suroeste de Estados Unidos y noroeste de México.', diet:'Roedores, lagartos y otros pequeños animales.', power:'Se mueve lateralmente, reduciendo el contacto de su cuerpo con la arena caliente.'},
    'Órix': {type:'Mamífero · antílope', habitat:'Desiertos, sabanas secas y zonas semidesérticas.', region:'África y la península arábiga, según la especie.', diet:'Pastos, hojas y otras plantas.', power:'Está adaptado a soportar calor intenso y periodos con poca agua disponible.'},
    'Leopardo de las nieves': {type:'Mamífero · felino', habitat:'Montañas altas, rocosas y frías.', region:'Asia Central y del Sur.', diet:'Cabras y ovejas silvestres, marmotas y otros animales.', power:'Su enorme cola le da equilibrio y también puede envolver su cuerpo para conservar calor.'},
    'Buey almizclero': {type:'Mamífero · bóvido', habitat:'Tundra ártica.', region:'Groenlandia y zonas árticas de Norteamérica; también ha sido introducido en otras regiones.', diet:'Hierbas, juncos, musgos y otras plantas.', power:'Posee una capa interna de pelo extremadamente aislante llamada qiviut.'},
    'Búho nival': {type:'Ave rapaz', habitat:'Tundra abierta y regiones árticas.', region:'Ártico de América del Norte, Europa y Asia.', diet:'Lemmings, otros pequeños mamíferos y aves.', power:'Su plumaje espeso llega incluso hasta patas y dedos para protegerlo del frío.'},
    'Pingüino emperador': {type:'Ave marina', habitat:'Hielo marino y océano alrededor de la Antártida.', region:'Antártida.', diet:'Peces, kril y calamares.', power:'Forma grupos muy compactos para conservar calor durante el invierno antártico.'},
    'Liebre ártica': {type:'Mamífero', habitat:'Tundra fría, costas y terrenos rocosos.', region:'Regiones árticas de Norteamérica y Groenlandia.', diet:'Plantas leñosas, brotes, hojas y hierbas.', power:'Sus patas grandes funcionan como “raquetas” sobre la nieve.'},
    'Zorro ártico': {type:'Mamífero', habitat:'Tundra ártica y costas frías.', region:'Regiones circumpolares del Ártico.', diet:'Lemmings, aves, huevos, peces y carroña.', power:'Su pelaje extremadamente denso cambia de aspecto con las estaciones en muchas poblaciones.'},
    'Pangolín': {type:'Mamífero', habitat:'Bosques, sabanas y matorrales.', region:'África y Asia, según la especie.', diet:'Hormigas y termitas.', power:'Es el único mamífero cubierto por grandes escamas de queratina y puede enrollarse como defensa.'},
    'Picozapato': {type:'Ave', habitat:'Pantanos, marismas y humedales con vegetación alta.', region:'África tropical oriental y central.', diet:'Peces grandes, anfibios y otros animales acuáticos.', power:'Su enorme pico le permite capturar presas grandes en aguas poco profundas.'},
    'Dragón de Komodo': {type:'Reptil · lagarto', habitat:'Bosques secos, sabanas y zonas de matorral.', region:'Varias islas de Indonesia.', diet:'Ciervos, jabalíes, carroña y otros animales.', power:'Es el lagarto vivo más grande del planeta.'},
    'Casuario': {type:'Ave no voladora', habitat:'Selvas tropicales húmedas.', region:'Nueva Guinea, islas cercanas y noreste de Australia.', diet:'Principalmente frutos; también pequeños animales y hongos.', power:'Tiene patas muy fuertes y un casco prominente sobre la cabeza.'},
    'Tardígrado': {type:'Animal microscópico · invertebrado', habitat:'Películas de agua en musgos, líquenes y suelos húmedos; también existen especies de agua dulce y marinas.', region:'Se encuentran en ambientes de todo el planeta, incluso en regiones extremas.', diet:'Depende de la especie: algunas perforan células de algas o plantas y otras comen microorganismos o pequeños animales.', power:'Tiene ocho patas y puede entrar en un estado de latencia llamado “tun” cuando el ambiente se vuelve muy seco o extremo.', size:'Normalmente mide menos de 1 milímetro.', note:'También lo llaman “oso de agua”.'},
    'Atlas Animal': {type:'Ecosistema conectado', habitat:'Todos los hábitats recuperados durante la expedición.', region:'Planeta Tierra.', diet:'No es un animal: representa la red de vida del planeta.', power:'Recordar que cada especie depende de su ambiente y se relaciona con otras formas de vida.'}
  };

  const missions = [
    // CAPÍTULO 1 — entender la división desde acciones diferentes
    {
      w:0,type:'share',challengeLabel:'REPARTIR',title:'El primer código',
      story:'Dos geckos llegaron al campamento. El Atlas necesita que repartas su alimento sin dejar a ninguno atrás.',
      prompt:'Reparte 6 insectos entre 2 geckos por partes iguales.',
      total:6,groups:2,emoji:'🦗',group:'Gecko',animal:'Gecko',animalEmoji:'🦎',
      hint:'Da un insecto a cada gecko por turnos.',reward:'6 ÷ 2 = 3.',
      feedbackRule:'al dividir, repartimos una cantidad en grupos iguales',
      feedbackAction:'Aquí tomaste 6 insectos y necesitabas dividirlos entre 2 geckos. Fuiste repartiendo hasta que cada gecko quedó con 3.',
      teaser:'En la siguiente misión volverás a repartir, pero será la última vez seguida. Después el Atlas cambiará la forma del reto.',
      fact:'Los geckos pueden trepar superficies gracias a estructuras microscópicas en sus dedos.'
    },
    {
      w:0,type:'share',challengeLabel:'REPARTIR',title:'La merienda del panda rojo',
      story:'Un puente de bambú solo se abrirá si los dos pandas reciben exactamente lo mismo.',
      prompt:'Reparte 8 trozos de bambú entre 2 pandas rojos.',
      total:8,groups:2,emoji:'🎋',group:'Panda',animal:'Panda rojo',animalEmoji:'🦝',
      hint:'Alterna: uno aquí, uno allá, hasta terminar.',reward:'8 ÷ 2 = 4.',
      feedbackRule:'al dividir, todos los grupos deben quedar con la misma cantidad',
      feedbackAction:'Aquí tenías 8 trozos de bambú y necesitabas dividirlos entre 2 pandas. Al terminar, cada panda recibió 4 trozos.',
      teaser:'Ahora cambia el juego: no vas a repartir nada. Tendrás que descubrir cuál reparto ya está bien hecho.',
      fact:'El panda rojo pasa mucho tiempo en los árboles y usa su larga cola para mantener el equilibrio.'
    },
    {
      w:0,type:'distributionChoice',challengeLabel:'ENCUENTRA EL REPARTO',title:'Ranas bajo la lluvia',
      story:'Tres ranas de cristal encontraron tres repartos diferentes. Solo uno mantiene el equilibrio del bosque.',
      prompt:'¿Cuál reparto representa 9 insectos divididos entre 3 ranas por partes iguales?',
      total:9,groups:3,emoji:'🪰',group:'Rana',animal:'Rana de cristal',animalEmoji:'🐸',
      options:[
        {id:'A',groups:[4,3,2]},
        {id:'B',groups:[3,3,3]},
        {id:'C',groups:[2,4,3]}
      ],correct:'B',hint:'Busca la opción donde las 3 ranas tengan exactamente la misma cantidad.',reward:'9 ÷ 3 = 3.',
      feedbackRule:'al dividir, un reparto correcto deja todos los grupos iguales',
      feedbackAction:'Aquí no tuviste que mover los 9 insectos. Reconociste que 3, 3 y 3 era el único reparto donde las 3 ranas quedaban iguales.',
      teaser:'La próxima misión tendrá un grupo incompleto. Tu reto será descubrir qué le falta.',
      fact:'Algunas ranas de cristal tienen la piel del vientre tan transparente que se pueden ver órganos internos.'
    },
    {
      w:0,type:'completeGroup',challengeLabel:'COMPLETA EL GRUPO',title:'Hojas para los perezosos',
      story:'Tres perezosos necesitan la misma cantidad de hojas. Dos grupos ya están completos, pero uno quedó a medias.',
      prompt:'Dos perezosos tienen 4 hojas cada uno. El tercero tiene 2. ¿Cuántas hojas le faltan para quedar igual?',
      total:12,groups:3,target:4,preview:[4,4,2],answers:[1,2,3],correct:2,emoji:'🍃',group:'Perezoso',animal:'Perezoso',animalEmoji:'🦥',
      hint:'Mira los grupos que ya tienen 4. ¿Cuántas faltan para que 2 llegue a 4?',reward:'12 ÷ 3 = 4.',
      feedbackRule:'al dividir, cada grupo debe alcanzar la misma cantidad',
      feedbackAction:'Aquí viste que dos perezosos tenían 4 hojas y uno solo tenía 2. Descubriste que necesitaba 2 hojas más para que los 3 grupos quedaran en 4.',
      teaser:'En la siguiente misión NOVA hará un reparto con un error. Tú tendrás que detectarlo.',
      fact:'Los perezosos se mueven lentamente y gran parte de su vida transcurre en los árboles.'
    },
    {
      w:0,type:'findError',challengeLabel:'DETECTA EL ERROR',title:'El desayuno de los tucanes',
      story:'NOVA intentó repartir los frutos de los tucanes, pero el Atlas detectó que algo quedó desequilibrado.',
      prompt:'Cada tucán debería tener 5 frutos. ¿Cuál tucán recibió 1 fruto de más?',
      total:15,groups:3,target:5,preview:[5,6,4],correct:1,emoji:'🫐',group:'Tucán',animal:'Tucán',animalEmoji:'🦜',
      hint:'Compara cada grupo con 5. Busca el que llegó a 6.',reward:'15 ÷ 3 = 5.',
      feedbackRule:'al dividir, podemos comprobar el reparto comparando cada grupo con la cantidad que debería tener',
      feedbackAction:'Aquí sabías que cada tucán debía tener 5 frutos. Detectaste que uno tenía 6, así que ese reparto todavía no estaba equilibrado.',
      teaser:'El último reto del bosque será distinto: verás el total y los grupos, pero tendrás que descubrir cuánto corresponde a cada uno.',
      fact:'El gran pico del tucán es ligero porque contiene una estructura interna parecida a una espuma ósea.'
    },
    {
      w:0,type:'groupSize',challengeLabel:'DESCUBRE CUÁNTO TOCA',title:'La puerta de cuatro huellas',
      story:'Cuatro coatíes rodean la salida del bosque. Esta vez el Atlas no quiere que muevas cada fruto uno por uno.',
      prompt:'Hay 16 frutos y 4 coatíes. Si todos reciben lo mismo, ¿cuántos frutos le corresponden a cada uno?',
      total:16,groups:4,answers:[3,4,5,6],correct:4,emoji:'🍇',group:'Coatí',animal:'Coatí',animalEmoji:'🐾',
      hint:'Piensa en 4 grupos iguales que juntos formen 16.',reward:'16 ÷ 4 = 4. ¡Primer mundo recuperado!',
      feedbackRule:'al dividir, el resultado nos dice cuánto le corresponde a cada grupo',
      feedbackAction:'Aquí tenías 16 frutos y 4 coatíes. Sin mover cada fruto, descubriste que 4 para cada coatí forma exactamente los 16.',
      teaser:'Bosque recuperado. En los Ríos Secretos empezarás a conectar los dibujos con el símbolo ÷.',
      fact:'Los coatíes usan su hocico flexible para buscar alimento entre hojas y suelo.'
    },

    // CAPÍTULO 2 — conectar representaciones, corregir y pasar a números
    {
      w:1,type:'representationChoice',challengeLabel:'UNE DIBUJO Y DIVISIÓN',title:'Señal del ajolote',
      story:'Una luz aparece bajo el agua. El ajolote encontró el símbolo 12 ÷ 3, pero necesita saber qué dibujo representa esa idea.',
      prompt:'¿Cuál dibujo representa 12 dividido entre 3 grupos iguales?',
      total:12,groups:3,equation:[12,3,4],emoji:'🦐',animal:'Ajolote',animalEmoji:'🦎',
      options:[
        {id:'A',groups:[4,4,4]},
        {id:'B',groups:[3,3,3]},
        {id:'C',groups:[5,4,3]}
      ],correct:'A',hint:'12 ÷ 3 significa formar 3 grupos iguales usando los 12 objetos.',reward:'12 ÷ 3 = 4.',
      feedbackRule:'al dividir, el símbolo ÷ representa el mismo reparto en grupos iguales que ya aprendiste a hacer',
      feedbackAction:'Aquí viste 12 ÷ 3 y elegiste el dibujo con 3 grupos de 4. El dibujo y la operación estaban contando exactamente la misma historia.',
      teaser:'Ahora el Atlas hará la pregunta al revés: ya conocerás cuánto quedó en cada grupo y deberás descubrir el total.',
      fact:'El ajolote puede regenerar partes de su cuerpo y conserva rasgos larvarios durante su vida.'
    },
    {
      w:1,type:'reverseTotal',challengeLabel:'PIENSA AL REVÉS',title:'El ornitorrinco curioso',
      story:'Dos ornitorrincos ya terminaron de repartir su alimento. El Atlas borró el número que decía cuántos bocados había al inicio.',
      prompt:'Hay 2 ornitorrincos y cada uno terminó con 5 bocados. ¿Cuántos bocados había antes de repartir?',
      groups:2,each:5,answers:[8,10,12],correct:10,emoji:'🪱',group:'Ornitorrinco',animal:'Ornitorrinco',animalEmoji:'🦆',
      hint:'Junta los dos grupos de 5: 5 + 5.',reward:'10 ÷ 2 = 5.',
      feedbackRule:'al dividir, también puedes comprobar la respuesta juntando otra vez los grupos',
      feedbackAction:'Aquí viste 2 grupos de 5 y descubriste que juntos forman 10. Eso confirma que si 10 se divide entre 2, a cada grupo le corresponden 5.',
      teaser:'La siguiente misión tendrá un reparto casi correcto. Solo tendrás que hacer un movimiento para equilibrarlo.',
      fact:'El ornitorrinco es un mamífero que pone huevos.'
    },
    {
      w:1,type:'balance',challengeLabel:'EQUILIBRA EL REPARTO',title:'Nutrias en equipo',
      story:'Cinco nutrias recibieron peces, pero una ola movió uno de lugar. El reparto quedó 4, 4, 3, 4 y 5.',
      prompt:'¿Qué movimiento deja a las 5 nutrias con 4 peces cada una?',
      total:20,groups:5,target:4,preview:[4,4,3,4,5],emoji:'🐟',group:'Nutria',animal:'Nutria marina',animalEmoji:'🦦',
      actions:[
        {id:'A',label:'Mover 1 pez de la nutria 5 a la nutria 3'},
        {id:'B',label:'Mover 1 pez de la nutria 1 a la nutria 2'},
        {id:'C',label:'Dar 1 pez más a la nutria 5'}
      ],correct:'A',hint:'Busca una nutria que tenga 1 de más y otra que tenga 1 de menos.',reward:'20 ÷ 5 = 4.',
      feedbackRule:'al dividir, puedes corregir un reparto hasta que todos los grupos tengan la misma cantidad',
      feedbackAction:'Aquí el reparto casi estaba listo: una nutria tenía 5 y otra 3. Moviste 1 pez de la que tenía de más a la que tenía de menos y todas quedaron con 4.',
      teaser:'Ahora aparecerá una historia. Tendrás que descubrir qué división se esconde dentro de ella.',
      fact:'Las nutrias marinas pueden usar piedras como herramientas para abrir alimento con caparazón.'
    },
    {
      w:1,type:'storyChoice',challengeLabel:'RESUELVE EL MISTERIO',title:'Delfines rosados',
      story:'Tres delfines rosados encontraron 18 peces y entraron en tres túneles distintos. Para abrir el paso, cada túnel debe recibir la misma cantidad.',
      prompt:'Si los 18 peces se reparten entre 3 delfines por igual, ¿cuántos recibe cada uno?',
      total:18,groups:3,answers:[5,6,7,9],correct:6,emoji:'🐟',group:'Delfín',animal:'Delfín rosado',animalEmoji:'🐬',
      hint:'La historia dice 18 en total y 3 grupos iguales. Eso es 18 ÷ 3.',reward:'18 ÷ 3 = 6.',
      feedbackRule:'al dividir, una historia puede esconder el total y la cantidad de grupos',
      feedbackAction:'Aquí la historia te dio 18 peces y 3 delfines. Reconociste que debías repartir 18 entre 3 y descubriste que a cada uno le correspondían 6.',
      teaser:'El siguiente código aparecerá casi sin dibujos. Vas a usar todo lo que ya entendiste para resolverlo con números.',
      fact:'El delfín del Amazonas puede presentar tonos rosados y vive en sistemas de agua dulce sudamericanos.'
    },
    {
      w:1,type:'equation',challengeLabel:'CÓDIGO NUMÉRICO',title:'La piedra del capibara',
      story:'El capibara encontró una piedra con un código escrito solo con números. Ya no hay que mover todos los objetos para entenderlo.',
      prompt:'Elige el resultado correcto para abrir el paso.',equation:[24,6,4],answers:[3,4,5,6],animal:'Capibara',animalEmoji:'🦫',
      hint:'Imagina 24 objetos repartidos en 6 grupos iguales. También puedes pensar: 6 × ¿qué número? = 24.',reward:'24 ÷ 6 = 4.',
      feedbackRule:'al dividir, puedes usar la idea de grupos iguales aunque ya no veas todos los objetos',
      feedbackAction:'Aquí resolviste 24 ÷ 6 usando números. La lógica seguía siendo la misma: 24 repartido en 6 grupos deja 4 en cada grupo.',
      teaser:'Se acerca el Guardián del Río. La última misión mezclará dibujos, símbolo ÷ y resultado en un solo desafío.',
      fact:'El capibara es el roedor vivo más grande del mundo y está muy adaptado a la vida cerca del agua.'
    },
    {
      w:1,type:'boss',challengeLabel:'GUARDIÁN DEL MUNDO',title:'La compuerta del manatí',
      story:'Una enorme compuerta bloquea el río. El manatí activó tres cerraduras: reparto, operación y resultado. Debes conectar las tres.',
      prompt:'Supera las 3 cerraduras del Guardián del Río.',equation:[28,4,7],total:28,groups:4,animal:'Manatí',animalEmoji:'🦭',
      boss:{
        distributions:[
          {id:'A',groups:[8,7,7,6]},
          {id:'B',groups:[7,7,7,7]},
          {id:'C',groups:[6,8,7,7]}
        ],
        operations:[
          {id:'A',label:'28 ÷ 4'},
          {id:'B',label:'28 × 4'},
          {id:'C',label:'28 − 4'}
        ],
        results:[5,6,7,8],
        correct:{distribution:'B',operation:'A',result:7}
      },
      hint:'Primero busca 4 grupos iguales. Después elige la operación que significa repartir 28 entre 4.',reward:'28 ÷ 4 = 7. ¡Los Ríos Secretos están conectados!',
      feedbackRule:'al dividir, la situación, los grupos, el símbolo ÷ y el resultado representan la misma idea',
      feedbackAction:'Aquí conectaste tres cosas: 28 objetos en 4 grupos iguales, la operación 28 ÷ 4 y el resultado 7. Las tres formas describen el mismo reparto.',
      teaser:'Ríos Secretos recuperados. El Océano Profundo te espera con códigos nuevos y criaturas cada vez más extrañas.',
      fact:'Los manatíes son mamíferos acuáticos herbívoros y pasan gran parte del día alimentándose.'
    },

    // CAPÍTULO 3 — símbolo división y tablas 2-6
    {w:2,type:'equation',title:'Luces en la oscuridad',story:'El submarino desciende. Un pulpo Dumbo aparece donde casi no llega la luz.',prompt:'Descifra 14 ÷ 2.',equation:[14,2,7],answers:[5,6,7,8],animal:'Pulpo Dumbo',animalEmoji:'🐙',hint:'La mitad de 14 es...',reward:'14 ÷ 2 = 7.',fact:'Los pulpos Dumbo viven a grandes profundidades y reciben su apodo por sus aletas parecidas a orejas.'},
    {w:2,type:'equation',title:'La medusa luminosa',story:'Una medusa ilumina tres caminos. Solo uno conduce al siguiente código.',prompt:'Resuelve 21 ÷ 3.',equation:[21,3,7],answers:[6,7,8,9],animal:'Medusa',animalEmoji:'🪼',hint:'3 × 7 = ¿?',reward:'21 ÷ 3 = 7.',fact:'Muchas medusas se desplazan contrayendo y relajando su campana gelatinosa.'},
    {w:2,type:'equation',title:'El guardián yeti',story:'Junto a una fuente caliente del fondo marino aparece un extraño cangrejo cubierto de filamentos.',prompt:'Resuelve 32 ÷ 4.',equation:[32,4,8],answers:[6,7,8,9],animal:'Cangrejo yeti',animalEmoji:'🦀',hint:'4 × ¿qué número? = 32.',reward:'32 ÷ 4 = 8.',fact:'El cangrejo yeti vive cerca de fuentes hidrotermales y posee abundantes filamentos en sus pinzas.'},
    {w:2,type:'equation',title:'El gigante del fondo',story:'Un isópodo gigante pasa lentamente junto al casco del submarino.',prompt:'Resuelve 35 ÷ 5.',equation:[35,5,7],answers:[5,6,7,8],animal:'Isópodo gigante',animalEmoji:'🪲',hint:'Cuenta de 5 en 5 hasta llegar a 35.',reward:'35 ÷ 5 = 7.',fact:'Los isópodos gigantes son parientes marinos de las cochinillas de humedad y viven en aguas profundas.'},
    {w:2,type:'equation',title:'Sombra de tiburón',story:'Una silueta con hocico largo cruza la oscuridad: es un tiburón duende.',prompt:'Resuelve 42 ÷ 6.',equation:[42,6,7],answers:[6,7,8,9],animal:'Tiburón duende',animalEmoji:'🦈',hint:'6 × 7 = 42.',reward:'42 ÷ 6 = 7.',fact:'El tiburón duende posee mandíbulas que pueden proyectarse rápidamente hacia adelante para capturar presas.'},
    {w:2,type:'equation',title:'El calamar vampiro',story:'El último portal del océano pulsa con una luz roja. Un calamar vampiro flota frente a él.',prompt:'Resuelve 48 ÷ 6.',equation:[48,6,8],answers:[6,7,8,9],animal:'Calamar vampiro',animalEmoji:'🦑',hint:'¿Cuántas veces cabe 6 en 48?',reward:'48 ÷ 6 = 8. ¡Océano Profundo restaurado!',fact:'El calamar vampiro vive en zonas del océano con muy poco oxígeno y no es realmente un vampiro.'},

    // CAPÍTULO 4 — tablas 7,8,9
    {w:3,type:'equation',title:'El zorro de grandes orejas',story:'El aire caliente mueve la arena. Un fénec escucha algo debajo de las dunas.',prompt:'Resuelve 56 ÷ 7.',equation:[56,7,8],answers:[6,7,8,9],animal:'Fénec',animalEmoji:'🦊',hint:'7 × 8 = 56.',reward:'56 ÷ 7 = 8.',fact:'Las grandes orejas del fénec ayudan a detectar sonidos y también a disipar calor.'},
    {w:3,type:'equation',title:'La ruta del saiga',story:'Una manada cruza la llanura. Su nariz parece de otro planeta.',prompt:'Resuelve 63 ÷ 7.',equation:[63,7,9],answers:[7,8,9,10],animal:'Saiga',animalEmoji:'🐐',hint:'7 × 9 = 63.',reward:'63 ÷ 7 = 9.',fact:'El saiga tiene una nariz grande y flexible que ayuda a filtrar polvo y acondicionar el aire.'},
    {w:3,type:'equation',title:'Pasos en la arena',story:'Un lagarto espinoso deja un patrón de ocho huellas cerca de una roca brillante.',prompt:'Resuelve 64 ÷ 8.',equation:[64,8,8],answers:[6,7,8,9],animal:'Diablo espinoso',animalEmoji:'🦎',hint:'8 × 8 = 64.',reward:'64 ÷ 8 = 8.',fact:'El diablo espinoso australiano puede conducir agua por canales microscópicos entre sus escamas hacia la boca.'},
    {w:3,type:'equation',title:'El corredor nocturno',story:'Cuando cae la noche, un pequeño jerbo salta entre las piedras del desierto.',prompt:'Resuelve 72 ÷ 8.',equation:[72,8,9],answers:[7,8,9,10],animal:'Jerbo',animalEmoji:'🐭',hint:'8 × 9 = 72.',reward:'72 ÷ 8 = 9.',fact:'Los jerbos tienen patas traseras largas adaptadas para desplazarse a saltos.'},
    {w:3,type:'equation',title:'La serpiente lateral',story:'Una serpiente avanza de lado para moverse sobre la arena suelta.',prompt:'Resuelve 81 ÷ 9.',equation:[81,9,9],answers:[7,8,9,10],animal:'Sidewinder',animalEmoji:'🐍',hint:'9 × 9 = 81.',reward:'81 ÷ 9 = 9.',fact:'Algunas víboras del desierto usan un movimiento lateral que reduce el contacto con la arena caliente.'},
    {w:3,type:'equation',title:'El arco de piedra',story:'Una enorme puerta emerge entre las dunas. Es la salida del cuarto mundo.',prompt:'Resuelve 90 ÷ 9.',equation:[90,9,10],answers:[8,9,10,11],animal:'Órix',animalEmoji:'🦌',hint:'9 × 10 = 90.',reward:'90 ÷ 9 = 10. ¡Desierto superado!',fact:'Los órix están adaptados a ambientes secos y pueden soportar largos periodos con poca agua disponible.'},

    // CAPÍTULO 5 — números mayores
    {w:4,type:'equation',title:'Huellas sobre la nieve',story:'Una sombra cruza una pendiente imposible. Es un leopardo de las nieves.',prompt:'Resuelve 84 ÷ 7.',equation:[84,7,12],answers:[10,11,12,13],animal:'Leopardo de las nieves',animalEmoji:'🐆',hint:'7 × 12 = 84.',reward:'84 ÷ 7 = 12.',fact:'El leopardo de las nieves tiene una cola muy larga que le ayuda con el equilibrio y puede usarla como abrigo.'},
    {w:4,type:'equation',title:'El buey de la tormenta',story:'El viento se vuelve más fuerte. Un buey almizclero permanece firme frente a la nieve.',prompt:'Resuelve 96 ÷ 8.',equation:[96,8,12],answers:[10,11,12,13],animal:'Buey almizclero',animalEmoji:'🐂',hint:'8 × 12 = 96.',reward:'96 ÷ 8 = 12.',fact:'Los bueyes almizcleros poseen un pelaje muy denso que los protege del frío intenso.'},
    {w:4,type:'equation',title:'El búho silencioso',story:'Un búho nival aterriza junto a una baliza congelada del Atlas.',prompt:'Resuelve 108 ÷ 9.',equation:[108,9,12],answers:[10,11,12,13],animal:'Búho nival',animalEmoji:'🦉',hint:'9 × 12 = 108.',reward:'108 ÷ 9 = 12.',fact:'El búho nival tiene plumaje claro que le ayuda a camuflarse en paisajes nevados.'},
    {w:4,type:'equation',title:'La colonia de pingüinos',story:'Una fila de pingüinos emperador protege una cápsula matemática del viento.',prompt:'Resuelve 120 ÷ 10.',equation:[120,10,12],answers:[10,11,12,14],animal:'Pingüino emperador',animalEmoji:'🐧',hint:'Dividir entre 10 puede ayudarte a pensar cuántas decenas hay.',reward:'120 ÷ 10 = 12.',fact:'Los pingüinos emperador forman grupos compactos para conservar calor durante condiciones extremas.'},
    {w:4,type:'equation',title:'La liebre blanca',story:'Una liebre cambia de dirección sobre el hielo y deja once marcas junto al código.',prompt:'Resuelve 121 ÷ 11.',equation:[121,11,11],answers:[9,10,11,12],animal:'Liebre ártica',animalEmoji:'🐇',hint:'11 × 11 = 121.',reward:'121 ÷ 11 = 11.',fact:'La liebre ártica tiene patas grandes y pelaje grueso que la ayudan a vivir en regiones frías.'},
    {w:4,type:'equation',title:'La bóveda de hielo',story:'El glaciar se abre y revela el acceso al Santuario Perdido.',prompt:'Resuelve 132 ÷ 11.',equation:[132,11,12],answers:[10,11,12,13],animal:'Zorro ártico',animalEmoji:'🦊',hint:'11 × 12 = 132.',reward:'132 ÷ 11 = 12. ¡Tierras Heladas recuperadas!',fact:'El zorro ártico cambia el grosor de su pelaje según la estación y está muy adaptado al frío.'},

    // CAPÍTULO 6 — desafío final divisores mayores
    {w:5,type:'equation',title:'La armadura viviente',story:'Dentro del Santuario aparece un pangolín. Sus escamas reflejan símbolos del Atlas.',prompt:'Resuelve 144 ÷ 12.',equation:[144,12,12],answers:[10,11,12,13],animal:'Pangolín',animalEmoji:'🦔',hint:'12 × 12 = 144.',reward:'144 ÷ 12 = 12.',fact:'Los pangolines son mamíferos cubiertos de escamas de queratina y pueden enrollarse para protegerse.'},
    {w:5,type:'equation',title:'El ave de mirada seria',story:'Un picozapato bloquea una pasarela antigua y observa el siguiente código.',prompt:'Resuelve 156 ÷ 12.',equation:[156,12,13],answers:[11,12,13,14],animal:'Picozapato',animalEmoji:'🦤',hint:'12 × 13 = 156.',reward:'156 ÷ 12 = 13.',fact:'El picozapato es un ave de humedales africanos conocida por su enorme pico en forma de zapato.'},
    {w:5,type:'equation',title:'El guardián de Komodo',story:'Un dragón de Komodo descansa frente a una puerta de piedra marcada con treces.',prompt:'Resuelve 169 ÷ 13.',equation:[169,13,13],answers:[11,12,13,14],animal:'Dragón de Komodo',animalEmoji:'🦎',hint:'13 × 13 = 169.',reward:'169 ÷ 13 = 13.',fact:'El dragón de Komodo es el lagarto vivo más grande del mundo.'},
    {w:5,type:'equation',title:'El casuario del corredor',story:'Un casuario cruza rápidamente un corredor cubierto de hojas metálicas.',prompt:'Resuelve 180 ÷ 12.',equation:[180,12,15],answers:[12,13,14,15],animal:'Casuario',animalEmoji:'🐦',hint:'12 × 15 = 180.',reward:'180 ÷ 12 = 15.',fact:'El casuario es un ave no voladora con patas fuertes y un casco prominente sobre la cabeza.'},
    {w:5,type:'equation',title:'La criatura diminuta',story:'Reconoces la criatura de inmediato: es un tardígrado. El Atlas activa el modo microscopio y lo convierte en el guardián del penúltimo código.',prompt:'Resuelve 196 ÷ 14.',equation:[196,14,14],answers:[12,13,14,15],animal:'Tardígrado',animalEmoji:'🔬',hint:'14 × 14 = 196.',reward:'196 ÷ 14 = 14.',fact:'El tardígrado, también llamado oso de agua, es un animal microscópico de ocho patas. Muchas especies pueden entrar en un estado de latencia llamado “tun” cuando pierden casi toda el agua de su cuerpo.'},
    {w:5,type:'equation',title:'El corazón del Atlas',story:'Todas las criaturas aparecen alrededor del núcleo. Solo falta un código. Este es el final de la expedición.',prompt:'Resuelve el último código: 225 ÷ 15.',equation:[225,15,15],answers:[12,13,14,15],animal:'Atlas Animal',animalEmoji:'🌍',hint:'15 × 15 = 225.',reward:'225 ÷ 15 = 15. ¡El Atlas está completo!',fact:'Cada especie del planeta forma parte de una red de vida conectada con su ambiente y con otras especies.'}
  ];

  const SAVE_KEY = 'emilianoGameStateV2';

  function readSavedGame() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  const savedGame = readSavedGame();
  let soundOn = savedGame?.soundOn ?? (localStorage.getItem('emilianoSound') !== 'off');
  let mission = Number(savedGame?.mission ?? localStorage.getItem('emilianoMission') ?? 0);
  if (!Number.isFinite(mission) || mission < 0 || mission >= missions.length) mission = 0;
  if (localStorage.getItem('emilianoUnlocked') === null) {
    localStorage.setItem('emilianoUnlocked', String(savedGame?.unlocked ?? mission));
  }
  let selectedCreature = null;
  let selectedAnswer = null;
  let attemptCount = 0;
  let tutorRequestId = 0;
  let feedbackRequestId = 0;
  let tutorHistory = [];
  let tutorBusy = false;

  let generalTutorHistory = [];
  let generalTutorBusy = false;
  let generalTutorRequestId = 0;
  let generalTutorSessionLoadedFor = '';
  let currentMissionCompleted = false;
  let gameCompleted = Boolean(savedGame?.gameCompleted);
  let mechanicState = {};
  let currentFeedback = '';

  function collectShareState() {
    const bank = $('#bank');
    if (!bank) return null;
    const bankIds = [...bank.children].map(el => Number(el.dataset.id));
    const groups = [...document.querySelectorAll('.zone-items')].map(zone =>
      [...zone.children].map(el => Number(el.dataset.id))
    );
    return { bankIds, groups };
  }

  function saveGameState() {
    if (testerMode) return;

    const state = {
      version: 3,
      mission,
      unlocked: unlockedCount(),
      soundOn,
      introSeen: localStorage.getItem('emilianoIntroSeen') === 'yes',
      selectedAnswer,
      mechanicState,
      attemptCount,
      tutorHistory: tutorHistory.slice(-12),
      tutorOpen: !aiTutorCard.hidden,
      shareState: missions[mission]?.type === 'share' ? collectShareState() : null,
      currentMissionCompleted,
      currentFeedback,
      gameCompleted,
      savedAt: Date.now()
    };
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
      localStorage.setItem('emilianoMission', String(mission));
      localStorage.setItem('emilianoUnlocked', String(state.unlocked));
      localStorage.setItem('emilianoSound', soundOn ? 'on' : 'off');
    } catch {}
    scheduleCloudSync();
  }

  function clearCurrentMissionState() {
    selectedCreature = null;
    selectedAnswer = null;
    mechanicState = {};
    attemptCount = 0;
    tutorHistory = [];
    currentMissionCompleted = false;
    currentFeedback = '';
    gameCompleted = false;
  }

  missionTotal.textContent = missions.length;
  soundBtn.textContent = soundOn ? '🔊 Activado' : '🔇 Desactivado';
  soundBtn.setAttribute('aria-pressed', String(soundOn));

  function audioTone(freq = 440, duration = .08, type = 'sine', gain = .05, delay = 0) {
    if (!soundOn) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = audioTone.ctx || (audioTone.ctx = new AudioCtx());
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    const startAt = ctx.currentTime + delay;
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startAt);
    g.gain.setValueAtTime(gain, startAt);
    osc.connect(g).connect(ctx.destination);
    osc.start(startAt);
    g.gain.exponentialRampToValueAtTime(.0001, startAt + duration);
    osc.stop(startAt + duration);
  }

  function playSuccess() {
    [523, 659, 784, 1047].forEach((f, i) => audioTone(f, .22, 'sine', .055, i * .085));
  }
  function playStart() {
    [220, 330, 440, 660].forEach((f, i) => audioTone(f, .3, 'triangle', .04, i * .11));
  }
  function playTap() { audioTone(390, .05, 'triangle', .03); }
  function playOops() { audioTone(180, .10, 'sine', .02); }

  function showToast(msg, duration = 2100) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast.t);
    showToast.t = setTimeout(() => toast.classList.remove('show'), duration);
  }

  function openApp(withSound = true) {
    if (!commercialAccessGranted) {
      showCommercialGate('Activa el plan familiar para entrar a Aprende con NOVA.');
      return;
    }
    if (withSound) playStart();
    intro.classList.add('intro-exit');
    setTimeout(() => {
      intro.hidden = true;
      app.hidden = false;
      renderMission();
        window.scrollTo(0, 0);
    }, 420);
    localStorage.setItem('emilianoIntroSeen', 'yes');
    saveGameState();
  }

  function currentWorldIndex() { return missions[mission].w; }

  function profileFor(m) {
    return animalProfiles[m.animal] || {type:'Animal', habitat:'Hábitat por descubrir.', region:'', diet:'Alimentación por descubrir.', power:m.fact || 'Cada especie tiene adaptaciones especiales.'};
  }

  function animalVisualMarkup(m, extraClass = '') {
    if (m.animal === 'Tardígrado') {
      return `<span class="tardigrade-art ${extraClass}" role="img" aria-label="Ilustración de un tardígrado">
        <svg viewBox="0 0 180 120" aria-hidden="true">
          <defs><linearGradient id="tg" x1="0" x2="1"><stop stop-color="#ffd27b"/><stop offset="1" stop-color="#ff8fb7"/></linearGradient></defs>
          <g fill="none" stroke="url(#tg)" stroke-width="11" stroke-linecap="round">
            <path d="M48 40 L24 18 M43 55 L18 54 M50 73 L26 96 M79 80 L65 108 M112 78 L126 107 M137 66 L161 91 M139 48 L166 38 M124 34 L139 14"/>
          </g>
          <path d="M42 28 C70 6 126 14 145 44 C160 68 134 94 93 96 C53 98 25 77 30 54 C33 42 36 34 42 28Z" fill="url(#tg)"/>
          <path d="M61 33 C72 50 70 72 61 86 M92 24 C101 46 100 74 94 91 M122 30 C130 49 129 70 121 86" stroke="rgba(120,46,85,.35)" stroke-width="4" fill="none"/>
          <circle cx="54" cy="48" r="4" fill="#301b45"/><circle cx="72" cy="44" r="4" fill="#301b45"/>
        </svg>
      </span>`;
    }
    return `<span class="emoji-art ${extraClass}" role="img" aria-label="${m.animal}">${m.animalEmoji}</span>`;
  }

  function fillRewardProfile(m) {
    const p = profileFor(m);
    fieldAnimalName.textContent = m.animal;
    profileType.textContent = p.type;
    profileHabitat.textContent = p.habitat;
    profileDiet.textContent = p.diet;
    profilePower.textContent = p.power;
  }

  function showAnimalProfile(m) {
    const p = profileFor(m);
    animalModalTitle.textContent = m.animal;
    animalProfile.innerHTML = `
      <div class="profile-hero">
        <div class="profile-visual">${animalVisualMarkup(m, 'profile-art')}</div>
        <div><span class="profile-kicker">PERSONAJE DEL ATLAS</span><h3>${m.animal}</h3><p>${p.note || m.fact}</p></div>
      </div>
      <div class="profile-facts">
        <article><span>🧬 ¿QUÉ ES?</span><strong>${p.type}</strong></article>
        <article><span>📍 ¿DÓNDE VIVE?</span><strong>${p.habitat}</strong><small>${p.region || ''}</small></article>
        <article><span>🍽️ ¿QUÉ COME?</span><strong>${p.diet}</strong></article>
        <article><span>⚡ HABILIDAD ESPECIAL</span><strong>${p.power}</strong></article>
        ${p.size ? `<article><span>📏 TAMAÑO</span><strong>${p.size}</strong></article>` : ''}
      </div>
      <div class="math-link"><span>÷</span><div><small>LA REGLA DE NOVA</small><strong>Para seguir avanzando, debes resolver el código de división de esta criatura.</strong></div></div>`;
    animalModal.hidden = false;
    document.body.classList.add('modal-open');
    playTap();
  }

  function unlockedCount() {
    return Math.max(0, Math.min(missions.length, Number(localStorage.getItem('emilianoUnlocked') || 0)));
  }

  function buildFieldGuide() {
    const unlocked = unlockedCount();
    guideProgress.innerHTML = `<strong>${unlocked} / ${missions.length}</strong><span>criaturas y archivos recuperados</span>`;
    fieldGuideGrid.innerHTML = '';
    missions.forEach((m, i) => {
      const open = i < unlocked;
      const card = document.createElement('button');
      card.type = 'button';
      card.className = `guide-animal ${open ? 'unlocked' : 'locked'}`;
      card.disabled = !open;
      card.innerHTML = open
        ? `<div class="guide-animal-visual">${animalVisualMarkup(m)}</div><small>MISIÓN ${i+1}</small><strong>${m.animal}</strong><span>${profileFor(m).type}</span>`
        : `<div class="guide-lock">?</div><small>MISIÓN ${i+1}</small><strong>Por descubrir</strong><span>Resuelve la división</span>`;
      if (open) card.addEventListener('click', () => { guideModal.hidden = true; showAnimalProfile(m); });
      fieldGuideGrid.appendChild(card);
    });
  }

  function setProgress(extra = 0) {
    const completed = Math.min(mission + extra, missions.length);
    const pct = Math.round((completed / missions.length) * 100);
    progressBar.style.width = pct + '%';
    progressText.textContent = pct + '%';
  }

  function renderWorldHeader(m) {
    const w = worlds[m.w];
    const firstIndex = missions.findIndex(x => x.w === m.w);
    const inWorld = mission - firstIndex + 1;
    const count = missions.filter(x => x.w === m.w).length;
    worldIcon.textContent = w.icon;
    worldName.textContent = w.name;
    chapterText.textContent = `CAPÍTULO ${m.w + 1}`;
    worldProgress.textContent = `${inWorld}/${count}`;
    document.documentElement.style.setProperty('--world-accent', w.color);
  }

  function restoreSharingState(saved) {
    if (!saved?.shareState?.groups) return;
    const bank = $('#bank');
    if (!bank) return;
    saved.shareState.groups.forEach((ids, groupIndex) => {
      const target = document.querySelector(`.zone[data-group="${groupIndex}"] .zone-items`);
      if (!target) return;
      ids.forEach(id => {
        const creature = bank.querySelector(`.creature[data-id="${id}"]`);
        if (creature) target.appendChild(creature);
      });
    });
    updateZoneCounts();
  }

  function restoreGenericState(saved) {
    mechanicState = saved?.mechanicState && typeof saved.mechanicState === 'object' ? saved.mechanicState : {};
    selectedAnswer = saved?.selectedAnswer ?? null;

    document.querySelectorAll('[data-select-answer]').forEach(btn => {
      btn.classList.toggle('selected', String(btn.dataset.selectAnswer) === String(selectedAnswer));
    });

    document.querySelectorAll('[data-boss-kind]').forEach(btn => {
      const kind = btn.dataset.bossKind;
      btn.classList.toggle('selected', String(btn.dataset.bossValue) === String(mechanicState?.[kind] ?? ''));
    });
  }

  function restoreTutorState(saved) {
    tutorHistory = Array.isArray(saved?.tutorHistory) ? saved.tutorHistory.slice(-12) : [];
    resetTutorChat();
    tutorHistory.forEach(item => {
      if (item?.role === 'user' || item?.role === 'assistant') {
        appendTutorMessage(item.role === 'user' ? 'user' : 'assistant', String(item.content || ''));
      }
    });
    aiTutorCard.hidden = !(saved?.tutorOpen && tutorHistory.length);
  }

  function equationForMission(m) {
    if (Array.isArray(m.equation) && m.equation.length >= 3) return m.equation.slice(0, 3);
    if (Number.isFinite(m.total) && Number.isFinite(m.groups) && m.groups !== 0) {
      return [m.total, m.groups, m.total / m.groups];
    }
    if (Number.isFinite(m.groups) && Number.isFinite(m.each)) {
      return [m.groups * m.each, m.groups, m.each];
    }
    return null;
  }

  function fallbackMissionFeedback(m) {
    const eq = equationForMission(m);
    if (m.feedbackRule && m.feedbackAction) {
      const ending = eq ? ` Por eso, ${eq[0]} ÷ ${eq[1]} = ${eq[2]}.` : '';
      return `Recuerda que ${m.feedbackRule}. ${m.feedbackAction}${ending}`;
    }
    if (eq) {
      return `Recuerda que al dividir, buscamos cuánto corresponde a cada grupo cuando todos deben quedar iguales. Aquí resolviste ${eq[0]} ÷ ${eq[1]} y descubriste que quedan ${eq[2]} en cada grupo. Por eso, ${eq[0]} ÷ ${eq[1]} = ${eq[2]}.`;
    }
    return 'Recuerda que al dividir, necesitamos organizar una cantidad en grupos iguales y comprobar que todos queden equilibrados.';
  }

  function showMissionFeedback(text, { loading = false, status = 'IDEA CLAVE' } = {}) {
    novaFeedbackCard.classList.toggle('loading', loading);
    novaFeedbackStatus.textContent = status;
    novaFeedbackText.textContent = text;
  }

  function showNextTeaser(m) {
    const next = missions[mission + 1];
    if (!next) {
      nextTeaser.hidden = true;
      return;
    }
    nextTeaser.hidden = false;
    const teaser = m.teaser || `La siguiente misión es “${next.title}” con ${next.animal}.`;
    nextTeaser.innerHTML = `<span>LO QUE VIENE</span>${teaser}`;
  }

  function showSavedReward(saved = null) {
    const m = missions[mission];
    rewardCard.hidden = false;
    rewardEmoji.innerHTML = animalVisualMarkup(m, 'reward-art');
    rewardTitle.textContent = mission === missions.length - 1 ? `¡Último código recuperado, ${explorerName()}!` : `¡Código recuperado, ${explorerName()}!`;
    rewardText.textContent = m.reward;
    animalFact.textContent = m.fact;
    fillRewardProfile(m);
    currentFeedback = saved?.currentFeedback || currentFeedback || fallbackMissionFeedback(m);
    showMissionFeedback(currentFeedback, { status: 'RECUERDA ESTO' });
    showNextTeaser(m);
    rewardNextBtn.textContent = mission === missions.length - 1 ? 'Completar el Atlas →' : 'Descubrir siguiente misión →';
    checkBtn.hidden = true;
    hintBtn.hidden = true;
    setProgress(1);
  }

  function renderMission({ restore = true } = {}) {
    const saved = restore ? readSavedGame() : null;
    const sameMission = saved && Number(saved.mission) === mission;
    selectedCreature = null;
    selectedAnswer = sameMission ? (saved.selectedAnswer ?? null) : null;
    mechanicState = sameMission && saved?.mechanicState ? saved.mechanicState : {};
    attemptCount = sameMission ? Number(saved.attemptCount || 0) : 0;
    currentMissionCompleted = Boolean(sameMission && saved.currentMissionCompleted);
    currentFeedback = sameMission ? String(saved.currentFeedback || '') : '';
    aiTutorCard.hidden = true;
    tutorHistory = [];
    resetTutorChat();
    aiStatus.textContent = 'LISTO';
    aiStatus.className = 'ai-status';
    rewardCard.hidden = true;
    finalCard.hidden = true;
    checkBtn.hidden = false;
    hintBtn.hidden = false;
    checkBtn.dataset.next = '';
    checkBtn.textContent = 'Comprobar';

    const m = missions[mission];
    renderWorldHeader(m);
    missionNumber.textContent = mission + 1;
    missionTitle.textContent = m.title;
    missionPrompt.textContent = m.prompt;
    storyLine.textContent = m.story;
    animalEmoji.innerHTML = animalVisualMarkup(m);
    animalName.textContent = m.animal;
    animalCardBtn.setAttribute('aria-label', `Conocer a ${m.animal}`);
    setProgress();

    renderChallenge(m);

    if (sameMission) {
      if (m.type === 'share') restoreSharingState(saved);
      else restoreGenericState(saved);
      restoreTutorState(saved);
      if (currentMissionCompleted) showSavedReward(saved);
      if (saved.gameCompleted && mission === missions.length - 1) {
        gameCompleted = true;
        completeGame(false);
      }
    }
    saveGameState();
  }

  function makeCreature(emoji, i) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'creature';
    b.textContent = emoji;
    b.dataset.id = String(i);
    b.setAttribute('aria-label', 'Objeto ' + (i + 1));
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      playTap();
      document.querySelectorAll('.creature.selected').forEach(x => x.classList.remove('selected'));
      selectedCreature = b;
      b.classList.add('selected');
      saveGameState();
    });
    return b;
  }

  function renderSharing(m) {
    gameArea.innerHTML = `${renderMechanicIntro(m)}<p class="instruction">Toca un objeto y luego toca el animal que debe recibirlo.</p>`;
    const bankWrap = document.createElement('div');
    bankWrap.className = 'bank-wrap';
    bankWrap.innerHTML = '<span class="bank-label">Objetos por repartir</span>';
    const bank = document.createElement('div');
    bank.className = 'creature-bank';
    bank.id = 'bank';
    for (let i = 0; i < m.total; i++) bank.appendChild(makeCreature(m.emoji, i));
    bankWrap.appendChild(bank);

    const zones = document.createElement('div');
    zones.className = 'zones';
    zones.style.setProperty('--group-count', Math.min(m.groups, 5));
    for (let i = 0; i < m.groups; i++) {
      const zone = document.createElement('div');
      zone.className = 'zone';
      zone.tabIndex = 0;
      zone.setAttribute('role', 'button');
      zone.dataset.group = i;
      zone.innerHTML = `<div class="zone-head"><span class="zone-animal">${m.animalEmoji}</span><strong>${m.group} ${i + 1}</strong></div><div class="zone-items"></div><span class="zone-count">0</span>`;
      const place = () => {
        if (!selectedCreature) { showToast('Primero toca uno de los objetos ✨'); return; }
        playTap();
        zone.querySelector('.zone-items').appendChild(selectedCreature);
        selectedCreature.classList.remove('selected');
        selectedCreature = null;
        updateZoneCounts();
        saveGameState();
      };
      zone.addEventListener('click', place);
      zone.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          place();
        }
      });
      zones.appendChild(zone);
    }
    gameArea.append(bankWrap, zones);
  }

  function updateZoneCounts() {
    document.querySelectorAll('.zone').forEach(zone => {
      zone.querySelector('.zone-count').textContent = zone.querySelector('.zone-items').children.length;
    });
  }

  function selectSingle(container, button, value) {
    playTap();
    container.querySelectorAll('[data-select-answer]').forEach(x => x.classList.remove('selected'));
    button.classList.add('selected');
    selectedAnswer = value;
    saveGameState();
  }

  function itemsMarkup(count, emoji) {
    return Array.from({ length: Math.max(0, Number(count) || 0) }, () => `<span>${emoji}</span>`).join('');
  }

  function miniGroupsMarkup(counts, m) {
    return `<div class="mini-groups" style="--mini-count:${Math.min(counts.length, 5)}">${counts.map((count, i) => `
      <div class="mini-group">
        <span class="mini-animal">${m.animalEmoji}</span>
        <div class="mini-items">${itemsMarkup(count, m.emoji || '●')}</div>
        <span class="mini-count">${count}</span>
      </div>`).join('')}</div>`;
  }

  function renderMechanicIntro(m, question = m.prompt) {
    return `<div class="mechanic-kicker">⚡ ${m.challengeLabel || 'DESAFÍO DEL ATLAS'}</div><p class="mechanic-question">${question}</p>`;
  }

  function renderEquation(m) {
    const [a,b] = m.equation;
    gameArea.innerHTML = `
      ${renderMechanicIntro(m, 'Elige el número que completa el código.')}
      <div class="code-console">
        <span class="console-dot"></span><span class="console-dot"></span><span class="console-dot"></span>
        <small>CÓDIGO DEL ATLAS</small>
        <div class="equation" aria-label="${a} dividido entre ${b}">
          <span>${a}</span><span class="operator">÷</span><span>${b}</span><span>=</span><span class="question">?</span>
        </div>
      </div>
      <div class="answer-grid"></div>`;
    const grid = gameArea.querySelector('.answer-grid');
    m.answers.forEach(n => {
      const bttn = document.createElement('button');
      bttn.type = 'button';
      bttn.className = 'answer-btn';
      bttn.textContent = n;
      bttn.dataset.selectAnswer = String(n);
      bttn.addEventListener('click', () => selectSingle(grid, bttn, n));
      grid.appendChild(bttn);
    });
  }

  function renderDistributionChoice(m, showEquation = false) {
    const equation = showEquation && m.equation
      ? `<div class="code-console" style="margin-bottom:12px"><small>CÓDIGO</small><div class="equation" style="font-size:2rem;margin:8px 0"><span>${m.equation[0]}</span><span class="operator">÷</span><span>${m.equation[1]}</span></div></div>`
      : '';
    gameArea.innerHTML = `${renderMechanicIntro(m)}${equation}<div class="choice-stack"></div>`;
    const stack = gameArea.querySelector('.choice-stack');
    m.options.forEach(option => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'visual-choice';
      btn.dataset.selectAnswer = option.id;
      btn.innerHTML = `<strong>OPCIÓN ${option.id}</strong>${miniGroupsMarkup(option.groups, m)}`;
      btn.addEventListener('click', () => selectSingle(stack, btn, option.id));
      stack.appendChild(btn);
    });
  }

  function renderCompleteGroup(m) {
    gameArea.innerHTML = `
      ${renderMechanicIntro(m)}
      ${miniGroupsMarkup(m.preview, m)}
      <p class="instruction" style="margin-top:14px">¿Cuántas ${m.emoji} faltan en el último grupo?</p>
      <div class="number-choice-grid"></div>`;
    const grid = gameArea.querySelector('.number-choice-grid');
    m.answers.forEach(n => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'number-choice';
      btn.dataset.selectAnswer = String(n);
      btn.textContent = n;
      btn.addEventListener('click', () => selectSingle(grid, btn, n));
      grid.appendChild(btn);
    });
  }

  function renderFindError(m) {
    gameArea.innerHTML = `${renderMechanicIntro(m)}<div class="error-groups"></div>`;
    const grid = gameArea.querySelector('.error-groups');
    m.preview.forEach((count, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'error-group';
      btn.dataset.selectAnswer = String(i);
      btn.innerHTML = `<span class="animal">${m.animalEmoji}</span><strong>${m.group} ${i + 1}</strong><div class="mini-items">${itemsMarkup(count, m.emoji)}</div><span class="mini-count">${count} frutos</span>`;
      btn.addEventListener('click', () => selectSingle(grid, btn, i));
      grid.appendChild(btn);
    });
  }

  function renderGroupSize(m) {
    gameArea.innerHTML = `
      ${renderMechanicIntro(m)}
      <div class="scene-total"><span class="scene-total-label">TOTAL: ${m.total}</span><div class="scene-items">${itemsMarkup(m.total, m.emoji)}</div></div>
      <div class="scene-animals" style="--animal-count:${m.groups}">${Array.from({length:m.groups},(_,i)=>`<div class="scene-animal"><span>${m.animalEmoji}</span><small>${m.group} ${i+1}</small></div>`).join('')}</div>
      <div class="number-choice-grid four"></div>`;
    const grid = gameArea.querySelector('.number-choice-grid');
    m.answers.forEach(n => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'number-choice';
      btn.dataset.selectAnswer = String(n);
      btn.textContent = n;
      btn.addEventListener('click', () => selectSingle(grid, btn, n));
      grid.appendChild(btn);
    });
  }

  function renderReverseTotal(m) {
    const counts = Array.from({length:m.groups},()=>m.each);
    gameArea.innerHTML = `
      ${renderMechanicIntro(m)}
      ${miniGroupsMarkup(counts, m)}
      <p class="instruction" style="margin-top:14px">Junta mentalmente los grupos. ¿Cuál era el total?</p>
      <div class="number-choice-grid"></div>`;
    const grid = gameArea.querySelector('.number-choice-grid');
    m.answers.forEach(n => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'number-choice';
      btn.dataset.selectAnswer = String(n);
      btn.textContent = n;
      btn.addEventListener('click', () => selectSingle(grid, btn, n));
      grid.appendChild(btn);
    });
  }

  function renderBalance(m) {
    gameArea.innerHTML = `
      ${renderMechanicIntro(m)}
      <div class="balance-board">
        <div class="balance-current">${miniGroupsMarkup(m.preview, m)}</div>
        <div class="balance-actions"></div>
      </div>`;
    const actions = gameArea.querySelector('.balance-actions');
    m.actions.forEach(action => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'balance-action';
      btn.dataset.selectAnswer = action.id;
      btn.textContent = action.label;
      btn.addEventListener('click', () => selectSingle(actions, btn, action.id));
      actions.appendChild(btn);
    });
  }

  function renderStoryChoice(m) {
    gameArea.innerHTML = `
      ${renderMechanicIntro(m)}
      <div class="story-problem"><div class="story-icon">${m.animalEmoji}</div><p>${m.story}</p></div>
      <div class="number-choice-grid four"></div>`;
    const grid = gameArea.querySelector('.number-choice-grid');
    m.answers.forEach(n => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'number-choice';
      btn.dataset.selectAnswer = String(n);
      btn.textContent = n;
      btn.addEventListener('click', () => selectSingle(grid, btn, n));
      grid.appendChild(btn);
    });
  }

  function renderBoss(m) {
    mechanicState = mechanicState && typeof mechanicState === 'object' ? mechanicState : {};
    gameArea.innerHTML = `
      ${renderMechanicIntro(m)}
      <div class="boss-card">
        <div class="boss-head"><span>${m.animalEmoji}</span><div><small>GUARDIÁN DEL RÍO</small><strong>Abre las 3 cerraduras</strong></div></div>
        <div class="boss-round" data-round="distribution"><span>CERRADURA 1 · REPARTO</span><div class="choice-stack boss-distributions"></div></div>
        <div class="boss-round" data-round="operation"><span>CERRADURA 2 · OPERACIÓN</span><div class="boss-option-grid boss-operations"></div></div>
        <div class="boss-round" data-round="result"><span>CERRADURA 3 · RESULTADO</span><div class="boss-option-grid boss-results"></div></div>
      </div>`;

    const dist = gameArea.querySelector('.boss-distributions');
    m.boss.distributions.forEach(option => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'visual-choice';
      btn.dataset.bossKind = 'distribution';
      btn.dataset.bossValue = option.id;
      btn.innerHTML = `<strong>OPCIÓN ${option.id}</strong>${miniGroupsMarkup(option.groups, {...m, emoji:'🐟'})}`;
      btn.addEventListener('click', () => {
        playTap();
        dist.querySelectorAll('[data-boss-kind="distribution"]').forEach(x=>x.classList.remove('selected'));
        btn.classList.add('selected');
        mechanicState.distribution = option.id;
        saveGameState();
      });
      dist.appendChild(btn);
    });

    const ops = gameArea.querySelector('.boss-operations');
    m.boss.operations.forEach(option => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'boss-option';
      btn.dataset.bossKind = 'operation';
      btn.dataset.bossValue = option.id;
      btn.textContent = option.label;
      btn.addEventListener('click', () => {
        playTap();
        ops.querySelectorAll('.boss-option').forEach(x=>x.classList.remove('selected'));
        btn.classList.add('selected');
        mechanicState.operation = option.id;
        saveGameState();
      });
      ops.appendChild(btn);
    });

    const results = gameArea.querySelector('.boss-results');
    m.boss.results.forEach(value => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'boss-option';
      btn.dataset.bossKind = 'result';
      btn.dataset.bossValue = String(value);
      btn.textContent = value;
      btn.addEventListener('click', () => {
        playTap();
        results.querySelectorAll('.boss-option').forEach(x=>x.classList.remove('selected'));
        btn.classList.add('selected');
        mechanicState.result = value;
        saveGameState();
      });
      results.appendChild(btn);
    });
  }

  function renderChallenge(m) {
    switch (m.type) {
      case 'share': return renderSharing(m);
      case 'distributionChoice': return renderDistributionChoice(m, false);
      case 'representationChoice': return renderDistributionChoice(m, true);
      case 'completeGroup': return renderCompleteGroup(m);
      case 'findError': return renderFindError(m);
      case 'groupSize': return renderGroupSize(m);
      case 'reverseTotal': return renderReverseTotal(m);
      case 'balance': return renderBalance(m);
      case 'storyChoice': return renderStoryChoice(m);
      case 'boss': return renderBoss(m);
      case 'equation':
      default: return renderEquation(m);
    }
  }

  function isSharingCorrect(m) {
    const bank = $('#bank');
    const zones = [...document.querySelectorAll('.zone-items')];
    const counts = zones.map(z => z.children.length);
    const target = m.total / m.groups;
    return bank && bank.children.length === 0 && counts.every(c => c === target);
  }

  function isMissionCorrect(m) {
    if (m.type === 'share') return isSharingCorrect(m);
    if (m.type === 'boss') {
      return String(mechanicState.distribution) === String(m.boss.correct.distribution)
        && String(mechanicState.operation) === String(m.boss.correct.operation)
        && Number(mechanicState.result) === Number(m.boss.correct.result);
    }
    if (m.type === 'equation') return Number(selectedAnswer) === Number(m.equation[2]);
    return String(selectedAnswer) === String(m.correct);
  }

  function hasMissionAnswer(m) {
    if (m.type === 'share') return true;
    if (m.type === 'boss') return mechanicState.distribution != null && mechanicState.operation != null && mechanicState.result != null;
    return selectedAnswer !== null && selectedAnswer !== undefined;
  }

  function getAttemptSummary(m) {
    if (m.type === 'share') {
      const bank = $('#bank');
      const counts = [...document.querySelectorAll('.zone-items')].map(z => z.children.length);
      const remaining = bank ? bank.children.length : m.total;
      return `Repartió los objetos así: [${counts.join(', ')}]. Quedan ${remaining} objetos sin repartir.`;
    }
    if (m.type === 'boss') {
      return `En el guardián eligió reparto ${mechanicState.distribution ?? 'sin elegir'}, operación ${mechanicState.operation ?? 'sin elegir'} y resultado ${mechanicState.result ?? 'sin elegir'}.`;
    }
    if (selectedAnswer === null || selectedAnswer === undefined) return 'Todavía no ha elegido una respuesta.';
    return `Eligió ${selectedAnswer} en un reto de tipo ${m.challengeLabel || m.type}.`;
  }

  function resetTutorChat() {
    aiTutorChat.innerHTML = `
      <div class="tutor-message nova-message">
        <span>NOVA</span>
        <p>Pregúntame, yo puedo ayudarte.</p>
      </div>`;
  }

  function appendTutorMessage(role, text, pending = false) {
    const wrap = document.createElement('div');
    wrap.className = `tutor-message ${role === 'user' ? 'emi-message' : 'nova-message'}${pending ? ' pending' : ''}`;
    const label = document.createElement('span');
    label.textContent = role === 'user' ? explorerLabel() : 'NOVA';
    const p = document.createElement('p');
    p.textContent = text;
    wrap.append(label, p);
    aiTutorChat.appendChild(wrap);
    aiTutorChat.scrollTop = aiTutorChat.scrollHeight;
    return wrap;
  }

  function setTutorBusy(isBusy) {
    tutorBusy = isBusy;
    aiTutorBtn.disabled = isBusy;
    aiTutorSendBtn.disabled = isBusy;
    aiTutorInput.disabled = isBusy;
    aiTutorQuickBtns.forEach(btn => btn.disabled = isBusy);
  }

  function generalTutorStorageKey() {
    const userId = String(currentUser?.id || 'anonymous');
    const childId = String(activeChild?.id || familyProfile()?.childId || 'child');
    return `novaGeneralTutorV1:${userId}:${childId}`;
  }

  function normalizeGeneralTutorHistory(value) {
    if (!Array.isArray(value)) return [];
    return value
      .filter((item) =>
        item &&
        (item.role === 'user' || item.role === 'assistant') &&
        typeof item.content === 'string' &&
        item.content.trim()
      )
      .slice(-12)
      .map((item) => ({
        role: item.role,
        content: String(item.content).trim().slice(0, 1200)
      }));
  }

  function loadGeneralTutorSession() {
    const key = generalTutorStorageKey();
    if (generalTutorSessionLoadedFor === key) return;

    generalTutorSessionLoadedFor = key;
    try {
      generalTutorHistory = normalizeGeneralTutorHistory(
        JSON.parse(sessionStorage.getItem(key) || '[]')
      );
    } catch {
      generalTutorHistory = [];
    }
  }

  function saveGeneralTutorSession() {
    const key = generalTutorStorageKey();
    try {
      sessionStorage.setItem(
        key,
        JSON.stringify(normalizeGeneralTutorHistory(generalTutorHistory))
      );
      generalTutorSessionLoadedFor = key;
    } catch {}
  }

  function clearGeneralTutorSession() {
    try {
      sessionStorage.removeItem(generalTutorStorageKey());
    } catch {}
    generalTutorHistory = [];
    generalTutorSessionLoadedFor = '';
  }

  function renderGeneralTutorConversation() {
    if (!novaGeneralChat) return;

    loadGeneralTutorSession();
    novaGeneralChat.innerHTML = '';

    if (!generalTutorHistory.length) {
      appendGeneralTutorMessage(
        'assistant',
        'Hola 👋. Soy NOVA. ¿Qué quieres preguntarme hoy?'
      );
      return;
    }

    generalTutorHistory.forEach((item) => {
      appendGeneralTutorMessage(item.role, item.content);
    });
  }

  function appendGeneralTutorMessage(role, text, pending = false) {
    if (!novaGeneralChat) return null;

    const wrap = document.createElement('div');
    wrap.className = `tutor-message ${role === 'user' ? 'emi-message' : 'nova-message'}${pending ? ' pending' : ''}`;

    const label = document.createElement('span');
    label.textContent = role === 'user' ? explorerLabel() : 'NOVA';

    const p = document.createElement('p');
    p.textContent = text;

    wrap.append(label, p);
    novaGeneralChat.appendChild(wrap);
    novaGeneralChat.scrollTop = novaGeneralChat.scrollHeight;
    return wrap;
  }

  function setGeneralTutorBusy(isBusy) {
    generalTutorBusy = isBusy;
    if (novaGeneralInput) novaGeneralInput.disabled = isBusy;
    if (novaGeneralSendBtn) novaGeneralSendBtn.disabled = isBusy;
  }

  async function askGeneralNova(question = '', displayQuestion = '') {
    if (generalTutorBusy) return;

    const cleanQuestion = String(question || '').trim().slice(0, 420);
    const visibleQuestion = String(displayQuestion || cleanQuestion).trim().slice(0, 420);
    if (!cleanQuestion) return;

    const requestId = ++generalTutorRequestId;
    const previousHistory = generalTutorHistory.slice(-12);

    appendGeneralTutorMessage('user', visibleQuestion);
    generalTutorHistory.push({ role: 'user', content: visibleQuestion });
    generalTutorHistory = generalTutorHistory.slice(-12);
    saveGeneralTutorSession();

    const pending = appendGeneralTutorMessage('assistant', 'Estoy pensando cómo explicártelo…', true);
    setGeneralTutorBusy(true);

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'general',
          question: cleanQuestion,
          history: previousHistory,
          studentName: explorerName()
        })
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'No pude conectar con NOVA.');

      if (requestId !== generalTutorRequestId) return;

      pending?.remove();
      const message = data.message || 'Cuéntame un poco más sobre lo que necesitas entender y lo revisamos juntos.';
      appendGeneralTutorMessage('assistant', message);
      generalTutorHistory.push({ role: 'assistant', content: message });
      generalTutorHistory = generalTutorHistory.slice(-12);
      saveGeneralTutorSession();
      playTap();
    } catch (error) {
      if (requestId !== generalTutorRequestId) return;

      pending?.remove();
      appendGeneralTutorMessage(
        'assistant',
        'No pude conectarme en este momento. Intenta preguntarme de nuevo en unos segundos.'
      );
    } finally {
      if (requestId === generalTutorRequestId) {
        setGeneralTutorBusy(false);
        novaGeneralInput?.focus({ preventScroll: true });
      }
    }
  }

  async function requestTutor(reason = 'question', question = '') {
    if (tutorBusy) return;
    const m = missions[mission];

    // NOVA nunca inventa mensajes en nombre de Emiliano.
    // Solo enviamos al tutor una pregunta que Emiliano haya escrito
    // o una acción rápida que él haya pulsado voluntariamente.
    const userQuestion = String(question || '').trim().slice(0, 180);
    if (!userQuestion) return;

    const requestId = ++tutorRequestId;
    const previousHistory = tutorHistory.slice(-12);

    aiTutorCard.hidden = false;
    aiTutorTitle.textContent = `Estoy aquí, ${explorerName()}`;
    appendTutorMessage('user', userQuestion);
    tutorHistory.push({ role: 'user', content: userQuestion });
    saveGameState();
    const pending = appendTutorMessage('assistant', 'Estoy mirando tu ejercicio…', true);

    aiStatus.textContent = 'PENSANDO';
    aiStatus.className = 'ai-status loading';
    setTutorBusy(true);

    const eq = equationForMission(m);
    const payload = {
      mode: 'chat',
      reason,
      question: userQuestion,
      history: previousHistory,
      missionNumber: mission + 1,
      missionTitle: m.title,
      challengeLabel: m.challengeLabel || '',
      animal: m.animal,
      story: m.story,
      prompt: m.prompt,
      hint: m.hint,
      type: m.type,
      equation: eq ? { dividend: eq[0], divisor: eq[1], quotient: eq[2] } : null,
      sharing: Number.isFinite(m.total) && Number.isFinite(m.groups) ? { total: m.total, groups: m.groups, quotient: m.total / m.groups } : null,
      attempt: getAttemptSummary(m),
      attemptCount
    };

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'No fue posible conectar con NOVA.');
      if (requestId !== tutorRequestId) return;

      const message = data.message || 'Miremos el total y luego formemos grupos iguales. ¿Cuántos grupos pide la misión?';
      pending.remove();
      appendTutorMessage('assistant', message);
      tutorHistory.push({ role: 'assistant', content: message });
      tutorHistory = tutorHistory.slice(-12);
      saveGameState();
      aiStatus.textContent = 'LISTO';
      aiStatus.className = 'ai-status';
      playTap();
    } catch (err) {
      if (requestId !== tutorRequestId) return;
      pending.remove();
      const message = err.message.includes('configurada')
        ? 'NOVA está descansando un momento. Puedes seguir con una pista y volver a preguntarle después.'
        : 'No pude conectarme ahora. Podemos seguir con la pista normal y volver a intentarlo después.';
      appendTutorMessage('assistant', message);
      aiStatus.textContent = 'SIN CONEXIÓN';
      aiStatus.className = 'ai-status error';
    } finally {
      if (requestId === tutorRequestId) {
        setTutorBusy(false);
        aiTutorInput.focus({ preventScroll: true });
      }
    }
  }

  async function requestMissionFeedback(m) {
    const requestId = ++feedbackRequestId;
    const fallback = fallbackMissionFeedback(m);
    currentFeedback = fallback;
    showMissionFeedback(fallback, { loading: true, status: 'CONECTANDO LA IDEA...' });
    saveGameState();

    const eq = equationForMission(m);
    const learnedBefore = missions
      .slice(Math.max(0, mission - 3), mission)
      .map(x => x.feedbackRule)
      .filter(Boolean);

    const payload = {
      mode: 'feedback',
      missionNumber: mission + 1,
      missionTitle: m.title,
      challengeLabel: m.challengeLabel || '',
      animal: m.animal,
      story: m.story,
      prompt: m.prompt,
      type: m.type,
      equation: eq ? { dividend: eq[0], divisor: eq[1], quotient: eq[2] } : null,
      sharing: Number.isFinite(m.total) && Number.isFinite(m.groups)
        ? { total: m.total, groups: m.groups, quotient: m.total / m.groups }
        : null,
      feedbackRule: m.feedbackRule || 'al dividir, buscamos cuánto corresponde a cada grupo cuando todos deben quedar iguales',
      feedbackAction: m.feedbackAction || (eq ? `Aquí resolviste ${eq[0]} ÷ ${eq[1]} y descubriste que cada grupo queda con ${eq[2]}.` : 'Aquí organizaste la cantidad de la misión en grupos iguales.'),
      learnedBefore
    };

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'No fue posible generar el feedback.');
      if (requestId !== feedbackRequestId || !currentMissionCompleted) return;

      currentFeedback = data.message || fallback;
      showMissionFeedback(currentFeedback, { status: 'RECUERDA ESTO' });
      saveGameState();
    } catch {
      if (requestId !== feedbackRequestId || !currentMissionCompleted) return;
      currentFeedback = fallback;
      showMissionFeedback(currentFeedback, { status: 'RECUERDA ESTO' });
      saveGameState();
    }
  }

  function success() {
    playSuccess();
    gameArea.classList.remove('shake');
    gameArea.classList.add('celebrate');
    setTimeout(() => gameArea.classList.remove('celebrate'), 600);

    const m = missions[mission];
    rewardCard.hidden = false;
    rewardEmoji.innerHTML = animalVisualMarkup(m, 'reward-art');
    rewardTitle.textContent = mission === missions.length - 1 ? `¡Último código recuperado, ${explorerName()}!` : `¡Código recuperado, ${explorerName()}!`;
    rewardText.textContent = m.reward;
    animalFact.textContent = m.fact;
    fillRewardProfile(m);
    showNextTeaser(m);

    localStorage.setItem('emilianoUnlocked', String(Math.max(unlockedCount(), mission + 1)));
    currentMissionCompleted = true;
    gameCompleted = false;
    setProgress(1);

    checkBtn.hidden = true;
    hintBtn.hidden = true;
    rewardNextBtn.textContent = mission === missions.length - 1 ? 'Completar el Atlas →' : 'Descubrir siguiente misión →';

    currentFeedback = fallbackMissionFeedback(m);
    showMissionFeedback(currentFeedback, { loading: true, status: 'CONECTANDO LA IDEA...' });
    saveGameState();
    requestMissionFeedback(m);
    rewardCard.scrollIntoView({behavior:'smooth', block:'nearest'});
  }

  function incorrect(m) {
    attemptCount += 1;
    saveGameState();
    playOops();
    gameArea.classList.remove('shake');
    void gameArea.offsetWidth;
    gameArea.classList.add('shake');
    if (m.type === 'share') showToast('Aún no están iguales. Cuenta cada grupo y vuelve a ajustar 🙂', 2600);
    else showToast('Ese código no abrió la puerta. Prueba otra estrategia o usa una pista.', 2600);

    // No abrimos NOVA ni escribimos por Emiliano automáticamente.
    // Si quiere ayuda, puede tocar “Preguntar a NOVA”.
  }

  function completeGame(playAudio = true) {
    rewardCard.hidden = true;
    gameArea.hidden = true;
    checkBtn.hidden = true;
    hintBtn.hidden = true;
    finalCard.hidden = false;
    progressBar.style.width = '100%';
    progressText.textContent = '100%';
    localStorage.setItem('emilianoMission', String(missions.length - 1));
    gameCompleted = true;
    currentMissionCompleted = true;
    saveGameState();
    if (playAudio) [392,523,659,784,1047].forEach((f,i)=>audioTone(f,.35,'sine',.05,i*.11));
    finalCard.scrollIntoView({behavior:'smooth', block:'center'});
  }

  function buildWorldMap() {
    worldMap.innerHTML = '';
    const currentW = currentWorldIndex();
    worlds.forEach((w, i) => {
      const completed = i < currentW;
      const active = i === currentW;
      const card = document.createElement('div');
      card.className = `map-world ${completed ? 'done' : ''} ${active ? 'active' : ''}`;
      card.innerHTML = `<div class="map-world-icon">${w.icon}</div><div><small>CAPÍTULO ${i+1}</small><strong>${w.name}</strong><span>${w.subtitle}</span></div><b>${completed ? '✓' : active ? '▶' : '🔒'}</b>`;
      worldMap.appendChild(card);
    });
  }

  function advanceMission() {
    if (mission === missions.length - 1) {
      completeGame();
      return;
    }
    mission += 1;
    clearCurrentMissionState();
    localStorage.setItem('emilianoMission', String(mission));
    saveGameState();
    renderMission({ restore: false });
    window.scrollTo({top: 0, behavior: 'smooth'});
    playTap();
  }

  checkBtn.addEventListener('click', () => {
    const m = missions[mission];

    if (!hasMissionAnswer(m)) {
      showToast(m.type === 'boss' ? 'Completa las 3 cerraduras antes de comprobar 👆' : 'Primero elige una respuesta 👆');
      return;
    }

    isMissionCorrect(m) ? success() : incorrect(m);
  });

  rewardNextBtn.addEventListener('click', advanceMission);

  hintBtn.addEventListener('click', () => {
    playTap();
    showToast(missions[mission].hint, 3200);
  });

  aiTutorBtn.addEventListener('click', () => {
    playTap();
    aiTutorCard.hidden = false;
    saveGameState();

    // Abrir el tutor no crea ninguna pregunta automática.
    // Emiliano decide qué quiere preguntar.
    aiTutorInput.focus({ preventScroll: true });
    aiTutorCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  aiTutorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const question = aiTutorInput.value.trim();
    if (!question) return;
    aiTutorInput.value = '';
    playTap();
    requestTutor('question', question);
  });

  aiTutorQuickBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      playTap();
      requestTutor(btn.dataset.reason || 'question', btn.dataset.tutorPrompt || '');
    });
  });


  function captureTesterSnapshot() {
    const keys = [
      SAVE_KEY,
      NOTEBOOK_SAVE_KEY,
      ACADEMY_SAVE_KEY,
      'emilianoMission',
      'emilianoUnlocked',
      'emilianoSound',
      'emilianoIntroSeen'
    ];

    const snapshot = {};
    keys.forEach((key) => {
      snapshot[key] = localStorage.getItem(key);
    });
    return snapshot;
  }

  function restoreTesterSnapshot() {
    if (!testerSnapshot) return;

    Object.entries(testerSnapshot).forEach(([key, value]) => {
      if (value === null || value === undefined) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    });
  }

  function activateTesterMode() {
    if (!testerMode) {
      testerSnapshot = captureTesterSnapshot();
      testerMode = true;
    }
    testerUnlocked = true;
    buildTesterNavigator();
    updateReviewUi();
  }

  function closeAllTesterOverlays() {
    testerModal.hidden = true;
    settingsModal.hidden = true;
    worldModal.hidden = true;
    animalModal.hidden = true;
    guideModal.hidden = true;
    document.body.classList.remove('modal-open');
  }

  function showNormalMissionShell() {
    notebookModule.hidden = true;
    document.querySelector('.topbar').hidden = false;
    document.querySelector('.actions').hidden = false;
    document.querySelector('.progress-wrap').hidden = false;
    document.querySelector('.hero-card').hidden = false;
    document.querySelector('.world-strip').hidden = false;
    gameArea.hidden = false;
    finalCard.hidden = true;
  }

  function jumpToTesterMission(index) {
    activateTesterMode();
    closeAllTesterOverlays();
    showNormalMissionShell();

    mission = Math.max(0, Math.min(missions.length - 1, Number(index) || 0));
    clearCurrentMissionState();
    gameCompleted = false;
    renderMission({ restore: false });

    showToast(`🧪 Probando misión ${mission + 1} de ${missions.length}`, 2200);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function jumpToTesterNotebook(index) {
    activateTesterMode();
    closeAllTesterOverlays();

    finalCard.hidden = true;
    rewardCard.hidden = true;
    gameArea.hidden = true;
    document.querySelector('.actions').hidden = true;
    document.querySelector('.progress-wrap').hidden = true;
    document.querySelector('.hero-card').hidden = true;
    document.querySelector('.world-strip').hidden = true;
    document.querySelector('.topbar').hidden = true;
    aiTutorCard.hidden = true;
    notebookModule.hidden = false;

    notebookLessonIndex = Math.max(0, Math.min(notebookLessons.length - 1, Number(index) || 0));
    notebookStepIndex = 0;
    notebookCompletedLessons = 0;
    notebookRevealedQuotient = '';
    notebookJournalLines = [];
    notebookChatHistory = [];

    academyHome.hidden = true;
    academyPracticeView.hidden = true;
    notebookLessonView.hidden = false;
    academyHomeBtn.hidden = false;
    academyCurrentRoute = 'long';
    startNotebookLesson(notebookLessonIndex, false);
    showToast(`🧪 Probando cuaderno ${notebookLessonIndex + 1} de ${notebookLessons.length}`, 2200);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function jumpToTesterAcademyRoute(routeId) {
    activateTesterMode();
    closeAllTesterOverlays();

    finalCard.hidden = true;
    rewardCard.hidden = true;
    gameArea.hidden = true;
    document.querySelector('.actions').hidden = true;
    document.querySelector('.progress-wrap').hidden = true;
    document.querySelector('.hero-card').hidden = true;
    document.querySelector('.world-strip').hidden = true;
    document.querySelector('.topbar').hidden = true;
    aiTutorCard.hidden = true;
    notebookModule.hidden = false;

    academyState.routeProgress[routeId] = 0;
    startAcademyRoute(routeId);
    showToast(`🧪 Probando habilidad: ${academyRoutes.find(r => r.id === routeId)?.title || routeId}`, 2200);
  }

  function buildTesterNavigator() {
    if (!testerMissionGrid || !testerNotebookGrid) return;

    testerMissionGrid.innerHTML = '';
    missions.forEach((m, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'tester-mission-btn';
      btn.innerHTML = `
        <span>${index + 1}</span>
        <div>
          <small>${m.challengeLabel || `MISIÓN ${index + 1}`}</small>
          <strong>${m.title}</strong>
          <em>${m.animal || ''}</em>
        </div>
      `;
      btn.addEventListener('click', () => jumpToTesterMission(index));
      testerMissionGrid.appendChild(btn);
    });

    testerNotebookGrid.innerHTML = '';

    academyRoutes.filter(r => r.id !== 'long').forEach((route, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'tester-mission-btn tester-notebook-btn';
      btn.innerHTML = `
        <span>${route.icon}</span>
        <div>
          <small>HABILIDAD ${index + 1}</small>
          <strong>${route.title}</strong>
          <em>${route.goal}</em>
        </div>
      `;
      btn.addEventListener('click', () => jumpToTesterAcademyRoute(route.id));
      testerNotebookGrid.appendChild(btn);
    });

    notebookLessons.forEach((lesson, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'tester-mission-btn tester-notebook-btn';
      btn.innerHTML = `
        <span>${index + 1}</span>
        <div>
          <small>CUADERNO · ${lesson.dividend} ÷ ${lesson.divisor}</small>
          <strong>${lesson.title}</strong>
          <em>${lesson.focus}</em>
        </div>
      `;
      btn.addEventListener('click', () => jumpToTesterNotebook(index));
      testerNotebookGrid.appendChild(btn);
    });
  }

  function openTesterModal() {
    playTap();
    settingsModal.hidden = true;
    testerModal.hidden = false;
    document.body.classList.add('modal-open');
    updateReviewUi();
    const testerCard = testerModal.querySelector('.modal-card');
    if (testerCard) testerCard.scrollTop = 0;

    testerPinError.hidden = true;

    if (testerUnlocked) {
      testerAuthView.hidden = true;
      testerNavigatorView.hidden = false;
      buildTesterNavigator();
    } else {
      testerAuthView.hidden = false;
      testerNavigatorView.hidden = true;
      testerPinInput.value = '';
      setTimeout(() => testerPinInput.focus({ preventScroll: true }), 50);
    }
  }

  function exitTesterMode() {
    if (isOwnerReviewSession()) {
      exitReviewToAccess();
      return;
    }

    if (!testerMode) {
      testerUnlocked = false;
      testerModal.hidden = true;
      document.body.classList.remove('modal-open');
      updateReviewUi();
      return;
    }

    restoreTesterSnapshot();
    testerMode = false;
    testerUnlocked = false;
    testerSnapshot = null;
    updateReviewUi();

    // Recargar reconstruye exactamente el progreso real y conserva la sesión familiar.
    const cleanUrl = `${window.location.origin}${window.location.pathname}`;
    window.location.replace(cleanUrl);
  }

  soundBtn.addEventListener('click', () => {
    soundOn = !soundOn;
    localStorage.setItem('emilianoSound', soundOn ? 'on' : 'off');
    saveGameState();
    soundBtn.textContent = soundOn ? '🔊 Activado' : '🔇 Desactivado';
    soundBtn.setAttribute('aria-pressed', String(soundOn));
    if (soundOn) playTap();
  });

  resetBtn.addEventListener('click', () => {
    playTap();

    const confirmed = window.confirm(
      '¿Quieres reiniciar la aventura? Se borrará el progreso guardado del niño en este dispositivo.'
    );

    if (!confirmed) return;

    mission = 0;
    clearCurrentMissionState();
    localStorage.setItem('emilianoMission', '0');
    localStorage.setItem('emilianoUnlocked', '0');
    localStorage.removeItem(SAVE_KEY);
    resetNotebookState();
    scheduleCloudSync(250);

    settingsModal.hidden = true;
    document.body.classList.remove('modal-open');

    gameArea.hidden = false;
    renderMission({ restore: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('La expedición comenzó de nuevo 🚀');
  });

  replayBtn.addEventListener('click', () => {
    mission = 0;
    clearCurrentMissionState();
    localStorage.setItem('emilianoMission', '0');
    localStorage.setItem('emilianoUnlocked', '0');
    localStorage.removeItem(SAVE_KEY);
    scheduleCloudSync(250);
    gameArea.hidden = false;
    renderMission({ restore: false });
    window.scrollTo({top:0, behavior:'smooth'});
  });

  closeSettingsBtn.addEventListener('click', () => {
    settingsModal.hidden = true;
    document.body.classList.remove('modal-open');
  });

  settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) closeSettingsBtn.click();
  });

  learningProgressSettingsBtn?.addEventListener('click', openLearningProgressView);
  closeLearningProgressBtn?.addEventListener('click', () => {
    learningProgressModal.hidden = true;
    document.body.classList.remove('modal-open');
  });
  learningProgressModal?.addEventListener('click', (e) => {
    if (e.target === learningProgressModal) closeLearningProgressBtn?.click();
  });

  testerSettingsBtn?.addEventListener('click', openTesterModal);

  closeTesterBtn?.addEventListener('click', () => {
    testerModal.hidden = true;
    document.body.classList.remove('modal-open');
  });

  testerModal?.addEventListener('click', (e) => {
    if (e.target === testerModal) closeTesterBtn.click();
  });

  testerPinForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const pin = String(testerPinInput.value || '').trim();

    if (pin !== TESTER_PIN) {
      testerPinError.hidden = false;
      testerPinInput.select();
      playOops();
      return;
    }

    testerPinError.hidden = true;
    activateTesterMode();
    testerAuthView.hidden = true;
    testerNavigatorView.hidden = false;
    playSuccess();
  });

  exitTesterModeBtn?.addEventListener('click', exitTesterMode);

  mapBtn.addEventListener('click', () => {
    playTap();
    buildWorldMap();
    worldModal.hidden = false;
    document.body.classList.add('modal-open');
  });
  closeMapBtn.addEventListener('click', () => {
    worldModal.hidden = true;
    document.body.classList.remove('modal-open');
  });
  worldModal.addEventListener('click', (e) => {
    if (e.target === worldModal) closeMapBtn.click();
  });

  animalCardBtn.addEventListener('click', () => showAnimalProfile(missions[mission]));

  closeAnimalBtn.addEventListener('click', () => {
    animalModal.hidden = true;
    document.body.classList.remove('modal-open');
  });
  animalModal.addEventListener('click', (e) => {
    if (e.target === animalModal) closeAnimalBtn.click();
  });

  fieldGuideBtn.addEventListener('click', () => {
    buildFieldGuide();
    guideModal.hidden = false;
    document.body.classList.add('modal-open');
    playTap();
  });
  closeGuideBtn.addEventListener('click', () => {
    guideModal.hidden = true;
    document.body.classList.remove('modal-open');
  });
  guideModal.addEventListener('click', (e) => {
    if (e.target === guideModal) closeGuideBtn.click();
  });


  academyHomeBtn?.addEventListener('click', () => {
    playTap();
    renderAcademyHome();
    window.scrollTo({top:0,behavior:'smooth'});
  });

  academyContinueBtn?.addEventListener('click', () => {
    if (!academyCurrentRoute || academyCurrentRoute === 'long') return;
    const set = academyChallengeSets[academyCurrentRoute] || [];
    const next = academyChallengeIndex + 1;
    if (next >= set.length) {
      academyState.routeProgress[academyCurrentRoute] = set.length;
      saveAcademyState();
      playSuccess();
      showToast('Práctica completada. NOVA actualizó tu progreso ✨', 2600);
      renderAcademyHome();
      window.scrollTo({top:0,behavior:'smooth'});
      return;
    }
    academyChallengeIndex = next;
    academyState.routeProgress[academyCurrentRoute] = next;
    saveAcademyState();
    renderAcademyChallenge();
    window.scrollTo({top:0,behavior:'smooth'});
  });

  academyAskNovaBtn?.addEventListener('click', () => {
    playTap();
    academyChat.hidden = !academyChat.hidden;
    if (!academyChat.hidden) academyChatInput.focus({preventScroll:true});
  });

  academyChatForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = academyChatInput.value.trim();
    if (!q) return;
    academyChatInput.value = '';
    askAcademyNova(q);
  });

  notebookStartBtn?.addEventListener('click', openNotebookModule);
  notebookBackBtn?.addEventListener('click', closeNotebookModule);

  notebookNextBtn?.addEventListener('click', () => {
    if (notebookLessonIndex >= notebookLessons.length - 1) {
      notebookCompletedLessons = notebookLessons.length;
      saveNotebookState();
      notebookDoneTitle.textContent = '¡División escrita completada!';
      notebookDoneFeedback.textContent = 'Ya recorriste el procedimiento completo: DIVIDO, MULTIPLICO, RESTO, BAJO y REPITO. NOVA guardó lo que practicaste en el reporte de habilidades.';
      notebookNextBtn.textContent = 'Volver a habilidades';
      notebookNextBtn.onclick = () => renderAcademyHome();
      return;
    }
    notebookLessonIndex += 1;
    notebookStepIndex = 0;
    notebookRevealedQuotient = '';
    notebookJournalLines = [];
    notebookChatHistory = [];
    startNotebookLesson(notebookLessonIndex, false);
    window.scrollTo({top:0, behavior:'smooth'});
  });

  showPlacementBtn?.addEventListener('click', () => {
    playTap();
    placementHelp.hidden = !placementHelp.hidden;
  });

  notebookHelpBtn?.addEventListener('click', () => {
    playTap();
    notebookChat.hidden = !notebookChat.hidden;
    if (!notebookChat.hidden) {
      notebookChatInput.focus({preventScroll:true});
      notebookChat.scrollIntoView({behavior:'smooth', block:'nearest'});
    }
  });

  notebookChatForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const question = notebookChatInput.value.trim();
    if (!question) return;
    notebookChatInput.value = '';
    askNotebookNova(question);
  });


  askNovaHomeBtn?.addEventListener('click', () => {
    playTap();
    showNovaTutorView();
  });

  novaTutorBackBtn?.addEventListener('click', () => {
    playTap();
    showLearningHubView();
  });

  novaTutorProfileBtn?.addEventListener('click', () => {
    playTap();
    openSettingsView();
  });

  novaGeneralForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const question = String(novaGeneralInput?.value || '').trim();
    if (!question) return;
    if (novaGeneralInput) novaGeneralInput.value = '';
    askGeneralNova(question);
  });

  novaGeneralInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      novaGeneralForm?.requestSubmit();
    }
  });

  document.querySelectorAll('.curriculum-subject-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      playTap();
      showCurriculumSubject(btn.dataset.subject || 'math');
    });
  });

  [gradeSelector, subjectGradeSelector].forEach(container => {
    container?.querySelectorAll('[data-grade]').forEach(btn => {
      btn.addEventListener('click', () => setCurriculumGrade(btn.dataset.grade));
    });
  });

  curriculumSubjectBackBtn?.addEventListener('click', () => {
    playTap();
    showLearningHubView();
  });
  curriculumSubjectProfileBtn?.addEventListener('click', () => { playTap(); openSettingsView(); });
  curriculumTopicProfileBtn?.addEventListener('click', () => { playTap(); openSettingsView(); });
  curriculumTopicBackBtn?.addEventListener('click', () => {
    playTap();
    showCurriculumSubject(curriculumCurrentSubject);
  });
  curriculumGameStartBtn?.addEventListener('click', () => {
    playTap();
    openCurriculumGame();
  });
  curriculumGameCloseBtn?.addEventListener('click', () => { playTap(); closeCurriculumGame(); });
  curriculumGameDoneBtn?.addEventListener('click', () => { playTap(); closeCurriculumGame(); });
  curriculumGameReplayBtn?.addEventListener('click', () => { playTap(); replayCurriculumGame(); });
  curriculumGameNovaBtn?.addEventListener('click', () => { playTap(); openNovaFromCurriculumGame(); });
  curriculumGameHintBtn?.addEventListener('click', () => {
    playTap();
    if (!curriculumGameHint) return;
    curriculumGameHint.hidden = !curriculumGameHint.hidden;
  });
  curriculumGameNextBtn?.addEventListener('click', () => { playTap(); nextCurriculumGameQuestion(); });
  curriculumGameModal?.addEventListener('click', (event) => {
    if (event.target === curriculumGameModal) closeCurriculumGame();
  });

  curriculumPracticeBtn?.addEventListener('click', () => {
    playTap();
    practiceCurrentCurriculumTopic();
  });
  curriculumAskBtn?.addEventListener('click', () => {
    playTap();
    practiceCurrentCurriculumTopic({ askOnly:true });
  });
  curriculumDivisionLabBtn?.addEventListener('click', () => {
    playTap();
    showMathHubView();
  });
  novaNewConversationBtn?.addEventListener('click', () => {
    playTap();
    clearGeneralTutorSession();
    renderGeneralTutorConversation();
    if (novaGeneralInput) {
      novaGeneralInput.value = '';
      novaGeneralInput.placeholder = 'Escribe tu pregunta aquí…';
      novaGeneralInput.focus({ preventScroll:true });
    }
    showToast('Nueva conversación lista ✨', 1800);
  });

  continueLearningBtn?.addEventListener('click', () => {
    playTap();
    continueLearning();
  });

  mathContinueBtn?.addEventListener('click', () => {
    playTap();
    continueLearning();
  });

  mathBackBtn?.addEventListener('click', () => {
    playTap();
    showCurriculumSubject('math');
  });

  hubProfileBtn?.addEventListener('click', () => {
    playTap();
    openSettingsView();
  });

  mathProfileBtn?.addEventListener('click', () => {
    playTap();
    openSettingsView();
  });

  atlasPathBtn?.addEventListener('click', () => {
    playTap();
    showAtlasView({ respectIntro: true });
  });

  academyPathBtn?.addEventListener('click', () => {
    playTap();
    const snap = learningSnapshot();
    if (!snap.atlasCompleted && !testerMode) {
      showToast('Completa primero “Comprender la división” para continuar ✨', 2800);
      return;
    }
    showAcademyView();
  });

  atlasBackBtn?.addEventListener('click', () => {
    playTap();
    showMathHubView();
  });

  introBackBtn?.addEventListener('click', () => {
    playTap();
    showMathHubView();
  });

  signupTabBtn?.addEventListener('click', () => setAuthMode('signup'));
  loginTabBtn?.addEventListener('click', () => setAuthMode('login'));

  authForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!supabaseClient) {
      setAuthStatus('No pudimos abrir el acceso en este momento. Intenta nuevamente.', 'error');
      return;
    }

    const email = String(parentEmailInput?.value || '').trim().toLowerCase();
    const password = String(parentPasswordInput?.value || '');
    const childName = String(childNameInput?.value || '').trim().replace(/\s+/g, ' ');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setAuthStatus('Escribe un correo válido.', 'warning');
      parentEmailInput?.focus();
      return;
    }
    if (password.length < 6) {
      setAuthStatus('La contraseña debe tener al menos 6 caracteres.', 'warning');
      parentPasswordInput?.focus();
      return;
    }
    if (authMode === 'signup' && childName.length < 2) {
      setAuthStatus('Escribe el nombre del niño.', 'warning');
      childNameInput?.focus();
      return;
    }

    if (authSubmitBtn) {
      authSubmitBtn.disabled = true;
      authSubmitBtn.textContent = authMode === 'signup' ? 'Creando cuenta…' : 'Ingresando…';
    }
    setAuthStatus(authMode === 'signup' ? 'Creando tu cuenta familiar…' : 'Iniciando sesión…', 'loading');

    try {
      if (authMode === 'signup') {
        writeLocalJson(FAMILY_PROFILE_KEY, {
          email,
          childName,
          updatedAt: Date.now()
        });

        const { data, error } = await supabaseClient.auth.signUp({
          email,
          password,
          options: {
            data: { account_type: 'parent' },
            emailRedirectTo: `${window.location.origin}/`
          }
        });
        if (error) throw error;

        if (!data.session) {
          setAuthStatus('Cuenta creada. Revisa tu correo y confirma el enlace para activar la cuenta. Después vuelve e inicia sesión.', 'success');
          setAuthMode('login');
          if (parentEmailInput) parentEmailInput.value = email;
          return;
        }

        setAuthStatus('');
        await handleAuthSession(data.session);
      } else {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) throw error;
        setAuthStatus('');
        await handleAuthSession(data.session);
      }
    } catch (error) {
      console.error('auth error', error);
      const raw = String(error?.message || '').toLowerCase();
      let friendly = 'No pudimos entrar a la cuenta. Intenta nuevamente.';
      if (raw.includes('invalid login') || raw.includes('invalid credentials')) {
        friendly = 'Correo o contraseña incorrectos.';
      } else if (raw.includes('already registered') || raw.includes('already exists')) {
        friendly = 'Este correo ya tiene una cuenta. Usa “Ya tengo cuenta”.';
      } else if (raw.includes('email not confirmed') || raw.includes('not confirmed')) {
        friendly = 'Confirma primero el correo que te enviamos y luego inicia sesión.';
      } else if (raw.includes('rate limit') || raw.includes('too many')) {
        friendly = 'Hicimos varios intentos seguidos. Espera un momento y vuelve a probar.';
      }
      setAuthStatus(friendly, 'error');
    } finally {
      if (authSubmitBtn) {
        authSubmitBtn.disabled = false;
        authSubmitBtn.textContent = authMode === 'signup' ? 'Crear cuenta familiar' : 'Iniciar sesión';
      }
    }
  });

  childProfileForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = String(childProfileNameInput?.value || '').trim().replace(/\s+/g, ' ');
    if (name.length < 2) {
      setAccessStatus('Escribe el nombre del niño.', 'warning');
      childProfileNameInput?.focus();
      return;
    }

    if (createChildBtn) {
      createChildBtn.disabled = true;
      createChildBtn.textContent = 'Creando perfil…';
    }
    setAccessStatus('Creando el perfil y preparando el progreso…', 'loading');

    try {
      await createChildProfile(name);
      const hydration = await hydrateCloudProgress();
      if (hydration.reloadNeeded) {
        setAccessStatus('Cargando el progreso guardado…', 'success');
        setTimeout(() => window.location.reload(), 250);
        return;
      }
      showAccountStage('loading');
      setAccessStatus('');
      setAccountLoadingState({
        title: 'Preparando tu espacio de aprendizaje…',
        text: 'El perfil está listo. Estamos comprobando el acceso de tu cuenta.'
      });
      const accessState = await verifySubscription({ silent: true });
      if (accessState === true) return;
      if (accessState === null) {
        setAccountLoadingState({
          title: 'No pudimos revisar tu acceso',
          text: 'El perfil quedó guardado. Intenta nuevamente para continuar.',
          error: true
        });
        return;
      }
      showAccountStage('subscriber');
      setAccessStatus('');
    } catch (error) {
      console.error('create child error', error);
      setAccessStatus('No pudimos crear el perfil en este momento. Intenta nuevamente.', 'error');
    } finally {
      if (createChildBtn) {
        createChildBtn.disabled = false;
        createChildBtn.textContent = 'Crear perfil y continuar';
      }
    }
  });

  subscriptionForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!currentSession?.access_token || !currentUser || !activeChild) {
      setAccessStatus('Primero inicia sesión y crea el perfil del niño.', 'warning');
      return;
    }

    if (!subscriptionConfig.paymentConfigured) {
      setAccessStatus('El pago no está disponible en este momento. Intenta nuevamente más tarde.', 'warning');
      return;
    }

    await openPaymentPanel();
  });

  closePaymentPanelBtn?.addEventListener('click', closePaymentPanel);

  verifySubscriptionBtn?.addEventListener('click', () => verifySubscription({ silent: false }));

  subscriptionSettingsBtn?.addEventListener('click', async () => {
    if (sessionStorage.getItem(OWNER_DEMO_KEY) === 'yes') {
      showToast('Estás usando el modo de pruebas del adulto.');
      return;
    }
    await openPlanManagement();
  });

  closePlanManagementBtn?.addEventListener('click', closePlanManagement);
  planManagementModal?.addEventListener('click', (e) => {
    if (e.target === planManagementModal) closePlanManagement();
  });
  cancelPlanBtn?.addEventListener('click', showPlanCancelConfirmation);
  keepPlanBtn?.addEventListener('click', showPlanOverview);
  confirmCancelPlanBtn?.addEventListener('click', cancelCurrentSubscription);

  accessSignOutBtn?.addEventListener('click', () => signOutFamily());
  childSetupSignOutBtn?.addEventListener('click', () => signOutFamily());
  accountLoadingSignOutBtn?.addEventListener('click', () => signOutFamily());
  accountRetryBtn?.addEventListener('click', async () => {
    if (!currentSession?.user) {
      showAccountStage('auth');
      return;
    }
    showAccountStage('loading');
    setAccountLoadingState();
    setAccessStatus('');
    if (familyLoadPromise) return;
    await handleAuthSession(currentSession);
  });
  accountSignOutBtn?.addEventListener('click', () => signOutFamily());

  reviewHomeBtn?.addEventListener('click', () => {
    playTap();
    closeNavigationOverlays();
    showLearningHubView();
  });

  reviewPanelBtn?.addEventListener('click', () => openTesterModal());

  reviewExitBtn?.addEventListener('click', () => {
    if (isOwnerReviewSession()) exitReviewToAccess();
    else exitTesterMode();
  });

  ownerAccessBtn?.addEventListener('click', () => {
    if (!ownerPinForm) return;
    ownerPinForm.hidden = !ownerPinForm.hidden;
    if (!ownerPinForm.hidden) ownerPinInput?.focus();
  });

  ownerPinForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const pin = String(ownerPinInput?.value || '').trim();
    if (pin !== TESTER_PIN) {
      setAccessStatus('La clave de revisión no es correcta.', 'error');
      ownerPinInput?.select();
      return;
    }
    sessionStorage.setItem(OWNER_DEMO_KEY, 'yes');
    grantCommercialAccess('owner');
    setAccessStatus('');
    showLearningHubView();
  });

  startBtn.addEventListener('click', () => openApp(true));
  skipIntroBtn.addEventListener('click', () => openApp(false));

  // Guarda incluso si se cierra el navegador, se bloquea la tablet o cambia de app.
  window.addEventListener('pagehide', () => {
    saveGameState();
    saveNotebookState();
    saveAcademyState();
    saveGeneralTutorSession();
    syncProgressToCloud();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      saveGameState();
      saveNotebookState();
      saveAcademyState();
      saveGeneralTutorSession();
      syncProgressToCloud();
    }
  });

  const initialSaved = readSavedGame();
  if (initialSaved && (Number(initialSaved.mission) > 0 || Number(initialSaved.unlocked) > 0 || initialSaved.currentMissionCompleted)) {
    startBtn.textContent = `▶️ Continuar misión ${mission + 1}`;
    skipIntroBtn.textContent = 'Entrar sin sonido';
  }

  // La intro aparece al abrir, pero el botón continúa exactamente donde quedó el niño.
  initializeCommercialAccess();
})();
