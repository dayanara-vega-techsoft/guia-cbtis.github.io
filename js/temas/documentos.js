function renderDocumentos(){
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
.answer-area::placeholder{
  color:rgba(203,213,225,.65);
}
.doc-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
  gap:18px;
  margin-top:20px;
}
.doc-card{
  background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.08);
  border-radius:18px;
  padding:20px;
}
.doc-card h3{
  color:#00e5ff;
  margin-bottom:10px;
}
.doc-card p{
  color:#cbd5e1;
  line-height:1.7;
}
.matching-row{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
  margin-bottom:12px;
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
  .matching-row{
    grid-template-columns:1fr;
  }
}
</style>

<div class="topic-shell">

  <div class="session-header">
    <h1>📂 Tipos de documentos</h1>
    <p>Sesión 1 · Páginas 12 - 18</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">1.1 Teoría</button>
    <button class="tab-btn" id="btn-lecturas" onclick="switchTab('lecturas')">1.2 Lecturas prácticas</button>
    <button class="tab-btn" id="btn-evaluacion" onclick="switchTab('evaluacion')">1.3 Taller de evaluación</button>
  </div>

  <!-- TEORIA -->

  <div class="sub-tab-content active" id="teoria">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">Concepto principal</span>

      <h2 class="section-h2">¿Qué son los documentos?</h2>

      <p>
        Los documentos son textos que contienen información organizada
        y que tienen una finalidad específica dependiendo de su uso.
      </p>

      <div class="important-box">
        Cada documento tiene una estructura y propósito diferente:
        informar, registrar, identificar, solicitar o comunicar.
      </div>

      <div class="doc-grid">

        <div class="doc-card">
          <h3>🪪 Documentos personales</h3>
          <p>
            Identifican a una persona y contienen datos personales.
          </p>
        </div>

        <div class="doc-card">
          <h3>📄 Documentos administrativos</h3>
          <p>
            Se utilizan para trámites, solicitudes o registros oficiales.
          </p>
        </div>

        <div class="doc-card">
          <h3>📰 Documentos informativos</h3>
          <p>
            Transmiten información o noticias al público.
          </p>
        </div>

        <div class="doc-card">
          <h3>📚 Documentos académicos</h3>
          <p>
            Presentan investigaciones, tareas o actividades escolares.
          </p>
        </div>

      </div>
    </div>

    <div class="subtopic-section">

      <span class="subtopic-header-tag">Características</span>

      <h2 class="section-h2">Elementos de los documentos</h2>

      <h3 class="section-h3">📌 Encabezado</h3>
      <p>Identifica el documento y proporciona información principal.</p>

      <h3 class="section-h3">📝 Cuerpo</h3>
      <p>Contiene la información o mensaje principal.</p>

      <h3 class="section-h3">✍️ Firma o validación</h3>
      <p>Da autenticidad al documento.</p>

      <h3 class="section-h3">📅 Fecha</h3>
      <p>Indica cuándo fue elaborado o emitido.</p>

    </div>

  </div>

  <!-- LECTURAS -->

  <div class="sub-tab-content" id="lecturas">

    <div class="text-panel">

      <div class="text-title">
        📄 Ejemplo de documento administrativo
      </div>

      <div class="text-body">

SOLICITUD DE CONSTANCIA

Ciudad de México, 25 de marzo de 2024.

Por medio de la presente solicito una constancia de estudios
para realizar mi trámite de inscripción en la universidad.

Atentamente:
Juan Pérez Martínez

      </div>

    </div>

    <div class="text-panel">

      <div class="text-title">
        📰 Ejemplo de documento informativo
      </div>

      <div class="text-body">

La Secretaría de Educación anunció nuevas estrategias
para fortalecer la comprensión lectora en estudiantes de nivel medio superior.

El programa incluirá actividades digitales, lecturas guiadas
y evaluaciones interactivas.

      </div>

    </div>

    <div class="text-panel">

      <div class="text-title">
        🪪 Ejemplo de documento personal
      </div>

      <div class="text-body">

CREDENCIAL ESCOLAR

