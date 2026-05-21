function renderPropiedades(){
return `
<div class="topic-shell">

  <div class="session-header">
    <h1>🧪 Propiedades físicas de la materia</h1>
    <p>Ciencias Naturales y Experimentales · Páginas 187 - 194 · CBTIS Reforzado</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" onclick="switchSubTab('propiedades','teoria', this)">
      1.1 Teoría
    </button>

    <button class="tab-btn" onclick="switchSubTab('propiedades','practica', this)">
      1.2 Práctica
    </button>

    <button class="tab-btn" onclick="switchSubTab('propiedades','evaluacion', this)">
      1.3 Evaluación
    </button>
  </div>

  <!-- TEORÍA -->
  <div id="propiedades-teoria" class="sub-tab-content active">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">MATERIA, ENERGÍA E INTERACCIONES</span>
      <h2 class="section-h2">¿Qué es la materia?</h2>

      <p>
        La materia es todo aquello que tiene masa y ocupa un lugar en el espacio.
        Todo lo que puedes tocar, observar o medir está formado por materia:
        una mesa, el agua, el aire, una piedra, una planta, un lápiz e incluso tu cuerpo.
      </p>

      <p>
        Para estudiar la materia, la ciencia observa sus propiedades. Una propiedad es una
        característica que permite describir, comparar o identificar una sustancia o un objeto.
        Algunas propiedades se pueden observar directamente, como el color o el estado físico.
        Otras requieren medición, como la masa, el volumen, la temperatura o la densidad.
      </p>

      <div class="important-box">
        🎯 Idea clave CBTIS:
        Una propiedad física se puede observar o medir sin transformar la sustancia en otra diferente.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Propiedades físicas generales y específicas</h2>

      <p>
        Las propiedades físicas se dividen en generales y específicas. Las generales están presentes
        en cualquier tipo de materia, pero no siempre sirven para identificar una sustancia.
        Las específicas permiten distinguir una sustancia de otra con mayor precisión.
      </p>

      <div class="map-container">
        <div class="map-root">Propiedades físicas de la materia</div>

        <div class="map-branches">
          <div class="map-branch">
            <div class="branch-title">⚖️ Masa</div>
            <div class="map-leaf">
              Cantidad de materia que tiene un cuerpo. Se mide comúnmente en gramos o kilogramos.
            </div>
          </div>

          <div class="map-branch">
            <div class="branch-title">📦 Volumen</div>
            <div class="map-leaf">
              Espacio que ocupa un cuerpo. Se puede medir en litros, mililitros o centímetros cúbicos.
            </div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🧲 Densidad</div>
            <div class="map-leaf">
              Relación entre masa y volumen. Ayuda a explicar por qué algunos objetos flotan y otros se hunden.
            </div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🌡️ Temperatura</div>
            <div class="map-leaf">
              Indica qué tan caliente o frío está un cuerpo. Se mide con termómetro.
            </div>
          </div>
        </div>
      </div>

      <div class="text-panel">
        <div class="text-title">Ejemplo explicado: masa, volumen y densidad</div>
        <div class="text-body">Imagina una esponja grande y una piedra pequeña.

La esponja puede ocupar más espacio, pero pesa poco.
La piedra ocupa menos espacio, pero puede pesar más.

Eso ocurre porque la piedra tiene mayor densidad:
mucha masa concentrada en poco volumen.</div>
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Estados físicos de la materia</h2>

      <p>
        La materia puede presentarse principalmente en tres estados físicos: sólido, líquido y gaseoso.
        Estos estados dependen de la forma en que se encuentran organizadas y se mueven sus partículas.
      </p>

      <div class="map-container">
        <div class="map-root">Estados de la materia</div>

        <div class="map-branches">
          <div class="map-branch">
            <div class="branch-title">🧊 Sólido</div>
            <div class="map-leaf">
              Tiene forma y volumen definidos. Sus partículas están muy juntas.
            </div>
            <div class="map-leaf">
              Ejemplo: hielo, piedra, madera.
            </div>
          </div>

          <div class="map-branch">
            <div class="branch-title">💧 Líquido</div>
            <div class="map-leaf">
              Tiene volumen definido, pero toma la forma del recipiente.
            </div>
            <div class="map-leaf">
              Ejemplo: agua, aceite, leche.
            </div>
          </div>

          <div class="map-branch">
            <div class="branch-title">💨 Gas</div>
            <div class="map-leaf">
              No tiene forma ni volumen definidos. Se expande para ocupar el espacio disponible.
            </div>
            <div class="map-leaf">
              Ejemplo: aire, vapor de agua, gas LP.
            </div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🔥 Cambios físicos</div>
            <div class="map-leaf">
              La sustancia cambia de estado, pero sigue siendo la misma sustancia.
            </div>
            <div class="map-leaf">
              Ejemplo: hielo que se derrite sigue siendo agua.
            </div>
          </div>
        </div>
      </div>

      <div class="important-box">
        🔎 No confundas cambio físico con cambio químico.
        Si el hielo se derrite, sigue siendo agua. Si el papel se quema, se forman nuevas sustancias.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Propiedades extensivas e intensivas</h2>

      <p>
        Otra forma de clasificar las propiedades es distinguir entre extensivas e intensivas.
        Las extensivas dependen de la cantidad de materia; las intensivas no dependen de cuánta materia haya.
      </p>

      <div class="text-panel">
        <div class="text-title">Comparación</div>
        <div class="text-body">Propiedades extensivas:
- masa
- volumen
- longitud

Dependen de la cantidad de materia.

Propiedades intensivas:
- densidad
- temperatura
- color
- punto de ebullición

No dependen de la cantidad de materia.</div>
      </div>

      <div class="important-box">
        🎯 Tip CBTIS:
        Si al partir un objeto cambia el valor de la propiedad, probablemente es extensiva.
        Si la propiedad se mantiene, probablemente es intensiva.
      </div>
    </div>

  </div>

  <!-- PRÁCTICA -->
  <div id="propiedades-practica" class="sub-tab-content">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">PRÁCTICA GUIADA</span>
      <h2 class="section-h2">Caso 1: la piedra y la esponja</h2>

      <div class="text-panel">
        <div class="text-title">Situación</div>
        <div class="text-body">Una esponja grande ocupa mucho espacio, pero pesa poco.
Una piedra pequeña ocupa menos espacio, pero pesa más.

Pregunta:
¿Cuál de los dos objetos tiene mayor densidad?</div>
      </div>

      <p>
        Para responder, no te fijes solo en el tamaño. La densidad depende de la relación entre
        masa y volumen. Si un objeto tiene mucha masa en poco volumen, tiene mayor densidad.
      </p>

      <div class="important-box">
        Respuesta esperada: la piedra tiene mayor densidad porque concentra más masa en menos espacio.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Caso 2: hielo que se derrite</h2>

      <div class="text-panel">
        <div class="text-title">Situación</div>
        <div class="text-body">Un cubo de hielo se deja al sol. Después de unos minutos se convierte en agua líquida.

Pregunta:
¿Ocurrió un cambio físico o químico?</div>
      </div>

      <p>
        El hielo cambió de estado sólido a líquido, pero sigue siendo agua. No se formó una sustancia nueva.
        Por eso es un cambio físico.
      </p>

      <div class="important-box">
        Respuesta esperada: cambio físico.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Caso 3: clasifica propiedades</h2>

      <div class="text-panel">
        <div class="text-title">Actividad</div>
        <div class="text-body">Clasifica cada propiedad como extensiva o intensiva:

1. Masa
2. Volumen
3. Densidad
4. Temperatura
5. Color
6. Longitud</div>
      </div>

      <div class="text-panel">
        <div class="text-title">Solución guiada</div>
        <div class="text-body">Extensivas:
- masa
- volumen
- longitud

Intensivas:
- densidad
- temperatura
- color</div>
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Mini práctica CBTIS</h2>

      <div class="quiz-card">
        <div class="quiz-question">
          Un líquido toma la forma del vaso, pero conserva su volumen. ¿Qué estado físico representa?
        </div>
        <div class="text-body">
          Respuesta esperada: líquido.
        </div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">
          Si una sustancia se mide sin cambiar su composición, ¿qué tipo de propiedad se está observando?
        </div>
        <div class="text-body">
          Respuesta esperada: propiedad física.
        </div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">
          Si un objeto tiene mucha masa en poco volumen, ¿qué propiedad física es alta?
        </div>
        <div class="text-body">
          Respuesta esperada: densidad.
        </div>
      </div>
    </div>

  </div>

  <!-- EVALUACIÓN -->
  <div id="propiedades-evaluacion" class="sub-tab-content">

    <div class="quiz-card">
      <div class="quiz-question">
        1. ¿Cuál es una propiedad física específica?
      </div>

      <label class="option-item">
        <input type="radio" name="propiedades-q1" value="a">
        Densidad
      </label>

      <label class="option-item">
        <input type="radio" name="propiedades-q1" value="b">
        Combustión
      </label>

      <label class="option-item">
        <input type="radio" name="propiedades-q1" value="c">
        Oxidación
      </label>

      <label class="option-item">
        <input type="radio" name="propiedades-q1" value="d">
        Corrosión
      </label>

      <button class="btn-verify" onclick="verifyPropiedades('propiedades-q1','a','feedback-propiedades-q1','La densidad es una propiedad física que se mide sin transformar la sustancia.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-propiedades-q1"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">
        2. ¿Qué propiedad indica cuánto espacio ocupa un objeto?
      </div>

      <label class="option-item">
        <input type="radio" name="propiedades-q2" value="a">
        Volumen
      </label>

      <label class="option-item">
        <input type="radio" name="propiedades-q2" value="b">
        Masa
      </label>

      <label class="option-item">
        <input type="radio" name="propiedades-q2" value="c">
        Temperatura
      </label>

      <label class="option-item">
        <input type="radio" name="propiedades-q2" value="d">
        Color
      </label>

      <button class="btn-verify" onclick="verifyPropiedades('propiedades-q2','a','feedback-propiedades-q2','El volumen mide el espacio que ocupa un cuerpo.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-propiedades-q2"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">
        3. Un objeto tiene mucha masa en poco volumen. ¿Qué propiedad presenta en valor alto?
      </div>

      <label class="option-item">
        <input type="radio" name="propiedades-q3" value="a">
        Densidad
      </label>

      <label class="option-item">
        <input type="radio" name="propiedades-q3" value="b">
        Elasticidad
      </label>

      <label class="option-item">
        <input type="radio" name="propiedades-q3" value="c">
        Solubilidad
      </label>

      <label class="option-item">
        <input type="radio" name="propiedades-q3" value="d">
        Transparencia
      </label>

      <button class="btn-verify" onclick="verifyPropiedades('propiedades-q3','a','feedback-propiedades-q3','Mucha masa en poco volumen significa mayor densidad.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-propiedades-q3"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">
        4. ¿Qué estado de la materia tiene forma y volumen definidos?
      </div>

      <label class="option-item">
        <input type="radio" name="propiedades-q4" value="a">
        Sólido
      </label>

      <label class="option-item">
        <input type="radio" name="propiedades-q4" value="b">
        Líquido
      </label>

      <label class="option-item">
        <input type="radio" name="propiedades-q4" value="c">
        Gas
      </label>

      <label class="option-item">
        <input type="radio" name="propiedades-q4" value="d">
        Vapor
      </label>

      <button class="btn-verify" onclick="verifyPropiedades('propiedades-q4','a','feedback-propiedades-q4','Los sólidos tienen forma y volumen definidos.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-propiedades-q4"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">
        5. Cuando el hielo se derrite, ocurre:
      </div>

      <label class="option-item">
        <input type="radio" name="propiedades-q5" value="a">
        Un cambio físico
      </label>

      <label class="option-item">
        <input type="radio" name="propiedades-q5" value="b">
        Un cambio químico
      </label>

      <label class="option-item">
        <input type="radio" name="propiedades-q5" value="c">
        Una combustión
      </label>

      <label class="option-item">
        <input type="radio" name="propiedades-q5" value="d">
        Una oxidación
      </label>

      <button class="btn-verify" onclick="verifyPropiedades('propiedades-q5','a','feedback-propiedades-q5','El hielo sigue siendo agua; solo cambió de estado.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-propiedades-q5"></div>
    </div>

  </div>

</div>
`;
}

function verifyPropiedades(name, correct, feedbackId, explanation){
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
    feedback.innerHTML = "❌ Revisa el concepto. " + explanation;
  }
}
