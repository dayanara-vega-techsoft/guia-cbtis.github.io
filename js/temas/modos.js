function renderModos(){
return `
<div class="topic-shell">

  <div class="session-header">
    <h1>🧠 Modos discursivos</h1>
    <p>Tema 2 · Páginas 26 - 31</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">2.1 Teoría</button>
    <button class="tab-btn" id="btn-lecturas" onclick="switchTab('lecturas')">2.2 Lecturas prácticas</button>
    <button class="tab-btn" id="btn-evaluacion" onclick="switchTab('evaluacion')">2.3 Taller de evaluación</button>
  </div>

  <div class="sub-tab-content active" id="teoria">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">🎯 Concepto general</span>
      <h2 class="section-h2">¿Qué son los modos discursivos?</h2>

      <p>
        Los modos discursivos son las formas en que una persona organiza sus ideas
        y su lenguaje para expresar un mensaje.
      </p>

      <p>
        Dependiendo de lo que queremos decir, podemos usar distintos modos:
        explicar, describir, comparar, dar ejemplos, enumerar, resumir, refutar o
        repetir ideas importantes.
      </p>

      <div class="important-box">
        💡 Idea fácil: los modos discursivos son como “herramientas” que usa un texto
        para que el mensaje se entienda mejor.
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">📘 Modos discursivos de la guía</span>
      <h2 class="section-h2">Lista completa explicada fácil</h2>

      <div class="map-container">
        <div class="map-title">Modos discursivos más usados</div>

        <div class="map-branches">

          <div class="map-branch">
            <div class="branch-title">🔎 Amplificación</div>
            <div class="map-leaf">Detalla o profundiza una idea para enriquecerla.</div>
            <div class="map-leaf">Ejemplo: explicar con más datos por qué un problema es importante.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">⏳ Antecedente-consecuente</div>
            <div class="map-leaf">Expone el origen de un tema y sus consecuencias.</div>
            <div class="map-leaf">Ejemplo: “Primero ocurrió esto; después provocó aquello”.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">⚡ Causa-efecto</div>
            <div class="map-leaf">Muestra motivos y resultados.</div>
            <div class="map-leaf">Ejemplo: “Llovió toda la noche, por eso la calle está mojada”.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">⚖️ Comparación</div>
            <div class="map-leaf">Explica semejanzas o diferencias entre ideas u objetos.</div>
            <div class="map-leaf">Ejemplo: comparar un libro digital con uno impreso.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">📘 Definición</div>
            <div class="map-leaf">Nombra y explica con precisión qué significa algo.</div>
            <div class="map-leaf">Ejemplo: “La fotosíntesis es...”</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">✅ Demostración</div>
            <div class="map-leaf">Prueba algo usando razones o verdades evidentes.</div>
            <div class="map-leaf">Ejemplo: comprobar una idea con datos o evidencias.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">📝 Descripción</div>
            <div class="map-leaf">Detalla personas, objetos, lugares o situaciones.</div>
            <div class="map-leaf">Ejemplo: describir cómo es una biblioteca.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🌎 Ejemplificación</div>
            <div class="map-leaf">Aclara una idea mediante ejemplos.</div>
            <div class="map-leaf">Ejemplo: “Animales en peligro: ajolote, jaguar y vaquita marina”.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">📊 Enumeración</div>
            <div class="map-leaf">Presenta una lista de elementos.</div>
            <div class="map-leaf">Ejemplo: “Necesitas lápiz, borrador, regla y calculadora”.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🎯 Especificación</div>
            <div class="map-leaf">Explica rasgos específicos para distinguir un hecho de otros.</div>
            <div class="map-leaf">Ejemplo: aclarar características particulares de un fenómeno.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">😏 Ironía</div>
            <div class="map-leaf">Expresa algo aparentemente contrario a lo que en realidad se quiere decir.</div>
            <div class="map-leaf">Ejemplo: decir “qué puntual” a alguien que llegó tarde.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🔁 Recapitulación</div>
            <div class="map-leaf">Resume o recupera lo dicho anteriormente.</div>
            <div class="map-leaf">Ejemplo: “En resumen, el tema trata de...”</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🚫 Refutación</div>
            <div class="map-leaf">Contradice o impugna un argumento.</div>
            <div class="map-leaf">Ejemplo: explicar por qué una idea no es correcta.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">🔂 Reiteración</div>
            <div class="map-leaf">Repite ideas, nombres, datos o situaciones para reforzarlas.</div>
            <div class="map-leaf">Ejemplo: repetir una idea clave para que el lector la recuerde.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">📚 Referencia</div>
            <div class="map-leaf">Hace alusión a otros textos, documentos o autores relacionados.</div>
            <div class="map-leaf">Ejemplo: mencionar a un autor o fuente para apoyar una idea.</div>
          </div>

        </div>
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">🧠 Tip rápido EDIEMS</span>
      <h2 class="section-h2">¿Cómo identificarlos en examen?</h2>

      <ul>
        <li>Si explica qué es algo → <strong>Definición</strong></li>
        <li>Si dice cómo es algo → <strong>Descripción</strong></li>
        <li>Si muestra causas y resultados → <strong>Causa-efecto</strong></li>
        <li>Si compara dos ideas → <strong>Comparación</strong></li>
        <li>Si da una lista → <strong>Enumeración</strong></li>
        <li>Si usa ejemplos → <strong>Ejemplificación</strong></li>
        <li>Si contradice una idea → <strong>Refutación</strong></li>
        <li>Si resume lo anterior → <strong>Recapitulación</strong></li>
      </ul>
    </div>

  </div>

  <div class="sub-tab-content" id="lecturas">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">📖 Lectura práctica 1</span>
      <h2 class="section-h2">Identifica causa-efecto</h2>

      <div class="text-panel">
        <div class="text-title">Texto</div>
        <div class="text-body">Llovió toda la noche, por eso la calle amaneció mojada.</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">¿Qué modo discursivo se utiliza?</div>
        <label class="option-item"><input type="radio" name="lect1" value="a"> A) Causa-efecto</label>
        <label class="option-item"><input type="radio" name="lect1" value="b"> B) Ironía</label>
        <label class="option-item"><input type="radio" name="lect1" value="c"> C) Referencia</label>
        <label class="option-item"><input type="radio" name="lect1" value="d"> D) Recapitulación</label>
        <button class="btn-verify" onclick="verifyLect1()">Revisar respuesta</button>
        <div class="feedback" id="feedback-lect1"></div>
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">📖 Lectura práctica 2</span>
      <h2 class="section-h2">Identifica enumeración</h2>

      <div class="text-panel">
        <div class="text-title">Texto</div>
        <div class="text-body">Para estudiar necesitas libreta, lápiz, borrador, calculadora y una guía de repaso.</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">¿Qué modo discursivo aparece?</div>
        <label class="option-item"><input type="radio" name="lect2" value="a"> A) Comparación</label>
        <label class="option-item"><input type="radio" name="lect2" value="b"> B) Enumeración</label>
        <label class="option-item"><input type="radio" name="lect2" value="c"> C) Refutación</label>
        <label class="option-item"><input type="radio" name="lect2" value="d"> D) Ironía</label>
        <button class="btn-verify" onclick="verifyLect2()">Revisar respuesta</button>
        <div class="feedback" id="feedback-lect2"></div>
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">📖 Lectura práctica 3</span>
      <h2 class="section-h2">Identifica ironía</h2>

      <div class="text-panel">
        <div class="text-title">Texto</div>
        <div class="text-body">“Qué puntual llegaste”, dijo Ana a Luis, aunque él llegó media hora tarde.</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-question">¿Qué modo discursivo se utiliza?</div>
        <label class="option-item"><input type="radio" name="lect3" value="a"> A) Definición</label>
        <label class="option-item"><input type="radio" name="lect3" value="b"> B) Ironía</label>
        <label class="option-item"><input type="radio" name="lect3" value="c"> C) Enumeración</label>
        <label class="option-item"><input type="radio" name="lect3" value="d"> D) Referencia</label>
        <button class="btn-verify" onclick="verifyLect3()">Revisar respuesta</button>
        <div class="feedback" id="feedback-lect3"></div>
      </div>
    </div>

  </div>

  <div class="sub-tab-content" id="evaluacion">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">📝 Taller CBTIS / EDIEMS</span>
      <h2 class="section-h2">Evaluación práctica</h2>
      <p>Responde las preguntas basadas en los modos discursivos de la guía.</p>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">1. ¿Qué modo discursivo detalla con mayor profundidad una idea?</div>
      <label class="option-item"><input type="radio" name="q1" value="a"> A) Amplificación</label>
      <label class="option-item"><input type="radio" name="q1" value="b"> B) Ironía</label>
      <label class="option-item"><input type="radio" name="q1" value="c"> C) Referencia</label>
      <label class="option-item"><input type="radio" name="q1" value="d"> D) Refutación</label>
      <button class="btn-verify" onclick="verifyQ1()">Revisar respuesta</button>
      <div class="feedback" id="feedback-q1"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">2. ¿Qué modo discursivo muestra motivos y resultados?</div>
      <label class="option-item"><input type="radio" name="q2" value="a"> A) Descripción</label>
      <label class="option-item"><input type="radio" name="q2" value="b"> B) Causa-efecto</label>
      <label class="option-item"><input type="radio" name="q2" value="c"> C) Reiteración</label>
      <label class="option-item"><input type="radio" name="q2" value="d"> D) Referencia</label>
      <button class="btn-verify" onclick="verifyQ2()">Revisar respuesta</button>
      <div class="feedback" id="feedback-q2"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">3. ¿Qué modo discursivo contradice un argumento?</div>
      <label class="option-item"><input type="radio" name="q3" value="a"> A) Refutación</label>
      <label class="option-item"><input type="radio" name="q3" value="b"> B) Enumeración</label>
      <label class="option-item"><input type="radio" name="q3" value="c"> C) Definición</label>
      <label class="option-item"><input type="radio" name="q3" value="d"> D) Descripción</label>
      <button class="btn-verify" onclick="verifyQ3()">Revisar respuesta</button>
      <div class="feedback" id="feedback-q3"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">4. ¿Qué modo discursivo hace alusión a otros textos, documentos o autores?</div>
      <label class="option-item"><input type="radio" name="q4" value="a"> A) Ironía</label>
      <label class="option-item"><input type="radio" name="q4" value="b"> B) Referencia</label>
      <label class="option-item"><input type="radio" name="q4" value="c"> C) Recapitulación</label>
      <label class="option-item"><input type="radio" name="q4" value="d"> D) Comparación</label>
      <button class="btn-verify" onclick="verifyQ4()">Revisar respuesta</button>
      <div class="feedback" id="feedback-q4"></div>
    </div>

  </div>

</div>
`;
}

