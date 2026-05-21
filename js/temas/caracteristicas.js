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

  <div class="sub-tab-content active" id="teoria">
    <div class="subtopic-section">
      <span class="subtopic-header-tag">Concepto principal</span>
      <h2 class="section-h2">¿Qué son los tipos de texto?</h2>
      <p>Los tipos de texto son formas de organizar ideas y mensajes dependiendo de la intención comunicativa.</p>

      <div class="important-box">
        <strong>Importante:</strong> Cada texto tiene una finalidad distinta:
        informar, narrar, convencer o expresar emociones.
      </div>

      <div class="map-container">
        <div class="map-title">Clasificación general</div>
        <div class="map-root">Tipos de texto</div>

        <div class="map-branches">
          <div class="map-branch">
            <div class="branch-title">Continuos</div>
            <div class="map-leaf">📖 Narrativos</div>
            <div class="map-leaf">🎭 Literarios</div>
            <div class="map-leaf">📰 Expositivos</div>
            <div class="map-leaf">⚔️ Argumentativos</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">Discontinuos</div>
            <div class="map-leaf">📊 Tablas</div>
            <div class="map-leaf">🗺️ Mapas</div>
            <div class="map-leaf">📈 Diagramas</div>
            <div class="map-leaf">📋 Formularios</div>
          </div>
        </div>
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">Tipos principales</span>
      <h2 class="section-h2">Características</h2>

      <h3 class="section-h3">📖 Narrativo</h3>
      <p>Cuenta historias mediante personajes, acciones y sucesos.</p>

      <h3 class="section-h3">🎭 Literario</h3>
      <p>Usa lenguaje artístico para expresar emociones.</p>

      <h3 class="section-h3">📰 Expositivo</h3>
      <p>Explica información de manera clara y objetiva.</p>

      <h3 class="section-h3">⚔️ Argumentativo</h3>
      <p>Busca convencer al lector usando argumentos.</p>
    </div>
  </div>

  <div class="sub-tab-content" id="lecturas">
    <div class="subtopic-section">
      <span class="subtopic-header-tag">Lectura oficial · Páginas 3 - 4</span>
      <h2 class="section-h2">Texto 1: Los sabores de la Nona en Olivia Restaurante</h2>

      <div class="text-panel">
        <div class="text-title">Los sabores de la Nona en Olivia Restaurante</div>
        <div class="text-body">Olivia es el nuevo restaurante italiano de casual dinning en la colonia Narvarte que te espera para conquistar tu paladar y compartir lo mejor de la cocina tradicional italiana.

“El nombre de Olivia surge en memoria de la Nonna (abuela) del socio italiano Julio Cesar Góngora. En segunda, el nombre remite a la palabra oliva, que es la aceituna típica de esa región”.

Si estas planeando una comida familiar, una cena con amigos o en pareja será una gran opción para complacer a todos. Olivia Pizza e Forno cuenta con una capacidad de 100 personas, es casual, elegante y muy cómodo, además de su gran horno de leña que destaca en la cocina abierta para preparar una de las especialidades principales del menú.

Cuando vayan a Olivia Pizza e Forno les recomendamos probar:

• La pizza tradicional (pizzas al horno que difícilmente se encuentran en México), como la pizza OLIVIA con salsa de quesos, aceite de oliva y trufa.
• Pizza de pera y gorgonzola.
• Pasta Liguine Amatriciana con vino tinto y peperonccino.
• Lasagña.

Por último, te recomendamos probar algo de la lista de cafés y postres, como un delicioso tartufo originario de Cabria Italia, uno de los más emblemáticos a nivel internacional, así como también su Tiramisú y Panna Cotta.

Olivia Pizza e Forno nos ofrece una cocina italiana a precios accesibles, en un ambiente y servicio de primera, ya que además de todo conocen a la perfección cada platillo de la carta y sabrán recomendar el mejor vino o cerveza para un buen maridaje.

Erika López Medina, (4 de agosto de 2022) “Los sabores de la Nona en Olivia Restaurante”, Gastronómadas, https://gastronomadas.com.mx/los-sabores-de-la-nona-en-olivia-restaurante/</div>
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">Lectura oficial · Evaluación · Páginas 8 - 9</span>
      <h2 class="section-h2">Texto 2: El cambio climático</h2>

      <div class="text-panel">
        <div class="text-title">El cambio climático</div>
        <div class="text-body">(1) La principal causa del cambio climático es el calentamiento global y tiene múltiples consecuencias negativas en los sistemas físicos, biológicos y humanos. El efecto invernadero es un proceso natural que permite a la Tierra mantener las condiciones necesarias para albergar vida: la atmósfera retiene parte del calor del Sol; sin el efecto invernadero, la temperatura media del planeta sería de 18ºC bajo cero. […]

