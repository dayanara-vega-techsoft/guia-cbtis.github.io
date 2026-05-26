function renderCaracteristicas(){
return `
<style>
.answer-area{
  width:100%;
  margin-top:10px;
  margin-bottom:14px;
  padding:14px;
  border-radius:14px;
  border:1px solid rgba(255,255,255,.12);
  background:rgba(255,255,255,.06);
  color:#cbd5e1;
  resize:vertical;
  font-family:inherit;
}
.answer-area::placeholder{color:rgba(203,213,225,.65);}
.matching-row,.vf-row{
  display:grid;
  grid-template-columns:1.2fr 1fr;
  gap:12px;
  align-items:center;
  margin-bottom:12px;
}
.matching-concept{
  background:rgba(255,255,255,.06);
  color:#cbd5e1;
  border-radius:14px;
  padding:14px;
  border:1px solid rgba(255,255,255,.08);
}
.matching-select{
  width:100%;
  padding:14px;
  border-radius:14px;
  border:1px solid rgba(255,255,255,.12);
  background:#111827;
  color:#cbd5e1;
}
@media(max-width:900px){
  .matching-row,.vf-row{grid-template-columns:1fr;}
}
</style>

<div class="topic-shell">

  <div class="session-header">
    <h1>📊 Características y elementos de los tipos de texto</h1>
    <p>Sesión 1 · Páginas 3 - 11</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">1.1 Teoría</button>
    <button class="tab-btn" id="btn-lecturas" onclick="switchTab('lecturas')">1.2 Lecturas prácticas</button>
    <button class="tab-btn" id="btn-evaluacion" onclick="switchTab('evaluacion')">1.3 Taller de evaluación</button>
  </div>

  <!-- =========================
       TEORÍA
  ========================== -->

  <div class="sub-tab-content active" id="teoria">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">🔵 1. Introducción</span>
      <h2 class="section-h2">Los textos están en todos lados</h2>

      <p>
        Todos los días lees diferentes tipos de textos aunque no lo notes.
        Cuando ves un mensaje, una noticia, una publicación, una tabla,
        una receta, un mapa o una reseña, estás interpretando información.
      </p>

      <p>
        Lo importante no es solo leer, sino entender qué quiere hacer ese texto:
        contar algo, explicar información, convencerte o mostrar datos.
      </p>

      <div class="important-box">
        💡 Piensa en esto: no se lee igual una historia de terror que una tabla
        de horarios, una reseña de comida o una gráfica de resultados.
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">🔵 2. Concepto base</span>
      <h2 class="section-h2">¿Qué son los tipos de texto?</h2>

      <p>
        Los tipos de texto son diferentes formas de organizar y comunicar información.
        Cada texto tiene una intención, es decir, una razón por la que fue escrito.
      </p>

      <div class="important-box">
        <strong>Idea clave:</strong> un texto puede servir para informar,
        narrar, convencer, explicar o expresar emociones.
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">🔵 3. Páginas 5 - 6</span>
      <h2 class="section-h2">Textos continuos y discontinuos</h2>

      <p>
        Los textos pueden presentarse de dos formas principales: como información
        escrita en párrafos o como información organizada de manera visual.
      </p>

      <div class="important-box">
        🎯 En los exámenes CBTIS y EDIEMS es común encontrar ambos tipos:
        lecturas completas y también tablas, gráficas, mapas o formularios.
      </div>

      <div class="map-container">
        <div class="map-title">Diferencia principal</div>

        <div class="map-branches">
          <div class="map-branch">
            <div class="branch-title">📖 Textos continuos</div>
            <div class="map-leaf">Están escritos en oraciones y párrafos.</div>
            <div class="map-leaf">Se leen de principio a fin.</div>
            <div class="map-leaf">Desarrollan ideas completas.</div>
            <div class="map-leaf">Ejemplos: cuentos, novelas, noticias, artículos y ensayos.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">📊 Textos discontinuos</div>
            <div class="map-leaf">Organizan información de forma visual.</div>
            <div class="map-leaf">No siempre se leen en orden lineal.</div>
            <div class="map-leaf">Ayudan a localizar datos rápido.</div>
            <div class="map-leaf">Ejemplos: tablas, mapas, diagramas, formularios e infografías.</div>
          </div>
        </div>
      </div>

      <h3 class="section-h3">📖 ¿Qué significa texto continuo?</h3>
      <p>
        Un texto continuo es como una historia o una explicación escrita en párrafos.
        Lo lees siguiendo una secuencia: primero una idea, luego otra y después otra.
      </p>

      <div class="text-panel">
        <div class="text-title">Ejemplo sencillo</div>
        <div class="text-body">El cambio climático afecta a diferentes regiones del planeta. Sus consecuencias pueden verse en sequías, incendios, lluvias intensas y pérdida de especies.</div>
      </div>

      <h3 class="section-h3">📊 ¿Qué significa texto discontinuo?</h3>
      <p>
        Un texto discontinuo no depende de párrafos largos. Presenta información
        acomodada en partes, como si fuera una tabla, un mapa, una gráfica o una ficha.
      </p>

      <div class="text-panel">
        <div class="text-title">Ejemplo sencillo</div>
        <div class="text-body">Una tabla que muestra cuántos alumnos prefieren Matemáticas, Ciencias o Comprensión Lectora.</div>
      </div>

      <div class="important-box">
        🧠 Tip rápido: si tienes que seguir párrafos, es continuo. Si tienes que observar
        datos, columnas, símbolos o imágenes, es discontinuo.
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">🔵 4. Tipos principales</span>
      <h2 class="section-h2">Características explicadas fácil</h2>

      <h3 class="section-h3">📖 Texto narrativo</h3>
      <p>
        Cuenta una historia o una experiencia. Normalmente tiene personajes,
        acciones, lugar, tiempo, inicio, desarrollo y final.
      </p>
      <div class="important-box">
        Ejemplo cotidiano: cuando alguien te cuenta “ayer me pasó algo bien raro...”.
      </div>

      <h3 class="section-h3">🎭 Texto literario</h3>
      <p>
        Usa el lenguaje de forma creativa o artística. Puede transmitir emociones,
        imaginar situaciones o jugar con las palabras.
      </p>
      <div class="important-box">
        Ejemplos: poemas, canciones, cuentos, novelas y obras de teatro.
      </div>

      <h3 class="section-h3">📰 Texto expositivo</h3>
      <p>
        Explica información de manera clara y objetiva. Su propósito principal
        es informar, no convencer.
      </p>
      <div class="important-box">
        Ejemplo cotidiano: un artículo que explica qué es el cambio climático.
      </div>

      <h3 class="section-h3">⚔️ Texto argumentativo</h3>
      <p>
        Busca convencer al lector usando razones, ejemplos, opiniones o datos.
        No solo informa: intenta que pienses o actúes de cierta manera.
      </p>
      <div class="important-box">
        Ejemplo cotidiano: una reseña que recomienda un restaurante, una película
        o un celular porque “vale la pena”.
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">🔵 5. Cuadro comparativo</span>
      <h2 class="section-h2">Resumen para estudiar rápido</h2>

      <div class="map-container">
        <div class="map-title">Función de cada texto</div>

        <div class="map-branches">
          <div class="map-branch">
            <div class="branch-title">📖 Narrativo</div>
            <div class="map-leaf">Función: contar una historia.</div>
            <div class="map-leaf">Ejemplo: cuento o anécdota.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">📰 Expositivo</div>
            <div class="map-leaf">Función: explicar información.</div>
            <div class="map-leaf">Ejemplo: artículo informativo.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">⚔️ Argumentativo</div>
            <div class="map-leaf">Función: convencer.</div>
            <div class="map-leaf">Ejemplo: reseña o anuncio.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🎭 Literario</div>
            <div class="map-leaf">Función: expresar emociones o creatividad.</div>
            <div class="map-leaf">Ejemplo: poema, canción o novela.</div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- =========================
       LECTURAS PRÁCTICAS
  ========================== -->

  <div class="sub-tab-content" id="lecturas">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">📘 Lectura práctica 1 · Páginas 3 - 4</span>
      <h2 class="section-h2">🍕 Los sabores de la Nona en Olivia Restaurante</h2>

      <div class="important-box">
        Antes de leer: fíjate si el texto solo informa o si intenta convencerte de visitar el restaurante.
      </div>

      <div class="text-panel">
        <div class="text-title">Lectura adaptada</div>
        <div class="text-body">Olivia es un restaurante italiano ubicado en la colonia Narvarte. Su propuesta combina un ambiente cómodo, comida tradicional italiana y precios accesibles.

El texto recomienda visitar el restaurante y probar algunos platillos como la pizza Olivia, la pizza de pera y gorgonzola, la pasta Liguine Amatriciana y la lasaña.

También menciona postres como tiramisú, panna cotta y tartufo. Además, destaca que el personal conoce bien la carta y puede recomendar vino o cerveza para acompañar los alimentos.

Por la forma en que presenta cualidades positivas y recomendaciones, este texto busca convencer al lector de visitar Olivia Restaurante.</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">Pregunta guiada: ¿Qué intención tiene principalmente la lectura?</div>

        <label class="option-item"><input type="radio" name="lectura1" value="a"> A) Contar una historia ficticia</label>
        <label class="option-item"><input type="radio" name="lectura1" value="b"> B) Convencer al lector de visitar el restaurante</label>
        <label class="option-item"><input type="radio" name="lectura1" value="c"> C) Explicar una receta paso a paso</label>
        <label class="option-item"><input type="radio" name="lectura1" value="d"> D) Presentar una tabla de precios</label>

        <button class="btn-verify" onclick="verifyLectura1()">Revisar respuesta</button>
        <div class="feedback" id="feedback-lectura1"></div>
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">🌎 Lectura práctica 2 · Páginas 8 - 9</span>
      <h2 class="section-h2">🔥 El cambio climático</h2>

      <div class="important-box">
        Mientras lees: identifica causa, consecuencia y propósito del texto.
      </div>

      <div class="text-panel">
        <div class="text-title">Lectura adaptada</div>
        <div class="text-body">El cambio climático es una problemática ambiental relacionada con el aumento de la temperatura del planeta.

Una de sus causas principales es el incremento de gases de efecto invernadero en la atmósfera, especialmente por actividades humanas como el uso de combustibles fósiles.

Entre sus consecuencias se encuentran sequías, incendios, lluvias intensas, pérdida de especies y afectaciones a la vida de las personas.

Este texto no cuenta una historia ni busca vender algo. Su propósito principal es explicar una problemática y ayudar al lector a comprender sus causas y consecuencias.</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">Pregunta guiada: ¿Qué tipo de texto es principalmente “El cambio climático”?</div>

        <label class="option-item"><input type="radio" name="lectura2" value="a"> A) Narrativo</label>
        <label class="option-item"><input type="radio" name="lectura2" value="b"> B) Literario</label>
        <label class="option-item"><input type="radio" name="lectura2" value="c"> C) Expositivo</label>
        <label class="option-item"><input type="radio" name="lectura2" value="d"> D) Dramático</label>

        <button class="btn-verify" onclick="verifyLectura2()">Revisar respuesta</button>
        <div class="feedback" id="feedback-lectura2"></div>
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">📊 Lectura práctica 3 · Páginas 5 - 6</span>
      <h2 class="section-h2">📈 Ejemplo de texto discontinuo</h2>

      <p>
        Observa la siguiente información. No está escrita como un párrafo largo,
        sino organizada en datos rápidos.
      </p>

      <div class="text-panel">
        <div class="text-title">Preferencias de estudio de un grupo</div>
        <div class="text-body">📘 Comprensión lectora → 35 alumnos
➗ Matemáticas → 28 alumnos
🧪 Ciencias → 22 alumnos
🌎 Entorno social → 15 alumnos</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">Pregunta guiada: ¿Por qué este ejemplo es un texto discontinuo?</div>

        <label class="option-item"><input type="radio" name="lectura3" value="a"> A) Porque tiene personajes</label>
        <label class="option-item"><input type="radio" name="lectura3" value="b"> B) Porque organiza datos de forma visual</label>
        <label class="option-item"><input type="radio" name="lectura3" value="c"> C) Porque cuenta una historia</label>
        <label class="option-item"><input type="radio" name="lectura3" value="d"> D) Porque usa rimas</label>

        <button class="btn-verify" onclick="verifyLectura3()">Revisar respuesta</button>
        <div class="feedback" id="feedback-lectura3"></div>
      </div>
    </div>

  </div>

  <!-- =========================
       TALLER DE EVALUACIÓN
  ========================== -->

  <div class="sub-tab-content" id="evaluacion">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">📝 Taller práctico · Páginas 3 - 11</span>
      <h2 class="section-h2">Evaluación: Características y tipos de texto</h2>

      <p>
        Responde las preguntas tipo CBTIS / EDIEMS.
        Cada pregunta tiene 4 opciones y una sola respuesta correcta.
      </p>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">1. ¿Cuál es la función principal de un texto argumentativo?</div>

      <label class="option-item"><input type="radio" name="q1" value="a"> A) Contar una historia con personajes</label>
      <label class="option-item"><input type="radio" name="q1" value="b"> B) Convencer al lector usando razones</label>
      <label class="option-item"><input type="radio" name="q1" value="c"> C) Presentar datos en una tabla</label>
      <label class="option-item"><input type="radio" name="q1" value="d"> D) Expresar emociones con lenguaje artístico</label>

      <button class="btn-verify" onclick="verifyQ1()">Revisar respuesta</button>
      <div class="feedback" id="feedback-q1"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">2. ¿Cuál de las siguientes opciones es un texto discontinuo?</div>

      <label class="option-item"><input type="radio" name="q2" value="a"> A) Una novela</label>
      <label class="option-item"><input type="radio" name="q2" value="b"> B) Un cuento</label>
      <label class="option-item"><input type="radio" name="q2" value="c"> C) Una tabla estadística</label>
      <label class="option-item"><input type="radio" name="q2" value="d"> D) Un ensayo</label>

      <button class="btn-verify" onclick="verifyQ2()">Revisar respuesta</button>
      <div class="feedback" id="feedback-q2"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">3. Un texto que explica causas y consecuencias del cambio climático es principalmente:</div>

      <label class="option-item"><input type="radio" name="q3" value="a"> A) Expositivo</label>
      <label class="option-item"><input type="radio" name="q3" value="b"> B) Narrativo</label>
      <label class="option-item"><input type="radio" name="q3" value="c"> C) Literario</label>
      <label class="option-item"><input type="radio" name="q3" value="d"> D) Publicitario</label>

      <button class="btn-verify" onclick="verifyQ3()">Revisar respuesta</button>
      <div class="feedback" id="feedback-q3"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">4. Si un texto tiene personajes, acciones, inicio, desarrollo y desenlace, probablemente es:</div>

      <label class="option-item"><input type="radio" name="q4" value="a"> A) Narrativo</label>
      <label class="option-item"><input type="radio" name="q4" value="b"> B) Discontinuo</label>
      <label class="option-item"><input type="radio" name="q4" value="c"> C) Formulario</label>
      <label class="option-item"><input type="radio" name="q4" value="d"> D) Tabla</label>

      <button class="btn-verify" onclick="verifyQ4()">Revisar respuesta</button>
      <div class="feedback" id="feedback-q4"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">5. ¿Por qué la lectura de Olivia Restaurante puede considerarse argumentativa?</div>

      <label class="option-item"><input type="radio" name="q5" value="a"> A) Porque presenta personajes fantásticos</label>
      <label class="option-item"><input type="radio" name="q5" value="b"> B) Porque recomienda el lugar y usa razones positivas</label>
      <label class="option-item"><input type="radio" name="q5" value="c"> C) Porque está organizada como mapa</label>
      <label class="option-item"><input type="radio" name="q5" value="d"> D) Porque no tiene intención comunicativa</label>

      <button class="btn-verify" onclick="verifyQ5()">Revisar respuesta</button>
      <div class="feedback" id="feedback-q5"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">6. ¿Cuál es la diferencia principal entre texto continuo y discontinuo?</div>

      <label class="option-item"><input type="radio" name="q6" value="a"> A) El continuo usa párrafos; el discontinuo organiza datos visualmente</label>
      <label class="option-item"><input type="radio" name="q6" value="b"> B) El continuo siempre es falso; el discontinuo siempre es verdadero</label>
      <label class="option-item"><input type="radio" name="q6" value="c"> C) El continuo solo usa imágenes; el discontinuo solo usa novelas</label>
      <label class="option-item"><input type="radio" name="q6" value="d"> D) No existe diferencia entre ellos</label>

      <button class="btn-verify" onclick="verifyQ6()">Revisar respuesta</button>
      <div class="feedback" id="feedback-q6"></div>
    </div>

  </div>

</div>`;
}

