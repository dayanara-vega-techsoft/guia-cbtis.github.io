function renderDiscontinuos(){
return `
<div class="topic-shell">
  <div class="session-header">
    <h1>📈 Textos discontinuos</h1>
    <p>Tema 3 · Páginas 50 - 54</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">3.1 Teoría</button>
    <button class="tab-btn" id="btn-lecturas" onclick="switchTab('lecturas')">3.2 Lecturas</button>
    <button class="tab-btn" id="btn-evaluacion" onclick="switchTab('evaluacion')">3.3 Evaluación</button>
  </div>

  <div class="sub-tab-content active" id="teoria">
    <div class="subtopic-section">
      <h2 class="section-h2">¿Qué son los textos discontinuos?</h2>
      <p>Son textos que presentan información mediante gráficos, tablas, mapas o diagramas.</p>

      <div class="important-box">
        No se leen linealmente como un párrafo tradicional.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Tipos más comunes</h2>

      <div class="map-branches">
        <div class="map-branch">
          <div class="branch-title">📊 Gráficas</div>
          <div class="map-leaf">Representan datos visualmente.</div>
        </div>

        <div class="map-branch">
          <div class="branch-title">🗺️ Mapas</div>
          <div class="map-leaf">Ubican información espacial.</div>
        </div>

        <div class="map-branch">
          <div class="branch-title">📋 Tablas</div>
          <div class="map-leaf">Organizan datos en filas y columnas.</div>
        </div>
      </div>
    </div>
  </div>

  <div class="sub-tab-content" id="lecturas">
    <div class="text-panel">
      <div class="text-title">Ejemplo de tabla</div>
      <div class="text-body">
Año | Estudiantes aprobados
2022 | 120
2023 | 145
2024 | 170
      </div>
    </div>
  </div>

  <div class="sub-tab-content" id="evaluacion">
    <div class="quiz-card">
      <div class="quiz-question">¿Qué característica tienen los textos discontinuos?</div>

      <label class="option-item"><input type="radio" name="d1" value="a"> Se leen siempre en párrafos largos.</label>
      <label class="option-item"><input type="radio" name="d1" value="b"> Organizan información visualmente.</label>
      <label class="option-item"><input type="radio" name="d1" value="c"> Solo contienen opiniones.</label>

      <button class="btn-verify" onclick="verifyDiscontinuos()">Verificar</button>
      <div class="feedback" id="feedback-discontinuos"></div>
    </div>
  </div>
</div>`;
}

function verifyDiscontinuos(){
 const s=document.querySelector('input[name="d1"]:checked');
 const f=document.getElementById("feedback-discontinuos");

 if(!s){alert("Selecciona una opción.");return;}

 if(s.value==="b"){
   f.className="feedback correct";
   f.innerHTML="✅ Correcto. Los textos discontinuos organizan información visualmente.";
 }else{
   f.className="feedback incorrect";
   f.innerHTML="❌ Revisa la definición de textos discontinuos.";
 }
}