function verifySimple(name,correct,id,msg){
  const selected=document.querySelector(`input[name="${name}"]:checked`);
  const feedback=document.getElementById(id);
  if(!selected){ alert("Selecciona una opción."); return; }

  if(selected.value===correct){
    feedback.className="feedback correct";
    feedback.innerHTML=msg;
  }else{
    feedback.className="feedback incorrect";
    feedback.innerHTML="❌ Respuesta incorrecta. Revisa nuevamente la teoría.";
  }
}

function verifyLect1(){ verifySimple("lect1","a","feedback-lect1","✅ Correcto. Muestra una causa y su consecuencia."); }
function verifyLect2(){ verifySimple("lect2","b","feedback-lect2","✅ Correcto. Presenta elementos en forma de lista."); }
function verifyLect3(){ verifySimple("lect3","b","feedback-lect3","✅ Correcto. Dice lo contrario de lo que realmente quiere expresar."); }

function verifyQ1(){ verifySimple("q1","a","feedback-q1","✅ Correcto. La amplificación profundiza una idea."); }
function verifyQ2(){ verifySimple("q2","b","feedback-q2","✅ Correcto. Causa-efecto muestra motivos y resultados."); }
function verifyQ3(){ verifySimple("q3","a","feedback-q3","✅ Correcto. La refutación contradice un argumento."); }
function verifyQ4(){ verifySimple("q4","b","feedback-q4","✅ Correcto. La referencia alude a otros textos, documentos o autores."); }
