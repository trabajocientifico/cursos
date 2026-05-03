const COURSE_DATA = {
  title: "AgroClima con Python y RStudio",
  subtitle: "Analiza datos climáticos y agrícolas para la toma de decisiones",
  modules: [
    {
      id: "mod-1",
      title: "Módulo 1: Datos AgroClimáticos",
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
    },
    {
      id: "mod-2",
      title: "Módulo 2: Análisis con Python",
      description: "Procesa series de tiempo y construye índices climáticos en Python.",
      icon: "🐍",
      lessons: [
        {
          id: "les-2-1",
          title: "Series de Tiempo Climáticas en Python",
          type: "video",
          duration: "60 min",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Calcula climatologías, anomalías e índices con pandas y xarray.",
          reading: "**Conceptos Fundamentales**\n\n1. **Climatología:** Promedio de una variable climática en un período base (típicamente 30 años, ej. 1991-2020). Sirve como referencia para comparar condiciones actuales y detectar anomalías.\n\n2. **Anomalía climática:** Diferencia entre el valor observado y la climatología. Una anomalía positiva en precipitación indica más lluvia de lo normal; una negativa, déficit hídrico.\n\n3. **Índices agroclimáticos (ETo, balance hídrico, SPI):** ETo (evapotranspiración de referencia) estima la demanda atmosférica de agua; el balance hídrico compara lluvia vs ETo; el SPI (Standardized Precipitation Index) clasifica condiciones de sequía o exceso.",
          resources: []
        }
      ],
      quiz: {
        id: "q2",
        title: "Quiz: Series de Tiempo en Python",
        passingScore: 70,
        questions: [
          {
            question: "¿Qué es una climatología?",
            options: ["Un país tropical", "El promedio de una variable climática durante un período base", "Una predicción a 1 día", "Un software"],
            correct: 1,
            explanation: "La climatología establece el comportamiento normal de una variable, sirviendo como referencia para detectar anomalías."
          },
          {
            question: "¿Qué es una anomalía climática?",
            options: ["Un error de medición", "La diferencia entre un valor observado y la climatología", "Un huracán", "Una nube"],
            correct: 1,
            explanation: "La anomalía cuantifica cuánto se desvía un valor actual respecto al promedio histórico."
          },
          {
            question: "¿Qué función de pandas convierte una columna a tipo fecha?",
            options: ["pd.to_datetime()", "pd.read_csv()", "pd.merge()", "pd.plot()"],
            correct: 0,
            explanation: "pd.to_datetime() reconoce y convierte texto en objetos de fecha indexables."
          },
          {
            question: "¿Qué método de pandas agrega valores por mes?",
            options: [".plot()", ".resample('M').sum() o .mean()", ".sort()", ".dropna()"],
            correct: 1,
            explanation: "resample agrupa series temporales a la frecuencia indicada (diaria, mensual, anual)."
          },
          {
            question: "¿Qué representa la ETo?",
            options: ["Un fertilizante", "La evapotranspiración de referencia, demanda atmosférica de agua", "Un cultivo", "Un satélite"],
            correct: 1,
            explanation: "La ETo combina temperatura, radiación, humedad y viento para estimar cuánta agua se evapora de un cultivo de referencia."
          },
          {
            question: "¿Qué método se usa comúnmente para calcular la ETo?",
            options: ["Penman-Monteith FAO 56", "Ley de Ohm", "Teorema de Pitágoras", "Ley de Kepler"],
            correct: 0,
            explanation: "Penman-Monteith FAO 56 es el método estándar internacional para calcular la evapotranspiración de referencia."
          },
          {
            question: "¿Qué es el balance hídrico?",
            options: ["Pesar el agua", "La diferencia entre entradas (lluvia, riego) y salidas (ETo, escorrentía)", "Un tipo de gráfico", "Un mapa"],
            correct: 1,
            explanation: "El balance hídrico determina si un sistema acumula o pierde agua durante un período."
          },
          {
            question: "¿Qué indica un SPI negativo (Standardized Precipitation Index)?",
            options: ["Exceso de lluvia", "Déficit de lluvia / sequía", "Temperatura alta", "Vientos fuertes"],
            correct: 1,
            explanation: "El SPI estandariza la precipitación. Valores negativos indican sequía; positivos, exceso."
          },
          {
            question: "¿Qué biblioteca de Python facilita el manejo de archivos NetCDF y arrays etiquetados?",
            options: ["xarray", "PyGame", "BeautifulSoup", "Pillow"],
            correct: 0,
            explanation: "xarray es la biblioteca de referencia para datos N-dimensionales con etiquetas (tiempo, lat, lon)."
          },
          {
            question: "¿Qué hace .groupby('time.month').mean() en xarray?",
            options: ["Calcula la climatología mensual", "Borra los datos", "Cambia las unidades", "Convierte a CSV"],
            correct: 0,
            explanation: "Agrupar por mes y promediar produce el ciclo anual climatológico de la variable."
          }
        ]
      }
    },
    {
      id: "mod-3",
      title: "Módulo 3: Visualización con RStudio",
      description: "Construye visualizaciones y reportes reproducibles en R.",
      icon: "📈",
      lessons: [
        {
          id: "les-3-1",
          title: "Visualización Climática con ggplot2 y R Markdown",
          type: "video",
          duration: "60 min",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Crea gráficos profesionales y reportes reproducibles para datos agroclimáticos.",
          reading: "**Conceptos Fundamentales**\n\n1. **ggplot2 y la gramática de gráficos:** Sistema de R para construir visualizaciones por capas (datos, estética, geometría, escalas, facetas, tema). Permite gráficos publicables con pocas líneas de código y consistencia estética.\n\n2. **R Markdown:** Documento que combina texto, código R y resultados en un solo archivo, exportable a HTML, PDF o Word. Ideal para reportes climáticos reproducibles que se actualizan al cambiar los datos.\n\n3. **Visualización geoespacial en R:** Paquetes como `sf`, `terra` y `tmap` permiten crear mapas estáticos e interactivos a partir de capas vectoriales y ráster, integrando estaciones meteorológicas y rasters de precipitación o temperatura.",
          resources: []
        }
      ],
      quiz: {
        id: "q3",
        title: "Quiz: Visualización con R",
        passingScore: 70,
        questions: [
          {
            question: "¿Qué paquete de R implementa la gramática de gráficos?",
            options: ["ggplot2", "shiny", "dplyr", "readr"],
            correct: 0,
            explanation: "ggplot2 construye gráficos por capas siguiendo la gramática de gráficos de Wilkinson."
          },
          {
            question: "¿Qué función inicia un gráfico en ggplot2?",
            options: ["plot()", "ggplot()", "draw()", "chart()"],
            correct: 1,
            explanation: "ggplot() recibe los datos y la estética base; las capas geométricas se añaden con + geom_*."
          },
          {
            question: "¿Qué geom es adecuado para una serie temporal de precipitación?",
            options: ["geom_line() o geom_col()", "geom_pie()", "geom_text()", "geom_blank()"],
            correct: 0,
            explanation: "Líneas o barras (columnas) son las geometrías más comunes para series temporales."
          },
          {
            question: "¿Qué es R Markdown?",
            options: ["Un editor de texto", "Un formato que combina texto, código R y resultados en un documento reproducible", "Una base de datos", "Un sistema operativo"],
            correct: 1,
            explanation: "R Markdown facilita reportes reproducibles donde el código se ejecuta y sus resultados se incrustan."
          },
          {
            question: "¿A qué formatos puede exportar R Markdown?",
            options: ["Solo PDF", "HTML, PDF, Word y más", "Solo HTML", "Solo Excel"],
            correct: 1,
            explanation: "Con knitr/pandoc, R Markdown produce múltiples formatos a partir del mismo documento."
          },
          {
            question: "¿Qué paquete moderno de R reemplaza a sp para vectores espaciales?",
            options: ["sf", "ggplot2", "dplyr", "lubridate"],
            correct: 0,
            explanation: "sf (simple features) es el estándar moderno para datos espaciales vectoriales en R."
          },
          {
            question: "¿Qué paquete de R maneja datos ráster de forma eficiente y moderna?",
            options: ["terra", "ggplot2", "shiny", "stringr"],
            correct: 0,
            explanation: "terra es el sucesor del paquete raster, optimizado para grandes volúmenes ráster."
          },
          {
            question: "¿Qué paquete crea mapas estáticos e interactivos en R?",
            options: ["tmap", "lubridate", "magrittr", "broom"],
            correct: 0,
            explanation: "tmap genera mapas con sintaxis similar a ggplot2 y soporta modos estático e interactivo."
          },
          {
            question: "¿Qué función de R maneja fechas y horas?",
            options: ["lubridate (paquete)", "ggplot2", "shiny", "tidyr"],
            correct: 0,
            explanation: "lubridate ofrece funciones intuitivas (ymd, dmy, year, month) para manipular fechas."
          },
          {
            question: "¿Qué buena práctica mejora la reproducibilidad de un análisis agroclimático en R?",
            options: ["Usar rutas absolutas y datos no documentados", "Estructurar el proyecto con renv, R Markdown y datos versionados", "No comentar el código", "Borrar los scripts"],
            correct: 1,
            explanation: "renv (gestión de paquetes), R Markdown y control de versiones aseguran que el análisis sea reproducible."
          }
        ]
      }
    }
  ]
};
