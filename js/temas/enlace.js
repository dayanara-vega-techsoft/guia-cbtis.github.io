function renderEnlace(){
return `
<div class="topic-shell">

  <div class="session-header">
    <h1>🔗 Enlace químico</h1>
    <p>Ciencias Naturales y Experimentales · CBTIS · Páginas 214 - 223</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" onclick="switchSubTab('enlace','teoria', this)">1.1 Teoría</button>
    <button class="tab-btn" onclick="switchSubTab('enlace','practica', this)">1.2 Práctica</button>
    <button class="tab-btn" onclick="switchSubTab('enlace','evaluacion', this)">1.3 Evaluación</button>
  </div>

  <div id="enlace-teoria" class="sub-tab-content active">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">DIVERSIDAD, CONTINUIDAD Y CAMBIO</span>
      <h2 class="section-h2">¿Qué es un enlace químico?</h2>

      <p>
        Un enlace químico es la fuerza que mantiene unidos a los átomos para formar sustancias.
        Los átomos no se unen al azar: se enlazan porque buscan ser más estables.
      </p>

      <p>
        Para entenderlo fácil, imagina que los electrones son piezas importantes para que un átomo
        esté “completo”. Algunos átomos pierden electrones, otros los ganan y otros los comparten.
        Esa interacción produce diferentes tipos de enlaces.
      </p>

      <div class="important-box">
        🎯 Idea CBTIS: los enlaces químicos dependen principalmente del comportamiento de los electrones.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Electrones de valencia</h2>

      <p>
        Los electrones de valencia son los electrones que están en el último nivel de energía de un átomo.
        Son los más importantes para formar enlaces químicos porque son los que participan al ganar,
        perder o compartir electrones.
      </p>

      <div class="text-panel">
        <div class="text-title">Ejemplo sencillo</div>
        <div class="text-body">
Si un átomo tiene pocos electrones de valencia, puede perderlos.
Si le faltan pocos para completar su último nivel, puede ganarlos.
Si dos átomos necesitan estabilidad, pueden compartir electrones.
        </div>
      </div>

      <div class="important-box">
        🔎 Los electrones de valencia explican por qué los átomos se enlazan.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Enlace iónico</h2>

      <p>
        El enlace iónico ocurre cuando un átomo transfiere electrones a otro átomo.
        Generalmente sucede entre un metal y un no metal.
      </p>

      <p>
        El metal pierde electrones y queda con carga positiva. El no metal gana electrones y queda con
        carga negativa. Como las cargas opuestas se atraen, los átomos quedan unidos.
      </p>

      <div class="text-panel">
        <div class="text-title">Ejemplo: sal de mesa</div>
        <div class="text-body">
Sodio (Na) + Cloro (Cl) → Cloruro de sodio (NaCl)

El sodio pierde un electrón.
El cloro gana un electrón.
Se forma una unión por atracción eléctrica.
        </div>
      </div>

      <div class="important-box">
        🎯 Clave CBTIS: iónico = transferencia de electrones.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Enlace covalente</h2>

      <p>
        El enlace covalente ocurre cuando dos átomos comparten electrones.
        Generalmente sucede entre no metales.
      </p>

      <p>
        En lugar de que uno entregue electrones y otro los reciba, ambos átomos cooperan compartiendo.
        Esto les permite alcanzar mayor estabilidad.
      </p>

      <div class="text-panel">
        <div class="text-title">Ejemplo: agua</div>
        <div class="text-body">
H₂O está formada por hidrógeno y oxígeno.

El oxígeno comparte electrones con los hidrógenos.
Por eso el agua tiene enlaces covalentes.
        </div>
      </div>

      <div class="important-box">
        🎯 Clave CBTIS: covalente = compartir electrones.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Enlace metálico</h2>

      <p>
        El enlace metálico ocurre entre átomos de metales. En este tipo de enlace, los electrones pueden
        moverse libremente entre muchos átomos.
      </p>

      <p>
        Esta movilidad de electrones explica por qué los metales conducen electricidad y calor,
        y por qué pueden moldearse sin romperse fácilmente.
      </p>

      <div class="text-panel">
        <div class="text-title">Ejemplos de sustancias con enlace metálico</div>
        <div class="text-body">
Cobre, hierro, aluminio, plata y oro.
        </div>
      </div>

      <div class="important-box">
        🎯 Clave CBTIS: metálico = electrones libres entre átomos metálicos.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Comparación rápida</h2>

      <div class="map-container">
        <div class="map-root">Tipos de enlace químico</div>

        <div class="map-branches">
          <div class="map-branch">
            <div class="branch-title">⚡ Iónico</div>
            <div class="map-leaf">Transfiere electrones.</div>
            <div class="map-leaf">Metal + no metal.</div>
            <div class="map-leaf">Ejemplo: NaCl.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🤝 Covalente</div>
            <div class="map-leaf">Comparte electrones.</div>
            <div class="map-leaf">No metal + no metal.</div>
            <div class="map-leaf">Ejemplo: H₂O, CO₂.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🔩 Metálico</div>
            <div class="map-leaf">Electrones libres.</div>
            <div class="map-leaf">Metal + metal.</div>
            <div class="map-leaf">Ejemplo: cobre, hierro.</div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div id="enlace-practica" class="sub-tab-content">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">PRÁCTICA GUIADA</span>
      <h2 class="section-h2">Práctica 1: identifica transferencia o compartición</h2>

      <div class="text-panel">
        <div class="text-title">Caso</div>
        <div class="text-body">
Un átomo de sodio pierde un electrón y un átomo de cloro lo gana.
¿Qué tipo de enlace se forma?
        </div>
      </div>

      <div class="important-box">
        ✅ Respuesta esperada: enlace iónico, porque hay transferencia de electrones.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Práctica 2: molécula de agua</h2>

      <div class="text-panel">
        <div class="text-title">Caso</div>
        <div class="text-body">
En una molécula de agua, el oxígeno y el hidrógeno comparten electrones.
¿Qué tipo de enlace es?
        </div>
      </div>

      <div class="important-box">
        ✅ Respuesta esperada: enlace covalente, porque los electrones se comparten.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Práctica 3: metales</h2>

      <div class="text-panel">
        <div class="text-title">Caso</div>
        <div class="text-body">
Un cable de cobre conduce electricidad porque sus electrones pueden moverse libremente.
¿Qué tipo de enlace explica esta propiedad?
        </div>
      </div>

      <div class="important-box">
        ✅ Respuesta esperada: enlace metálico.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Tabla mental para examen</h2>

      <div class="text-panel">
        <div class="text-body">
Si dice “pierde y gana electrones” → enlace iónico.

Si dice “comparten electrones” → enlace covalente.

Si dice “metal, conductor, maleable” → enlace metálico.
        </div>
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Mini práctica CBTIS</h2>

      <div class="quiz-card">
        <div class="quiz-question">¿Qué tipo de enlace se forma entre un metal y un no metal?</div>
        <div class="text-body">Respuesta: enlace iónico.</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">¿Qué tipo de enlace se forma cuando dos no metales comparten electrones?</div>
        <div class="text-body">Respuesta: enlace covalente.</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">¿Qué tipo de enlace explica la conductividad de los metales?</div>
        <div class="text-body">Respuesta: enlace metálico.</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">¿Por qué el NaCl es iónico?</div>
        <div class="text-body">Respuesta: porque el sodio transfiere un electrón al cloro.</div>
      </div>
    </div>

  </div>

  <div id="enlace-evaluacion" class="sub-tab-content">

    <div class="quiz-card">
      <div class="quiz-question">1. ¿Qué tipo de enlace implica transferencia de electrones?</div>
      <label class="option-item"><input type="radio" name="enlace-q1">Iónico</label>
      <label class="option-item"><input type="radio" name="enlace-q1">Covalente</label>
      <label class="option-item"><input type="radio" name="enlace-q1">Metálico</label>
      <label class="option-item"><input type="radio" name="enlace-q1">Mecánico</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">2. ¿Qué tipo de enlace implica compartir electrones?</div>
      <label class="option-item"><input type="radio" name="enlace-q2">Covalente</label>
      <label class="option-item"><input type="radio" name="enlace-q2">Iónico</label>
      <label class="option-item"><input type="radio" name="enlace-q2">Metálico</label>
      <label class="option-item"><input type="radio" name="enlace-q2">Nuclear</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">3. El cloruro de sodio, NaCl, es ejemplo de enlace:</div>
      <label class="option-item"><input type="radio" name="enlace-q3">Iónico</label>
      <label class="option-item"><input type="radio" name="enlace-q3">Covalente</label>
      <label class="option-item"><input type="radio" name="enlace-q3">Metálico</label>
      <label class="option-item"><input type="radio" name="enlace-q3">Orgánico</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">4. El agua, H₂O, presenta principalmente enlace:</div>
      <label class="option-item"><input type="radio" name="enlace-q4">Covalente</label>
      <label class="option-item"><input type="radio" name="enlace-q4">Iónico</label>
      <label class="option-item"><input type="radio" name="enlace-q4">Metálico</label>
      <label class="option-item"><input type="radio" name="enlace-q4">Magnético</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">5. ¿Qué tipo de enlace explica que el cobre conduzca electricidad?</div>
      <label class="option-item"><input type="radio" name="enlace-q5">Metálico</label>
      <label class="option-item"><input type="radio" name="enlace-q5">Covalente</label>
      <label class="option-item"><input type="radio" name="enlace-q5">Iónico</label>
      <label class="option-item"><input type="radio" name="enlace-q5">Molecular</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">6. Los electrones que participan en los enlaces se llaman:</div>
      <label class="option-item"><input type="radio" name="enlace-q6">Electrones de valencia</label>
      <label class="option-item"><input type="radio" name="enlace-q6">Neutrones</label>
      <label class="option-item"><input type="radio" name="enlace-q6">Protones internos</label>
      <label class="option-item"><input type="radio" name="enlace-q6">Núcleos</label>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">7. Generalmente, el enlace iónico se forma entre:</div>
      <label class="option-item"><input type="radio" name="enlace-q7">Un metal y un no metal</label>
      <label class="option-item"><input type="radio" name="enlace-q7">Dos no metales</label>
      <label class="option-item"><input type="radio" name="enlace-q7">Dos gases nobles</label>
      <label class="option-item"><input type="radio" name="enlace-q7">Dos líquidos</label>
    </div>

  </div>

</div>
`;
}
