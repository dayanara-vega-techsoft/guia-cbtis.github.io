function renderAnalisis(){
return `
<div class="topic-shell">

  <div class="session-header">
    <h1>🔍 Análisis e interpretación de diferentes textos</h1>
    <p>Tema 3 · Páginas 60 - 63</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">3.1 Teoría</button>
    <button class="tab-btn" id="btn-lecturas" onclick="switchTab('lecturas')">3.2 Lecturas prácticas</button>
    <button class="tab-btn" id="btn-evaluacion" onclick="switchTab('evaluacion')">3.3 Taller de evaluación</button>
  </div>

  <!-- =========================
       TEORÍA
  ========================== -->

  <div class="sub-tab-content active" id="teoria">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">🎯 Resultado de aprendizaje</span>
      <h2 class="section-h2">¿Qué vas a aprender?</h2>

      <p>
        En este tema aprenderás a reconocer argumentos basados en hechos,
        datos u opiniones.
      </p>

      <p>
        Esto es importante porque en los exámenes CBTIS y EDIEMS no solo debes leer,
        también debes interpretar si una idea está apoyada por información comprobable
        o si solo expresa un punto de vista.
      </p>

      <div class="important-box">
        💡 Idea sencilla: analizar un texto significa leer con atención para descubrir
        qué dice, qué intención tiene y con qué tipo de información intenta convencer.
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">🔵 1. Hechos, datos y opiniones</span>
      <h2 class="section-h2">Diferencias clave</h2>

      <div class="map-container">
        <div class="map-branches">

          <div class="map-branch">
            <div class="branch-title">✅ Hecho</div>
            <div class="map-leaf">Es algo que ocurrió o puede comprobarse.</div>
            <div class="map-leaf">Ejemplo: “Alan Turing nació el 23 de junio de 1912”.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">📊 Dato</div>
            <div class="map-leaf">Es información precisa: fechas, cantidades, cifras o nombres.</div>
            <div class="map-leaf">Ejemplo: “2012 fue el año en que se conmemoraron cien años de su nacimiento”.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">💬 Opinión</div>
            <div class="map-leaf">Es una valoración o punto de vista de una persona.</div>
            <div class="map-leaf">Ejemplo: “Turing es uno de los científicos más importantes”.</div>
          </div>

        </div>
      </div>

      <div class="important-box">
        🎯 Tip EDIEMS: si puedes comprobarlo, probablemente es un hecho o dato.
        Si expresa una valoración, juicio o punto de vista, probablemente es una opinión.
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">🔵 2. ¿Para qué sirven los datos?</span>
      <h2 class="section-h2">Los datos ayudan a convencer</h2>

      <p>
        Un dato puede servir para apoyar una idea, explicar un tema o convencer al lector.
        Por eso aparecen mucho en textos informativos y argumentativos.
      </p>

      <p>
        Los datos le dan fuerza a un texto porque hacen que la información parezca
        más clara y comprobable.
      </p>

      <div class="text-panel">
        <div class="text-title">Ejemplo</div>
        <div class="text-body">Alan Mathison Turing nació el 23 de junio de 1912, en Paddington, Londres.</div>
      </div>

      <div class="important-box">
        Ese fragmento es un dato porque contiene información precisa: nombre, fecha y lugar.
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">🔵 3. Cómo analizar un texto</span>
      <h2 class="section-h2">Método rápido de lectura</h2>

      <div class="map-container">
        <div class="map-branches">

          <div class="map-branch">
            <div class="branch-title">1️⃣ Identifica el tema</div>
            <div class="map-leaf">Pregunta: ¿de qué trata el texto?</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">2️⃣ Busca datos</div>
            <div class="map-leaf">Fechas, cifras, nombres, lugares o estudios.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">3️⃣ Distingue opiniones</div>
            <div class="map-leaf">Detecta frases que expresen valoración o punto de vista.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">4️⃣ Interpreta la intención</div>
            <div class="map-leaf">Pregunta: ¿quiere informar, explicar o convencer?</div>
          </div>

        </div>
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">🔵 4. Ejemplo guiado</span>
      <h2 class="section-h2">El enigma Turing</h2>

      <div class="text-panel">
        <div class="text-title">Fragmento adaptado</div>
        <div class="text-body">Alan Mathison Turing nació el 23 de junio de 1912 en Londres. Para muchos, es conocido por la prueba de Turing, pero también realizó grandes aportaciones a la ciencia de la computación.</div>
      </div>

      <div class="important-box">
        ✅ Dato: “nació el 23 de junio de 1912 en Londres”.
      </div>

      <div class="important-box">
        💬 Opinión o valoración: “realizó grandes aportaciones”.
      </div>

      <div class="important-box">
        🧠 Interpretación: el texto busca explicar la importancia de Alan Turing.
      </div>
    </div>

  </div>

  <!-- =========================
       LECTURAS PRÁCTICAS
  ========================== -->

  <div class="sub-tab-content" id="lecturas">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">📖 Lectura práctica 1</span>
      <h2 class="section-h2">Alan Turing</h2>

      <div class="text-panel">
        <div class="text-title">Texto</div>
        <div class="text-body">Alan Mathison Turing nació el 23 de junio de 1912, en Paddington, Londres. Para muchos, es considerado el padre de la ciencia de la computación.</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">¿Cuál de las siguientes opciones es un dato?</div>

        <label class="option-item"><input type="radio" name="analect1" value="a"> A) “Para muchos, es considerado importante”.</label>
        <label class="option-item"><input type="radio" name="analect1" value="b"> B) “Nació el 23 de junio de 1912”.</label>
        <label class="option-item"><input type="radio" name="analect1" value="c"> C) “Es admirable”.</label>
        <label class="option-item"><input type="radio" name="analect1" value="d"> D) “Fue brillante”.</label>

        <button class="btn-verify" onclick="verifyAnaLect1()">Revisar respuesta</button>
        <div class="feedback" id="feedback-analect1"></div>
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">📖 Lectura práctica 2</span>
      <h2 class="section-h2">Distinguir opinión</h2>

      <div class="text-panel">
        <div class="text-title">Texto</div>
        <div class="text-body">La prueba de Turing es un criterio para intentar establecer si una computadora puede considerarse inteligente. Sin embargo, algunos consideran que Turing fue uno de los científicos más importantes del siglo XX.</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">¿Cuál oración expresa una opinión o valoración?</div>

        <label class="option-item"><input type="radio" name="analect2" value="a"> A) “La prueba de Turing es un criterio”.</label>
        <label class="option-item"><input type="radio" name="analect2" value="b"> B) “Una computadora puede considerarse inteligente”.</label>
        <label class="option-item"><input type="radio" name="analect2" value="c"> C) “Turing fue uno de los científicos más importantes del siglo XX”.</label>
        <label class="option-item"><input type="radio" name="analect2" value="d"> D) “La prueba de Turing existe”.</label>

        <button class="btn-verify" onclick="verifyAnaLect2()">Revisar respuesta</button>
        <div class="feedback" id="feedback-analect2"></div>
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">📖 Lectura práctica 3</span>
      <h2 class="section-h2">Interpretar intención</h2>

      <div class="text-panel">
        <div class="text-title">Texto</div>
        <div class="text-body">Alan Turing hizo contribuciones importantes a la ciencia. Sus ideas influyeron en el desarrollo de la computación y en la forma de pensar sobre la inteligencia artificial.</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">¿Cuál es la intención principal del texto?</div>

        <label class="option-item"><input type="radio" name="analect3" value="a"> A) Explicar la importancia de Alan Turing.</label>
        <label class="option-item"><input type="radio" name="analect3" value="b"> B) Contar una historia de terror.</label>
        <label class="option-item"><input type="radio" name="analect3" value="c"> C) Dar instrucciones para usar una computadora.</label>
        <label class="option-item"><input type="radio" name="analect3" value="d"> D) Presentar una receta.</label>

        <button class="btn-verify" onclick="verifyAnaLect3()">Revisar respuesta</button>
        <div class="feedback" id="feedback-analect3"></div>
      </div>
    </div>

  </div>

  <!-- =========================
       EVALUACIÓN
  ========================== -->

  <div class="sub-tab-content" id="evaluacion">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">📝 Taller CBTIS / EDIEMS</span>
      <h2 class="section-h2">Evaluación práctica</h2>
      <p>Responde las preguntas basadas en las páginas 60 - 63.</p>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">1. ¿Qué es un hecho?</div>
      <label class="option-item"><input type="radio" name="anaq1" value="a"> A) Algo que ocurrió o puede comprobarse.</label>
      <label class="option-item"><input type="radio" name="anaq1" value="b"> B) Una emoción personal.</label>
      <label class="option-item"><input type="radio" name="anaq1" value="c"> C) Un gusto individual.</label>
      <label class="option-item"><input type="radio" name="anaq1" value="d"> D) Una suposición sin evidencia.</label>
      <button class="btn-verify" onclick="verifyAnaQ1()">Revisar respuesta</button>
      <div class="feedback" id="feedback-anaq1"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">2. ¿Cuál opción representa un dato?</div>
      <label class="option-item"><input type="radio" name="anaq2" value="a"> A) “Me parece interesante”.</label>
      <label class="option-item"><input type="radio" name="anaq2" value="b"> B) “Nació el 23 de junio de 1912”.</label>
      <label class="option-item"><input type="radio" name="anaq2" value="c"> C) “Fue el mejor de todos”.</label>
      <label class="option-item"><input type="radio" name="anaq2" value="d"> D) “Era muy admirable”.</label>
      <button class="btn-verify" onclick="verifyAnaQ2()">Revisar respuesta</button>
      <div class="feedback" id="feedback-anaq2"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">3. ¿Qué es una opinión?</div>
      <label class="option-item"><input type="radio" name="anaq3" value="a"> A) Una fecha exacta.</label>
      <label class="option-item"><input type="radio" name="anaq3" value="b"> B) Un punto de vista o valoración personal.</label>
      <label class="option-item"><input type="radio" name="anaq3" value="c"> C) Un nombre propio.</label>
      <label class="option-item"><input type="radio" name="anaq3" value="d"> D) Un lugar verificable.</label>
      <button class="btn-verify" onclick="verifyAnaQ3()">Revisar respuesta</button>
      <div class="feedback" id="feedback-anaq3"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">4. ¿Para qué sirven los datos en un texto?</div>
      <label class="option-item"><input type="radio" name="anaq4" value="a"> A) Para apoyar ideas con información precisa.</label>
      <label class="option-item"><input type="radio" name="anaq4" value="b"> B) Para eliminar el tema principal.</label>
      <label class="option-item"><input type="radio" name="anaq4" value="c"> C) Para confundir al lector.</label>
      <label class="option-item"><input type="radio" name="anaq4" value="d"> D) Para cambiar de tema.</label>
      <button class="btn-verify" onclick="verifyAnaQ4()">Revisar respuesta</button>
      <div class="feedback" id="feedback-anaq4"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">5. ¿Qué debes hacer al analizar un texto?</div>
      <label class="option-item"><input type="radio" name="anaq5" value="a"> A) Identificar tema, datos, opiniones e intención.</label>
      <label class="option-item"><input type="radio" name="anaq5" value="b"> B) Leer solo el título.</label>
      <label class="option-item"><input type="radio" name="anaq5" value="c"> C) Ignorar los datos.</label>
      <label class="option-item"><input type="radio" name="anaq5" value="d"> D) Copiar todo sin comprender.</label>
      <button class="btn-verify" onclick="verifyAnaQ5()">Revisar respuesta</button>
      <div class="feedback" id="feedback-anaq5"></div>
    </div>

  </div>

</div>
`;
}

