function renderArgumentativos(){
return `
<div class="topic-shell">

  <div class="session-header">
    <h1>⚔️ Textos argumentativos</h1>
    <p>Tema 3 · Páginas 55 - 59</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">3.1 Teoría</button>
    <button class="tab-btn" id="btn-lecturas" onclick="switchTab('lecturas')">3.2 Lecturas prácticas</button>
    <button class="tab-btn" id="btn-evaluacion" onclick="switchTab('evaluacion')">3.3 Taller de evaluación</button>
  </div>

  <div class="sub-tab-content active" id="teoria">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">🎯 Concepto general</span>
      <h2 class="section-h2">¿Qué es un texto argumentativo?</h2>

      <p>Un texto argumentativo busca convencer al lector sobre una idea, postura u opinión.</p>

      <p>Para lograrlo, el autor presenta razones, datos, ejemplos, experiencias o citas de expertos.</p>

      <div class="important-box">
        💡 Idea sencilla: argumentar es defender una idea con razones.
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">🧩 Estructura</span>
      <h2 class="section-h2">Partes de un texto argumentativo</h2>

      <div class="map-container">
        <div class="map-branches">

          <div class="map-branch">
            <div class="branch-title">💬 Tesis</div>
            <div class="map-leaf">Es la postura o idea principal que el autor defiende.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🧠 Argumentos</div>
            <div class="map-leaf">Son las razones que apoyan la tesis.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">✅ Conclusión</div>
            <div class="map-leaf">Cierra el texto y reafirma la postura del autor.</div>
          </div>

        </div>
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">⚔️ Tipos de argumentos</span>
      <h2 class="section-h2">Argumentos que aparecen en la guía</h2>

      <div class="map-container">
        <div class="map-branches">

          <div class="map-branch">
            <div class="branch-title">👨‍🏫 Autoridad</div>
            <div class="map-leaf">Usa opiniones de expertos u organizaciones especializadas.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">📊 Datos</div>
            <div class="map-leaf">Utiliza cifras, estudios o información comprobable.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🧠 Lógicos</div>
            <div class="map-leaf">Relacionan causas, efectos o razonamientos.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">💙 Afectivos</div>
            <div class="map-leaf">Buscan convencer apelando a emociones.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🙋 Experiencias personales</div>
            <div class="map-leaf">Usan vivencias para apoyar una postura.</div>
          </div>

        </div>
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">📰 Artículos de opinión</span>
      <h2 class="section-h2">¿Qué relación tienen?</h2>

      <p>Los artículos de opinión tienen estructura argumentativa: presentan una tesis, desarrollan argumentos y terminan con una conclusión.</p>

      <ul>
        <li>✔️ Sustentan una postura.</li>
        <li>✔️ Buscan persuadir al lector.</li>
        <li>✔️ Pueden incluir datos o expertos.</li>
        <li>✔️ Defienden una idea sobre un tema real.</li>
      </ul>

      <div class="important-box">
        🎯 Tip EDIEMS: primero busca qué postura defiende el autor; después identifica con qué razones la apoya.
      </div>
    </div>

  </div>

  <div class="sub-tab-content" id="lecturas">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">📖 Lectura práctica 1</span>
      <h2 class="section-h2">Crisis hídrica</h2>

      <div class="text-panel">
        <div class="text-title">Texto adaptado</div>
        <div class="text-body">
Expertos señalan que el Valle de México necesita inversión urgente para enfrentar la crisis del agua. Argumentan que, si no se mejora la infraestructura, millones de personas podrían tener problemas de abastecimiento en los próximos años.
        </div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">¿Cuál es la postura principal del texto?</div>

        <label class="option-item"><input type="radio" name="arglect1" value="a"> A) Que el agua no es importante.</label>
        <label class="option-item"><input type="radio" name="arglect1" value="b"> B) Que se necesita inversión para enfrentar la crisis del agua.</label>
        <label class="option-item"><input type="radio" name="arglect1" value="c"> C) Que no existen problemas ambientales.</label>
        <label class="option-item"><input type="radio" name="arglect1" value="d"> D) Que el texto es narrativo.</label>

        <button class="btn-verify" onclick="verifyArgLect1()">Revisar respuesta</button>
        <div class="feedback" id="feedback-arglect1"></div>
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">📖 Lectura práctica 2</span>
      <h2 class="section-h2">Uso del celular en niños</h2>

      <div class="text-panel">
        <div class="text-title">Texto adaptado</div>
        <div class="text-body">
Algunos estudios indican que el uso del celular puede tener menos efectos negativos cuando los niños lo utilizan con moderación y acompañamiento de adultos.
        </div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">¿Qué tipo de argumento se usa al mencionar estudios?</div>

        <label class="option-item"><input type="radio" name="arglect2" value="a"> A) Argumento basado en datos o investigación.</label>
        <label class="option-item"><input type="radio" name="arglect2" value="b"> B) Ironía.</label>
        <label class="option-item"><input type="radio" name="arglect2" value="c"> C) Narración fantástica.</label>
        <label class="option-item"><input type="radio" name="arglect2" value="d"> D) Descripción física.</label>

        <button class="btn-verify" onclick="verifyArgLect2()">Revisar respuesta</button>
        <div class="feedback" id="feedback-arglect2"></div>
      </div>
    </div>

  </div>

  <div class="sub-tab-content" id="evaluacion">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">📝 Taller CBTIS / EDIEMS</span>
      <h2 class="section-h2">Evaluación práctica</h2>
      <p>Responde las preguntas basadas en las páginas 55 - 59.</p>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">1. ¿Qué busca principalmente un texto argumentativo?</div>
      <label class="option-item"><input type="radio" name="argq1" value="a"> A) Convencer o defender una idea.</label>
      <label class="option-item"><input type="radio" name="argq1" value="b"> B) Contar una historia ficticia.</label>
      <label class="option-item"><input type="radio" name="argq1" value="c"> C) Presentar solo personajes.</label>
      <label class="option-item"><input type="radio" name="argq1" value="d"> D) Dar instrucciones de cocina.</label>
      <button class="btn-verify" onclick="verifyArgQ1()">Revisar respuesta</button>
      <div class="feedback" id="feedback-argq1"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">2. ¿Qué es la tesis?</div>
      <label class="option-item"><input type="radio" name="argq2" value="a"> A) La postura principal del autor.</label>
      <label class="option-item"><input type="radio" name="argq2" value="b"> B) Una imagen decorativa.</label>
      <label class="option-item"><input type="radio" name="argq2" value="c"> C) El final de un cuento.</label>
      <label class="option-item"><input type="radio" name="argq2" value="d"> D) Una lista de personajes.</label>
      <button class="btn-verify" onclick="verifyArgQ2()">Revisar respuesta</button>
      <div class="feedback" id="feedback-argq2"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">3. ¿Qué función tienen los argumentos?</div>
      <label class="option-item"><input type="radio" name="argq3" value="a"> A) Apoyar o justificar la tesis.</label>
      <label class="option-item"><input type="radio" name="argq3" value="b"> B) Cambiar el tema.</label>
      <label class="option-item"><input type="radio" name="argq3" value="c"> C) Decorar el texto.</label>
      <label class="option-item"><input type="radio" name="argq3" value="d"> D) Ocultar la opinión.</label>
      <button class="btn-verify" onclick="verifyArgQ3()">Revisar respuesta</button>
      <div class="feedback" id="feedback-argq3"></div>
    </div>

  </div>

</div>
`;
}

