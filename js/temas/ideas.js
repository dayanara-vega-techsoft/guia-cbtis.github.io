function renderIdeas(){
return `
<div class="topic-shell">

<div class="session-header">
<h1>💡 Ideas principales e ideas secundarias</h1>
<p>Tema 2 · Páginas 32 - 37</p>
</div>

<div class="nav-tabs">
<button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">2.1 Teoría</button>
<button class="tab-btn" id="btn-lecturas" onclick="switchTab('lecturas')">2.2 Lecturas prácticas</button>
<button class="tab-btn" id="btn-evaluacion" onclick="switchTab('evaluacion')">2.3 Taller de evaluación</button>
</div>

<!-- =========================
TEORÍA
========================= -->

<div class="sub-tab-content active" id="teoria">

<div class="subtopic-section">

<span class="subtopic-header-tag">
🎯 Concepto general
</span>

<h2 class="section-h2">
¿Qué son las ideas principales?
</h2>

<p>
La idea principal es la información más importante de un texto.
Es la idea central que el autor quiere comunicar.
</p>

<p>
Si quitamos la idea principal,
el texto pierde sentido o ya no se entiende correctamente.
</p>

<div class="important-box">
💡 Idea sencilla:
la idea principal responde:
“¿De qué trata principalmente el texto?”
</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">
📝 Ideas secundarias
</span>

<h2 class="section-h2">
¿Qué son las ideas secundarias?
</h2>

<p>
Las ideas secundarias complementan, explican,
detallan o apoyan la idea principal.
</p>

<p>
Sirven para agregar ejemplos,
explicaciones, datos o características.
</p>

<div class="important-box">
🎯 Tip EDIEMS:
las ideas secundarias ayudan a entender mejor
la idea principal, pero no son el tema central.
</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">
⚖️ Diferencia importante
</span>

<h2 class="section-h2">
Idea principal vs idea secundaria
</h2>

<div class="map-container">

<div class="map-branches">

<div class="map-branch">

<div class="branch-title">
💡 Idea principal
</div>

<div class="map-leaf">
Es el tema central.
</div>

<div class="map-leaf">
Resume el texto.
</div>

<div class="map-leaf">
Sin ella el texto pierde sentido.
</div>

</div>

<div class="map-branch">

<div class="branch-title">
📝 Idea secundaria
</div>

<div class="map-leaf">
Apoya o explica.
</div>

<div class="map-leaf">
Da detalles y ejemplos.
</div>

<div class="map-leaf">
Puede eliminarse sin cambiar el tema principal.
</div>

</div>

</div>

</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">
🧠 Cómo identificarlas
</span>

<h2 class="section-h2">
Método rápido para examen CBTIS / EDIEMS
</h2>

<div class="map-container">

<div class="map-branches">

<div class="map-branch">

<div class="branch-title">
1️⃣ Lee el título
</div>

<div class="map-leaf">
Te da una pista sobre el tema central.
</div>

</div>

<div class="map-branch">

<div class="branch-title">
2️⃣ Busca la idea repetida
</div>

<div class="map-leaf">
La idea principal suele repetirse o relacionarse
con todo el texto.
</div>

</div>

<div class="map-branch">

<div class="branch-title">
3️⃣ Identifica detalles
</div>

<div class="map-leaf">
Los ejemplos y explicaciones normalmente son secundarias.
</div>

</div>

<div class="map-branch">

<div class="branch-title">
4️⃣ Pregunta clave
</div>

<div class="map-leaf">
¿De qué trata principalmente el texto?
</div>

</div>

</div>

</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">
📖 Ejemplo guiado
</span>

<h2 class="section-h2">
Analizando un texto
</h2>

<div class="text-panel">

<div class="text-title">
Texto
</div>

<div class="text-body">
El ejercicio físico ayuda a mantener
una buena salud. Además,
mejora la circulación,
fortalece los músculos
y ayuda a reducir el estrés.
</div>

</div>

<div class="important-box">
💡 Idea principal:
“El ejercicio físico ayuda a mantener una buena salud.”
</div>

<div class="important-box">
📝 Ideas secundarias:
“Mejora la circulación”,
“fortalece los músculos”
y “reduce el estrés”.
</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">
🚫 Error común
</span>

<h2 class="section-h2">
Lo que muchos estudiantes hacen mal
</h2>

<p>
Un error frecuente es pensar que la oración más larga
siempre es la idea principal.
</p>

<p>
La idea principal no depende del tamaño,
sino de la importancia que tiene dentro del texto.
</p>

<div class="important-box">
🎯 En los exámenes de admisión
normalmente te pedirán identificar:
idea principal,
idea secundaria
o propósito del texto.
</div>

</div>

</div>

<!-- =========================
LECTURAS
========================= -->

<div class="sub-tab-content" id="lecturas">

<div class="subtopic-section">

<span class="subtopic-header-tag">
📖 Lectura práctica 1
</span>

<h2 class="section-h2">
Identificando idea principal
</h2>

<div class="text-panel">

<div class="text-title">
Texto
</div>

<div class="text-body">
Los videojuegos pueden ayudar
a desarrollar habilidades cognitivas.
Algunos mejoran la memoria,
la atención y la capacidad
de resolver problemas.
</div>

</div>

<div class="quiz-card">

<div class="quiz-question">
¿Cuál es la idea principal?
</div>

<label class="option-item">
<input type="radio" name="lect1" value="a">
A) Los videojuegos pueden ayudar
a desarrollar habilidades cognitivas.
</label>

<label class="option-item">
<input type="radio" name="lect1" value="b">
B) Mejoran la memoria.
</label>

<label class="option-item">
<input type="radio" name="lect1" value="c">
C) Ayudan a resolver problemas.
</label>

<label class="option-item">
<input type="radio" name="lect1" value="d">
D) Algunos mejoran la atención.
</label>

<button class="btn-verify" onclick="verifyLect1()">
Revisar respuesta
</button>

<div class="feedback" id="feedback-lect1"></div>

</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">
📖 Lectura práctica 2
</span>

<h2 class="section-h2">
Identificando idea secundaria
</h2>

<div class="text-panel">

<div class="text-title">
Texto
</div>

<div class="text-body">
La lectura es importante para el aprendizaje.
Además de ampliar el vocabulario,
ayuda a mejorar la comprensión
y fortalece la imaginación.
</div>

</div>

<div class="quiz-card">

<div class="quiz-question">
¿Cuál es una idea secundaria?
</div>

<label class="option-item">
<input type="radio" name="lect2" value="a">
A) La lectura es importante para el aprendizaje.
</label>

<label class="option-item">
<input type="radio" name="lect2" value="b">
B) Ayuda a mejorar la comprensión.
</label>

<label class="option-item">
<input type="radio" name="lect2" value="c">
C) El texto habla sobre la lectura.
</label>

<label class="option-item">
<input type="radio" name="lect2" value="d">
D) La lectura existe desde hace siglos.
</label>

<button class="btn-verify" onclick="verifyLect2()">
Revisar respuesta
</button>

<div class="feedback" id="feedback-lect2"></div>

</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">
📖 Lectura práctica 3
</span>

<h2 class="section-h2">
Analizando un párrafo
</h2>

<div class="text-panel">

<div class="text-title">
Texto
</div>

<div class="text-body">
Dormir bien es fundamental para la salud.
El descanso ayuda al cerebro,
mejora el estado de ánimo
y permite recuperar energía.
</div>

</div>

<div class="quiz-card">

<div class="quiz-question">
¿Qué función tienen las últimas ideas del texto?
</div>

<label class="option-item">
<input type="radio" name="lect3" value="a">
A) Son ideas secundarias que apoyan la principal.
</label>

<label class="option-item">
<input type="radio" name="lect3" value="b">
B) Son títulos.
</label>

<label class="option-item">
<input type="radio" name="lect3" value="c">
C) Son comparaciones.
</label>

<label class="option-item">
<input type="radio" name="lect3" value="d">
D) Son definiciones.
</label>

<button class="btn-verify" onclick="verifyLect3()">
Revisar respuesta
</button>

<div class="feedback" id="feedback-lect3"></div>

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
Responde las preguntas basadas
en las páginas 32 - 37.
</p>

</div>

<div class="quiz-card">

<div class="quiz-question">
1. ¿Qué es una idea principal?
</div>

<label class="option-item">
<input type="radio" name="q1" value="a">
A) La información más importante del texto.
</label>

<label class="option-item">
<input type="radio" name="q1" value="b">
B) Un ejemplo sin importancia.
</label>

<label class="option-item">
<input type="radio" name="q1" value="c">
C) Una comparación.
</label>

<label class="option-item">
<input type="radio" name="q1" value="d">
D) Un dato aislado.
</label>

<button class="btn-verify" onclick="verifyQ1()">
Revisar respuesta
</button>

<div class="feedback" id="feedback-q1"></div>

</div>

<div class="quiz-card">

<div class="quiz-question">
2. ¿Qué hacen las ideas secundarias?
</div>

<label class="option-item">
<input type="radio" name="q2" value="a">
A) Cambian completamente el tema.
</label>

<label class="option-item">
<input type="radio" name="q2" value="b">
B) Complementan o explican la idea principal.
</label>

<label class="option-item">
<input type="radio" name="q2" value="c">
C) Eliminan el sentido del texto.
</label>

<label class="option-item">
<input type="radio" name="q2" value="d">
D) Funcionan como títulos.
</label>

<button class="btn-verify" onclick="verifyQ2()">
Revisar respuesta
</button>

<div class="feedback" id="feedback-q2"></div>

</div>

<div class="quiz-card">

<div class="quiz-question">
3. ¿Qué pregunta ayuda a encontrar la idea principal?
</div>

<label class="option-item">
<input type="radio" name="q3" value="a">
A) ¿Qué colores aparecen?
</label>

<label class="option-item">
<input type="radio" name="q3" value="b">
B) ¿Cuántas palabras tiene?
</label>

<label class="option-item">
<input type="radio" name="q3" value="c">
C) ¿De qué trata principalmente el texto?
</label>

<label class="option-item">
<input type="radio" name="q3" value="d">
D) ¿Quién escribió el texto?
</label>

<button class="btn-verify" onclick="verifyQ3()">
Revisar respuesta
</button>

<div class="feedback" id="feedback-q3"></div>

</div>

<div class="quiz-card">

<div class="quiz-question">
4. ¿Cuál es una característica de las ideas secundarias?
</div>

<label class="option-item">
<input type="radio" name="q4" value="a">
A) Siempre son títulos.
</label>

<label class="option-item">
<input type="radio" name="q4" value="b">
B) Son el tema central del texto.
</label>

<label class="option-item">
<input type="radio" name="q4" value="c">
C) Dan detalles, ejemplos o explicaciones.
</label>

<label class="option-item">
<input type="radio" name="q4" value="d">
D) No tienen relación con la principal.
</label>

<button class="btn-verify" onclick="verifyQ4()">
Revisar respuesta
</button>

<div class="feedback" id="feedback-q4"></div>

</div>

<div class="quiz-card">

<div class="quiz-question">
5. ¿Cuál es la idea principal del siguiente texto?

“Las plantas son esenciales para la vida.
Producen oxígeno,
ayudan al medio ambiente
y sirven de alimento para muchos seres vivos.”
</div>

<label class="option-item">
<input type="radio" name="q5" value="a">
A) Ayudan al medio ambiente.
</label>

<label class="option-item">
<input type="radio" name="q5" value="b">
B) Sirven de alimento.
</label>

<label class="option-item">
<input type="radio" name="q5" value="c">
C) Las plantas son esenciales para la vida.
</label>

<label class="option-item">
<input type="radio" name="q5" value="d">
D) Producen oxígeno.
</label>

<button class="btn-verify" onclick="verifyQ5()">
Revisar respuesta
</button>

<div class="feedback" id="feedback-q5"></div>

</div>

</div>

</div>
`;
}

function verifySimple(name,correct,id,msg){

const selected=document.querySelector(`input[name="${name}"]:checked`);
const feedback=document.getElementById(id);

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
verifySimple("lect1","a","feedback-lect1","✅ Correcto. Esa es la idea central del texto.");
}

function verifyLect2(){
verifySimple("lect2","b","feedback-lect2","✅ Correcto. Esa idea complementa la principal.");
}

function verifyLect3(){
verifySimple("lect3","a","feedback-lect3","✅ Correcto. Son ideas secundarias que apoyan la principal.");
}

function verifyQ1(){
verifySimple("q1","a","feedback-q1","✅ Correcto. La idea principal es la más importante.");
}

function verifyQ2(){
verifySimple("q2","b","feedback-q2","✅ Correcto. Las secundarias apoyan y explican.");
}

function verifyQ3(){
verifySimple("q3","c","feedback-q3","✅ Correcto. Esa pregunta ayuda a identificar la idea principal.");
}

function verifyQ4(){
verifySimple("q4","c","feedback-q4","✅ Correcto. Las ideas secundarias agregan detalles y ejemplos.");
}

function verifyQ5(){
verifySimple("q5","c","feedback-q5","✅ Correcto. Esa es la idea central del texto.");
}
