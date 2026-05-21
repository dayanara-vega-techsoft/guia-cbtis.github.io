function renderIdeas(){
return `
<div class="topic-shell">
  <div class="session-header">
    <h1>💡 Ideas principales e ideas secundarias</h1>
    <p>Tema 2 · Páginas 32 - 37</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">2.1 Teoría</button>
    <button class="tab-btn" id="btn-lecturas" onclick="switchTab('lecturas')">2.2 Lecturas</button>
    <button class="tab-btn" id="btn-evaluacion" onclick="switchTab('evaluacion')">2.3 Evaluación</button>
  </div>

  <div class="sub-tab-content active" id="teoria">
    <div class="subtopic-section">
      <h2 class="section-h2">Ideas principales</h2>
      <p>Expresan la información más importante del texto.</p>

      <div class="important-box">
        La idea principal responde: ¿de qué trata el texto?
      </div>

      <h2 class="section-h2">Ideas secundarias</h2>
      <p>Complementan o explican la idea principal con ejemplos y detalles.</p>
    </div>
  </div>

  <div class="sub-tab-content" id="lecturas">
    <div class="text-panel">
      <div class="text-title">Texto ejemplo</div>
      <div class="text-body">
La lectura diaria mejora el vocabulario y la comprensión. Además, ayuda a desarrollar la imaginación y fortalece la memoria.
      </div>
    </div>
  </div>

  <div class="sub-tab-content" id="evaluacion">
    <div class="quiz-card">
      <div class="quiz-question">¿Cuál es la idea principal?</div>

      <label class="option-item"><input type="radio" name="idea1" value="a"> La lectura ayuda a desarrollar la imaginación.</label>
      <label class="option-item"><input type="radio" name="idea1" value="b"> La lectura diaria mejora el vocabulario y la comprensión.</label>
      <label class="option-item"><input type="radio" name="idea1" value="c"> La lectura fortalece la memoria.</label>

      <button class="btn-verify" onclick="verifyIdeas()">Verificar</button>
      <div class="feedback" id="feedback-ideas"></div>
    </div>
  </div>
</div>`;
}

function verifyIdeas(){
 const s=document.querySelector('input[name="idea1"]:checked');
 const f=document.getElementById("feedback-ideas");

 if(!s){alert("Selecciona una opción.");return;}

 if(s.value==="b"){
   f.className="feedback correct";
   f.innerHTML="✅ Correcto. Esa es la idea central del texto.";
 }else{
   f.className="feedback incorrect";
   f.innerHTML="❌ Esa es una idea secundaria.";
 }
}