Nombre: María Fernanda López
Institución: Preparatoria Estatal No. 12
Matrícula: 202400145

      </div>

    </div>

  </div>

  <!-- EVALUACION -->

  <div class="sub-tab-content" id="evaluacion">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">Taller oficial</span>

      <h2 class="section-h2">
        Evaluación: Tipos de documentos
      </h2>

      <p>
        Resuelve las siguientes actividades sobre documentos
        personales, administrativos e informativos.
      </p>
    </div>

    <div class="quiz-card">

      <div class="quiz-question">
        1. ¿Cuál es la finalidad principal de un documento administrativo?
      </div>

      <label class="option-item">
        <input type="radio" name="doc1" value="a">
        A) Narrar una historia
      </label>

      <label class="option-item">
        <input type="radio" name="doc1" value="b">
        B) Realizar trámites o solicitudes
      </label>

      <label class="option-item">
        <input type="radio" name="doc1" value="c">
        C) Expresar emociones
      </label>

      <button class="btn-verify" onclick="verifyDoc1()">
        Verificar
      </button>

      <div class="feedback" id="feedback-doc1"></div>

    </div>

    <div class="quiz-card">

      <div class="quiz-question">
        2. Relaciona el tipo de documento con su función.
      </div>

      <div class="matching-row">
        <div class="option-item">🪪 Documento personal</div>

        <select class="matching-select" id="match-doc1">
          <option value="">Selecciona</option>
          <option value="a">Identificar a una persona</option>
          <option value="b">Difundir noticias</option>
          <option value="c">Realizar trámites</option>
        </select>
      </div>

      <div class="matching-row">
        <div class="option-item">📄 Documento administrativo</div>

        <select class="matching-select" id="match-doc2">
          <option value="">Selecciona</option>
          <option value="a">Identificar a una persona</option>
          <option value="b">Difundir noticias</option>
          <option value="c">Realizar trámites</option>
        </select>
      </div>

      <div class="matching-row">
        <div class="option-item">📰 Documento informativo</div>

        <select class="matching-select" id="match-doc3">
          <option value="">Selecciona</option>
          <option value="a">Identificar a una persona</option>
          <option value="b">Difundir noticias</option>
          <option value="c">Realizar trámites</option>
        </select>
      </div>

      <button class="btn-verify" onclick="verifyMatchingDocs()">
        Verificar relación
      </button>

      <div class="feedback" id="feedback-matching-docs"></div>

    </div>

    <div class="quiz-card">

      <div class="quiz-question">
        3. ¿Qué elementos debe contener un documento?
      </div>

      <textarea class="answer-area"
        placeholder="Escribe los elementos principales del documento..."
        rows="5"></textarea>

      <div class="important-box">
        Pista: piensa en encabezado, cuerpo, firma y fecha.
      </div>

    </div>

  </div>

</div>
`;
}

function verifyDoc1(){

  const selected = document.querySelector('input[name="doc1"]:checked');
  const feedback = document.getElementById("feedback-doc1");

  if(!selected){
    alert("Selecciona una opción.");
    return;
  }

  if(selected.value === "b"){
    feedback.className = "feedback correct";
    feedback.innerHTML = "✅ Correcto. Los documentos administrativos se utilizan para trámites y solicitudes.";
  }else{
    feedback.className = "feedback incorrect";
    feedback.innerHTML = "❌ Incorrecto. Revisa la finalidad de los documentos administrativos.";
  }
}

function verifyMatchingDocs(){

  const answers = {
    "match-doc1":"a",
    "match-doc2":"c",
    "match-doc3":"b"
  };

  let total = 0;

  Object.keys(answers).forEach(id=>{
    const el = document.getElementById(id);
    if(el && el.value === answers[id]) total++;
  });

  const feedback = document.getElementById("feedback-matching-docs");

  if(total === 3){
    feedback.className = "feedback correct";
    feedback.innerHTML = "✅ Excelente. Relacionaste correctamente los documentos.";
  }else{
    feedback.className = "feedback incorrect";
    feedback.innerHTML = `❌ Obtuviste ${total}/3. Revisa las funciones de cada documento.`;
  }
}