window.renderArgumentativos = renderArgumentativos;
window.renderTextosArgumentativos = renderArgumentativos;

function verifyArgSimple(name, correct, feedbackId, message){
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  const feedback = document.getElementById(feedbackId);

  if(!selected){
    alert("Selecciona una opción.");
    return;
  }

  if(selected.value === correct){
    feedback.className = "feedback correct";
    feedback.innerHTML = message;
  }else{
    feedback.className = "feedback incorrect";
    feedback.innerHTML = "❌ Respuesta incorrecta. Revisa nuevamente la teoría.";
  }
}

function verifyArgLect1(){ verifyArgSimple("arglect1","b","feedback-arglect1","✅ Correcto. La postura es invertir para enfrentar la crisis hídrica."); }
function verifyArgLect2(){ verifyArgSimple("arglect2","a","feedback-arglect2","✅ Correcto. Se apoya en estudios o investigación."); }

function verifyArgQ1(){ verifyArgSimple("argq1","a","feedback-argq1","✅ Correcto. Busca convencer o defender una postura."); }
function verifyArgQ2(){ verifyArgSimple("argq2","a","feedback-argq2","✅ Correcto. La tesis es la postura principal."); }
function verifyArgQ3(){ verifyArgSimple("argq3","a","feedback-argq3","✅ Correcto. Los argumentos apoyan la tesis."); }

window.verifyArgLect1 = verifyArgLect1;
window.verifyArgLect2 = verifyArgLect2;
window.verifyArgQ1 = verifyArgQ1;
window.verifyArgQ2 = verifyArgQ2;
window.verifyArgQ3 = verifyArgQ3;
