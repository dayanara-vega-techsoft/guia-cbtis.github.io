let currentSubject = "lectura";

function renderHud(){
  return `
    <div class="player-hud">
      <div class="player-info">
        <h2>👤 Cadete EDIEMS</h2>
        <div class="rank">Rango: Explorador</div>
        <div class="streak">🔥 Racha: 4 días</div>
      </div>
      <div class="xp-container">
        <div class="xp-label">Nivel 3 — 240 / 400 XP</div>
        <div class="xp-bar"><div class="xp-fill"></div></div>
      </div>
    </div>
  `;
}

function renderLobby(){
  return `
    <div class="container">
      ${renderHud()}
      <div class="lobby-header">
        <h1>EDIEMS QUEST</h1>
        <p>Completa misiones • Gana XP • Desbloquea nuevos retos</p>
      </div>
      <div class="missions-grid">
        <div class="mission-node" onclick="openLesson()"><div class="icon">📖</div><h2>Comprensión Lectora</h2><span class="level-tag">3 Temas disponibles</span></div>
        <div class="mission-node" onclick="openMathLesson()"><div class="icon">🔢</div><h2>Matemáticas</h2><span class="level-tag">7 Temas disponibles</span></div>
        <div class="mission-node" onclick="openSocialLesson()"><div class="icon">🌍</div><h2>Entorno Social</h2><span class="level-tag">6 Temas disponibles</span></div>
        <div class="mission-node" onclick="openCienciasLesson()"><div class="icon">🧪</div><h2>Ciencias Naturales</h2><span class="level-tag">6 Temas disponibles</span></div>
        <div class="mission-node" onclick="openEticaLesson()"><div class="icon">⚖️</div><h2>Ética</h2><span class="level-tag">4 Temas disponibles</span></div>
      </div>
    </div>
    ${renderModal()}
  `;
}

function renderModal(){
  return `
    <div class="modal" id="lessonModal">
      <div class="modal-content">
        <button type="button" class="menu-toggle" onclick="toggleSidebar()" aria-label="Mostrar u ocultar menú">
          ☰
        </button>

        <div class="lesson-layout">
          <aside class="lesson-sidebar" id="lessonSidebar"></aside>
          <main class="lesson-main" id="lessonContent"></main>
        </div>
      </div>
    </div>
  `;
}

function renderSidebar(){
  if(currentSubject === "matematicas") return renderMathSidebar();
  if(currentSubject === "social") return renderSocialSidebar();
  if(currentSubject === "ciencias") return renderCienciasSidebar();
  if(currentSubject === "etica") return renderEticaSidebar();
  return renderLecturaSidebar();
}

function updateSidebar(){
  const sidebar = document.getElementById("lessonSidebar");
  if(sidebar) sidebar.innerHTML = renderSidebar();
}

function renderLecturaSidebar(){
  return `
    <h2 class="sidebar-title">📖 Comprensión Lectora</h2>
    <div class="session-menu-wrapper">
      <span class="session-title-label">📍 Tema 1: Tipos de texto</span>
      <ul class="sidebar-sub-menu">
        <li><button type="button" class="sidebar-sub-btn active" id="btn-caracteristicas" onclick="openTopicFromMenu(event, \'caracteristicas\')">📊 Características y elementos<br><small>Pág. 3 - 11</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-documentos" onclick="openTopicFromMenu(event, \'documentos\')">📂 Tipos de documentos<br><small>Pág. 12 - 18</small></button></li>
      </ul>
    </div>
    <div class="session-menu-wrapper">
      <span class="session-title-label">📍 Tema 2: Interpretación e integración</span>
      <ul class="sidebar-sub-menu">
        <li><button type="button" class="sidebar-sub-btn" id="btn-coherencia" onclick="openTopicFromMenu(event, \'coherencia\')">🔗 Coherencia y cohesión<br><small>Pág. 19 - 25</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-modos" onclick="openTopicFromMenu(event, \'modos\')">🧠 Modos discursivos<br><small>Pág. 26 - 31</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-ideas" onclick="openTopicFromMenu(event, \'ideas\')">💡 Ideas principales y secundarias<br><small>Pág. 32 - 37</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-sintesis" onclick="openTopicFromMenu(event, \'sintesis\')">📝 Síntesis de información<br><small>Pág. 38 - 42</small></button></li>
      </ul>
    </div>
    <div class="session-menu-wrapper">
      <span class="session-title-label">📍 Tema 3: Análisis y reflexión</span>
      <ul class="sidebar-sub-menu">
        <li><button type="button" class="sidebar-sub-btn" id="btn-fuentes" onclick="openTopicFromMenu(event, \'fuentes\')">🌐 Fuentes de información<br><small>Pág. 43 - 49</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-discontinuos" onclick="openTopicFromMenu(event, \'discontinuos\')">📈 Textos discontinuos<br><small>Pág. 50 - 54</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-argumentativos" onclick="openTopicFromMenu(event, \'argumentativos\')">⚔️ Textos argumentativos<br><small>Pág. 55 - 59</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-analisis" onclick="openTopicFromMenu(event, \'analisis\')">🔍 Análisis e interpretación<br><small>Pág. 60 - 63</small></button></li>
      </ul>
    </div>
    <button type="button" class="close-btn" onclick="closeLesson()">Cerrar</button>
  `;
}

