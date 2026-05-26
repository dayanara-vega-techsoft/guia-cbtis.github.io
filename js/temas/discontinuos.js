function renderDiscontinuos(){
return `
<div class="topic-shell">

<div class="session-header">
<h1>📈 Textos discontinuos</h1>
<p>Tema 3 · Páginas 50 - 54</p>
</div>

<div class="nav-tabs">
<button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">3.1 Teoría</button>
<button class="tab-btn" id="btn-lecturas" onclick="switchTab('lecturas')">3.2 Lecturas prácticas</button>
<button class="tab-btn" id="btn-evaluacion" onclick="switchTab('evaluacion')">3.3 Taller de evaluación</button>
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
¿Qué son los textos discontinuos?
</h2>

<p>
Los textos discontinuos son textos que presentan
información de manera gráfica, visual u organizada,
sin seguir párrafos continuos como en una lectura tradicional.
</p>

<p>
En lugar de grandes bloques de texto,
utilizan tablas, gráficas, diagramas,
mapas, formularios o imágenes.
</p>

<div class="important-box">
💡 Idea sencilla:
los textos discontinuos muestran información
de manera visual y organizada para facilitar su comprensión.
</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">
📖 Diferencia importante
</span>

<h2 class="section-h2">
Textos continuos vs discontinuos
</h2>

<div class="map-container">

<div class="map-branches">

<div class="map-branch">

<div class="branch-title">
📘 Textos continuos
</div>

<div class="map-leaf">
La información aparece en párrafos.
</div>

<div class="map-leaf">
Ejemplos:
cuentos,
novelas,
artículos
y ensayos.
</div>

</div>

<div class="map-branch">

<div class="branch-title">
📊 Textos discontinuos
</div>

<div class="map-leaf">
La información aparece organizada visualmente.
</div>

<div class="map-leaf">
Ejemplos:
gráficas,
tablas,
mapas,
diagramas
y formularios.
</div>

</div>

</div>

</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">
📈 Tipos más comunes
</span>

<h2 class="section-h2">
Ejemplos de textos discontinuos
</h2>

<div class="map-container">

<div class="map-branches">

<div class="map-branch">

<div class="branch-title">
📊 Gráficas
</div>

<div class="map-leaf">
Representan datos mediante barras,
líneas o figuras.
</div>

</div>

<div class="map-branch">

<div class="branch-title">
📋 Tablas
</div>

<div class="map-leaf">
Organizan información en filas y columnas.
</div>

</div>

<div class="map-branch">

<div class="branch-title">
🗺️ Mapas
</div>

<div class="map-leaf">
Muestran ubicaciones o recorridos.
</div>

</div>

<div class="map-branch">

<div class="branch-title">
🧩 Diagramas
</div>

<div class="map-leaf">
Explican procesos o relaciones.
</div>

</div>

<div class="map-branch">

<div class="branch-title">
📝 Formularios
</div>

<div class="map-leaf">
Solicitan datos específicos.
</div>

</div>

<div class="map-branch">

<div class="branch-title">
📅 Horarios
</div>

<div class="map-leaf">
Organizan actividades y tiempos.
</div>

</div>

</div>

</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">
🧠 Cómo interpretarlos
</span>

<h2 class="section-h2">
Claves para entender textos discontinuos
</h2>

<div class="map-container">

<div class="map-branches">

<div class="map-branch">

<div class="branch-title">
1️⃣ Observa títulos
</div>

<div class="map-leaf">
El título indica el tema principal.
</div>

</div>

<div class="map-branch">

<div class="branch-title">
2️⃣ Analiza imágenes o datos
</div>

<div class="map-leaf">
Las gráficas y tablas contienen información importante.
</div>

</div>

<div class="map-branch">

<div class="branch-title">
3️⃣ Revisa símbolos
</div>

<div class="map-leaf">
Los colores, flechas o iconos ayudan a interpretar información.
</div>

</div>

<div class="map-branch">

<div class="branch-title">
4️⃣ Busca relaciones
</div>

<div class="map-leaf">
Relaciona datos, cantidades o categorías.
</div>

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
📖 Lectura práctica 1
</span>

<h2 class="section-h2">
Interpretando una gráfica
</h2>

<div class="text-panel">

<div class="text-title">
Ventas de libros
</div>

<div class="text-body">
Enero: 40 libros
Febrero: 55 libros
Marzo: 60 libros
Abril: 50 libros
</div>

</div>

<div class="quiz-card">

<div class="quiz-question">
¿En qué mes hubo más ventas?
</div>

<label class="option-item">
<input type="radio" name="lect1" value="a">
A) Enero
</label>

<label class="option-item">
<input type="radio" name="lect1" value="b">
B) Febrero
</label>

<label class="option-item">
<input type="radio" name="lect1" value="c">
C) Marzo
</label>

<label class="option-item">
<input type="radio" name="lect1" value="d">
D) Abril
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
Identificando textos discontinuos
</h2>

<div class="quiz-card">

<div class="quiz-question">
¿Cuál es un ejemplo de texto discontinuo?
</div>

<label class="option-item">
<input type="radio" name="lect2" value="a">
A) Un cuento
</label>

<label class="option-item">
<input type="radio" name="lect2" value="b">
B) Una novela
</label>

<label class="option-item">
<input type="radio" name="lect2" value="c">
C) Una tabla de datos
</label>

<label class="option-item">
<input type="radio" name="lect2" value="d">
D) Un poema
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
Interpretando información
</h2>

<div class="text-panel">

<div class="text-title">
Horario escolar
</div>

<div class="text-body">
8:00 - Matemáticas
9:00 - Español
10:00 - Ciencias
11:00 - Historia
</div>

</div>

<div class="quiz-card">

<div class="quiz-question">
¿Qué materia corresponde a las 10:00?
</div>

<label class="option-item">
<input type="radio" name="lect3" value="a">
A) Matemáticas
</label>

<label class="option-item">
<input type="radio" name="lect3" value="b">
B) Historia
</label>

<label class="option-item">
<input type="radio" name="lect3" value="c">
C) Español
</label>

<label class="option-item">
<input type="radio" name="lect3" value="d">
D) Ciencias
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
en las páginas 50 - 54.
</p>

</div>

<div class="quiz-card">

<div class="quiz-question">
1. ¿Qué caracteriza a un texto discontinuo?
</div>

<label class="option-item">
<input type="radio" name="q1" value="a">
A) Usa información organizada visualmente.
</label>

<label class="option-item">
<input type="radio" name="q1" value="b">
B) Solo tiene párrafos largos.
</label>

<label class="option-item">
<input type="radio" name="q1" value="c">
C) Siempre cuenta historias.
</label>

<label class="option-item">
<input type="radio" name="q1" value="d">
D) No utiliza imágenes ni datos.
</label>

<button class="btn-verify" onclick="verifyQ1()">
Revisar respuesta
</button>

<div class="feedback" id="feedback-q1"></div>

</div>

<div class="quiz-card">

<div class="quiz-question">
2. ¿Cuál es un ejemplo de texto discontinuo?
</div>

<label class="option-item">
<input type="radio" name="q2" value="a">
A) Un ensayo.
</label>

<label class="option-item">
<input type="radio" name="q2" value="b">
B) Una novela.
</label>

<label class="option-item">
<input type="radio" name="q2" value="c">
C) Una gráfica.
</label>

<label class="option-item">
<input type="radio" name="q2" value="d">
D) Un cuento.
</label>

<button class="btn-verify" onclick="verifyQ2()">
Revisar respuesta
</button>

<div class="feedback" id="feedback-q2"></div>

</div>

<div class="quiz-card">

<div class="quiz-question">
3. ¿Qué ayuda a interpretar un texto discontinuo?
</div>

<label class="option-item">
<input type="radio" name="q3" value="a">
A) Ignorar los títulos.
</label>

<label class="option-item">
<input type="radio" name="q3" value="b">
B) Observar datos, símbolos y organización visual.
</label>

<label class="option-item">
<input type="radio" name="q3" value="c">
C) Leer únicamente imágenes.
</label>

<label class="option-item">
<input type="radio" name="q3" value="d">
D) Eliminar las tablas.
</label>

<button class="btn-verify" onclick="verifyQ3()">
Revisar respuesta
</button>

<div class="feedback" id="feedback-q3"></div>

</div>

<div class="quiz-card">

<div class="quiz-question">
4. ¿Qué tipo de información presenta una tabla?
</div>

<label class="option-item">
<input type="radio" name="q4" value="a">
A) Información organizada en filas y columnas.
</label>

<label class="option-item">
<input type="radio" name="q4" value="b">
B) Solo dibujos.
</label>

<label class="option-item">
<input type="radio" name="q4" value="c">
C) Poemas largos.
</label>

<label class="option-item">
<input type="radio" name="q4" value="d">
D) Historias ficticias.
</label>

<button class="btn-verify" onclick="verifyQ4()">
Revisar respuesta
</button>

<div class="feedback" id="feedback-q4"></div>

</div>

<div class="quiz-card">

<div class="quiz-question">
5. ¿Qué suelen evaluar CBTIS y EDIEMS en este tema?
</div>

<label class="option-item">
<input type="radio" name="q5" value="a">
A) Interpretación de información visual.
</label>

<label class="option-item">
<input type="radio" name="q5" value="b">
B) Escritura de poemas.
</label>

<label class="option-item">
<input type="radio" name="q5" value="c">
C) Dibujo artístico.
</label>

<label class="option-item">
<input type="radio" name="q5" value="d">
D) Memorización de fechas.
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
verifySimple("lect1","c","feedback-lect1","✅ Correcto. Marzo tuvo la mayor cantidad de ventas.");
}

function verifyLect2(){
verifySimple("lect2","c","feedback-lect2","✅ Correcto. Las tablas son textos discontinuos.");
}

function verifyLect3(){
verifySimple("lect3","d","feedback-lect3","✅ Correcto. A las 10:00 corresponde Ciencias.");
}

function verifyQ1(){
verifySimple("q1","a","feedback-q1","✅ Correcto. Los textos discontinuos organizan información visualmente.");
}

function verifyQ2(){
verifySimple("q2","c","feedback-q2","✅ Correcto. Una gráfica es un texto discontinuo.");
}

function verifyQ3(){
verifySimple("q3","b","feedback-q3","✅ Correcto. Deben analizarse datos y elementos visuales.");
}

function verifyQ4(){
verifySimple("q4","a","feedback-q4","✅ Correcto. Las tablas organizan información en filas y columnas.");
}

function verifyQ5(){
verifySimple("q5","a","feedback-q5","✅ Correcto. En el examen suelen evaluar interpretación visual.");
}
