
function renderOndas(){
return `
<div class="topic-shell">

<div class="session-header">
<h1>📡 Ondas electromagnéticas</h1>
<p>Ciencias Naturales y Experimentales · CBTIS · Páginas 224 - 232</p>
</div>

<div class="nav-tabs">
<button class="tab-btn active" onclick="switchSubTab('ondas','teoria', this)">1.1 Teoría</button>
<button class="tab-btn" onclick="switchSubTab('ondas','practica', this)">1.2 Práctica</button>
<button class="tab-btn" onclick="switchSubTab('ondas','evaluacion', this)">1.3 Evaluación</button>
</div>

<div id="ondas-teoria" class="sub-tab-content active">

<div class="subtopic-section">
<span class="subtopic-header-tag">MATERIA, ENERGÍA E INTERACCIONES</span>

<h2 class="section-h2">¿Qué son las ondas electromagnéticas?</h2>

<p>
Las ondas electromagnéticas son formas de energía que viajan por el espacio.
Gracias a ellas funcionan los teléfonos celulares, el internet, la televisión y la radio.
</p>

<p>
Una característica muy importante es que pueden viajar incluso en el vacío.
Por ejemplo, la luz del Sol llega a la Tierra atravesando el espacio.
</p>

<div class="important-box">
🎯 Idea CBTIS:
Las ondas electromagnéticas transportan energía.
</div>

</div>

<div class="subtopic-section">

<h2 class="section-h2">Características principales</h2>

<ul>
<li>Transportan energía.</li>
<li>Viajan a gran velocidad.</li>
<li>Pueden viajar en el vacío.</li>
<li>Tienen frecuencia y longitud de onda.</li>
</ul>

<div class="text-panel">
<div class="text-title">Ejemplo cotidiano</div>
<div class="text-body">
Cuando usas WiFi o un celular, las señales se transmiten mediante ondas electromagnéticas.
</div>
</div>

</div>

<div class="subtopic-section">

<h2 class="section-h2">Espectro electromagnético</h2>

<div class="map-container">

<div class="map-root">Espectro electromagnético</div>

<div class="map-branches">

<div class="map-branch">
<div class="branch-title">📻 Ondas de radio</div>
<div class="map-leaf">Comunicación.</div>
</div>

<div class="map-branch">
<div class="branch-title">📶 Microondas</div>
<div class="map-leaf">WiFi y hornos.</div>
</div>

<div class="map-branch">
<div class="branch-title">💡 Luz visible</div>
<div class="map-leaf">Permite ver objetos.</div>
</div>

<div class="map-branch">
<div class="branch-title">☀️ Ultravioleta</div>
<div class="map-leaf">Puede afectar la piel.</div>
</div>

<div class="map-branch">
<div class="branch-title">🩻 Rayos X</div>
<div class="map-leaf">Radiografías médicas.</div>
</div>

<div class="map-branch">
<div class="branch-title">☢️ Rayos gamma</div>
<div class="map-leaf">Gran cantidad de energía.</div>
</div>

</div>

</div>

</div>

<div class="subtopic-section">

<h2 class="section-h2">Frecuencia y energía</h2>

<p>
La frecuencia indica cuántas veces vibra una onda.
Mientras mayor sea la frecuencia, mayor será la energía.
</p>

<div class="important-box">
🔎 Los rayos gamma tienen mucha frecuencia y mucha energía.
</div>

</div>

<div class="subtopic-section">

<h2 class="section-h2">Usos cotidianos</h2>

<ul>
<li>Radio y televisión.</li>
<li>Telefonía celular.</li>
<li>Internet y WiFi.</li>
<li>Radiografías.</li>
<li>Hornos de microondas.</li>
</ul>

</div>

</div>

<div id="ondas-practica" class="sub-tab-content">

<div class="subtopic-section">

<span class="subtopic-header-tag">PRÁCTICA GUIADA</span>

<h2 class="section-h2">Práctica 1</h2>

<div class="text-panel">
<div class="text-title">Caso</div>
<div class="text-body">
Un teléfono celular transmite señales inalámbricas.
¿Qué utiliza para hacerlo?
</div>
</div>

<div class="important-box">
✅ Respuesta esperada:
ondas electromagnéticas.
</div>

</div>

<div class="subtopic-section">

<h2 class="section-h2">Práctica 2</h2>

<div class="text-panel">
<div class="text-title">Caso</div>
<div class="text-body">
En un hospital realizan radiografías.
¿Qué tipo de onda utilizan?
</div>
</div>

<div class="important-box">
✅ Respuesta esperada:
rayos X.
</div>

</div>

<div class="subtopic-section">

<h2 class="section-h2">Práctica 3</h2>

<div class="text-panel">
<div class="text-title">Caso</div>
<div class="text-body">
¿Qué tipo de onda tiene mayor energía:
ondas de radio o rayos gamma?
</div>
</div>

<div class="important-box">
✅ Respuesta esperada:
rayos gamma.
</div>

</div>

<div class="subtopic-section">

<h2 class="section-h2">Tabla mental CBTIS</h2>

<div class="text-panel">
<div class="text-body">

Radio → comunicación

Microondas → WiFi y cocina

Luz visible → visión

Rayos X → medicina

Rayos gamma → alta energía

</div>
</div>

</div>

<div class="subtopic-section">

<h2 class="section-h2">Mini práctica CBTIS</h2>

<div class="quiz-card">
<div class="quiz-question">¿Qué onda permite ver objetos?</div>
<div class="text-body">Respuesta: luz visible.</div>
</div>

<div class="quiz-card">
<div class="quiz-question">¿Qué ondas usan los hornos de microondas?</div>
<div class="text-body">Respuesta: microondas.</div>
</div>

<div class="quiz-card">
<div class="quiz-question">¿Qué ondas tienen mayor energía?</div>
<div class="text-body">Respuesta: rayos gamma.</div>
</div>

</div>

</div>

<div id="ondas-evaluacion" class="sub-tab-content">

<div class="quiz-card">
<div class="quiz-question">1. ¿Qué transportan las ondas electromagnéticas?</div>
<label class="option-item"><input type="radio" name="ondas-q1">Energía</label>
<label class="option-item"><input type="radio" name="ondas-q1">Agua</label>
<label class="option-item"><input type="radio" name="ondas-q1">Arena</label>
<label class="option-item"><input type="radio" name="ondas-q1">Oxígeno</label>
</div>

<div class="quiz-card">
<div class="quiz-question">2. ¿Qué ondas permiten escuchar radio?</div>
<label class="option-item"><input type="radio" name="ondas-q2">Ondas de radio</label>
<label class="option-item"><input type="radio" name="ondas-q2">Rayos X</label>
<label class="option-item"><input type="radio" name="ondas-q2">Rayos gamma</label>
<label class="option-item"><input type="radio" name="ondas-q2">Ultrasonido</label>
</div>

<div class="quiz-card">
<div class="quiz-question">3. ¿Qué ondas usan los hornos de microondas?</div>
<label class="option-item"><input type="radio" name="ondas-q3">Microondas</label>
<label class="option-item"><input type="radio" name="ondas-q3">Luz visible</label>
<label class="option-item"><input type="radio" name="ondas-q3">Rayos X</label>
<label class="option-item"><input type="radio" name="ondas-q3">Ondas sísmicas</label>
</div>

<div class="quiz-card">
<div class="quiz-question">4. ¿Qué tipo de onda permite ver objetos?</div>
<label class="option-item"><input type="radio" name="ondas-q4">Luz visible</label>
<label class="option-item"><input type="radio" name="ondas-q4">Rayos gamma</label>
<label class="option-item"><input type="radio" name="ondas-q4">Ondas de radio</label>
<label class="option-item"><input type="radio" name="ondas-q4">Microondas</label>
</div>

<div class="quiz-card">
<div class="quiz-question">5. ¿Qué ondas se usan en radiografías?</div>
<label class="option-item"><input type="radio" name="ondas-q5">Rayos X</label>
<label class="option-item"><input type="radio" name="ondas-q5">Microondas</label>
<label class="option-item"><input type="radio" name="ondas-q5">Luz visible</label>
<label class="option-item"><input type="radio" name="ondas-q5">Ondas sonoras</label>
</div>

<div class="quiz-card">
<div class="quiz-question">6. ¿Qué ondas tienen mayor energía?</div>
<label class="option-item"><input type="radio" name="ondas-q6">Rayos gamma</label>
<label class="option-item"><input type="radio" name="ondas-q6">Ondas de radio</label>
<label class="option-item"><input type="radio" name="ondas-q6">Luz visible</label>
<label class="option-item"><input type="radio" name="ondas-q6">Microondas</label>
</div>

<div class="quiz-card">
<div class="quiz-question">7. Las ondas electromagnéticas pueden viajar:</div>
<label class="option-item"><input type="radio" name="ondas-q7">En el vacío</label>
<label class="option-item"><input type="radio" name="ondas-q7">Solo en agua</label>
<label class="option-item"><input type="radio" name="ondas-q7">Solo en sólidos</label>
<label class="option-item"><input type="radio" name="ondas-q7">Solo en aire</label>
</div>

</div>

</div>
`;
}
