const COURSE_DATA = {
  title: "Excel Inteligente",
  subtitle: "Domina las funciones avanzadas de Excel potenciadas con Inteligencia Artificial",
  modules: [
    {
      id: "mod-1",
      title: "Clase 1: Excel + IA en Acción",
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
    }
  ]
};
