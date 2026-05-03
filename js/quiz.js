/* ============================================
   Quiz Engine — with micro-interactions
   ============================================ */

const QuizEngine = {
  currentQuiz: null,
  currentModuleIndex: null,
  answers: {},
  submitted: false,

  render(moduleIndex) {
    this.currentModuleIndex = moduleIndex;
    const mod = COURSE_DATA.modules[moduleIndex];
    this.currentQuiz = mod.quiz;
    this.answers = {};
    this.submitted = false;

    document.getElementById('quiz-badge').textContent = `Módulo ${moduleIndex + 1}`;
    document.getElementById('quiz-title').textContent = this.currentQuiz.title;

    const body = document.getElementById('quiz-body');
    body.innerHTML = '';

    this.currentQuiz.questions.forEach((q, i) => {
      const questionEl = document.createElement('div');
      questionEl.className = 'quiz-question';
      questionEl.innerHTML = `
        <div class="question-number">Pregunta ${i + 1} de ${this.currentQuiz.questions.length}</div>
        <div class="question-text">${q.question}</div>
        <div class="question-options" id="options-${i}">
          ${q.options.map((opt, j) => `
            <button class="option-btn" data-question="${i}" data-option="${j}">
              <span class="option-letter">${String.fromCharCode(65 + j)}</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>
        <div class="question-explanation" id="explanation-${i}">${q.explanation}</div>
      `;
      body.appendChild(questionEl);
    });

    // Bind option clicks
    body.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.submitted) return;
        const qIndex = parseInt(btn.dataset.question);
        const oIndex = parseInt(btn.dataset.option);
        this.selectOption(qIndex, oIndex);
      });
    });

    // Show submit, hide results
    document.getElementById('quiz-actions').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');

    const submitBtn = document.getElementById('btn-submit-quiz');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Enviar respuestas';
  },

  selectOption(questionIndex, optionIndex) {
    this.answers[questionIndex] = optionIndex;

    // Update UI
    const container = document.getElementById(`options-${questionIndex}`);
    container.querySelectorAll('.option-btn').forEach(btn => {
      btn.classList.remove('selected');
      if (parseInt(btn.dataset.option) === optionIndex) {
        btn.classList.add('selected');
      }
    });
  },

  submit() {
    const totalQuestions = this.currentQuiz.questions.length;
    const answeredCount = Object.keys(this.answers).length;

    if (answeredCount < totalQuestions) {
      // Highlight unanswered with shake
      for (let i = 0; i < totalQuestions; i++) {
        if (this.answers[i] === undefined) {
          const q = document.querySelectorAll('.quiz-question')[i];
          q.style.borderColor = 'var(--error)';
          q.style.animation = 'shakeWrong 0.6s ease';
          setTimeout(() => {
            q.style.borderColor = '';
            q.style.animation = '';
          }, 2000);
        }
      }
      return;
    }

    this.submitted = true;
    let correct = 0;

    this.currentQuiz.questions.forEach((q, i) => {
      const container = document.getElementById(`options-${i}`);
      const explanation = document.getElementById(`explanation-${i}`);
      const buttons = container.querySelectorAll('.option-btn');
      const isCorrect = this.answers[i] === q.correct;

      if (isCorrect) correct++;

      // Stagger the reveal of each question
      setTimeout(() => {
        buttons.forEach(btn => {
          btn.classList.add('disabled');
          btn.classList.remove('selected');
          const oIndex = parseInt(btn.dataset.option);

          if (oIndex === q.correct) {
            btn.classList.add('correct');
            // Add shake + flash for correct answer
            if (oIndex === this.answers[i]) {
              btn.classList.add('shake-correct', 'flash-green');
            }
          } else if (oIndex === this.answers[i] && oIndex !== q.correct) {
            btn.classList.add('incorrect', 'shake-wrong', 'flash-red');
          }
        });

        explanation.classList.add('show');
      }, i * 200); // 200ms delay per question
    });

    // Show results after all questions revealed
    const revealDelay = totalQuestions * 200 + 300;
    setTimeout(() => {
      const score = Math.round((correct / totalQuestions) * 100);
      const passed = score >= this.currentQuiz.passingScore;

      document.getElementById('quiz-actions').classList.add('hidden');
      const results = document.getElementById('quiz-results');
      results.classList.remove('hidden');

      const resultCard = document.getElementById('result-card');
      resultCard.classList.add('animate-in');

      const icon = document.getElementById('result-icon');
      icon.textContent = passed ? '✓' : '✗';
      icon.className = `result-icon ${passed ? 'pass' : 'fail'}`;

      // Animate score counter
      const messageEl = document.getElementById('result-message');
      this.animateScore(messageEl, score, correct, totalQuestions, passed);

      document.getElementById('result-title').textContent = passed ? '¡Aprobado!' : 'No aprobado';

      const nextBtn = document.getElementById('btn-next-module');
      const retryBtn = document.getElementById('btn-retry-quiz');

      if (passed) {
        nextBtn.classList.remove('hidden');
        retryBtn.classList.add('hidden');

        // Save quiz as passed (pass score for perfect quiz detection)
        if (typeof App !== 'undefined') {
          App.completeQuiz(this.currentModuleIndex, score);
        }
      } else {
        nextBtn.classList.add('hidden');
        retryBtn.classList.remove('hidden');
      }

      // Scroll to results
      results.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Clean up animation class
      setTimeout(() => resultCard.classList.remove('animate-in'), 500);
    }, revealDelay);
  },

  // Animate score from 0 to final value
  animateScore(element, targetScore, correct, total, passed) {
    const duration = 600;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(targetScore * eased);

      if (passed) {
        element.textContent = `Has obtenido ${current}% (${correct}/${total} correctas). ¡Excelente trabajo!`;
      } else {
        element.textContent = `Has obtenido ${current}% (${correct}/${total} correctas). Necesitas al menos ${this.currentQuiz.passingScore}% para aprobar.`;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  },

  retry() {
    this.render(this.currentModuleIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
