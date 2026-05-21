
function renderEnergia(){
return `
<div class="topic-shell">

  <div class="session-header">
    <h1>⚡ Generación de energía eléctrica y su impacto medioambiental</h1>
    <p>Ciencias Naturales y Experimentales · CBTIS · Páginas 233 - 242</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" onclick="switchSubTab('energia','teoria', this)">1.1 Teoría</button>
    <button class="tab-btn" onclick="switchSubTab('energia','practica', this)">1.2 Práctica</button>
    <button class="tab-btn" onclick="switchSubTab('energia','evaluacion', this)">1.3 Evaluación</button>
  </div>

  <div id="energia-teoria" class="sub-tab-content active">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">MATERIA, ENERGÍA E INTERACCIONES</span>
      <h2 class="section-h2">¿Qué es la energía eléctrica?</h2>

      <p>
        La energía eléctrica es una forma de energía que usamos todos los días para encender focos,
        cargar celulares, usar computadoras, refrigeradores, televisiones y muchas máquinas.
      </p>

      <p>
        Aunque parece que la electricidad simplemente “sale del enchufe”, en realidad primero debe generarse
        en centrales eléctricas. Para producirla se transforma otra forma de energía, como el movimiento del agua,
        el viento, la luz del Sol o el calor producido por combustibles.
      </p>

      <div class="important-box">
        🎯 Idea CBTIS:
        La electricidad no aparece sola; se genera transformando otras formas de energía.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">¿Cómo se genera la electricidad?</h2>

      <p>
        Muchas centrales eléctricas funcionan con generadores. Un generador convierte movimiento en electricidad.
        Para moverlo se puede usar vapor, agua, viento o turbinas.
      </p>

      <div class="text-panel">
        <div class="text-title">Ejemplo sencillo</div>
        <div class="text-body">
Imagina una bicicleta con dinamo:
cuando la rueda gira, se produce electricidad para encender una luz.

En una central eléctrica ocurre algo parecido, pero a gran escala:
una turbina gira y un generador produce electricidad.
        </div>
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Fuentes renovables y no renovables</h2>

      <p>
        Las fuentes de energía pueden clasificarse en renovables y no renovables.
        Las renovables se regeneran naturalmente; las no renovables se agotan y tardan millones de años en formarse.
      </p>

      <div class="map-container">
        <div class="map-root">Fuentes de energía</div>
        <div class="map-branches">

          <div class="map-branch">
            <div class="branch-title">☀️ Solar</div>
            <div class="map-leaf">Aprovecha la luz del Sol.</div>
            <div class="map-leaf">Es renovable.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🌬️ Eólica</div>
            <div class="map-leaf">Usa el movimiento del viento.</div>
            <div class="map-leaf">Es renovable.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">💧 Hidroeléctrica</div>
            <div class="map-leaf">Usa el movimiento del agua.</div>
            <div class="map-leaf">Es renovable, aunque puede afectar ecosistemas.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🛢️ Combustibles fósiles</div>
            <div class="map-leaf">Carbón, petróleo y gas natural.</div>
            <div class="map-leaf">Son no renovables y contaminan más.</div>
          </div>

        </div>
      </div>

      <div class="important-box">
        🎯 Renovable = se regenera naturalmente. No renovable = se agota.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Tipos de centrales eléctricas</h2>

      <div class="map-container">
        <div class="map-root">Centrales eléctricas</div>
        <div class="map-branches">

          <div class="map-branch">
            <div class="branch-title">🔥 Termoeléctrica</div>
            <div class="map-leaf">Quema combustibles para producir vapor.</div>
            <div class="map-leaf">Genera emisiones contaminantes.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">💧 Hidroeléctrica</div>
            <div class="map-leaf">Usa la fuerza del agua para mover turbinas.</div>
            <div class="map-leaf">Puede modificar ríos y ecosistemas.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🌬️ Eólica</div>
            <div class="map-leaf">El viento mueve aspas conectadas a un generador.</div>
            <div class="map-leaf">Produce poca contaminación directa.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">☀️ Solar</div>
            <div class="map-leaf">Convierte la luz solar en electricidad.</div>
            <div class="map-leaf">Depende de la radiación solar disponible.</div>
          </div>

        </div>
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Impacto medioambiental</h2>

      <p>
        No todas las formas de generar electricidad afectan igual al ambiente.
        Las centrales que queman combustibles fósiles liberan gases contaminantes que contribuyen al cambio climático.
        Las energías renovables reducen emisiones, pero también pueden tener impactos si no se planean bien.
      </p>

      <div class="text-panel">
        <div class="text-title">Comparación</div>
        <div class="text-body">
Mayor impacto ambiental:
- carbón
- petróleo
- gas natural

Menor impacto ambiental:
- solar
- eólica
- hidroeléctrica bien planificada
        </div>
      </div>

      <div class="important-box">
        🔎 Ninguna fuente es perfecta, pero algunas contaminan mucho menos que otras.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Uso responsable de la electricidad</h2>

      <p>
        Ahorrar electricidad también ayuda al ambiente. Si usamos menos electricidad, se requiere producir menos energía,
        y eso puede reducir emisiones contaminantes.
      </p>

      <ul>
        <li>Apagar luces que no se usan.</li>
        <li>Desconectar cargadores.</li>
        <li>Usar focos ahorradores.</li>
        <li>Aprovechar luz natural.</li>
        <li>No dejar aparatos encendidos innecesariamente.</li>
      </ul>
    </div>

  </div>

  <div id="energia-practica" class="sub-tab-content">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">PRÁCTICA GUIADA</span>
      <h2 class="section-h2">Práctica 1: identifica la fuente</h2>

      <div class="text-panel">
        <div class="text-title">Caso</div>
        <div class="text-body">
Una comunidad instala paneles en los techos para producir electricidad con la luz del Sol.
¿Qué fuente de energía utiliza?
        </div>
      </div>

      <div class="important-box">
        ✅ Respuesta esperada:
        energía solar, una fuente renovable.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Práctica 2: impacto ambiental</h2>

      <div class="text-panel">
        <div class="text-title">Caso</div>
        <div class="text-body">
Una central eléctrica quema carbón para calentar agua y producir vapor.
¿Qué impacto ambiental puede generar?
        </div>
      </div>

      <div class="important-box">
        ✅ Respuesta esperada:
        emisión de gases contaminantes y contribución al cambio climático.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Práctica 3: transformación de energía</h2>

      <div class="text-panel">
        <div class="text-title">Caso</div>
        <div class="text-body">
En una central eólica, el viento mueve aspas conectadas a un generador.
¿Qué transformación ocurre?
        </div>
      </div>

      <div class="important-box">
        ✅ Respuesta esperada:
        energía del movimiento del viento → energía eléctrica.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Práctica 4: compara fuentes</h2>

      <div class="text-panel">
        <div class="text-title">Actividad</div>
        <div class="text-body">
Solar → renovable

Eólica → renovable

Carbón → no renovable

Petróleo → no renovable

Hidroeléctrica → renovable, pero puede afectar ecosistemas
        </div>
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Mini práctica CBTIS</h2>

      <div class="quiz-card">
        <div class="quiz-question">¿Qué fuente aprovecha el viento?</div>
        <div class="text-body">Respuesta: energía eólica.</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">¿Qué fuente aprovecha la luz del Sol?</div>
        <div class="text-body">Respuesta: energía solar.</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">¿Qué tipo de central suele emitir más contaminantes?</div>
        <div class="text-body">Respuesta: termoeléctrica con combustibles fósiles.</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">¿Por qué ahorrar electricidad ayuda al ambiente?</div>
        <div class="text-body">
Porque reduce la demanda de generación eléctrica y puede disminuir emisiones contaminantes.
        </div>
      </div>
    </div>

  </div>

  <div id="energia-evaluacion" class="sub-tab-content">

    <div class="quiz-card">
      <div class="quiz-question">1. ¿Qué es la energía eléctrica?</div>
      <label class="option-item"><input type="radio" name="energia-q1">Una forma de energía usada para hacer funcionar aparatos</label>
      <label class="option-item"><input type="radio" name="energia-q1">Un tipo de metal</label>
      <label class="option-item"><input type="radio" name="energia-q1">Una sustancia líquida</label>
      <label class="option-item"><input type="radio" name="energia-q1">Un gas contaminante</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">2. ¿Cuál es una fuente de energía renovable?</div>
      <label class="option-item"><input type="radio" name="energia-q2">Solar</label>
      <label class="option-item"><input type="radio" name="energia-q2">Carbón</label>
      <label class="option-item"><input type="radio" name="energia-q2">Petróleo</label>
      <label class="option-item"><input type="radio" name="energia-q2">Gasolina</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">3. ¿Qué fuente utiliza el viento para generar electricidad?</div>
      <label class="option-item"><input type="radio" name="energia-q3">Eólica</label>
      <label class="option-item"><input type="radio" name="energia-q3">Solar</label>
      <label class="option-item"><input type="radio" name="energia-q3">Termoeléctrica</label>
      <label class="option-item"><input type="radio" name="energia-q3">Nuclear</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">4. ¿Cuál fuente suele generar más emisiones contaminantes?</div>
      <label class="option-item"><input type="radio" name="energia-q4">Combustibles fósiles</label>
      <label class="option-item"><input type="radio" name="energia-q4">Solar</label>
      <label class="option-item"><input type="radio" name="energia-q4">Eólica</label>
      <label class="option-item"><input type="radio" name="energia-q4">Luz natural</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">5. ¿Qué central usa el movimiento del agua?</div>
      <label class="option-item"><input type="radio" name="energia-q5">Hidroeléctrica</label>
      <label class="option-item"><input type="radio" name="energia-q5">Solar</label>
      <label class="option-item"><input type="radio" name="energia-q5">Eólica</label>
      <label class="option-item"><input type="radio" name="energia-q5">Termoeléctrica</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">6. ¿Qué ocurre en un generador eléctrico?</div>
      <label class="option-item"><input type="radio" name="energia-q6">Se transforma movimiento en electricidad</label>
      <label class="option-item"><input type="radio" name="energia-q6">Se destruye la materia</label>
      <label class="option-item"><input type="radio" name="energia-q6">Se produce agua potable</label>
      <label class="option-item"><input type="radio" name="energia-q6">Se enfría el Sol</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">7. ¿Cuál acción ayuda a ahorrar electricidad?</div>
      <label class="option-item"><input type="radio" name="energia-q7">Apagar luces que no se usan</label>
      <label class="option-item"><input type="radio" name="energia-q7">Dejar cargadores conectados</label>
      <label class="option-item"><input type="radio" name="energia-q7">Encender todos los aparatos</label>
      <label class="option-item"><input type="radio" name="energia-q7">Usar luz artificial todo el día</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">8. ¿Por qué se consideran problemáticos los combustibles fósiles?</div>
      <label class="option-item"><input type="radio" name="energia-q8">Porque generan contaminantes y se agotan</label>
      <label class="option-item"><input type="radio" name="energia-q8">Porque son infinitos</label>
      <label class="option-item"><input type="radio" name="energia-q8">Porque no producen energía</label>
      <label class="option-item"><input type="radio" name="energia-q8">Porque son siempre limpios</label>
    </div>

  </div>

</div>
`;
}
