function renderDispersion(){
return `

<style>
.lesson-note{background:rgba(0,229,255,.08);border:1px solid rgba(0,229,255,.18);border-radius:18px;padding:20px;color:#cbd5e1;line-height:1.8;margin:18px 0;}
.math-expression{font-size:1.25rem;color:white;background:rgba(0,229,255,.08);border:1px solid rgba(0,229,255,.2);padding:14px;border-radius:14px;margin:12px 0;font-weight:bold;}
.step-list{display:grid;gap:12px;margin-top:14px;}
.step-item{background:rgba(255,255,255,.06);border-left:4px solid #00e5ff;padding:14px;border-radius:14px;color:#cbd5e1;line-height:1.7;}
.level-badge{display:inline-block;padding:6px 12px;border-radius:999px;background:rgba(157,78,221,.18);border:1px solid rgba(157,78,221,.35);color:#e9d5ff;font-weight:bold;margin-bottom:12px;}
.tip-box{background:rgba(0,255,159,.08);border:1px solid rgba(0,255,159,.2);border-left:4px solid #00ff9f;padding:16px;border-radius:14px;color:#cbd5e1;line-height:1.7;margin:16px 0;}
.trap-box{background:rgba(255,80,80,.08);border:1px solid rgba(255,80,80,.2);border-left:4px solid #ff5050;padding:16px;border-radius:14px;color:#cbd5e1;line-height:1.7;margin:16px 0;}
.styled-table{width:100%;border-collapse:collapse;margin:18px 0;color:#cbd5e1;}
.styled-table th,.styled-table td{border:1px solid rgba(255,255,255,.12);padding:12px;text-align:center;}
.styled-table th{color:#00e5ff;background:rgba(0,229,255,.08);}
.graph-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:18px;margin:18px 0;}
.bar-row{display:grid;grid-template-columns:135px 1fr 70px;gap:12px;align-items:center;margin:12px 0;color:#cbd5e1;}
.bar-track{height:20px;background:rgba(255,255,255,.08);border-radius:999px;overflow:hidden;}
.bar-fill{height:100%;background:linear-gradient(90deg,#00e5ff,#9d4edd);border-radius:999px;}
.dot-line{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:14px 0;}
.dot{width:18px;height:18px;border-radius:50%;background:#00e5ff;box-shadow:0 0 10px rgba(0,229,255,.7);}
.dot.alt{background:#9d4edd;box-shadow:0 0 10px rgba(157,78,221,.7);}
.compare-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;margin-top:18px;}
.compare-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:18px;color:#cbd5e1;}
.compare-card h3{color:#00e5ff;margin-bottom:10px;}
</style>

<div class="topic-shell">

  <div class="session-header">
    <h1>📉 Medidas de dispersión</h1>
    <p>Matemáticas · Forma, espacio y medida · Páginas 127 - 134</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">Teoría guiada</button>
    <button class="tab-btn" id="btn-ejemplos" onclick="switchTab('ejemplos')">Ejemplos guiados</button>
    <button class="tab-btn" id="btn-graficas" onclick="switchTab('graficas')">Gráficas</button>
    <button class="tab-btn" id="btn-practica" onclick="switchTab('practica')">Práctica CBTIS</button>
    <button class="tab-btn" id="btn-reto" onclick="switchTab('reto')">Reto final</button>
  </div>

  <!-- =========================
       TEORÍA
  ========================== -->

  <div class="sub-tab-content active" id="teoria">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">🎯 Concepto central</span>
      <h2 class="section-h2">¿Qué son las medidas de dispersión?</h2>

      <div class="lesson-note">
        Las medidas de dispersión sirven para saber qué tan separados o qué tan juntos están los datos de un grupo.
        No basta con saber el promedio: también importa saber si los datos están concentrados o muy alejados entre sí.
      </div>

      <div class="compare-grid">
        <div class="compare-card">
          <h3>📌 Baja dispersión</h3>
          <p>Los datos están muy juntos.</p>
          <p><strong>Ejemplo:</strong> 8, 9, 10, 11, 12</p>
        </div>

        <div class="compare-card">
          <h3>📌 Alta dispersión</h3>
          <p>Los datos están muy separados.</p>
          <p><strong>Ejemplo:</strong> 2, 5, 10, 15, 18</p>
        </div>
      </div>

      <div class="tip-box">
        💡 Idea sencilla: la dispersión mide cuánto “se abren” los datos.
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">📏 Rango</span>
      <h2 class="section-h2">La medida más básica: el rango</h2>

      <p>
        El rango indica la distancia entre el dato más grande y el dato más pequeño.
      </p>

      <div class="math-expression">
        Rango = dato mayor − dato menor
      </div>

      <div class="step-list">
        <div class="step-item">1️⃣ Localiza el dato mayor.</div>
        <div class="step-item">2️⃣ Localiza el dato menor.</div>
        <div class="step-item">3️⃣ Resta: mayor − menor.</div>
      </div>

      <div class="tip-box">
        🎯 Tip CBTIS: si el rango es grande, los datos están más dispersos.
      </div>

      <div class="trap-box">
        ❌ Error común: restar el primer dato menos el último sin revisar cuál es mayor y cuál es menor.
      </div>
    </div>

    <div class="subtopic-section">
      <span class="subtopic-header-tag">🧠 Interpretación</span>
      <h2 class="section-h2">¿Por qué no basta con el promedio?</h2>

      <p>
        Dos grupos pueden tener el mismo promedio, pero comportarse de forma muy diferente.
      </p>

      <table class="styled-table">
        <tr>
          <th>Grupo</th>
          <th>Datos</th>
          <th>Promedio</th>
          <th>Dispersión</th>
        </tr>

        <tr>
          <td>A</td>
          <td>8, 9, 10, 11, 12</td>
          <td>10</td>
          <td>Baja</td>
        </tr>

        <tr>
          <td>B</td>
          <td>2, 5, 10, 15, 18</td>
          <td>10</td>
          <td>Alta</td>
        </tr>
      </table>

      <div class="important-box">
        ✅ Aunque ambos tienen promedio 10, el Grupo B está más disperso porque sus datos están más separados.
      </div>
    </div>

  </div>

  <!-- =========================
       EJEMPLOS
  ========================== -->

  <div class="sub-tab-content" id="ejemplos">

    <div class="subtopic-section">
      <span class="level-badge">Ejemplo 1</span>
      <h2 class="section-h2">Datos: 4, 7, 9, 15</h2>

      <div class="step-list">
        <div class="step-item">Dato mayor = 15</div>
        <div class="step-item">Dato menor = 4</div>
        <div class="step-item">Rango = 15 − 4 = 11</div>
      </div>

      <div class="tip-box">
        Interpretación: los datos se extienden 11 unidades desde el menor hasta el mayor.
      </div>
    </div>

    <div class="subtopic-section">
      <span class="level-badge">Ejemplo 2</span>
      <h2 class="section-h2">Comparar dos grupos</h2>

      <table class="styled-table">
        <tr>
          <th>Grupo A</th>
          <th>Grupo B</th>
        </tr>

        <tr>
          <td>7, 8, 9, 10</td>
          <td>1, 5, 12, 20</td>
        </tr>
      </table>

      <div class="step-list">
        <div class="step-item">Rango A = 10 − 7 = 3</div>
        <div class="step-item">Rango B = 20 − 1 = 19</div>
        <div class="step-item">El Grupo B tiene mayor dispersión.</div>
      </div>
    </div>

    <div class="subtopic-section">
      <span class="level-badge">Ejemplo CBTIS</span>
      <h2 class="section-h2">Calificaciones de dos equipos</h2>

      <table class="styled-table">
        <tr>
          <th>Equipo</th>
          <th>Calificaciones</th>
          <th>Rango</th>
        </tr>

        <tr>
          <td>Equipo 1</td>
          <td>8, 8, 9, 9, 10</td>
          <td>2</td>
        </tr>

        <tr>
          <td>Equipo 2</td>
          <td>5, 7, 9, 10, 14</td>
          <td>9</td>
        </tr>
      </table>

      <div class="important-box">
        El Equipo 2 tiene mayor dispersión porque sus calificaciones están más separadas.
      </div>
    </div>

  </div>

  <!-- =========================
       GRÁFICAS
  ========================== -->

  <div class="sub-tab-content" id="graficas">

    <div class="graph-card">
      <h2 class="section-h2">Datos en línea</h2>

      <p>Grupo A está concentrado cerca del centro:</p>
      <div class="dot-line">
        <span>8</span><span class="dot"></span>
        <span>9</span><span class="dot"></span>
        <span>10</span><span class="dot"></span>
        <span>11</span><span class="dot"></span>
        <span>12</span><span class="dot"></span>
      </div>

      <p>Grupo B está más separado:</p>
      <div class="dot-line">
        <span>2</span><span class="dot alt"></span>
        <span>5</span><span class="dot alt"></span>
        <span>10</span><span class="dot alt"></span>
        <span>15</span><span class="dot alt"></span>
        <span>18</span><span class="dot alt"></span>
      </div>
    </div>

    <div class="graph-card">
      <h2 class="section-h2">Comparación de rangos</h2>

      <div class="bar-row">
        <span>Grupo A</span>
        <div class="bar-track"><div class="bar-fill" style="width:25%"></div></div>
        <span>4</span>
      </div>

      <div class="bar-row">
        <span>Grupo B</span>
        <div class="bar-track"><div class="bar-fill" style="width:100%"></div></div>
        <span>16</span>
      </div>
    </div>

    <div class="trap-box">
      Observa: el promedio puede ser parecido, pero el rango muestra qué grupo está más disperso.
    </div>

  </div>

  <!-- =========================
       PRÁCTICA
  ========================== -->

  <div class="sub-tab-content" id="practica">

    <div class="quiz-card">
      <div class="quiz-question">1. ¿Cuál es el rango de 3, 8, 10, 14, 20?</div>

      <label class="option-item"><input type="radio" name="disp1" value="a"> 17</label>
      <label class="option-item"><input type="radio" name="disp1" value="b"> 20</label>
      <label class="option-item"><input type="radio" name="disp1" value="c"> 23</label>
      <label class="option-item"><input type="radio" name="disp1" value="d"> 10</label>

      <button class="btn-verify" onclick="verifyDispersion('disp1','a','feedback-disp1','Rango = 20 − 3 = 17.')">Verificar</button>
      <div class="feedback" id="feedback-disp1"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">2. ¿Qué grupo tiene mayor dispersión?</div>

      <label class="option-item"><input type="radio" name="disp2" value="a"> 5, 6, 7, 8</label>
      <label class="option-item"><input type="radio" name="disp2" value="b"> 1, 4, 8, 15</label>
      <label class="option-item"><input type="radio" name="disp2" value="c"> 9, 9, 10, 10</label>
      <label class="option-item"><input type="radio" name="disp2" value="d"> 6, 7, 7, 8</label>

      <button class="btn-verify" onclick="verifyDispersion('disp2','b','feedback-disp2','Sus datos están más separados; rango = 15 − 1 = 14.')">Verificar</button>
      <div class="feedback" id="feedback-disp2"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">3. Si los datos están muy juntos, la dispersión es:</div>

      <label class="option-item"><input type="radio" name="disp3" value="a"> Alta</label>
      <label class="option-item"><input type="radio" name="disp3" value="b"> Baja</label>
      <label class="option-item"><input type="radio" name="disp3" value="c"> Infinita</label>
      <label class="option-item"><input type="radio" name="disp3" value="d"> Negativa</label>

      <button class="btn-verify" onclick="verifyDispersion('disp3','b','feedback-disp3','Datos juntos significan poca dispersión.')">Verificar</button>
      <div class="feedback" id="feedback-disp3"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">4. Dos grupos tienen el mismo promedio, pero uno tiene datos más separados. Ese grupo tiene:</div>

      <label class="option-item"><input type="radio" name="disp4" value="a"> Menor dispersión</label>
      <label class="option-item"><input type="radio" name="disp4" value="b"> Mayor dispersión</label>
      <label class="option-item"><input type="radio" name="disp4" value="c"> Menor rango siempre igual a cero</label>
      <label class="option-item"><input type="radio" name="disp4" value="d"> Más área</label>

      <button class="btn-verify" onclick="verifyDispersion('disp4','b','feedback-disp4','Datos más separados significan mayor dispersión.')">Verificar</button>
      <div class="feedback" id="feedback-disp4"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">5. ¿Cuál grupo está menos disperso?</div>

      <label class="option-item"><input type="radio" name="disp5" value="a"> 1, 10, 20</label>
      <label class="option-item"><input type="radio" name="disp5" value="b"> 7, 8, 9</label>
      <label class="option-item"><input type="radio" name="disp5" value="c"> 2, 14, 30</label>
      <label class="option-item"><input type="radio" name="disp5" value="d"> 0, 15, 40</label>

      <button class="btn-verify" onclick="verifyDispersion('disp5','b','feedback-disp5','7, 8 y 9 están muy cerca entre sí.')">Verificar</button>
      <div class="feedback" id="feedback-disp5"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">6. ¿Cuál es el error si alguien calcula el rango usando el primer dato y el último sin ordenar?</div>

      <label class="option-item"><input type="radio" name="disp6" value="a"> Puede no usar el dato mayor y menor reales.</label>
      <label class="option-item"><input type="radio" name="disp6" value="b"> Siempre obtiene la media.</label>
      <label class="option-item"><input type="radio" name="disp6" value="c"> Calcula el área.</label>
      <label class="option-item"><input type="radio" name="disp6" value="d"> No existe error.</label>

      <button class="btn-verify" onclick="verifyDispersion('disp6','a','feedback-disp6','Para el rango necesitas el mayor y el menor, no necesariamente el primero y el último.')">Verificar</button>
      <div class="feedback" id="feedback-disp6"></div>
    </div>

  </div>

  <!-- =========================
       RETO FINAL
  ========================== -->

  <div class="sub-tab-content" id="reto">

    <div class="quiz-card">
      <div class="quiz-question">
        🎮 Reto CBTIS:
        Grupo A: 6, 7, 8, 9, 10.
        Grupo B: 2, 5, 8, 11, 14.
        ¿Cuál interpretación es correcta?
      </div>

      <label class="option-item"><input type="radio" name="dispreto" value="a"> A) Ambos grupos tienen la misma dispersión.</label>
      <label class="option-item"><input type="radio" name="dispreto" value="b"> B) El Grupo A está más disperso.</label>
      <label class="option-item"><input type="radio" name="dispreto" value="c"> C) El Grupo B está más disperso.</label>
      <label class="option-item"><input type="radio" name="dispreto" value="d"> D) No se puede comparar.</label>

      <button class="btn-verify" onclick="verifyDispersion('dispreto','c','feedback-dispreto','Grupo A: rango 10−6=4. Grupo B: rango 14−2=12. El Grupo B está más disperso.')">Verificar</button>
      <div class="feedback" id="feedback-dispreto"></div>
    </div>

  </div>

</div>`;
}

window.renderDispersion = renderDispersion;

function verifyDispersion(name, correct, feedbackId, explanation){
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
    feedback.innerHTML = "❌ Revisa con calma. " + explanation;
  }
}

window.verifyDispersion = verifyDispersion;