(2) Los expertos coinciden en señalar a la Revolución Industrial como el punto de inflexión en el que las emisiones de gases de efecto invernadero arrojadas a la atmósfera empezaron a dispararse. Desde este momento, el crecimiento de la población (en 1750 había menos de 800 millones de habitantes en la Tierra, hoy somos más de 7.500 millones), un consumo de recursos cada vez más desmedido, el aumento en la demanda y producción de energía obtenidas mayoritariamente a través de combustibles fósiles… han provocado que el planeta haya entrado en lo que parte de la comunidad científica ha denominado el Antropoceno: la nueva era geológica motivada por el impacto del ser humano en la Tierra.

(3) El principal resultado ha sido el aumento de la temperatura global del planeta, que desde ese periodo ha aumentado en 1,1 °C, si bien se estima que al final del presente siglo el termómetro pueda aumentar todavía más, aun cumpliéndose los compromisos de reducción de emisiones fijados por los países. […]

(4) El cambio climático también aumenta la aparición de fenómenos meteorológicos más violentos, sequías, incendios, la muerte de especies animales y vegetales, los desbordamientos de ríos y lagos, la aparición de refugiados climáticos y la destrucción de los medios de subsistencia y de los recursos económicos, especialmente en países en desarrollo.

¿Qué es el Cambio Climático y cómo nos afecta? (s/f). Acciona.com. Recuperado el 25 de marzo de 2024, de https://www.acciona.com/es/cambio-climatico/Action</div>
      </div>
    </div>
  </div>

  <div class="sub-tab-content" id="evaluacion">
    <div class="subtopic-section">
      <span class="subtopic-header-tag">Taller oficial · Páginas 7 - 10</span>
      <h2 class="section-h2">Evaluación: Tipos de texto</h2>
      <p>Responde los retos basados en las actividades de la guía. Algunos son de práctica abierta y otros se verifican automáticamente.</p>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">1. Según la lectura “Los sabores de la Nona en Olivia Restaurante”, ¿qué características lo hacen un texto argumentativo?</div>
      <textarea id="open-q1" class="answer-area" placeholder="Escribe tu respuesta..." rows="4"></textarea>
      <div class="important-box">
        Pista: observa si el texto recomienda, persuade o usa opiniones positivas para convencer al lector.
      </div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">2. ¿Qué clase de texto argumentativo es la lectura de Olivia Restaurante?</div>
      <label class="option-item"><input type="radio" name="olivia-type" value="a"> A) Discurso político</label>
      <label class="option-item"><input type="radio" name="olivia-type" value="b"> B) Reseña o recomendación</label>
      <label class="option-item"><input type="radio" name="olivia-type" value="c"> C) Fábula</label>
      <label class="option-item"><input type="radio" name="olivia-type" value="d"> D) Tabla informativa</label>
      <button class="btn-verify" onclick="verifyOliviaType()">Verificar</button>
      <div class="feedback" id="feedback-olivia-type"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">3. Relaciona los tipos de textos con sus características.</div>

      <div class="matching-row">
        <div class="matching-concept">Argumentativos</div>
        <select class="matching-select" id="match-arg">
          <option value="">Selecciona</option>
          <option value="a">A) Expresa hechos y se divide en divulgativos y especializados.</option>
          <option value="b">B) Sus relatos pueden contener descripciones de una serie de sucesos.</option>
          <option value="c">C) Trata de persuadir al lector y exponer su punto de vista.</option>
          <option value="d">D) Es una forma de expresión artística, usa lenguaje metafórico.</option>
        </select>
      </div>

      <div class="matching-row">
        <div class="matching-concept">Narrativos</div>
        <select class="matching-select" id="match-nar">
          <option value="">Selecciona</option>
          <option value="a">A) Expresa hechos y se divide en divulgativos y especializados.</option>
          <option value="b">B) Sus relatos pueden contener descripciones de una serie de sucesos.</option>
          <option value="c">C) Trata de persuadir al lector y exponer su punto de vista.</option>
          <option value="d">D) Es una forma de expresión artística, usa lenguaje metafórico.</option>
        </select>
      </div>

      <div class="matching-row">
        <div class="matching-concept">Literarios</div>
        <select class="matching-select" id="match-lit">
          <option value="">Selecciona</option>
          <option value="a">A) Expresa hechos y se divide en divulgativos y especializados.</option>
          <option value="b">B) Sus relatos pueden contener descripciones de una serie de sucesos.</option>
          <option value="c">C) Trata de persuadir al lector y exponer su punto de vista.</option>
          <option value="d">D) Es una forma de expresión artística, usa lenguaje metafórico.</option>
        </select>
      </div>

      <div class="matching-row">
        <div class="matching-concept">Expositivos</div>
        <select class="matching-select" id="match-exp">
          <option value="">Selecciona</option>
          <option value="a">A) Expresa hechos y se divide en divulgativos y especializados.</option>
          <option value="b">B) Sus relatos pueden contener descripciones de una serie de sucesos.</option>
          <option value="c">C) Trata de persuadir al lector y exponer su punto de vista.</option>
          <option value="d">D) Es una forma de expresión artística, usa lenguaje metafórico.</option>
        </select>
      </div>

      <button class="btn-verify" onclick="verifyMatchingTipos()">Verificar relación</button>
      <div class="feedback" id="feedback-matching"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">4. Verdadero o falso.</div>

      ${renderVFRow("vf1", "Hay textos expositivos de divulgación y metafóricos.")}
      ${renderVFRow("vf2", "En el texto expositivo se dan opiniones y juicios personales.")}
      ${renderVFRow("vf3", "En los textos continuos se encuentran los narrativos, literarios, expositivos y argumentativos.")}
      ${renderVFRow("vf4", "El texto narrativo se compone de un inicio, desarrollo y un desenlace.")}
      ${renderVFRow("vf5", "Los textos literarios se encuentran en los ensayos.")}
      ${renderVFRow("vf6", "El cuento y la novela son textos literarios.")}
      ${renderVFRow("vf7", "Los textos argumentativos son revistas de rumores.")}
      ${renderVFRow("vf8", "En los textos narrativos siempre se van a presentar personajes.")}

      <button class="btn-verify" onclick="verifyVF()">Verificar verdadero/falso</button>
      <div class="feedback" id="feedback-vf"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">5. Texto “El cambio climático”: indica la estructura por párrafo.</div>

      <div class="matching-row">
        <div class="matching-concept">Introducción</div>
        <select class="matching-select" id="clima-intro">
          <option value="">Selecciona</option>
          <option value="1">Párrafo 1</option>
          <option value="2">Párrafo 2</option>
          <option value="3">Párrafo 3</option>
          <option value="4">Párrafo 4</option>
        </select>
      </div>

      <div class="matching-row">
        <div class="matching-concept">Desarrollo</div>
        <select class="matching-select" id="clima-desarrollo">
          <option value="">Selecciona</option>
          <option value="1">Párrafo 1</option>
          <option value="2">Párrafo 2</option>
          <option value="3">Párrafo 3</option>
          <option value="4">Párrafo 4</option>
        </select>
      </div>

      <div class="matching-row">
        <div class="matching-concept">Cierre</div>
        <select class="matching-select" id="clima-cierre">
          <option value="">Selecciona</option>
          <option value="1">Párrafo 1</option>
          <option value="2">Párrafo 2</option>
          <option value="3">Párrafo 3</option>
          <option value="4">Párrafo 4</option>
        </select>
      </div>

      <button class="btn-verify" onclick="verifyClimaEstructura()">Verificar estructura</button>
      <div class="feedback" id="feedback-clima-estructura"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">6. ¿Cuál es el objetivo del texto “El cambio climático”?</div>
      <label class="option-item"><input type="radio" name="clima-objetivo" value="a"> A) Identificar un hecho.</label>
      <label class="option-item"><input type="radio" name="clima-objetivo" value="b"> B) Narrar una experiencia.</label>
      <label class="option-item"><input type="radio" name="clima-objetivo" value="c"> C) Informar sobre un suceso.</label>
      <label class="option-item"><input type="radio" name="clima-objetivo" value="d"> D) Exponer una problemática.</label>
      <button class="btn-verify" onclick="verifyClimaObjetivo()">Verificar</button>
      <div class="feedback" id="feedback-clima-objetivo"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">7. Compara los tipos de texto.</div>
      <p>Completa con tus propias palabras:</p>
      <textarea class="answer-area" placeholder="¿Qué tipo de información contienen los textos literario-narrativos, expositivos y argumentativos?" rows="4"></textarea>
      <textarea class="answer-area" placeholder="¿Qué tipo de lenguaje utilizan?" rows="4"></textarea>
      <textarea class="answer-area" placeholder="Menciona algunos ejemplos." rows="4"></textarea>
      <div class="important-box">
        Este ejercicio es de reflexión. No se califica automáticamente, pero ayuda a preparar la evaluación.
      </div>
    </div>
  </div>
