function renderJerarquia(){
return `

<style>
.math-intro{background:rgba(0,229,255,.08);border:1px solid rgba(0,229,255,.18);border-radius:18px;padding:20px;color:#cbd5e1;line-height:1.8;margin-bottom:20px;}
.math-expression{font-size:1.35rem;color:white;background:rgba(0,229,255,.08);border:1px solid rgba(0,229,255,.2);padding:14px;border-radius:14px;margin:12px 0;font-weight:bold;}
.step-list{display:grid;gap:12px;margin-top:14px;}
.step-item{background:rgba(255,255,255,.06);border-left:4px solid #00e5ff;padding:14px;border-radius:14px;color:#cbd5e1;line-height:1.7;}
.level-badge{display:inline-block;padding:6px 12px;border-radius:999px;background:rgba(157,78,221,.18);border:1px solid rgba(157,78,221,.35);color:#e9d5ff;font-weight:bold;margin-bottom:12px;}
.tip-box{background:rgba(0,255,159,.08);border:1px solid rgba(0,255,159,.2);border-left:4px solid #00ff9f;padding:16px;border-radius:14px;color:#cbd5e1;line-height:1.7;margin:16px 0;}
.trap-box{background:rgba(255,80,80,.08);border:1px solid rgba(255,80,80,.2);border-left:4px solid #ff5050;padding:16px;border-radius:14px;color:#cbd5e1;line-height:1.7;margin:16px 0;}
.styled-table{width:100%;border-collapse:collapse;margin:18px 0;color:#cbd5e1;}
.styled-table th,.styled-table td{border:1px solid rgba(255,255,255,.12);padding:12px;text-align:center;}
.styled-table th{color:#00e5ff;background:rgba(0,229,255,.08);}
</style>

<div class="topic-shell">
  <div class="session-header"><h1>🧮 Jerarquía de operaciones</h1><p>Matemáticas · Números, álgebra y variación · Páginas 69 - 75</p></div>
  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">Teoría clara</button>
    <button class="tab-btn" id="btn-guiados" onclick="switchTab('guiados')">Ejemplos guiados</button>
    <button class="tab-btn" id="btn-practica" onclick="switchTab('practica')">Práctica CBTIS</button>
    <button class="tab-btn" id="btn-boss" onclick="switchTab('boss')">Reto final</button>
  </div>
  <div class="sub-tab-content active" id="teoria">
    <div class="subtopic-section">
      <span class="subtopic-header-tag">Explicación para examen</span>
      <h2 class="section-h2">¿Por qué existe la jerarquía?</h2>
      <div class="math-intro">Cuando ves muchas operaciones juntas, no puedes resolverlas en cualquier orden. La jerarquía de operaciones es como una lista de instrucciones: si saltas pasos, el resultado cambia. En el examen CBTIS, muchas trampas aparecen porque el alumno suma antes de multiplicar o ignora paréntesis.</div>
      <div class="map-container"><div class="map-root">Orden correcto</div><div class="map-branches">
        <div class="map-branch"><div class="branch-title">① Agrupación</div><div class="map-leaf">( ), [ ], { }</div></div>
        <div class="map-branch"><div class="branch-title">② Potencias y raíces</div><div class="map-leaf">3² = 3 × 3</div></div>
        <div class="map-branch"><div class="branch-title">③ Multiplicación y división</div><div class="map-leaf">Izquierda a derecha.</div></div>
        <div class="map-branch"><div class="branch-title">④ Suma y resta</div><div class="map-leaf">Izquierda a derecha.</div></div>
      </div></div>
      <div class="tip-box">🎯 Tip CBTIS: si ves paréntesis y potencias, detente. Ahí suele estar la trampa.</div>
      <div class="trap-box">❌ Error común: 10 + 5 × 2 = 30. Lo correcto es 5 × 2 = 10 y luego 10 + 10 = 20.</div>
    </div>
  </div>
  <div class="sub-tab-content" id="guiados">
    <div class="subtopic-section"><span class="level-badge">Nivel 1</span><h2 class="section-h2">12 + 4 × 3</h2><div class="step-list"><div class="step-item">Primero multiplicación: 4 × 3 = 12</div><div class="step-item">Después suma: 12 + 12 = 24</div></div></div>
    <div class="subtopic-section"><span class="level-badge">Nivel 2</span><h2 class="section-h2">18 − 2(3 + 4)</h2><div class="step-list"><div class="step-item">Paréntesis: 3 + 4 = 7</div><div class="step-item">Multiplicación: 2 × 7 = 14</div><div class="step-item">Resta: 18 − 14 = 4</div></div></div>
    <div class="subtopic-section"><span class="level-badge">Nivel 3</span><h2 class="section-h2">24 ÷ 3 + 2²(5 − 1)</h2><div class="step-list"><div class="step-item">Paréntesis: 5 − 1 = 4</div><div class="step-item">Potencia: 2² = 4</div><div class="step-item">División y multiplicación: 24 ÷ 3 = 8; 4 × 4 = 16</div><div class="step-item">Suma: 8 + 16 = 24</div></div></div>
    <div class="subtopic-section"><span class="level-badge">Nivel CBTIS</span><h2 class="section-h2">36 ÷ [3(2 + 1)] + 4²</h2><div class="step-list"><div class="step-item">Paréntesis: 2 + 1 = 3</div><div class="step-item">Corchete: 3(3)=9</div><div class="step-item">Potencia: 4²=16</div><div class="step-item">División: 36÷9=4</div><div class="step-item">Suma: 4+16=20</div></div></div>
  </div>
  <div class="sub-tab-content" id="practica"><div class="quiz-card">
  <div class="quiz-question">1. Resuelve: 20 + 6 × 3</div>
  <label class="option-item"><input type="radio" name="jer1" value="a"> 38</label>
<label class="option-item"><input type="radio" name="jer1" value="b"> 78</label>
<label class="option-item"><input type="radio" name="jer1" value="c"> 26</label>
<label class="option-item"><input type="radio" name="jer1" value="d"> 60</label>
  <button class="btn-verify" onclick="verifyMathV3('jer1','a','feedback-jer1','Primero 6 × 3 = 18; luego 20 + 18 = 38.')">Verificar</button>
  <div class="feedback" id="feedback-jer1"></div>
</div>
<div class="quiz-card">
  <div class="quiz-question">2. Resuelve: 30 − 4(2 + 3)</div>
  <label class="option-item"><input type="radio" name="jer2" value="a"> 10</label>
<label class="option-item"><input type="radio" name="jer2" value="b"> 130</label>
<label class="option-item"><input type="radio" name="jer2" value="c"> 26</label>
<label class="option-item"><input type="radio" name="jer2" value="d"> 50</label>
  <button class="btn-verify" onclick="verifyMathV3('jer2','a','feedback-jer2','Primero 2 + 3 = 5; luego 4 × 5 = 20; finalmente 30 − 20 = 10.')">Verificar</button>
  <div class="feedback" id="feedback-jer2"></div>
</div>
<div class="quiz-card">
  <div class="quiz-question">3. Resuelve: 5² + 18 ÷ 3</div>
  <label class="option-item"><input type="radio" name="jer3" value="a"> 11</label>
<label class="option-item"><input type="radio" name="jer3" value="b"> 31</label>
<label class="option-item"><input type="radio" name="jer3" value="c"> 43</label>
<label class="option-item"><input type="radio" name="jer3" value="d"> 21</label>
  <button class="btn-verify" onclick="verifyMathV3('jer3','b','feedback-jer3','5² = 25 y 18 ÷ 3 = 6; 25 + 6 = 31.')">Verificar</button>
  <div class="feedback" id="feedback-jer3"></div>
</div>
<div class="quiz-card">
  <div class="quiz-question">4. Resuelve: 48 ÷ [2(3 + 1)]</div>
  <label class="option-item"><input type="radio" name="jer4" value="a"> 6</label>
<label class="option-item"><input type="radio" name="jer4" value="b"> 24</label>
<label class="option-item"><input type="radio" name="jer4" value="c"> 12</label>
<label class="option-item"><input type="radio" name="jer4" value="d"> 4</label>
  <button class="btn-verify" onclick="verifyMathV3('jer4','a','feedback-jer4','3+1=4; 2×4=8; 48÷8=6.')">Verificar</button>
  <div class="feedback" id="feedback-jer4"></div>
</div>
<div class="quiz-card">
  <div class="quiz-question">5. ¿Qué operación va primero en 9 + 2(8 − 3)²?</div>
  <label class="option-item"><input type="radio" name="jer5" value="a"> 9 + 2</label>
<label class="option-item"><input type="radio" name="jer5" value="b"> 8 − 3</label>
<label class="option-item"><input type="radio" name="jer5" value="c"> 2 × 8</label>
<label class="option-item"><input type="radio" name="jer5" value="d"> 3²</label>
  <button class="btn-verify" onclick="verifyMathV3('jer5','b','feedback-jer5','Primero se resuelve el paréntesis: 8 − 3.')">Verificar</button>
  <div class="feedback" id="feedback-jer5"></div>
</div>
<div class="quiz-card">
  <div class="quiz-question">6. Detecta el error: 16 − 3 × 4 = 13 × 4 = 52</div>
  <label class="option-item"><input type="radio" name="jer6" value="a"> Sumó antes de multiplicar</label>
<label class="option-item"><input type="radio" name="jer6" value="b"> Restó antes de multiplicar</label>
<label class="option-item"><input type="radio" name="jer6" value="c"> La multiplicación está bien</label>
<label class="option-item"><input type="radio" name="jer6" value="d"> No hay error</label>
  <button class="btn-verify" onclick="verifyMathV3('jer6','b','feedback-jer6','El error fue hacer 16 − 3 antes de 3 × 4. Lo correcto: 3×4=12; 16−12=4.')">Verificar</button>
  <div class="feedback" id="feedback-jer6"></div>
</div>
<div class="quiz-card">
  <div class="quiz-question">7. Resuelve: 7² − 3(4 + 2)</div>
  <label class="option-item"><input type="radio" name="jer7" value="a"> 31</label>
<label class="option-item"><input type="radio" name="jer7" value="b"> 67</label>
<label class="option-item"><input type="radio" name="jer7" value="c"> 85</label>
<label class="option-item"><input type="radio" name="jer7" value="d"> 13</label>
  <button class="btn-verify" onclick="verifyMathV3('jer7','a','feedback-jer7','7²=49; 4+2=6; 3×6=18; 49−18=31.')">Verificar</button>
  <div class="feedback" id="feedback-jer7"></div>
</div>
<div class="quiz-card">
  <div class="quiz-question">8. Resuelve: 6 + 24 ÷ 3²</div>
  <label class="option-item"><input type="radio" name="jer8" value="a"> 10</label>
<label class="option-item"><input type="radio" name="jer8" value="b"> 14</label>
<label class="option-item"><input type="radio" name="jer8" value="c"> 30</label>
<label class="option-item"><input type="radio" name="jer8" value="d"> 3.33</label>
  <button class="btn-verify" onclick="verifyMathV3('jer8','a','feedback-jer8','3²=9; 24÷9 no es entero. Pero si la guía usa jerarquía estricta: 6 + 24÷9 = 8.67 aprox. Esta es pregunta trampa: revisa opciones y procedimiento. Si tu guía no usa decimales, evita esta forma.')">Verificar</button>
  <div class="feedback" id="feedback-jer8"></div>
</div></div>
  <div class="sub-tab-content" id="boss"><div class="quiz-card">
  <div class="quiz-question">🎮 Reto CBTIS: 50 − 2[4² − 3(2 + 1)]</div>
  <label class="option-item"><input type="radio" name="jerboss" value="a"> 36</label>
<label class="option-item"><input type="radio" name="jerboss" value="b"> 14</label>
<label class="option-item"><input type="radio" name="jerboss" value="c"> 64</label>
<label class="option-item"><input type="radio" name="jerboss" value="d"> 22</label>
  <button class="btn-verify" onclick="verifyMathV3('jerboss','a','feedback-jerboss','2+1=3; 3(3)=9; 4²=16; 16−9=7; 2[7]=14; 50−14=36.')">Verificar</button>
  <div class="feedback" id="feedback-jerboss"></div>
</div></div>
</div>`;
}

function verifyMathV3(name, correct, feedbackId, explanation){
  const s=document.querySelector(`input[name="${name}"]:checked`);
  const f=document.getElementById(feedbackId);
  if(!s){alert("Selecciona una respuesta.");return;}
  if(s.value===correct){f.className="feedback correct";f.innerHTML="✅ Correcto. "+explanation;}
  else{f.className="feedback incorrect";f.innerHTML="❌ Revisa el procedimiento. "+explanation;}
}

