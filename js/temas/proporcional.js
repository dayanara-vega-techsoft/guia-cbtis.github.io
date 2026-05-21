function renderProporcional(){
return `
<style>
.math-intro{
  background:rgba(0,229,255,.08);
  border:1px solid rgba(0,229,255,.18);
  border-radius:18px;
  padding:20px;
  color:#cbd5e1;
  line-height:1.8;
  margin-bottom:20px;
}
.math-expression{
  font-size:1.25rem;
  color:white;
  background:rgba(0,229,255,.08);
  border:1px solid rgba(0,229,255,.2);
  padding:14px;
  border-radius:14px;
  margin:12px 0;
  font-weight:bold;
}
.step-list{
  display:grid;
  gap:12px;
  margin-top:14px;
}
.step-item{
  background:rgba(255,255,255,.06);
  border-left:4px solid #00e5ff;
  padding:14px;
  border-radius:14px;
  color:#cbd5e1;
  line-height:1.7;
}
.level-badge{
  display:inline-block;
  padding:6px 12px;
  border-radius:999px;
  background:rgba(157,78,221,.18);
  border:1px solid rgba(157,78,221,.35);
  color:#e9d5ff;
  font-weight:bold;
  margin-bottom:12px;
}
.tip-box{
  background:rgba(0,255,159,.08);
  border:1px solid rgba(0,255,159,.2);
  border-left:4px solid #00ff9f;
  padding:16px;
  border-radius:14px;
  color:#cbd5e1;
  line-height:1.7;
  margin:16px 0;
}
.trap-box{
  background:rgba(255,80,80,.08);
  border:1px solid rgba(255,80,80,.2);
  border-left:4px solid #ff5050;
  padding:16px;
  border-radius:14px;
  color:#cbd5e1;
  line-height:1.7;
  margin:16px 0;
}
.styled-table{
  width:100%;
  border-collapse:collapse;
  margin:18px 0;
  color:#cbd5e1;
}
.styled-table th,
.styled-table td{
  border:1px solid rgba(255,255,255,.12);
  padding:12px;
  text-align:center;
}
.styled-table th{
  color:#00e5ff;
  background:rgba(0,229,255,.08);
}
.compare-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:18px;
  margin-top:18px;
}
.compare-card{
  background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.08);
  border-radius:18px;
  padding:18px;
}
.compare-card h3{
  color:#00e5ff;
  margin-bottom:10px;
}
</style>

<div class="topic-shell">

  <div class="session-header">
    <h1>📊 Variación proporcional</h1>
    <p>Matemáticas · Números, álgebra y variación · Páginas 87 - 98</p>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" id="btn-teoria" onclick="switchTab('teoria')">Teoría clara</button>
    <button class="tab-btn" id="btn-directa" onclick="switchTab('directa')">Proporcional directa</button>
    <button class="tab-btn" id="btn-inversa" onclick="switchTab('inversa')">Proporcional inversa</button>
    <button class="tab-btn" id="btn-practica" onclick="switchTab('practica')">Práctica CBTIS</button>
    <button class="tab-btn" id="btn-boss" onclick="switchTab('boss')">Reto final</button>
  </div>

  <!-- TEORÍA -->

  <div class="sub-tab-content active" id="teoria">

    <div class="subtopic-section">
      <span class="subtopic-header-tag">Explicación para examen CBTIS</span>
      <h2 class="section-h2">¿Qué es la variación proporcional?</h2>

      <div class="math-intro">
        Usamos proporcionalidad todos los días: cuando compramos comida, calculamos gasolina,
        hacemos una receta, revisamos velocidad, tiempo o precio.
        <br><br>
        La variación proporcional sirve para entender cómo cambia una cantidad cuando cambia otra.
        En el examen CBTIS suelen preguntar con tablas, precios, producción, recetas, trabajadores,
        distancia, tiempo y velocidad.
      </div>

      <div class="map-container">
        <div class="map-root">Variación proporcional</div>

        <div class="map-branches">
          <div class="map-branch">
            <div class="branch-title">📈 Proporcionalidad directa</div>
            <div class="map-leaf">Si una cantidad aumenta, la otra también aumenta.</div>
            <div class="map-leaf">Ejemplo: más cuadernos → más dinero.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">📉 Proporcionalidad inversa</div>
            <div class="map-leaf">Si una cantidad aumenta, la otra disminuye.</div>
            <div class="map-leaf">Ejemplo: más trabajadores → menos tiempo.</div>
          </div>

          <div class="map-branch">
            <div class="branch-title">📐 Regla de tres</div>
            <div class="map-leaf">Sirve para encontrar un valor desconocido.</div>
            <div class="map-leaf">Se usa cuando hay una relación proporcional.</div>
          </div>
        </div>
      </div>

      <div class="tip-box">
        🎯 Tip CBTIS: antes de hacer cuentas, pregúntate:
        <br><br>
        <strong>¿Si una cantidad aumenta, la otra también aumenta?</strong> → Directa.
        <br>
        <strong>¿Si una cantidad aumenta, la otra baja?</strong> → Inversa.
      </div>

      <div class="trap-box">
        ❌ Error común: creer que todo es proporcional directa.
        <br><br>
        Ejemplo: si un auto va más rápido, tarda menos tiempo. Eso NO es directa, es inversa.
      </div>
    </div>

    <div class="subtopic-section">
      <h2 class="section-h2">Valor unitario: la clave para resolver rápido</h2>

      <p>
        El valor unitario significa saber cuánto vale <strong>una sola unidad</strong>.
        Muchas preguntas se resuelven más fácil encontrando primero cuánto cuesta, produce o mide una unidad.
      </p>

      <div class="math-expression">
        Si 3 litros cuestan $72:
        <br>
        $72 ÷ 3 = $24 por litro
      </div>

      <div class="tip-box">
        Si sabes cuánto vale 1, puedes calcular 2, 5, 10 o cualquier cantidad.
      </div>
    </div>

  </div>

  <!-- DIRECTA -->

  <div class="sub-tab-content" id="directa">

    <div class="subtopic-section">
      <span class="level-badge">Proporcionalidad directa</span>
      <h2 class="section-h2">Cuando ambas cantidades aumentan o disminuyen juntas</h2>

      <p>
        En la proporcionalidad directa, si una cantidad se duplica, la otra también se duplica.
        Si una se triplica, la otra también se triplica.
      </p>

      <table class="styled-table">
        <tr>
          <th>Cuadernos</th>
          <th>Precio</th>
          <th>Precio por cuaderno</th>
        </tr>
        <tr>
          <td>1</td>
          <td>$20</td>
          <td>$20</td>
        </tr>
        <tr>
          <td>2</td>
          <td>$40</td>
          <td>$20</td>
        </tr>
        <tr>
          <td>3</td>
          <td>$60</td>
          <td>$20</td>
        </tr>
      </table>

      <div class="tip-box">
        Como el precio por cuaderno siempre es $20, la relación sí es proporcional directa.
      </div>
    </div>

    <div class="subtopic-section">
      <span class="level-badge">Ejemplo guiado 1</span>
      <h2 class="section-h2">Gasolina</h2>

      <div class="math-expression">
        Si 5 litros de gasolina cuestan $120, ¿cuánto cuestan 8 litros?
      </div>

      <div class="step-list">
        <div class="step-item">Paso 1: Encuentra el precio de 1 litro. $120 ÷ 5 = $24</div>
        <div class="step-item">Paso 2: Multiplica por 8 litros. $24 × 8 = $192</div>
        <div class="step-item">Respuesta: 8 litros cuestan $192.</div>
      </div>
    </div>

    <div class="subtopic-section">
      <span class="level-badge">Ejemplo guiado 2</span>
      <h2 class="section-h2">Producción</h2>

      <div class="math-expression">
        Una máquina produce 240 piezas en 6 horas. ¿Cuántas produce en 15 horas?
      </div>

      <div class="step-list">
        <div class="step-item">Paso 1: Busca cuántas piezas produce en 1 hora. 240 ÷ 6 = 40 piezas por hora.</div>
        <div class="step-item">Paso 2: Calcula 15 horas. 40 × 15 = 600 piezas.</div>
        <div class="step-item">Respuesta: produce 600 piezas.</div>
      </div>
    </div>

    <div class="subtopic-section">
      <span class="level-badge">Ejemplo guiado 3</span>
      <h2 class="section-h2">Regla de tres directa</h2>

      <div class="math-expression">
        5 kg cuestan $180. ¿Cuánto cuestan 8 kg?
      </div>

      <table class="styled-table">
        <tr>
          <th>Kg</th>
          <th>Precio</th>
        </tr>
        <tr>
          <td>5</td>
          <td>180</td>
        </tr>
        <tr>
          <td>8</td>
          <td>x</td>
        </tr>
      </table>

      <div class="step-list">
        <div class="step-item">Paso 1: Multiplicación cruzada: 5x = 8 × 180</div>
        <div class="step-item">Paso 2: 5x = 1440</div>
        <div class="step-item">Paso 3: x = 1440 ÷ 5</div>
        <div class="step-item">Respuesta: x = 288</div>
      </div>
    </div>

  </div>

  <!-- INVERSA -->

  <div class="sub-tab-content" id="inversa">

    <div class="subtopic-section">
      <span class="level-badge">Proporcionalidad inversa</span>
      <h2 class="section-h2">Cuando una cantidad sube y la otra baja</h2>

      <p>
        En la proporcionalidad inversa, si una cantidad aumenta, la otra disminuye.
        Es común en problemas de trabajadores, tiempo, velocidad y rendimiento.
      </p>

      <div class="compare-grid">
        <div class="compare-card">
          <h3>📈 Directa</h3>
          <p>Más litros → más precio.</p>
          <p>Más cuadernos → más costo.</p>
          <p>Más horas de producción → más piezas.</p>
        </div>

        <div class="compare-card">
          <h3>📉 Inversa</h3>
          <p>Más trabajadores → menos tiempo.</p>
          <p>Más velocidad → menos tiempo.</p>
          <p>Más máquinas → menos horas.</p>
        </div>
      </div>
    </div>

    <div class="subtopic-section">
      <span class="level-badge">Ejemplo guiado 1</span>
      <h2 class="section-h2">Trabajadores y tiempo</h2>

      <div class="math-expression">
        4 trabajadores terminan una tarea en 12 horas.
        ¿Cuánto tardan 8 trabajadores al mismo ritmo?
      </div>

      <div class="step-list">
        <div class="step-item">Paso 1: Observa que 8 trabajadores es el doble de 4.</div>
        <div class="step-item">Paso 2: Si hay el doble de trabajadores, tardan la mitad de tiempo.</div>
        <div class="step-item">Paso 3: 12 ÷ 2 = 6 horas.</div>
        <div class="step-item">Respuesta: 8 trabajadores tardan 6 horas.</div>
      </div>

      <div class="tip-box">
        Esta relación es inversa porque aumenta el número de trabajadores, pero baja el tiempo.
      </div>
    </div>

    <div class="subtopic-section">
      <span class="level-badge">Ejemplo guiado 2</span>
      <h2 class="section-h2">Velocidad y tiempo</h2>

      <div class="math-expression">
        Un viaje tarda 6 horas a 60 km/h.
        Si la velocidad aumenta a 90 km/h, ¿el tiempo aumenta o disminuye?
      </div>

      <div class="step-list">
        <div class="step-item">Si vas más rápido, tardas menos.</div>
        <div class="step-item">Entonces la relación es inversa.</div>
        <div class="step-item">No se debe contestar automáticamente “más velocidad = más tiempo”.</div>
      </div>
    </div>

  </div>

  <!-- PRACTICA -->

  <div class="sub-tab-content" id="practica">

    <div class="subtopic-section">
      <h2 class="section-h2">Práctica tipo CBTIS</h2>
      <p>
        Estas preguntas están diseñadas con distractores típicos:
        confundir directa con inversa, olvidar el valor unitario o multiplicar donde se debe dividir.
      </p>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">1. Si 3 litros cuestan $72, ¿cuánto cuestan 5 litros?</div>
      <label class="option-item"><input type="radio" name="prop1" value="a"> $100</label>
      <label class="option-item"><input type="radio" name="prop1" value="b"> $110</label>
      <label class="option-item"><input type="radio" name="prop1" value="c"> $120</label>
      <label class="option-item"><input type="radio" name="prop1" value="d"> $144</label>
      <button class="btn-verify" onclick="verifyProporcionalCBTIS('prop1','c','feedback-prop1','Primero calcula el valor unitario: 72 ÷ 3 = 24. Luego 24 × 5 = 120.')">Verificar</button>
      <div class="feedback" id="feedback-prop1"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">2. Una impresora imprime 120 hojas en 8 minutos. ¿Cuántas hojas imprime en 20 minutos?</div>
      <label class="option-item"><input type="radio" name="prop2" value="a"> 200</label>
      <label class="option-item"><input type="radio" name="prop2" value="b"> 240</label>
      <label class="option-item"><input type="radio" name="prop2" value="c"> 300</label>
      <label class="option-item"><input type="radio" name="prop2" value="d"> 360</label>
      <button class="btn-verify" onclick="verifyProporcionalCBTIS('prop2','c','feedback-prop2','120 ÷ 8 = 15 hojas por minuto. En 20 minutos: 15 × 20 = 300.')">Verificar</button>
      <div class="feedback" id="feedback-prop2"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">3. ¿Cuál situación representa proporcionalidad inversa?</div>
      <label class="option-item"><input type="radio" name="prop3" value="a"> Más kilos de fruta, más precio.</label>
      <label class="option-item"><input type="radio" name="prop3" value="b"> Más trabajadores, menos tiempo para terminar.</label>
      <label class="option-item"><input type="radio" name="prop3" value="c"> Más cuadernos, más costo.</label>
      <label class="option-item"><input type="radio" name="prop3" value="d"> Más horas de trabajo, más producción.</label>
      <button class="btn-verify" onclick="verifyProporcionalCBTIS('prop3','b','feedback-prop3','Es inversa porque al aumentar los trabajadores, disminuye el tiempo.')">Verificar</button>
      <div class="feedback" id="feedback-prop3"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">4. Si 4 personas terminan una actividad en 12 horas, ¿cuánto tardan 8 personas al mismo ritmo?</div>
      <label class="option-item"><input type="radio" name="prop4" value="a"> 24 horas</label>
      <label class="option-item"><input type="radio" name="prop4" value="b"> 12 horas</label>
      <label class="option-item"><input type="radio" name="prop4" value="c"> 6 horas</label>
      <label class="option-item"><input type="radio" name="prop4" value="d"> 3 horas</label>
      <button class="btn-verify" onclick="verifyProporcionalCBTIS('prop4','c','feedback-prop4','8 personas es el doble de 4, por eso el tiempo se reduce a la mitad: 12 ÷ 2 = 6.')">Verificar</button>
      <div class="feedback" id="feedback-prop4"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">5. Una receta usa 2 tazas de arroz para 5 personas. ¿Cuántas tazas se necesitan para 15 personas?</div>
      <label class="option-item"><input type="radio" name="prop5" value="a"> 4</label>
      <label class="option-item"><input type="radio" name="prop5" value="b"> 5</label>
      <label class="option-item"><input type="radio" name="prop5" value="c"> 6</label>
      <label class="option-item"><input type="radio" name="prop5" value="d"> 8</label>
      <button class="btn-verify" onclick="verifyProporcionalCBTIS('prop5','c','feedback-prop5','15 personas es triple de 5. Entonces 2 × 3 = 6 tazas.')">Verificar</button>
      <div class="feedback" id="feedback-prop5"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">6. Un auto recorre 180 km con 12 litros. ¿Cuántos km recorre con 20 litros al mismo rendimiento?</div>
      <label class="option-item"><input type="radio" name="prop6" value="a"> 240 km</label>
      <label class="option-item"><input type="radio" name="prop6" value="b"> 280 km</label>
      <label class="option-item"><input type="radio" name="prop6" value="c"> 300 km</label>
      <label class="option-item"><input type="radio" name="prop6" value="d"> 360 km</label>
      <button class="btn-verify" onclick="verifyProporcionalCBTIS('prop6','c','feedback-prop6','180 ÷ 12 = 15 km por litro. Con 20 litros: 15 × 20 = 300 km.')">Verificar</button>
      <div class="feedback" id="feedback-prop6"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">7. ¿Cuál tabla representa proporcionalidad directa?</div>
      <label class="option-item"><input type="radio" name="prop7" value="a"> (1,4), (2,8), (3,12)</label>
      <label class="option-item"><input type="radio" name="prop7" value="b"> (1,4), (2,7), (3,12)</label>
      <label class="option-item"><input type="radio" name="prop7" value="c"> (1,4), (2,6), (3,8)</label>
      <label class="option-item"><input type="radio" name="prop7" value="d"> (1,4), (2,5), (3,6)</label>
      <button class="btn-verify" onclick="verifyProporcionalCBTIS('prop7','a','feedback-prop7','En la opción A, el segundo valor siempre es 4 veces el primero.')">Verificar</button>
      <div class="feedback" id="feedback-prop7"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">8. Detecta el error: “Si 2 personas tardan 10 horas, 4 personas tardan 20 horas”.</div>
      <label class="option-item"><input type="radio" name="prop8" value="a"> Correcto, porque aumentan las personas y aumenta el tiempo.</label>
      <label class="option-item"><input type="radio" name="prop8" value="b"> Incorrecto, porque al aumentar personas debe bajar el tiempo.</label>
      <label class="option-item"><input type="radio" name="prop8" value="c"> Correcto, porque es regla de tres directa.</label>
      <label class="option-item"><input type="radio" name="prop8" value="d"> Incorrecto, porque no se puede calcular.</label>
      <button class="btn-verify" onclick="verifyProporcionalCBTIS('prop8','b','feedback-prop8','Es una relación inversa: si trabajan más personas, deberían tardar menos tiempo.')">Verificar</button>
      <div class="feedback" id="feedback-prop8"></div>
    </div>

  </div>

  <!-- BOSS -->

  <div class="sub-tab-content" id="boss">

    <div class="quiz-card">
      <div class="quiz-question">🎮 Reto CBTIS 1: Para preparar una bebida se usan 6 cucharadas de concentrado por cada 2 litros de agua. ¿Cuántas cucharadas se necesitan para 7 litros?</div>
      <label class="option-item"><input type="radio" name="propboss1" value="a"> 18</label>
      <label class="option-item"><input type="radio" name="propboss1" value="b"> 20</label>
      <label class="option-item"><input type="radio" name="propboss1" value="c"> 21</label>
      <label class="option-item"><input type="radio" name="propboss1" value="d"> 24</label>
      <button class="btn-verify" onclick="verifyProporcionalCBTIS('propboss1','c','feedback-propboss1','6 ÷ 2 = 3 cucharadas por litro. Para 7 litros: 7 × 3 = 21.')">Verificar</button>
      <div class="feedback" id="feedback-propboss1"></div>
    </div>

    <div class="quiz-card">
      <div class="quiz-question">🎮 Reto CBTIS 2: Una cuadrilla de 6 trabajadores termina una obra en 10 días. Si trabajan 12 personas al mismo ritmo, ¿cuántos días tardarán?</div>
      <label class="option-item"><input type="radio" name="propboss2" value="a"> 20 días</label>
      <label class="option-item"><input type="radio" name="propboss2" value="b"> 10 días</label>
      <label class="option-item"><input type="radio" name="propboss2" value="c"> 5 días</label>
      <label class="option-item"><input type="radio" name="propboss2" value="d"> 3 días</label>
      <button class="btn-verify" onclick="verifyProporcionalCBTIS('propboss2','c','feedback-propboss2','12 trabajadores es el doble de 6. Al duplicarse trabajadores, el tiempo se reduce a la mitad: 10 ÷ 2 = 5 días.')">Verificar</button>
      <div class="feedback" id="feedback-propboss2"></div>
    </div>

  </div>

</div>`;
}

function verifyProporcionalCBTIS(name, correct, feedbackId, explanation){
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
    feedback.innerHTML = "❌ Revisa el razonamiento. " + explanation;
  }
}
