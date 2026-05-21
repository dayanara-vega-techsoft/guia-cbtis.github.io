function renderFuentes(){
return `
<div class="topic-shell">
  <div class="session-header">
    <h1>🌐 Fuentes de información</h1>
    <p>Tema 3 · Páginas 43 - 49</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">3.1 Teoría</button>
    <button class="tab-btn" id="btn-lecturas" onclick="switchTab('lecturas')">3.2 Lecturas</button>
    <button class="tab-btn" id="btn-evaluacion" onclick="switchTab('evaluacion')">3.3 Evaluación</button>
  </div>

  <div class="sub-tab-content active" id="teoria">
    <div class="subtopic-section">
      <h2 class="section-h2">¿Qué son las fuentes de información?</h2>
      <p>Son recursos que proporcionan datos y conocimientos para investigar o aprender.</p>

      <div class="map-container">
        <div class="map-root">Fuentes de información</div>

        <div class="map-branches">
          <div class="map-branch">
            <div class="branch-title">📘 Primarias</div>
            <div class="map-leaf">Información original y directa.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">📚 Secundarias</div>
            <div class="map-leaf">Interpretan o analizan información.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🌐 Digitales</div>
            <div class="map-leaf">Sitios web, bases de datos y artículos.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">📰 Impresas</div>
            <div class="map-leaf">Libros, revistas y periódicos.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="sub-tab-content" id="lecturas">
    <div class="text-panel">
      <div class="text-title">Ejemplo</div>
      <div class="text-body">
Un artículo científico publicado por investigadores es una fuente primaria,
mientras que una enciclopedia que resume esa información es secundaria.
      </div>
    </div>
  </div>

  <div class="sub-tab-content" id="evaluacion">
    <div class="quiz-card">
      <div class="quiz-question">¿Cuál es una fuente primaria?</div>

      <label class="option-item"><input type="radio" name="f1" value="a"> Enciclopedia</label>
      <label class="option-item"><input type="radio" name="f1" value="b"> Artículo científico original</label>
      <label class="option-item"><input type="radio" name="f1" value="c"> Resumen escolar</label>

      <button class="btn-verify" onclick="verifyFuentes()">Verificar</button>
      <div class="feedback" id="feedback-fuentes"></div>
    </div>
  </div>
</div>`;
}

function verifyFuentes(){
 const s=document.querySelector('input[name="f1"]:checked');
 const f=document.getElementById("feedback-fuentes");

 if(!s){alert("Selecciona una opción.");return;}

 if(s.value==="b"){
   f.className="feedback correct";
   f.innerHTML="✅ Correcto. Un artículo científico original es una fuente primaria.";
 }else{
   f.className="feedback incorrect";
   f.innerHTML="❌ Revisa las características de las fuentes primarias.";
 }
}
