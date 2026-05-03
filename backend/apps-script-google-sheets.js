// ============================================================
// CÓDIGO PARA GOOGLE APPS SCRIPT
// ============================================================
// INSTRUCCIONES:
// 1. Abre tu Google Sheets donde ya se registran los estudiantes
// 2. Ve a Extensiones → Apps Script
// 3. Borra todo el código existente y pega este archivo completo
// 4. Crea una nueva hoja en el Google Sheets llamada "Avance"
//    con estos encabezados en la fila 1:
//    Nombre | Correo | Curso | Evento | Detalle | Puntaje | XP Total | Progreso % | Fecha
// 5. Guarda el script (Ctrl+S)
// 6. Despliega: Implementar → Nueva implementación
//    - Tipo: Aplicación web
//    - Ejecutar como: Yo
//    - Quién tiene acceso: Cualquier persona
// 7. Copia la nueva URL y reemplázala en:
//    - index.html (línea de APPS_SCRIPT_URL)
//    - js/app.js (propiedad APPS_SCRIPT_URL)
// ============================================================

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);

    if (data.tipo === 'avance') {
      // --- Registro de avance del estudiante ---
      var hojaAvance = ss.getSheetByName('Avance');
      if (!hojaAvance) {
        hojaAvance = ss.insertSheet('Avance');
        hojaAvance.appendRow([
          'Nombre', 'Correo', 'Curso', 'Evento',
          'Detalle', 'Puntaje', 'XP Total', 'Progreso %', 'Fecha'
        ]);
      }
      hojaAvance.appendRow([
        data.nombre || '',
        data.correo || '',
        data.curso || '',
        data.evento || '',
        data.detalle || '',
        data.puntaje !== undefined && data.puntaje !== '' ? data.puntaje : '',
        data.xpTotal || 0,
        data.progreso || 0,
        data.fecha || new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })
      ]);
    } else {
      // --- Registro inicial del estudiante (ya existente) ---
      var hojaRegistros = ss.getSheetByName('Registros') || ss.getSheets()[0];
      hojaRegistros.appendRow([
        data.nombre || '',
        data.correo || '',
        data.curso || '',
        data.tipo || '',
        data.fecha || new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })
      ]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'El servicio está activo' }))
    .setMimeType(ContentService.MimeType.JSON);
}
