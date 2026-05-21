function renderCriterios(){
return `
<div class="topic-shell">

  <div class="session-header">
    <h1>⚖️ Criterios éticos</h1>
    <p>Ética · Ejercicio responsable de los derechos humanos · Páginas 243 - 255</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" onclick="switchSubTab('criterios','teoria', this)">1.1 Teoría</button>
    <button class="tab-btn" onclick="switchSubTab('criterios','practica', this)">1.2 Práctica</button>
    <button class="tab-btn" onclick="switchSubTab('criterios','evaluacion', this)">1.3 Evaluación</button>
  </div>

  <div id="criterios-teoria" class="sub-tab-content active">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">EJERCICIO RESPONSABLE DE LOS DERECHOS HUMANOS</span>

      <h2 class="section-h2">¿Qué son los criterios éticos?</h2>

      <p>
        Los criterios éticos son principios que nos ayudan a decidir si una acción es correcta,
        justa, responsable y respetuosa hacia otras personas. Sirven para orientar nuestras decisiones
        cuando tenemos que elegir entre varias opciones.
      </p>

      <p>
        En la vida diaria tomamos decisiones éticas todo el tiempo: respetar a un compañero,
        decir la verdad, no copiar en un examen, cuidar lo que publicamos en redes sociales,
        ayudar a alguien que lo necesita o denunciar una injusticia.
      </p>

      <div class="important-box">
        🎯 Idea CBTIS:
        La ética no solo es saber qué está bien o mal; también es razonar las consecuencias de nuestros actos.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Ética y moral</h2>

      <p>
        Aunque muchas veces se usan como si fueran lo mismo, ética y moral no son exactamente iguales.
      </p>

      <div class="map-container">
        <div class="map-root">Ética y moral</div>
        <div class="map-branches">

          <div class="map-branch">
            <div class="branch-title">🧠 Ética</div>
            <div class="map-leaf">Reflexiona sobre lo correcto y lo justo.</div>
            <div class="map-leaf">Ayuda a pensar antes de actuar.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">👥 Moral</div>
            <div class="map-leaf">Conjunto de valores, reglas y costumbres de una sociedad.</div>
            <div class="map-leaf">Puede cambiar según cultura, familia o época.</div>
          </div>

        </div>
      </div>

      <div class="text-panel">
        <div class="text-title">Ejemplo sencillo</div>
        <div class="text-body">Moral:
“En mi casa me enseñaron que mentir está mal.”

Ética:
“Voy a decir la verdad porque mentir puede dañar la confianza y afectar a otra persona.”</div>
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Principales criterios éticos</h2>

      <p>
        Para tomar decisiones responsables podemos usar diferentes criterios éticos.
        Estos criterios ayudan a analizar una situación antes de actuar.
      </p>

      <div class="map-container">
        <div class="map-root">Criterios éticos para decidir</div>
        <div class="map-branches">

          <div class="map-branch">
            <div class="branch-title">🤝 Respeto</div>
            <div class="map-leaf">Reconocer la dignidad de todas las personas.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">⚖️ Justicia</div>
            <div class="map-leaf">Dar a cada quien lo que le corresponde y evitar abusos.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🛡️ Responsabilidad</div>
            <div class="map-leaf">Aceptar las consecuencias de nuestras acciones.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">❤️ Empatía</div>
            <div class="map-leaf">Ponerse en el lugar de otras personas.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🗣️ Honestidad</div>
            <div class="map-leaf">Actuar con verdad y coherencia.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🕊️ Libertad</div>
            <div class="map-leaf">Elegir sin dañar los derechos de los demás.</div>
          </div>

        </div>
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Derechos humanos y ética</h2>

      <p>
        Los derechos humanos son derechos que todas las personas tienen por el simple hecho de ser personas.
        La ética ayuda a reconocerlos, respetarlos y defenderlos.
      </p>

      <p>
        Cuando una decisión afecta la dignidad, libertad, igualdad o seguridad de alguien,
        estamos frente a una situación ética. Por eso, actuar éticamente implica cuidar los derechos propios
        y también los derechos de los demás.
      </p>

      <div class="important-box">
        🔎 Un acto ético respeta la dignidad humana y evita dañar injustamente a otras personas.
      </div>

      <div class="text-panel">
        <div class="text-title">Ejemplo aplicado</div>
        <div class="text-body">Si alguien comparte una foto de otra persona sin permiso,
no solo comete una falta de respeto:
también puede afectar su privacidad y dignidad.

Criterio ético:
respetar la privacidad y pedir consentimiento.</div>
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Dilemas éticos</h2>

      <p>
        Un dilema ético ocurre cuando una persona debe elegir entre dos o más opciones y cada una tiene
        consecuencias importantes. No siempre se trata de una respuesta fácil; por eso se necesita razonar.
      </p>

      <div class="text-panel">
        <div class="text-title">Ejemplo de dilema</div>
        <div class="text-body">Tu mejor amigo copió en un examen y te pide que no digas nada.

¿Qué haces?

Opciones:
- Guardar silencio para no afectar la amistad.
- Decir la verdad porque copiar es injusto para los demás.

Aquí debes considerar honestidad, justicia, responsabilidad y consecuencias.</div>
      </div>
    </div>

  </div>

  <div id="criterios-practica" class="sub-tab-content">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">PRÁCTICA GUIADA</span>

      <h2 class="section-h2">Práctica 1: redes sociales</h2>

      <div class="text-panel">
        <div class="text-title">Caso</div>
        <div class="text-body">Un estudiante toma una foto vergonzosa de un compañero y la sube a redes sociales sin permiso.

¿Qué criterios éticos se están ignorando?</div>
      </div>

      <div class="important-box">
        ✅ Respuesta esperada:
        respeto, responsabilidad, empatía y derecho a la privacidad.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Práctica 2: copiar en un examen</h2>

      <div class="text-panel">
        <div class="text-title">Caso</div>
        <div class="text-body">Un alumno estudió mucho para un examen. Otro alumno copia las respuestas y obtiene la misma calificación.

¿Qué criterio ético se afecta?</div>
      </div>

      <div class="important-box">
        ✅ Respuesta esperada:
        justicia y honestidad, porque no todos actuaron con el mismo esfuerzo ni con verdad.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Práctica 3: discriminación</h2>

      <div class="text-panel">
        <div class="text-title">Caso</div>
        <div class="text-body">Ves que un compañero está siendo discriminado por su forma de hablar o vestir.
Algunos se burlan y otros se quedan callados.

¿Qué decisión ética puedes tomar?</div>
      </div>

      <div class="important-box">
        ✅ Respuesta esperada:
        no participar en la burla, apoyar a la persona afectada y reportar la situación a una autoridad escolar.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Método para resolver dilemas éticos</h2>

      <div class="text-panel">
        <div class="text-title">Pasos prácticos</div>
        <div class="text-body">1. Identifica el problema.

2. Reconoce a quién afecta.

3. Piensa qué derechos están involucrados.

4. Analiza consecuencias.

5. Elige la opción más justa y responsable.</div>
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Mini práctica CBTIS</h2>

      <div class="quiz-card">
        <div class="quiz-question">Si una acción humilla a otra persona, ¿qué criterio ético se está dañando?</div>
        <div class="text-body">Respuesta: respeto a la dignidad.</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">Si decides decir la verdad aunque sea difícil, ¿qué valor estás aplicando?</div>
        <div class="text-body">Respuesta: honestidad.</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">Si piensas en cómo se siente otra persona antes de actuar, ¿qué criterio aplicas?</div>
        <div class="text-body">Respuesta: empatía.</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">Si aceptas las consecuencias de tus actos, ¿qué criterio estás aplicando?</div>
        <div class="text-body">Respuesta: responsabilidad.</div>
      </div>
    </div>

  </div>

  <div id="criterios-evaluacion" class="sub-tab-content">

    <div class="quiz-card">
      <div class="quiz-question">1. ¿Qué son los criterios éticos?</div>
      <label class="option-item"><input type="radio" name="criterios-q1">Principios que orientan decisiones correctas y responsables</label>
      <label class="option-item"><input type="radio" name="criterios-q1">Reglas matemáticas</label>
      <label class="option-item"><input type="radio" name="criterios-q1">Fenómenos naturales</label>
      <label class="option-item"><input type="radio" name="criterios-q1">Procesos productivos</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">2. ¿Qué criterio ético implica ponerse en el lugar de otra persona?</div>
      <label class="option-item"><input type="radio" name="criterios-q2">Empatía</label>
      <label class="option-item"><input type="radio" name="criterios-q2">Densidad</label>
      <label class="option-item"><input type="radio" name="criterios-q2">Autoridad</label>
      <label class="option-item"><input type="radio" name="criterios-q2">Competencia</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">3. Decir la verdad aunque sea difícil se relaciona con:</div>
      <label class="option-item"><input type="radio" name="criterios-q3">Honestidad</label>
      <label class="option-item"><input type="radio" name="criterios-q3">Desigualdad</label>
      <label class="option-item"><input type="radio" name="criterios-q3">Energía</label>
      <label class="option-item"><input type="radio" name="criterios-q3">Mezcla</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">4. ¿Qué criterio se aplica al aceptar las consecuencias de nuestros actos?</div>
      <label class="option-item"><input type="radio" name="criterios-q4">Responsabilidad</label>
      <label class="option-item"><input type="radio" name="criterios-q4">Velocidad</label>
      <label class="option-item"><input type="radio" name="criterios-q4">Densidad</label>
      <label class="option-item"><input type="radio" name="criterios-q4">Evaporación</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">5. Compartir una foto de alguien sin permiso afecta principalmente:</div>
      <label class="option-item"><input type="radio" name="criterios-q5">Privacidad y dignidad</label>
      <label class="option-item"><input type="radio" name="criterios-q5">Solubilidad</label>
      <label class="option-item"><input type="radio" name="criterios-q5">Volumen</label>
      <label class="option-item"><input type="radio" name="criterios-q5">Conductividad</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">6. Copiar en un examen afecta principalmente:</div>
      <label class="option-item"><input type="radio" name="criterios-q6">Justicia y honestidad</label>
      <label class="option-item"><input type="radio" name="criterios-q6">Temperatura y volumen</label>
      <label class="option-item"><input type="radio" name="criterios-q6">Frecuencia y energía</label>
      <label class="option-item"><input type="radio" name="criterios-q6">Mezcla y filtración</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">7. ¿Qué se debe considerar al resolver un dilema ético?</div>
      <label class="option-item"><input type="radio" name="criterios-q7">Consecuencias, derechos y personas afectadas</label>
      <label class="option-item"><input type="radio" name="criterios-q7">Solo lo que conviene personalmente</label>
      <label class="option-item"><input type="radio" name="criterios-q7">El color de los objetos</label>
      <label class="option-item"><input type="radio" name="criterios-q7">La cantidad de materia</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">8. La ética se relaciona principalmente con:</div>
      <label class="option-item"><input type="radio" name="criterios-q8">Reflexionar sobre lo correcto, justo y responsable</label>
      <label class="option-item"><input type="radio" name="criterios-q8">Memorizar fórmulas químicas</label>
      <label class="option-item"><input type="radio" name="criterios-q8">Calcular áreas</label>
      <label class="option-item"><input type="radio" name="criterios-q8">Clasificar ondas</label>
    </div>

  </div>

</div>
`;
}
