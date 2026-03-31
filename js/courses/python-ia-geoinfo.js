const COURSE_DATA = {
  title: "Python + IA en GeoInformación",
  subtitle: "Potencia el análisis espacial con algoritmos de Inteligencia Artificial",
  modules: [
    {
      id: "mod-1",
      title: "Módulo 1: Datos Espaciales",
      description: "Introducción a la manipulación de cartografía digital con Python.",
      icon: "🌍",
      lessons: [
        {
          id: "les-1-1",
          title: "GeoPandas y Sistemas de Coordenadas",
          type: "video",
          duration: "45 min",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Carga y visualiza archivos Shapefile y GeoJSON.",
          reading: "**Introducción a GeoIA**\n\nLa información geográfica es fundamental para la toma de decisiones. GeoPandas extiende las capacidades de Pandas para manejar geometrías.",
          resources: []
        }
      ],
      quiz: { id: "q1", title: "Quiz: GIS Base", passingScore: 70, questions: [] }
    },
    {
      id: "mod-2",
      title: "Módulo 2: IA para Geoprocesamiento",
      description: "Detección de patrones en imágenes satelitales.",
      icon: "🤖",
      lessons: [
        {
          id: "les-2-1",
          title: "Visión Artificial en Mapas",
          type: "video",
          duration: "60 min",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Modelos de clasificación de cobertura vegetal.",
          reading: "**Machine Learning Espacial**\n\nAprenderás cómo la IA puede identificar objetos en mapas automáticamente.",
          resources: []
        }
      ],
      quiz: { id: "q2", title: "Quiz: GeoIA", passingScore: 70, questions: [] }
    },
    {
      id: "mod-3",
      title: "Módulo 3: Mapas Interactivos",
      description: "Visualización avanzada de resultados.",
      icon: "🛰️",
      lessons: [
        {
          id: "les-3-1",
          title: "Cartografía Web con Folium",
          type: "video",
          duration: "45 min",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Crea mapas que tus usuarios puedan explorar.",
          reading: "**Visualización Científica**\n\nConvierte tus análisis en mapas web interactivos listos para presentar.",
          resources: []
        }
      ],
      quiz: { id: "q3", title: "Quiz: Mapas", passingScore: 70, questions: [] }
    }
  ]
};