function renderMathSidebar(){
  return `
    <h2 class="sidebar-title">🔢 Matemáticas</h2>
    <div class="session-menu-wrapper">
      <span class="session-title-label">📘 Números, álgebra y variación</span>
      <ul class="sidebar-sub-menu">
        <li><button type="button" class="sidebar-sub-btn active" id="btn-jerarquia" onclick="openTopicFromMenu(event, \'jerarquia\')">🧮 Jerarquía de operaciones<br><small>Pág. 69 - 75</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-ecuacion" onclick="openTopicFromMenu(event, \'ecuacion\')">📐 Ecuación lineal<br><small>Pág. 76 - 86</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-proporcional" onclick="openTopicFromMenu(event, \'proporcional\')">📊 Variación proporcional<br><small>Pág. 87 - 98</small></button></li>
      </ul>
    </div>
    <div class="session-menu-wrapper">
      <span class="session-title-label">📐 Forma, espacio y medida</span>
      <ul class="sidebar-sub-menu">
        <li><button type="button" class="sidebar-sub-btn" id="btn-perimetro" onclick="openTopicFromMenu(event, \'perimetro\')">📏 Perímetro<br><small>Pág. 100 - 106</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-area" onclick="openTopicFromMenu(event, \'area\')">📐 Área<br><small>Pág. 107 - 126</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-dispersion" onclick="openTopicFromMenu(event, \'dispersion\')">📉 Medidas de dispersión<br><small>Pág. 127 - 134</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-probabilidad" onclick="openTopicFromMenu(event, \'probabilidad\')">🎲 Probabilidad<br><small>Pág. 135 - 140</small></button></li>
      </ul>
    </div>
    <button type="button" class="close-btn" onclick="closeLesson()">Cerrar</button>
  `;
}

function renderSocialSidebar(){
  return `
    <h2 class="sidebar-title">🌍 Entorno Social</h2>
    <div class="session-menu-wrapper">
      <span class="session-title-label">🌐 Medio Social</span>
      <ul class="sidebar-sub-menu">
        <li><button type="button" class="sidebar-sub-btn active" id="btn-injusticia" onclick="openTopicFromMenu(event, \'injusticia\')">⚖️ Injusticia y desigualdad<br><small>Pág. 141 - 148</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-sociedad" onclick="openTopicFromMenu(event, \'sociedad\')">🏙️ Sociedad mexicana contemporánea<br><small>Pág. 149 - 156</small></button></li>
      </ul>
    </div>
    <div class="session-menu-wrapper">
      <span class="session-title-label">🏛️ Sistema Político Económico</span>
      <ul class="sidebar-sub-menu">
        <li><button type="button" class="sidebar-sub-btn" id="btn-democratizacion" onclick="openTopicFromMenu(event, \'democratizacion\')">🗳️ Democratización<br><small>Pág. 157 - 165</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-instituciones" onclick="openTopicFromMenu(event, \'instituciones\')">🏛️ Instituciones del Estado<br><small>Pág. 166 - 172</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-normas" onclick="openTopicFromMenu(event, \'normas\')">📜 Normas sociales y jurídicas<br><small>Pág. 173 - 179</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-procesos" onclick="openTopicFromMenu(event, \'procesos\')">🏭 Procesos productivos<br><small>Pág. 180 - 186</small></button></li>
      </ul>
    </div>
    <button type="button" class="close-btn" onclick="closeLesson()">Cerrar</button>
  `;
}

