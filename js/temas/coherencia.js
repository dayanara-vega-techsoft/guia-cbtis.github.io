function renderCoherencia(){
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
.connector-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(210px,1fr));
  gap:16px;
  margin-top:18px;
}
.connector-card{
  background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.08);
  border-radius:18px;
  padding:18px;
}
.connector-card h3{
  color:#00e5ff;
  margin-bottom:10px;
}
.connector-card ul{
  margin-left:18px;
}
.fill-row{
  display:grid;
  grid-template-columns:1fr 220px;
  gap:12px;
  align-items:center;
  margin-bottom:12px;
}
.fill-row p{
  color:#cbd5e1;
}
.fill-select{
  width:100%;
  padding:13px;
  border-radius:14px;
  border:1px solid rgba(255,255,255,.12);
  background:#111827;
  color:#cbd5e1;
}
.matching-row{
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
  .fill-row,.matching-row{grid-template-columns:1fr;}
}
</style>

<div class="topic-shell">
  <div class="session-header">
    <h1>🔗 Coherencia y cohesión del texto</h1>
    <p>Tema 2 · Interpretación e integración de ideas · Páginas 19 - 25</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">2.1 Teoría</button>
    <button class="tab-btn" id="btn-lecturas" onclick="switchTab('lecturas')">2.2 Lecturas prácticas</button>
    <button class="tab-btn" id="btn-evaluacion" onclick="switchTab('evaluacion')">2.3 Taller de evaluación</button>
  </div>

  <!-- TEORIA -->
  <div class="sub-tab-content active" id="teoria">
    <div class="subtopic-section">
      <span class="subtopic-header-tag">Resultado de aprendizaje</span>
      <h2 class="section-h2">Reconocer conectores y nexos que dan sentido lógico</h2>
      <p>
        En esta misión aprenderás a reconocer cómo se unen las ideas dentro de un texto
        para que tenga sentido, orden y claridad.
      </p>

      <div class="important-box">
        <strong>Objetivo:</strong> distinguir entre coherencia y cohesión, y usar conectores
        para comprender mejor la relación entre ideas.
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">Conceptos clave</span>
      <h2 class="section-h2">Coherencia vs Cohesión</h2>

      <div class="connector-grid">
        <div class="connector-card">
          <h3>🧠 Coherencia</h3>
          <p>
            Es cuando el texto tiene una unidad temática y comunicativa.
            Las ideas se entienden como parte de un mismo tema.
          </p>
        </div>

        <div class="connector-card">
          <h3>🔗 Cohesión</h3>
          <p>
            Es la conexión entre los elementos del texto. Se logra mediante
            nexos, conectores y mecanismos que unen las ideas.
          </p>
        </div>
      </div>

      <div class="important-box">
        Un texto coherente tiene sentido general. Un texto cohesionado tiene ideas bien conectadas.
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">Para que haya coherencia</span>
      <h2 class="section-h2">Tres elementos básicos</h2>

      <div class="map-container">
        <div class="map-title">Bases de la coherencia textual</div>
        <div class="map-root">Coherencia</div>

        <div class="map-branches">
          <div class="map-branch">
            <div class="branch-title">Tema central</div>
            <div class="map-leaf">Asunto general del que trata el texto.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">Estructura</div>
            <div class="map-leaf">Orden progresivo de las ideas, sin rupturas ni desorden.</div>
          </div>
        </div>

        <div class="map-branch" style="margin-top:18px;">
          <div class="branch-title">Estrategia enunciativa</div>
          <div class="map-leaf">Organizar el pensamiento según lo que se quiere expresar, evitando contradicciones.</div>
        </div>
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">Conectores textuales</span>
      <h2 class="section-h2">Tipos de conectores</h2>

      <div class="connector-grid">
        <div class="connector-card">
          <h3>⚔️ Contraste</h3>
          <ul>
            <li>Aun cuando</li>
            <li>Sin embargo</li>
            <li>No obstante</li>
            <li>Contrariamente</li>
            <li>En cambio</li>
          </ul>
        </div>

        <div class="connector-card">
          <h3>🧩 Causales</h3>
          <ul>
            <li>Porque</li>
            <li>Debido a</li>
            <li>Por este motivo</li>
            <li>A consecuencia</li>
            <li>Por lo cual</li>
          </ul>
        </div>

        <div class="connector-card">
          <h3>➕ Aditivos</h3>
          <ul>
            <li>Además</li>
            <li>Incluso</li>
            <li>Por otra parte</li>
          </ul>
        </div>

        <div class="connector-card">
          <h3>⏳ Temporales</h3>
          <ul>
            <li>Al comienzo</li>
            <li>Previamente</li>
            <li>Al mismo tiempo</li>
            <li>Posteriormente</li>
            <li>Finalmente</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- LECTURAS -->
  <div class="sub-tab-content" id="lecturas">
    <div class="subtopic-section">
      <span class="subtopic-header-tag">Texto 1 · Página 19</span>
      <h2 class="section-h2">El algodón</h2>

      <div class="text-panel">
        <div class="text-title">Texto con conectores</div>
        <div class="text-body">“El algodón es una de las materias primas más utilizadas en todo el mundo. Por ejemplo, se utiliza para fabricar ropa, toallas y sábanas, es decir, que es un material fundamental en la industria textil. Por eso, cada vez más agricultores quieren dedicarse al cultivo del algodón.”</div>
      </div>

      <div class="important-box">
        Observa los conectores: <strong>Por ejemplo</strong>, <strong>es decir</strong> y <strong>Por eso</strong>.
        Ayudan a explicar, aclarar y relacionar ideas.
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">Texto 2 · Página 19</span>
      <h2 class="section-h2">El nuevo parque del vecindario</h2>

      <div class="text-panel">
        <div class="text-title">Texto con conectores</div>
        <div class="text-body">“El nuevo parque del vecindario se comenzará a construir en septiembre y se espera que esté terminado para diciembre. La idea de hacer este parque surgió de los vecinos, por eso, el gobierno creyó que lo más adecuado sería convertir el baldío en un espacio verde. Sin embargo, no se construirá con el plano que presentaron los vecinos, sino que se construirá según lo planificado por el gobierno.”</div>
      </div>

      <div class="important-box">
        Observa los conectores: <strong>por eso</strong> muestra consecuencia y <strong>sin embargo</strong> marca contraste.
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">Fragmento de evaluación · Página 23</span>
      <h2 class="section-h2">Alan Turing</h2>

      <div class="text-panel">
        <div class="text-title">Fragmento</div>
        <div class="text-body">Este año [2012] se conmemoran los cien años del nacimiento de Alan Mathison Turing, quien nació el 23 de junio de 1912, en Paddington, Londres. Para muchos, el matemático británico es simplemente conocido por la llamada prueba de Turing, la cual es simplemente un criterio para intentar establecer si una computadora puede definirse como pensante, como inteligente. Pero Alan Turing hizo grandes contribuciones en muchísimos campos de la ciencia. De hecho, si tuviésemos que definir a Turing en pocas palabras, tendríamos que decir que él es el padre de la ciencia de la computación.

