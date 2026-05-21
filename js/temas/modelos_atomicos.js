function renderModelos(){
return `
<div class="topic-shell">

  <div class="session-header">
    <h1>🔬 Modelos atómicos y enlace químico</h1>
    <p>Ciencias Naturales y Experimentales · CBTIS · Páginas 204 - 213</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" onclick="switchSubTab('modelos','teoria', this)">1.1 Teoría</button>
    <button class="tab-btn" onclick="switchSubTab('modelos','practica', this)">1.2 Práctica</button>
    <button class="tab-btn" onclick="switchSubTab('modelos','evaluacion', this)">1.3 Evaluación</button>
  </div>

  <div id="modelos-teoria" class="sub-tab-content active">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">DIVERSIDAD, CONTINUIDAD Y CAMBIO</span>
      <h2 class="section-h2">¿Qué es un átomo?</h2>
      <p>
        Toda la materia está formada por partículas extremadamente pequeñas llamadas átomos.
        Los átomos forman todo lo que existe: agua, aire, metales, plantas, animales y nuestro cuerpo.
      </p>
      <p>
        Como no podemos observar un átomo a simple vista, los científicos crearon modelos atómicos:
        representaciones que explican cómo está formado el átomo y cómo se comporta.
      </p>
      <div class="important-box">
        🎯 Los modelos atómicos cambiaron con nuevos experimentos y descubrimientos.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Modelo de Dalton</h2>
      <p>
        Dalton propuso que el átomo era una esfera sólida, pequeña e indivisible.
        Para él, los átomos eran como pequeñas canicas que formaban toda la materia.
      </p>
      <ul>
        <li>La materia está formada por átomos.</li>
        <li>Los átomos de un mismo elemento son iguales.</li>
        <li>Los átomos no podían dividirse.</li>
      </ul>
      <div class="important-box">
        Clave CBTIS: Dalton = esfera indivisible.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Modelo de Thomson</h2>
      <p>
        Thomson descubrió el electrón. Esto demostró que el átomo no era indivisible,
        porque tenía partículas más pequeñas en su interior.
      </p>
      <p>
        Su modelo se conoce como “pastel de pasas”: una masa positiva con electrones negativos incrustados.
      </p>
      <div class="important-box">
        Clave CBTIS: Thomson = electrón / pastel de pasas.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Modelo de Rutherford</h2>
      <p>
        Rutherford descubrió que el átomo tiene un núcleo central pequeño, denso y positivo.
        También concluyó que la mayor parte del átomo es espacio vacío.
      </p>
      <ul>
        <li>El núcleo está al centro.</li>
        <li>El núcleo tiene carga positiva.</li>
        <li>Los electrones se encuentran alrededor.</li>
      </ul>
      <div class="important-box">
        Clave CBTIS: Rutherford = núcleo.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Modelo de Bohr</h2>
      <p>
        Bohr explicó que los electrones se mueven alrededor del núcleo en niveles de energía.
        Esos niveles son como “pisos” donde los electrones pueden ubicarse.
      </p>
      <div class="important-box">
        Clave CBTIS: Bohr = niveles de energía.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Partículas subatómicas</h2>
      <div class="map-container">
        <div class="map-root">Partículas del átomo</div>
        <div class="map-branches">
          <div class="map-branch">
            <div class="branch-title">➕ Protón</div>
            <div class="map-leaf">Carga positiva.</div>
            <div class="map-leaf">Está en el núcleo.</div>
          </div>
          <div class="map-branch">
            <div class="branch-title">➖ Electrón</div>
            <div class="map-leaf">Carga negativa.</div>
            <div class="map-leaf">Se mueve alrededor del núcleo.</div>
          </div>
          <div class="map-branch">
            <div class="branch-title">⚪ Neutrón</div>
            <div class="map-leaf">Sin carga eléctrica.</div>
            <div class="map-leaf">Está en el núcleo.</div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div id="modelos-practica" class="sub-tab-content">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">PRÁCTICA GUIADA</span>
      <h2 class="section-h2">Identifica el modelo</h2>
      <div class="text-panel">
        <div class="text-title">Caso 1</div>
        <div class="text-body">
Un modelo dice que el átomo tiene un núcleo pequeño y positivo.
¿Qué científico lo propuso?
        </div>
      </div>
      <div class="important-box">✅ Respuesta esperada: Rutherford.</div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Niveles de energía</h2>
      <div class="text-panel">
        <div class="text-title">Caso 2</div>
        <div class="text-body">
Un modelo dice que los electrones giran alrededor del núcleo en niveles de energía.
¿Qué científico lo propuso?
        </div>
      </div>
      <div class="important-box">✅ Respuesta esperada: Bohr.</div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Relación rápida</h2>
      <div class="text-panel">
        <div class="text-body">
Dalton → esfera indivisible

Thomson → electrón / pastel de pasas

Rutherford → núcleo

Bohr → niveles de energía
        </div>
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Mini práctica CBTIS</h2>
      <div class="quiz-card">
        <div class="quiz-question">¿Qué partícula tiene carga negativa?</div>
        <div class="text-body">Respuesta: electrón.</div>
      </div>
      <div class="quiz-card">
        <div class="quiz-question">¿Qué partículas forman el núcleo?</div>
        <div class="text-body">Respuesta: protones y neutrones.</div>
      </div>
      <div class="quiz-card">
        <div class="quiz-question">¿Qué científico descubrió el electrón?</div>
        <div class="text-body">Respuesta: Thomson.</div>
      </div>
      <div class="quiz-card">
        <div class="quiz-question">¿Qué científico propuso niveles de energía?</div>
        <div class="text-body">Respuesta: Bohr.</div>
      </div>
    </div>

  </div>

  <div id="modelos-evaluacion" class="sub-tab-content">

    <div class="quiz-card">
      <div class="quiz-question">1. ¿Quién propuso el átomo como esfera indivisible?</div>
      <label class="option-item"><input type="radio" name="modelos-q1">Dalton</label>
      <label class="option-item"><input type="radio" name="modelos-q1">Bohr</label>
      <label class="option-item"><input type="radio" name="modelos-q1">Rutherford</label>
      <label class="option-item"><input type="radio" name="modelos-q1">Thomson</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">2. ¿Quién descubrió el electrón?</div>
      <label class="option-item"><input type="radio" name="modelos-q2">Thomson</label>
      <label class="option-item"><input type="radio" name="modelos-q2">Dalton</label>
      <label class="option-item"><input type="radio" name="modelos-q2">Rutherford</label>
      <label class="option-item"><input type="radio" name="modelos-q2">Bohr</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">3. ¿Qué científico descubrió el núcleo del átomo?</div>
      <label class="option-item"><input type="radio" name="modelos-q3">Rutherford</label>
      <label class="option-item"><input type="radio" name="modelos-q3">Dalton</label>
      <label class="option-item"><input type="radio" name="modelos-q3">Bohr</label>
      <label class="option-item"><input type="radio" name="modelos-q3">Thomson</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">4. ¿Qué modelo propuso niveles de energía?</div>
      <label class="option-item"><input type="radio" name="modelos-q4">Bohr</label>
      <label class="option-item"><input type="radio" name="modelos-q4">Rutherford</label>
      <label class="option-item"><input type="radio" name="modelos-q4">Dalton</label>
      <label class="option-item"><input type="radio" name="modelos-q4">Thomson</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">5. ¿Qué partícula tiene carga negativa?</div>
      <label class="option-item"><input type="radio" name="modelos-q5">Electrón</label>
      <label class="option-item"><input type="radio" name="modelos-q5">Protón</label>
      <label class="option-item"><input type="radio" name="modelos-q5">Neutrón</label>
      <label class="option-item"><input type="radio" name="modelos-q5">Núcleo</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">6. ¿Qué partículas se encuentran en el núcleo?</div>
      <label class="option-item"><input type="radio" name="modelos-q6">Protones y neutrones</label>
      <label class="option-item"><input type="radio" name="modelos-q6">Electrones y protones</label>
      <label class="option-item"><input type="radio" name="modelos-q6">Electrones y neutrones</label>
      <label class="option-item"><input type="radio" name="modelos-q6">Solo electrones</label>
    </div>

  </div>

</div>
`;
}
