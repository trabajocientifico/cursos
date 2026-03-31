/* ============================================
   Main Application Logic
   ============================================ */

const App = {
  // State
  state: {
    username: '',
    completedLessons: [],
    completedQuizzes: [],
    currentView: 'dashboard',
    currentModuleIndex: null,
    currentLessonIndex: null,
    // Gamification
    xp: 0,
    currentStreak: 0,
    bestStreak: 0,
    lastActiveDate: null,
    unlockedAchievements: [],
    dailyLessonsCount: 0,
    dailyLessonsDate: null,
    // Combo system
    comboMultiplier: 1,
    lastActionTimestamp: 0,
    // Easter eggs
    konamiUsed: false,
    logoSecretUsed: false,
    // Focus mode
    focusMinutesToday: 0,
    focusSessionsToday: 0,
    focusDate: null,
    totalFocusMinutes: 0,
    totalFocusSessions: 0,
  },

  STORAGE_KEY: 'tc_progress_' + (new URLSearchParams(window.location.search).get('curso') || 'excel-vida'),

  // XP Levels table
  LEVELS: [
    { level: 1, name: 'Novato', xp: 0, icon: '⚡' },
    { level: 2, name: 'Aprendiz', xp: 200, icon: '🔥' },
    { level: 3, name: 'Explorador', xp: 500, icon: '🧭' },
    { level: 4, name: 'Analista', xp: 900, icon: '📊' },
    { level: 5, name: 'Científico', xp: 1400, icon: '🔬' },
    { level: 6, name: 'Experto', xp: 2000, icon: '🧠' },
    { level: 7, name: 'Maestro', xp: 2800, icon: '👑' },
  ],

  // Achievements definitions
  ACHIEVEMENTS: [
    { id: 'first-lesson', name: 'Primer Paso', desc: 'Completa tu primera lección', icon: '🎯', xp: 75 },
    { id: 'first-quiz', name: 'Evaluado', desc: 'Aprueba tu primer quiz', icon: '✅', xp: 75 },
    { id: 'perfect-quiz', name: 'Perfeccionista', desc: 'Obtén 100% en un quiz', icon: '💎', xp: 75 },
    { id: 'module-complete', name: 'Módulo Maestro', desc: 'Completa un módulo entero', icon: '🏆', xp: 75 },
    { id: 'halfway', name: 'Medio Camino', desc: 'Completa el 50% del curso', icon: '🌗', xp: 75 },
    { id: 'all-lessons', name: 'Estudioso', desc: 'Completa todas las lecciones', icon: '📚', xp: 75 },
    { id: 'streak-3', name: 'En Racha', desc: 'Mantén 3 días seguidos de estudio', icon: '🔥', xp: 75 },
    { id: 'streak-7', name: 'Semana Perfecta', desc: 'Mantén 7 días seguidos de estudio', icon: '⭐', xp: 75 },
    { id: 'fast-learner', name: 'Veloz', desc: 'Completa 3 lecciones en un solo día', icon: '⚡', xp: 75 },
    { id: 'course-done', name: 'Graduado', desc: 'Completa todo el curso', icon: '🎓', xp: 75 },
    { id: 'focused', name: 'Enfocado', desc: 'Completa 3 sesiones Pomodoro', icon: '🍅', xp: 75 },
    { id: 'marathoner', name: 'Maratonista', desc: 'Completa 5 Pomodoros en un día', icon: '🏃', xp: 75 },
    { id: 'hacker', name: 'Hacker', desc: 'Descubre el código secreto', icon: '💻', xp: 75 },
    { id: 'curious', name: 'Curioso', desc: 'Descubre el easter egg del logo', icon: '🔍', xp: 75 },
  ],

  // Motivational messages
  MOTIVATIONAL_MESSAGES: [
    '💡 El 90% de los datos del mundo se crearon en los últimos 2 años.',
    '💡 Python es el lenguaje más usado en ciencia de datos.',
    '💡 Netflix ahorra $1B al año gracias a su sistema de recomendaciones basado en ML.',
    '💡 Un data scientist dedica el 80% de su tiempo a limpiar datos.',
    '💡 La visualización de datos existe desde el siglo XVIII.',
    '💡 El término "Machine Learning" fue acuñado por Arthur Samuel en 1959.',
    '💡 Cada minuto se suben 500 horas de video a YouTube.',
    '💡 Los modelos de IA pueden detectar cáncer con más precisión que radiólogos.',
    '💡 Pandas fue creado por Wes McKinney cuando trabajaba en finanzas.',
    '💡 El cerebro humano procesa 11 millones de bits por segundo.',
    '💡 Google procesa más de 8.5 mil millones de búsquedas al día.',
    '💡 La regresión lineal fue inventada hace más de 200 años.',
    '💡 Jupyter Notebook debe su nombre a Julia, Python y R.',
    '💡 El sesgo en los datos es uno de los mayores desafíos éticos en IA.',
    '💡 Sigue así — la constancia supera al talento.',
  ],

  // ---- Init ----
  init() {
    this.loadState();

    // Sincronizar con los datos ingresados en el portal (index.html)
    const portalName = localStorage.getItem('tc_user_name');
    if (portalName && !this.state.username) {
      this.state.username = portalName;
      this.saveState();
    }

    if (this.state.username) {
      this.showApp();
    } else {
      this.showWelcome();
    }

    this.bindEvents();
  },

  // ---- LocalStorage ----
  loadState() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.state = { ...this.state, ...parsed };
      }
    } catch (e) {
      console.warn('Could not load saved state');
    }
  },

  saveState() {
    try {
      const toSave = {
        username: this.state.username,
        completedLessons: this.state.completedLessons,
        completedQuizzes: this.state.completedQuizzes,
        xp: this.state.xp,
        currentStreak: this.state.currentStreak,
        bestStreak: this.state.bestStreak,
        lastActiveDate: this.state.lastActiveDate,
        unlockedAchievements: this.state.unlockedAchievements,
        dailyLessonsCount: this.state.dailyLessonsCount,
        dailyLessonsDate: this.state.dailyLessonsDate,
        konamiUsed: this.state.konamiUsed,
        logoSecretUsed: this.state.logoSecretUsed,
        totalFocusMinutes: this.state.totalFocusMinutes,
        totalFocusSessions: this.state.totalFocusSessions,
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(toSave));
    } catch (e) {
      console.warn('Could not save state');
    }
  },

  resetProgress() {
    if (!confirm('¿Estás seguro de que quieres reiniciar todo tu progreso? Esta acción no se puede deshacer.')) return;
    this.state.completedLessons = [];
    this.state.completedQuizzes = [];
    this.state.xp = 0;
    this.state.currentStreak = 0;
    this.state.bestStreak = 0;
    this.state.lastActiveDate = null;
    this.state.unlockedAchievements = [];
    this.state.dailyLessonsCount = 0;
    this.state.dailyLessonsDate = null;
    this.state.konamiUsed = false;
    this.state.logoSecretUsed = false;
    this.state.comboMultiplier = 1;
    this.state.lastActionTimestamp = 0;
    this.state.totalFocusMinutes = 0;
    this.state.totalFocusSessions = 0;
    this.state.focusMinutesToday = 0;
    this.state.focusSessionsToday = 0;
    this.state.focusDate = null;
    this.saveState();
    this.renderSidebar();
    this.renderDashboard();
    this.navigateTo('dashboard');
  },

  // ---- Welcome ----
  showWelcome() {
    document.getElementById('welcome-modal').classList.remove('hidden');
    document.getElementById('app').classList.add('hidden');
    const input = document.getElementById('student-name');
    const btn = document.getElementById('start-btn');

    input.addEventListener('input', () => {
      btn.disabled = input.value.trim().length === 0;
    });

    btn.addEventListener('click', () => {
      const name = input.value.trim();
      if (!name) return;
      this.state.username = name;
      this.saveState();
      document.getElementById('welcome-modal').classList.add('hidden');
      this.showApp();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && input.value.trim()) {
        btn.click();
      }
    });
  },

  // ---- App ----
  showApp() {
    document.getElementById('welcome-modal').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    this.validateStreak();
    this.renderSidebar();
    this.renderDashboard();
    this.navigateTo('dashboard');
  },

  // ---- Events ----
  bindEvents() {
    // Mobile menu
    document.getElementById('menu-toggle').addEventListener('click', () => this.toggleSidebar(true));
    document.getElementById('sidebar-close').addEventListener('click', () => this.toggleSidebar(false));
    document.getElementById('sidebar-overlay').addEventListener('click', () => this.toggleSidebar(false));

    // Reset progress
    document.getElementById('reset-progress-btn').addEventListener('click', () => this.resetProgress());

    // Achievements
    document.getElementById('btn-achievements').addEventListener('click', () => {
      this.navigateTo('achievements');
    });
    document.getElementById('btn-back-achievements').addEventListener('click', () => {
      this.navigateTo('dashboard');
    });

    // Lesson tabs
    document.querySelectorAll('.lesson-tabs .tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.lesson-tabs .tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
      });
    });

    // Lesson actions (only static handlers here — dynamic onclick set in renderLessonActions)
    document.getElementById('btn-complete-lesson').addEventListener('click', () => this.completeCurrentLesson());
    document.getElementById('btn-back-lesson').addEventListener('click', () => this.navigateTo('dashboard'));
    document.getElementById('btn-back-quiz').addEventListener('click', () => this.navigateTo('dashboard'));

    // Quiz actions
    document.getElementById('btn-submit-quiz').addEventListener('click', () => QuizEngine.submit());
    document.getElementById('btn-retry-quiz').addEventListener('click', () => QuizEngine.retry());
    document.getElementById('btn-next-module').addEventListener('click', () => this.goToNextModule());

    // Certificate
    document.getElementById('cert-close').addEventListener('click', () => {
      document.getElementById('cert-modal').classList.add('hidden');
    });
    document.getElementById('cert-download').addEventListener('click', () => this.downloadCertificate());

    // Focus Mode
    document.getElementById('btn-focus-mode').addEventListener('click', () => this.startFocusMode());
    document.getElementById('focus-exit').addEventListener('click', () => this.stopFocusMode());
    document.getElementById('focus-sound-toggle').addEventListener('click', () => this.toggleAmbientSound());
    document.getElementById('focus-another').addEventListener('click', () => {
      document.getElementById('focus-complete-modal').classList.add('hidden');
      this.startFocusMode();
    });
    document.getElementById('focus-done').addEventListener('click', () => {
      document.getElementById('focus-complete-modal').classList.add('hidden');
    });

    // Memory game close
    document.getElementById('memory-close').addEventListener('click', () => {
      document.getElementById('memory-modal').classList.add('hidden');
    });

    // Easter eggs
    this.initKonamiCode();
    this.initLogoSecret();
  },

  toggleSidebar(open) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (open) {
      sidebar.classList.add('open');
      overlay.classList.add('active');
    } else {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    }
  },

  // ---- Navigation ----
  navigateTo(view, data) {
    this.state.currentView = view;
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

    if (view === 'dashboard') {
      document.getElementById('view-dashboard').classList.add('active');
      this.renderDashboard();
    } else if (view === 'lesson') {
      document.getElementById('view-lesson').classList.add('active');
      this.renderLesson(data.moduleIndex, data.lessonIndex);
    } else if (view === 'quiz') {
      document.getElementById('view-quiz').classList.add('active');
      QuizEngine.render(data.moduleIndex);
    } else if (view === 'achievements') {
      document.getElementById('view-achievements').classList.add('active');
      this.renderAchievementsPanel();
    }

    this.toggleSidebar(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  // ---- Progress Helpers ----
  isLessonCompleted(lessonId) {
    return this.state.completedLessons.includes(lessonId);
  },

  isQuizCompleted(quizId) {
    return this.state.completedQuizzes.includes(quizId);
  },

  isModuleUnlocked(moduleIndex) {
    return true;
  },

  isLessonUnlocked(moduleIndex, lessonIndex) {
    return true;
  },

  isQuizUnlocked(moduleIndex) {
    return true;
  },

  getModuleProgress(moduleIndex) {
    const mod = COURSE_DATA.modules[moduleIndex];
    const totalItems = mod.lessons.length + 1; // lessons + quiz
    let completed = mod.lessons.filter(l => this.isLessonCompleted(l.id)).length;
    if (this.isQuizCompleted(mod.quiz.id)) completed++;
    return Math.round((completed / totalItems) * 100);
  },

  getGlobalProgress() {
    let total = 0;
    let completed = 0;
    COURSE_DATA.modules.forEach(mod => {
      total += mod.lessons.length + 1;
      completed += mod.lessons.filter(l => this.isLessonCompleted(l.id)).length;
      if (this.isQuizCompleted(mod.quiz.id)) completed++;
    });
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  },

  getTotalCompletedLessons() {
    return this.state.completedLessons.length;
  },

  getTotalLessons() {
    return COURSE_DATA.modules.reduce((sum, m) => sum + m.lessons.length, 0);
  },

  getCompletedQuizzesCount() {
    return this.state.completedQuizzes.length;
  },

  isCourseDone() {
    return COURSE_DATA.modules.every((mod, i) => {
      const lessonsDone = mod.lessons.every(l => this.isLessonCompleted(l.id));
      const quizDone = this.isQuizCompleted(mod.quiz.id);
      return lessonsDone && quizDone;
    });
  },

  // ---- Complete Actions ----
  completeCurrentLesson() {
    const mod = COURSE_DATA.modules[this.state.currentModuleIndex];
    const lesson = mod.lessons[this.state.currentLessonIndex];
    const wasAlreadyDone = this.isLessonCompleted(lesson.id);

    if (!wasAlreadyDone) {
      this.state.completedLessons.push(lesson.id);

      // Combo system
      this.updateCombo();

      // Gamification
      this.awardXP(50, 'Lección completada');
      this.checkStreak();
      this.trackDailyLesson();
      this.saveState();
      this.checkAchievements();

      // Motivational message (30% chance)
      this.showMotivationalMessage();

      // Milestone 50% check
      this.checkMilestone50();

      // Confetti for lesson completion
      if (typeof Confetti !== 'undefined') {
        Confetti.lessonComplete();
      }
    }

    this.renderSidebar();
    this.renderLessonActions();
    this.updateGlobalProgress();
  },

  completeQuiz(moduleIndex, score) {
    const mod = COURSE_DATA.modules[moduleIndex];
    const wasAlreadyDone = this.isQuizCompleted(mod.quiz.id);

    if (!wasAlreadyDone) {
      this.state.completedQuizzes.push(mod.quiz.id);

      // Combo system
      this.updateCombo();

      // Gamification — XP for quiz
      this.awardXP(100, 'Quiz aprobado');

      // Bonus for perfect quiz
      if (score === 100) {
        setTimeout(() => this.awardXP(50, 'Quiz perfecto — Bonus'), 600);
      }

      this.checkStreak();
      this.saveState();

      // Check if entire module just got completed
      const moduleProgress = this.getModuleProgress(moduleIndex);
      if (moduleProgress === 100) {
        setTimeout(() => this.awardXP(150, 'Módulo completado — Bonus'), 800);
        if (typeof Confetti !== 'undefined') {
          Confetti.moduleComplete();
        }
      } else {
        if (typeof Confetti !== 'undefined') {
          Confetti.quizPass();
        }
      }

      // Check achievements after XP is awarded
      setTimeout(() => this.checkAchievements({ perfectQuiz: score === 100 }), 400);

      // Motivational message + milestone
      this.showMotivationalMessage();
      this.checkMilestone50();
    }

    this.renderSidebar();
    this.updateGlobalProgress();

    // Check if course is complete
    if (this.isCourseDone()) {
      setTimeout(() => {
        if (typeof Confetti !== 'undefined') {
          Confetti.courseComplete();
        }
        this.showCertificate();
      }, 800);
    }
  },

  // ---- Render Sidebar ----
  renderSidebar() {
    // Username
    document.getElementById('sidebar-username').textContent = this.state.username;
    document.getElementById('user-avatar').textContent = this.state.username.charAt(0).toUpperCase();

    // Level & XP
    const levelInfo = this.getLevel(this.state.xp);
    const levelProgress = this.getLevelProgress();
    document.getElementById('sidebar-level-label').textContent = levelInfo.name;
    document.getElementById('xp-level-icon').textContent = levelInfo.icon;
    document.getElementById('xp-level-name').textContent = `Nivel ${levelInfo.level} — ${levelInfo.name}`;
    document.getElementById('xp-amount').textContent = `${this.state.xp} XP`;
    document.getElementById('xp-bar-fill').style.width = `${levelProgress.percent}%`;
    document.getElementById('xp-next-label').textContent =
      levelProgress.isMax
        ? '¡Nivel máximo alcanzado!'
        : `${this.state.xp - levelProgress.currentLevelXp} / ${levelProgress.nextLevelXp - levelProgress.currentLevelXp} XP para siguiente nivel`;

    // Streak
    const streakEl = document.getElementById('streak-count');
    const fireEl = document.getElementById('streak-fire');
    streakEl.textContent = this.state.currentStreak;
    if (this.state.currentStreak >= 7) {
      streakEl.classList.add('high');
    } else {
      streakEl.classList.remove('high');
    }
    if (this.state.currentStreak >= 3) {
      fireEl.classList.add('active');
    } else {
      fireEl.classList.remove('active');
    }

    // Achievements count
    const unlockedCount = this.state.unlockedAchievements.length;
    document.getElementById('achievements-count-badge').textContent = `${unlockedCount}/${this.ACHIEVEMENTS.length}`;

    // Global progress
    this.updateGlobalProgress();

    // Modules nav
    const nav = document.getElementById('sidebar-nav');
    nav.innerHTML = '';

    COURSE_DATA.modules.forEach((mod, mi) => {
      const unlocked = this.isModuleUnlocked(mi);
      const progress = this.getModuleProgress(mi);
      const isComplete = progress === 100;

      const moduleEl = document.createElement('div');
      moduleEl.className = `nav-module${unlocked ? '' : ' locked'}`;

      // Module button
      const modBtn = document.createElement('button');
      modBtn.className = `nav-module-btn${!unlocked ? ' locked' : ''}${isComplete ? ' completed' : ''}`;
      modBtn.innerHTML = `
        <span class="mod-icon">${mod.icon}</span>
        <span class="mod-title">${mod.title}</span>
        <span class="mod-chevron">▶</span>
      `;

      if (unlocked) {
        modBtn.addEventListener('click', () => {
          moduleEl.classList.toggle('open');
        });
      }

      moduleEl.appendChild(modBtn);

      // Lessons list
      const lessonsEl = document.createElement('div');
      lessonsEl.className = 'nav-lessons';

      mod.lessons.forEach((lesson, li) => {
        const lessonUnlocked = this.isLessonUnlocked(mi, li);
        const lessonDone = this.isLessonCompleted(lesson.id);

        const lessonBtn = document.createElement('button');
        lessonBtn.className = `nav-lesson-btn${lessonDone ? ' completed' : ''}${!lessonUnlocked ? ' locked' : ''}`;
        lessonBtn.innerHTML = `
          <span class="lesson-status">${lessonDone ? '✓' : !lessonUnlocked ? '🔒' : ''}</span>
          <span>${lesson.title}</span>
        `;

        if (lessonUnlocked) {
          lessonBtn.addEventListener('click', () => {
            this.navigateTo('lesson', { moduleIndex: mi, lessonIndex: li });
          });
        }

        lessonsEl.appendChild(lessonBtn);
      });

      // Quiz button
      const quizUnlocked = this.isQuizUnlocked(mi);
      const quizDone = this.isQuizCompleted(mod.quiz.id);

      const quizBtn = document.createElement('button');
      quizBtn.className = `nav-quiz-btn${quizDone ? ' completed' : ''}${!quizUnlocked ? ' locked' : ''}`;
      quizBtn.innerHTML = `
        <span class="quiz-icon">${quizDone ? '✓' : !quizUnlocked ? '🔒' : '?'}</span>
        <span>Quiz</span>
      `;

      if (quizUnlocked && !quizDone) {
        quizBtn.addEventListener('click', () => {
          this.navigateTo('quiz', { moduleIndex: mi });
        });
      } else if (quizDone) {
        quizBtn.addEventListener('click', () => {
          this.navigateTo('quiz', { moduleIndex: mi });
        });
      }

      lessonsEl.appendChild(quizBtn);
      moduleEl.appendChild(lessonsEl);
      nav.appendChild(moduleEl);
    });
  },

  updateGlobalProgress() {
    const pct = this.getGlobalProgress();
    document.getElementById('global-progress-pct').textContent = `${pct}%`;
    document.getElementById('global-progress-bar').style.width = `${pct}%`;
    document.getElementById('header-progress-text').textContent = `${pct}%`;
  },

  // ---- Render Dashboard (Skill Tree) ----
  renderDashboard() {
    document.getElementById('dashboard-username').textContent = this.state.username;

    // Animate stat count-ups
    this.animateCountUp('stat-completed', this.getTotalCompletedLessons());
    this.animateCountUp('stat-total', this.getTotalLessons());
    this.animateCountUp('stat-quizzes', this.getCompletedQuizzesCount());
    this.animateCountUp('stat-xp', this.state.xp);
    this.animateCountUp('stat-streak', this.state.currentStreak);

    const tree = document.getElementById('skill-tree');
    tree.innerHTML = '';

    // Calculate total progress for the path fill
    const globalProgress = this.getGlobalProgress();

    // Central vertical path
    const pathEl = document.createElement('div');
    pathEl.className = 'skill-tree-path';
    pathEl.innerHTML = `<div class="skill-tree-path-fill" style="height: ${globalProgress}%"></div>`;
    tree.appendChild(pathEl);

    // Find first active module (first unlocked not-complete)
    const firstActiveIndex = COURSE_DATA.modules.findIndex((mod, mi) => {
      return this.isModuleUnlocked(mi) && this.getModuleProgress(mi) < 100;
    });

    // Render module nodes
    COURSE_DATA.modules.forEach((mod, mi) => {
      const unlocked = this.isModuleUnlocked(mi);
      const progress = this.getModuleProgress(mi);
      const isComplete = progress === 100;
      const isActive = mi === firstActiveIndex;
      const side = mi % 2 === 0 ? 'left' : 'right';

      // State class
      let stateClass = 'skill-node--locked';
      if (isComplete) stateClass = 'skill-node--completed';
      else if (isActive) stateClass = 'skill-node--unlocked skill-node--active';
      else if (unlocked) stateClass = 'skill-node--unlocked';

      // Status text
      let statusText = '🔒 Bloqueado';
      if (isComplete) statusText = '✓ Completado';
      else if (isActive) statusText = `En progreso — ${progress}%`;
      else if (unlocked) statusText = `${progress}% completado`;

      // Progress ring calculations (circumference of circle with r=27)
      const circumference = 2 * Math.PI * 27;
      const dashOffset = circumference - (progress / 100) * circumference;

      const node = document.createElement('div');
      node.className = `skill-node skill-node--${side} ${stateClass}`;
      node.dataset.module = mi;

      node.innerHTML = `
        <div class="skill-node-connector"></div>
        <div class="skill-node-card btn-ripple">
          <div class="skill-node-circle">
            <span class="skill-node-icon">${mod.icon}</span>
            <svg class="skill-node-progress-ring" viewBox="0 0 62 62">
              <circle class="ring-bg" cx="31" cy="31" r="27"/>
              <circle class="ring-fill" cx="31" cy="31" r="27"
                stroke-dasharray="${circumference}"
                stroke-dashoffset="${isComplete ? 0 : dashOffset}"/>
            </svg>
            ${isComplete ? '<div class="skill-node-check">✓</div>' : ''}
            ${!unlocked ? '<div class="skill-node-lock">🔒</div>' : ''}
          </div>
          <div class="skill-node-info">
            <div class="skill-node-number">Módulo ${mi + 1}</div>
            <div class="skill-node-title">${mod.title}</div>
            <div class="skill-node-status">${statusText}</div>
          </div>
        </div>
      `;

      // Click handler
      if (unlocked) {
        const card = node.querySelector('.skill-node-card');
        card.addEventListener('click', (e) => {
          this.createRipple(e, card);
          const firstIncompleteLessonIndex = mod.lessons.findIndex(l => !this.isLessonCompleted(l.id));
          if (firstIncompleteLessonIndex !== -1) {
            this.navigateTo('lesson', { moduleIndex: mi, lessonIndex: firstIncompleteLessonIndex });
          } else if (!this.isQuizCompleted(mod.quiz.id)) {
            this.navigateTo('quiz', { moduleIndex: mi });
          } else {
            this.navigateTo('lesson', { moduleIndex: mi, lessonIndex: 0 });
          }
        });
      }

      // Dot on center path at node height
      const dot = document.createElement('div');
      let dotClass = 'skill-tree-dot';
      if (isComplete) dotClass += ' skill-tree-dot--completed';
      else if (unlocked) dotClass += ' skill-tree-dot--unlocked';
      dot.className = dotClass;

      tree.appendChild(node);
      tree.appendChild(dot);

      // Position dots relative to nodes after render
      requestAnimationFrame(() => {
        const nodeRect = node.getBoundingClientRect();
        const treeRect = tree.getBoundingClientRect();
        const nodeCenter = nodeRect.top - treeRect.top + nodeRect.height / 2;
        dot.style.top = `${nodeCenter}px`;
      });
    });

    // Certificate node if course is done
    if (this.isCourseDone()) {
      const certNode = document.createElement('div');
      const side = COURSE_DATA.modules.length % 2 === 0 ? 'left' : 'right';
      certNode.className = `skill-node skill-node--${side} skill-node--completed skill-node--cert`;
      certNode.innerHTML = `
        <div class="skill-node-connector" style="background:linear-gradient(90deg, #ffd700, #ff8c00);box-shadow:0 0 8px rgba(255,215,0,0.3);"></div>
        <div class="skill-node-card btn-ripple">
          <div class="skill-node-circle" style="border-color:#ffd700;background:rgba(255,215,0,0.08);box-shadow:0 0 15px rgba(255,215,0,0.15);">
            <span class="skill-node-icon">🎓</span>
          </div>
          <div class="skill-node-info">
            <div class="skill-node-number" style="color:#ffd700;">Completado</div>
            <div class="skill-node-title">Tu Certificado</div>
            <div class="skill-node-status" style="color:#ffd700;">Descargar certificado →</div>
          </div>
        </div>
      `;
      const certCard = certNode.querySelector('.skill-node-card');
      certCard.addEventListener('click', (e) => {
        this.createRipple(e, certCard);
        this.showCertificate();
      });

      const certDot = document.createElement('div');
      certDot.className = 'skill-tree-dot skill-tree-dot--completed';
      certDot.style.background = '#ffd700';
      certDot.style.borderColor = '#ffd700';
      certDot.style.boxShadow = '0 0 10px rgba(255,215,0,0.4)';

      tree.appendChild(certNode);
      tree.appendChild(certDot);

      requestAnimationFrame(() => {
        const nodeRect = certNode.getBoundingClientRect();
        const treeRect = tree.getBoundingClientRect();
        const nodeCenter = nodeRect.top - treeRect.top + nodeRect.height / 2;
        certDot.style.top = `${nodeCenter}px`;
      });
    }
  },

  // ---- Count-up Animation ----
  animateCountUp(elementId, targetValue) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const duration = 800;
    const startTime = performance.now();
    const startValue = 0;

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startValue + (targetValue - startValue) * eased);
      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = targetValue;
        el.classList.add('pop');
        setTimeout(() => el.classList.remove('pop'), 400);
      }
    };

    requestAnimationFrame(update);
  },

  // ---- Ripple Effect ----
  createRipple(event, element) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  },

  // ---- Render Lesson ----
  renderLesson(moduleIndex, lessonIndex) {
    // Validate bounds
    const mod = COURSE_DATA.modules[moduleIndex];
    if (!mod || !mod.lessons[lessonIndex]) {
      this.navigateTo('dashboard');
      return;
    }

    this.state.currentModuleIndex = moduleIndex;
    this.state.currentLessonIndex = lessonIndex;

    const lesson = mod.lessons[lessonIndex];

    // Badge & title
    document.getElementById('lesson-badge').textContent = `Módulo ${moduleIndex + 1} — Lección ${lessonIndex + 1}`;
    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-duration').innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
      ${lesson.duration}
    `;

    // Video — always rebuild to avoid stale iframe references
    const videoContainer = document.getElementById('video-container');
    if (lesson.videoId && lesson.videoId !== 'VIDEO_ID_PLACEHOLDER') {
      const youtubeUrl = lesson.youtubeUrl || `https://www.youtube.com/watch?v=${lesson.videoId}`;
      if (lesson.noEmbed) {
        // Video doesn't allow embedding — show thumbnail with link to YouTube
        videoContainer.innerHTML = `
          <a href="${youtubeUrl}" target="_blank" rel="noopener noreferrer" style="display:block;position:relative;padding-bottom:56.25%;background:#000;border-radius:12px;overflow:hidden;text-decoration:none;">
            <img src="https://img.youtube.com/vi/${lesson.videoId}/hqdefault.jpg" alt="${lesson.title}" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;opacity:0.7;">
            <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;">
              <div style="width:68px;height:48px;background:red;border-radius:12px;display:flex;align-items:center;justify-content:center;margin:0 auto 8px;">
                <div style="width:0;height:0;border-left:18px solid #fff;border-top:10px solid transparent;border-bottom:10px solid transparent;margin-left:4px;"></div>
              </div>
              <span style="color:#fff;font-size:0.95rem;font-weight:600;text-shadow:0 1px 4px rgba(0,0,0,0.7);">Ver en YouTube</span>
            </div>
          </a>
        `;
      } else {
        videoContainer.innerHTML = `
          <div class="video-wrapper">
            <iframe src="https://www.youtube-nocookie.com/embed/${lesson.videoId}?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        `;
      }
    } else {
      videoContainer.innerHTML = `
        <div class="video-wrapper" style="display:flex;align-items:center;justify-content:center;padding-bottom:0;height:300px;">
          <div style="text-align:center;color:var(--text-muted);">
            <div style="font-size:3rem;margin-bottom:12px;">▶</div>
            <p>Video pendiente de configurar</p>
            <p style="font-size:0.8rem;margin-top:4px;">Reemplaza VIDEO_ID_PLACEHOLDER en data.js con el ID de tu video de YouTube</p>
          </div>
        </div>
      `;
    }

    // Reading content - convert simple markdown-like text to HTML
    const readingHTML = this.formatReading(lesson.reading);
    document.getElementById('reading-content').innerHTML = readingHTML;

    // Resources
    const resourcesList = document.getElementById('resources-list');
    resourcesList.innerHTML = '';
    if (lesson.resources && lesson.resources.length > 0) {
      lesson.resources.forEach(res => {
        const iconMap = {
          notebook: { class: 'notebook', icon: '📓' },
          download: { class: 'download', icon: '⬇' },
          link: { class: 'link', icon: '🔗' },
          article: { class: 'article', icon: '📄' },
          github: { class: 'github', icon: '💻' },
        };
        const iconInfo = iconMap[res.type] || iconMap.link;

        const el = document.createElement('a');
        el.className = 'resource-item';
        el.href = res.url;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
        el.innerHTML = `
          <div class="resource-icon ${iconInfo.class}">${iconInfo.icon}</div>
          <div class="resource-info">
            <div class="resource-title">${res.title}</div>
            <div class="resource-type">${res.type}</div>
          </div>
          <span class="resource-arrow">→</span>
        `;
        resourcesList.appendChild(el);
      });
    }

    // Reset tabs to reading
    document.querySelectorAll('.lesson-tabs .tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    document.querySelector('.lesson-tabs .tab[data-tab="reading"]').classList.add('active');
    document.getElementById('tab-reading').classList.add('active');

    // Render actions
    this.renderLessonActions();
  },

  renderLessonActions() {
    const mod = COURSE_DATA.modules[this.state.currentModuleIndex];
    const lesson = mod.lessons[this.state.currentLessonIndex];
    const isDone = this.isLessonCompleted(lesson.id);

    const completeBtn = document.getElementById('btn-complete-lesson');
    if (isDone) {
      completeBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        Completada
      `;
      completeBtn.classList.add('completed-state');
      completeBtn.disabled = true;
    } else {
      completeBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        Marcar como completada
      `;
      completeBtn.classList.remove('completed-state');
      completeBtn.disabled = false;
    }

    // Next lesson button — capture current indices to avoid stale state reads
    const nextBtn = document.getElementById('btn-next-lesson');
    const mi = this.state.currentModuleIndex;
    const li = this.state.currentLessonIndex;
    const isLastLesson = li === mod.lessons.length - 1;

    // Always clear previous handler
    nextBtn.onclick = null;
    nextBtn.classList.add('hidden');

    if (isLastLesson) {
      // Check if quiz is available
      if (this.isQuizUnlocked(mi)) {
        nextBtn.innerHTML = `
          Ir al Quiz
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
        `;
        nextBtn.classList.remove('hidden');
        nextBtn.onclick = () => this.navigateTo('quiz', { moduleIndex: mi });
      }
    } else if (isDone) {
      // Only show next if current lesson is completed
      const nextLi = li + 1;
      if (nextLi < mod.lessons.length) {
        nextBtn.innerHTML = `
          Siguiente lección
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
        `;
        nextBtn.classList.remove('hidden');
        nextBtn.onclick = () => this.navigateTo('lesson', { moduleIndex: mi, lessonIndex: nextLi });
      }
    }
  },

  formatReading(text) {
    if (!text) return '';
    // Convert **bold** to <strong>
    let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Convert lines starting with - to list items
    const lines = html.split('\n');
    let result = '';
    let inList = false;

    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('- ')) {
        if (!inList) {
          result += '<ul>';
          inList = true;
        }
        result += `<li>${trimmed.substring(2)}</li>`;
      } else {
        if (inList) {
          result += '</ul>';
          inList = false;
        }
        if (trimmed === '') {
          // skip empty lines
        } else {
          result += `<p>${trimmed}</p>`;
        }
      }
    });

    if (inList) result += '</ul>';
    return result;
  },

  // ---- Navigation helpers ----
  goToNextModule() {
    const nextIndex = this.state.currentModuleIndex + 1;
    if (nextIndex < COURSE_DATA.modules.length) {
      if (this.isModuleUnlocked(nextIndex)) {
        this.navigateTo('lesson', { moduleIndex: nextIndex, lessonIndex: 0 });
      } else {
        this.navigateTo('dashboard');
      }
    } else {
      // Course complete
      this.navigateTo('dashboard');
    }
  },

  // ---- Certificate ----
  showCertificate() {
    document.getElementById('cert-modal').classList.remove('hidden');
    this.renderCertificate();
  },

  renderCertificate() {
    const canvas = document.getElementById('cert-canvas');
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    // Background
    ctx.fillStyle = '#0b0d17';
    ctx.fillRect(0, 0, w, h);

    // Border gradient
    const borderGrad = ctx.createLinearGradient(0, 0, w, h);
    borderGrad.addColorStop(0, '#00d4ff');
    borderGrad.addColorStop(1, '#7b2ff7');
    ctx.strokeStyle = borderGrad;
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, w - 60, h - 60);

    // Inner border
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.strokeRect(45, 45, w - 90, h - 90);

    // Corner decorations
    const cornerSize = 30;
    ctx.strokeStyle = borderGrad;
    ctx.lineWidth = 2;
    // Top-left
    ctx.beginPath(); ctx.moveTo(50, 80); ctx.lineTo(50, 50); ctx.lineTo(80, 50); ctx.stroke();
    // Top-right
    ctx.beginPath(); ctx.moveTo(w - 80, 50); ctx.lineTo(w - 50, 50); ctx.lineTo(w - 50, 80); ctx.stroke();
    // Bottom-left
    ctx.beginPath(); ctx.moveTo(50, h - 80); ctx.lineTo(50, h - 50); ctx.lineTo(80, h - 50); ctx.stroke();
    // Bottom-right
    ctx.beginPath(); ctx.moveTo(w - 80, h - 50); ctx.lineTo(w - 50, h - 50); ctx.lineTo(w - 50, h - 80); ctx.stroke();

    // Logo
    ctx.fillStyle = '#8b8fa3';
    ctx.font = '16px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Trabajo Científico', w / 2, 110);

    // Title
    ctx.fillStyle = '#e4e4e7';
    ctx.font = '14px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '4px';
    ctx.fillText('CERTIFICADO DE FINALIZACIÓN', w / 2, 180);

    // Line
    const lineGrad = ctx.createLinearGradient(w / 2 - 100, 0, w / 2 + 100, 0);
    lineGrad.addColorStop(0, 'transparent');
    lineGrad.addColorStop(0.5, '#00d4ff');
    lineGrad.addColorStop(1, 'transparent');
    ctx.strokeStyle = lineGrad;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(w / 2 - 150, 200);
    ctx.lineTo(w / 2 + 150, 200);
    ctx.stroke();

    // "Se certifica que"
    ctx.fillStyle = '#8b8fa3';
    ctx.font = '18px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText('Se certifica que', w / 2, 260);

    // Name
    const nameGrad = ctx.createLinearGradient(w / 2 - 150, 0, w / 2 + 150, 0);
    nameGrad.addColorStop(0, '#00d4ff');
    nameGrad.addColorStop(1, '#7b2ff7');
    ctx.fillStyle = nameGrad;
    ctx.font = 'bold 42px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText(this.state.username, w / 2, 330);

    // "ha completado satisfactoriamente"
    ctx.fillStyle = '#8b8fa3';
    ctx.font = '18px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText('ha completado satisfactoriamente el curso', w / 2, 400);

    // Course name
    ctx.fillStyle = '#e4e4e7';
    ctx.font = 'bold 28px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText(COURSE_DATA.title, w / 2, 460);

    // Description
    ctx.fillStyle = '#555a70';
    ctx.font = '14px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText('Incluyendo: Python, Análisis de Datos, Visualización y Machine Learning', w / 2, 500);

    // Date
    const now = new Date();
    const dateStr = now.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    // Bottom section
    ctx.fillStyle = '#8b8fa3';
    ctx.font = '14px -apple-system, BlinkMacSystemFont, sans-serif';

    // Date
    ctx.fillText('Fecha de emisión', w / 2, 620);
    ctx.fillStyle = '#e4e4e7';
    ctx.font = '16px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillText(dateStr, w / 2, 650);

    // Bottom line
    ctx.strokeStyle = lineGrad;
    ctx.beginPath();
    ctx.moveTo(w / 2 - 150, 690);
    ctx.lineTo(w / 2 + 150, 690);
    ctx.stroke();

    // ID
    ctx.fillStyle = '#555a70';
    ctx.font = '11px -apple-system, BlinkMacSystemFont, sans-serif';
    const certId = `CERT-${Date.now().toString(36).toUpperCase()}`;
    ctx.fillText(`ID: ${certId}`, w / 2, 720);
  },

  downloadCertificate() {
    const canvas = document.getElementById('cert-canvas');
    const link = document.createElement('a');
    link.download = `Certificado_${this.state.username.replace(/\s+/g, '_')}_${COURSE_DATA.title.replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  },

  // ============================================
  //  GAMIFICATION SYSTEM
  // ============================================

  // ---- XP System ----
  getLevel(xp) {
    let result = this.LEVELS[0];
    for (const lvl of this.LEVELS) {
      if (xp >= lvl.xp) result = lvl;
      else break;
    }
    return result;
  },

  getLevelProgress() {
    const currentLevel = this.getLevel(this.state.xp);
    const currentIndex = this.LEVELS.indexOf(currentLevel);
    const isMax = currentIndex === this.LEVELS.length - 1;

    if (isMax) {
      return { percent: 100, isMax: true, currentLevelXp: currentLevel.xp, nextLevelXp: currentLevel.xp };
    }

    const nextLevel = this.LEVELS[currentIndex + 1];
    const xpInLevel = this.state.xp - currentLevel.xp;
    const xpNeeded = nextLevel.xp - currentLevel.xp;
    const percent = Math.min(Math.round((xpInLevel / xpNeeded) * 100), 100);

    return { percent, isMax: false, currentLevelXp: currentLevel.xp, nextLevelXp: nextLevel.xp };
  },

  awardXP(amount, reason) {
    const oldLevel = this.getLevel(this.state.xp);
    const multiplied = Math.round(amount * this.state.comboMultiplier);
    this.state.xp += multiplied;
    this.saveState();

    // Show XP toast with combo info
    const comboText = this.state.comboMultiplier > 1
      ? ` <span class="combo-badge">x${this.state.comboMultiplier} COMBO${this.state.comboMultiplier >= 2 ? '!!' : '!'}</span>`
      : '';
    this.showToast(
      this.state.comboMultiplier > 1 ? 'combo' : 'xp',
      `+${multiplied} XP${comboText}`,
      reason
    );

    // Check level up
    const newLevel = this.getLevel(this.state.xp);
    if (newLevel.level > oldLevel.level) {
      setTimeout(() => {
        this.showToast('levelup', `¡Nivel ${newLevel.level}!`, `Ahora eres ${newLevel.icon} ${newLevel.name}`);
        if (typeof Confetti !== 'undefined') {
          Confetti.levelUp();
        }
      }, 800);
    }

    // Update sidebar XP display
    this.renderSidebar();
  },

  // ---- Streak System ----
  getTodayStr() {
    return new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  },

  validateStreak() {
    // Called on app load to check if streak is still valid
    if (!this.state.lastActiveDate) return;

    const today = new Date(this.getTodayStr());
    const last = new Date(this.state.lastActiveDate);
    const diffDays = Math.floor((today - last) / (1000 * 60 * 60 * 24));

    if (diffDays > 1) {
      // Streak broken
      this.state.currentStreak = 0;
      this.saveState();
    }
  },

  checkStreak() {
    const todayStr = this.getTodayStr();

    if (this.state.lastActiveDate === todayStr) {
      // Already counted today
      return;
    }

    if (!this.state.lastActiveDate) {
      // First ever activity
      this.state.currentStreak = 1;
    } else {
      const today = new Date(todayStr);
      const last = new Date(this.state.lastActiveDate);
      const diffDays = Math.floor((today - last) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // Consecutive day
        this.state.currentStreak++;
        this.awardXP(25, 'Racha diaria');
        this.showToast('streak', `🔥 ${this.state.currentStreak} días`, 'Racha diaria mantenida');
      } else if (diffDays > 1) {
        // Streak broken, start new
        this.state.currentStreak = 1;
      }
    }

    this.state.lastActiveDate = todayStr;

    // Update best streak
    if (this.state.currentStreak > this.state.bestStreak) {
      this.state.bestStreak = this.state.currentStreak;
    }

    this.saveState();
  },

  // ---- Daily lessons tracker ----
  trackDailyLesson() {
    const todayStr = this.getTodayStr();
    if (this.state.dailyLessonsDate === todayStr) {
      this.state.dailyLessonsCount++;
    } else {
      this.state.dailyLessonsDate = todayStr;
      this.state.dailyLessonsCount = 1;
    }
    this.saveState();
  },

  // ---- Achievements System ----
  isAchievementUnlocked(achievementId) {
    return this.state.unlockedAchievements.some(a => a.id === achievementId);
  },

  unlockAchievement(achievementId) {
    if (this.isAchievementUnlocked(achievementId)) return;

    const achievement = this.ACHIEVEMENTS.find(a => a.id === achievementId);
    if (!achievement) return;

    this.state.unlockedAchievements.push({
      id: achievementId,
      date: this.getTodayStr(),
    });

    this.saveState();

    // Show achievement toast with delay for stacking
    setTimeout(() => {
      this.showToast('achievement', achievement.name, `${achievement.icon} ${achievement.desc}`);
      if (typeof Confetti !== 'undefined') {
        Confetti.achievementUnlock();
      }
      // Award XP for achievement (without recursive check)
      this.state.xp += achievement.xp;
      this.saveState();
      this.showToast('xp', `+${achievement.xp} XP`, 'Logro desbloqueado');
      this.renderSidebar();
    }, 1200);
  },

  checkAchievements(context) {
    context = context || {};
    const lessons = this.state.completedLessons.length;
    const quizzes = this.state.completedQuizzes.length;
    const totalItems = lessons + quizzes;

    // first-lesson: 1+ lessons
    if (lessons >= 1) this.unlockAchievement('first-lesson');

    // first-quiz: 1+ quizzes
    if (quizzes >= 1) this.unlockAchievement('first-quiz');

    // perfect-quiz: score 100%
    if (context.perfectQuiz) this.unlockAchievement('perfect-quiz');

    // module-complete: any module at 100%
    const anyModuleComplete = COURSE_DATA.modules.some((mod, mi) => this.getModuleProgress(mi) === 100);
    if (anyModuleComplete) this.unlockAchievement('module-complete');

    // halfway: 50% course (10/20 items)
    if (totalItems >= 10) this.unlockAchievement('halfway');

    // all-lessons: 15/15
    if (lessons >= this.getTotalLessons()) this.unlockAchievement('all-lessons');

    // streak-3
    if (this.state.currentStreak >= 3) this.unlockAchievement('streak-3');

    // streak-7
    if (this.state.currentStreak >= 7) this.unlockAchievement('streak-7');

    // fast-learner: 3 lessons in one day
    if (this.state.dailyLessonsCount >= 3) this.unlockAchievement('fast-learner');

    // course-done
    if (this.isCourseDone()) this.unlockAchievement('course-done');

    // focused: 3 total pomodoro sessions
    if (this.state.totalFocusSessions >= 3) this.unlockAchievement('focused');

    // marathoner: 5 pomodoros in one day
    if (this.state.focusSessionsToday >= 5) this.unlockAchievement('marathoner');

    // hacker & curious are unlocked directly by their triggers
  },

  // ---- Achievements Panel ----
  renderAchievementsPanel() {
    const grid = document.getElementById('achievements-grid');
    const subtitle = document.getElementById('achievements-subtitle');
    const unlockedCount = this.state.unlockedAchievements.length;

    subtitle.textContent = `${unlockedCount} de ${this.ACHIEVEMENTS.length} desbloqueados`;
    grid.innerHTML = '';

    this.ACHIEVEMENTS.forEach(ach => {
      const unlocked = this.isAchievementUnlocked(ach.id);
      const unlockedData = this.state.unlockedAchievements.find(a => a.id === ach.id);

      const card = document.createElement('div');
      card.className = `achievement-card ${unlocked ? 'achievement-card--unlocked' : 'achievement-card--locked'}`;

      card.innerHTML = `
        <div class="achievement-icon">${unlocked ? ach.icon : '🔒'}</div>
        <div class="achievement-name">${unlocked ? ach.name : '???'}</div>
        <div class="achievement-desc">${unlocked ? ach.desc : 'Logro oculto — sigue avanzando para descubrirlo'}</div>
        ${unlocked && unlockedData ? `<div class="achievement-date">Desbloqueado el ${unlockedData.date}</div>` : ''}
        <div class="achievement-xp-badge">${unlocked ? `+${ach.xp} XP ganados` : `+${ach.xp} XP`}</div>
      `;

      grid.appendChild(card);
    });
  },

  // ============================================
  //  COMBO SYSTEM
  // ============================================
  updateCombo() {
    const now = Date.now();
    const elapsed = now - this.state.lastActionTimestamp;
    const fiveMin = 5 * 60 * 1000;

    if (this.state.lastActionTimestamp && elapsed < fiveMin) {
      if (this.state.comboMultiplier < 1.5) {
        this.state.comboMultiplier = 1.5;
      } else if (this.state.comboMultiplier < 2) {
        this.state.comboMultiplier = 2;
      }
    } else {
      this.state.comboMultiplier = 1;
    }

    this.state.lastActionTimestamp = now;
  },

  // ============================================
  //  MOTIVATIONAL MESSAGES
  // ============================================
  showMotivationalMessage() {
    if (Math.random() < 0.3) {
      const msgs = this.MOTIVATIONAL_MESSAGES;
      const msg = msgs[Math.floor(Math.random() * msgs.length)];
      setTimeout(() => {
        this.showToast('tip', msg, '');
      }, 1500);
    }
  },

  // ============================================
  //  MILESTONE 50%
  // ============================================
  checkMilestone50() {
    const progress = this.getGlobalProgress();
    if (progress === 50) {
      setTimeout(() => {
        this.showToast('achievement', '🎉 ¡Medio camino!', 'Has completado el 50% del curso. ¡Sigue así!');
        if (typeof Confetti !== 'undefined') {
          Confetti.courseComplete();
        }
      }, 2000);
    }
  },

  // ============================================
  //  KONAMI CODE
  // ============================================
  initKonamiCode() {
    const sequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let pos = 0;

    document.addEventListener('keydown', (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === sequence[pos]) {
        pos++;
        if (pos === sequence.length) {
          pos = 0;
          this.triggerKonami();
        }
      } else {
        pos = 0;
      }
    });
  },

  triggerKonami() {
    if (this.state.konamiUsed) {
      this.showToast('tip', '💻 Ya usaste el Konami Code', 'Solo funciona una vez');
      return;
    }

    this.state.konamiUsed = true;
    this.saveState();

    // Matrix effect
    this.showMatrixEffect();

    // Bonus XP
    setTimeout(() => {
      this.awardXP(100, 'Konami Code — Easter Egg');
      this.unlockAchievement('hacker');
    }, 1000);
  },

  showMatrixEffect() {
    const canvas = document.getElementById('matrix-canvas');
    canvas.classList.remove('hidden');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789PYTHON DATA ML AI';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const startTime = Date.now();
    const duration = 3000;

    const draw = () => {
      ctx.fillStyle = 'rgba(11, 13, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00d4ff';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      if (Date.now() - startTime < duration) {
        requestAnimationFrame(draw);
      } else {
        canvas.classList.add('hidden');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    draw();
  },

  // ============================================
  //  LOGO SECRET (Memory Game)
  // ============================================
  initLogoSecret() {
    let clickCount = 0;
    let lastClick = 0;
    const logo = document.querySelector('.sidebar-logo');
    if (!logo) return;

    logo.style.cursor = 'pointer';
    logo.addEventListener('click', () => {
      const now = Date.now();
      if (now - lastClick > 1500) {
        clickCount = 1;
      } else {
        clickCount++;
      }
      lastClick = now;

      if (clickCount >= 5) {
        clickCount = 0;
        this.showMemoryGame();
      }
    });
  },

  showMemoryGame() {
    const pairs = [
      { term: 'Python', def: 'Lenguaje #1 en Data Science' },
      { term: 'Pandas', def: 'Librería para DataFrames' },
      { term: 'Overfitting', def: 'Modelo memoriza datos' },
      { term: 'K-Means', def: 'Algoritmo de clustering' },
    ];

    // Create cards: each pair becomes 2 cards
    let cards = [];
    pairs.forEach((p, i) => {
      cards.push({ id: i, type: 'term', text: p.term, pairId: i });
      cards.push({ id: i, type: 'def', text: p.def, pairId: i });
    });

    // Shuffle
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    const grid = document.getElementById('memory-grid');
    const status = document.getElementById('memory-status');
    grid.innerHTML = '';
    status.textContent = 'Encuentra los 4 pares';

    let flipped = [];
    let matched = 0;

    cards.forEach((card, idx) => {
      const el = document.createElement('div');
      el.className = 'memory-card';
      el.innerHTML = `
        <div class="memory-card-inner">
          <div class="memory-card-front">?</div>
          <div class="memory-card-back">${card.text}</div>
        </div>
      `;

      el.addEventListener('click', () => {
        if (flipped.length >= 2) return;
        if (el.classList.contains('flipped') || el.classList.contains('matched')) return;

        el.classList.add('flipped');
        flipped.push({ el, card });

        if (flipped.length === 2) {
          const [a, b] = flipped;
          if (a.card.pairId === b.card.pairId && a.card.type !== b.card.type) {
            // Match!
            setTimeout(() => {
              a.el.classList.add('matched');
              b.el.classList.add('matched');
              matched++;
              flipped = [];

              if (matched === pairs.length) {
                status.textContent = '🎉 ¡Ganaste!';
                if (!this.state.logoSecretUsed) {
                  this.state.logoSecretUsed = true;
                  this.saveState();
                  setTimeout(() => {
                    this.awardXP(50, 'Memory Game — Easter Egg');
                    this.unlockAchievement('curious');
                  }, 500);
                }
              }
            }, 400);
          } else {
            // No match
            setTimeout(() => {
              a.el.classList.remove('flipped');
              b.el.classList.remove('flipped');
              flipped = [];
            }, 800);
          }
        }
      });

      grid.appendChild(el);
    });

    document.getElementById('memory-modal').classList.remove('hidden');
  },

  // ============================================
  //  FOCUS MODE (Pomodoro)
  // ============================================
  _focusTimer: null,
  _focusSeconds: 0,
  _focusTotalSeconds: 25 * 60,
  _focusIsBreak: false,
  _focusAudioCtx: null,
  _focusAudioNodes: [],
  _focusSoundType: 'rain', // rain, cafe, silence

  startFocusMode() {
    // Reset focus date if needed
    const todayStr = this.getTodayStr();
    if (this.state.focusDate !== todayStr) {
      this.state.focusDate = todayStr;
      this.state.focusMinutesToday = 0;
      this.state.focusSessionsToday = 0;
    }

    // Clone lesson content into focus overlay
    const readingContent = document.getElementById('reading-content');
    const focusContent = document.getElementById('focus-content');
    if (readingContent) {
      focusContent.innerHTML = readingContent.innerHTML;
    }

    // Show overlay
    document.getElementById('focus-overlay').classList.remove('hidden');

    // Reset timer
    this._focusIsBreak = false;
    this._focusTotalSeconds = 25 * 60;
    this._focusSeconds = 0;
    this._focusSoundType = 'rain';

    this.updateFocusTimerDisplay();
    this.updateFocusStats();

    // Sound
    document.getElementById('focus-sound-toggle').textContent = '🔊 Lluvia';
    this.initAmbientSound('rain');

    // Start ticking
    this._focusTimer = setInterval(() => this.focusTick(), 1000);
  },

  stopFocusMode() {
    clearInterval(this._focusTimer);
    this._focusTimer = null;
    this.stopAmbientSound();
    document.getElementById('focus-overlay').classList.add('hidden');
  },

  focusTick() {
    this._focusSeconds++;
    const remaining = this._focusTotalSeconds - this._focusSeconds;

    if (remaining <= 0) {
      clearInterval(this._focusTimer);
      this._focusTimer = null;

      if (!this._focusIsBreak) {
        // Work session completed
        this.completeFocusSession();
      } else {
        // Break completed
        this.showToast('tip', '☕ Descanso terminado', '¿Listo para otra sesión?');
        this.stopFocusMode();
      }
      return;
    }

    this.updateFocusTimerDisplay();

    // Progress bar
    const pct = (this._focusSeconds / this._focusTotalSeconds) * 100;
    document.getElementById('focus-progress-fill').style.width = `${pct}%`;

    // Warning when < 60s
    const timerEl = document.getElementById('focus-timer');
    if (remaining < 60 && !this._focusIsBreak) {
      timerEl.classList.add('warning');
    } else {
      timerEl.classList.remove('warning');
    }
  },

  updateFocusTimerDisplay() {
    const remaining = this._focusTotalSeconds - this._focusSeconds;
    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;
    const prefix = this._focusIsBreak ? '☕' : '🍅';
    document.getElementById('focus-timer').textContent = `${prefix} ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (this._focusIsBreak) {
      document.getElementById('focus-timer').classList.add('on-break');
    } else {
      document.getElementById('focus-timer').classList.remove('on-break');
    }
  },

  completeFocusSession() {
    // Update stats
    this.state.focusMinutesToday += 25;
    this.state.focusSessionsToday++;
    this.state.totalFocusMinutes += 25;
    this.state.totalFocusSessions++;
    this.saveState();

    // Award XP
    this.awardXP(30, 'Sesión Pomodoro completada');

    // Celebration
    if (typeof Confetti !== 'undefined') {
      Confetti.lessonComplete();
    }

    // Check achievements
    this.checkAchievements();

    // Stop sound & timer display
    this.stopAmbientSound();

    // Show completion modal
    document.getElementById('focus-complete-stats').textContent =
      `${this.state.focusSessionsToday} sesiones hoy · ${this.state.focusMinutesToday} min · ${this.state.totalFocusSessions} total`;
    document.getElementById('focus-overlay').classList.add('hidden');
    document.getElementById('focus-complete-modal').classList.remove('hidden');
    clearInterval(this._focusTimer);
  },

  updateFocusStats() {
    const info = document.getElementById('focus-session-info');
    if (info) {
      info.textContent = `Sesión ${this.state.focusSessionsToday + 1} · ${this.state.focusMinutesToday} min hoy`;
    }
  },

  // ---- Ambient Sound (Web Audio API) ----
  initAmbientSound(type) {
    this.stopAmbientSound();
    if (type === 'silence') return;

    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      this._focusAudioCtx = ctx;

      // Generate noise buffer
      const bufferSize = 2 * ctx.sampleRate;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;

      // Filter based on type
      const filter = ctx.createBiquadFilter();
      const gainNode = ctx.createGain();
      gainNode.gain.value = 0.15;

      if (type === 'rain') {
        filter.type = 'lowpass';
        filter.frequency.value = 400;
        filter.Q.value = 1;
      } else if (type === 'cafe') {
        filter.type = 'bandpass';
        filter.frequency.value = 1200;
        filter.Q.value = 0.5;
        gainNode.gain.value = 0.08;
      }

      source.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);
      source.start();

      this._focusAudioNodes = [source, filter, gainNode];
    } catch (e) {
      console.warn('Web Audio API not supported');
    }
  },

  stopAmbientSound() {
    if (this._focusAudioCtx) {
      try {
        this._focusAudioNodes.forEach(n => { try { n.disconnect(); } catch(e) {} });
        this._focusAudioCtx.close();
      } catch (e) {}
      this._focusAudioCtx = null;
      this._focusAudioNodes = [];
    }
  },

  toggleAmbientSound() {
    const sounds = ['rain', 'cafe', 'silence'];
    const labels = { rain: '🔊 Lluvia', cafe: '🔊 Café', silence: '🔇 Silencio' };
    const idx = sounds.indexOf(this._focusSoundType);
    this._focusSoundType = sounds[(idx + 1) % sounds.length];
    document.getElementById('focus-sound-toggle').textContent = labels[this._focusSoundType];
    this.initAmbientSound(this._focusSoundType);
  },

  // ---- Toast Notifications ----
  showToast(type, title, description) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;

    const iconMap = {
      xp: '✨',
      achievement: '🏆',
      levelup: '⬆️',
      streak: '🔥',
    };

    toast.innerHTML = `
      <span class="toast-icon">${iconMap[type] || '📣'}</span>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-desc">${description || ''}</div>
      </div>
    `;

    container.appendChild(toast);

    // Auto remove after 3.5 seconds
    setTimeout(() => {
      toast.classList.add('toast-exit');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  },
};

// ---- Boot ----
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    App.init();
    AI.init();
  });
} else {
  App.init();
  AI.init();
}