Sin embargo, la educación que Turing recibió en sus primeros años no podía suponer que se convertiría en uno de los más importantes científicos. La vida de Alan Turing no tenía visos de ser especial, y de hecho la ciencia era algo así como una actividad extracurricular. Sin embargo, un libro que le dieron de niño, Natural Wonders Every Child Should Know, de Edwin Tenney Brewster (1912), causó una profunda influencia en él. Sus intereses científicos hacían temer que sería rechazado en la escuela pública inglesa. No obstante esto, entró a la escuela Sherborne, en donde pronto el director de la misma reportaría sobre Turing: “Si su ambición es convertirse en un científico especialista, está perdiendo su tiempo en la escuela pública”.</div>
      </div>
    </div>
  </div>

  <!-- EVALUACION -->
  <div class="sub-tab-content" id="evaluacion">
    <div class="subtopic-section">
      <span class="subtopic-header-tag">Taller oficial · Páginas 21 - 24</span>
      <h2 class="section-h2">Evaluación: Coherencia y cohesión</h2>
      <p>Resuelve los retos sobre conectores, nexos y orden lógico de las ideas.</p>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">1. ¿Qué función tienen las palabras en negritas de los textos iniciales?</div>
      <label class="option-item"><input type="radio" name="coh-funcion" value="a"> A) Decorar el texto visualmente.</label>
      <label class="option-item"><input type="radio" name="coh-funcion" value="b"> B) Conectar ideas y dar sentido lógico al texto.</label>
      <label class="option-item"><input type="radio" name="coh-funcion" value="c"> C) Indicar personajes principales.</label>
      <button class="btn-verify" onclick="verifyCohFuncion()">Verificar</button>
      <div class="feedback" id="feedback-coh-funcion"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">2. Anota el nexo más adecuado para cada enunciado.</div>

      <div class="fill-row">
        <p>A. ________ la distancia, ellos se amaban.</p>
        <select class="fill-select" id="nexo-a">
          <option value="">Selecciona</option>
          <option value="a pesar de">A pesar de</option>
          <option value="porque">Porque</option>
          <option value="finalmente">Finalmente</option>
        </select>
      </div>

      <div class="fill-row">
        <p>B. ________ tenía todas las sospechas, necesitaba más información.</p>
        <select class="fill-select" id="nexo-b">
          <option value="">Selecciona</option>
          <option value="aunque">Aunque</option>
          <option value="ademas">Además</option>
          <option value="por eso">Por eso</option>
        </select>
      </div>

      <div class="fill-row">
        <p>C. La comida estaba riquísima, ________ era muy pesada.</p>
        <select class="fill-select" id="nexo-c">
          <option value="">Selecciona</option>
          <option value="pero">Pero</option>
          <option value="porque">Porque</option>
          <option value="al comienzo">Al comienzo</option>
        </select>
      </div>

      <button class="btn-verify" onclick="verifyNexos()">Verificar nexos</button>
      <div class="feedback" id="feedback-nexos"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">3. Ordena la oración de forma lógica.</div>
      <p style="color:#cbd5e1;margin-bottom:10px;">Fragmento desordenado: “Invitación curso recibió a una de gran prestigio gran para institución asistir una de un Joana”.</p>
      <textarea class="answer-area" rows="4" placeholder="Escribe aquí la oración ordenada..."></textarea>
      <div class="important-box">Respuesta esperada aproximada: Joana recibió una invitación para asistir a un curso de una institución de gran prestigio.</div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">4. Localiza conectores en el fragmento de Alan Turing e identifica su tipo.</div>

      <div class="matching-row">
        <div class="matching-concept">pero</div>
        <select class="matching-select" id="conector-pero">
          <option value="">Selecciona</option>
          <option value="contraste">Contraste</option>
          <option value="causal">Causal</option>
          <option value="temporal">Temporal</option>
        </select>
      </div>

      <div class="matching-row">
        <div class="matching-concept">sin embargo</div>
        <select class="matching-select" id="conector-sinembargo">
          <option value="">Selecciona</option>
          <option value="contraste">Contraste</option>
          <option value="aditivo">Aditivo</option>
          <option value="temporal">Temporal</option>
        </select>
      </div>

      <div class="matching-row">
        <div class="matching-concept">no obstante</div>
        <select class="matching-select" id="conector-noobstante">
          <option value="">Selecciona</option>
          <option value="contraste">Contraste</option>
          <option value="causal">Causal</option>
          <option value="aditivo">Aditivo</option>
        </select>
      </div>

      <button class="btn-verify" onclick="verifyConectoresTuring()">Verificar conectores</button>
      <div class="feedback" id="feedback-turing"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">5. Llovió toda la noche ________ la calle está mojada.</div>
      <label class="option-item"><input type="radio" name="lluvia" value="a"> A) sin embargo</label>
      <label class="option-item"><input type="radio" name="lluvia" value="b"> B) por ejemplo</label>
      <label class="option-item"><input type="radio" name="lluvia" value="c"> C) por eso</label>
      <label class="option-item"><input type="radio" name="lluvia" value="d"> D) debido a que</label>
      <button class="btn-verify" onclick="verifyLluvia()">Verificar</button>
      <div class="feedback" id="feedback-lluvia"></div>
    </div>
  </div>
