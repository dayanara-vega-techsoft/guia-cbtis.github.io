function renderAnalisis(){
return `
<div class="topic-shell">
  <div class="session-header">
    <h1>🔍 Análisis e interpretación de diferentes textos</h1>
    <p>Tema 3 · Páginas 60 - 63</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">3.1 Teoría</button>
    <button class="tab-btn" id="btn-lecturas" onclick="switchTab('lecturas')">3.2 Lecturas</button>
    <button class="tab-btn" id="btn-evaluacion" onclick="switchTab('evaluacion')">3.3 Evaluación</button>
  </div>

  <div class="sub-tab-content active" id="teoria">
    <div class="subtopic-section">
      <h2 class="section-h2">¿Qué es analizar un texto?</h2>

      <p>
        Analizar un texto consiste en identificar sus ideas principales,
        propósito, estructura y significado.
      </p>

      <div class="important-box">
        Interpretar implica comprender el mensaje y relacionarlo con conocimientos previos.
      </div>
    </div>
  </div>

  <div class="sub-tab-content" id="lecturas">
    <div class="text-panel">
      <div class="text-title">Texto ejemplo</div>

      <div class="text-body">
La tecnología facilita la comunicación entre las personas;
sin embargo, también puede generar distracciones si no se utiliza correctamente.
      </div>
    </div>
  </div>

  <div class="sub-tab-content" id="evaluacion">
    <div class="quiz-card">
      <div class="quiz-question">¿Cuál es la idea principal del texto?</div>

      <label class="option-item"><input type="radio" name="an1" value="a"> La tecnología siempre es negativa.</label>
      <label class="option-item"><input type="radio" name="an1" value="b"> La tecnología tiene ventajas y desventajas.</label>
      <label class="option-item"><input type="radio" name="an1" value="c"> La tecnología no afecta la vida diaria.</label>

      <button class="btn-verify" onclick="verifyAnalisis()">Verificar</button>
      <div class="feedback" id="feedback-analisis"></div>
    </div>
  </div>
</div>`;
}

function verifyAnalisis(){
 const s=document.querySelector('input[name="an1"]:checked');
 const f=document.getElementById("feedback-analisis");

 if(!s){alert("Selecciona una opción.");return;}

 if(s.value==="b"){
   f.className="feedback correct";
   f.innerHTML="✅ Correcto. El texto presenta ventajas y desventajas.";
 }else{
   f.className="feedback incorrect";
   f.innerHTML="❌ Revisa el mensaje principal del texto.";
 }
}
