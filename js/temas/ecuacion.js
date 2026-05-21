function renderEcuacion(){
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
  <div class="session-header"><h1>📐 Ecuación lineal</h1><p>Matemáticas · Números, álgebra y variación · Páginas 76 - 86</p></div>
  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">Teoría clara</button>
    <button class="tab-btn" id="btn-guiados" onclick="switchTab('guiados')">Ejemplos guiados</button>
    <button class="tab-btn" id="btn-practica" onclick="switchTab('practica')">Práctica CBTIS</button>
    <button class="tab-btn" id="btn-boss" onclick="switchTab('boss')">Reto final</button>
  </div>
  <div class="sub-tab-content active" id="teoria">
    <div class="subtopic-section">
      <h2 class="section-h2">Una ecuación es una balanza</h2>
      <div class="math-intro">Una ecuación lineal tiene una incógnita, casi siempre x. Resolverla significa encontrar qué valor hace verdadera la igualdad. Imagina una balanza: lo que hagas de un lado debe mantener el equilibrio del otro.</div>
      <div class="map-container"><div class="map-root">Ruta para despejar</div><div class="map-branches">
        <div class="map-branch"><div class="branch-title">① Simplificar</div><div class="map-leaf">Quita paréntesis y junta términos.</div></div>
        <div class="map-branch"><div class="branch-title">② Mover constantes</div><div class="map-leaf">Deja las x de un lado.</div></div>
        <div class="map-branch"><div class="branch-title">③ Dividir</div><div class="map-leaf">La x debe quedar sola.</div></div>
        <div class="map-branch"><div class="branch-title">④ Comprobar</div><div class="map-leaf">Sustituye x para verificar.</div></div>
      </div></div>
      <div class="trap-box">❌ Error común: en 3(x+2), hacer 3x+2. Lo correcto es 3x+6 porque el 3 multiplica a todo el paréntesis.</div>
    </div>
  </div>
  <div class="sub-tab-content" id="guiados">
    <div class="subtopic-section"><span class="level-badge">Nivel 1</span><h2 class="section-h2">x + 5 = 12</h2><div class="step-list"><div class="step-item">Quita el +5 restando 5: x = 12 − 5</div><div class="step-item">x = 7</div></div></div>
    <div class="subtopic-section"><span class="level-badge">Nivel 2</span><h2 class="section-h2">3x = 21</h2><div class="step-list"><div class="step-item">Divide entre 3: x = 21 ÷ 3</div><div class="step-item">x = 7</div></div></div>
    <div class="subtopic-section"><span class="level-badge">Nivel 3</span><h2 class="section-h2">2x + 4 = 18</h2><div class="step-list"><div class="step-item">Resta 4: 2x = 14</div><div class="step-item">Divide entre 2: x = 7</div></div></div>
    <div class="subtopic-section"><span class="level-badge">Nivel CBTIS</span><h2 class="section-h2">5(x − 2) + 3 = 2x + 18</h2><div class="step-list"><div class="step-item">Distributiva: 5x − 10 + 3 = 2x + 18</div><div class="step-item">Simplifica: 5x − 7 = 2x + 18</div><div class="step-item">Resta 2x: 3x − 7 = 18</div><div class="step-item">Suma 7: 3x = 25</div><div class="step-item">Divide entre 3: x = 25/3</div></div></div>
  </div>
  <div class="sub-tab-content" id="practica"><div class="quiz-card">
  <div class="quiz-question">1. Resuelve: x + 9 = 23</div>
  <label class="option-item"><input type="radio" name="ecu1" value="a"> x = 14</label>
<label class="option-item"><input type="radio" name="ecu1" value="b"> x = 32</label>
<label class="option-item"><input type="radio" name="ecu1" value="c"> x = 9</label>
<label class="option-item"><input type="radio" name="ecu1" value="d"> x = 23</label>
  <button class="btn-verify" onclick="verifyMathV3('ecu1','a','feedback-ecu1','Restas 9 a ambos lados: x = 23 − 9 = 14.')">Verificar</button>
  <div class="feedback" id="feedback-ecu1"></div>
</div>
<div class="quiz-card">
  <div class="quiz-question">2. Resuelve: 4x = 36</div>
  <label class="option-item"><input type="radio" name="ecu2" value="a"> x = 8</label>
<label class="option-item"><input type="radio" name="ecu2" value="b"> x = 9</label>
<label class="option-item"><input type="radio" name="ecu2" value="c"> x = 32</label>
<label class="option-item"><input type="radio" name="ecu2" value="d"> x = 40</label>
  <button class="btn-verify" onclick="verifyMathV3('ecu2','b','feedback-ecu2','Divides entre 4: x = 36 ÷ 4 = 9.')">Verificar</button>
  <div class="feedback" id="feedback-ecu2"></div>
</div>
<div class="quiz-card">
  <div class="quiz-question">3. Resuelve: 5x − 6 = 29</div>
  <label class="option-item"><input type="radio" name="ecu3" value="a"> x = 5</label>
<label class="option-item"><input type="radio" name="ecu3" value="b"> x = 6</label>
<label class="option-item"><input type="radio" name="ecu3" value="c"> x = 7</label>
<label class="option-item"><input type="radio" name="ecu3" value="d"> x = 8</label>
  <button class="btn-verify" onclick="verifyMathV3('ecu3','c','feedback-ecu3','Sumas 6: 5x=35; divides entre 5: x=7.')">Verificar</button>
  <div class="feedback" id="feedback-ecu3"></div>
</div>
<div class="quiz-card">
  <div class="quiz-question">4. Resuelve: 2(x + 5) = 26</div>
  <label class="option-item"><input type="radio" name="ecu4" value="a"> x = 8</label>
<label class="option-item"><input type="radio" name="ecu4" value="b"> x = 13</label>
<label class="option-item"><input type="radio" name="ecu4" value="c"> x = 21</label>
<label class="option-item"><input type="radio" name="ecu4" value="d"> x = 6</label>
  <button class="btn-verify" onclick="verifyMathV3('ecu4','a','feedback-ecu4','2x+10=26; 2x=16; x=8.')">Verificar</button>
  <div class="feedback" id="feedback-ecu4"></div>
</div>
<div class="quiz-card">
  <div class="quiz-question">5. Resuelve: 3(2x − 1) + 4 = 19</div>
  <label class="option-item"><input type="radio" name="ecu5" value="a"> x = 2</label>
<label class="option-item"><input type="radio" name="ecu5" value="b"> x = 3</label>
<label class="option-item"><input type="radio" name="ecu5" value="c"> x = 4</label>
<label class="option-item"><input type="radio" name="ecu5" value="d"> x = 1</label>
  <button class="btn-verify" onclick="verifyMathV3('ecu5','b','feedback-ecu5','6x−3+4=19; 6x+1=19; 6x=18; x=3.')">Verificar</button>
  <div class="feedback" id="feedback-ecu5"></div>
</div>
<div class="quiz-card">
  <div class="quiz-question">6. ¿Cuál es el error en 2(x+3)=14 → 2x+3=14?</div>
  <label class="option-item"><input type="radio" name="ecu6" value="a"> No multiplicó el 3 por 2</label>
<label class="option-item"><input type="radio" name="ecu6" value="b"> Sumó mal</label>
<label class="option-item"><input type="radio" name="ecu6" value="c"> Dividió antes</label>
<label class="option-item"><input type="radio" name="ecu6" value="d"> No hay error</label>
  <button class="btn-verify" onclick="verifyMathV3('ecu6','a','feedback-ecu6','La distributiva debe aplicarse a todos los términos: 2x+6=14.')">Verificar</button>
  <div class="feedback" id="feedback-ecu6"></div>
</div>
<div class="quiz-card">
  <div class="quiz-question">7. Problema: 5 libretas y $70 de plumas cuestan $420. ¿Ecuación correcta?</div>
  <label class="option-item"><input type="radio" name="ecu7" value="a"> 5x + 70 = 420</label>
<label class="option-item"><input type="radio" name="ecu7" value="b"> 5 + x + 70 = 420</label>
<label class="option-item"><input type="radio" name="ecu7" value="c"> 70x = 420</label>
<label class="option-item"><input type="radio" name="ecu7" value="d"> 5x = 70</label>
  <button class="btn-verify" onclick="verifyMathV3('ecu7','a','feedback-ecu7','Si cada libreta cuesta x, 5 libretas cuestan 5x; más 70 da 420.')">Verificar</button>
  <div class="feedback" id="feedback-ecu7"></div>
</div></div>
  <div class="sub-tab-content" id="boss"><div class="quiz-card">
  <div class="quiz-question">🎮 Reto CBTIS: 4(x + 3) − 2x = 30</div>
  <label class="option-item"><input type="radio" name="ecuboss" value="a"> x = 6</label>
<label class="option-item"><input type="radio" name="ecuboss" value="b"> x = 8</label>
<label class="option-item"><input type="radio" name="ecuboss" value="c"> x = 9</label>
<label class="option-item"><input type="radio" name="ecuboss" value="d"> x = 12</label>
  <button class="btn-verify" onclick="verifyMathV3('ecuboss','c','feedback-ecuboss','4x+12−2x=30; 2x+12=30; 2x=18; x=9.')">Verificar</button>
  <div class="feedback" id="feedback-ecuboss"></div>
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

