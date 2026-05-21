function renderSintesis(){
return `
<div class="topic-shell">
  <div class="session-header">
    <h1>📝 Síntesis de información</h1>
    <p>Tema 2 · Páginas 38 - 42</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">2.1 Teoría</button>
    <button class="tab-btn" id="btn-lecturas" onclick="switchTab('lecturas')">2.2 Lecturas</button>
    <button class="tab-btn" id="btn-evaluacion" onclick="switchTab('evaluacion')">2.3 Evaluación</button>
  </div>

  <div class="sub-tab-content active" id="teoria">
    <div class="subtopic-section">
      <h2 class="section-h2">¿Qué es una síntesis?</h2>

      <p>
        La síntesis consiste en resumir la información más importante
        de un texto usando palabras propias.
      </p>

      <div class="important-box">
        Una buena síntesis conserva las ideas principales sin copiar todo el texto.
      </div>
    </div>
  </div>

  <div class="sub-tab-content" id="lecturas">
    <div class="text-panel">
      <div class="text-title">Texto base</div>

      <div class="text-body">
El reciclaje ayuda a disminuir la contaminación ambiental.
Además, permite reutilizar materiales y ahorrar recursos naturales.
      </div>
    </div>
  </div>

  <div class="sub-tab-content" id="evaluacion">
    <div class="quiz-card">
      <div class="quiz-question">Selecciona la mejor síntesis.</div>

      <label class="option-item"><input type="radio" name="sin1" value="a"> El reciclaje es importante porque reutiliza materiales y reduce contaminación.</label>
      <label class="option-item"><input type="radio" name="sin1" value="b"> El reciclaje tiene colores y botes.</label>
      <label class="option-item"><input type="radio" name="sin1" value="c"> El reciclaje existe desde hace años.</label>

      <button class="btn-verify" onclick="verifySintesis()">Verificar</button>
      <div class="feedback" id="feedback-sintesis"></div>
    </div>
  </div>
</div>`;
}

function verifySintesis(){
 const s=document.querySelector('input[name="sin1"]:checked');
 const f=document.getElementById("feedback-sintesis");

 if(!s){alert("Selecciona una opción.");return;}

 if(s.value==="a"){
   f.className="feedback correct";
   f.innerHTML="✅ Correcto. Resume las ideas principales.";
 }else{
   f.className="feedback incorrect";
   f.innerHTML="❌ Esa opción no sintetiza correctamente el texto.";
 }
}
