function renderArgumentativos(){
return `
<div class="topic-shell">
  <div class="session-header">
    <h1>⚔️ Textos argumentativos</h1>
    <p>Tema 3 · Páginas 55 - 59</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">3.1 Teoría</button>
    <button class="tab-btn" id="btn-lecturas" onclick="switchTab('lecturas')">3.2 Lecturas</button>
    <button class="tab-btn" id="btn-evaluacion" onclick="switchTab('evaluacion')">3.3 Evaluación</button>
  </div>

  <div class="sub-tab-content active" id="teoria">
    <div class="subtopic-section">
      <h2 class="section-h2">¿Qué son los textos argumentativos?</h2>
      <p>Son textos que buscan convencer al lector mediante argumentos y opiniones fundamentadas.</p>

      <div class="important-box">
        Presentan una tesis, argumentos y una conclusión.
      </div>
    </div>
  </div>

  <div class="sub-tab-content" id="lecturas">
    <div class="text-panel">
      <div class="text-title">Ejemplo</div>
      <div class="text-body">
El uso de bicicletas en la ciudad debería aumentar porque reduce la contaminación,
mejora la salud y disminuye el tráfico.
      </div>
    </div>
  </div>

  <div class="sub-tab-content" id="evaluacion">
    <div class="quiz-card">
      <div class="quiz-question">¿Cuál es el propósito principal de un texto argumentativo?</div>

      <label class="option-item"><input type="radio" name="a1" value="a"> Narrar una historia</label>
      <label class="option-item"><input type="radio" name="a1" value="b"> Convencer al lector</label>
      <label class="option-item"><input type="radio" name="a1" value="c"> Describir lugares</label>

      <button class="btn-verify" onclick="verifyArgumentativos()">Verificar</button>
      <div class="feedback" id="feedback-argumentativos"></div>
    </div>
  </div>
</div>`;
}

function verifyArgumentativos(){
 const s=document.querySelector('input[name="a1"]:checked');
 const f=document.getElementById("feedback-argumentativos");

 if(!s){alert("Selecciona una opción.");return;}

 if(s.value==="b"){
   f.className="feedback correct";
   f.innerHTML="✅ Correcto. Los textos argumentativos buscan persuadir.";
 }else{
   f.className="feedback incorrect";
   f.innerHTML="❌ Revisa el propósito de este tipo de textos.";
 }
}
