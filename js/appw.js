let unlockedSubjects = {
  lectura: true,
  matematicas: true,
  social: true,
  ciencias: true,
  etica: true
};

document.getElementById("app").innerHTML = renderLobby();

function openLesson(){
  currentSubject = "lectura";
  document.getElementById("lessonModal").style.display = "block";
  updateSidebar();
  switchSubPage("caracteristicas");
}

function openMathLesson(){
  currentSubject = "matematicas";
  document.getElementById("lessonModal").style.display = "block";
  updateSidebar();
  switchSubPage("jerarquia");
}

function openSocialLesson(){
  currentSubject = "social";
  document.getElementById("lessonModal").style.display = "block";
  updateSidebar();
  switchSubPage("injusticia");
}

function openCienciasLesson(){
  currentSubject = "ciencias";
  document.getElementById("lessonModal").style.display = "block";
  updateSidebar();
  switchSubPage("propiedades");
}

function openEticaLesson(){
  currentSubject = "etica";
  document.getElementById("lessonModal").style.display = "block";
  updateSidebar();
  switchSubPage("criterios");
}

function closeLesson(){
  document.getElementById("lessonModal").style.display = "none";
}

function setActive(pageId){
  document.querySelectorAll(".sidebar-sub-btn").forEach(btn => btn.classList.remove("active"));
  const btn = document.getElementById(`btn-${pageId}`);
  if(btn) btn.classList.add("active");
}

function closeSidebarAfterRender(){
  if(window.innerWidth <= 1024 && typeof closeSidebar === "function"){
    setTimeout(() => {
      closeSidebar();
    }, 80);
  }
}

function switchSubPage(pageId){

  setActive(pageId);
  const content = document.getElementById("lessonContent");

  if(pageId === "caracteristicas"){ content.innerHTML = renderCaracteristicas(); closeSidebarAfterRender(); return; }
  if(pageId === "documentos"){ content.innerHTML = renderDocumentos(); closeSidebarAfterRender(); return; }
  if(pageId === "coherencia"){ content.innerHTML = renderCoherencia(); closeSidebarAfterRender(); return; }
  if(pageId === "modos"){ content.innerHTML = renderModos(); closeSidebarAfterRender(); return; }
  if(pageId === "ideas"){ content.innerHTML = renderIdeas(); closeSidebarAfterRender(); return; }
  if(pageId === "sintesis"){ content.innerHTML = renderSintesis(); closeSidebarAfterRender(); return; }
  if(pageId === "fuentes"){ content.innerHTML = renderFuentes(); closeSidebarAfterRender(); return; }
  if(pageId === "discontinuos"){ content.innerHTML = renderDiscontinuos(); closeSidebarAfterRender(); return; }
  if(pageId === "argumentativos"){ content.innerHTML = renderArgumentativos(); closeSidebarAfterRender(); return; }
  if(pageId === "analisis"){ content.innerHTML = renderAnalisis(); closeSidebarAfterRender(); return; }

  if(pageId === "jerarquia"){ content.innerHTML = renderJerarquia(); closeSidebarAfterRender(); return; }
  if(pageId === "ecuacion"){ content.innerHTML = renderEcuacion(); closeSidebarAfterRender(); return; }
  if(pageId === "proporcional"){ content.innerHTML = renderProporcional(); closeSidebarAfterRender(); return; }
  if(pageId === "perimetro"){ content.innerHTML = renderPerimetro(); closeSidebarAfterRender(); return; }
  if(pageId === "area"){ content.innerHTML = renderArea(); closeSidebarAfterRender(); return; }
  if(pageId === "dispersion"){ content.innerHTML = renderDispersion(); closeSidebarAfterRender(); return; }
  if(pageId === "probabilidad"){ content.innerHTML = renderProbabilidad(); closeSidebarAfterRender(); return; }

  if(pageId === "injusticia"){ content.innerHTML = renderInjusticia(); closeSidebarAfterRender(); return; }
  if(pageId === "sociedad"){ content.innerHTML = renderSociedad(); closeSidebarAfterRender(); return; }
  if(pageId === "democratizacion"){ content.innerHTML = renderDemocratizacion(); closeSidebarAfterRender(); return; }
  if(pageId === "instituciones"){ content.innerHTML = renderInstituciones(); closeSidebarAfterRender(); return; }
  if(pageId === "normas"){ content.innerHTML = renderNormas(); closeSidebarAfterRender(); return; }
  if(pageId === "procesos"){ content.innerHTML = renderProcesos(); closeSidebarAfterRender(); return; }

  if(pageId === "propiedades"){ content.innerHTML = renderPropiedades(); closeSidebarAfterRender(); return; }
  if(pageId === "mezclas"){ content.innerHTML = renderMezclas(); closeSidebarAfterRender(); return; }
  if(pageId === "modelos"){ content.innerHTML = renderModelos(); closeSidebarAfterRender(); return; }
  if(pageId === "enlace"){ content.innerHTML = renderEnlace(); closeSidebarAfterRender(); return; }
  if(pageId === "ondas"){ content.innerHTML = renderOndas(); closeSidebarAfterRender(); return; }
  if(pageId === "energia"){ content.innerHTML = renderEnergia(); closeSidebarAfterRender(); return; }

  if(pageId === "criterios"){ content.innerHTML = renderCriterios(); closeSidebarAfterRender(); return; }
  if(pageId === "diversidad-etica"){ content.innerHTML = renderDiversidadEtica(); closeSidebarAfterRender(); return; }
  if(pageId === "participacion"){ content.innerHTML = renderParticipacion(); closeSidebarAfterRender(); return; }
  if(pageId === "democracia-participativa"){ content.innerHTML = renderDemocraciaParticipativa(); closeSidebarAfterRender(); return; }

  content.innerHTML = renderPlaceholder("🚧 Próximamente", "Este contenido será agregado después.");
  closeSidebarAfterRender();
}

