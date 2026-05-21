function renderArea(){
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
  <div class="session-header"><h1>📐 Área</h1><p>Matemáticas · Forma, espacio y medida · Páginas 107 - 126</p></div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">Teoría guiada</button>
    <button class="tab-btn" id="btn-formulas" onclick="switchTab('formulas')">Fórmulas visuales</button>
    <button class="tab-btn" id="btn-graficas" onclick="switchTab('graficas')">Gráficas</button>
    <button class="tab-btn" id="btn-practica" onclick="switchTab('practica')">Práctica CBTIS</button>
  </div>

  <div class="sub-tab-content active" id="teoria">
    <div class="subtopic-section">
      <h2 class="section-h2">Área = medir lo de adentro</h2>
      <div class="lesson-note">
        El área mide la superficie que ocupa una figura. Si quieres pintar una pared, poner piso, sembrar pasto o cubrir una mesa, necesitas área.
        <br><br>
        La idea básica es contar cuántos cuadritos caben dentro de la figura.
      </div>

      <div class="square-grid">
        <div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div>
        <div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div>
        <div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div>
      </div>

      <div class="math-expression">3 filas × 6 columnas = 18 cuadritos</div>
      <div class="tip-box">🎯 Palabras clave de área: superficie, cubrir, pintar, piso, terreno, sembrar, mosaicos.</div>
      <div class="trap-box">❌ Trampa CBTIS: si te piden “marco” o “alrededor”, no es área; es perímetro.</div>
    </div>
  </div>

  <div class="sub-tab-content" id="formulas">
    <div class="shape-grid">
      <div class="shape-card"><h3>▭ Rectángulo</h3><svg class="mini-svg" viewBox="0 0 240 140"><rect x="35" y="35" width="165" height="70" fill="rgba(0,229,255,.15)" stroke="#00e5ff" stroke-width="5"/><text x="100" y="125" fill="#cbd5e1">base</text><text x="205" y="75" fill="#cbd5e1">altura</text></svg><p>A = base × altura</p></div>
      <div class="shape-card"><h3>⬛ Cuadrado</h3><svg class="mini-svg" viewBox="0 0 220 140"><rect x="65" y="25" width="90" height="90" fill="rgba(157,78,221,.18)" stroke="#9d4edd" stroke-width="5"/></svg><p>A = lado²</p></div>
      <div class="shape-card"><h3>🔺 Triángulo</h3><svg class="mini-svg" viewBox="0 0 240 140"><polygon points="120,20 45,115 195,115" fill="rgba(0,255,159,.12)" stroke="#00ff9f" stroke-width="5"/><line x1="120" y1="20" x2="120" y2="115" stroke="#cbd5e1" stroke-dasharray="5 5"/><text x="125" y="75" fill="#cbd5e1">h</text><text x="105" y="135" fill="#cbd5e1">base</text></svg><p>A = (base × altura) ÷ 2</p></div>
      <div class="shape-card"><h3>⭕ Círculo</h3><svg class="mini-svg" viewBox="0 0 220 140"><circle cx="110" cy="70" r="45" fill="rgba(0,229,255,.12)" stroke="#00e5ff" stroke-width="5"/><line x1="110" y1="70" x2="155" y2="70" stroke="#fff" stroke-width="3"/><text x="130" y="64" fill="#cbd5e1">r</text></svg><p>A = πr²</p></div>
    </div>

    <div class="subtopic-section"><span class="level-badge">Ejemplo guiado</span><h2 class="section-h2">Triángulo de base 12 cm y altura 8 cm</h2><div class="step-list"><div class="step-item">Usa A = (b × h) ÷ 2</div><div class="step-item">A = (12 × 8) ÷ 2</div><div class="step-item">A = 96 ÷ 2 = 48 cm²</div></div></div>
    <div class="subtopic-section"><span class="level-badge">Ejemplo CBTIS</span><h2 class="section-h2">Un salón mide 9 m por 7 m. ¿Cuántos m² de piso se necesitan?</h2><div class="step-list"><div class="step-item">“Piso” y “cubrir” indican área.</div><div class="step-item">A = 9 × 7</div><div class="step-item">A = 63 m²</div></div></div>
  </div>

  <div class="sub-tab-content" id="graficas">
    <div class="graph-card"><h2 class="section-h2">Área de cuadrados</h2><p>El área crece más rápido que el lado porque se eleva al cuadrado.</p>
      <div class="bar-row"><span>Lado 2</span><div class="bar-track"><div class="bar-fill" style="width:6%"></div></div><span>A=4</span></div>
      <div class="bar-row"><span>Lado 4</span><div class="bar-track"><div class="bar-fill" style="width:25%"></div></div><span>A=16</span></div>
      <div class="bar-row"><span>Lado 6</span><div class="bar-track"><div class="bar-fill" style="width:56%"></div></div><span>A=36</span></div>
      <div class="bar-row"><span>Lado 8</span><div class="bar-track"><div class="bar-fill" style="width:100%"></div></div><span>A=64</span></div>
    </div>
    <div class="trap-box">Observa la trampa: si el lado se duplica de 4 a 8, el área no se duplica; pasa de 16 a 64.</div>
  </div>

  <div class="sub-tab-content" id="practica">
    <div class="quiz-card">
  <div class="quiz-question">1. Área de un rectángulo de 16 m por 5 m:</div>
  <label class="option-item"><input type="radio" name="area1" value="a"> 21 m²</label>
<label class="option-item"><input type="radio" name="area1" value="b"> 42 m²</label>
<label class="option-item"><input type="radio" name="area1" value="c"> 80 m²</label>
<label class="option-item"><input type="radio" name="area1" value="d"> 160 m²</label>
  <button class="btn-verify" onclick="verifyFormaV2('area1','c','feedback-area1','A=16×5=80 m².')">Verificar</button>
  <div class="feedback" id="feedback-area1"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">2. Área de un cuadrado de lado 13 cm:</div>
  <label class="option-item"><input type="radio" name="area2" value="a"> 52 cm²</label>
<label class="option-item"><input type="radio" name="area2" value="b"> 169 cm²</label>
<label class="option-item"><input type="radio" name="area2" value="c"> 26 cm²</label>
<label class="option-item"><input type="radio" name="area2" value="d"> 130 cm²</label>
  <button class="btn-verify" onclick="verifyFormaV2('area2','b','feedback-area2','A=13²=169 cm².')">Verificar</button>
  <div class="feedback" id="feedback-area2"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">3. Área de un triángulo con base 18 y altura 6:</div>
  <label class="option-item"><input type="radio" name="area3" value="a"> 108</label>
<label class="option-item"><input type="radio" name="area3" value="b"> 54</label>
<label class="option-item"><input type="radio" name="area3" value="c"> 24</label>
<label class="option-item"><input type="radio" name="area3" value="d"> 36</label>
  <button class="btn-verify" onclick="verifyFormaV2('area3','b','feedback-area3','A=(18×6)÷2=108÷2=54.')">Verificar</button>
  <div class="feedback" id="feedback-area3"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">4. ¿Qué palabra clave indica área?</div>
  <label class="option-item"><input type="radio" name="area4" value="a"> Rodear</label>
<label class="option-item"><input type="radio" name="area4" value="b"> Marco</label>
<label class="option-item"><input type="radio" name="area4" value="c"> Cubrir</label>
<label class="option-item"><input type="radio" name="area4" value="d"> Contorno</label>
  <button class="btn-verify" onclick="verifyFormaV2('area4','c','feedback-area4','Cubrir indica superficie.')">Verificar</button>
  <div class="feedback" id="feedback-area4"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">5. Un terreno rectangular mide 30 m por 14 m. ¿Cuál es su superficie?</div>
  <label class="option-item"><input type="radio" name="area5" value="a"> 44 m²</label>
<label class="option-item"><input type="radio" name="area5" value="b"> 420 m²</label>
<label class="option-item"><input type="radio" name="area5" value="c"> 88 m²</label>
<label class="option-item"><input type="radio" name="area5" value="d"> 840 m²</label>
  <button class="btn-verify" onclick="verifyFormaV2('area5','b','feedback-area5','Superficie es área: 30×14=420 m².')">Verificar</button>
  <div class="feedback" id="feedback-area5"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">6. Detecta el error: Para pintar una pared de 4 m por 3 m, un alumno calculó 2(4)+2(3).</div>
  <label class="option-item"><input type="radio" name="area6" value="a"> Usó perímetro en vez de área</label>
<label class="option-item"><input type="radio" name="area6" value="b"> Está correcto</label>
<label class="option-item"><input type="radio" name="area6" value="c"> Faltó dividir entre 2</label>
<label class="option-item"><input type="radio" name="area6" value="d"> Usó cm en lugar de m</label>
  <button class="btn-verify" onclick="verifyFormaV2('area6','a','feedback-area6','Pintar pared indica área: 4×3=12 m².')">Verificar</button>
  <div class="feedback" id="feedback-area6"></div>
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

