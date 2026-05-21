function renderPerimetro(){
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
  <div class="session-header"><h1>📏 Perímetro</h1><p>Matemáticas · Forma, espacio y medida · Páginas 100 - 106</p></div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">Teoría guiada</button>
    <button class="tab-btn" id="btn-ejemplos" onclick="switchTab('ejemplos')">Ejemplos paso a paso</button>
    <button class="tab-btn" id="btn-graficas" onclick="switchTab('graficas')">Gráficas y figuras</button>
    <button class="tab-btn" id="btn-practica" onclick="switchTab('practica')">Práctica CBTIS</button>
  </div>

  <div class="sub-tab-content active" id="teoria">
    <div class="subtopic-section">
      <h2 class="section-h2">Perímetro = medir alrededor</h2>
      <div class="lesson-note">
        Imagina que quieres poner una cerca alrededor de un terreno, un marco a una ventana o cinta alrededor de una cancha.
        En todos esos casos necesitas medir el borde completo. Eso es el perímetro.
        <br><br>
        El perímetro NO mide lo de adentro. Solo mide el contorno.
      </div>

      <div class="shape-grid">
        <div class="shape-card">
          <h3>⬛ Cuadrado</h3>
          <svg class="mini-svg" viewBox="0 0 220 140">
            <rect x="60" y="25" width="90" height="90" fill="none" stroke="#00e5ff" stroke-width="6"/>
            <text x="96" y="20" fill="#cbd5e1">l</text><text x="155" y="75" fill="#cbd5e1">l</text><text x="96" y="130" fill="#cbd5e1">l</text><text x="42" y="75" fill="#cbd5e1">l</text>
          </svg>
          <p>Como todos sus lados son iguales: <strong>P = 4l</strong></p>
        </div>
        <div class="shape-card">
          <h3>▭ Rectángulo</h3>
          <svg class="mini-svg" viewBox="0 0 240 140">
            <rect x="35" y="35" width="165" height="70" fill="none" stroke="#9d4edd" stroke-width="6"/>
            <text x="95" y="28" fill="#cbd5e1">base</text><text x="205" y="75" fill="#cbd5e1">altura</text>
          </svg>
          <p>Dos bases y dos alturas: <strong>P = 2b + 2h</strong></p>
        </div>
        <div class="shape-card">
          <h3>🔺 Triángulo</h3>
          <svg class="mini-svg" viewBox="0 0 240 140">
            <polygon points="120,20 45,115 195,115" fill="none" stroke="#00ff9f" stroke-width="6"/>
            <text x="112" y="18" fill="#cbd5e1">a</text><text x="65" y="70" fill="#cbd5e1">b</text><text x="118" y="135" fill="#cbd5e1">c</text>
          </svg>
          <p>Se suman los tres lados: <strong>P = a + b + c</strong></p>
        </div>
      </div>

      <div class="tip-box">🎯 Palabras clave de perímetro: alrededor, borde, contorno, marco, cerca, orilla, rodear.</div>
      <div class="trap-box">❌ Trampa CBTIS: si dice “pintar”, “cubrir” o “superficie”, probablemente NO es perímetro; es área.</div>
    </div>
  </div>

  <div class="sub-tab-content" id="ejemplos">
    <div class="subtopic-section"><span class="level-badge">Nivel 1</span><h2 class="section-h2">Cuadrado de lado 8 cm</h2><div class="step-list"><div class="step-item">Un cuadrado tiene 4 lados iguales.</div><div class="step-item">P = 4 × 8</div><div class="step-item">P = 32 cm</div></div></div>
    <div class="subtopic-section"><span class="level-badge">Nivel 2</span><h2 class="section-h2">Rectángulo de 14 m por 6 m</h2><div class="step-list"><div class="step-item">Tiene dos lados de 14 m y dos lados de 6 m.</div><div class="step-item">P = 14 + 14 + 6 + 6</div><div class="step-item">P = 40 m</div></div></div>
    <div class="subtopic-section"><span class="level-badge">Nivel 3</span><h2 class="section-h2">Triángulo de lados 7, 10 y 12 cm</h2><div class="step-list"><div class="step-item">P = 7 + 10 + 12</div><div class="step-item">P = 29 cm</div></div></div>
    <div class="subtopic-section"><span class="level-badge">Nivel CBTIS</span><h2 class="section-h2">Un jardín rectangular mide 18 m de largo y 9 m de ancho. Se quiere poner malla alrededor.</h2><div class="step-list"><div class="step-item">La palabra “alrededor” indica perímetro.</div><div class="step-item">P = 2(18) + 2(9)</div><div class="step-item">P = 36 + 18 = 54 m</div><div class="step-item">Se necesitan 54 m de malla.</div></div></div>
  </div>

  <div class="sub-tab-content" id="graficas">
    <div class="graph-card"><h2 class="section-h2">Perímetro de cuadrados</h2><p>Cuando el lado crece, el perímetro también crece de forma proporcional.</p>
      <div class="bar-row"><span>Lado 2</span><div class="bar-track"><div class="bar-fill" style="width:25%"></div></div><span>P=8</span></div>
      <div class="bar-row"><span>Lado 4</span><div class="bar-track"><div class="bar-fill" style="width:50%"></div></div><span>P=16</span></div>
      <div class="bar-row"><span>Lado 6</span><div class="bar-track"><div class="bar-fill" style="width:75%"></div></div><span>P=24</span></div>
      <div class="bar-row"><span>Lado 8</span><div class="bar-track"><div class="bar-fill" style="width:100%"></div></div><span>P=32</span></div>
    </div>
    <div class="tip-box">Observa que si el lado se duplica, el perímetro también se duplica.</div>
  </div>

  <div class="sub-tab-content" id="practica">
    <div class="quiz-card">
  <div class="quiz-question">1. Un cuadrado tiene lado de 11 cm. ¿Cuál es su perímetro?</div>
  <label class="option-item"><input type="radio" name="peri1" value="a"> 22 cm</label>
<label class="option-item"><input type="radio" name="peri1" value="b"> 33 cm</label>
<label class="option-item"><input type="radio" name="peri1" value="c"> 44 cm</label>
<label class="option-item"><input type="radio" name="peri1" value="d"> 121 cm</label>
  <button class="btn-verify" onclick="verifyFormaV2('peri1','c','feedback-peri1','P=4l=4×11=44 cm.')">Verificar</button>
  <div class="feedback" id="feedback-peri1"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">2. Un rectángulo mide 20 m de largo y 8 m de ancho. ¿Cuánta cerca se necesita para rodearlo?</div>
  <label class="option-item"><input type="radio" name="peri2" value="a"> 28 m</label>
<label class="option-item"><input type="radio" name="peri2" value="b"> 56 m</label>
<label class="option-item"><input type="radio" name="peri2" value="c"> 160 m</label>
<label class="option-item"><input type="radio" name="peri2" value="d"> 40 m</label>
  <button class="btn-verify" onclick="verifyFormaV2('peri2','b','feedback-peri2','Rodearlo indica perímetro: 2(20)+2(8)=56 m.')">Verificar</button>
  <div class="feedback" id="feedback-peri2"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">3. ¿Cuál palabra indica perímetro?</div>
  <label class="option-item"><input type="radio" name="peri3" value="a"> Superficie</label>
<label class="option-item"><input type="radio" name="peri3" value="b"> Contorno</label>
<label class="option-item"><input type="radio" name="peri3" value="c"> Volumen</label>
<label class="option-item"><input type="radio" name="peri3" value="d"> Promedio</label>
  <button class="btn-verify" onclick="verifyFormaV2('peri3','b','feedback-peri3','Contorno es la orilla de la figura.')">Verificar</button>
  <div class="feedback" id="feedback-peri3"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">4. Un triángulo tiene lados 9, 12 y 15 cm. ¿Cuál es su perímetro?</div>
  <label class="option-item"><input type="radio" name="peri4" value="a"> 27 cm</label>
<label class="option-item"><input type="radio" name="peri4" value="b"> 36 cm</label>
<label class="option-item"><input type="radio" name="peri4" value="c"> 108 cm</label>
<label class="option-item"><input type="radio" name="peri4" value="d"> 180 cm</label>
  <button class="btn-verify" onclick="verifyFormaV2('peri4','b','feedback-peri4','9+12+15=36 cm.')">Verificar</button>
  <div class="feedback" id="feedback-peri4"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">5. Detecta el error: Para poner marco a una foto de 30 cm por 20 cm, un alumno calculó 30×20.</div>
  <label class="option-item"><input type="radio" name="peri5" value="a"> Usó área en vez de perímetro</label>
<label class="option-item"><input type="radio" name="peri5" value="b"> Sumó mal</label>
<label class="option-item"><input type="radio" name="peri5" value="c"> Sí está correcto</label>
<label class="option-item"><input type="radio" name="peri5" value="d"> Faltó dividir entre 2</label>
  <button class="btn-verify" onclick="verifyFormaV2('peri5','a','feedback-peri5','Marco indica contorno; debió calcular 2(30)+2(20)=100 cm.')">Verificar</button>
  <div class="feedback" id="feedback-peri5"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">6. Una pista rectangular mide 45 m por 25 m. Si se corre una vuelta por la orilla, ¿qué distancia se recorre?</div>
  <label class="option-item"><input type="radio" name="peri6" value="a"> 70 m</label>
<label class="option-item"><input type="radio" name="peri6" value="b"> 140 m</label>
<label class="option-item"><input type="radio" name="peri6" value="c"> 1125 m</label>
<label class="option-item"><input type="radio" name="peri6" value="d"> 90 m</label>
  <button class="btn-verify" onclick="verifyFormaV2('peri6','b','feedback-peri6','Una vuelta por la orilla es perímetro: 2(45)+2(25)=140 m.')">Verificar</button>
  <div class="feedback" id="feedback-peri6"></div>
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

