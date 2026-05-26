
function renderDocumentos(){
return `
<div class="topic-shell">

<div class="session-header">
<h1>📂 Tipos de documentos</h1>
<p>Sesión 1 · Páginas 12 - 18</p>
</div>

<div class="nav-tabs">
<button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">1.1 Teoría</button>
<button class="tab-btn" id="btn-lecturas" onclick="switchTab('lecturas')">1.2 Lecturas prácticas</button>
<button class="tab-btn" id="btn-evaluacion" onclick="switchTab('evaluacion')">1.3 Taller de evaluación</button>
</div>

<!-- =========================
TEORÍA
========================= -->

<div class="sub-tab-content active" id="teoria">

<div class="subtopic-section">

<span class="subtopic-header-tag">
✉️ La carta
</span>

<h2 class="section-h2">
¿Qué es una carta?
</h2>

<p>
La carta es un recurso que sirve para transmitir información.
Permite comunicar mensajes entre un remitente y un destinatario.
</p>

<p>
Aunque actualmente existen correos electrónicos y mensajes instantáneos,
la carta sigue siendo importante porque organiza la información
de manera clara y estructurada.
</p>

<div class="important-box">
💡 Idea sencilla:
una carta es como un mensaje largo y organizado que se escribe
para informar, agradecer, invitar, solicitar o comunicar algo importante.
</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">
📨 Elementos básicos
</span>

<h2 class="section-h2">
Remitente y destinatario
</h2>

<div class="map-container">

<div class="map-branches">

<div class="map-branch">
<div class="branch-title">👤 Remitente</div>
<div class="map-leaf">
Es la persona que escribe y envía la carta.
</div>
</div>

<div class="map-branch">
<div class="branch-title">📬 Destinatario</div>
<div class="map-leaf">
Es la persona o institución que recibe el mensaje.
</div>
</div>

</div>

</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">
⚖️ Tipos de carta
</span>

<h2 class="section-h2">
Carta formal e informal
</h2>

<p>
Las cartas pueden clasificarse en formales e informales.
La diferencia principal depende de la relación entre el remitente
y el destinatario.
</p>

<div class="map-container">

<div class="map-branches">

<div class="map-branch">
<div class="branch-title">🏫 Carta formal</div>

<div class="map-leaf">
Usa lenguaje formal y respetuoso.
</div>

<div class="map-leaf">
Tiene estructura organizada y predeterminada.
</div>

<div class="map-leaf">
Se utiliza para trámites, asuntos laborales,
servicios o comunicación institucional.
</div>

<div class="map-leaf">
Ejemplo: carta dirigida al director de una escuela.
</div>
</div>

<div class="map-branch">
<div class="branch-title">👨‍👩‍👧 Carta informal</div>

<div class="map-leaf">
Usa lenguaje cercano y personal.
</div>

<div class="map-leaf">
La estructura puede ser más libre.
</div>

<div class="map-leaf">
Se usa entre amigos o familiares.
</div>

<div class="map-leaf">
Ejemplo: carta para un familiar o amigo.
</div>

</div>

</div>

</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">
🧩 Partes de la carta formal
</span>

<h2 class="section-h2">
Elementos importantes
</h2>

<div class="map-container">

<div class="map-branches">

<div class="map-branch">
<div class="branch-title">🏷️ Membrete</div>
<div class="map-leaf">
Datos de la institución o empresa.
</div>
</div>

<div class="map-branch">
<div class="branch-title">📍 Lugar y fecha</div>
<div class="map-leaf">
Indican dónde y cuándo se escribió.
</div>
</div>

<div class="map-branch">
<div class="branch-title">👤 Destinatario</div>
<div class="map-leaf">
Persona o institución a quien se dirige.
</div>
</div>

<div class="map-branch">
<div class="branch-title">👋 Saludo</div>
<div class="map-leaf">
Forma respetuosa de iniciar la carta.
</div>
</div>

<div class="map-branch">
<div class="branch-title">📝 Cuerpo</div>
<div class="map-leaf">
Contiene el mensaje principal.
</div>
</div>

<div class="map-branch">
<div class="branch-title">🔵 Despedida</div>
<div class="map-leaf">
Cierre cordial del mensaje.
</div>
</div>

<div class="map-branch">
<div class="branch-title">✍️ Firma</div>
<div class="map-leaf">
Nombre y firma de quien escribe.
</div>
</div>

</div>

</div>

<div class="important-box">
🎯 Tip CBTIS / EDIEMS:
en el examen suelen pedir identificar las partes
de una carta formal.
</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">
🏗️ Estructura
</span>

<h2 class="section-h2">
Estructura externa e interna
</h2>

<div class="map-container">

<div class="map-branches">

<div class="map-branch">
<div class="branch-title">📐 Estructura externa</div>

<div class="map-leaf">
Es la organización visual del texto.
</div>

<div class="map-leaf">
Incluye introducción, cuerpo y cierre.
</div>

</div>

<div class="map-branch">
<div class="branch-title">🧠 Estructura interna</div>

<div class="map-leaf">
Es el contenido del mensaje.
</div>

<div class="map-leaf">
Incluye ideas, emociones y coherencia.
</div>

</div>

</div>

</div>

</div>

</div>

<!-- =========================
LECTURAS
========================= -->

<div class="sub-tab-content" id="lecturas">

<div class="subtopic-section">

<span class="subtopic-header-tag">
📄 Lectura práctica 1
</span>

<h2 class="section-h2">
Carta formal
</h2>

<div class="text-panel">

<div class="text-title">
Carta adaptada de la guía
</div>

<div class="text-body">
Ensenada, Baja California, a 18 de junio de 2023.

Dr. Juan Luis Pallares Cruz
Director General
Editorial Hexágono

Distinguido Director:

Me dirijo a usted con el propósito de informar
sobre la situación actual de Imprenta Épsilon
y explorar posibilidades de colaboración.

Atentamente:
Jaime Rodrigo Bastida Morillo
Director General
</div>

</div>

<div class="quiz-card">

<div class="quiz-question">
¿Qué característica muestra que esta carta es formal?
</div>

<label class="option-item">
<input type="radio" name="lect1" value="a">
A) Usa lenguaje respetuoso
</label>

<label class="option-item">
<input type="radio" name="lect1" value="b">
B) Tiene lenguaje de amistad
</label>

<label class="option-item">
<input type="radio" name="lect1" value="c">
C) No tiene saludo
</label>

<label class="option-item">
<input type="radio" name="lect1" value="d">
D) Tiene personajes fantásticos
</label>

<button class="btn-verify" onclick="verifyLect1()">
Revisar respuesta
</button>

<div class="feedback" id="feedback-lect1"></div>

</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">
💌 Lectura práctica 2
</span>

<h2 class="section-h2">
Carta informal
</h2>

<div class="text-panel">

<div class="text-title">
Carta familiar
</div>

<div class="text-body">
Queridos papá y mamá:

Espero que se encuentren muy bien.
Amanda y yo estamos disfrutando mucho
nuestro viaje en Los Cabos.

Los extrañamos mucho y queríamos compartirles
lo felices que estamos.

Con cariño,
Su hijo.
</div>

</div>

<div class="quiz-card">

<div class="quiz-question">
¿Por qué esta carta es informal?
</div>

<label class="option-item">
<input type="radio" name="lect2" value="a">
A) Porque está dirigida a familiares
</label>

<label class="option-item">
<input type="radio" name="lect2" value="b">
B) Porque es un contrato
</label>

<label class="option-item">
<input type="radio" name="lect2" value="c">
C) Porque tiene datos empresariales
</label>

<label class="option-item">
<input type="radio" name="lect2" value="d">
D) Porque usa tablas
</label>

<button class="btn-verify" onclick="verifyLect2()">
Revisar respuesta
</button>

<div class="feedback" id="feedback-lect2"></div>

</div>

</div>

</div>

<!-- =========================
EVALUACIÓN
========================= -->

<div class="sub-tab-content" id="evaluacion">

<div class="subtopic-section">

<span class="subtopic-header-tag">
📝 Taller CBTIS / EDIEMS
</span>

<h2 class="section-h2">
Evaluación práctica
</h2>

<p>
Responde las siguientes preguntas basadas
en las páginas 12 a 18 de la guía.
</p>

</div>

<div class="quiz-card">

<div class="quiz-question">
1. ¿Qué es una carta?
</div>

<label class="option-item">
<input type="radio" name="q1" value="a">
A) Un recurso para transmitir información
</label>

<label class="option-item">
<input type="radio" name="q1" value="b">
B) Un poema musical
</label>

<label class="option-item">
<input type="radio" name="q1" value="c">
C) Una tabla estadística
</label>

<label class="option-item">
<input type="radio" name="q1" value="d">
D) Un texto sin destinatario
</label>

<button class="btn-verify" onclick="verifyQ1()">
Revisar respuesta
</button>

<div class="feedback" id="feedback-q1"></div>

</div>

<div class="quiz-card">

<div class="quiz-question">
2. ¿Quién es el remitente?
</div>

<label class="option-item">
<input type="radio" name="q2" value="a">
A) Quien recibe la carta
</label>

<label class="option-item">
<input type="radio" name="q2" value="b">
B) Quien escribe y envía la carta
</label>

<label class="option-item">
<input type="radio" name="q2" value="c">
C) El lugar donde se imprime
</label>

<label class="option-item">
<input type="radio" name="q2" value="d">
D) El título del documento
</label>

<button class="btn-verify" onclick="verifyQ2()">
Revisar respuesta
</button>

<div class="feedback" id="feedback-q2"></div>

</div>

<div class="quiz-card">

<div class="quiz-question">
3. ¿Qué característica tiene una carta formal?
</div>

<label class="option-item">
<input type="radio" name="q3" value="a">
A) Usa lenguaje respetuoso
</label>

<label class="option-item">
<input type="radio" name="q3" value="b">
B) Usa lenguaje de confianza
</label>

<label class="option-item">
<input type="radio" name="q3" value="c">
C) No tiene estructura
</label>

<label class="option-item">
<input type="radio" name="q3" value="d">
D) Siempre es corta
</label>

<button class="btn-verify" onclick="verifyQ3()">
Revisar respuesta
</button>

<div class="feedback" id="feedback-q3"></div>

</div>

<div class="quiz-card">

<div class="quiz-question">
4. ¿Cuál es una parte de la carta formal?
</div>

<label class="option-item">
<input type="radio" name="q4" value="a">
A) Destinatario
</label>

<label class="option-item">
<input type="radio" name="q4" value="b">
B) Villano
</label>

<label class="option-item">
<input type="radio" name="q4" value="c">
C) Escenario fantástico
</label>

<label class="option-item">
<input type="radio" name="q4" value="d">
D) Rima
</label>

<button class="btn-verify" onclick="verifyQ4()">
Revisar respuesta
</button>

<div class="feedback" id="feedback-q4"></div>

</div>

</div>

</div>
`;
}

