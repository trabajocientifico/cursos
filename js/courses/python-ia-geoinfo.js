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
          videoId: "W4xLiyNfzgA",
          description: "Carga y visualiza archivos Shapefile y GeoJSON.",
          reading: "**Conceptos Fundamentales**\n\n1. **GeoPandas:** Biblioteca de Python que extiende Pandas para manejar datos geoespaciales. Permite leer, manipular y visualizar archivos Shapefile, GeoJSON y GeoPackage, integrando geometrías (puntos, líneas, polígonos) con tablas de atributos.\n\n2. **Sistema de coordenadas de referencia (CRS):** Marco matemático que define cómo se proyectan las coordenadas geográficas (latitud/longitud) sobre un plano. EPSG:4326 usa coordenadas geográficas (WGS84) y EPSG:3857 es la proyección Mercator usada en mapas web.\n\n3. **Shapefile:** Formato estándar de datos vectoriales desarrollado por ESRI que almacena la geometría y los atributos de entidades geográficas. Se compone de al menos tres archivos (.shp, .shx, .dbf) y es el formato más utilizado en Sistemas de Información Geográfica (SIG).",
          resources: [
            { title: "Código Python", url: "https://github.com/trabajocientifico/curso-bibliometrix-rstudio/blob/main/sesion1.ipynb", type: "link" },
            { title: "Enlace de capas", url: "https://www.dane.gov.co/files/geoportal-provisional/", type: "link" },
            { title: "Capa Shape utilizada", url: "https://drive.google.com/file/d/1MJi3rb03Zni2WttCn_t3R_w5ghdF3W5v/view?usp=sharing", type: "download" },
            { title: "Presentación Sesión 1", url: "presentaciones/python ia geoinformacion/sesion1.html", type: "link" }
          ]
        }
      ],
      quiz: {
        id: "q1",
        title: "Quiz: Datos Espaciales con Python",
        passingScore: 70,
        questions: [
          {
            question: "¿Qué es GeoPandas?",
            options: ["Un sistema operativo para mapas", "Una extensión de Pandas para datos geoespaciales", "Un lenguaje de programación", "Una base de datos geográfica"],
            correct: 1,
            explanation: "GeoPandas extiende Pandas agregando soporte para geometrías espaciales, permitiendo manipular datos geográficos como DataFrames."
          },
          {
            question: "¿Qué archivos mínimos componen un Shapefile?",
            options: [".shp solamente", ".shp, .shx y .dbf", ".shp y .csv", ".geojson y .shp"],
            correct: 1,
            explanation: "Un Shapefile requiere al menos tres archivos: .shp (geometría), .shx (índice espacial) y .dbf (atributos)."
          },
          {
            question: "¿Qué función de GeoPandas se usa para leer un Shapefile?",
            options: ["pd.read_csv()", "gpd.read_file()", "open()", "gpd.load_shape()"],
            correct: 1,
            explanation: "gpd.read_file() es la función principal para cargar archivos Shapefile, GeoJSON y otros formatos vectoriales."
          },
          {
            question: "¿Qué significa EPSG:4326?",
            options: ["Una proyección Mercator", "El sistema de coordenadas geográficas WGS84", "Un formato de archivo", "Un tipo de geometría"],
            correct: 1,
            explanation: "EPSG:4326 corresponde al sistema WGS84 que usa coordenadas de latitud y longitud en grados decimales."
          },
          {
            question: "¿Qué tipo de geometrías pueden representarse en datos vectoriales?",
            options: ["Solo puntos", "Solo polígonos", "Puntos, líneas y polígonos", "Solo píxeles"],
            correct: 2,
            explanation: "Los datos vectoriales representan entidades geográficas como puntos (ciudades), líneas (ríos, carreteras) y polígonos (municipios, departamentos)."
          },
          {
            question: "¿Qué método de GeoPandas permite visualizar rápidamente un mapa?",
            options: [".describe()", ".plot()", ".print()", ".show_map()"],
            correct: 1,
            explanation: "El método .plot() genera una visualización rápida del GeoDataFrame usando Matplotlib como backend."
          },
          {
            question: "¿Qué es un GeoDataFrame?",
            options: ["Una imagen satelital", "Un DataFrame de Pandas con una columna de geometría", "Un archivo de texto", "Una base de datos SQL"],
            correct: 1,
            explanation: "Un GeoDataFrame es un DataFrame que incluye una columna 'geometry' con las formas espaciales de cada registro."
          },
          {
            question: "¿Para qué sirve reproyectar un CRS con .to_crs()?",
            options: ["Para cambiar el color del mapa", "Para transformar las coordenadas a otro sistema de referencia", "Para eliminar geometrías", "Para agregar nuevas columnas"],
            correct: 1,
            explanation: "Reproyectar con .to_crs() transforma las coordenadas de un sistema a otro, necesario cuando se combinan capas con diferentes CRS."
          },
          {
            question: "¿Qué diferencia hay entre datos vectoriales y datos ráster?",
            options: ["No hay diferencia", "Vectoriales usan geometrías (puntos, líneas, polígonos); ráster usan píxeles/celdas", "Vectoriales son 3D y ráster son 2D", "Vectoriales son más pesados siempre"],
            correct: 1,
            explanation: "Los datos vectoriales representan entidades con geometrías discretas, mientras los ráster dividen el espacio en una grilla regular de píxeles con valores."
          },
          {
            question: "¿Qué institución colombiana provee capas geográficas oficiales como las del DANE?",
            options: ["NASA", "DANE e IGAC", "Google Maps", "OpenStreetMap"],
            correct: 1,
            explanation: "El DANE (datos estadísticos) y el IGAC (Instituto Geográfico Agustín Codazzi) son las fuentes oficiales de cartografía en Colombia."
          }
        ]
      }
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
          reading: "**Conceptos Fundamentales**\n\n1. **Clasificación supervisada:** Técnica de Machine Learning donde se entrena un modelo con muestras etiquetadas (clases conocidas como agua, vegetación, suelo urbano) para que clasifique automáticamente el resto de píxeles de una imagen satelital según patrones espectrales aprendidos.\n\n2. **Geoprocesamiento con Python:** Conjunto de operaciones espaciales automatizadas (buffer, intersección, unión, dissolve, clip) que se ejecutan programáticamente sobre capas geográficas, permitiendo análisis reproducibles y escalables a grandes volúmenes de datos.\n\n3. **Análisis espacial con IA:** Aplicación de algoritmos de inteligencia artificial (Random Forest, SVM, redes neuronales) sobre datos georreferenciados para detectar patrones, predecir fenómenos y automatizar tareas como la detección de cambios en cobertura del suelo.",
          resources: []
        }
      ],
      quiz: {
        id: "q2",
        title: "Quiz: IA y Geoprocesamiento",
        passingScore: 70,
        questions: [
          {
            question: "¿Qué es la clasificación supervisada en el contexto geoespacial?",
            options: ["Ordenar archivos en carpetas", "Entrenar un modelo con muestras etiquetadas para clasificar píxeles", "Supervisar manualmente cada píxel", "Descargar imágenes satelitales"],
            correct: 1,
            explanation: "La clasificación supervisada usa datos de entrenamiento etiquetados para que el modelo aprenda a clasificar automáticamente el resto de la imagen."
          },
          {
            question: "¿Qué algoritmo de Machine Learning es comúnmente usado para clasificación de cobertura vegetal?",
            options: ["Regresión lineal simple", "Random Forest", "K-means únicamente", "Análisis de texto"],
            correct: 1,
            explanation: "Random Forest es uno de los algoritmos más usados en clasificación de cobertura por su robustez y capacidad de manejar múltiples variables espectrales."
          },
          {
            question: "¿Qué es un buffer en geoprocesamiento?",
            options: ["Una zona de memoria temporal", "Un área de influencia alrededor de una geometría a una distancia dada", "Un tipo de archivo", "Un filtro de imagen"],
            correct: 1,
            explanation: "Un buffer genera un polígono que representa el área dentro de una distancia específica alrededor de un punto, línea o polígono."
          },
          {
            question: "¿Qué operación espacial combina dos capas manteniendo solo el área donde se superponen?",
            options: ["Union", "Intersección (intersection)", "Buffer", "Dissolve"],
            correct: 1,
            explanation: "La intersección devuelve únicamente las geometrías y atributos del área donde ambas capas se solapan."
          },
          {
            question: "¿Qué biblioteca de Python se usa para trabajar con datos ráster?",
            options: ["GeoPandas", "Rasterio", "Matplotlib", "NumPy únicamente"],
            correct: 1,
            explanation: "Rasterio es la biblioteca principal en Python para leer, escribir y manipular datos ráster como imágenes satelitales."
          },
          {
            question: "¿Qué son las bandas espectrales en una imagen satelital?",
            options: ["Los bordes de la imagen", "Capas que capturan la reflectancia en diferentes longitudes de onda", "Los colores RGB solamente", "Las coordenadas del satélite"],
            correct: 1,
            explanation: "Las bandas espectrales capturan energía en diferentes rangos del espectro electromagnético (visible, infrarrojo, etc.), cada una revelando información distinta."
          },
          {
            question: "¿Qué hace la operación dissolve en GeoPandas?",
            options: ["Elimina todos los datos", "Fusiona geometrías que comparten un atributo común", "Divide polígonos en partes", "Cambia el sistema de coordenadas"],
            correct: 1,
            explanation: "Dissolve agrupa y fusiona geometrías basándose en un campo compartido, por ejemplo unir municipios para formar departamentos."
          },
          {
            question: "¿Qué ventaja ofrece automatizar geoprocesamiento con Python frente a hacerlo manualmente en un SIG?",
            options: ["Los resultados son menos precisos", "Reproducibilidad, escalabilidad y automatización de flujos repetitivos", "Solo funciona con datos pequeños", "No tiene ninguna ventaja"],
            correct: 1,
            explanation: "Python permite crear scripts reproducibles que procesan grandes volúmenes de datos, se pueden reutilizar y documentar."
          },
          {
            question: "¿Qué es un índice de vegetación (NDVI)?",
            options: ["Una lista de plantas", "Una ratio entre bandas infrarroja y roja que mide la salud vegetal", "Un tipo de archivo GIS", "Una coordenada geográfica"],
            correct: 1,
            explanation: "El NDVI (Normalized Difference Vegetation Index) usa la reflectancia infrarroja y roja para cuantificar la densidad y salud de la vegetación."
          },
          {
            question: "¿Qué es la matriz de confusión en clasificación geoespacial?",
            options: ["Una tabla de coordenadas", "Una tabla que compara las clases predichas vs las reales para evaluar precisión", "Un tipo de proyección", "Un error del sistema"],
            correct: 1,
            explanation: "La matriz de confusión muestra aciertos y errores del modelo por cada clase, permitiendo calcular precisión, recall y exactitud global."
          }
        ]
      }
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
          reading: "**Conceptos Fundamentales**\n\n1. **Folium:** Biblioteca de Python que genera mapas web interactivos basados en Leaflet.js. Permite crear mapas con marcadores, capas temáticas (coropletas), popups informativos y controles de zoom, exportables como archivos HTML independientes.\n\n2. **Mapa coroplético (Choropleth):** Tipo de mapa temático donde las áreas geográficas se colorean en proporción a un valor estadístico (población, ingreso, temperatura). Es la técnica más utilizada para representar datos cuantitativos sobre divisiones administrativas.\n\n3. **Tiles (capas base):** Imágenes de fondo que proporcionan el contexto geográfico del mapa (calles, satélite, terreno). Folium permite usar proveedores como OpenStreetMap, CartoDB y Stamen, cada uno con estilos visuales diferentes.",
          resources: []
        }
      ],
      quiz: {
        id: "q3",
        title: "Quiz: Mapas Interactivos",
        passingScore: 70,
        questions: [
          {
            question: "¿Qué es Folium en Python?",
            options: ["Un paquete de estadística", "Una biblioteca para crear mapas web interactivos basados en Leaflet.js", "Un editor de imágenes", "Un framework de backend"],
            correct: 1,
            explanation: "Folium genera mapas interactivos en HTML usando Leaflet.js como motor de renderizado en el navegador."
          },
          {
            question: "¿Qué es un mapa coroplético?",
            options: ["Un mapa con puntos de calor", "Un mapa donde las áreas se colorean según un valor estadístico", "Un mapa topográfico", "Un mapa de rutas"],
            correct: 1,
            explanation: "Los mapas coropléticos usan colores graduados para representar valores cuantitativos sobre áreas geográficas definidas."
          },
          {
            question: "¿Cómo se crea un mapa base en Folium?",
            options: ["folium.plot()", "folium.Map(location=[lat, lon])", "folium.create()", "folium.show()"],
            correct: 1,
            explanation: "folium.Map() crea un mapa centrado en las coordenadas especificadas con location=[latitud, longitud]."
          },
          {
            question: "¿Qué son los tiles en un mapa web?",
            options: ["Los datos del usuario", "Las imágenes de fondo que dan contexto geográfico (calles, satélite, etc.)", "Los marcadores", "Las coordenadas"],
            correct: 1,
            explanation: "Los tiles son mosaicos de imágenes que forman el fondo del mapa, proporcionados por servicios como OpenStreetMap o CartoDB."
          },
          {
            question: "¿Cómo se agrega un marcador en Folium?",
            options: ["folium.Point()", "folium.Marker([lat, lon]).add_to(mapa)", "folium.add_pin()", "mapa.marker()"],
            correct: 1,
            explanation: "folium.Marker() crea un marcador en las coordenadas indicadas y .add_to() lo vincula al objeto mapa."
          },
          {
            question: "¿Qué formato usa Folium para generar mapas coropléticos?",
            options: ["CSV solamente", "GeoJSON combinado con datos tabulares", "Shapefile directamente", "Imágenes PNG"],
            correct: 1,
            explanation: "Folium usa archivos GeoJSON para las geometrías y los combina con DataFrames de Pandas para los valores a representar."
          },
          {
            question: "¿Cómo se guarda un mapa de Folium como archivo?",
            options: ["mapa.save('mapa.html')", "mapa.export('mapa.png')", "mapa.write('mapa.pdf')", "mapa.download()"],
            correct: 0,
            explanation: "El método .save() exporta el mapa como un archivo HTML independiente que se puede abrir en cualquier navegador."
          },
          {
            question: "¿Qué es un popup en Folium?",
            options: ["Una ventana de error", "Una ventana informativa que aparece al hacer clic en un elemento del mapa", "Un tipo de tile", "Una capa de calor"],
            correct: 1,
            explanation: "Los popups son ventanas emergentes vinculadas a marcadores o áreas que muestran información detallada al interactuar."
          },
          {
            question: "¿Qué ventaja tienen los mapas interactivos sobre los mapas estáticos?",
            options: ["Son más pequeños en tamaño", "Permiten zoom, paneo, popups y exploración dinámica de los datos", "Son más rápidos de crear", "No necesitan datos geográficos"],
            correct: 1,
            explanation: "Los mapas interactivos permiten al usuario explorar datos a diferentes escalas y obtener información específica al interactuar con los elementos."
          },
          {
            question: "¿Qué biblioteca de JavaScript utiliza Folium internamente para renderizar los mapas?",
            options: ["D3.js", "Leaflet.js", "Google Maps API", "Mapbox GL"],
            correct: 1,
            explanation: "Folium es un wrapper de Python sobre Leaflet.js, la biblioteca de JavaScript más popular para mapas web interactivos de código abierto."
          }
        ]
      }
    }
  ]
};
