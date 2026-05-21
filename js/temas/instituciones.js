function renderInstituciones(){
return `
<div class="topic-shell">

  <div class="session-header">
    <h1>🏛️ Instituciones del Estado mexicano</h1>
    <p>Entorno Social · Páginas 166 - 172 · CBTIS Reforzado</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" onclick="switchSubTab('instituciones','teoria', this)">
      1.1 Teoría
    </button>

    <button class="tab-btn" onclick="switchSubTab('instituciones','practica', this)">
      1.2 Práctica
    </button>

    <button class="tab-btn" onclick="switchSubTab('instituciones','evaluacion', this)">
      1.3 Evaluación
    </button>
  </div>

  <div id="instituciones-teoria" class="sub-tab-content active">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">SISTEMA POLÍTICO ECONÓMICO</span>
      <h2 class="section-h2">Instituciones del Estado mexicano</h2>

      <p>
        Las instituciones del Estado mexicano son organismos que permiten organizar la vida pública,
        aplicar leyes, administrar recursos, proteger derechos y resolver conflictos. Sin instituciones,
        las decisiones dependerían de intereses personales y no de reglas comunes.
      </p>

      <p>
        Una idea central es la división de poderes. El poder no debe concentrarse en una sola persona
        o grupo, por eso se divide en Ejecutivo, Legislativo y Judicial. Cada poder tiene funciones
        distintas y debe equilibrarse con los demás.
      </p>

      <div class="important-box">
        🎯 Ejecutivo administra, Legislativo crea leyes, Judicial imparte justicia.
      </div>

      <div class="map-container">
        <div class="map-root">Poderes del Estado mexicano</div>
        <div class="map-branches">
          <div class="map-branch">
            <div class="branch-title">🏛️ Ejecutivo</div>
            <div class="map-leaf">Gobierna y administra recursos públicos.</div>
            <div class="map-leaf">Presidente, gobernadores, presidentes municipales.</div>
          </div>
          <div class="map-branch">
            <div class="branch-title">📜 Legislativo</div>
            <div class="map-leaf">Elabora, discute y aprueba leyes.</div>
            <div class="map-leaf">Diputados y senadores.</div>
          </div>
          <div class="map-branch">
            <div class="branch-title">⚖️ Judicial</div>
            <div class="map-leaf">Interpreta leyes y resuelve conflictos.</div>
            <div class="map-leaf">Jueces, tribunales, Suprema Corte.</div>
          </div>
          <div class="map-branch">
            <div class="branch-title">👥 Ciudadanía</div>
            <div class="map-leaf">Participa, exige derechos y cumple obligaciones.</div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div id="instituciones-practica" class="sub-tab-content">

    <div class="subtopic-section">
      <h2 class="section-h2">Práctica: ¿qué poder interviene?</h2>

      <div class="text-panel">
        <div class="text-title">Casos rápidos</div>
        <div class="text-body">Si se necesita aprobar una nueva ley:
→ Poder Legislativo.

Si se administra el presupuesto público:
→ Poder Ejecutivo.

Si se resuelve un conflicto legal:
→ Poder Judicial.</div>
      </div>

      <ul>
        <li>Crear leyes = Legislativo.</li>
        <li>Gobernar y administrar = Ejecutivo.</li>
        <li>Juzgar y resolver conflictos = Judicial.</li>
      </ul>
    </div>

  </div>

  <div id="instituciones-evaluacion" class="sub-tab-content">

    <div class="quiz-card">
      <div class="quiz-question">
        ¿Qué poder se encarga de elaborar y aprobar leyes?
      </div>

      <label class="option-item">
        <input type="radio" name="instituciones-q1" value="a">
        Legislativo
      </label>
      <label class="option-item">
        <input type="radio" name="instituciones-q1" value="b">
        Judicial
      </label>
      <label class="option-item">
        <input type="radio" name="instituciones-q1" value="c">
        Ejecutivo
      </label>
      <label class="option-item">
        <input type="radio" name="instituciones-q1" value="d">
        Productivo
      </label>

      <button class="btn-verify" onclick="verifyEntorno('instituciones-q1','a','feedback-instituciones-q1','El Poder Legislativo crea y aprueba leyes.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-instituciones-q1"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">
        Si una persona considera que se violaron sus derechos y acude a tribunales, ¿qué poder interviene?
      </div>

      <label class="option-item">
        <input type="radio" name="instituciones-q2" value="a">
        Judicial
      </label>
      <label class="option-item">
        <input type="radio" name="instituciones-q2" value="b">
        Ejecutivo
      </label>
      <label class="option-item">
        <input type="radio" name="instituciones-q2" value="c">
        Legislativo
      </label>
      <label class="option-item">
        <input type="radio" name="instituciones-q2" value="d">
        Económico
      </label>

      <button class="btn-verify" onclick="verifyEntorno('instituciones-q2','a','feedback-instituciones-q2','El Judicial resuelve conflictos legales.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-instituciones-q2"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">
        ¿Por qué es importante dividir el poder del Estado?
      </div>

      <label class="option-item">
        <input type="radio" name="instituciones-q3" value="a">
        Para evitar concentración y abusos
      </label>
      <label class="option-item">
        <input type="radio" name="instituciones-q3" value="b">
        Para eliminar leyes
      </label>
      <label class="option-item">
        <input type="radio" name="instituciones-q3" value="c">
        Para impedir elecciones
      </label>
      <label class="option-item">
        <input type="radio" name="instituciones-q3" value="d">
        Para reducir derechos
      </label>

      <button class="btn-verify" onclick="verifyEntorno('instituciones-q3','a','feedback-instituciones-q3','La división de poderes genera equilibrio institucional.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-instituciones-q3"></div>
    </div>

  </div>

</div>
`;
}


function verifyEntorno(name, correct, feedbackId, explanation){
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  const feedback = document.getElementById(feedbackId);

  if(!selected){
    alert("Selecciona una respuesta.");
    return;
  }

  if(selected.value === correct){
    feedback.className = "feedback correct";
    feedback.innerHTML = "✅ Correcto. " + explanation;
  }else{
    feedback.className = "feedback incorrect";
    feedback.innerHTML = "❌ Revisa el razonamiento. " + explanation;
  }
}

