function renderProbabilidad(){
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
  <div class="session-header"><h1>🎲 Probabilidad de eventos aleatorios</h1><p>Matemáticas · Forma, espacio y medida · Páginas 135 - 140</p></div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">Teoría guiada</button>
    <button class="tab-btn" id="btn-ejemplos" onclick="switchTab('ejemplos')">Ejemplos</button>
    <button class="tab-btn" id="btn-graficas" onclick="switchTab('graficas')">Gráficas</button>
    <button class="tab-btn" id="btn-practica" onclick="switchTab('practica')">Práctica CBTIS</button>
  </div>

  <div class="sub-tab-content active" id="teoria">
    <div class="subtopic-section">
      <h2 class="section-h2">Probabilidad = qué tan posible es que ocurra algo</h2>
      <div class="lesson-note">
        La probabilidad se usa cuando no sabes con certeza qué va a pasar: lanzar una moneda, tirar un dado,
        sacar una canica de una bolsa o participar en una rifa.
      </div>
      <div class="math-expression">P(evento) = casos favorables ÷ casos posibles</div>
      <div class="tip-box">🎯 Favorables = lo que quieres que salga. Posibles = todo lo que puede salir.</div>
      <div class="trap-box">❌ Error común: contar solo los casos favorables y olvidar el total de casos posibles.</div>
    </div>
  </div>

  <div class="sub-tab-content" id="ejemplos">
    <div class="subtopic-section"><span class="level-badge">Moneda</span><h2 class="section-h2">Probabilidad de sol</h2><div class="coin-row"><div class="coin">Sol</div><div class="coin">Águila</div></div><div class="step-list"><div class="step-item">Casos favorables: 1 sol</div><div class="step-item">Casos posibles: 2</div><div class="step-item">P = 1/2</div></div></div>
    <div class="subtopic-section"><span class="level-badge">Dado</span><h2 class="section-h2">Probabilidad de número par</h2><div class="coin-row"><div class="coin">1</div><div class="coin">2</div><div class="coin">3</div><div class="coin">4</div><div class="coin">5</div><div class="coin">6</div></div><div class="step-list"><div class="step-item">Favorables: 2, 4, 6 = 3</div><div class="step-item">Posibles: 1, 2, 3, 4, 5, 6 = 6</div><div class="step-item">P = 3/6 = 1/2</div></div></div>
    <div class="subtopic-section"><span class="level-badge">Bolsa</span><h2 class="section-h2">3 rojas, 2 azules y 5 verdes. Probabilidad de azul.</h2><div class="step-list"><div class="step-item">Favorables: 2 azules</div><div class="step-item">Posibles: 3+2+5=10</div><div class="step-item">P = 2/10 = 1/5</div></div></div>
  </div>

  <div class="sub-tab-content" id="graficas">
    <div class="graph-card"><h2 class="section-h2">Bolsa de canicas</h2>
      <div class="bar-row"><span>Rojas</span><div class="bar-track"><div class="bar-fill" style="width:60%"></div></div><span>3</span></div>
      <div class="bar-row"><span>Azules</span><div class="bar-track"><div class="bar-fill" style="width:40%"></div></div><span>2</span></div>
      <div class="bar-row"><span>Verdes</span><div class="bar-track"><div class="bar-fill" style="width:100%"></div></div><span>5</span></div>
    </div>
    <div class="tip-box">Para calcular probabilidad, usa el total: 3 + 2 + 5 = 10 canicas.</div>
  </div>

  <div class="sub-tab-content" id="practica">
    <div class="quiz-card">
  <div class="quiz-question">1. En una moneda, probabilidad de obtener águila:</div>
  <label class="option-item"><input type="radio" name="prob1" value="a"> 1/2</label>
<label class="option-item"><input type="radio" name="prob1" value="b"> 1/3</label>
<label class="option-item"><input type="radio" name="prob1" value="c"> 2/3</label>
<label class="option-item"><input type="radio" name="prob1" value="d"> 1/4</label>
  <button class="btn-verify" onclick="verifyFormaV2('prob1','a','feedback-prob1','Hay 1 águila de 2 resultados posibles.')">Verificar</button>
  <div class="feedback" id="feedback-prob1"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">2. En un dado, probabilidad de sacar 6:</div>
  <label class="option-item"><input type="radio" name="prob2" value="a"> 1/2</label>
<label class="option-item"><input type="radio" name="prob2" value="b"> 1/3</label>
<label class="option-item"><input type="radio" name="prob2" value="c"> 1/6</label>
<label class="option-item"><input type="radio" name="prob2" value="d"> 6/6</label>
  <button class="btn-verify" onclick="verifyFormaV2('prob2','c','feedback-prob2','Solo hay un 6 de seis caras posibles.')">Verificar</button>
  <div class="feedback" id="feedback-prob2"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">3. En un dado, probabilidad de número impar:</div>
  <label class="option-item"><input type="radio" name="prob3" value="a"> 1/6</label>
<label class="option-item"><input type="radio" name="prob3" value="b"> 2/6</label>
<label class="option-item"><input type="radio" name="prob3" value="c"> 3/6</label>
<label class="option-item"><input type="radio" name="prob3" value="d"> 5/6</label>
  <button class="btn-verify" onclick="verifyFormaV2('prob3','c','feedback-prob3','Impares: 1,3,5. Son 3 de 6.')">Verificar</button>
  <div class="feedback" id="feedback-prob3"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">4. Bolsa: 4 negras y 6 blancas. Probabilidad de negra:</div>
  <label class="option-item"><input type="radio" name="prob4" value="a"> 4/10</label>
<label class="option-item"><input type="radio" name="prob4" value="b"> 6/10</label>
<label class="option-item"><input type="radio" name="prob4" value="c"> 4/6</label>
<label class="option-item"><input type="radio" name="prob4" value="d"> 10/4</label>
  <button class="btn-verify" onclick="verifyFormaV2('prob4','a','feedback-prob4','Hay 4 negras de 10 canicas totales.')">Verificar</button>
  <div class="feedback" id="feedback-prob4"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">5. ¿Qué significa probabilidad 0?</div>
  <label class="option-item"><input type="radio" name="prob5" value="a"> Evento seguro</label>
<label class="option-item"><input type="radio" name="prob5" value="b"> Evento imposible</label>
<label class="option-item"><input type="radio" name="prob5" value="c"> Evento muy probable</label>
<label class="option-item"><input type="radio" name="prob5" value="d"> Evento aleatorio</label>
  <button class="btn-verify" onclick="verifyFormaV2('prob5','b','feedback-prob5','Probabilidad 0 significa que no puede ocurrir.')">Verificar</button>
  <div class="feedback" id="feedback-prob5"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">6. ¿Qué significa probabilidad 1?</div>
  <label class="option-item"><input type="radio" name="prob6" value="a"> Evento imposible</label>
<label class="option-item"><input type="radio" name="prob6" value="b"> Evento seguro</label>
<label class="option-item"><input type="radio" name="prob6" value="c"> Evento raro</label>
<label class="option-item"><input type="radio" name="prob6" value="d"> Evento medio</label>
  <button class="btn-verify" onclick="verifyFormaV2('prob6','b','feedback-prob6','Probabilidad 1 significa que siempre ocurre.')">Verificar</button>
  <div class="feedback" id="feedback-prob6"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">7. En una bolsa hay 5 rojas, 3 verdes y 2 azules. Probabilidad de verde:</div>
  <label class="option-item"><input type="radio" name="prob7" value="a"> 3/10</label>
<label class="option-item"><input type="radio" name="prob7" value="b"> 5/10</label>
<label class="option-item"><input type="radio" name="prob7" value="c"> 2/10</label>
<label class="option-item"><input type="radio" name="prob7" value="d"> 3/5</label>
  <button class="btn-verify" onclick="verifyFormaV2('prob7','a','feedback-prob7','Total=10; verdes=3; P=3/10.')">Verificar</button>
  <div class="feedback" id="feedback-prob7"></div>
</div>
    <div class="quiz-card">
  <div class="quiz-question">8. ¿Cuál evento es más probable al lanzar un dado?</div>
  <label class="option-item"><input type="radio" name="prob8" value="a"> Sacar 6</label>
<label class="option-item"><input type="radio" name="prob8" value="b"> Sacar número menor que 5</label>
<label class="option-item"><input type="radio" name="prob8" value="c"> Sacar 7</label>
<label class="option-item"><input type="radio" name="prob8" value="d"> Sacar 1</label>
  <button class="btn-verify" onclick="verifyFormaV2('prob8','b','feedback-prob8','Menor que 5: 1,2,3,4 son 4 casos de 6.')">Verificar</button>
  <div class="feedback" id="feedback-prob8"></div>
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

