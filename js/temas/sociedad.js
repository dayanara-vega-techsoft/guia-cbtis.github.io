function renderSociedad(){
return `
<div class="topic-shell">

  <div class="session-header">
    <h1>🏙️ Sociedad mexicana contemporánea</h1>
    <p>Entorno Social · Páginas 149 - 156 · CBTIS Reforzado</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" onclick="switchSubTab('sociedad','teoria', this)">
      1.1 Teoría
    </button>

    <button class="tab-btn" onclick="switchSubTab('sociedad','practica', this)">
      1.2 Práctica
    </button>

    <button class="tab-btn" onclick="switchSubTab('sociedad','evaluacion', this)">
      1.3 Evaluación
    </button>
  </div>

  <div id="sociedad-teoria" class="sub-tab-content active">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">MEDIO SOCIAL</span>
      <h2 class="section-h2">Sociedad mexicana contemporánea</h2>

      <p>
        La sociedad mexicana contemporánea es el México actual: una sociedad diversa, con zonas urbanas
        y rurales, influida por la tecnología, la globalización, la migración, los medios de comunicación,
        nuevas formas de familia y cambios en la educación y el trabajo.
      </p>

      <p>
        Para entenderla, hay que observar cómo viven las personas hoy: cómo se comunican, cómo estudian,
        cómo trabajan, qué problemas enfrentan y cómo participan. Las redes sociales permiten informarse
        rápido, pero también generan retos como desinformación, dependencia tecnológica y brecha digital.
      </p>

      <div class="important-box">
        🎯 Idea CBTIS: sociedad contemporánea = México actual con cambios tecnológicos, culturales,
        económicos, familiares y sociales.
      </div>

      <div class="map-container">
        <div class="map-root">Rasgos de la sociedad mexicana actual</div>
        <div class="map-branches">
          <div class="map-branch">
            <div class="branch-title">📱 Tecnología</div>
            <div class="map-leaf">Redes sociales, clases en línea, pagos digitales, trámites.</div>
          </div>
          <div class="map-branch">
            <div class="branch-title">🏙️ Urbanización</div>
            <div class="map-leaf">Crecimiento de ciudades y cambios en transporte, vivienda y empleo.</div>
          </div>
          <div class="map-branch">
            <div class="branch-title">🌎 Globalización</div>
            <div class="map-leaf">Intercambio cultural, económico e informativo con otros países.</div>
          </div>
          <div class="map-branch">
            <div class="branch-title">👨‍👩‍👧 Diversidad</div>
            <div class="map-leaf">Distintas culturas, costumbres, familias, identidades y formas de vida.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Ventajas y retos</h2>
      <p>
        Entre las ventajas están el acceso rápido a información, comunicación inmediata, nuevas formas
        de estudiar y trabajar. Entre los retos están la desigualdad, violencia, desempleo, contaminación,
        discriminación, migración y brecha digital.
      </p>
    </div>

  </div>

  <div id="sociedad-practica" class="sub-tab-content">

    <div class="text-panel">
      <div class="text-title">Caso guiado</div>
      <div class="text-body">En una secundaria, algunos estudiantes toman clases en línea con computadora propia. Otros dependen del celular de sus padres y de datos móviles limitados.

Este caso muestra que la tecnología transforma la educación, pero también puede aumentar desigualdades si no todos tienen acceso a las mismas herramientas.</div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Práctica de interpretación</h2>
      <ul>
        <li>Identifica el cambio social: tecnología, urbanización, globalización o diversidad.</li>
        <li>Reconoce si el cambio trae beneficios, problemas o ambos.</li>
        <li>Relaciona el caso con la vida cotidiana en México actual.</li>
      </ul>
    </div>

    <div class="text-panel">
      <div class="text-title">Antes y ahora</div>
      <div class="text-body">Antes:
- la información circulaba más lento
- había menos dispositivos digitales
- muchos trámites eran presenciales

Ahora:
- la información llega en segundos
- se estudia y trabaja con apoyo digital
- la participación también ocurre en redes</div>
    </div>

  </div>

  <div id="sociedad-evaluacion" class="sub-tab-content">

    <div class="quiz-card">
      <div class="quiz-question">
        Una familia realiza pagos, clases y trámites por internet. ¿Qué rasgo de la sociedad mexicana contemporánea refleja?
      </div>

      <label class="option-item">
        <input type="radio" name="sociedad-q1" value="a">
        Tecnologización de la vida cotidiana
      </label>
      <label class="option-item">
        <input type="radio" name="sociedad-q1" value="b">
        Desaparición de la cultura
      </label>
      <label class="option-item">
        <input type="radio" name="sociedad-q1" value="c">
        Aislamiento obligatorio
      </label>
      <label class="option-item">
        <input type="radio" name="sociedad-q1" value="d">
        Proceso electoral
      </label>

      <button class="btn-verify" onclick="verifyEntorno('sociedad-q1','a','feedback-sociedad-q1','El caso muestra cómo la tecnología modifica actividades diarias.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-sociedad-q1"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">
        ¿Cuál es un reto de la sociedad mexicana contemporánea?
      </div>

      <label class="option-item">
        <input type="radio" name="sociedad-q2" value="a">
        Brecha digital
      </label>
      <label class="option-item">
        <input type="radio" name="sociedad-q2" value="b">
        Ausencia total de comunicación
      </label>
      <label class="option-item">
        <input type="radio" name="sociedad-q2" value="c">
        Fin de la urbanización
      </label>
      <label class="option-item">
        <input type="radio" name="sociedad-q2" value="d">
        Eliminación de redes
      </label>

      <button class="btn-verify" onclick="verifyEntorno('sociedad-q2','a','feedback-sociedad-q2','No todos tienen el mismo acceso a internet o dispositivos.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-sociedad-q2"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">
        La globalización se relaciona con:
      </div>

      <label class="option-item">
        <input type="radio" name="sociedad-q3" value="a">
        Intercambio entre países y culturas
      </label>
      <label class="option-item">
        <input type="radio" name="sociedad-q3" value="b">
        Aislamiento de comunidades
      </label>
      <label class="option-item">
        <input type="radio" name="sociedad-q3" value="c">
        Eliminación de tecnología
      </label>
      <label class="option-item">
        <input type="radio" name="sociedad-q3" value="d">
        Prohibición de comercio
      </label>

      <button class="btn-verify" onclick="verifyEntorno('sociedad-q3','a','feedback-sociedad-q3','La globalización conecta economías, culturas e información.')">
        Verificar
      </button>

      <div class="feedback" id="feedback-sociedad-q3"></div>
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

