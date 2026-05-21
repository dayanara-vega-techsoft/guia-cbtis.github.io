function renderInjusticia(){
return `
<div class="topic-shell">

  <div class="session-header">
    <h1>🌎 Injusticia y desigualdad social</h1>
    <p>Entorno Social · Páginas 141 - 148 · CBTIS Reforzado</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" onclick="switchSubTab('injusticia','teoria', this)">
      1.1 Teoría
    </button>

    <button class="tab-btn" onclick="switchSubTab('injusticia','practica', this)">
      1.2 Práctica
    </button>

    <button class="tab-btn" onclick="switchSubTab('injusticia','evaluacion', this)">
      1.3 Evaluación
    </button>
  </div>

  <div id="injusticia-teoria" class="sub-tab-content active">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">MEDIO SOCIAL</span>
      <h2 class="section-h2">Injusticia y desigualdad social</h2>

      <p>
        La desigualdad social ocurre cuando las personas no tienen las mismas oportunidades
        para estudiar, trabajar, recibir atención médica, vivir con seguridad o acceder a servicios
        básicos. No se limita al dinero: también incluye educación, salud, vivienda, empleo,
        transporte, alimentación y tecnología.
      </p>

      <p>
        La injusticia social aparece cuando esas diferencias afectan los derechos y la calidad
        de vida de las personas. Por ejemplo, dos estudiantes pueden tener el mismo derecho a estudiar,
        pero si uno tiene computadora, internet y apoyo familiar, mientras otro trabaja por las tardes
        y no tiene conexión estable, no parten de las mismas condiciones.
      </p>

      <div class="important-box">
        🎯 Idea CBTIS: igualdad no siempre significa tratar a todos igual; a veces se necesita equidad,
        es decir, dar apoyos diferentes según las necesidades para que todos tengan oportunidades reales.
      </div>

      <div class="map-container">
        <div class="map-root">Tipos de desigualdad</div>
        <div class="map-branches">
          <div class="map-branch">
            <div class="branch-title">📚 Educativa</div>
            <div class="map-leaf">Acceso desigual a escuelas, internet, libros o asesoría.</div>
          </div>
          <div class="map-branch">
            <div class="branch-title">💰 Económica</div>
            <div class="map-leaf">Diferencias en ingresos, empleo y condiciones de vida.</div>
          </div>
          <div class="map-branch">
            <div class="branch-title">🏥 Salud</div>
            <div class="map-leaf">Dificultad para acceder a hospitales, medicina o prevención.</div>
          </div>
          <div class="map-branch">
            <div class="branch-title">🌐 Tecnológica</div>
            <div class="map-leaf">Brecha digital: no todos tienen internet o dispositivos.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Causas y consecuencias</h2>
      <p>
        Algunas causas son pobreza, discriminación, falta de empleo, baja calidad educativa,
        ubicación geográfica, violencia y falta de servicios públicos. Sus consecuencias pueden ser
        exclusión, abandono escolar, menor acceso a empleos, problemas de salud y conflictos sociales.
      </p>

      <div class="text-panel">
        <div class="text-title">Diferencia clave</div>
        <div class="text-body">Igualdad:
Dar lo mismo a todas las personas.

Equidad:
Dar apoyos según las necesidades de cada persona para que todas puedan competir en mejores condiciones.</div>
      </div>
    </div>

  </div>

  <div id="injusticia-practica" class="sub-tab-content">

    <div class="text-panel">
      <div class="text-title">Caso guiado</div>
      <div class="text-body">En una comunidad, muchos jóvenes no tienen internet en casa. Para hacer tareas deben caminar hasta una plaza pública donde hay señal. En otra zona, los estudiantes tienen computadora, conexión estable y clases extra.

Pregunta de análisis:
¿Qué tipo de desigualdad aparece y cómo afecta las oportunidades educativas?</div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Práctica de análisis</h2>
      <ul>
        <li>Identifica qué derecho o necesidad está afectada.</li>
        <li>Reconoce quién tiene ventaja y quién enfrenta obstáculos.</li>
        <li>Clasifica la desigualdad: educativa, económica, salud o tecnológica.</li>
        <li>Explica una posible consecuencia.</li>
      </ul>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">Mini reto: si una escuela no tiene internet ni computadoras, ¿qué desigualdad se observa principalmente?</div>
      <div class="text-body">Respuesta esperada: desigualdad educativa y tecnológica, porque afecta el acceso al aprendizaje y a herramientas digitales.</div>
    </div>

  </div>

  <div id="injusticia-evaluacion" class="sub-tab-content">

    <div class="quiz-card">
      <div class="quiz-question">
        Una comunidad no tiene hospital cercano y sus habitantes deben viajar horas para recibir atención médica. ¿Qué desigualdad refleja principalmente?
      </div>

      <label class="option-item">
        <input type="radio" name="injusticia-q1" value="a">
        Desigualdad tecnológica
      </label>
      <label class="option-item">
        <input type="radio" name="injusticia-q1" value="b">
        Desigualdad en salud
      </label>
      <label class="option-item">
        <input type="radio" name="injusticia-q1" value="c">
        Desigualdad cultural
      </label>
      <label class="option-item">
        <input type="radio" name="injusticia-q1" value="d">
        Desigualdad deportiva
      </label>

      <button class="btn-verify" onclick="verifyEntorno('injusticia-q1','b','feedback-injusticia-q1','El problema principal es el acceso desigual a servicios de salud.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-injusticia-q1"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">
        Dos estudiantes presentan el mismo examen, pero uno no tiene internet ni libros para prepararse. ¿Qué concepto ayuda a explicar esta situación?
      </div>

      <label class="option-item">
        <input type="radio" name="injusticia-q2" value="a">
        Equidad e igualdad de oportunidades
      </label>
      <label class="option-item">
        <input type="radio" name="injusticia-q2" value="b">
        Consumo responsable
      </label>
      <label class="option-item">
        <input type="radio" name="injusticia-q2" value="c">
        Proceso productivo
      </label>
      <label class="option-item">
        <input type="radio" name="injusticia-q2" value="d">
        Norma jurídica
      </label>

      <button class="btn-verify" onclick="verifyEntorno('injusticia-q2','a','feedback-injusticia-q2','El caso muestra que no todos parten de las mismas condiciones.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-injusticia-q2"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">
        ¿Cuál es una consecuencia posible de la desigualdad social?
      </div>

      <label class="option-item">
        <input type="radio" name="injusticia-q3" value="a">
        Mayor inclusión automática
      </label>
      <label class="option-item">
        <input type="radio" name="injusticia-q3" value="b">
        Exclusión y falta de oportunidades
      </label>
      <label class="option-item">
        <input type="radio" name="injusticia-q3" value="c">
        Eliminación de conflictos
      </label>
      <label class="option-item">
        <input type="radio" name="injusticia-q3" value="d">
        Acceso igualitario inmediato
      </label>

      <button class="btn-verify" onclick="verifyEntorno('injusticia-q3','b','feedback-injusticia-q3','La desigualdad puede generar exclusión y limitar oportunidades.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-injusticia-q3"></div>
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

