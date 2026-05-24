const COURSE_DATA = {
  title: "AgroClima con Python y RStudio",
  subtitle: "Analiza datos climáticos y agrícolas para la toma de decisiones",
  modules: [
    {
      id: "mod-1",
      title: "Clase 1: Datos AgroClimáticos",
      description: "Adquiere y prepara series de datos climáticos para tu zona de estudio.",
      icon: "🌦️",
      lessons: [
        {
          id: "les-1-1",
          title: "Introducción a AgroClima con Python y R",
          type: "video",
          duration: "60 min",
          videoId: "YUV5qFReZXE",
          description: "Conoce las fuentes de datos climáticos y prepara tu entorno en Python y RStudio.",
          reading: "**Conceptos Fundamentales**\n\n1. **Datos AgroClimáticos:** Series temporales de variables como precipitación, temperatura, humedad, radiación solar y viento, vinculadas a una ubicación geográfica. Se usan para entender el comportamiento del clima sobre cultivos y ecosistemas.\n\n2. **Fuentes oficiales (IDEAM, NASA POWER, ERA5, CHIRPS):** Repositorios públicos que ofrecen datos climáticos históricos y actuales. IDEAM (Colombia) provee estaciones meteorológicas; NASA POWER, ERA5 y CHIRPS proveen datos satelitales/reanálisis a escala global.\n\n3. **Python vs RStudio:** Python (con pandas, xarray, geopandas) es excelente para procesar grandes volúmenes y automatizar; RStudio (con tidyverse, raster, terra) destaca para análisis estadístico y visualización exploratoria. Ambos son complementarios en agroclimatología.",
          resources: [
            { title: "Video YouTube", url: "https://www.youtube.com/watch?v=YUV5qFReZXE&t=3s", type: "link" }
          ]
        }
      ],
      quiz: {
        id: "q1",
        title: "Quiz: Datos AgroClimáticos",
        passingScore: 70,
        questions: [
          {
            question: "¿Qué son los datos agroclimáticos?",
            options: ["Datos económicos del agro", "Series de variables climáticas usadas para entender su impacto en cultivos y ecosistemas", "Mapas de cultivos", "Precios del mercado agrícola"],
            correct: 1,
            explanation: "Los datos agroclimáticos combinan variables del clima (precipitación, temperatura, etc.) con su efecto sobre la agricultura."
          },
          {
            question: "¿Qué institución es la fuente oficial de datos meteorológicos en Colombia?",
            options: ["DANE", "IDEAM", "IGAC", "ICA"],
            correct: 1,
            explanation: "El IDEAM (Instituto de Hidrología, Meteorología y Estudios Ambientales) administra la red oficial de estaciones meteorológicas en Colombia."
          },
          {
            question: "¿Qué es NASA POWER?",
            options: ["Una nave espacial", "Un servicio gratuito de NASA con datos climáticos por coordenadas a escala global", "Un software pago", "Un satélite militar"],
            correct: 1,
            explanation: "NASA POWER ofrece datos meteorológicos diarios y mensuales de reanálisis para cualquier coordenada del planeta."
          },
          {
            question: "¿Qué variable climática mide la cantidad de agua caída por unidad de tiempo?",
            options: ["Temperatura", "Precipitación", "Velocidad del viento", "Presión"],
            correct: 1,
            explanation: "La precipitación cuantifica el agua (líquida o sólida) que cae sobre una superficie, generalmente en milímetros."
          },
          {
            question: "¿Qué biblioteca de Python es ideal para series de tiempo?",
            options: ["NumPy únicamente", "pandas", "OpenCV", "PyGame"],
            correct: 1,
            explanation: "pandas ofrece estructuras (Series, DataFrame) y funciones especializadas en datos indexados por tiempo."
          },
          {
            question: "¿Qué paquete de R agrupa herramientas para manipulación de datos como dplyr y ggplot2?",
            options: ["base R", "tidyverse", "raster", "shiny"],
            correct: 1,
            explanation: "tidyverse es un conjunto de paquetes de R con una filosofía coherente para manipular y visualizar datos."
          },
          {
            question: "¿Qué formato es común para datos climáticos multidimensionales (tiempo, lat, lon)?",
            options: [".docx", ".NetCDF (.nc)", ".pptx", ".jpg"],
            correct: 1,
            explanation: "NetCDF (.nc) es el formato estándar para series multidimensionales en ciencias atmosféricas y oceánicas."
          },
          {
            question: "¿Qué biblioteca de Python lee archivos NetCDF de forma eficiente?",
            options: ["xarray", "tkinter", "flask", "requests"],
            correct: 0,
            explanation: "xarray maneja arrays etiquetados N-dimensionales, perfecto para datos climáticos en NetCDF."
          },
          {
            question: "¿Qué es CHIRPS?",
            options: ["Una app de chat", "Un dataset satelital de precipitación con cobertura cuasi-global", "Un editor de imágenes", "Un sistema operativo"],
            correct: 1,
            explanation: "CHIRPS combina observaciones in situ y satelitales para generar series largas de precipitación a alta resolución."
          },
          {
            question: "¿Qué primer paso se recomienda al recibir un dataset agroclimático?",
            options: ["Borrarlo", "Inspeccionar fechas, valores faltantes y unidades antes de cualquier análisis", "Convertirlo a PDF", "Imprimirlo"],
            correct: 1,
            explanation: "El control de calidad inicial (huecos, outliers, unidades) evita errores en todo el análisis posterior."
          }
        ]
      }
    }
  ]
};
