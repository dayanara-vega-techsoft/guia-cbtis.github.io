function renderModos(){
return `
<div class="topic-shell">
  <div class="session-header">
    <h1>🧠 Modos discursivos</h1>
    <p>Tema 2 · Páginas 26 - 31</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">2.1 Teoría</button>
    <button class="tab-btn" id="btn-lecturas" onclick="switchTab('lecturas')">2.2 Lecturas</button>
    <button class="tab-btn" id="btn-evaluacion" onclick="switchTab('evaluacion')">2.3 Evaluación</button>
  </div>

  <div class="sub-tab-content active" id="teoria">
    <div class="subtopic-section">
      <span class="subtopic-header-tag">Concepto</span>
      <h2 class="section-h2">¿Qué son los modos discursivos?</h2>
      <p>Son formas de organizar y presentar la información dentro de un texto.</p>

      <div class="map-container">
        <div class="map-title">Modos discursivos principales</div>

        <div class="map-branches">
          <div class="map-branch">
            <div class="branch-title">📖 Definición</div>
            <div class="map-leaf">Explica qué es algo.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">📝 Descripción</div>
            <div class="map-leaf">Detalla características.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">⚖️ Comparación</div>
            <div class="map-leaf">Relaciona semejanzas y diferencias.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">📊 Enumeración</div>
            <div class="map-leaf">Presenta información en lista.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="sub-tab-content" id="lecturas">
    <div class="text-panel">
      <div class="text-title">Ejemplo de descripción</div>
      <div class="text-body">La biblioteca escolar es amplia, silenciosa y cuenta con cientos de libros organizados por categorías.</div>
    </div>

    <div class="text-panel">
      <div class="text-title">Ejemplo de comparación</div>
      <div class="text-body">El libro digital ocupa menos espacio; sin embargo, el libro impreso permite una lectura más tradicional.</div>
    </div>
  </div>

  <div class="sub-tab-content" id="evaluacion">
    <div class="quiz-card">
      <div class="quiz-question">¿Qué modo discursivo explica qué es algo?</div>

      <label class="option-item"><input type="radio" name="m1" value="a"> Descripción</label>
      <label class="option-item"><input type="radio" name="m1" value="b"> Definición</label>
      <label class="option-item"><input type="radio" name="m1" value="c"> Enumeración</label>

      <button class="btn-verify" onclick="verifyModo()">Verificar</button>
      <div class="feedback" id="feedback-modo"></div>
    </div>
  </div>
</div>`;
}

function verifyModo(){
 const s=document.querySelector('input[name="m1"]:checked');
 const f=document.getElementById("feedback-modo");

 if(!s){alert("Selecciona una opción.");return;}

 if(s.value==="b"){
   f.className="feedback correct";
   f.innerHTML="✅ Correcto. La definición explica qué es algo.";
 }else{
   f.className="feedback incorrect";
   f.innerHTML="❌ Revisa los tipos de modos discursivos.";
 }
}
