const COURSE_DATA = {
  title: "Inteligencia Artificial para Investigación Científica",
  subtitle: "20 horas certificadas — formación en vivo con grabaciones disponibles en la plataforma",
  hours: 20,
  isLive: true,
  hidePromo: true,
  startDate: "2026-08-20",
  startLabel: "Inicia el jueves 20 de agosto de 2026",
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
          reading: "**Clase 1 — Sesión en vivo (2 horas)**\n\nEsta es la sesión de apertura del curso. El curso inicia el **jueves 20 de agosto de 2026**.\n\n**Cómo funciona esta clase:**\n- La sesión se dicta en vivo en el horario acordado con el grupo\n- La grabación se carga en este mismo espacio al finalizar la sesión\n- Puedes volver a verla las veces que necesites\n- Los materiales y recursos de la sesión se publican en la pestaña Recursos\n\n**Antes de la sesión:**\n- Ten creadas tus cuentas en las herramientas de IA que usaremos\n- Ten a la mano un tema o proyecto de investigación propio para aplicar lo visto\n- Verifica tu conexión y el audio de tu equipo\n\n**Al terminar:**\n- Marca la clase como completada para registrar tu avance\n- Tu progreso queda guardado y cuenta para habilitar la evaluación final",
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
          reading: "**Clase 2 — Sesión en vivo (3 horas)**\n\nSegunda sesión del Módulo 1.\n\n**Cómo funciona esta clase:**\n- Sesión en vivo de 3 horas con trabajo práctico guiado\n- La grabación se carga en este espacio al finalizar\n- Los recursos y plantillas de la sesión se publican en la pestaña Recursos\n\n**Recomendaciones:**\n- Aplica los ejercicios sobre tu propio tema de investigación\n- Guarda tus prompts y resultados para comparar avances\n- Marca la clase como completada al terminar",
          resources: [
            { title: "Enlace a la sesión en vivo", url: "#", type: "link" },
            { title: "Plantillas de la sesión", url: "#", type: "download" }
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
          reading: "**Clase 3 — Sesión en vivo (3 horas)**\n\nPrimera sesión del Módulo 2.\n\n**Cómo funciona esta clase:**\n- Sesión en vivo de 3 horas con trabajo práctico guiado\n- La grabación se carga en este espacio al finalizar\n- Los recursos y plantillas de la sesión se publican en la pestaña Recursos\n\n**Recomendaciones:**\n- Repasa la sesión anterior antes de conectarte\n- Prepara tus preguntas para el espacio de dudas\n- Marca la clase como completada al terminar",
          resources: [
            { title: "Enlace a la sesión en vivo", url: "#", type: "link" },
            { title: "Plantillas de la sesión", url: "#", type: "download" }
          ]
        },
        {
          id: "les-2-2",
          title: "Clase 4 — Sesión en vivo (3 horas)",
          type: "video",
          duration: "3 horas",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Segunda sesión en vivo del Módulo 2. La grabación queda disponible en esta misma clase.",
          reading: "**Clase 4 — Sesión en vivo (3 horas)**\n\nSegunda sesión del Módulo 2.\n\n**Cómo funciona esta clase:**\n- Sesión en vivo de 3 horas con trabajo práctico guiado\n- La grabación se carga en este espacio al finalizar\n- Los recursos y plantillas de la sesión se publican en la pestaña Recursos\n\n**Recomendaciones:**\n- Ten listos los avances trabajados en la clase anterior\n- Marca la clase como completada al terminar",
          resources: [
            { title: "Enlace a la sesión en vivo", url: "#", type: "link" },
            { title: "Plantillas de la sesión", url: "#", type: "download" }
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
          reading: "**Clase 5 — Sesión en vivo (3 horas)**\n\nPrimera sesión del Módulo 3.\n\n**Cómo funciona esta clase:**\n- Sesión en vivo de 3 horas con trabajo práctico guiado\n- La grabación se carga en este espacio al finalizar\n- Los recursos y plantillas de la sesión se publican en la pestaña Recursos\n\n**Recomendaciones:**\n- A partir de este módulo el trabajo se orienta a tu propio proyecto de investigación\n- Marca la clase como completada al terminar",
          resources: [
            { title: "Enlace a la sesión en vivo", url: "#", type: "link" },
            { title: "Plantillas de la sesión", url: "#", type: "download" }
          ]
        },
        {
          id: "les-3-2",
          title: "Clase 6 — Sesión en vivo (3 horas)",
          type: "video",
          duration: "3 horas",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Segunda sesión en vivo del Módulo 3. La grabación queda disponible en esta misma clase.",
          reading: "**Clase 6 — Sesión en vivo (3 horas)**\n\nSegunda sesión del Módulo 3.\n\n**Cómo funciona esta clase:**\n- Sesión en vivo de 3 horas con trabajo práctico guiado\n- La grabación se carga en este espacio al finalizar\n- Los recursos y plantillas de la sesión se publican en la pestaña Recursos\n\n**Recomendaciones:**\n- Avanza en tu proyecto entre sesiones\n- Marca la clase como completada al terminar",
          resources: [
            { title: "Enlace a la sesión en vivo", url: "#", type: "link" },
            { title: "Plantillas de la sesión", url: "#", type: "download" }
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
    id: "quiz-final-ia-investigacion",
    title: "Evaluación Final del Curso",
    passingScore: 70,
    questions: [
      {
        question: "¿Qué es una \"alucinación\" en el contexto de los modelos de lenguaje?",
        options: [
          "Un error de conexión con el servidor del modelo",
          "Una respuesta que suena coherente pero contiene información falsa o inventada",
          "Una respuesta que el modelo se niega a entregar",
          "Un mensaje de advertencia sobre contenido sensible"
        ],
        correct: 1,
        explanation: "Una alucinación es una salida fluida y convincente pero incorrecta o inventada. Por eso toda afirmación y referencia debe verificarse en la fuente original."
      },
      {
        question: "Al usar IA para apoyar una revisión de literatura, ¿cuál es el paso indispensable antes de citar una referencia sugerida por el modelo?",
        options: [
          "Cambiar el formato de la cita a APA",
          "Verificar que la referencia exista realmente y leer la fuente original",
          "Pedirle al modelo que la resuma otra vez",
          "Traducir la referencia al español"
        ],
        correct: 1,
        explanation: "Los modelos pueden fabricar referencias plausibles con autores, títulos y DOI inexistentes. Siempre hay que comprobar la existencia y el contenido en la fuente."
      },
      {
        question: "¿Cuál es la práctica correcta frente al uso de IA en una publicación científica?",
        options: [
          "Ocultarlo, porque puede afectar la aceptación del artículo",
          "Declarar de forma transparente cómo se usó la herramienta, según la política de la revista",
          "Incluir a la IA como coautora del artículo",
          "Usarla solo si nadie más en el equipo lo sabe"
        ],
        correct: 1,
        explanation: "Las principales editoriales exigen declarar el uso de IA y no aceptan que sea coautora, porque no puede asumir responsabilidad sobre el contenido."
      },
      {
        question: "¿Qué caracteriza a un prompt bien construido para tareas de investigación?",
        options: [
          "Ser lo más corto posible para no confundir al modelo",
          "Definir rol, contexto, tarea concreta, formato de salida y restricciones",
          "Incluir siempre el texto completo del artículo sin filtrar",
          "Escribirse siempre en inglés técnico"
        ],
        correct: 1,
        explanation: "Un prompt efectivo especifica quién responde, sobre qué contexto, qué tarea exacta debe hacer, en qué formato y con qué límites."
      },
      {
        question: "¿Qué precaución es clave al trabajar con datos de investigación sensibles o personales en herramientas de IA en la nube?",
        options: [
          "Subirlos completos para obtener mejores resultados",
          "Anonimizar o no compartir datos identificables y revisar la política de privacidad del servicio",
          "Cambiar el nombre del archivo antes de subirlo",
          "Usar siempre la versión gratuita de la herramienta"
        ],
        correct: 1,
        explanation: "Los datos enviados a un servicio externo pueden almacenarse o procesarse fuera de tu control; hay que anonimizar y respetar el aval ético y la normativa de datos."
      },
      {
        question: "¿Para qué sirve principalmente un enfoque RAG (generación aumentada por recuperación) en investigación?",
        options: [
          "Para entrenar un modelo de lenguaje desde cero",
          "Para que las respuestas se apoyen en documentos propios y verificables en lugar de solo la memoria del modelo",
          "Para traducir automáticamente artículos científicos",
          "Para aumentar la velocidad de escritura del modelo"
        ],
        correct: 1,
        explanation: "RAG recupera fragmentos de una base documental propia y los entrega como contexto al modelo, lo que reduce alucinaciones y permite rastrear la fuente."
      },
      {
        question: "En el análisis de datos de investigación asistido por IA, ¿quién es responsable de la validez de los resultados reportados?",
        options: [
          "El proveedor del modelo de IA",
          "El investigador que firma y publica el trabajo",
          "La revista que publica el artículo",
          "Nadie, si se declara el uso de IA"
        ],
        correct: 1,
        explanation: "La responsabilidad científica y ética es siempre del investigador: la IA es una herramienta, no un autor ni un garante de validez."
      },
      {
        question: "¿Cuál de las siguientes tareas NO debería delegarse por completo a una IA en un proceso de investigación?",
        options: [
          "Sugerir mejoras de redacción en un borrador",
          "Decidir e interpretar las conclusiones científicas del estudio",
          "Ayudar a organizar referencias bibliográficas",
          "Generar código de apoyo para graficar resultados"
        ],
        correct: 1,
        explanation: "La interpretación y las conclusiones dependen del juicio experto y del contexto del estudio; delegarlas compromete la integridad científica."
      },
      {
        question: "¿Qué ventaja aporta documentar los prompts y las versiones de las herramientas de IA utilizadas?",
        options: [
          "Permite obtener siempre la misma respuesta palabra por palabra",
          "Aporta trazabilidad y favorece la reproducibilidad del trabajo",
          "Evita tener que citar las fuentes originales",
          "Reduce el costo de uso de la herramienta"
        ],
        correct: 1,
        explanation: "Aunque los modelos no son deterministas, registrar prompts, versiones y fechas hace el proceso trazable y auditable por otros investigadores."
      },
      {
        question: "¿Cuál es el uso más adecuado de la IA en la etapa de escritura de un artículo científico?",
        options: [
          "Generar el artículo completo y enviarlo sin revisión",
          "Apoyar la redacción, claridad y estructura de un texto cuyo contenido es del autor",
          "Inventar resultados que refuercen la hipótesis",
          "Reescribir textos de otros autores para evitar la detección de plagio"
        ],
        correct: 1,
        explanation: "La IA es útil como apoyo de redacción y estilo sobre contenido propio y verificado; usarla para fabricar resultados o encubrir plagio constituye mala conducta científica."
      }
    ]
  }
};
