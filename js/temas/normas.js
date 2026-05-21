function renderNormas(){
return `
<div class="topic-shell">

  <div class="session-header">
    <h1>📜 Normas sociales y jurídicas</h1>
    <p>Entorno Social · Páginas 173 - 179 · CBTIS Reforzado</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" onclick="switchSubTab('normas','teoria', this)">
      1.1 Teoría
    </button>

    <button class="tab-btn" onclick="switchSubTab('normas','practica', this)">
      1.2 Práctica
    </button>

    <button class="tab-btn" onclick="switchSubTab('normas','evaluacion', this)">
      1.3 Evaluación
    </button>
  </div>

  <div id="normas-teoria" class="sub-tab-content active">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">SISTEMA POLÍTICO ECONÓMICO</span>
      <h2 class="section-h2">Normas sociales y jurídicas</h2>

      <p>
        Las normas existen porque la convivencia necesita reglas. Sin reglas habría conflictos constantes:
        nadie respetaría turnos, acuerdos, señales de tránsito, propiedad o derechos de los demás.
      </p>

      <p>
        Las normas sociales son costumbres o acuerdos de convivencia, como saludar, hacer fila o guardar
        silencio en ciertos lugares. Las normas jurídicas son leyes obligatorias; si se incumplen, puede
        haber sanciones oficiales.
      </p>

      <div class="important-box">
        🎯 Norma social = costumbre; norma jurídica = ley obligatoria con sanción.
      </div>

      <div class="map-container">
        <div class="map-root">Tipos de normas</div>
        <div class="map-branches">
          <div class="map-branch">
            <div class="branch-title">🤝 Normas sociales</div>
            <div class="map-leaf">Dependen de costumbres y convivencia.</div>
            <div class="map-leaf">Saludar, hacer fila, respetar turnos.</div>
          </div>
          <div class="map-branch">
            <div class="branch-title">⚖️ Normas jurídicas</div>
            <div class="map-leaf">Son leyes obligatorias.</div>
            <div class="map-leaf">No robar, respetar semáforos, pagar impuestos.</div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div id="normas-practica" class="sub-tab-content">

    <div class="subtopic-section">
      <h2 class="section-h2">Práctica: clasifica la norma</h2>

      <div class="text-panel">
        <div class="text-title">Casos</div>
        <div class="text-body">Hacer fila en una tienda:
→ Norma social.

No robar:
→ Norma jurídica.

Saludar al llegar:
→ Norma social.

Respetar el semáforo:
→ Norma jurídica.</div>
      </div>

      <ul>
        <li>Si es costumbre: social.</li>
        <li>Si está respaldada por ley: jurídica.</li>
        <li>Si hay multa, cárcel o sanción oficial: jurídica.</li>
        <li>Si solo hay desaprobación social: social.</li>
      </ul>
    </div>

  </div>

  <div id="normas-evaluacion" class="sub-tab-content">

    <div class="quiz-card">
      <div class="quiz-question">
        Hacer fila para entrar al transporte es principalmente una:
      </div>

      <label class="option-item">
        <input type="radio" name="normas-q1" value="a">
        Norma social
      </label>
      <label class="option-item">
        <input type="radio" name="normas-q1" value="b">
        Norma química
      </label>
      <label class="option-item">
        <input type="radio" name="normas-q1" value="c">
        Norma productiva
      </label>
      <label class="option-item">
        <input type="radio" name="normas-q1" value="d">
        Norma electoral
      </label>

      <button class="btn-verify" onclick="verifyEntorno('normas-q1','a','feedback-normas-q1','Hacer fila es una regla de convivencia social.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-normas-q1"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">
        No robar pertenece a una:
      </div>

      <label class="option-item">
        <input type="radio" name="normas-q2" value="a">
        Norma jurídica
      </label>
      <label class="option-item">
        <input type="radio" name="normas-q2" value="b">
        Norma social sin sanción legal
      </label>
      <label class="option-item">
        <input type="radio" name="normas-q2" value="c">
        Tradición familiar
      </label>
      <label class="option-item">
        <input type="radio" name="normas-q2" value="d">
        Regla deportiva
      </label>

      <button class="btn-verify" onclick="verifyEntorno('normas-q2','a','feedback-normas-q2','No robar está establecido por leyes y tiene sanción.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-normas-q2"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">
        ¿Cuál es la diferencia principal entre norma social y jurídica?
      </div>

      <label class="option-item">
        <input type="radio" name="normas-q3" value="a">
        La jurídica es obligatoria por ley
      </label>
      <label class="option-item">
        <input type="radio" name="normas-q3" value="b">
        La social siempre lleva cárcel
      </label>
      <label class="option-item">
        <input type="radio" name="normas-q3" value="c">
        La jurídica no tiene sanción
      </label>
      <label class="option-item">
        <input type="radio" name="normas-q3" value="d">
        La social la dicta un juez
      </label>

      <button class="btn-verify" onclick="verifyEntorno('normas-q3','a','feedback-normas-q3','Las normas jurídicas están respaldadas por leyes.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-normas-q3"></div>
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

