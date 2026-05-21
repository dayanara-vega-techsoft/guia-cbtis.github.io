function renderMezclas(){
return `
<div class="topic-shell">

<div class="session-header">
<h1>🧪 Mezclas y sustancias puras</h1>
<p>Ciencias Naturales y Experimentales · CBTIS Reforzado</p>
</div>

<div class="nav-tabs">
<button class="tab-btn active" onclick="switchSubTab('mezclas','teoria', this)">1.1 Teoría</button>
<button class="tab-btn" onclick="switchSubTab('mezclas','practica', this)">1.2 Práctica</button>
<button class="tab-btn" onclick="switchSubTab('mezclas','evaluacion', this)">1.3 Evaluación</button>
</div>

<div id="mezclas-teoria" class="sub-tab-content active">

<div class="subtopic-section">
<h2 class="section-h2">¿Qué son las sustancias puras?</h2>

<p>
Una sustancia pura es un tipo de materia que tiene composición fija y propiedades definidas.
Siempre está formada por los mismos componentes.
</p>

<div class="important-box">
🎯 Una sustancia pura mantiene la misma composición.
</div>

<div class="map-container">
<div class="map-root">Sustancias puras</div>

<div class="map-branches">

<div class="map-branch">
<div class="branch-title">⚛️ Elementos</div>
<div class="map-leaf">Formados por un solo tipo de átomo.</div>
<div class="map-leaf">Ejemplos: oro, hierro, oxígeno.</div>
</div>

<div class="map-branch">
<div class="branch-title">🧬 Compuestos</div>
<div class="map-leaf">Formados por varios elementos unidos químicamente.</div>
<div class="map-leaf">Ejemplos: agua y sal.</div>
</div>

</div>
</div>
</div>

<div class="subtopic-section">

<h2 class="section-h2">¿Qué es una mezcla?</h2>

<p>
Una mezcla se forma cuando dos o más sustancias se unen sin reaccionar químicamente.
Cada componente conserva sus propiedades.
</p>

<div class="text-panel">
<div class="text-title">Ejemplo guiado</div>
<div class="text-body">
Cuando mezclas agua con azúcar:
- el azúcar sigue siendo azúcar
- el agua sigue siendo agua
- no se forma una sustancia nueva
</div>
</div>

</div>

<div class="subtopic-section">

<h2 class="section-h2">Tipos de mezclas</h2>

<div class="map-container">
<div class="map-root">Mezclas</div>

<div class="map-branches">

<div class="map-branch">
<div class="branch-title">🧃 Homogéneas</div>
<div class="map-leaf">No se distinguen componentes.</div>
<div class="map-leaf">Ejemplos: aire, agua con sal.</div>
</div>

<div class="map-branch">
<div class="branch-title">🥗 Heterogéneas</div>
<div class="map-leaf">Sí se distinguen componentes.</div>
<div class="map-leaf">Ejemplos: ensalada, agua y aceite.</div>
</div>

</div>
</div>

<div class="important-box">
🔎 Si puedes ver partes distintas, la mezcla probablemente es heterogénea.
</div>

</div>

<div class="subtopic-section">

<h2 class="section-h2">Métodos de separación</h2>

<ul>
<li>Filtración → separa sólidos y líquidos.</li>
<li>Evaporación → separa sólidos disueltos.</li>
<li>Imantación → usa imanes.</li>
<li>Decantación → separa líquidos de distinta densidad.</li>
</ul>

</div>

</div>

<div id="mezclas-practica" class="sub-tab-content">

<div class="subtopic-section">

<h2 class="section-h2">Práctica guiada</h2>

<div class="text-panel">
<div class="text-title">Caso 1</div>
<div class="text-body">
Agua y aceite forman capas distintas.
¿Qué tipo de mezcla es?
</div>
</div>

<div class="important-box">
Respuesta esperada:
mezcla heterogénea.
</div>

</div>

<div class="subtopic-section">

<div class="text-panel">
<div class="text-title">Caso 2</div>
<div class="text-body">
El aire contiene varios gases.
¿Es homogénea o heterogénea?
</div>
</div>

<div class="important-box">
Respuesta esperada:
homogénea.
</div>

</div>

<div class="subtopic-section">

<h2 class="section-h2">Relaciona mezcla y método</h2>

<div class="text-panel">
<div class="text-body">
Arena y agua → filtración

Agua con sal → evaporación

Hierro y arena → imantación

Agua y aceite → decantación
</div>
</div>

</div>

<div class="subtopic-section">

<h2 class="section-h2">Mini práctica CBTIS</h2>

<div class="quiz-card">
<div class="quiz-question">¿Qué tipo de mezcla es una ensalada?</div>
<div class="text-body">Respuesta: heterogénea.</div>
</div>

<div class="quiz-card">
<div class="quiz-question">¿Qué método usarías para separar agua con sal?</div>
<div class="text-body">Respuesta: evaporación.</div>
</div>

<div class="quiz-card">
<div class="quiz-question">¿Por qué el aire es homogéneo?</div>
<div class="text-body">Porque no se distinguen sus componentes.</div>
</div>

</div>

</div>

<div id="mezclas-evaluacion" class="sub-tab-content">

<div class="quiz-card">
<div class="quiz-question">1. ¿Qué caracteriza a una sustancia pura?</div>
<label class="option-item"><input type="radio">Composición fija</label>
<label class="option-item"><input type="radio">Varias fases visibles</label>
<label class="option-item"><input type="radio">Muchos componentes visibles</label>
<label class="option-item"><input type="radio">Color variable</label>
</div>

<div class="quiz-card">
<div class="quiz-question">2. ¿Cuál es mezcla homogénea?</div>
<label class="option-item"><input type="radio">Agua con sal</label>
<label class="option-item"><input type="radio">Ensalada</label>
<label class="option-item"><input type="radio">Agua y aceite</label>
<label class="option-item"><input type="radio">Arena y piedras</label>
</div>

<div class="quiz-card">
<div class="quiz-question">3. ¿Cuál es heterogénea?</div>
<label class="option-item"><input type="radio">Ensalada</label>
<label class="option-item"><input type="radio">Aire</label>
<label class="option-item"><input type="radio">Vinagre</label>
<label class="option-item"><input type="radio">Refresco</label>
</div>

<div class="quiz-card">
<div class="quiz-question">4. ¿Qué método separa agua y aceite?</div>
<label class="option-item"><input type="radio">Decantación</label>
<label class="option-item"><input type="radio">Imantación</label>
<label class="option-item"><input type="radio">Filtración</label>
<label class="option-item"><input type="radio">Trituración</label>
</div>

<div class="quiz-card">
<div class="quiz-question">5. ¿Qué método usarías para separar hierro y arena?</div>
<label class="option-item"><input type="radio">Imantación</label>
<label class="option-item"><input type="radio">Evaporación</label>
<label class="option-item"><input type="radio">Decantación</label>
<label class="option-item"><input type="radio">Filtración</label>
</div>

<div class="quiz-card">
<div class="quiz-question">6. El aire es mezcla homogénea porque:</div>
<label class="option-item"><input type="radio">No se distinguen componentes</label>
<label class="option-item"><input type="radio">Tiene partes sólidas</label>
<label class="option-item"><input type="radio">Produce sustancias nuevas</label>
<label class="option-item"><input type="radio">Cambia de color</label>
</div>

<div class="quiz-card">
<div class="quiz-question">7. ¿Qué método usarías para separar agua con sal?</div>
<label class="option-item"><input type="radio">Evaporación</label>
<label class="option-item"><input type="radio">Imantación</label>
<label class="option-item"><input type="radio">Filtración</label>
<label class="option-item"><input type="radio">Decantación</label>
</div>

</div>

</div>
`;
}
