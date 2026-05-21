function renderDemocraciaParticipativa(){
return `
<div class="topic-shell">

  <div class="session-header">
    <h1>🗳️ Democracia participativa</h1>
    <p>Ética · Ejercicio responsable de los derechos humanos · Páginas 272 - 276</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" onclick="switchSubTab('democracia-participativa','teoria', this)">
      1.1 Teoría
    </button>

    <button class="tab-btn" onclick="switchSubTab('democracia-participativa','practica', this)">
      1.2 Práctica
    </button>

    <button class="tab-btn" onclick="switchSubTab('democracia-participativa','evaluacion', this)">
      1.3 Evaluación
    </button>
  </div>

  <div id="democracia-participativa-teoria" class="sub-tab-content active">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">EJERCICIO RESPONSABLE DE LOS DERECHOS HUMANOS</span>

      <h2 class="section-h2">¿Qué es la democracia participativa?</h2>

      <p>
        La democracia participativa es una forma de democracia en la que las personas no solo votan,
        sino que también se involucran activamente en las decisiones que afectan a su comunidad.
      </p>

      <p>
        Esto significa que la ciudadanía puede informarse, opinar, proponer soluciones,
        vigilar a las autoridades, organizarse con otras personas y participar en acciones
        para mejorar la sociedad.
      </p>

      <div class="important-box">
        🎯 Idea CBTIS:
        En la democracia participativa la ciudadanía no se queda pasiva; participa, propone y exige.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Democracia representativa y democracia participativa</h2>

      <p>
        La democracia representativa ocurre cuando las personas eligen representantes para que tomen decisiones.
        La democracia participativa permite que la ciudadanía se involucre de forma más directa.
      </p>

      <div class="map-container">
        <div class="map-root">Tipos de democracia</div>

        <div class="map-branches">

          <div class="map-branch">
            <div class="branch-title">🏛️ Representativa</div>
            <div class="map-leaf">La ciudadanía elige representantes.</div>
            <div class="map-leaf">Ejemplo: votar por autoridades.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🗣️ Participativa</div>
            <div class="map-leaf">La ciudadanía se involucra directamente.</div>
            <div class="map-leaf">Ejemplo: consultas, asambleas y propuestas ciudadanas.</div>
          </div>

        </div>
      </div>

      <div class="important-box">
        🔎 Votar es importante, pero participar también incluye dialogar, proponer y dar seguimiento.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Formas de participación democrática</h2>

      <ul>
        <li>Votar de manera informada.</li>
        <li>Participar en consultas ciudadanas.</li>
        <li>Asistir a reuniones comunitarias.</li>
        <li>Organizar campañas para resolver problemas.</li>
        <li>Exigir rendición de cuentas.</li>
        <li>Expresar opiniones con respeto.</li>
        <li>Proponer soluciones a problemas públicos.</li>
      </ul>

      <div class="text-panel">
        <div class="text-title">Ejemplo claro</div>
        <div class="text-body">
Si una colonia tiene problemas de basura, los vecinos pueden organizarse,
dialogar con autoridades, proponer soluciones y dar seguimiento.

Eso es democracia participativa.
        </div>
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Valores de la democracia participativa</h2>

      <div class="map-container">
        <div class="map-root">Valores democráticos</div>

        <div class="map-branches">

          <div class="map-branch">
            <div class="branch-title">🤝 Respeto</div>
            <div class="map-leaf">Escuchar opiniones distintas.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">⚖️ Igualdad</div>
            <div class="map-leaf">Todas las personas tienen derecho a participar.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🗣️ Diálogo</div>
            <div class="map-leaf">Resolver diferencias hablando y escuchando.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🛡️ Responsabilidad</div>
            <div class="map-leaf">Participar pensando en el bien común.</div>
          </div>

        </div>
      </div>
    </div>

  </div>

  <div id="democracia-participativa-practica" class="sub-tab-content">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">PRÁCTICA GUIADA</span>

      <h2 class="section-h2">Práctica 1: problema comunitario</h2>

      <div class="text-panel">
        <div class="text-title">Caso</div>
        <div class="text-body">
En una colonia hay poca iluminación y las calles se sienten inseguras.
Los vecinos se organizan, juntan firmas y solicitan alumbrado público.

¿Qué tipo de participación se observa?
        </div>
      </div>

      <div class="important-box">
        ✅ Respuesta esperada:
        democracia participativa, porque la ciudadanía se organiza y propone una solución.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Práctica 2: votar informado</h2>

      <div class="text-panel">
        <div class="text-title">Caso</div>
        <div class="text-body">
Una persona revisa propuestas, compara ideas y escucha debates antes de votar.

¿Por qué esto fortalece la democracia?
        </div>
      </div>

      <div class="important-box">
        ✅ Respuesta esperada:
        porque permite tomar decisiones informadas y responsables.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Práctica 3: diálogo y respeto</h2>

      <div class="text-panel">
        <div class="text-title">Caso</div>
        <div class="text-body">
En una asamblea escolar hay opiniones diferentes sobre cómo mejorar la convivencia.
Algunos estudiantes escuchan, argumentan y buscan acuerdos.

¿Qué valores democráticos aparecen?
        </div>
      </div>

      <div class="important-box">
        ✅ Respuesta esperada:
        respeto, diálogo, igualdad y responsabilidad.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Pasos para participar democráticamente</h2>

      <div class="text-panel">
        <div class="text-title">Guía práctica</div>
        <div class="text-body">
1. Identifica un problema.

2. Infórmate.

3. Escucha diferentes opiniones.

4. Propón soluciones.

5. Participa con respeto.

6. Da seguimiento a los acuerdos.
        </div>
      </div>
    </div>

  </div>

  <div id="democracia-participativa-evaluacion" class="sub-tab-content">

    <div class="quiz-card">
      <div class="quiz-question">1. ¿Qué es la democracia participativa?</div>
      <label class="option-item"><input type="radio" name="democracia-participativa-q1">Participación activa de la ciudadanía en asuntos públicos</label>
      <label class="option-item"><input type="radio" name="democracia-participativa-q1">Obedecer sin opinar</label>
      <label class="option-item"><input type="radio" name="democracia-participativa-q1">Evitar organizarse</label>
      <label class="option-item"><input type="radio" name="democracia-participativa-q1">Dejar todas las decisiones a una sola persona</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">2. ¿Qué acción representa democracia participativa?</div>
      <label class="option-item"><input type="radio" name="democracia-participativa-q2">Organizarse para resolver un problema comunitario</label>
      <label class="option-item"><input type="radio" name="democracia-participativa-q2">Ignorar problemas sociales</label>
      <label class="option-item"><input type="radio" name="democracia-participativa-q2">Burlarse de opiniones distintas</label>
      <label class="option-item"><input type="radio" name="democracia-participativa-q2">No informarse nunca</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">3. ¿Qué valor democrático implica escuchar opiniones distintas?</div>
      <label class="option-item"><input type="radio" name="democracia-participativa-q3">Respeto</label>
      <label class="option-item"><input type="radio" name="democracia-participativa-q3">Imposición</label>
      <label class="option-item"><input type="radio" name="democracia-participativa-q3">Discriminación</label>
      <label class="option-item"><input type="radio" name="democracia-participativa-q3">Exclusión</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">4. Votar de manera informada ayuda a:</div>
      <label class="option-item"><input type="radio" name="democracia-participativa-q4">Tomar decisiones responsables</label>
      <label class="option-item"><input type="radio" name="democracia-participativa-q4">Desinformar a la comunidad</label>
      <label class="option-item"><input type="radio" name="democracia-participativa-q4">Eliminar la participación</label>
      <label class="option-item"><input type="radio" name="democracia-participativa-q4">Evitar el diálogo</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">5. La rendición de cuentas significa:</div>
      <label class="option-item"><input type="radio" name="democracia-participativa-q5">Que autoridades expliquen y cumplan sus responsabilidades</label>
      <label class="option-item"><input type="radio" name="democracia-participativa-q5">Que nadie pregunte nada</label>
      <label class="option-item"><input type="radio" name="democracia-participativa-q5">Que las decisiones sean secretas</label>
      <label class="option-item"><input type="radio" name="democracia-participativa-q5">Que se eliminen derechos</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">6. Una asamblea comunitaria donde se dialoga para tomar acuerdos es ejemplo de:</div>
      <label class="option-item"><input type="radio" name="democracia-participativa-q6">Democracia participativa</label>
      <label class="option-item"><input type="radio" name="democracia-participativa-q6">Autoritarismo</label>
      <label class="option-item"><input type="radio" name="democracia-participativa-q6">Aislamiento social</label>
      <label class="option-item"><input type="radio" name="democracia-participativa-q6">Discriminación</label>
    </div>

  </div>

</div>
`;
}

/* Alias de compatibilidad por si tu router usa renderDemocracia() */
function renderDemocracia(){
  return renderDemocraciaParticipativa();
}