function renderCienciasSidebar(){
  return `
    <h2 class="sidebar-title">🧪 Ciencias Naturales y Experimentales</h2>
    <div class="session-menu-wrapper">
      <span class="session-title-label">🧪 Materia, energía e interacciones (Pág. 187)</span>
      <ul class="sidebar-sub-menu">
        <li><button type="button" class="sidebar-sub-btn active" id="btn-propiedades" onclick="openTopicFromMenu(event, \'propiedades\')">🧪 Propiedades físicas de la materia<br><small>Pág. 187 - 194</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-mezclas" onclick="openTopicFromMenu(event, \'mezclas\')">⚗️ Mezclas y sustancias puras<br><small>Pág. 195 - 203</small></button></li>
      </ul>
    </div>
    <div class="session-menu-wrapper">
      <span class="session-title-label">⚛️ Diversidad, continuidad y cambio (Pág. 204)</span>
      <ul class="sidebar-sub-menu">
        <li><button type="button" class="sidebar-sub-btn" id="btn-modelos" onclick="openTopicFromMenu(event, \'modelos\')">⚛️ Modelos atómicos y enlace químico<br><small>Pág. 204 - 213</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-enlace" onclick="openTopicFromMenu(event, \'enlace\')">🔗 Enlace químico<br><small>Pág. 214 - 223</small></button></li>
      </ul>
    </div>
    <div class="session-menu-wrapper">
      <span class="session-title-label">📡 Materia, energía e interacciones (Pág. 224)</span>
      <ul class="sidebar-sub-menu">
        <li><button type="button" class="sidebar-sub-btn" id="btn-ondas" onclick="openTopicFromMenu(event, \'ondas\')">📡 Ondas electromagnéticas<br><small>Pág. 224 - 232</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-energia" onclick="openTopicFromMenu(event, \'energia\')">⚡ Generación de energía eléctrica y su impacto medioambiental<br><small>Pág. 233 - 242</small></button></li>
      </ul>
    </div>
    <button type="button" class="close-btn" onclick="closeLesson()">Cerrar</button>
  `;
}

function renderEticaSidebar(){
  return `
    <h2 class="sidebar-title">⚖️ Ética</h2>
    <div class="session-menu-wrapper">
      <span class="session-title-label">⚖️ Ejercicio responsable de los derechos humanos (Pág. 243)</span>
      <ul class="sidebar-sub-menu">
        <li><button type="button" class="sidebar-sub-btn active" id="btn-criterios" onclick="openTopicFromMenu(event, \'criterios\')">⚖️ Criterios éticos<br><small>Pág. 243 - 255</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-diversidad-etica" onclick="openTopicFromMenu(event, \'diversidad-etica\')">🌈 Diversidad, interculturalidad y perspectiva de género<br><small>Pág. 256 - 265</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-participacion" onclick="openTopicFromMenu(event, \'participacion\')">🧑‍🤝‍🧑 Dimensiones de la participación ciudadana<br><small>Pág. 266 - 271</small></button></li>
        <li><button type="button" class="sidebar-sub-btn" id="btn-democracia-participativa" onclick="openTopicFromMenu(event, \'democracia-participativa\')">🗳️ Democracia participativa<br><small>Pág. 272 - 276</small></button></li>
      </ul>
    </div>
    <button type="button" class="close-btn" onclick="closeLesson()">Cerrar</button>
  `;
}

function renderPlaceholder(title, text){
  return `<div class="placeholder"><h2>${title}</h2><p>${text}</p></div>`;
}

/* =========================================
   SWITCH SUB TAB - COMPATIBLE
   Soporta:
   - .sub-tab-content  (tabs actuales del proyecto)
   - .subtopic-content (compatibilidad anterior)
========================================= */

function switchSubTab(topic, tab, btn){

  const targetId = `${topic}-${tab}`;
  const target = document.getElementById(targetId);

  if(!target){
    console.warn("No se encontró el tab:", targetId);
    return;
  }

  const shell = target.closest(".topic-shell") || document;

  shell
    .querySelectorAll(".sub-tab-content, .subtopic-content")
    .forEach(el => {
      el.classList.remove("active");
      el.style.display = "none";
    });

  shell
    .querySelectorAll(".tab-btn, .topic-tab")
    .forEach(el => {
      el.classList.remove("active");
    });

  target.classList.add("active");
  target.style.display = "block";

  if(btn){
    btn.classList.add("active");
  }
}
