const COURSE_DATA = {
  title: "Python + IA en Ciencia de Datos",
  subtitle: "Domina la programación científica de datos potenciada por Inteligencia Artificial",
  hours: 9,
  modules: [
    {
      id: "mod-1",
      title: "Clase 1: Introducción a la Ciencia de Datos con Python e IA",
      description: "Rol del científico de datos, Google Colab, primeros pasos con Python y Pandas apoyados por IA.",
      icon: "🐍",
      lessons: [
        {
          id: "les-1-1",
          title: "Primeros pasos: Colab, Python y Pandas con IA",
          type: "video",
          duration: "60 min",
          videoId: "SuLn8CcSTGc",
          description: "Conoce el rol del científico de datos, Google Colab y la carga de datos con Pandas usando IA como apoyo.",
          reading: "**Conceptos Fundamentales — Clase 1**\n\n1. **Rol real del científico de datos:** Entre el **90% y 95% del tiempo** se invierte en **encontrar, extraer, limpiar y transformar los datos**. Crear el modelo de Machine Learning es solo una pequeña parte del proceso.\n\n2. **La IA como pasante técnico:** El expositor propone ver a la IA (Gemini, ChatGPT, etc.) como **un pasante técnico de muy alto nivel** al que le delegamos la escritura del código, mientras nosotros dirigimos las ideas, la lógica y las decisiones del proyecto.\n\n3. **Por qué Python domina la ciencia de datos:** Su lógica y estructura son muy cercanas al **lenguaje natural (inglés)**, lo que hace que su curva de aprendizaje sea mucho más amigable que la de otros lenguajes.\n\n4. **Google Colab (Collaboratory):** Entorno en la nube de Google que permite ejecutar Python sin instalar programas pesados en la computadora. Trabaja sobre dos tipos principales de celdas:\n   - **Celdas de texto** (para títulos, descripciones y documentación).\n   - **Celdas de código** (para ejecutar Python).\n\n5. **Algoritmo (definición sencilla):** Es el **paso a paso lógico (como una receta de cocina)** para transformar los datos y llegar a la solución de un problema.\n\n6. **Convención de nombrado en Python:** Al nombrar proyectos o variables (por ejemplo `sesion_1`), se recomienda **evitar caracteres especiales, tildes, mayúsculas y espacios** para prevenir errores.\n\n7. **Pandas — librería estrella para datos:** Se importa con `import pandas as pd` y se usa para gestionar y leer datos, incluyendo archivos de Excel. El método **`datos.head()`** muestra por defecto los **primeros cinco registros (filas)** y permite confirmar que la información cargó correctamente.\n\n8. **Mito desmentido:** No es obligatorio ser un experto \"súper duro\" en estadística y matemáticas avanzadas para desarrollar proyectos de ciencia de datos. Con buena lógica, datos y apoyo de IA se pueden construir proyectos sólidos.",
          resources: [
            { title: "Repositorio GitHub — Curso Python + IA en Ciencia de Datos", url: "https://github.com/trabajocientifico/curso-python-ia-ciencia-datos", type: "link" },
            { title: "Presentación de la clase (web)", url: "https://trabajocientifico.github.io/curso-python-ia-ciencia-datos/", type: "link" },
            { title: "Grabación de la Clase 1 (YouTube)", url: "https://www.youtube.com/watch?v=SuLn8CcSTGc", type: "link" }
          ]
        }
      ],
      quiz: {
        id: "q1",
        title: "Quiz Clase 1: Introducción a Python, Colab e IA",
        passingScore: 70,
        questions: [
          {
            question: "Según el expositor, ¿en qué tarea invierte realmente entre el 90% y el 95% de su tiempo un científico de datos?",
            options: [
              "En crear modelos complejos de Machine Learning.",
              "En diseñar interfaces de páginas web.",
              "En encontrar, extraer, limpiar y transformar los datos.",
              "En programar desde cero algoritmos matemáticos."
            ],
            correct: 2,
            explanation: "Entre el 90% y 95% del tiempo se invierte en encontrar, extraer, limpiar y transformar los datos."
          },
          {
            question: "¿Qué analogía utiliza el profesor para describir cómo debemos ver a la Inteligencia Artificial (IA) a la hora de programar?",
            options: [
              "Como el dueño absoluto de nuestras ideas.",
              "Como un buscador de internet tradicional.",
              "Como un reemplazo de los programadores humanos.",
              "Como un pasante técnico de nivel muy alto al que podemos delegarle la escritura del código."
            ],
            correct: 3,
            explanation: "La IA se presenta como un pasante técnico de alto nivel al que le delegamos la escritura del código."
          },
          {
            question: "¿Cuál es una de las razones principales por las que Python domina el campo de la ciencia de datos en la actualidad?",
            options: [
              "Es el único lenguaje de programación que existe.",
              "Su lógica y estructura son muy cercanas al lenguaje natural (inglés), lo que hace que su curva de aprendizaje sea mucho mejor.",
              "Está diseñado exclusivamente para expertos en estadística.",
              "Es el único lenguaje que no permite equivocarse."
            ],
            correct: 1,
            explanation: "Python es cercano al lenguaje natural, lo que facilita su curva de aprendizaje."
          },
          {
            question: "¿Qué entorno en la nube de Google se utiliza en la clase para ejecutar Python sin necesidad de instalar programas pesados en la computadora?",
            options: [
              "Google Docs.",
              "Google Drive Studio.",
              "Google Colab (Collaboratory).",
              "Google Analytics."
            ],
            correct: 2,
            explanation: "Se utiliza Google Colab (Collaboratory) como entorno en la nube."
          },
          {
            question: "En la programación para ciencia de datos, ¿cómo se define de forma sencilla un \"algoritmo\"?",
            options: [
              "Una serie de códigos incomprensibles.",
              "El paso a paso lógico (como una receta de cocina) para transformar los datos y llegar a la solución de un problema.",
              "Una inteligencia artificial generativa.",
              "Una base de datos estructurada."
            ],
            correct: 1,
            explanation: "Un algoritmo es el paso a paso lógico, comparable a una receta de cocina."
          },
          {
            question: "Cuando se trabaja en Google Colab, ¿cuáles son los dos tipos principales de celdas que se utilizan para construir el proyecto?",
            options: [
              "Celdas de imágenes y celdas de audio.",
              "Celdas de texto (para títulos y descripciones) y celdas de código.",
              "Celdas de Excel y celdas de Word.",
              "Celdas ocultas y celdas públicas."
            ],
            correct: 1,
            explanation: "Colab combina celdas de texto y celdas de código."
          },
          {
            question: "¿Qué recomendación práctica da el expositor al momento de nombrar proyectos o variables (como al escribir \"sesion_1\") para evitar errores en Python?",
            options: [
              "Usar siempre mayúsculas al inicio.",
              "Olvidarse de los caracteres especiales, las tildes, las mayúsculas y los espacios.",
              "Poner un espacio entre cada palabra para mayor legibilidad.",
              "Utilizar siempre números romanos."
            ],
            correct: 1,
            explanation: "Se recomienda evitar caracteres especiales, tildes, mayúsculas y espacios en los nombres."
          },
          {
            question: "¿Qué librería de Python se nombra y se importa en la clase (usando import pandas as pd) específicamente para la gestión y lectura de datos, como los archivos de Excel?",
            options: [
              "Streamlit.",
              "Gemini.",
              "Pandas.",
              "GitHub."
            ],
            correct: 2,
            explanation: "Pandas es la librería utilizada para la gestión y lectura de datos."
          },
          {
            question: "Sobre el perfil del científico de datos, ¿qué mito de las redes sociales desmiente el profesor en la clase?",
            options: [
              "Que la ciencia de datos requiere saber usar Excel.",
              "Que es obligatorio ser un experto (\"súper duro\") en estadística y matemáticas avanzadas para desarrollar proyectos de ciencia de datos.",
              "Que la IA ayuda a ahorrar tiempo.",
              "Que las gráficas son importantes para tomar decisiones."
            ],
            correct: 1,
            explanation: "El profesor desmiente el mito de que sea obligatorio ser experto en estadística y matemáticas avanzadas."
          },
          {
            question: "Al cargar una base de datos, ¿para qué sirve ejecutar el método datos.head() en Pandas?",
            options: [
              "Para borrar las primeras celdas vacías del Excel.",
              "Para mostrar por defecto los primeros cinco registros (filas) y confirmar que la información cargó correctamente.",
              "Para calcular el promedio matemático de la base de datos completa.",
              "Para cambiar el color de las celdas de texto."
            ],
            correct: 1,
            explanation: "El método .head() muestra por defecto las primeras cinco filas del DataFrame."
          }
        ]
      }
    },
    {
      id: "mod-2",
      title: "Clase 2: Fundamentos de Programación en Python y pandas para manipulación de datos",
      description: "Fundamentos de Python y manipulación de datos con pandas.",
      icon: "🐼",
      lessons: [
        {
          id: "les-2-1",
          title: "Fundamentos de Python y manipulación de datos con pandas",
          type: "video",
          duration: "60 min",
          videoId: "FGk0K2Ub4Io",
          description: "Fundamentos de programación en Python y uso de pandas para la manipulación de datos.",
          reading: "**Clase 2 — Fundamentos de Programación en Python y pandas para manipulación de datos**\n\nContenido pendiente de publicación.",
          resources: [
            { title: "Repositorio GitHub — Curso Python + IA en Ciencia de Datos", url: "https://github.com/trabajocientifico/curso-python-ia-ciencia-datos", type: "link" },
            { title: "Presentación de la clase (web)", url: "https://trabajocientifico.github.io/curso-python-ia-ciencia-datos/", type: "link" },
            { title: "Grabación de la Clase 2 (YouTube)", url: "https://www.youtube.com/watch?v=FGk0K2Ub4Io", type: "link" }
          ]
        }
      ],
      quiz: {
        id: "q2",
        title: "Quiz Clase 2 (próximamente)",
        passingScore: 70,
        questions: []
      }
    },
    {
      id: "mod-3",
      title: "Clase 3: Publicación de proyectos con Streamlit y GitHub Pages",
      description: "Comparte tu proyecto de ciencia de datos en la web usando Streamlit, GitHub y GitHub Pages.",
      icon: "🚀",
      lessons: [
        {
          id: "les-3-1",
          title: "Despliegue de proyectos con Streamlit y GitHub Pages",
          type: "video",
          duration: "60 min",
          videoId: "GmHd2lRMUzg",
          description: "Aprende a publicar tu proyecto de ciencia de datos en la web usando Streamlit y GitHub Pages.",
          reading: "**Clase 3 — Publicación de proyectos con Streamlit y GitHub Pages**\n\nContenido teórico pendiente de publicación.",
          resources: [
            { title: "Repositorio GitHub — Curso Python + IA en Ciencia de Datos", url: "https://github.com/trabajocientifico/curso-python-ia-ciencia-datos", type: "link" },
            { title: "Presentación de la clase (web)", url: "https://trabajocientifico.github.io/curso-python-ia-ciencia-datos/", type: "link" },
            { title: "Grabación de la Clase 3 (YouTube)", url: "https://www.youtube.com/watch?v=GmHd2lRMUzg", type: "link" }
          ]
        }
      ],
      quiz: {
        id: "q3",
        title: "Quiz Clase 3: Streamlit, GitHub y GitHub Pages",
        passingScore: 70,
        questions: [
          {
            question: "¿Para qué sirve principalmente Streamlit?",
            options: [
              "Para entrenar modelos de Machine Learning desde cero.",
              "Para crear aplicaciones web interactivas de ciencia de datos usando solo Python.",
              "Para editar hojas de cálculo de Excel en la nube.",
              "Para diseñar bases de datos relacionales."
            ],
            correct: 1,
            explanation: "Streamlit permite crear aplicaciones web interactivas para proyectos de ciencia de datos escribiendo solo código Python."
          },
          {
            question: "¿Qué tipo de proyectos se pueden compartir fácilmente con Streamlit?",
            options: [
              "Solamente videojuegos en 3D.",
              "Únicamente sitios estáticos sin interacción.",
              "Dashboards, visualizaciones y aplicaciones de datos interactivas.",
              "Sistemas operativos completos."
            ],
            correct: 2,
            explanation: "Streamlit está pensado para compartir dashboards, visualizaciones y apps de datos interactivas con muy pocas líneas de código."
          },
          {
            question: "¿Qué es GitHub?",
            options: [
              "Un editor de texto offline.",
              "Una plataforma en la nube para alojar, versionar y colaborar en proyectos de código usando Git.",
              "Un lenguaje de programación.",
              "Una red social para compartir fotografías."
            ],
            correct: 1,
            explanation: "GitHub es una plataforma en la nube basada en Git para alojar repositorios, versionar el código y colaborar en proyectos."
          },
          {
            question: "¿Cuál es una ventaja clave de subir tus proyectos a GitHub?",
            options: [
              "Que el código deja de funcionar fuera de tu computador.",
              "Mantener un historial de cambios, respaldo en la nube y poder compartirlo o colaborar con otras personas.",
              "Que los archivos se vuelven privados y nadie más puede verlos nunca.",
              "Que GitHub ejecuta el código por ti automáticamente sin configuración."
            ],
            correct: 1,
            explanation: "GitHub guarda el historial de cambios, respalda el proyecto en la nube y facilita compartirlo y colaborar."
          },
          {
            question: "¿Para qué sirve GitHub Pages?",
            options: [
              "Para ejecutar modelos de Machine Learning en GPU.",
              "Para publicar sitios web estáticos de forma gratuita directamente desde un repositorio de GitHub.",
              "Para enviar correos electrónicos masivos.",
              "Para descargar videos de YouTube."
            ],
            correct: 1,
            explanation: "GitHub Pages permite publicar sitios web estáticos gratis a partir de los archivos de un repositorio de GitHub."
          },
          {
            question: "¿Qué tipo de contenido es ideal para publicar con GitHub Pages?",
            options: [
              "Bases de datos transaccionales con millones de escrituras por segundo.",
              "Páginas web estáticas: documentación, portafolios, presentaciones y landing pages de proyectos.",
              "Aplicaciones de escritorio compiladas en C++.",
              "Servidores backend con lógica compleja en tiempo real."
            ],
            correct: 1,
            explanation: "GitHub Pages está orientado a contenido estático: documentación, portafolios, presentaciones y landings de proyectos."
          },
          {
            question: "Si quieres mostrar una aplicación interactiva de Python (por ejemplo, un dashboard) y un sitio con la documentación o presentación del proyecto, ¿qué combinación tiene más sentido?",
            options: [
              "Solo Excel para todo.",
              "Streamlit para la app interactiva y GitHub Pages para el sitio estático con la documentación o presentación.",
              "GitHub Pages para la app interactiva y Streamlit para el sitio estático.",
              "Ninguno de los dos sirve para compartir proyectos."
            ],
            correct: 1,
            explanation: "Streamlit se encarga de la app interactiva en Python, mientras GitHub Pages publica el sitio estático con documentación o presentación."
          }
        ]
      }
    }
  ]
};
