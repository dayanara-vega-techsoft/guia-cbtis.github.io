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
.shape-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;margin-top:18px;}
.shape-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:18px;color:#cbd5e1;}
.shape-card h3{color:#00e5ff;margin-bottom:10px;}
.mini-svg{width:100%;height:140px;margin:10px 0;}
.square-grid{display:grid;grid-template-columns:repeat(6,32px);gap:4px;margin:18px 0;}
.square-cell{width:32px;height:32px;background:rgba(0,229,255,.25);border:1px solid rgba(0,229,255,.55);border-radius:5px;}
.dot-line{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:14px 0;}
.dot{width:18px;height:18px;border-radius:50%;background:#00e5ff;box-shadow:0 0 10px rgba(0,229,255,.7);}
.dot.alt{background:#9d4edd;box-shadow:0 0 10px rgba(157,78,221,.7);}
.coin-row{display:flex;gap:12px;flex-wrap:wrap;margin:14px 0;}
.coin{width:54px;height:54px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.08);border:2px solid rgba(0,229,255,.35);color:#fff;font-weight:bold;}
</style>

<div class="topic-shell">
  <div class="session-header"><h1>📉 Medidas de dispersión</h1><p>Matemáticas · Forma, espacio y medida · Páginas 127 - 134</p></div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">Teoría guiada</button>
    <button class="tab-btn" id="btn-ejemplos" onclick="switchTab('ejemplos')">Ejemplos</button>
    <button class="tab-btn" id="btn-graficas" onclick="switchTab('graficas')">Gráficas</button>
    <button class="tab-btn" id="btn-practica" onclick="switchTab('practica')">Práctica CBTIS</button>
  </div>

  <div class="sub-tab-content active" id="teoria">
    <div class="subtopic-section">
      <h2 class="section-h2">¿Qué tan separados están los datos?</h2>
      <div class="lesson-note">
        Las medidas de dispersión sirven para saber si los datos están muy juntos o muy separados.
        Dos grupos pueden tener un promedio parecido, pero uno puede ser más variable que otro.
      </div>
      <div class="math-expression">Rango = dato mayor − dato menor</div>
      <div class="tip-box">🎯 En CBTIS suelen pedir comparar grupos de datos. No solo calcules: interpreta cuál grupo está más disperso.</div>
    </div>
  </div>

  <div class="sub-tab-content" id="ejemplos">
    <div class="subtopic-section"><span class="level-badge">Ejemplo 1</span><h2 class="section-h2">Datos: 4, 7, 9, 15</h2><div class="step-list"><div class="step-item">Dato mayor = 15</div><div class="step-item">Dato menor = 4</div><div class="step-item">Rango = 15 − 4 = 11</div></div></div>
    <div class="subtopic-section"><span class="level-badge">Ejemplo 2</span><h2 class="section-h2">Comparación visual</h2>
      <table class="styled-table"><tr><th>Grupo A</th><th>Grupo B</th></tr><tr><td>8, 9, 10, 11, 12</td><td>2, 5, 10, 15, 18</td></tr></table>
      <p>El Grupo A está más junto. El Grupo B está más separado, por eso tiene mayor dispersión.</p>
    </div>
  </div>

  <div class="sub-tab-content" id="graficas">
    <div class="graph-card"><h2 class="section-h2">Datos en línea</h2><p>Grupo A está concentrado cerca del centro:</p><div class="dot-line"><span>8</span><span class="dot"></span><span>9</span><span class="dot"></span><span>10</span><span class="dot"></span><span>11</span><span class="dot"></span><span>12</span><span class="dot"></span></div>
      <p>Grupo B está más separado:</p><div class="dot-line"><span>2</span><span class="dot alt"></span><span>5</span><span class="dot alt"></span><span>10</span><span class="dot alt"></span><span>15</span><span class="dot alt"></span><span>18</span><span class="dot alt"></span></div>
    </div>
    <div class="graph-card"><h2 class="section-h2">Comparación de rangos</h2>
      <div class="bar-row"><span>Grupo A</span><div class="bar-track"><div class="bar-fill" style="width:25%"></div></div><span>4</span></div>
      <div class="bar-row"><span>Grupo B</span><div class="bar-track"><div class="bar-fill" style="width:100%"></div></div><span>16</span></div>
    </div>
  </div>

  <div class="sub-tab-content" id="practica">
    <div class="quiz-card">
  <div class="quiz-question">1. ¿Cuál es el rango de 3, 8, 10, 14, 20?</div>
  <label class="option-item"><input type="radio" name="disp1" value="a"> 17</label>
<label class="option-item"><input type="radio" name="disp1" value="b"> 20</label>
<label class="option-item"><input type="radio" name="disp1" value="c"> 23</label>
<label class="option-item"><input type="radio" name="disp1" value="d"> 10</label>
  <button class="btn-verify" onclick="verifyFormaV2('disp1','a','feedback-disp1','Rango = 20 − 3 = 17.')">Verificar</button>
  <div class="feedback" id="feedback-disp1"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">2. ¿Qué grupo tiene mayor dispersión?</div>
  <label class="option-item"><input type="radio" name="disp2" value="a"> 5,6,7,8</label>
<label class="option-item"><input type="radio" name="disp2" value="b"> 1,4,8,15</label>
<label class="option-item"><input type="radio" name="disp2" value="c"> 9,9,10,10</label>
<label class="option-item"><input type="radio" name="disp2" value="d"> 6,7,7,8</label>
  <button class="btn-verify" onclick="verifyFormaV2('disp2','b','feedback-disp2','Sus datos están más separados; rango 15−1=14.')">Verificar</button>
  <div class="feedback" id="feedback-disp2"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">3. Si los datos están muy juntos, la dispersión es:</div>
  <label class="option-item"><input type="radio" name="disp3" value="a"> Alta</label>
<label class="option-item"><input type="radio" name="disp3" value="b"> Baja</label>
<label class="option-item"><input type="radio" name="disp3" value="c"> Infinita</label>
<label class="option-item"><input type="radio" name="disp3" value="d"> Negativa</label>
  <button class="btn-verify" onclick="verifyFormaV2('disp3','b','feedback-disp3','Datos juntos significan poca dispersión.')">Verificar</button>
  <div class="feedback" id="feedback-disp3"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">4. Rango de 12, 15, 18, 21:</div>
  <label class="option-item"><input type="radio" name="disp4" value="a"> 9</label>
<label class="option-item"><input type="radio" name="disp4" value="b"> 12</label>
<label class="option-item"><input type="radio" name="disp4" value="c"> 21</label>
<label class="option-item"><input type="radio" name="disp4" value="d"> 6</label>
  <button class="btn-verify" onclick="verifyFormaV2('disp4','a','feedback-disp4','21−12=9.')">Verificar</button>
  <div class="feedback" id="feedback-disp4"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">5. Dos grupos tienen el mismo promedio, pero uno tiene datos más separados. Ese grupo tiene:</div>
  <label class="option-item"><input type="radio" name="disp5" value="a"> Menor área</label>
<label class="option-item"><input type="radio" name="disp5" value="b"> Mayor dispersión</label>
<label class="option-item"><input type="radio" name="disp5" value="c"> Menor perímetro</label>
<label class="option-item"><input type="radio" name="disp5" value="d"> Probabilidad 0</label>
  <button class="btn-verify" onclick="verifyFormaV2('disp5','b','feedback-disp5','Datos más separados significan mayor dispersión.')">Verificar</button>
  <div class="feedback" id="feedback-disp5"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">6. ¿Cuál grupo está menos disperso?</div>
  <label class="option-item"><input type="radio" name="disp6" value="a"> 1,10,20</label>
<label class="option-item"><input type="radio" name="disp6" value="b"> 7,8,9</label>
<label class="option-item"><input type="radio" name="disp6" value="c"> 2,14,30</label>
<label class="option-item"><input type="radio" name="disp6" value="d"> 0,15,40</label>
  <button class="btn-verify" onclick="verifyFormaV2('disp6','b','feedback-disp6','7,8,9 están muy juntos.')">Verificar</button>
  <div class="feedback" id="feedback-disp6"></div>
</div>
  </div>
</div>`;
}

function verifyFormaV2(name, correct, feedbackId, explanation){
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  const feedback = document.getElementById(feedbackId);
  if(!selected){ alert("Selecciona una respuesta."); return; }
  if(selected.value === correct){
    feedback.className = "feedback correct";
    feedback.innerHTML = "✅ Correcto. " + explanation;
  }else{
    feedback.className = "feedback incorrect";
    feedback.innerHTML = "❌ Revisa con calma. " + explanation;
  }
}

