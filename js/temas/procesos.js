function renderProcesos(){
return `
<div class="topic-shell">

  <div class="session-header">
    <h1>🏭 Procesos productivos</h1>
    <p>Entorno Social · Páginas 180 - 186 · CBTIS Reforzado</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" onclick="switchSubTab('procesos','teoria', this)">
      1.1 Teoría
    </button>

    <button class="tab-btn" onclick="switchSubTab('procesos','practica', this)">
      1.2 Práctica
    </button>

    <button class="tab-btn" onclick="switchSubTab('procesos','evaluacion', this)">
      1.3 Evaluación
    </button>
  </div>

  <div id="procesos-teoria" class="sub-tab-content active">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">SISTEMA POLÍTICO ECONÓMICO</span>
      <h2 class="section-h2">Procesos productivos</h2>

      <p>
        Un proceso productivo es el conjunto de etapas mediante las cuales una materia prima se transforma
        en un bien o servicio que puede ser consumido. Por ejemplo, el cacao puede convertirse en chocolate;
        el algodón en ropa; el trigo en pan; los minerales en partes de un celular.
      </p>

      <p>
        Para entender un proceso productivo hay que observar la cadena completa: obtención de recursos,
        transformación, distribución y consumo. También se relaciona con los sectores económicos:
        primario, secundario y terciario.
      </p>

      <div class="important-box">
        🎯 Primario obtiene recursos; secundario transforma; terciario ofrece servicios o comercializa.
      </div>

      <div class="map-container">
        <div class="map-root">Cadena productiva</div>
        <div class="map-branches">
          <div class="map-branch">
            <div class="branch-title">🌱 Materia prima</div>
            <div class="map-leaf">Recursos naturales: cacao, algodón, madera, minerales.</div>
          </div>
          <div class="map-branch">
            <div class="branch-title">🏭 Producción</div>
            <div class="map-leaf">Transformación en fábricas o talleres.</div>
          </div>
          <div class="map-branch">
            <div class="branch-title">🚚 Distribución</div>
            <div class="map-leaf">Transporte y venta a tiendas o consumidores.</div>
          </div>
          <div class="map-branch">
            <div class="branch-title">🛒 Consumo</div>
            <div class="map-leaf">Uso o compra del producto final.</div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div id="procesos-practica" class="sub-tab-content">

    <div class="subtopic-section">
      <h2 class="section-h2">Práctica: sigue la cadena productiva</h2>

      <div class="text-panel">
        <div class="text-title">Ejemplo: chocolate</div>
        <div class="text-body">1. Sector primario:
Se cultiva y cosecha cacao.

2. Sector secundario:
El cacao se procesa en una fábrica y se transforma en chocolate.

3. Sector terciario:
El chocolate se transporta, se vende en tiendas y llega al consumidor.</div>
      </div>

      <div class="text-panel">
        <div class="text-title">Ejemplo: playera</div>
        <div class="text-body">Algodón → tela → confección → transporte → tienda → consumidor.</div>
      </div>
    </div>

  </div>

  <div id="procesos-evaluacion" class="sub-tab-content">

    <div class="quiz-card">
      <div class="quiz-question">
        ¿Qué sector económico transforma materias primas en productos?
      </div>

      <label class="option-item">
        <input type="radio" name="procesos-q1" value="a">
        Secundario
      </label>
      <label class="option-item">
        <input type="radio" name="procesos-q1" value="b">
        Primario
      </label>
      <label class="option-item">
        <input type="radio" name="procesos-q1" value="c">
        Terciario
      </label>
      <label class="option-item">
        <input type="radio" name="procesos-q1" value="d">
        Judicial
      </label>

      <button class="btn-verify" onclick="verifyEntorno('procesos-q1','a','feedback-procesos-q1','El sector secundario transforma materias primas.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-procesos-q1"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">
        Cultivar cacao pertenece al sector:
      </div>

      <label class="option-item">
        <input type="radio" name="procesos-q2" value="a">
        Primario
      </label>
      <label class="option-item">
        <input type="radio" name="procesos-q2" value="b">
        Secundario
      </label>
      <label class="option-item">
        <input type="radio" name="procesos-q2" value="c">
        Terciario
      </label>
      <label class="option-item">
        <input type="radio" name="procesos-q2" value="d">
        Legislativo
      </label>

      <button class="btn-verify" onclick="verifyEntorno('procesos-q2','a','feedback-procesos-q2','El sector primario obtiene recursos naturales.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-procesos-q2"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">
        Transportar y vender un producto corresponde principalmente al sector:
      </div>

      <label class="option-item">
        <input type="radio" name="procesos-q3" value="a">
        Terciario
      </label>
      <label class="option-item">
        <input type="radio" name="procesos-q3" value="b">
        Primario
      </label>
      <label class="option-item">
        <input type="radio" name="procesos-q3" value="c">
        Secundario
      </label>
      <label class="option-item">
        <input type="radio" name="procesos-q3" value="d">
        Electoral
      </label>

      <button class="btn-verify" onclick="verifyEntorno('procesos-q3','a','feedback-procesos-q3','El sector terciario incluye comercio y servicios.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-procesos-q3"></div>
    </div>

  </div>

</div>
`;
}


function verifyEntorno(name, correct, feedbackId, explanation){
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
    feedback.innerHTML = "❌ Revisa el razonamiento. " + explanation;
  }
}

