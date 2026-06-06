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
            question: "Según se explica en el video, ¿qué es GitHub en esencia?",
            options: [
              "Una librería de Python para crear interfaces gráficas.",
              "Una red social pensada para programadores o desarrolladores donde se establecen repositorios.",
              "Un entorno de desarrollo local exclusivo para HTML y CSS.",
              "Un modelo de inteligencia artificial de Google."
            ],
            correct: 1,
            explanation: "El instructor define a GitHub como una red social pensada para programadores o desarrolladores en la que se establecen repositorios."
          },
          {
            question: "¿Cómo se describe la herramienta Streamlit en la clase?",
            options: [
              "Como un gestor de versiones de código local.",
              "Como un entorno para escribir y ejecutar código HTML.",
              "Como una librería de Python pensada para construir herramientas interactivas con una interfaz gráfica.",
              "Como un modelo de inteligencia artificial que compite con ChatGPT."
            ],
            correct: 2,
            explanation: "Streamlit se describe como una librería o framework de Python adaptado para construir aplicaciones o herramientas de datos con una interfaz gráfica interactiva, sin que el usuario final necesite tener conocimientos de código."
          },
          {
            question: "Para que el repositorio público de GitHub muestre correctamente el aplicativo web creado con HTML, ¿qué nombre específico se le debe dar al código fuente antes de cargarlo?",
            options: [
              "app.py",
              "main.html",
              "index",
              "readme.md"
            ],
            correct: 2,
            explanation: "El instructor recalca que al archivo se le debe cambiar el nombre y llamarlo obligatoriamente \"index\" antes de arrastrarlo y cargarlo al repositorio."
          },
          {
            question: "¿Cuál es el paso necesario en la configuración (Settings) de GitHub para visualizar el aplicativo web generado a través de la función \"Pages\"?",
            options: [
              "Cambiar la opción de la rama (branch) de \"None\" a \"main\" y guardar.",
              "Crear un archivo llamado requirements.txt.",
              "Configurar una base de datos relacional en la pestaña de seguridad.",
              "Activar un entorno virtual de Google Cloud."
            ],
            correct: 0,
            explanation: "Se debe ir a la opción \"Settings\", luego buscar \"Pages\", y cambiar la rama (branch) de \"None\" a \"main\", para posteriormente guardar los cambios (save)."
          },
          {
            question: "Al cargar un código de Python para desplegar un aplicativo de Streamlit desde GitHub, además del script de código principal (app.py), ¿qué otro archivo es indispensable subir al repositorio?",
            options: [
              "Un archivo index.html.",
              "Un archivo de texto llamado requeriments (requirements) con el nombre de las librerías necesarias.",
              "Un archivo CSV con la base de datos a procesar.",
              "Un archivo de estilos CSS."
            ],
            correct: 1,
            explanation: "Se requiere un archivo de texto (que el instructor llama \"requeriments\") el cual contiene el nombre de las librerías que se necesitan para poder correr el aplicativo."
          },
          {
            question: "Según la analogía usada por el instructor sobre el desarrollo web, ¿cómo se relacionan HTML y JavaScript en la creación de un aplicativo?",
            options: [
              "HTML es el \"cerebro\" y JavaScript es el \"cascarón de por fuera\".",
              "HTML y JavaScript funcionan como bases de datos independientes.",
              "HTML sirve como el \"cascarón de por fuera\" para mostrar información, y JavaScript funciona como el \"cerebro\" que otorga funcionalidad.",
              "Ambos lenguajes se utilizan exclusivamente para configurar el servidor (backend)."
            ],
            correct: 2,
            explanation: "El instructor menciona que HTML sirve para mostrar el \"cascarón de por fuera\" de la aplicación, mientras que JavaScript es el \"cerebro\" que le da la funcionalidad para solucionar temas complejos."
          },
          {
            question: "¿Qué práctica menciona el instructor como \"lo correcto\" al utilizar inteligencia artificial en el desarrollo de herramientas o artículos científicos?",
            options: [
              "Ocultar el uso de IA para evitar penalizaciones de derechos de autor.",
              "Declarar siempre el uso de la inteligencia artificial, indicando que se usó como asistencia para traducir, redactar o generar ideas.",
              "Modificar el código generado para que no parezca hecho por una máquina.",
              "Utilizar exclusivamente modelos de IA de pago y no gratuitos."
            ],
            correct: 1,
            explanation: "Se enfatiza que lo ético y correcto es siempre declarar el uso de la inteligencia artificial e indicar explícitamente en qué tareas asistió el modelo."
          },
          {
            question: "Según la explicación del video, ¿qué es Git y cómo se relaciona con GitHub?",
            options: [
              "Git es una extensión de navegador exclusiva para interactuar con GitHub.",
              "Git es un software o gestor de control de versiones que trabaja perfectamente integrado con GitHub.",
              "Git es el lenguaje de programación en el que está escrito GitHub.",
              "Git es una herramienta de inteligencia artificial para corregir errores de sintaxis."
            ],
            correct: 1,
            explanation: "Git se describe como un software gestor de control de versiones que permite trabajar de manera local en el computador y escalar los cambios para que se actualicen automáticamente gracias a su integración con GitHub."
          },
          {
            question: "Al pedirle a la inteligencia artificial Gemini que genere el código inicial del aplicativo conversor de temperaturas, ¿qué herramienta y modelo específico recomienda configurar el instructor?",
            options: [
              "La herramienta Canvas (o lienzo) y el modelo 3.1 Pro.",
              "El modo de desarrollador avanzado y el modelo 4.8.",
              "La integración nativa con Streamlit y el modelo 4.0.",
              "La búsqueda web en tiempo real con el modelo GPT."
            ],
            correct: 0,
            explanation: "Se aconseja seleccionar la herramienta \"Canvas\" (o lienzo en español) y trabajar con el modelo 3.1 Pro, ya que está mejor pensado para solucionar problemáticas de programación o matemáticas."
          },
          {
            question: "¿Cuáles son los requisitos principales que menciona el instructor para obtener el certificado gratuito del curso de Trabajo Científico?",
            options: [
              "Pagar una tarifa de emisión en la plataforma y subir un repositorio final.",
              "Asistir obligatoriamente en vivo a todas las clases sin falta alguna.",
              "Ingresar nombre y correo, marcar los videos de las tres clases como vistos y aprobar los pequeños \"quiz\" de 10 preguntas por clase.",
              "Descargar la aplicación Streamlit en el entorno local y crear un dashboard validado por un docente."
            ],
            correct: 2,
            explanation: "Para que se genere automáticamente el certificado, el estudiante debe acceder a la plataforma con su nombre y correo, confirmar que vio las clases correspondientes y desarrollar un quiz de 10 preguntas que está anclado a cada sesión."
          }
        ]
      }
    }
  ]
};
