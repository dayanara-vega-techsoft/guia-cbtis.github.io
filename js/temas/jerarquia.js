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
.priority-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:14px;margin:20px 0;}
.priority-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:16px;text-align:center;color:#e2e8f0;}
.priority-card h3{color:#00e5ff;margin-bottom:10px;}
.styled-table{width:100%;border-collapse:collapse;margin:18px 0;color:#cbd5e1;}
.styled-table th,.styled-table td{border:1px solid rgba(255,255,255,.12);padding:12px;text-align:center;}
.styled-table th{color:#00e5ff;background:rgba(0,229,255,.08);}
</style>

<div class="topic-shell">

<div class="session-header">
<h1>🧮 Jerarquía de operaciones</h1>
<p>Matemáticas · Números, álgebra y variación · Páginas 69 - 75</p>
</div>

<div class="nav-tabs">
<button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">Teoría clara</button>
<button class="tab-btn" id="btn-guiados" onclick="switchTab('guiados')">Ejemplos guiados</button>
<button class="tab-btn" id="btn-practica" onclick="switchTab('practica')">Práctica CBTIS</button>
<button class="tab-btn" id="btn-boss" onclick="switchTab('boss')">Reto final</button>
</div>

<div class="sub-tab-content active" id="teoria">

<div class="subtopic-section">

<span class="subtopic-header-tag">🎯 Explicación sencilla</span>

<h2 class="section-h2">¿Por qué existe la jerarquía?</h2>

<div class="math-intro">
Cuando una operación tiene muchos signos juntos,
no puedes resolverlos en cualquier orden.
La jerarquía funciona como niveles de prioridad.
Si cambias el orden, el resultado cambia.
</div>

<div class="priority-grid">

<div class="priority-card">
<h3>🎮 Nivel 1</h3>
<p>Paréntesis, corchetes y llaves</p>
<p><strong>( ) [ ] { }</strong></p>
</div>

<div class="priority-card">
<h3>⚡ Nivel 2</h3>
<p>Potencias y raíces</p>
<p><strong>3² = 9</strong></p>
</div>

<div class="priority-card">
<h3>🔥 Nivel 3</h3>
<p>Multiplicación y división</p>
<p><strong>Izquierda → derecha</strong></p>
</div>

<div class="priority-card">
<h3>✅ Nivel 4</h3>
<p>Suma y resta</p>
<p><strong>Izquierda → derecha</strong></p>
</div>

</div>

<div class="tip-box">
🎯 Tip CBTIS:
las trampas más comunes aparecen cuando hay paréntesis y potencias.
</div>

<div class="trap-box">
❌ Error común:
10 + 5 × 2 = 30

✅ Correcto:
5 × 2 = 10
10 + 10 = 20
</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">🧠 Regla importante</span>

<h2 class="section-h2">Misma prioridad = izquierda a derecha</h2>

<div class="math-expression">
20 ÷ 5 × 2
</div>

<div class="step-list">

<div class="step-item">
❌ Error común:
20 ÷ 10 = 2
</div>

<div class="step-item">
✅ Correcto:
20 ÷ 5 = 4
</div>

<div class="step-item">
4 × 2 = 8
</div>

</div>

<div class="important-box">
💡 Multiplicación y división tienen la misma prioridad.
Por eso se resuelven de izquierda a derecha.
</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">🚨 Trampas CBTIS</span>

<h2 class="section-h2">Errores que aparecen mucho en el examen</h2>

<table class="styled-table">
<tr>
<th>Expresión</th>
<th>Error común</th>
<th>Resultado correcto</th>
</tr>

<tr>
<td>10 + 5 × 2</td>
<td>30</td>
<td>20</td>
</tr>

<tr>
<td>20 ÷ 5 × 2</td>
<td>2</td>
<td>8</td>
</tr>

<tr>
<td>3² + 4</td>
<td>49</td>
<td>13</td>
</tr>

<tr>
<td>2 + 3² × 2</td>
<td>50</td>
<td>20</td>
</tr>

</table>

</div>

</div>

<div class="sub-tab-content" id="guiados">

<div class="subtopic-section">
<span class="level-badge">Nivel 1</span>

<h2 class="section-h2">12 + 4 × 3</h2>

<div class="step-list">
<div class="step-item">Primero multiplicación: 4 × 3 = 12</div>
<div class="step-item">Después suma: 12 + 12 = 24</div>
</div>

</div>

<div class="subtopic-section">
<span class="level-badge">Nivel 2</span>

<h2 class="section-h2">18 − 2(3 + 4)</h2>

<div class="step-list">
<div class="step-item">Paréntesis: 3 + 4 = 7</div>
<div class="step-item">Multiplicación: 2 × 7 = 14</div>
<div class="step-item">Resta: 18 − 14 = 4</div>
</div>

</div>

<div class="subtopic-section">
<span class="level-badge">Nivel 3</span>

<h2 class="section-h2">24 ÷ 3 + 2²(5 − 1)</h2>

<div class="step-list">
<div class="step-item">Paréntesis: 5 − 1 = 4</div>
<div class="step-item">Potencia: 2² = 4</div>
<div class="step-item">División: 24 ÷ 3 = 8</div>
<div class="step-item">Multiplicación: 4 × 4 = 16</div>
<div class="step-item">Suma final: 8 + 16 = 24</div>
</div>

</div>

<div class="subtopic-section">
<span class="level-badge">Nivel CBTIS</span>

<h2 class="section-h2">36 ÷ [3(2 + 1)] + 4²</h2>

<div class="step-list">
<div class="step-item">Paréntesis: 2 + 1 = 3</div>
<div class="step-item">Corchete: 3(3)=9</div>
<div class="step-item">Potencia: 4²=16</div>
<div class="step-item">División: 36÷9=4</div>
<div class="step-item">Suma: 4+16=20</div>
</div>

</div>

</div>

<div class="sub-tab-content" id="practica">

<div class="quiz-card">
<div class="quiz-question">1. Resuelve: 20 + 6 × 3</div>

<label class="option-item"><input type="radio" name="jer1" value="a"> 38</label>
<label class="option-item"><input type="radio" name="jer1" value="b"> 78</label>
<label class="option-item"><input type="radio" name="jer1" value="c"> 26</label>
<label class="option-item"><input type="radio" name="jer1" value="d"> 60</label>

<button class="btn-verify" onclick="verifyMathV3('jer1','a','feedback-jer1','Primero 6 × 3 = 18; luego 20 + 18 = 38.')">Verificar</button>

<div class="feedback" id="feedback-jer1"></div>
</div>

<div class="quiz-card">
<div class="quiz-question">2. ¿Qué operación se hace primero en 9 + 2(8 − 3)²?</div>

<label class="option-item"><input type="radio" name="jer2" value="a"> 9 + 2</label>
<label class="option-item"><input type="radio" name="jer2" value="b"> 8 − 3</label>
<label class="option-item"><input type="radio" name="jer2" value="c"> 2 × 8</label>
<label class="option-item"><input type="radio" name="jer2" value="d"> 3²</label>

<button class="btn-verify" onclick="verifyMathV3('jer2','b','feedback-jer2','Primero se resuelve el paréntesis: 8 − 3.')">Verificar</button>

<div class="feedback" id="feedback-jer2"></div>
</div>

<div class="quiz-card">
<div class="quiz-question">3. Detecta el error: 16 − 3 × 4 = 13 × 4 = 52</div>

<label class="option-item"><input type="radio" name="jer3" value="a"> Sumó antes de multiplicar</label>
<label class="option-item"><input type="radio" name="jer3" value="b"> Restó antes de multiplicar</label>
<label class="option-item"><input type="radio" name="jer3" value="c"> La multiplicación está bien</label>
<label class="option-item"><input type="radio" name="jer3" value="d"> No hay error</label>

<button class="btn-verify" onclick="verifyMathV3('jer3','b','feedback-jer3','El error fue hacer 16 − 3 antes de multiplicar.')">Verificar</button>

<div class="feedback" id="feedback-jer3"></div>
</div>

<div class="quiz-card">
<div class="quiz-question">4. Resuelve: 6 + 18 ÷ 3²</div>

<label class="option-item"><input type="radio" name="jer4" value="a"> 8</label>
<label class="option-item"><input type="radio" name="jer4" value="b"> 12</label>
<label class="option-item"><input type="radio" name="jer4" value="c"> 6</label>
<label class="option-item"><input type="radio" name="jer4" value="d"> 18</label>

<button class="btn-verify" onclick="verifyMathV3('jer4','a','feedback-jer4','3² = 9; 18 ÷ 9 = 2; 6 + 2 = 8.')">Verificar</button>

<div class="feedback" id="feedback-jer4"></div>
</div>

<div class="quiz-card">
<div class="quiz-question">5. Resuelve: 48 ÷ [2(3 + 1)]</div>

<label class="option-item"><input type="radio" name="jer5" value="a"> 6</label>
<label class="option-item"><input type="radio" name="jer5" value="b"> 24</label>
<label class="option-item"><input type="radio" name="jer5" value="c"> 12</label>
<label class="option-item"><input type="radio" name="jer5" value="d"> 4</label>

<button class="btn-verify" onclick="verifyMathV3('jer5','a','feedback-jer5','3+1=4; 2×4=8; 48÷8=6.')">Verificar</button>

<div class="feedback" id="feedback-jer5"></div>
</div>

</div>

<div class="sub-tab-content" id="boss">

<div class="quiz-card">

<div class="quiz-question">
🎮 Reto CBTIS: 50 − 2[4² − 3(2 + 1)]
</div>

<label class="option-item"><input type="radio" name="jerboss" value="a"> 36</label>
<label class="option-item"><input type="radio" name="jerboss" value="b"> 14</label>
<label class="option-item"><input type="radio" name="jerboss" value="c"> 64</label>
<label class="option-item"><input type="radio" name="jerboss" value="d"> 22</label>

<button class="btn-verify" onclick="verifyMathV3('jerboss','a','feedback-jerboss','2+1=3; 3×3=9; 4²=16; 16−9=7; 2×7=14; 50−14=36.')">Verificar</button>

<div class="feedback" id="feedback-jerboss"></div>

</div>

</div>

</div>
`;
}

window.renderJerarquia = renderJerarquia;

function verifyMathV3(name, correct, feedbackId, explanation){
const s=document.querySelector(`input[name="${name}"]:checked`);
const f=document.getElementById(feedbackId);

if(!s){
alert("Selecciona una respuesta.");
return;
}

if(s.value===correct){
f.className="feedback correct";
f.innerHTML="✅ Correcto. "+explanation;
}else{
f.className="feedback incorrect";
f.innerHTML="❌ Revisa el procedimiento. "+explanation;
}
}

window.verifyMathV3 = verifyMathV3;