function switchTab(tab){
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".sub-tab-content").forEach(content => content.classList.remove("active"));

  const tabButton = document.getElementById(`btn-${tab}`);
  const tabContent = document.getElementById(tab);

  if(tabButton) tabButton.classList.add("active");
  if(tabContent) tabContent.classList.add("active");
}

function verifyQuiz(){
  const selected = document.querySelector('input[name="q1"]:checked');
  const feedback = document.getElementById("feedback");

  if(!selected){
    alert("Selecciona una opción.");
    return;
  }

  if(selected.value === "c"){
    feedback.className = "feedback correct";
    feedback.innerHTML = "✅ Correcto. El texto argumentativo busca convencer.";
  }else{
    feedback.className = "feedback incorrect";
    feedback.innerHTML = "❌ Incorrecto. El texto argumentativo es el que busca persuadir.";
  }
}



/* =========================================
   SIDEBAR TOGGLE GLOBAL
========================================= */

function ensureSidebarBackdrop(){
  let backdrop = document.querySelector('.sidebar-backdrop');

  if(!backdrop){
    backdrop = document.createElement('div');
    backdrop.className = 'sidebar-backdrop';
    backdrop.onclick = closeSidebar;
    document.body.appendChild(backdrop);
  }

  return backdrop;
}

function toggleSidebar(){

  const layout = document.querySelector('.lesson-layout');

  if(!layout) return;

  const backdrop = ensureSidebarBackdrop();

  const isMobile = window.innerWidth <= 1024;

  if(isMobile){

    layout.classList.toggle('sidebar-open');

    if(layout.classList.contains('sidebar-open')){
      backdrop.classList.add('active');
    }else{
      backdrop.classList.remove('active');
    }

  }else{

    layout.classList.toggle('sidebar-hidden');

  }

}

function closeSidebar(){

  const layout = document.querySelector('.lesson-layout');
  const backdrop = document.querySelector('.sidebar-backdrop');

  if(layout){
    layout.classList.remove('sidebar-open');
  }

  if(backdrop){
    backdrop.classList.remove('active');
  }

}

window.addEventListener('resize', () => {

  const layout = document.querySelector('.lesson-layout');
  const backdrop = document.querySelector('.sidebar-backdrop');

  if(window.innerWidth > 1024){

    if(layout){
      layout.classList.remove('sidebar-open');
    }

    if(backdrop){
      backdrop.classList.remove('active');
    }

  }

});
