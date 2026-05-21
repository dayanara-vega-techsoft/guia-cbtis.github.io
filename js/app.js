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

function switchSubPage(pageId){
  setActive(pageId);
  const content = document.getElementById("lessonContent");

  if(pageId === "caracteristicas"){ content.innerHTML = renderCaracteristicas(); return; }
  if(pageId === "documentos"){ content.innerHTML = renderDocumentos(); return; }
  if(pageId === "coherencia"){ content.innerHTML = renderCoherencia(); return; }
  if(pageId === "modos"){ content.innerHTML = renderModos(); return; }
  if(pageId === "ideas"){ content.innerHTML = renderIdeas(); return; }
  if(pageId === "sintesis"){ content.innerHTML = renderSintesis(); return; }
  if(pageId === "fuentes"){ content.innerHTML = renderFuentes(); return; }
  if(pageId === "discontinuos"){ content.innerHTML = renderDiscontinuos(); return; }
  if(pageId === "argumentativos"){ content.innerHTML = renderArgumentativos(); return; }
  if(pageId === "analisis"){ content.innerHTML = renderAnalisis(); return; }

  if(pageId === "jerarquia"){ content.innerHTML = renderJerarquia(); return; }
  if(pageId === "ecuacion"){ content.innerHTML = renderEcuacion(); return; }
  if(pageId === "proporcional"){ content.innerHTML = renderProporcional(); return; }
  if(pageId === "perimetro"){ content.innerHTML = renderPerimetro(); return; }
  if(pageId === "area"){ content.innerHTML = renderArea(); return; }
  if(pageId === "dispersion"){ content.innerHTML = renderDispersion(); return; }
  if(pageId === "probabilidad"){ content.innerHTML = renderProbabilidad(); return; }

  if(pageId === "injusticia"){ content.innerHTML = renderInjusticia(); return; }
  if(pageId === "sociedad"){ content.innerHTML = renderSociedad(); return; }
  if(pageId === "democratizacion"){ content.innerHTML = renderDemocratizacion(); return; }
  if(pageId === "instituciones"){ content.innerHTML = renderInstituciones(); return; }
  if(pageId === "normas"){ content.innerHTML = renderNormas(); return; }
  if(pageId === "procesos"){ content.innerHTML = renderProcesos(); return; }

  if(pageId === "propiedades"){ content.innerHTML = renderPropiedades(); return; }
  if(pageId === "mezclas"){ content.innerHTML = renderMezclas(); return; }
  if(pageId === "modelos"){ content.innerHTML = renderModelos(); return; }
  if(pageId === "enlace"){ content.innerHTML = renderEnlace(); return; }
  if(pageId === "ondas"){ content.innerHTML = renderOndas(); return; }
  if(pageId === "energia"){ content.innerHTML = renderEnergia(); return; }

  if(pageId === "criterios"){ content.innerHTML = renderCriterios(); return; }
  if(pageId === "diversidad-etica"){ content.innerHTML = renderDiversidadEtica(); return; }
  if(pageId === "participacion"){ content.innerHTML = renderParticipacion(); return; }
  if(pageId === "democracia-participativa"){ content.innerHTML = renderDemocraciaParticipativa(); return; }

  content.innerHTML = renderPlaceholder("🚧 Próximamente", "Este contenido será agregado después.");
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
