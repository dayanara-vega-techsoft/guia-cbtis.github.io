function renderDemocratizacion(){
return `
<div class="topic-shell">

  <div class="session-header">
    <h1>🗳️ Proceso de democratización en el país</h1>
    <p>Entorno Social · Páginas 157 - 165 · CBTIS Reforzado</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" onclick="switchSubTab('democratizacion','teoria', this)">
      1.1 Teoría
    </button>

    <button class="tab-btn" onclick="switchSubTab('democratizacion','practica', this)">
      1.2 Práctica
    </button>

    <button class="tab-btn" onclick="switchSubTab('democratizacion','evaluacion', this)">
      1.3 Evaluación
    </button>
  </div>

  <div id="democratizacion-teoria" class="sub-tab-content active">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">SISTEMA POLÍTICO ECONÓMICO</span>
      <h2 class="section-h2">Proceso de democratización en el país</h2>

      <p>
        La democratización es el proceso mediante el cual una sociedad fortalece la participación
        ciudadana, las elecciones libres, la libertad de expresión, la competencia política y el respeto
        a los derechos. No se trata solo de votar: también implica informarse, organizarse, opinar y exigir
        rendición de cuentas.
      </p>

      <p>
        Una democracia necesita ciudadanía activa. Si las personas solo votan, pero no se informan ni exigen
        resultados, la democracia se debilita. Por eso la participación ciudadana es clave para resolver
        problemas públicos.
      </p>

      <div class="important-box">
        🎯 Democracia = voto libre + derechos + participación + pluralidad + rendición de cuentas.
      </div>

      <div class="map-container">
        <div class="map-root">Elementos de la democracia</div>
        <div class="map-branches">
          <div class="map-branch">
            <div class="branch-title">🗳️ Voto</div>
            <div class="map-leaf">Permite elegir representantes.</div>
          </div>
          <div class="map-branch">
            <div class="branch-title">📢 Libertad de expresión</div>
            <div class="map-leaf">Permite opinar y criticar sin persecución.</div>
          </div>
          <div class="map-branch">
            <div class="branch-title">👥 Participación ciudadana</div>
            <div class="map-leaf">Organización, propuestas y vigilancia social.</div>
          </div>
          <div class="map-branch">
            <div class="branch-title">⚖️ Estado de derecho</div>
            <div class="map-leaf">Autoridades y ciudadanía deben respetar la ley.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Democracia vs autoritarismo</h2>
      <div class="text-panel">
        <div class="text-title">Comparación clave</div>
        <div class="text-body">Democracia:
- elecciones libres
- varias opiniones
- participación ciudadana
- derechos y libertades

Autoritarismo:
- decisiones impuestas
- poca participación
- control de opiniones
- poder concentrado</div>
      </div>
    </div>

  </div>

  <div id="democratizacion-practica" class="sub-tab-content">

    <div class="text-panel">
      <div class="text-title">Caso guiado</div>
      <div class="text-body">Un grupo de vecinos observa que una avenida necesita alumbrado público. Se organizan, solicitan apoyo al municipio y dan seguimiento a la respuesta.

Aunque no están en una elección, participan democráticamente porque buscan resolver un problema público.</div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Práctica de identificación</h2>
      <ul>
        <li>Si hay voto libre: participación electoral.</li>
        <li>Si la ciudadanía se organiza: participación ciudadana.</li>
        <li>Si se limita la opinión: rasgo autoritario.</li>
        <li>Si se exige información a autoridades: rendición de cuentas.</li>
      </ul>
    </div>

  </div>

  <div id="democratizacion-evaluacion" class="sub-tab-content">

    <div class="quiz-card">
      <div class="quiz-question">
        Una comunidad vota libremente por sus representantes. ¿Qué elemento democrático se observa?
      </div>

      <label class="option-item">
        <input type="radio" name="democratizacion-q1" value="a">
        Participación electoral
      </label>
      <label class="option-item">
        <input type="radio" name="democratizacion-q1" value="b">
        Proceso productivo
      </label>
      <label class="option-item">
        <input type="radio" name="democratizacion-q1" value="c">
        Norma social
      </label>
      <label class="option-item">
        <input type="radio" name="democratizacion-q1" value="d">
        Desigualdad tecnológica
      </label>

      <button class="btn-verify" onclick="verifyEntorno('democratizacion-q1','a','feedback-democratizacion-q1','El voto libre es parte fundamental de la democracia.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-democratizacion-q1"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">
        ¿Cuál situación se acerca más a un sistema autoritario?
      </div>

      <label class="option-item">
        <input type="radio" name="democratizacion-q2" value="a">
        Una sola persona decide y limita opiniones
      </label>
      <label class="option-item">
        <input type="radio" name="democratizacion-q2" value="b">
        Varias personas participan en elecciones
      </label>
      <label class="option-item">
        <input type="radio" name="democratizacion-q2" value="c">
        La ciudadanía exige cuentas
      </label>
      <label class="option-item">
        <input type="radio" name="democratizacion-q2" value="d">
        Existen opiniones distintas
      </label>

      <button class="btn-verify" onclick="verifyEntorno('democratizacion-q2','a','feedback-democratizacion-q2','El autoritarismo concentra poder y limita participación.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-democratizacion-q2"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">
        La democratización implica:
      </div>

      <label class="option-item">
        <input type="radio" name="democratizacion-q3" value="a">
        Fortalecer participación y derechos
      </label>
      <label class="option-item">
        <input type="radio" name="democratizacion-q3" value="b">
        Eliminar elecciones
      </label>
      <label class="option-item">
        <input type="radio" name="democratizacion-q3" value="c">
        Imponer una sola opinión
      </label>
      <label class="option-item">
        <input type="radio" name="democratizacion-q3" value="d">
        Reducir ciudadanía
      </label>

      <button class="btn-verify" onclick="verifyEntorno('democratizacion-q3','a','feedback-democratizacion-q3','Democratizar es ampliar participación, libertades e instituciones.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-democratizacion-q3"></div>
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

