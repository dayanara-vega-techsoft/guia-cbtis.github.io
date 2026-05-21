const DISCIPLINAS = [
  { id:"lectora", icon:"📖", title:"Comprensión Lectora", tag:"3 Temas disponibles", enabled:true },
  { id:"matematicas", icon:"🔢", title:"Matemáticas", tag:"BLOQUEADO", enabled:false },
  { id:"social", icon:"🌍", title:"Entorno Social", tag:"BLOQUEADO", enabled:false },
  { id:"ciencias", icon:"🧪", title:"Ciencias Naturales", tag:"BLOQUEADO", enabled:false },
  { id:"etica", icon:"⚖️", title:"Ética", tag:"BLOQUEADO", enabled:false }
];

const MENU_LECTORA = [
  {
    title:"📍 Tema 1: Tipos de texto (Pág. 3)",
    items:[
      { id:"caracteristicas", label:"📊 Características y elementos de los tipos de texto", pages:"Pág. 3 - 11" },
      { id:"documentos", label:"📂 Tipos de documentos", pages:"Pág. 12 - 18" }
    ]
  },
  {
    title:"📍 Tema 2: Interpretación e integración de ideas (Pág. 19)",
    items:[
      { id:"coherencia", label:"🔗 Coherencia y cohesión", pages:"Pág. 19 - 25" },
      { id:"modos", label:"🧠 Modos discursivos", pages:"Pág. 26 - 31" },
      { id:"ideas", label:"💡 Ideas principales e ideas secundarias", pages:"Pág. 32 - 37" },
      { id:"sintesis", label:"📝 Síntesis de información", pages:"Pág. 38 - 42" }
    ]
  },
  {
    title:"📍 Tema 3: Análisis y reflexión sobre el contenido de un texto (Pág. 43)",
    items:[
      { id:"fuentes", label:"🌐 Fuentes de información", pages:"Pág. 43 - 49" },
      { id:"discontinuos", label:"📈 Textos discontinuos", pages:"Pág. 50 - 54" },
      { id:"argumentativos", label:"⚔️ Textos argumentativos", pages:"Pág. 55 - 59" },
      { id:"analisis", label:"🔍 Análisis e interpretación de diferentes textos", pages:"Pág. 60 - 63" }
    ]
  }
];
