/* ============================================
   TRABAJO CIENTÍFICO — Generador de Certificados
   Lógica JavaScript (CSV Fetch, Search, Canvas, PDF)
   ============================================ */

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSM1aQLOgJsvQ8KvTkG3bgbGDeUyS5zl2RdPeSs1GslsAZojdDac_EEO7_tqk5mbO67E13fmKORXUQ5/pub?output=csv';

class CertificateApp {
  constructor() {
    this.attendees = [];
    this.currentAttendee = null;
    this.logoImg = null;

    // Elementos DOM
    this.nameInput = document.getElementById('name-input');
    this.searchBtn = document.getElementById('btn-search');
    this.searchForm = document.getElementById('search-form');
    this.autocompleteList = document.getElementById('autocomplete-list');
    this.statusContainer = document.getElementById('status-container');
    this.certSection = document.getElementById('certificate-section');
    this.canvas = document.getElementById('cert-canvas');
    this.downloadPdfBtn = document.getElementById('btn-download-pdf');

    this.init();
  }

  async init() {
    this.bindEvents();
    await this.loadLogo();
    await this.fetchDatabase();
  }

  // --- Carga previa del logotipo de la organización ---
  loadLogo() {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        this.logoImg = img;
        resolve();
      };
      img.onerror = () => {
        this.logoImg = null;
        resolve();
      };
      img.src = '../imagenes/logo.png';
    });
  }

  // --- Descarga y parseo del CSV de Google Sheets ---
  async fetchDatabase() {
    this.showStatus('loading', 'Conectando con la base de datos de asistentes...');
    try {
      const response = await fetch(CSV_URL);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const csvText = await response.text();
      this.attendees = this.parseCSV(csvText);

      if (this.attendees.length === 0) {
        this.showStatus('error', 'No se encontraron registros en la base de datos.');
      } else {
        this.showStatus('success', `✓ Base de datos cargada correctamente (${this.attendees.length} asistentes registrados). Lista para buscar.`);
        setTimeout(() => this.hideStatus(), 4000);
      }
    } catch (err) {
      console.error('Error fetching database:', err);
      this.showStatus('error', 'No se pudo conectar con la base de datos de Google Sheets. Verifica tu conexión e intenta de nuevo.');
    }
  }

  // Parseador robusto de CSV
  parseCSV(text) {
    const lines = [];
    let field = '';
    let inQuotes = false;
    let row = [];

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const nextChar = text[i + 1];

      if (char === '"') {
        if (inQuotes && nextChar === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        row.push(field.trim());
        field = '';
      } else if ((char === '\r' || char === '\n') && !inQuotes) {
        if (char === '\r' && nextChar === '\n') i++;
        row.push(field.trim());
        if (row.some(f => f.length > 0)) lines.push(row);
        row = [];
        field = '';
      } else {
        field += char;
      }
    }
    if (field.length > 0 || row.length > 0) {
      row.push(field.trim());
      if (row.some(f => f.length > 0)) lines.push(row);
    }

    if (lines.length < 2) return [];

    // Buscar el índice de la columna "Nombre completo"
    const headers = lines[0].map(h => h.toLowerCase().trim());
    let nameColIdx = headers.findIndex(h => h.includes('nombre completo') || h.includes('nombre'));
    if (nameColIdx === -1) nameColIdx = 1; // Fallback a segunda columna

    const result = [];
    for (let r = 1; r < lines.length; r++) {
      const name = lines[r][nameColIdx];
      if (name && name.trim().length > 1) {
        // Limpiar espacios dobles o formato de nombre
        const cleanName = name.trim().replace(/\s+/g, ' ');
        if (!result.includes(cleanName)) {
          result.push(cleanName);
        }
      }
    }
    return result;
  }

  // --- Normalización de texto (sin tildes, minúsculas) ---
  normalize(str) {
    if (!str) return '';
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  // --- Event Listeners ---
  bindEvents() {
    // Buscar al presionar Submit o Enter
    this.searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSearch();
    });

    // Autocompletado en tiempo real al escribir
    this.nameInput.addEventListener('input', () => {
      this.handleAutocomplete();
    });

    // Ocultar autocompletado al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!this.searchForm.contains(e.target)) {
        this.closeAutocomplete();
      }
    });

    // Descarga PDF
    this.downloadPdfBtn.addEventListener('click', () => {
      this.downloadPDF();
    });
  }

  // --- Manejo de Autocompletado ---
  handleAutocomplete() {
    const query = this.normalize(this.nameInput.value);
    if (query.length < 2) {
      this.closeAutocomplete();
      return;
    }

    const matches = this.attendees
      .filter(name => this.normalize(name).includes(query))
      .slice(0, 6);

    if (matches.length === 0) {
      this.closeAutocomplete();
      return;
    }

    this.autocompleteList.innerHTML = matches
      .map(name => `<div class="autocomplete-item" data-name="${name}">${this.highlightMatch(name, query)}</div>`)
      .join('');

    this.autocompleteList.classList.add('active');

    // Asignar click a cada item
    const items = this.autocompleteList.querySelectorAll('.autocomplete-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const selectedName = item.getAttribute('data-name');
        this.nameInput.value = selectedName;
        this.closeAutocomplete();
        this.generateCertificate(selectedName);
      });
    });
  }

  highlightMatch(name, query) {
    // Resalta visualmente las coincidencias encontradas
    const normName = this.normalize(name);
    const startIdx = normName.indexOf(query);
    if (startIdx === -1) return name;
    
    // Extraer texto original preservando mayúsculas y tildes
    const matchedPart = name.substring(startIdx, startIdx + query.length);
    return name.replace(matchedPart, `<strong>${matchedPart}</strong>`);
  }

  closeAutocomplete() {
    this.autocompleteList.classList.remove('active');
    this.autocompleteList.innerHTML = '';
  }

  // --- Proceso de Búsqueda ---
  handleSearch() {
    this.closeAutocomplete();
    const query = this.nameInput.value.trim();

    if (!query) {
      this.showStatus('error', 'Por favor ingresa tu nombre completo para buscar.');
      this.certSection.classList.remove('active');
      return;
    }

    const normQuery = this.normalize(query);

    // Búsqueda exacta o parcial inteligente
    let match = this.attendees.find(name => this.normalize(name) === normQuery);

    if (!match) {
      // Intentar coincidencia parcial amplia (ej. ingresó nombre parcial)
      const partialMatches = this.attendees.filter(name => this.normalize(name).includes(normQuery));
      if (partialMatches.length === 1) {
        match = partialMatches[0];
      } else if (partialMatches.length > 1) {
        // Sugerir selecciones
        this.showStatus('error', `Se encontraron ${partialMatches.length} posibles coincidencias. Selecciona tu nombre de la lista de sugerencias mientras escribes.`);
        this.handleAutocomplete();
        this.certSection.classList.remove('active');
        return;
      }
    }

    if (match) {
      this.generateCertificate(match);
    } else {
      this.showStatus('error', `No encontramos a "${query}" en la lista de asistentes registrados. Verifica que esté bien escrito o prueba ingresando tus nombres y apellidos.`);
      this.certSection.classList.remove('active');
    }
  }

  // --- Generación del Certificado ---
  generateCertificate(name) {
    this.currentAttendee = name;
    this.showStatus('success', `✓ ¡Asistencia verificada para ${name}!`);
    this.certSection.classList.add('active');

    // Desplazar suavemente hasta el certificado
    setTimeout(() => {
      this.certSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    // Renderizar en Canvas
    this.renderCanvas(name);
  }

  // --- Renderizado 2D en Canvas ---
  renderCanvas(name) {
    const ctx = this.canvas.getContext('2d');
    const w = 1200;
    const h = 800;
    const FONT = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
    const SERIF = "Georgia, 'Times New Roman', 'Cambria', serif";

    // Paleta ejecutiva: marfil, azul marino y dorado
    const BG = '#f8f6ef';
    const NAVY = '#1c2b4a';
    const GOLD = '#a9873f';
    const INK = '#3d3d3d';
    const MUTED = '#7a7a7a';

    ctx.clearRect(0, 0, w, h);

    // 1. Fondo marfil sobrio
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, w, h);

    // 2. Doble marco elegante (azul marino + filete dorado)
    ctx.strokeStyle = NAVY;
    ctx.lineWidth = 3;
    ctx.strokeRect(38, 38, w - 76, h - 76);

    ctx.strokeStyle = GOLD;
    ctx.lineWidth = 1;
    ctx.strokeRect(50, 50, w - 100, h - 100);

    // 3. Adornos dorados en las esquinas
    const br = 26;
    ctx.strokeStyle = GOLD;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(50, 50 + br); ctx.lineTo(50, 50); ctx.lineTo(50 + br, 50); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(w - 50 - br, 50); ctx.lineTo(w - 50, 50); ctx.lineTo(w - 50, 50 + br); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(50, h - 50 - br); ctx.lineTo(50, h - 50); ctx.lineTo(50 + br, h - 50); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(w - 50 - br, h - 50); ctx.lineTo(w - 50, h - 50); ctx.lineTo(w - 50, h - 50 - br); ctx.stroke();

    // 4. Logotipo institucional
    if (this.logoImg) {
      const maxLogoW = 360;
      const maxLogoH = 92;
      const natW = this.logoImg.naturalWidth || maxLogoW;
      const natH = this.logoImg.naturalHeight || maxLogoH;
      const scale = Math.min(maxLogoW / natW, maxLogoH / natH);
      const dw = natW * scale;
      const dh = natH * scale;
      const dx = (w - dw) / 2;
      const dy = 62 + (maxLogoH - dh) / 2;
      ctx.drawImage(this.logoImg, dx, dy, dw, dh);
    } else {
      ctx.textBaseline = 'middle';
      ctx.fillStyle = NAVY;
      ctx.font = 'bold 30px ' + SERIF;
      ctx.textAlign = 'center';
      ctx.fillText('TRABAJO CIENTÍFICO', w / 2, 108);
    }

    // 5. Línea divisora superior con rombo dorado
    ctx.textBaseline = 'alphabetic';
    const dY = 180;
    ctx.strokeStyle = GOLD;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(w / 2 - 250, dY); ctx.lineTo(w / 2 - 12, dY); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(w / 2 + 12, dY); ctx.lineTo(w / 2 + 250, dY); ctx.stroke();

    ctx.save();
    ctx.translate(w / 2, dY);
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = GOLD;
    ctx.fillRect(-4, -4, 8, 8);
    ctx.restore();

    // 6. Texto: CERTIFICADO DE ASISTENCIA
    ctx.fillStyle = NAVY;
    ctx.font = '600 17px ' + SERIF;
    ctx.textAlign = 'center';
    ctx.fillText('C E R T I F I C A D O   D E   A S I S T E N C I A', w / 2, 222);

    // 7. Texto: OTORGADO A
    ctx.fillStyle = MUTED;
    ctx.font = '600 13px ' + FONT;
    ctx.fillText('O T O R G A D O   A', w / 2, 266);

    // 8. Nombre del participante (serif, azul marino)
    let nameSize = 50;
    ctx.font = 'bold ' + nameSize + 'px ' + SERIF;
    while (ctx.measureText(name).width > w - 240 && nameSize > 26) {
      nameSize -= 2;
      ctx.font = 'bold ' + nameSize + 'px ' + SERIF;
    }
    const nameY = 330;
    ctx.fillStyle = NAVY;
    ctx.fillText(name, w / 2, nameY);

    // Subrayado dorado sobrio para el nombre
    const nameW = ctx.measureText(name).width;
    ctx.strokeStyle = GOLD;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(w / 2 - nameW / 2 - 25, nameY + 14);
    ctx.lineTo(w / 2 + nameW / 2 + 25, nameY + 14);
    ctx.stroke();

    // 9. Texto: por su asistencia al taller
    ctx.fillStyle = INK;
    ctx.font = 'italic 17px ' + SERIF;
    ctx.fillText('por su asistencia al taller gratuito de', w / 2, 398);

    // 10. TÍTULO DEL TALLER
    const eventTitle = "AI para la Investigación Científica";
    let titleSize = 34;
    ctx.font = 'bold ' + titleSize + 'px ' + SERIF;
    while (ctx.measureText(eventTitle).width > w - 220 && titleSize > 24) {
      titleSize -= 2;
      ctx.font = 'bold ' + titleSize + 'px ' + SERIF;
    }
    ctx.fillStyle = NAVY;
    ctx.fillText(eventTitle, w / 2, 458);

    // 11. Duración: texto sobrio con filetes dorados
    const badgeText = '1 hora';
    ctx.font = '600 15px ' + FONT;
    ctx.fillStyle = GOLD;
    ctx.textAlign = 'center';
    ctx.fillText(badgeText, w / 2, 512);
    const badgeTextW = ctx.measureText(badgeText).width;
    ctx.strokeStyle = GOLD;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(w / 2 - badgeTextW / 2 - 40, 507); ctx.lineTo(w / 2 - badgeTextW / 2 - 15, 507); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(w / 2 + badgeTextW / 2 + 15, 507); ctx.lineTo(w / 2 + badgeTextW / 2 + 40, 507); ctx.stroke();

    // 11b. Fecha de realización del taller
    ctx.fillStyle = MUTED;
    ctx.font = 'italic 15px ' + SERIF;
    ctx.fillText('Taller realizado el 28 de julio de 2026', w / 2, 560);

    // 12. Firmas al pie (Izquierda y Derecha)
    const sigY = 662;
    const leftCx = 260;
    const rightCx = w - 260;
    const lineHalf = 110;

    // Líneas de firma
    ctx.strokeStyle = 'rgba(28, 43, 74, 0.35)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(leftCx - lineHalf, sigY); ctx.lineTo(leftCx + lineHalf, sigY); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(rightCx - lineHalf, sigY); ctx.lineTo(rightCx + lineHalf, sigY); ctx.stroke();

    ctx.textAlign = 'center';

    // Firma Izquierda — Oscar Ivan Vargas Pineda
    ctx.fillStyle = NAVY;
    ctx.font = 'italic 26px "Segoe Script", "Brush Script MT", cursive';
    ctx.fillText('Oscar I. Vargas', leftCx, sigY - 8);
    ctx.fillStyle = NAVY;
    ctx.font = 'bold 14px ' + SERIF;
    ctx.fillText('Oscar Ivan Vargas Pineda', leftCx, sigY + 22);
    ctx.fillStyle = MUTED;
    ctx.font = '11px ' + FONT;
    ctx.fillText('CEO  ·  Trabajo Científico', leftCx, sigY + 38);

    // Firma Derecha — Lali Valentina Pedroza
    ctx.fillStyle = NAVY;
    ctx.font = 'italic 26px "Segoe Script", "Brush Script MT", cursive';
    ctx.fillText('Lali V. Pedroza', rightCx, sigY - 8);
    ctx.fillStyle = NAVY;
    ctx.font = 'bold 14px ' + SERIF;
    ctx.fillText('Lali Valentina Pedroza', rightCx, sigY + 22);
    ctx.fillStyle = MUTED;
    ctx.font = '11px ' + FONT;
    ctx.fillText('Gestora Educativa  ·  Trabajo Científico', rightCx, sigY + 38);

    // 13. Fecha de emisión al centro inferior
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                   'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const hoy = new Date();
    const issueDate = `Emitido el ${hoy.getDate()} de ${meses[hoy.getMonth()]} de ${hoy.getFullYear()}`;
    ctx.fillStyle = MUTED;
    ctx.font = '11px ' + FONT;
    ctx.fillText(issueDate.toUpperCase(), w / 2, h - 62);
  }

  // Utilidad de rectángulo redondeado
  roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  // --- Descarga como PDF ---
  async downloadPDF() {
    if (!this.currentAttendee) return;
    this.downloadPdfBtn.disabled = true;
    this.downloadPdfBtn.textContent = '⏳ Generando PDF...';

    try {
      // Cargar jsPDF si no estuviera disponible globalmente
      let jsPDFClass = window.jspdf ? window.jspdf.jsPDF : null;
      if (!jsPDFClass) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('No se pudo cargar la librería jsPDF'));
          document.head.appendChild(script);
        });
        jsPDFClass = window.jspdf.jsPDF;
      }

      // Convertir Canvas a Imagen JPEG de alta calidad
      const imgData = this.canvas.toDataURL('image/jpeg', 0.95);
      const pdf = new jsPDFClass({
        orientation: 'landscape',
        unit: 'pt',
        format: [1200, 800],
        // El PDF se abre sin contraseña, pero editarlo requiere la contraseña de propietario.
        encryption: {
          userPassword: '',
          ownerPassword: '0603',
          userPermissions: ['print', 'copy']
        }
      });
      pdf.addImage(imgData, 'JPEG', 0, 0, 1200, 800, undefined, 'FAST');

      const safeName = this.currentAttendee.replace(/\s+/g, '_');
      pdf.save(`Certificado_Asistencia_${safeName}_AI_Investigacion.pdf`);
    } catch (err) {
      console.error('Error al generar PDF:', err);
      alert('Ocurrió un error al generar el archivo PDF: ' + err.message);
    } finally {
      this.downloadPdfBtn.disabled = false;
      this.downloadPdfBtn.textContent = '📄 Descargar PDF';
    }
  }

  // --- Gestión de Mensajes de Estado ---
  showStatus(type, message) {
    this.statusContainer.style.display = 'block';
    let content = '';

    if (type === 'loading') {
      content = `
        <div class="status-msg status-loading">
          <div class="spinner"></div>
          <span>${message}</span>
        </div>`;
    } else if (type === 'error') {
      content = `
        <div class="status-msg status-error">
          <span>⚠️</span>
          <span>${message}</span>
        </div>`;
    } else if (type === 'success') {
      content = `
        <div class="status-msg status-success">
          <span>✅</span>
          <span>${message}</span>
        </div>`;
    }
    this.statusContainer.innerHTML = content;
  }

  hideStatus() {
    this.statusContainer.style.display = 'none';
    this.statusContainer.innerHTML = '';
  }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new CertificateApp();
});
