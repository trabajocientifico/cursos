const COURSE_DATA = {
  title: "Excel Inteligente",
  subtitle: "Domina las funciones avanzadas de Excel potenciadas con Inteligencia Artificial",
  modules: [
    {
      id: "mod-1",
      title: "Módulo 1: Excel + IA en Acción",
      description: "Conecta Excel con asistentes de IA y automatiza tus hojas de cálculo.",
      icon: "📊",
      lessons: [
        {
          id: "les-1-1",
          title: "Excel Inteligente con IA",
          type: "video",
          duration: "60 min",
          videoId: "HVrd_3ri1aI",
          description: "Integra herramientas de IA en Excel para acelerar tu trabajo diario.",
          reading: "**Conceptos Fundamentales**\n\n1. **Excel + IA:** Combinación de las hojas de cálculo de Microsoft Excel con asistentes de Inteligencia Artificial (Copilot, ChatGPT, Gemini) para generar fórmulas, automatizar análisis, limpiar datos y crear reportes en lenguaje natural.\n\n2. **Fórmulas asistidas por IA:** Capacidad de describir en español lo que quieres calcular y recibir la fórmula de Excel correcta (BUSCARV, SI anidados, ÍNDICE/COINCIDIR, LET, LAMBDA), reduciendo la curva de aprendizaje y acelerando el flujo de trabajo.\n\n3. **Análisis exploratorio guiado:** Usar IA para sugerir gráficos apropiados, detectar patrones, identificar outliers y resumir datos automáticamente, permitiendo enfocarte en interpretar resultados en vez de construirlos desde cero.",
          resources: [
            { title: "Video YouTube", url: "https://www.youtube.com/watch?v=HVrd_3ri1aI&t=2683s", type: "link" }
          ]
        }
      ],
      quiz: {
        id: "q1",
        title: "Quiz: Excel + IA en Acción",
        passingScore: 70,
        questions: [
          {
            question: "¿Qué ventaja principal aporta la IA al trabajar con Excel?",
            options: ["Reemplaza a Excel completamente", "Genera fórmulas y análisis a partir de instrucciones en lenguaje natural", "Solo cambia el color de las celdas", "Convierte Excel en una base de datos"],
            correct: 1,
            explanation: "La IA permite describir lo que quieres lograr en español y recibir la fórmula o análisis ya construido."
          },
          {
            question: "¿Qué función de Excel se usa para buscar un valor en una tabla y devolver otro asociado?",
            options: ["SUMA", "BUSCARV o XLOOKUP", "PROMEDIO", "CONTAR"],
            correct: 1,
            explanation: "BUSCARV (versiones antiguas) y XLOOKUP (versiones modernas) buscan un valor y devuelven otro de la misma fila."
          },
          {
            question: "¿Qué hace la función SI.CONJUNTO?",
            options: ["Suma valores", "Evalúa múltiples condiciones en orden y devuelve el resultado de la primera verdadera", "Cuenta celdas vacías", "Convierte texto a número"],
            correct: 1,
            explanation: "SI.CONJUNTO simplifica los SI anidados evaluando varias condiciones secuencialmente."
          },
          {
            question: "¿Qué es Microsoft Copilot en Excel?",
            options: ["Un piloto de avión", "Un asistente de IA integrado que ayuda con fórmulas, análisis y visualizaciones", "Un complemento para imprimir", "Un convertidor de archivos"],
            correct: 1,
            explanation: "Copilot es el asistente de IA de Microsoft que se integra en Excel y otras aplicaciones de Office 365."
          },
          {
            question: "¿Qué tipo de gráfico es mejor para mostrar la evolución de una variable en el tiempo?",
            options: ["Gráfico de pastel", "Gráfico de líneas", "Diagrama de dispersión 3D", "Gráfico de anillos"],
            correct: 1,
            explanation: "Los gráficos de líneas son ideales para representar tendencias temporales de una o varias series."
          },
          {
            question: "¿Qué herramienta de Excel permite resumir grandes volúmenes de datos arrastrando campos?",
            options: ["Macros", "Tablas dinámicas (PivotTables)", "Validación de datos", "Formato condicional"],
            correct: 1,
            explanation: "Las tablas dinámicas permiten agregar, agrupar y resumir datos de forma interactiva sin escribir fórmulas."
          },
          {
            question: "¿Para qué sirve Power Query en Excel?",
            options: ["Para crear gráficos en 3D", "Para extraer, transformar y combinar datos de múltiples fuentes (ETL)", "Para enviar correos", "Para imprimir hojas grandes"],
            correct: 1,
            explanation: "Power Query es la herramienta ETL de Excel: importa, limpia y transforma datos de forma reproducible."
          },
          {
            question: "¿Qué hace el formato condicional?",
            options: ["Cambia el idioma de la hoja", "Aplica colores y estilos a celdas según reglas (mayor que, duplicados, escalas)", "Bloquea las celdas", "Genera fórmulas"],
            correct: 1,
            explanation: "El formato condicional resalta visualmente patrones en los datos según condiciones que tú defines."
          },
          {
            question: "¿Qué función moderna de Excel permite definir variables temporales dentro de una fórmula?",
            options: ["LET", "SUMA", "MEDIANA", "TEXTO"],
            correct: 0,
            explanation: "LET permite asignar nombres a cálculos intermedios para escribir fórmulas más legibles y eficientes."
          },
          {
            question: "¿Qué precaución debes tomar al usar IA con datos confidenciales en Excel?",
            options: ["Ninguna, todo es seguro", "No compartir información sensible con servicios públicos sin políticas de privacidad claras", "Solo usar IA en computadoras Mac", "Apagar Excel antes"],
            correct: 1,
            explanation: "Antes de pegar datos confidenciales en un asistente de IA externo, verifica la política de privacidad y prefiere herramientas empresariales."
          }
        ]
      }
    },
    {
      id: "mod-2",
      title: "Módulo 2: Fórmulas y Funciones Avanzadas",
      description: "Domina las funciones más potentes para análisis profesional.",
      icon: "🧮",
      lessons: [
        {
          id: "les-2-1",
          title: "Fórmulas Inteligentes y LAMBDA",
          type: "video",
          duration: "60 min",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Crea funciones personalizadas y reutilizables sin VBA.",
          reading: "**Conceptos Fundamentales**\n\n1. **Funciones LAMBDA:** Permiten crear funciones personalizadas reutilizables directamente con fórmulas, sin necesidad de macros ni VBA. Se definen una vez en el Administrador de nombres y se invocan como cualquier función nativa.\n\n2. **Funciones de matriz dinámica:** FILTRAR, ORDENAR, ÚNICOS, SECUENCIA y APILARV/H devuelven matrices que se expanden automáticamente, eliminando la necesidad de Ctrl+Shift+Enter de las fórmulas matriciales antiguas.\n\n3. **Validación y limpieza con IA:** Combinar funciones como TEXTOANTES, TEXTODESPUÉS, EXTRAE y REGEX (Microsoft 365) con sugerencias de IA para depurar datos inconsistentes, separar columnas y normalizar formatos rápidamente.",
          resources: []
        }
      ],
      quiz: {
        id: "q2",
        title: "Quiz: Fórmulas Avanzadas",
        passingScore: 70,
        questions: [
          {
            question: "¿Qué permite hacer la función LAMBDA en Excel?",
            options: ["Solo sumar números", "Crear funciones personalizadas reutilizables sin VBA", "Imprimir hojas", "Cambiar fuentes de letra"],
            correct: 1,
            explanation: "LAMBDA permite definir tus propias funciones con fórmulas y reutilizarlas como si fueran nativas."
          },
          {
            question: "¿Qué función devuelve solo los valores únicos de un rango?",
            options: ["CONTAR", "ÚNICOS (UNIQUE)", "SUMA", "PROMEDIO"],
            correct: 1,
            explanation: "ÚNICOS extrae los valores no repetidos de un rango como una matriz dinámica."
          },
          {
            question: "¿Qué hace FILTRAR (FILTER)?",
            options: ["Ordena alfabéticamente", "Devuelve los registros que cumplen una condición", "Cambia el color", "Aplica formato"],
            correct: 1,
            explanation: "FILTRAR retorna una matriz dinámica con las filas que cumplen el criterio especificado."
          },
          {
            question: "¿Qué ventaja tienen las matrices dinámicas frente a las fórmulas matriciales clásicas?",
            options: ["Ninguna", "Se expanden automáticamente sin necesidad de Ctrl+Shift+Enter", "Son más lentas", "Solo funcionan en Mac"],
            correct: 1,
            explanation: "Las matrices dinámicas (Excel 365) se desbordan automáticamente y no requieren combinaciones de teclas especiales."
          },
          {
            question: "¿Qué función combina XLOOKUP con búsqueda en columnas y filas?",
            options: ["BUSCARV", "XLOOKUP / BUSCARX", "CONTAR.SI", "SUMAR.SI"],
            correct: 1,
            explanation: "BUSCARX (XLOOKUP) reemplaza a BUSCARV con búsqueda bidireccional, valor por defecto y modos avanzados."
          },
          {
            question: "¿Qué hace SECUENCIA (SEQUENCE)?",
            options: ["Genera una matriz de números consecutivos", "Cuenta celdas", "Convierte texto", "Aplica formato"],
            correct: 0,
            explanation: "SECUENCIA crea una matriz de números consecutivos definidos por filas, columnas, inicio y paso."
          },
          {
            question: "¿Qué función separa texto antes de un delimitador?",
            options: ["TEXTOANTES (TEXTBEFORE)", "SUMA", "MAX", "CONTAR"],
            correct: 0,
            explanation: "TEXTOANTES devuelve la parte del texto que aparece antes del delimitador indicado."
          },
          {
            question: "¿Qué función combina varias matrices verticalmente?",
            options: ["SUMA", "APILARV (VSTACK)", "PROMEDIO", "BUSCARV"],
            correct: 1,
            explanation: "APILARV apila matrices una debajo de otra. APILARH lo hace horizontalmente."
          },
          {
            question: "¿Qué hace la función LET?",
            options: ["Crea variables temporales dentro de una fórmula", "Borra celdas", "Imprime", "Aplica color"],
            correct: 0,
            explanation: "LET asigna nombres a cálculos intermedios, mejorando legibilidad y rendimiento."
          },
          {
            question: "¿Qué se recomienda para depurar fórmulas largas con LET?",
            options: ["Borrarlas", "Usar nombres descriptivos para cada variable y dividir el cálculo en pasos", "Convertirlas a imagen", "Imprimirlas en papel"],
            correct: 1,
            explanation: "Nombres descriptivos y pasos pequeños hacen que las fórmulas con LET sean mantenibles."
          }
        ]
      }
    },
    {
      id: "mod-3",
      title: "Módulo 3: Dashboards y Automatización",
      description: "Construye reportes interactivos y automatiza tareas repetitivas.",
      icon: "📈",
      lessons: [
        {
          id: "les-3-1",
          title: "Dashboards Interactivos en Excel",
          type: "video",
          duration: "60 min",
          videoId: "VIDEO_ID_PLACEHOLDER",
          description: "Construye un dashboard profesional con segmentadores y KPIs.",
          reading: "**Conceptos Fundamentales**\n\n1. **Dashboard ejecutivo:** Reporte visual de una página que combina KPIs, gráficos y segmentadores para tomar decisiones rápidas. Se construye sobre tablas dinámicas conectadas a un modelo de datos limpio.\n\n2. **Segmentadores y líneas de tiempo:** Controles visuales que filtran simultáneamente varias tablas y gráficos dinámicos. Permiten que el usuario explore el dashboard sin tocar fórmulas.\n\n3. **Automatización con Power Query y Macros:** Power Query actualiza datos importados con un clic; las macros (VBA u Office Scripts) automatizan tareas repetitivas como renombrar archivos, generar reportes y enviar correos.",
          resources: []
        }
      ],
      quiz: {
        id: "q3",
        title: "Quiz: Dashboards y Automatización",
        passingScore: 70,
        questions: [
          {
            question: "¿Qué es un dashboard en Excel?",
            options: ["Un tipo de fórmula", "Un reporte visual interactivo con KPIs y gráficos", "Una macro", "Un archivo PDF"],
            correct: 1,
            explanation: "Un dashboard concentra los indicadores clave en una sola vista interactiva para la toma de decisiones."
          },
          {
            question: "¿Qué hace un segmentador (slicer)?",
            options: ["Corta celdas", "Filtra visualmente tablas y gráficos dinámicos", "Imprime el documento", "Cambia el idioma"],
            correct: 1,
            explanation: "Los segmentadores son botones que filtran tablas y gráficos dinámicos de forma interactiva."
          },
          {
            question: "¿Qué es un KPI?",
            options: ["Una fórmula matemática avanzada", "Un Indicador Clave de Desempeño que mide el cumplimiento de un objetivo", "Un tipo de gráfico", "Un atajo de teclado"],
            correct: 1,
            explanation: "KPI (Key Performance Indicator) es una métrica clave que mide qué tan cerca estás de un objetivo."
          },
          {
            question: "¿Qué herramienta de Excel automatiza la importación y limpieza de datos?",
            options: ["Power Query", "Formato condicional", "Validación", "Imprimir"],
            correct: 0,
            explanation: "Power Query permite definir pasos repetibles para importar y transformar datos."
          },
          {
            question: "¿Qué lenguaje usan las macros tradicionales de Excel?",
            options: ["Python", "VBA (Visual Basic for Applications)", "JavaScript", "SQL"],
            correct: 1,
            explanation: "VBA es el lenguaje histórico de macros en Excel; Office Scripts (TypeScript) es la alternativa moderna."
          },
          {
            question: "¿Qué son las Office Scripts?",
            options: ["Documentos de Word", "Scripts en TypeScript que automatizan Excel en la web y la nube", "Macros antiguas", "Plantillas"],
            correct: 1,
            explanation: "Office Scripts son la alternativa moderna a VBA, basada en TypeScript, ideal para automatizar Excel en la nube."
          },
          {
            question: "¿Cuál es una buena práctica al diseñar un dashboard?",
            options: ["Usar todos los colores posibles", "Mantenerlo simple, jerarquizar la información y elegir gráficos apropiados", "Ocultar todos los datos", "Saturarlo de gráficos 3D"],
            correct: 1,
            explanation: "Un buen dashboard prioriza claridad: pocos colores, jerarquía visual y gráficos que comuniquen rápido."
          },
          {
            question: "¿Qué función facilita escribir KPIs comparando un valor real contra una meta?",
            options: ["SUMA", "SI con división del real entre la meta", "CONCATENAR", "BUSCARV"],
            correct: 1,
            explanation: "Un KPI suele expresarse como real/meta y se evalúa con SI o formato condicional para clasificarlo."
          },
          {
            question: "¿Qué utilidad tiene actualizar consultas de Power Query?",
            options: ["Refrescar los datos automáticamente cuando cambia la fuente", "Borrar fórmulas", "Cambiar el tema", "Imprimir"],
            correct: 0,
            explanation: "Al refrescar, Power Query vuelve a aplicar todos los pasos sobre los datos actualizados."
          },
          {
            question: "¿Qué se recomienda separar en un libro de Excel para un dashboard mantenible?",
            options: ["Datos, cálculos y vista (dashboard) en hojas distintas", "Mezclar todo en una sola hoja", "Usar archivos diferentes", "Borrar los datos"],
            correct: 0,
            explanation: "Separar datos crudos, cálculos intermedios y la vista final facilita el mantenimiento y la auditoría."
          }
        ]
      }
    }
  ]
};
