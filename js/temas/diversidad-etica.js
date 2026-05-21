function renderDiversidadEtica(){
return `
<div class="topic-shell">

  <div class="session-header">
    <h1>🌈 Diversidad, interculturalidad y perspectiva de género</h1>
    <p>Ética · Ejercicio responsable de los derechos humanos · Páginas 256 - 265</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" onclick="switchSubTab('diversidad-etica','teoria', this)">1.1 Teoría</button>
    <button class="tab-btn" onclick="switchSubTab('diversidad-etica','practica', this)">1.2 Práctica</button>
    <button class="tab-btn" onclick="switchSubTab('diversidad-etica','evaluacion', this)">1.3 Evaluación</button>
  </div>

  <!-- TEORIA -->
  <div id="diversidad-etica-teoria" class="sub-tab-content active">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">EJERCICIO RESPONSABLE DE LOS DERECHOS HUMANOS</span>

      <h2 class="section-h2">¿Qué es la diversidad?</h2>

      <p>
        La diversidad significa que todas las personas somos diferentes.
        Cada persona tiene características únicas: cultura, idioma,
        religión, costumbres, gustos, capacidades y formas de pensar.
      </p>

      <p>
        En la sociedad existen muchas formas de vivir y expresarse.
        Esa variedad hace que las comunidades sean más ricas culturalmente
        y permite aprender de otras personas.
      </p>

      <div class="important-box">
        🎯 Idea CBTIS:
        La diversidad debe respetarse porque todas las personas tienen dignidad y derechos.
      </div>
    </div>

    <div class="subtopic-section">

      <h2 class="section-h2">Tipos de diversidad</h2>

      <div class="map-container">

        <div class="map-root">Diversidad humana</div>

        <div class="map-branches">

          <div class="map-branch">
            <div class="branch-title">🌎 Cultural</div>
            <div class="map-leaf">Tradiciones y formas de vida.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🗣️ Lingüística</div>
            <div class="map-leaf">Idiomas y formas de hablar.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🙏 Religiosa</div>
            <div class="map-leaf">Distintas creencias.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">♿ Física</div>
            <div class="map-leaf">Capacidades diferentes.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">⚧️ Género</div>
            <div class="map-leaf">Identidades y expresiones diversas.</div>
          </div>

        </div>

      </div>

    </div>

    <div class="subtopic-section">

      <h2 class="section-h2">¿Qué es la interculturalidad?</h2>

      <p>
        La interculturalidad es la convivencia respetuosa entre personas
        de diferentes culturas. Implica diálogo, inclusión y respeto.
      </p>

      <div class="text-panel">
        <div class="text-title">Ejemplo cotidiano</div>
        <div class="text-body">
En una escuela conviven estudiantes con diferentes costumbres,
formas de hablar y tradiciones.

La interculturalidad significa convivir sin burlas,
sin discriminación y aprendiendo unos de otros.
        </div>
      </div>

      <div class="important-box">
        🔎 La interculturalidad fortalece la convivencia pacífica.
      </div>

    </div>

    <div class="subtopic-section">

      <h2 class="section-h2">¿Qué es la perspectiva de género?</h2>

      <p>
        La perspectiva de género es una manera de analizar situaciones
        para identificar desigualdades o discriminación relacionadas con el género.
      </p>

      <p>
        Busca que todas las personas tengan igualdad de derechos,
        oportunidades y respeto.
      </p>

      <div class="map-container">

        <div class="map-root">Perspectiva de género</div>

        <div class="map-branches">

          <div class="map-branch">
            <div class="branch-title">⚖️ Igualdad</div>
            <div class="map-leaf">Mismos derechos y oportunidades.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🚫 No discriminación</div>
            <div class="map-leaf">Evitar trato injusto.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🛡️ Protección</div>
            <div class="map-leaf">Prevenir violencia y abuso.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🤝 Respeto</div>
            <div class="map-leaf">Reconocer dignidad y libertad.</div>
          </div>

        </div>

      </div>

    </div>

    <div class="subtopic-section">

      <h2 class="section-h2">Discriminación y prejuicios</h2>

      <p>
        La discriminación ocurre cuando una persona recibe un trato injusto
        por sus características: género, idioma, cultura, religión
        o forma de pensar.
      </p>

      <p>
        Los prejuicios son ideas negativas sobre alguien sin conocerlo realmente.
      </p>

      <div class="text-panel">
        <div class="text-title">Ejemplos</div>
        <div class="text-body">
❌ “Las mujeres no pueden estudiar ingeniería.”

❌ “Las personas indígenas saben menos.”

❌ “Los hombres no deben llorar.”

Estas frases son prejuicios y generan discriminación.
        </div>
      </div>

      <div class="important-box">
        🚫 La discriminación viola los derechos humanos.
      </div>

    </div>

    <div class="subtopic-section">

      <h2 class="section-h2">Respeto e inclusión</h2>

      <p>
        Una sociedad inclusiva permite que todas las personas participen
        y sean tratadas con igualdad y respeto.
      </p>

      <ul>
        <li>Escuchar opiniones distintas.</li>
        <li>Evitar burlas y estereotipos.</li>
        <li>Respetar culturas y costumbres.</li>
        <li>Promover igualdad.</li>
        <li>Defender derechos humanos.</li>
      </ul>

      <div class="important-box">
        🎯 Respetar la diversidad fortalece la convivencia social.
      </div>

    </div>

  </div>

  <!-- PRACTICA -->
  <div id="diversidad-etica-practica" class="sub-tab-content">

    <div class="subtopic-section">

      <span class="subtopic-header-tag">PRÁCTICA GUIADA</span>

      <h2 class="section-h2">Práctica 1: discriminación escolar</h2>

      <div class="text-panel">
        <div class="text-title">Caso</div>
        <div class="text-body">
Un estudiante es excluido porque habla una lengua indígena.

¿Qué derechos y valores se están afectando?
        </div>
      </div>

      <div class="important-box">
        ✅ Respuesta esperada:
        igualdad, inclusión, respeto y no discriminación.
      </div>

    </div>

    <div class="subtopic-section">

      <h2 class="section-h2">Práctica 2: igualdad de oportunidades</h2>

      <div class="text-panel">
        <div class="text-title">Caso</div>
        <div class="text-body">
En una empresa solo permiten que hombres ocupen puestos importantes.

¿Qué problema existe?
        </div>
      </div>

      <div class="important-box">
        ✅ Respuesta esperada:
        discriminación y desigualdad de género.
      </div>

    </div>

    <div class="subtopic-section">

      <h2 class="section-h2">Práctica 3: convivencia intercultural</h2>

      <div class="text-panel">
        <div class="text-title">Caso</div>
        <div class="text-body">
Llegan estudiantes extranjeros a una escuela.
Algunos compañeros quieren burlarse de su acento.

¿Qué sería actuar correctamente?
        </div>
      </div>

      <div class="important-box">
        ✅ Respuesta esperada:
        respetar diferencias y convivir con inclusión y diálogo.
      </div>

    </div>

    <div class="subtopic-section">

      <h2 class="section-h2">Cómo actuar con respeto</h2>

      <div class="text-panel">
        <div class="text-title">Recomendaciones</div>
        <div class="text-body">
- Escuchar sin burlarse.

- Respetar diferencias.

- Evitar prejuicios.

- No discriminar.

- Defender derechos humanos.

- Promover igualdad.
        </div>
      </div>

    </div>

    <div class="subtopic-section">

      <h2 class="section-h2">Mini práctica CBTIS</h2>

      <div class="quiz-card">
        <div class="quiz-question">
          ¿Qué significa diversidad?
        </div>
        <div class="text-body">
          Respuesta: reconocer que las personas son diferentes.
        </div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">
          ¿Qué promueve la interculturalidad?
        </div>
        <div class="text-body">
          Respuesta: convivencia respetuosa entre culturas.
        </div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">
          ¿Qué busca la perspectiva de género?
        </div>
        <div class="text-body">
          Respuesta: igualdad y no discriminación.
        </div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">
          ¿Qué es un prejuicio?
        </div>
        <div class="text-body">
          Respuesta: idea negativa sobre alguien sin conocerlo realmente.
        </div>
      </div>

    </div>

  </div>

  <!-- EVALUACION -->
  <div id="diversidad-etica-evaluacion" class="sub-tab-content">

    <div class="quiz-card">
      <div class="quiz-question">1. ¿Qué significa diversidad?</div>
      <label class="option-item"><input type="radio" name="diversidad-q1">Que las personas son diferentes entre sí</label>
      <label class="option-item"><input type="radio" name="diversidad-q1">Que todos deben pensar igual</label>
      <label class="option-item"><input type="radio" name="diversidad-q1">Un fenómeno físico</label>
      <label class="option-item"><input type="radio" name="diversidad-q1">Una fórmula matemática</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">2. ¿Qué promueve la interculturalidad?</div>
      <label class="option-item"><input type="radio" name="diversidad-q2">Respeto y convivencia entre culturas</label>
      <label class="option-item"><input type="radio" name="diversidad-q2">Discriminación</label>
      <label class="option-item"><input type="radio" name="diversidad-q2">Violencia</label>
      <label class="option-item"><input type="radio" name="diversidad-q2">Exclusión</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">3. ¿Qué busca la perspectiva de género?</div>
      <label class="option-item"><input type="radio" name="diversidad-q3">Igualdad y no discriminación</label>
      <label class="option-item"><input type="radio" name="diversidad-q3">Separar personas</label>
      <label class="option-item"><input type="radio" name="diversidad-q3">Eliminar derechos</label>
      <label class="option-item"><input type="radio" name="diversidad-q3">Reducir libertades</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">4. La discriminación ocurre cuando:</div>
      <label class="option-item"><input type="radio" name="diversidad-q4">Se trata injustamente a una persona</label>
      <label class="option-item"><input type="radio" name="diversidad-q4">Se respetan derechos</label>
      <label class="option-item"><input type="radio" name="diversidad-q4">Se promueve igualdad</label>
      <label class="option-item"><input type="radio" name="diversidad-q4">Se escucha con respeto</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">5. ¿Qué es un prejuicio?</div>
      <label class="option-item"><input type="radio" name="diversidad-q5">Idea negativa sin conocer realmente a la persona</label>
      <label class="option-item"><input type="radio" name="diversidad-q5">Un derecho humano</label>
      <label class="option-item"><input type="radio" name="diversidad-q5">Una ley científica</label>
      <label class="option-item"><input type="radio" name="diversidad-q5">Una propiedad física</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">6. ¿Qué acción favorece la inclusión?</div>
      <label class="option-item"><input type="radio" name="diversidad-q6">Respetar y escuchar a otras personas</label>
      <label class="option-item"><input type="radio" name="diversidad-q6">Burlarse de otras culturas</label>
      <label class="option-item"><input type="radio" name="diversidad-q6">Excluir compañeros</label>
      <label class="option-item"><input type="radio" name="diversidad-q6">Difundir estereotipos</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">7. ¿Qué derecho se afecta cuando alguien es discriminado?</div>
      <label class="option-item"><input type="radio" name="diversidad-q7">Igualdad y dignidad</label>
      <label class="option-item"><input type="radio" name="diversidad-q7">Evaporación</label>
      <label class="option-item"><input type="radio" name="diversidad-q7">Frecuencia</label>
      <label class="option-item"><input type="radio" name="diversidad-q7">Conductividad</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">8. Respetar diferencias culturales ayuda a:</div>
      <label class="option-item"><input type="radio" name="diversidad-q8">Fortalecer convivencia y paz social</label>
      <label class="option-item"><input type="radio" name="diversidad-q8">Generar violencia</label>
      <label class="option-item"><input type="radio" name="diversidad-q8">Crear prejuicios</label>
      <label class="option-item"><input type="radio" name="diversidad-q8">Eliminar derechos</label>
    </div>

  </div>

</div>
`;
}