</div>`;
}

function verifyCohFuncion(){
  const selected = document.querySelector('input[name="coh-funcion"]:checked');
  const feedback = document.getElementById("feedback-coh-funcion");

  if(!selected){
    alert("Selecciona una opción.");
    return;
  }

  if(selected.value === "b"){
    feedback.className = "feedback correct";
    feedback.innerHTML = "✅ Correcto. Los conectores unen ideas y ayudan a que el texto tenga sentido lógico.";
  }else{
    feedback.className = "feedback incorrect";
    feedback.innerHTML = "❌ Revisa la función de los conectores: sirven para relacionar ideas.";
  }
}

function verifyNexos(){
  const a = document.getElementById("nexo-a").value;
  const b = document.getElementById("nexo-b").value;
  const c = document.getElementById("nexo-c").value;
  const feedback = document.getElementById("feedback-nexos");

  let total = 0;
  if(a === "a pesar de") total++;
  if(b === "aunque") total++;
  if(c === "pero") total++;

  if(total === 3){
    feedback.className = "feedback correct";
    feedback.innerHTML = "✅ Excelente. Elegiste nexos adecuados para expresar contraste.";
  }else{
    feedback.className = "feedback incorrect";
    feedback.innerHTML = `❌ Obtuviste ${total}/3. Revisa qué conectores expresan contraste.`;
  }
}

function verifyConectoresTuring(){
  const a = document.getElementById("conector-pero").value;
  const b = document.getElementById("conector-sinembargo").value;
  const c = document.getElementById("conector-noobstante").value;
  const feedback = document.getElementById("feedback-turing");

  let total = 0;
  if(a === "contraste") total++;
  if(b === "contraste") total++;
  if(c === "contraste") total++;

  if(total === 3){
    feedback.className = "feedback correct";
    feedback.innerHTML = "✅ Correcto. Los tres conectores señalan contraste u oposición entre ideas.";
  }else{
    feedback.className = "feedback incorrect";
    feedback.innerHTML = `❌ Obtuviste ${total}/3. Recuerda que “pero”, “sin embargo” y “no obstante” son conectores de contraste.`;
  }
}

function verifyLluvia(){
  const selected = document.querySelector('input[name="lluvia"]:checked');
  const feedback = document.getElementById("feedback-lluvia");

  if(!selected){
    alert("Selecciona una opción.");
    return;
  }

  if(selected.value === "c"){
    feedback.className = "feedback correct";
    feedback.innerHTML = "✅ Correcto. “Por eso” conecta la causa con su consecuencia.";
  }else{
    feedback.className = "feedback incorrect";
    feedback.innerHTML = "❌ Revisa la relación causa-consecuencia: llovió, por eso la calle está mojada.";
  }
}