/* =========================
   FUNCIONES DE REVISIÓN
========================== */

function verifyLectura1(){
  verifySimple("lectura1", "b", "feedback-lectura1", "✅ Correcto. La lectura recomienda el restaurante y busca convencer al lector.");
}

function verifyLectura2(){
  verifySimple("lectura2", "c", "feedback-lectura2", "✅ Correcto. Es expositivo porque explica una problemática y sus consecuencias.");
}

function verifyLectura3(){
  verifySimple("lectura3", "b", "feedback-lectura3", "✅ Correcto. Es discontinuo porque organiza datos de forma visual y rápida.");
}

function verifyQ1(){
  verifySimple("q1", "b", "feedback-q1", "✅ Correcto. El texto argumentativo busca convencer usando razones.");
}

function verifyQ2(){
  verifySimple("q2", "c", "feedback-q2", "✅ Correcto. Una tabla estadística es un texto discontinuo.");
}

function verifyQ3(){
  verifySimple("q3", "a", "feedback-q3", "✅ Correcto. El texto expositivo explica información de manera clara.");
}

function verifyQ4(){
  verifySimple("q4", "a", "feedback-q4", "✅ Correcto. El texto narrativo cuenta sucesos con personajes y estructura.");
}

function verifyQ5(){
  verifySimple("q5", "b", "feedback-q5", "✅ Correcto. Recomienda el lugar y usa argumentos positivos.");
}

function verifyQ6(){
  verifySimple("q6", "a", "feedback-q6", "✅ Correcto. El continuo usa párrafos; el discontinuo organiza datos visualmente.");
}

function verifySimple(name, correct, feedbackId, correctMessage){
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  const feedback = document.getElementById(feedbackId);

  if(!selected){
    alert("Selecciona una opción.");
    return;
  }

  if(selected.value === correct){
    feedback.className = "feedback correct";
    feedback.innerHTML = correctMessage;
  }else{
    feedback.className = "feedback incorrect";
    feedback.innerHTML = "❌ Respuesta incorrecta. Revisa la explicación del tema e inténtalo de nuevo.";
  }
}
