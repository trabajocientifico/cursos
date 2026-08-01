const COURSE_DATA = {
  title: "Ciencia de Datos Profesional con Python + IA",
  subtitle: "20 horas certificadas — formación en vivo con grabaciones disponibles en la plataforma",
  hours: 20,
  isLive: true,
  hidePromo: true,
  startDate: "2026-08-07",
  startLabel: "Inicia el viernes 7 de agosto de 2026",
  sessionsInfo: "7 sesiones en vivo: 6 de 3 horas y 1 de 2 horas",
  modules: [
    {
      id: "mod-1",
      title: "Módulo 1",
      description: "Dos sesiones en vivo: una de 2 horas y una de 3 horas.",
      icon: "1️⃣",
      lessons: [
        {
          id: "les-1-1",
          title: "Clase 1 — Sesión en vivo (2 horas)",
          type: "video",
          duration: "2 horas",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Primera sesión en vivo del curso. La grabación queda disponible en esta misma clase.",
          reading: "**Clase 1 — Sesión en vivo (2 horas)**\n\nEsta es la sesión de apertura del curso. El curso inicia el **viernes 7 de agosto de 2026**.\n\n**Cómo funciona esta clase:**\n- La sesión se dicta en vivo en el horario acordado con el grupo\n- La grabación se carga en este mismo espacio al finalizar la sesión\n- Puedes volver a verla las veces que necesites\n- Los materiales y recursos de la sesión se publican en la pestaña Recursos\n\n**Antes de la sesión:**\n- Ten instalado Python y un entorno de trabajo (Anaconda, VS Code o Google Colab)\n- Verifica tu conexión y el audio de tu equipo\n- Ten a la mano el enlace de acceso a la sesión en vivo\n\n**Al terminar:**\n- Marca la clase como completada para registrar tu avance\n- Tu progreso queda guardado y cuenta para habilitar la evaluación final",
          resources: [
            { title: "Enlace a la sesión en vivo", url: "#", type: "link" },
            { title: "Material de la sesión", url: "#", type: "download" }
          ]
        },
        {
          id: "les-1-2",
          title: "Clase 2 — Sesión en vivo (3 horas)",
          type: "video",
          duration: "3 horas",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Segunda sesión en vivo del Módulo 1. La grabación queda disponible en esta misma clase.",
          reading: "**Clase 2 — Sesión en vivo (3 horas)**\n\nSegunda sesión del Módulo 1.\n\n**Cómo funciona esta clase:**\n- Sesión en vivo de 3 horas con trabajo práctico guiado\n- La grabación se carga en este espacio al finalizar\n- Los recursos y notebooks de la sesión se publican en la pestaña Recursos\n\n**Recomendaciones:**\n- Sigue los ejercicios en tiempo real durante la sesión\n- Guarda tus notebooks y avances en tu propio repositorio\n- Marca la clase como completada al terminar",
          resources: [
            { title: "Enlace a la sesión en vivo", url: "#", type: "link" },
            { title: "Notebook de la sesión", url: "#", type: "notebook" }
          ]
        }
      ]
    },
    {
      id: "mod-2",
      title: "Módulo 2",
      description: "Dos sesiones en vivo de 3 horas cada una.",
      icon: "2️⃣",
      lessons: [
        {
          id: "les-2-1",
          title: "Clase 3 — Sesión en vivo (3 horas)",
          type: "video",
          duration: "3 horas",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Primera sesión en vivo del Módulo 2. La grabación queda disponible en esta misma clase.",
          reading: "**Clase 3 — Sesión en vivo (3 horas)**\n\nPrimera sesión del Módulo 2.\n\n**Cómo funciona esta clase:**\n- Sesión en vivo de 3 horas con trabajo práctico guiado\n- La grabación se carga en este espacio al finalizar\n- Los recursos y notebooks de la sesión se publican en la pestaña Recursos\n\n**Recomendaciones:**\n- Repasa la sesión anterior antes de conectarte\n- Prepara tus preguntas para el espacio de dudas\n- Marca la clase como completada al terminar",
          resources: [
            { title: "Enlace a la sesión en vivo", url: "#", type: "link" },
            { title: "Notebook de la sesión", url: "#", type: "notebook" }
          ]
        },
        {
          id: "les-2-2",
          title: "Clase 4 — Sesión en vivo (3 horas)",
          type: "video",
          duration: "3 horas",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Segunda sesión en vivo del Módulo 2. La grabación queda disponible en esta misma clase.",
          reading: "**Clase 4 — Sesión en vivo (3 horas)**\n\nSegunda sesión del Módulo 2.\n\n**Cómo funciona esta clase:**\n- Sesión en vivo de 3 horas con trabajo práctico guiado\n- La grabación se carga en este espacio al finalizar\n- Los recursos y notebooks de la sesión se publican en la pestaña Recursos\n\n**Recomendaciones:**\n- Ten listos los datos y archivos trabajados en la clase anterior\n- Marca la clase como completada al terminar",
          resources: [
            { title: "Enlace a la sesión en vivo", url: "#", type: "link" },
            { title: "Notebook de la sesión", url: "#", type: "notebook" }
          ]
        }
      ]
    },
    {
      id: "mod-3",
      title: "Módulo 3",
      description: "Dos sesiones en vivo de 3 horas cada una.",
      icon: "3️⃣",
      lessons: [
        {
          id: "les-3-1",
          title: "Clase 5 — Sesión en vivo (3 horas)",
          type: "video",
          duration: "3 horas",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Primera sesión en vivo del Módulo 3. La grabación queda disponible en esta misma clase.",
          reading: "**Clase 5 — Sesión en vivo (3 horas)**\n\nPrimera sesión del Módulo 3.\n\n**Cómo funciona esta clase:**\n- Sesión en vivo de 3 horas con trabajo práctico guiado\n- La grabación se carga en este espacio al finalizar\n- Los recursos y notebooks de la sesión se publican en la pestaña Recursos\n\n**Recomendaciones:**\n- A partir de este módulo el trabajo se orienta a proyecto\n- Marca la clase como completada al terminar",
          resources: [
            { title: "Enlace a la sesión en vivo", url: "#", type: "link" },
            { title: "Notebook de la sesión", url: "#", type: "notebook" }
          ]
        },
        {
          id: "les-3-2",
          title: "Clase 6 — Sesión en vivo (3 horas)",
          type: "video",
          duration: "3 horas",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Segunda sesión en vivo del Módulo 3. La grabación queda disponible en esta misma clase.",
          reading: "**Clase 6 — Sesión en vivo (3 horas)**\n\nSegunda sesión del Módulo 3.\n\n**Cómo funciona esta clase:**\n- Sesión en vivo de 3 horas con trabajo práctico guiado\n- La grabación se carga en este espacio al finalizar\n- Los recursos y notebooks de la sesión se publican en la pestaña Recursos\n\n**Recomendaciones:**\n- Avanza en tu proyecto entre sesiones\n- Marca la clase como completada al terminar",
          resources: [
            { title: "Enlace a la sesión en vivo", url: "#", type: "link" },
            { title: "Notebook de la sesión", url: "#", type: "notebook" }
          ]
        }
      ]
    },
    {
      id: "mod-4",
      title: "Módulo 4",
      description: "Sesión final en vivo de 3 horas y cierre del curso.",
      icon: "4️⃣",
      lessons: [
        {
          id: "les-4-1",
          title: "Clase 7 — Sesión en vivo (3 horas)",
          type: "video",
          duration: "3 horas",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Sesión de cierre del curso. Al completarla se habilita la evaluación final.",
          reading: "**Clase 7 — Sesión en vivo (3 horas)**\n\nSesión de cierre del curso.\n\n**Cómo funciona esta clase:**\n- Sesión en vivo de 3 horas con la integración de todo lo trabajado\n- La grabación se carga en este espacio al finalizar\n- Los recursos finales se publican en la pestaña Recursos\n\n**Después de esta clase:**\n- Al marcarla como completada se habilita la **Evaluación Final** del curso\n- La evaluación tiene 10 preguntas y requiere 70% para aprobar\n- Al aprobarla se genera tu certificado de 20 horas",
          resources: [
            { title: "Enlace a la sesión en vivo", url: "#", type: "link" },
            { title: "Material de cierre del curso", url: "#", type: "download" }
          ]
        }
      ]
    }
  ],
  finalQuiz: {
    id: "quiz-final-ciencia-datos-profesional",
    title: "Evaluación Final del Curso",
    passingScore: 70,
    questions: [
      {
        question: "¿Cuál es la estructura de datos de pandas diseñada para trabajar con datos tabulares de dos dimensiones?",
        options: ["Series", "DataFrame", "Array", "Index"],
        correct: 1,
        explanation: "El DataFrame es la estructura bidimensional de pandas (filas y columnas). La Series es unidimensional."
      },
      {
        question: "En un flujo de ciencia de datos, ¿cuál es el objetivo principal de la etapa de limpieza de datos?",
        options: [
          "Aumentar el número de registros del conjunto de datos",
          "Corregir valores faltantes, duplicados e inconsistencias antes del análisis",
          "Entrenar el modelo de machine learning",
          "Generar las visualizaciones finales del informe"
        ],
        correct: 1,
        explanation: "La limpieza busca dejar los datos consistentes y confiables: tratar nulos, duplicados, tipos incorrectos y valores atípicos, antes de analizar o modelar."
      },
      {
        question: "¿Para qué se divide un conjunto de datos en entrenamiento y prueba?",
        options: [
          "Para reducir el tamaño del archivo en memoria",
          "Para evaluar el modelo con datos que no usó durante el entrenamiento",
          "Para eliminar los valores atípicos del conjunto",
          "Para acelerar la lectura del archivo CSV"
        ],
        correct: 1,
        explanation: "Separar prueba de entrenamiento permite estimar el desempeño real del modelo sobre datos nuevos y detectar sobreajuste."
      },
      {
        question: "¿Qué indica que un modelo presenta sobreajuste (overfitting)?",
        options: [
          "Tiene mal desempeño tanto en entrenamiento como en prueba",
          "Tiene muy buen desempeño en entrenamiento y bajo en prueba",
          "Tiene el mismo desempeño en entrenamiento y en prueba",
          "No logra converger durante el entrenamiento"
        ],
        correct: 1,
        explanation: "El sobreajuste ocurre cuando el modelo memoriza el conjunto de entrenamiento, incluido su ruido, y pierde capacidad de generalizar a datos nuevos."
      },
      {
        question: "¿Cuál de las siguientes tareas corresponde a un problema de clasificación?",
        options: [
          "Predecir el precio de una vivienda en pesos",
          "Predecir si un correo es spam o no spam",
          "Estimar la temperatura del día siguiente",
          "Calcular el promedio de ventas mensuales"
        ],
        correct: 1,
        explanation: "La clasificación predice una categoría (spam / no spam). Predecir un valor numérico continuo, como precio o temperatura, es regresión."
      },
      {
        question: "En pandas, ¿qué hace el método `groupby()`?",
        options: [
          "Elimina las filas duplicadas del DataFrame",
          "Agrupa los datos por una o más columnas para aplicar agregaciones",
          "Ordena el DataFrame de forma ascendente",
          "Une dos DataFrames por una columna en común"
        ],
        correct: 1,
        explanation: "`groupby()` agrupa las filas según los valores de una o más columnas y permite aplicar agregaciones como sum, mean o count sobre cada grupo."
      },
      {
        question: "¿Cuál es una buena práctica al usar asistentes de IA para generar código de análisis de datos?",
        options: [
          "Ejecutar el código directamente sin revisarlo, para ahorrar tiempo",
          "Verificar y probar el código generado, validando los resultados contra los datos reales",
          "Compartir siempre los datos confidenciales completos en el prompt",
          "Confiar en la IA para decidir las conclusiones del estudio"
        ],
        correct: 1,
        explanation: "La IA acelera la escritura de código, pero la validación es responsabilidad del analista: hay que probar el código y contrastar los resultados con los datos."
      },
      {
        question: "¿Qué métrica NO es adecuada por sí sola para evaluar un modelo de clasificación con clases muy desbalanceadas?",
        options: ["Exactitud (accuracy)", "Precisión (precision)", "Sensibilidad (recall)", "F1-score"],
        correct: 0,
        explanation: "Con clases desbalanceadas la exactitud puede ser alta simplemente prediciendo siempre la clase mayoritaria; por eso se complementa con precisión, recall y F1."
      },
      {
        question: "¿Cuál es el propósito de la normalización o escalado de variables numéricas?",
        options: [
          "Convertir variables categóricas en numéricas",
          "Llevar las variables a rangos comparables para que ninguna domine por su escala",
          "Eliminar los registros con valores faltantes",
          "Reducir el número de filas del conjunto de datos"
        ],
        correct: 1,
        explanation: "El escalado pone las variables en rangos comparables, algo necesario en algoritmos sensibles a la magnitud como KNN, SVM o regresiones regularizadas."
      },
      {
        question: "¿Qué elemento es indispensable para que un proyecto de ciencia de datos sea reproducible?",
        options: [
          "Usar siempre el mismo computador",
          "Documentar el código, las versiones de librerías y el origen de los datos",
          "Guardar los resultados únicamente en formato de imagen",
          "Trabajar sin control de versiones para evitar conflictos"
        ],
        correct: 1,
        explanation: "La reproducibilidad exige documentar el flujo completo: origen y versión de los datos, código versionado y dependencias con sus versiones."
      }
    ]
  }
};
