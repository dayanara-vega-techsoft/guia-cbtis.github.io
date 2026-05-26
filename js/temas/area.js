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
.shape-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;margin-top:18px;}
.shape-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:18px;color:#cbd5e1;}
.shape-card h3{color:#00e5ff;margin-bottom:10px;}
.mini-svg{width:100%;height:140px;margin:10px 0;}
.square-grid{display:grid;grid-template-columns:repeat(6,32px);gap:4px;margin:18px 0;}
.square-cell{width:32px;height:32px;background:rgba(0,229,255,.25);border:1px solid rgba(0,229,255,.55);border-radius:5px;}
.compare-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;margin-top:20px;}
.compare-card{background:rgba(255,255,255,.05);border-radius:18px;padding:18px;border:1px solid rgba(255,255,255,.08);}
.compare-card h3{color:#00e5ff;}
.unit-card{background:rgba(255,255,255,.05);padding:18px;border-radius:18px;border:1px solid rgba(255,255,255,.08);margin:16px 0;color:#cbd5e1;}
</style>

<div class="topic-shell">

<div class="session-header">
<h1>📐 Área</h1>
<p>Matemáticas · Forma, espacio y medida · Páginas 107 - 126</p>
</div>

<div class="nav-tabs">
<button class="tab-btn active" onclick="switchTab('teoria')">Teoría guiada</button>
<button class="tab-btn" onclick="switchTab('formulas')">Fórmulas visuales</button>
<button class="tab-btn" onclick="switchTab('comparacion')">Área vs perímetro</button>
<button class="tab-btn" onclick="switchTab('practica')">Práctica CBTIS</button>
<button class="tab-btn" onclick="switchTab('retos')">Retos EDIEMS</button>
</div>

<div class="sub-tab-content active" id="teoria">

<div class="subtopic-section">

<h2 class="section-h2">¿Qué es el área?</h2>

<div class="lesson-note">
El área mide la superficie que ocupa una figura.
Sirve para saber cuánto espacio hay dentro de algo.
</div>

<div class="tip-box">
💡 Piensa en:
<ul>
<li>Pintar una pared</li>
<li>Poner piso</li>
<li>Sembrar pasto</li>
<li>Colocar azulejos</li>
</ul>
Todo eso necesita calcular área.
</div>

<div class="square-grid">
<div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div>
<div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div>
<div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div><div class="square-cell"></div>
</div>

<div class="math-expression">
18 cuadritos = área de 18 unidades cuadradas
</div>

</div>

<div class="subtopic-section">

<h2 class="section-h2">📏 Unidades cuadradas</h2>

<div class="unit-card">
Cuando hablamos de área usamos unidades cuadradas:
</div>

<table class="styled-table">
<tr>
<th>Unidad</th>
<th>Significado</th>
</tr>

<tr>
<td>cm²</td>
<td>Centímetros cuadrados</td>
</tr>

<tr>
<td>m²</td>
<td>Metros cuadrados</td>
</tr>

<tr>
<td>km²</td>
<td>Kilómetros cuadrados</td>
</tr>

</table>

<div class="tip-box">
🎯 1 m² significa:
un cuadrado de 1 metro × 1 metro.
</div>

<div class="trap-box">
❌ Error común:
confundir m² con metros normales.
</div>

</div>

<div class="subtopic-section">

<h2 class="section-h2">⭕ El círculo</h2>

<div class="lesson-note">
Para calcular el área de un círculo usamos:
</div>

<div class="math-expression">
A = πr²
</div>

<div class="step-list">

<div class="step-item">
π ≈ 3.14
</div>

<div class="step-item">
r = radio
</div>

<div class="step-item">
El radio va del centro al borde.
</div>

</div>

<div class="tip-box">
🎯 El diámetro es el doble del radio.
</div>

</div>

</div>

<div class="sub-tab-content" id="formulas">

<div class="shape-grid">

<div class="shape-card">
<h3>▭ Rectángulo</h3>
<p>A = base × altura</p>
</div>

<div class="shape-card">
<h3>⬛ Cuadrado</h3>
<p>A = lado²</p>
</div>

<div class="shape-card">
<h3>🔺 Triángulo</h3>
<p>A = (base × altura) ÷ 2</p>
</div>

<div class="shape-card">
<h3>⭕ Círculo</h3>
<p>A = πr²</p>
</div>

</div>

<div class="subtopic-section">

<span class="level-badge">Ejemplo guiado</span>

<h2 class="section-h2">
Rectángulo
</h2>

<div class="step-list">

<div class="step-item">
Base = 9
</div>

<div class="step-item">
Altura = 5
</div>

<div class="step-item">
A = 9 × 5 = 45
</div>

</div>

</div>

<div class="subtopic-section">

<span class="level-badge">Ejemplo CBTIS</span>

<h2 class="section-h2">
Área de un círculo de radio 4
</h2>

<div class="step-list">

<div class="step-item">
A = πr²
</div>

<div class="step-item">
A = 3.14 × 4²
</div>

<div class="step-item">
A = 3.14 × 16
</div>

<div class="step-item">
A = 50.24
</div>

</div>

</div>

</div>

<div class="sub-tab-content" id="comparacion">

<h2 class="section-h2">
🚨 Área vs perímetro
</h2>

<div class="compare-grid">

<div class="compare-card">
<h3>📐 Área</h3>

<ul>
<li>Superficie</li>
<li>Lo de adentro</li>
<li>Pintar</li>
<li>Piso</li>
<li>Pasto</li>
<li>Cubrir</li>
</ul>

</div>

<div class="compare-card">
<h3>📏 Perímetro</h3>

<ul>
<li>Contorno</li>
<li>Lo de afuera</li>
<li>Cerca</li>
<li>Marco</li>
<li>Listón</li>
<li>Rodear</li>
</ul>

</div>

</div>

<div class="trap-box">
❌ Trampa CBTIS:
muchos alumnos usan perímetro cuando el problema pide superficie.
</div>

</div>

<div class="sub-tab-content" id="practica">

<div class="quiz-card">
<div class="quiz-question">
1. ¿Qué mide el área?
</div>

<label class="option-item"><input type="radio" name="a1" value="a"> El contorno</label>
<label class="option-item"><input type="radio" name="a1" value="b"> La superficie</label>
<label class="option-item"><input type="radio" name="a1" value="c"> El volumen</label>
<label class="option-item"><input type="radio" name="a1" value="d"> La altura</label>

<button class="btn-verify" onclick="verifyArea('a1','b','fa1','El área mide la superficie.')">Verificar</button>

<div class="feedback" id="fa1"></div>

</div>

<div class="quiz-card">
<div class="quiz-question">
2. Área de un rectángulo de 8 × 6
</div>

<label class="option-item"><input type="radio" name="a2" value="a"> 14</label>
<label class="option-item"><input type="radio" name="a2" value="b"> 28</label>
<label class="option-item"><input type="radio" name="a2" value="c"> 48</label>
<label class="option-item"><input type="radio" name="a2" value="d"> 96</label>

<button class="btn-verify" onclick="verifyArea('a2','c','fa2','8 × 6 = 48.')">Verificar</button>

<div class="feedback" id="fa2"></div>

</div>

<div class="quiz-card">
<div class="quiz-question">
3. ¿Qué fórmula corresponde al círculo?
</div>

<label class="option-item"><input type="radio" name="a3" value="a"> base × altura</label>
<label class="option-item"><input type="radio" name="a3" value="b"> lado²</label>
<label class="option-item"><input type="radio" name="a3" value="c"> πr²</label>
<label class="option-item"><input type="radio" name="a3" value="d"> (b×h)/2</label>

<button class="btn-verify" onclick="verifyArea('a3','c','fa3','El círculo usa πr².')">Verificar</button>

<div class="feedback" id="fa3"></div>

</div>

<div class="quiz-card">
<div class="quiz-question">
4. ¿Qué situación usa área?
</div>

<label class="option-item"><input type="radio" name="a4" value="a"> Poner una cerca</label>
<label class="option-item"><input type="radio" name="a4" value="b"> Colocar un marco</label>
<label class="option-item"><input type="radio" name="a4" value="c"> Pintar una pared</label>
<label class="option-item"><input type="radio" name="a4" value="d"> Rodear un jardín</label>

<button class="btn-verify" onclick="verifyArea('a4','c','fa4','Pintar requiere superficie.')">Verificar</button>

<div class="feedback" id="fa4"></div>

</div>

<div class="quiz-card">
<div class="quiz-question">
5. Área de un triángulo base 10 y altura 8
</div>

<label class="option-item"><input type="radio" name="a5" value="a"> 80</label>
<label class="option-item"><input type="radio" name="a5" value="b"> 40</label>
<label class="option-item"><input type="radio" name="a5" value="c"> 18</label>
<label class="option-item"><input type="radio" name="a5" value="d"> 20</label>

<button class="btn-verify" onclick="verifyArea('a5','b','fa5','(10×8)/2 = 40.')">Verificar</button>

<div class="feedback" id="fa5"></div>

</div>

</div>

<div class="sub-tab-content" id="retos">

<div class="quiz-card">

<div class="quiz-question">
🎮 Reto CBTIS:
Un jardín rectangular mide 12 m de largo y 9 m de ancho.
¿Cuántos metros cuadrados de pasto se necesitan?
</div>

<label class="option-item"><input type="radio" name="reto1" value="a"> 21</label>
<label class="option-item"><input type="radio" name="reto1" value="b"> 42</label>
<label class="option-item"><input type="radio" name="reto1" value="c"> 108</label>
<label class="option-item"><input type="radio" name="reto1" value="d"> 216</label>

<button class="btn-verify" onclick="verifyArea('reto1','c','freto1','12 × 9 = 108 m².')">Verificar</button>

<div class="feedback" id="freto1"></div>

</div>

<div class="quiz-card">

<div class="quiz-question">
🧠 Detecta el dato innecesario:
Un terreno mide 15 m de base,
8 m de altura
y pesa 300 kg.
¿Qué dato no sirve?
</div>

<label class="option-item"><input type="radio" name="reto2" value="a"> 15 m</label>
<label class="option-item"><input type="radio" name="reto2" value="b"> 8 m</label>
<label class="option-item"><input type="radio" name="reto2" value="c"> 300 kg</label>
<label class="option-item"><input type="radio" name="reto2" value="d"> Todos sirven</label>

<button class="btn-verify" onclick="verifyArea('reto2','c','freto2','El peso no sirve para calcular área.')">Verificar</button>

<div class="feedback" id="freto2"></div>

</div>

</div>

</div>
`;
}

window.renderArea = renderArea;

function verifyArea(name,correct,feedbackId,explanation){

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
f.innerHTML="❌ Revisa nuevamente. "+explanation;
}

}

window.verifyArea = verifyArea;