</div>`;
}

function renderVFRow(id, text){
  return `
    <div class="vf-row">
      <div class="matching-concept">${text}</div>
      <select class="matching-select" id="${id}">
        <option value="">Selecciona</option>
        <option value="v">Verdadero</option>
        <option value="f">Falso</option>
      </select>
    </div>
  `;
}

function verifyOliviaType(){
  const selected = document.querySelector('input[name="olivia-type"]:checked');
  const feedback = document.getElementById("feedback-olivia-type");

  if(!selected){
    alert("Selecciona una opción.");
    return;
  }

  if(selected.value === "b"){
    feedback.className = "feedback correct";
    feedback.innerHTML = "✅ Correcto. La lectura funciona como una reseña o recomendación porque busca persuadir al lector de visitar el restaurante.";
  }else{
    feedback.className = "feedback incorrect";
    feedback.innerHTML = "❌ Revisa la intención del texto: recomienda platillos, describe cualidades positivas y busca convencer.";
  }
}

function verifyMatchingTipos(){
  const answers = {
    "match-arg": "c",
    "match-nar": "b",
    "match-lit": "d",
    "match-exp": "a"
  };

  let total = 0;
  Object.keys(answers).forEach(id => {
    const el = document.getElementById(id);
    if(el && el.value === answers[id]) total++;
  });

  const feedback = document.getElementById("feedback-matching");

  if(total === 4){
    feedback.className = "feedback correct";
    feedback.innerHTML = "✅ Excelente. Relacionaste correctamente los cuatro tipos de texto.";
  }else{
    feedback.className = "feedback incorrect";
    feedback.innerHTML = `❌ Obtuviste ${total}/4. Revisa: Argumentativo=C, Narrativo=B, Literario=D, Expositivo=A.`;
  }
}

function verifyVF(){
  const answers = {
    vf1: "f",
    vf2: "f",
    vf3: "v",
    vf4: "v",
    vf5: "f",
    vf6: "v",
    vf7: "f",
    vf8: "v"
  };

  let total = 0;
  Object.keys(answers).forEach(id => {
    const el = document.getElementById(id);
    if(el && el.value === answers[id]) total++;
  });

  const feedback = document.getElementById("feedback-vf");

  if(total === 8){
    feedback.className = "feedback correct";
    feedback.innerHTML = "✅ Perfecto. Dominaste la sección de verdadero/falso.";
  }else{
    feedback.className = "feedback incorrect";
    feedback.innerHTML = `❌ Obtuviste ${total}/8. Revisa las características de cada tipo de texto.`;
  }
}

function verifyClimaEstructura(){
  const intro = document.getElementById("clima-intro").value;
  const desarrollo = document.getElementById("clima-desarrollo").value;
  const cierre = document.getElementById("clima-cierre").value;
  const feedback = document.getElementById("feedback-clima-estructura");

  const introOk = intro === "1";
  const desarrolloOk = desarrollo === "2" || desarrollo === "3";
  const cierreOk = cierre === "4";

  if(introOk && desarrolloOk && cierreOk){
    feedback.className = "feedback correct";
    feedback.innerHTML = "✅ Correcto. Párrafo 1 introduce el tema, 2-3 desarrollan causas y resultados, y 4 funciona como cierre de consecuencias.";
  }else{
    feedback.className = "feedback incorrect";
    feedback.innerHTML = "❌ Revisa la organización: introducción en el párrafo 1, desarrollo en 2-3 y cierre en 4.";
  }
}

function verifyClimaObjetivo(){
  const selected = document.querySelector('input[name="clima-objetivo"]:checked');
  const feedback = document.getElementById("feedback-clima-objetivo");

  if(!selected){
    alert("Selecciona una opción.");
    return;
  }

  if(selected.value === "d"){
    feedback.className = "feedback correct";
    feedback.innerHTML = "✅ Correcto. El texto expone una problemática: el cambio climático, sus causas y consecuencias.";
  }else{
    feedback.className = "feedback incorrect";
    feedback.innerHTML = "❌ Revisa el texto: no narra una experiencia, sino que explica una problemática ambiental.";
  }
}