function verifySimple(name,correct,id,msg){

const selected = document.querySelector(`input[name="${name}"]:checked`);
const feedback = document.getElementById(id);

if(!selected){
alert("Selecciona una opción.");
return;
}

if(selected.value===correct){
feedback.className="feedback correct";
feedback.innerHTML=msg;
}else{
feedback.className="feedback incorrect";
feedback.innerHTML="❌ Respuesta incorrecta. Revisa nuevamente la teoría.";
}

}

function verifyLect1(){
verifySimple("lect1","a","feedback-lect1","✅ Correcto. La carta formal usa lenguaje respetuoso.");
}

function verifyLect2(){
verifySimple("lect2","a","feedback-lect2","✅ Correcto. La carta informal se usa entre personas cercanas.");
}

function verifyQ1(){
verifySimple("q1","a","feedback-q1","✅ Correcto. La carta transmite información.");
}

function verifyQ2(){
verifySimple("q2","b","feedback-q2","✅ Correcto. El remitente escribe y envía la carta.");
}

function verifyQ3(){
verifySimple("q3","a","feedback-q3","✅ Correcto. La carta formal usa lenguaje respetuoso.");
}

function verifyQ4(){
verifySimple("q4","a","feedback-q4","✅ Correcto. El destinatario es una parte importante.");
}
