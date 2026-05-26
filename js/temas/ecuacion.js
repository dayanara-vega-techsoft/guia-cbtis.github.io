function renderEcuacion(){
return `

<style>
.eq-intro{background:rgba(0,229,255,.08);border:1px solid rgba(0,229,255,.18);border-radius:18px;padding:20px;color:#cbd5e1;line-height:1.8;margin-bottom:20px;}
.eq-box{background:rgba(255,255,255,.06);border-left:4px solid #00e5ff;padding:14px;border-radius:14px;color:#cbd5e1;line-height:1.7;margin:12px 0;}
.step-list{display:grid;gap:12px;margin-top:14px;}
.step-item{background:rgba(255,255,255,.06);border-left:4px solid #00e5ff;padding:14px;border-radius:14px;color:#cbd5e1;line-height:1.7;}
.level-badge{display:inline-block;padding:6px 12px;border-radius:999px;background:rgba(157,78,221,.18);border:1px solid rgba(157,78,221,.35);color:#e9d5ff;font-weight:bold;margin-bottom:12px;}
.tip-box{background:rgba(0,255,159,.08);border:1px solid rgba(0,255,159,.2);border-left:4px solid #00ff9f;padding:16px;border-radius:14px;color:#cbd5e1;line-height:1.7;margin:16px 0;}
.trap-box{background:rgba(255,80,80,.08);border:1px solid rgba(255,80,80,.2);border-left:4px solid #ff5050;padding:16px;border-radius:14px;color:#cbd5e1;line-height:1.7;margin:16px 0;}
</style>

<div class="topic-shell">

<div class="session-header">
<h1>📐 Ecuación lineal</h1>
<p>Matemáticas · Números, álgebra y variación · Páginas 76 - 86</p>
</div>

<div class="nav-tabs">
<button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">Teoría clara</button>
<button class="tab-btn" id="btn-guiados" onclick="switchTab('guiados')">Ejemplos guiados</button>
<button class="tab-btn" id="btn-practica" onclick="switchTab('practica')">Práctica CBTIS</button>
<button class="tab-btn" id="btn-boss" onclick="switchTab('boss')">Reto final</button>
</div>

<div class="sub-tab-content active" id="teoria">

<div class="subtopic-section">

<span class="subtopic-header-tag">🎯 Concepto básico</span>

<h2 class="section-h2">
¿Qué es una ecuación lineal?
</h2>

<div class="eq-intro">
Una ecuación lineal es una igualdad matemática
que tiene una incógnita (generalmente x)
y cuyo exponente es 1.
</div>

<div class="eq-box">
💡 Ejemplo:
2x + 5 = 15
</div>

<div class="eq-box">
La meta es descubrir cuánto vale x.
</div>

<div class="tip-box">
🎯 Tip CBTIS:
resolver una ecuación es como equilibrar una balanza.
Lo que haces de un lado,
debes hacerlo del otro.
</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">⚖️ Regla principal</span>

<h2 class="section-h2">
La regla de equilibrio
</h2>

<div class="eq-box">
Si sumas, restas, multiplicas o divides
en un lado de la ecuación,
debes hacer exactamente lo mismo
en el otro lado.
</div>

<div class="trap-box">
❌ Error común:
mover números cambiando signos sin entender por qué.
</div>

<div class="eq-box">
✅ Mejor forma:
hacer operaciones iguales en ambos lados.
</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">🧠 Pasos para resolver</span>

<h2 class="section-h2">
Método paso a paso
</h2>

<div class="step-list">

<div class="step-item">
1️⃣ Simplifica cada lado si es necesario.
</div>

<div class="step-item">
2️⃣ Deja las x en un solo lado.
</div>

<div class="step-item">
3️⃣ Pasa números al otro lado.
</div>

<div class="step-item">
4️⃣ Divide para despejar x.
</div>

<div class="step-item">
5️⃣ Verifica sustituyendo el resultado.
</div>

</div>

</div>

<div class="subtopic-section">

<span class="subtopic-header-tag">🚨 Trampas CBTIS</span>

<h2 class="section-h2">
Errores comunes
</h2>

<div class="trap-box">
❌ 2x + 3 = 11

Muchos hacen:
x = 11 − 3 = 8 ❌
</div>

<div class="eq-box">
✅ Correcto:
2x = 8
x = 4
</div>

<div class="trap-box">
❌ Error frecuente:
olvidar dividir entre el número que acompaña a x.
</div>

</div>

</div>

<div class="sub-tab-content" id="guiados">

<div class="subtopic-section">

<span class="level-badge">Nivel 1</span>

<h2 class="section-h2">
x + 5 = 12
</h2>

<div class="step-list">

<div class="step-item">
Resta 5 en ambos lados.
</div>

<div class="step-item">
x = 12 − 5
</div>

<div class="step-item">
x = 7
</div>

</div>

</div>

<div class="subtopic-section">

<span class="level-badge">Nivel 2</span>

<h2 class="section-h2">
2x + 3 = 11
</h2>

<div class="step-list">

<div class="step-item">
Resta 3:
2x = 8
</div>

<div class="step-item">
Divide entre 2:
x = 4
</div>

</div>

</div>

<div class="subtopic-section">

<span class="level-badge">Nivel 3</span>

<h2 class="section-h2">
3x − 7 = 20
</h2>

<div class="step-list">

<div class="step-item">
Suma 7:
3x = 27
</div>

<div class="step-item">
Divide entre 3:
x = 9
</div>

</div>

</div>

<div class="subtopic-section">

<span class="level-badge">Nivel CBTIS</span>

<h2 class="section-h2">
4(x − 2) = 20
</h2>

<div class="step-list">

<div class="step-item">
Distribuye:
4x − 8 = 20
</div>

<div class="step-item">
Suma 8:
4x = 28
</div>

<div class="step-item">
Divide entre 4:
x = 7
</div>

</div>

</div>

</div>

<div class="sub-tab-content" id="practica">

<div class="quiz-card">
<div class="quiz-question">
1. Resuelve: x + 8 = 15
</div>

<label class="option-item"><input type="radio" name="ec1" value="a"> 7</label>
<label class="option-item"><input type="radio" name="ec1" value="b"> 23</label>
<label class="option-item"><input type="radio" name="ec1" value="c"> 8</label>
<label class="option-item"><input type="radio" name="ec1" value="d"> 5</label>

<button class="btn-verify" onclick="verifyEq('ec1','a','feedback-ec1','15 − 8 = 7')">Verificar</button>

<div class="feedback" id="feedback-ec1"></div>
</div>

<div class="quiz-card">
<div class="quiz-question">
2. Resuelve: 2x = 18
</div>

<label class="option-item"><input type="radio" name="ec2" value="a"> 36</label>
<label class="option-item"><input type="radio" name="ec2" value="b"> 9</label>
<label class="option-item"><input type="radio" name="ec2" value="c"> 16</label>
<label class="option-item"><input type="radio" name="ec2" value="d"> 20</label>

<button class="btn-verify" onclick="verifyEq('ec2','b','feedback-ec2','18 ÷ 2 = 9')">Verificar</button>

<div class="feedback" id="feedback-ec2"></div>
</div>

<div class="quiz-card">
<div class="quiz-question">
3. Resuelve: 3x − 5 = 16
</div>

<label class="option-item"><input type="radio" name="ec3" value="a"> 11</label>
<label class="option-item"><input type="radio" name="ec3" value="b"> 7</label>
<label class="option-item"><input type="radio" name="ec3" value="c"> 21</label>
<label class="option-item"><input type="radio" name="ec3" value="d"> 5</label>

<button class="btn-verify" onclick="verifyEq('ec3','b','feedback-ec3','Suma 5: 3x = 21; divide entre 3: x = 7')">Verificar</button>

<div class="feedback" id="feedback-ec3"></div>
</div>

<div class="quiz-card">
<div class="quiz-question">
4. Detecta el error:
2x + 4 = 12 → x = 12 − 4 = 8
</div>

<label class="option-item"><input type="radio" name="ec4" value="a"> Olvidó dividir entre 2</label>
<label class="option-item"><input type="radio" name="ec4" value="b"> La resta está mal</label>
<label class="option-item"><input type="radio" name="ec4" value="c"> No hay error</label>
<label class="option-item"><input type="radio" name="ec4" value="d"> Debió multiplicar</label>

<button class="btn-verify" onclick="verifyEq('ec4','a','feedback-ec4','Después de restar queda 2x = 8; falta dividir entre 2.')">Verificar</button>

<div class="feedback" id="feedback-ec4"></div>
</div>

<div class="quiz-card">
<div class="quiz-question">
5. Resuelve:
5(x − 1) = 25
</div>

<label class="option-item"><input type="radio" name="ec5" value="a"> 6</label>
<label class="option-item"><input type="radio" name="ec5" value="b"> 4</label>
<label class="option-item"><input type="radio" name="ec5" value="c"> 5</label>
<label class="option-item"><input type="radio" name="ec5" value="d"> 10</label>

<button class="btn-verify" onclick="verifyEq('ec5','a','feedback-ec5','Divide entre 5: x − 1 = 5; suma 1: x = 6')">Verificar</button>

<div class="feedback" id="feedback-ec5"></div>
</div>

</div>

<div class="sub-tab-content" id="boss">

<div class="quiz-card">

<div class="quiz-question">
🎮 Reto CBTIS:
3(2x − 1) + 5 = 20
</div>

<label class="option-item"><input type="radio" name="boss" value="a"> 1</label>
<label class="option-item"><input type="radio" name="boss" value="b"> 2</label>
<label class="option-item"><input type="radio" name="boss" value="c"> 3</label>
<label class="option-item"><input type="radio" name="boss" value="d"> 4</label>

<button class="btn-verify" onclick="verifyEq('boss','c','feedback-boss','Distribuye: 6x − 3 + 5 = 20 → 6x + 2 = 20 → 6x = 18 → x = 3')">Verificar</button>

<div class="feedback" id="feedback-boss"></div>

</div>

</div>

</div>
`;
}

window.renderEcuacionLineal = renderEcuacionLineal;

function verifyEq(name,correct,feedbackId,explanation){

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

window.verifyEq = verifyEq;
