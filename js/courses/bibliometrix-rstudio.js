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
          videoId: "1npDXc_JPz8",
          description: "Instala los paquetes necesarios para tu investigación.",
          reading: "**Conceptos Fundamentales**\n\n1. **Bibliometría:** Disciplina que aplica métodos matemáticos y estadísticos para analizar la producción científica (artículos, libros, revistas) y medir su impacto en la comunidad académica.\n\n2. **Bibliometrix (paquete R):** Herramienta de código abierto en R diseñada para el análisis bibliométrico cuantitativo. Permite importar datos desde Scopus, Web of Science y otras bases, y generar indicadores de producción científica.\n\n3. **Bases de datos científicas (Scopus y Web of Science):** Repositorios indexados que almacenan metadatos de publicaciones académicas. Scopus cubre más de 27,000 revistas y WoS es referencia para indicadores de impacto como el Journal Citation Reports (JCR).",
          resources: [
            { title: "Código concatenar WOS - Scopus", url: "https://drive.google.com/file/d/1lxFYyBYlbV3SRtSEEOczaezN-SDqMkm5/view?usp=sharing", type: "download" },
            { title: "Código Bibliometrix", url: "https://drive.google.com/file/d/1ivw_RninVqMrQgOxxgnu4OwxnOn9SkMA/view?usp=sharing", type: "download" },
            { title: "Resultados", url: "https://drive.google.com/drive/folders/1legwDNJdAUG96HNBdluWaSJPBWirojuA?usp=sharing", type: "download" },
            { title: "Presentación Sesión 1", url: "https://drive.google.com/file/d/1M6fgceKOsWpEQzUQVka-f7zZdDoawVJY/view?usp=sharing", type: "download" }
          ]
        }
      ],
      quiz: {
        id: "q1",
        title: "Quiz: Bases de Datos y Configuración",
        passingScore: 70,
        questions: [
          {
            question: "¿Qué es Bibliometrix?",
            options: ["Un lenguaje de programación", "Un paquete de R para análisis bibliométrico", "Una base de datos científica", "Un sistema operativo"],
            correct: 1,
            explanation: "Bibliometrix es un paquete de R diseñado específicamente para realizar análisis bibliométricos cuantitativos a partir de datos de bases científicas."
          },
          {
            question: "¿Cuáles son las dos principales bases de datos científicas que Bibliometrix puede importar?",
            options: ["PubMed y Google Scholar", "Scopus y Web of Science", "IEEE y SpringerLink", "JSTOR y ScienceDirect"],
            correct: 1,
            explanation: "Bibliometrix trabaja principalmente con datos exportados de Scopus y Web of Science, las dos bases más utilizadas en cienciometría."
          },
          {
            question: "¿Qué función se utiliza para instalar Bibliometrix en R?",
            options: ["library(bibliometrix)", "download.bibliometrix()", "install.packages('bibliometrix')", "import bibliometrix"],
            correct: 2,
            explanation: "Como cualquier paquete de R, se instala con install.packages('bibliometrix') desde CRAN."
          },
          {
            question: "¿Qué formato de archivo exporta Scopus para usar en Bibliometrix?",
            options: [".docx", ".csv o .bib", ".pptx", ".jpg"],
            correct: 1,
            explanation: "Scopus permite exportar registros en formato CSV y BibTeX (.bib), ambos compatibles con Bibliometrix."
          },
          {
            question: "¿Qué función de Bibliometrix convierte los datos crudos en un dataframe estructurado?",
            options: ["read.csv()", "convert2df()", "data.frame()", "merge()"],
            correct: 1,
            explanation: "La función convert2df() transforma los archivos exportados de las bases de datos en un dataframe listo para análisis."
          },
          {
            question: "¿Para qué sirve concatenar bases de datos de WoS y Scopus?",
            options: ["Para reducir el tamaño del archivo", "Para ampliar la cobertura de publicaciones y evitar duplicados", "Para cambiar el idioma de los artículos", "Para eliminar autores repetidos"],
            correct: 1,
            explanation: "Concatenar ambas bases amplía la cobertura del análisis al combinar registros únicos de cada fuente, eliminando duplicados."
          },
          {
            question: "¿Qué es RStudio?",
            options: ["Una base de datos", "Un entorno de desarrollo integrado (IDE) para R", "Un paquete de análisis estadístico", "Un navegador web"],
            correct: 1,
            explanation: "RStudio es el IDE más popular para trabajar con R, proporcionando consola, editor de scripts, visualización y gestión de paquetes."
          },
          {
            question: "¿Qué comando carga un paquete ya instalado en R?",
            options: ["install.packages()", "library()", "require.package()", "load()"],
            correct: 1,
            explanation: "La función library() carga un paquete previamente instalado para poder usar sus funciones en la sesión actual."
          },
          {
            question: "¿Qué campo identifica de manera única a cada artículo en las bases de datos científicas?",
            options: ["El título del artículo", "El DOI (Digital Object Identifier)", "El nombre del autor", "El año de publicación"],
            correct: 1,
            explanation: "El DOI es un identificador único y permanente asignado a cada publicación, esencial para evitar duplicados al concatenar bases."
          },
          {
            question: "¿Qué indica el índice h de un autor?",
            options: ["El número total de artículos publicados", "Que tiene h artículos citados al menos h veces", "La cantidad de coautores", "El número de revistas donde ha publicado"],
            correct: 1,
            explanation: "El índice h combina productividad e impacto: un autor con índice h=10 tiene al menos 10 artículos citados 10 o más veces."
          }
        ]
      }
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
          videoId: "GAVM1ytltYs",
          description: "Análisis de autores, revistas y países.",
          reading: "**Conceptos Fundamentales**\n\n1. **Ley de Lotka:** Principio que establece que un pequeño número de autores produce la mayor parte de la literatura científica en un campo. Aproximadamente el 60% de los autores publica un solo artículo, mientras que pocos autores son altamente productivos.\n\n2. **Ley de Bradford:** Describe cómo las publicaciones científicas se distribuyen entre revistas: un núcleo pequeño de revistas concentra la mayoría de artículos relevantes de un tema, mientras que el resto se dispersa en muchas revistas periféricas.\n\n3. **Indicadores bibliométricos:** Métricas cuantitativas como el número de publicaciones, citas totales, índice h, factor de impacto y colaboración internacional que permiten evaluar la producción y el impacto de autores, instituciones y países.",
          resources: []
        }
      ],
      quiz: {
        id: "q2",
        title: "Quiz: Análisis Descriptivo",
        passingScore: 70,
        questions: [
          {
            question: "¿Qué establece la Ley de Lotka?",
            options: ["Que todos los autores publican por igual", "Que pocos autores producen la mayoría de publicaciones", "Que las revistas tienen el mismo impacto", "Que las citas se distribuyen uniformemente"],
            correct: 1,
            explanation: "La Ley de Lotka indica que una minoría de autores es responsable de la mayor parte de la producción científica en un campo."
          },
          {
            question: "¿Qué describe la Ley de Bradford?",
            options: ["La distribución de autores por país", "La dispersión de artículos en revistas científicas", "El crecimiento exponencial de la ciencia", "La relación entre citas y descargas"],
            correct: 1,
            explanation: "Bradford describe cómo un núcleo pequeño de revistas concentra la mayoría de artículos sobre un tema específico."
          },
          {
            question: "¿Qué función de Bibliometrix genera un resumen estadístico completo?",
            options: ["summary()", "biblioAnalysis()", "plot()", "describe()"],
            correct: 1,
            explanation: "biblioAnalysis() genera un análisis descriptivo completo incluyendo autores más productivos, revistas principales y países."
          },
          {
            question: "¿Qué mide el factor de impacto de una revista?",
            options: ["El número de páginas por artículo", "El promedio de citas recibidas por artículos en un período", "La cantidad de autores por artículo", "El costo de suscripción"],
            correct: 1,
            explanation: "El factor de impacto mide el promedio de citas que reciben los artículos publicados en una revista durante un período determinado."
          },
          {
            question: "¿Qué tipo de gráfico es más adecuado para mostrar la producción científica por año?",
            options: ["Gráfico de pastel", "Gráfico de líneas o barras temporal", "Diagrama de Venn", "Histograma de frecuencias"],
            correct: 1,
            explanation: "Un gráfico de líneas o barras temporal permite visualizar la evolución y tendencia de la producción científica a lo largo de los años."
          },
          {
            question: "¿Qué representa el MCP (Multiple Countries Publications) en Bibliometrix?",
            options: ["El número de citas múltiples", "Publicaciones con colaboración internacional", "El conteo de páginas múltiples", "Las publicaciones en múltiples idiomas"],
            correct: 1,
            explanation: "MCP indica publicaciones con autores de diferentes países, midiendo el nivel de colaboración internacional."
          },
          {
            question: "¿Cuál es la diferencia entre SCP y MCP?",
            options: ["SCP son artículos largos y MCP son cortos", "SCP es colaboración nacional y MCP es colaboración internacional", "SCP son citas y MCP son referencias", "No hay diferencia"],
            correct: 1,
            explanation: "SCP (Single Country Publications) son artículos con autores del mismo país, mientras que MCP involucra autores de múltiples países."
          },
          {
            question: "¿Qué información se obtiene del análisis de fuentes (sources) en Bibliometrix?",
            options: ["Los idiomas de publicación", "Las revistas más productivas y con mayor impacto", "Los precios de las revistas", "Las fechas de fundación de las revistas"],
            correct: 1,
            explanation: "El análisis de fuentes identifica las revistas que más publican sobre el tema y las que tienen mayor impacto por citas."
          },
          {
            question: "¿Qué es la Ley de Zipf en el contexto bibliométrico?",
            options: ["La distribución de autores", "La frecuencia de palabras en textos científicos", "El crecimiento de bases de datos", "La obsolescencia de artículos"],
            correct: 1,
            explanation: "La Ley de Zipf describe que pocas palabras se usan con mucha frecuencia y muchas palabras se usan raramente en los textos científicos."
          },
          {
            question: "¿Para qué sirve el análisis de palabras clave (Keywords Plus y Author Keywords)?",
            options: ["Para traducir artículos", "Para identificar los temas principales y tendencias de investigación", "Para contar el número de páginas", "Para clasificar por idioma"],
            correct: 1,
            explanation: "El análisis de palabras clave revela los temas dominantes, emergentes y en declive dentro de un campo de investigación."
          }
        ]
      }
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
          reading: "**Conceptos Fundamentales**\n\n1. **Red de co-citación:** Mapa que conecta dos documentos cuando son citados juntos por un tercer artículo. Cuanto más frecuentemente se co-citan, más fuerte es su vínculo temático, revelando la estructura intelectual de un campo de investigación.\n\n2. **Mapa temático (Thematic Map):** Visualización de dos dimensiones que clasifica los temas de investigación en cuatro cuadrantes según su densidad (desarrollo interno del tema) y centralidad (importancia del tema en el campo), identificando temas motores, básicos, emergentes y en declive.\n\n3. **Acoplamiento bibliográfico (Bibliographic Coupling):** Método que conecta dos artículos cuando comparten referencias en sus bibliografías. A diferencia de la co-citación, mide similitud entre documentos que citan las mismas fuentes, útil para detectar frentes de investigación actuales.",
          resources: []
        }
      ],
      quiz: {
        id: "q3",
        title: "Quiz: Redes y Mapeo Científico",
        passingScore: 70,
        questions: [
          {
            question: "¿Qué es una red de co-citación?",
            options: ["Una red social de autores", "Un mapa que conecta documentos citados juntos por un tercer artículo", "Una lista de referencias bibliográficas", "Un índice de revistas"],
            correct: 1,
            explanation: "La co-citación conecta dos documentos cuando aparecen citados juntos en la bibliografía de un tercer trabajo."
          },
          {
            question: "¿Qué función de Bibliometrix genera redes de colaboración?",
            options: ["biblioNetwork()", "plot()", "summary()", "read.csv()"],
            correct: 0,
            explanation: "biblioNetwork() construye matrices de redes como co-citación, colaboración entre autores y acoplamiento bibliográfico."
          },
          {
            question: "¿Qué representa la centralidad en un mapa temático?",
            options: ["El número de autores", "La importancia del tema dentro del campo de investigación", "El año de publicación", "El número de páginas"],
            correct: 1,
            explanation: "La centralidad mide qué tan conectado e importante es un tema respecto al resto del campo de investigación."
          },
          {
            question: "¿Qué representa la densidad en un mapa temático?",
            options: ["El peso del documento", "El grado de desarrollo interno de un tema", "La cantidad de citas", "El número de revistas"],
            correct: 1,
            explanation: "La densidad indica qué tan desarrollado y cohesionado está un tema internamente, midiendo la fuerza de sus conexiones internas."
          },
          {
            question: "¿Cuáles son los cuatro cuadrantes del mapa temático?",
            options: ["Norte, Sur, Este, Oeste", "Temas motores, básicos, emergentes y en declive", "Alto, medio, bajo y nulo", "Primario, secundario, terciario y cuaternario"],
            correct: 1,
            explanation: "Los cuadrantes clasifican temas según centralidad y densidad: motores (alta-alta), básicos (alta-baja), nicho (baja-alta) y emergentes/declive (baja-baja)."
          },
          {
            question: "¿Qué es el acoplamiento bibliográfico?",
            options: ["Cuando dos autores trabajan juntos", "Cuando dos artículos comparten referencias en común", "Cuando una revista publica dos artículos iguales", "Cuando se fusionan dos bases de datos"],
            correct: 1,
            explanation: "El acoplamiento bibliográfico conecta artículos que citan las mismas fuentes, indicando que trabajan sobre temas similares."
          },
          {
            question: "¿Qué diferencia hay entre co-citación y acoplamiento bibliográfico?",
            options: ["Son lo mismo", "Co-citación mira quién los cita juntos; acoplamiento mira a quién citan en común", "Co-citación es para libros y acoplamiento para artículos", "No existe el acoplamiento bibliográfico"],
            correct: 1,
            explanation: "La co-citación analiza documentos citados juntos por otros, mientras el acoplamiento analiza documentos que comparten referencias citadas."
          },
          {
            question: "¿Qué herramienta visual de Bibliometrix permite explorar redes interactivamente?",
            options: ["Microsoft Excel", "Biblioshiny", "Google Sheets", "PowerPoint"],
            correct: 1,
            explanation: "Biblioshiny es la interfaz web interactiva de Bibliometrix que permite generar y explorar redes, mapas temáticos y visualizaciones sin código."
          },
          {
            question: "¿Qué indica un clúster en una red de co-autoría?",
            options: ["Un error en los datos", "Un grupo de autores que colaboran frecuentemente entre sí", "Una revista específica", "Un año de publicación"],
            correct: 1,
            explanation: "Los clústeres en redes de co-autoría representan grupos de investigadores que colaboran de forma recurrente, formando comunidades científicas."
          },
          {
            question: "¿Para qué sirve el análisis de evolución temática (Thematic Evolution)?",
            options: ["Para predecir el clima", "Para visualizar cómo cambian los temas de investigación a lo largo del tiempo", "Para contar artículos", "Para ordenar autores alfabéticamente"],
            correct: 1,
            explanation: "El análisis de evolución temática muestra cómo los temas de investigación nacen, crecen, se transforman o desaparecen a lo largo de diferentes períodos."
          }
        ]
      }
    }
  ]
};