window.renderAnalisis = renderAnalisis;

function verifyAnaSimple(name, correct, feedbackId, message){
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  const feedback = document.getElementById(feedbackId);

  if(!selected){
    alert("Selecciona una opción.");
    return;
  }

  if(selected.value === correct){
    feedback.className = "feedback correct";
    feedback.innerHTML = message;
  }else{
    feedback.className = "feedback incorrect";
    feedback.innerHTML = "❌ Respuesta incorrecta. Revisa nuevamente la teoría.";
  }
}

function verifyAnaLect1(){ verifyAnaSimple("analect1","b","feedback-analect1","✅ Correcto. Es un dato porque contiene una fecha precisa."); }
function verifyAnaLect2(){ verifyAnaSimple("analect2","c","feedback-analect2","✅ Correcto. Es una valoración sobre la importancia de Turing."); }
function verifyAnaLect3(){ verifyAnaSimple("analect3","a","feedback-analect3","✅ Correcto. El texto explica la importancia de Alan Turing."); }

function verifyAnaQ1(){ verifyAnaSimple("anaq1","a","feedback-anaq1","✅ Correcto. Un hecho puede comprobarse."); }
function verifyAnaQ2(){ verifyAnaSimple("anaq2","b","feedback-anaq2","✅ Correcto. Una fecha exacta es un dato."); }
function verifyAnaQ3(){ verifyAnaSimple("anaq3","b","feedback-anaq3","✅ Correcto. Una opinión expresa un punto de vista."); }
function verifyAnaQ4(){ verifyAnaSimple("anaq4","a","feedback-anaq4","✅ Correcto. Los datos apoyan ideas con precisión."); }
function verifyAnaQ5(){ verifyAnaSimple("anaq5","a","feedback-anaq5","✅ Correcto. Ese método ayuda a interpretar mejor el texto."); }

window.verifyAnaLect1 = verifyAnaLect1;
window.verifyAnaLect2 = verifyAnaLect2;
window.verifyAnaLect3 = verifyAnaLect3;
window.verifyAnaQ1 = verifyAnaQ1;
window.verifyAnaQ2 = verifyAnaQ2;
window.verifyAnaQ3 = verifyAnaQ3;
window.verifyAnaQ4 = verifyAnaQ4;
window.verifyAnaQ5 = verifyAnaQ5;
