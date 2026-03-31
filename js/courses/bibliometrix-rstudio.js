const COURSE_DATA = {
  title: "Bibliometrix en Rstudio",
  subtitle: "Domina el mapeo científico y análisis de redes de investigación",
  modules: [
    {
      id: "mod-1",
      title: "Módulo 1: Ciencia de Datos con R",
      description: "Configuración y carga de bases de datos científicas.",
      icon: "📚",
      lessons: [
        {
          id: "les-1-1",
          title: "Entorno R y Bibliometrix",
          type: "video",
          duration: "45 min",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Instala los paquetes necesarios para tu investigación.",
          reading: "**Cienciometría Profesional**\n\nBibliometrix es la herramienta líder para mapeo científico. Aprenderás a importar datos de Scopus y Web of Science.",
          resources: []
        }
      ],
      quiz: { id: "q1", title: "Quiz: Bases", passingScore: 70, questions: [] }
    },
    {
      id: "mod-2",
      title: "Módulo 2: Análisis Descriptivo",
      description: "Estadísticas de producción científica.",
      icon: "📊",
      lessons: [
        {
          id: "les-2-1",
          title: "Leyes Bibliométricas",
          type: "video",
          duration: "60 min",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Análisis de autores, revistas y países.",
          reading: "**Metodología Científica**\n\nEntiende el impacto de las publicaciones usando indicadores estandarizados.",
          resources: []
        }
      ],
      quiz: { id: "q2", title: "Quiz: Análisis", passingScore: 70, questions: [] }
    },
    {
      id: "mod-3",
      title: "Módulo 3: Mapas de Redes",
      description: "Visualización de la evolución temática.",
      icon: "🕸️",
      lessons: [
        {
          id: "les-3-1",
          title: "Redes de Co-citación",
          type: "video",
          duration: "60 min",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Identifica tendencias y grupos de investigación.",
          reading: "**Mapeo Temático**\n\nVisualiza cómo interactúan los conceptos en tu área de estudio.",
          resources: []
        }
      ],
      quiz: { id: "q3", title: "Quiz: Redes", passingScore: 70, questions: [] }
    }
  ]
};
