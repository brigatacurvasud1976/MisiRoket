/**
 * QUIZ ENGINE
 * Mesin kuis universal yang menangani kuis adaptif, petunjuk bertahap, dan timer kecepatan.
 */

class QuizEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.timer = null;
    this.timeLeft = 20;
    this.isAnswered = false;
  }

  render(question, qIndex, totalQ, onAnswer, isSpeedMode = false) {
    if (!this.container) return;
    this.isAnswered = false;
    clearInterval(this.timer);

    this.container.innerHTML = `
      <div class="challenge-top-status">
        <span class="question-counter">Soal ${qIndex + 1} dari ${totalQ}</span>
        ${isSpeedMode ? `
          <div class="timer-pill" id="speedQuizTimer" aria-live="polite">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
            </svg>
            <span id="timerSeconds">15</span> detik
          </div>
        ` : ''}
      </div>

      <div class="question-prompt" id="currentQuestionText">${question.question}</div>

      <div class="options-grid" id="optionsContainer" role="radiogroup" aria-labelledby="currentQuestionText"></div>

      <div class="hint-container">
        <button class="btn btn-secondary" id="btnUseHint" aria-label="Buka petunjuk bantuan (mengurangi perolehan poin)">
          💡 Butuh Petunjuk?
        </button>
        <div class="hint-pill" id="hintPill" role="status">
          <strong>Petunjuk:</strong> ${question.hint || "Pikirkan materi ringkas yang baru saja kamu baca."}
        </div>
      </div>

      <div class="feedback-box" id="feedbackBox" role="region" aria-live="assertive">
        <div class="feedback-header" id="feedbackHeader"></div>
        <div class="feedback-text" id="feedbackText"></div>
      </div>

      <div style="display: flex; justify-content: flex-end; margin-top: 10px;">
        <button class="btn btn-primary" id="btnNextQuestion" style="display: none;">
          Lanjut Soal Berikutnya ➔
        </button>
      </div>
    `;

    // Render Pilihan Jawaban
    const optionsContainer = document.getElementById("optionsContainer");
    const letters = ["A", "B", "C", "D"];

    question.options.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.setAttribute("role", "radio");
      btn.setAttribute("aria-checked", "false");
      btn.innerHTML = `
        <span class="option-index-badge">${letters[idx] || (idx + 1)}</span>
        <span>${optText}</span>
      `;

      btn.addEventListener("click", () => {
        if (this.isAnswered) return;
        this.submitAnswer(idx, question, onAnswer);
      });

      optionsContainer.appendChild(btn);
    });

    // Event Tombol Petunjuk
    const btnHint = document.getElementById("btnUseHint");
    const hintPill = document.getElementById("hintPill");
    btnHint.addEventListener("click", () => {
      window.soundSystem.playClick();
      hintPill.classList.add("active");
      btnHint.disabled = true;
      btnHint.style.opacity = "0.5";
      this.hintUsed = true;
    });
    this.hintUsed = false;

    // Timer Mode Kecepatan (Merkurius / Ujian)
    if (isSpeedMode) {
      this.timeLeft = 15;
      const timerSecEl = document.getElementById("timerSeconds");
      this.timer = setInterval(() => {
        this.timeLeft--;
        if (timerSecEl) timerSecEl.textContent = this.timeLeft;
        if (this.timeLeft <= 0) {
          clearInterval(this.timer);
          if (!this.isAnswered) {
            // Waktu habis = dianggap salah
            this.submitAnswer(-1, question, onAnswer, true);
          }
        }
      }, 1000);
    }
  }

  submitAnswer(selectedIdx, question, onAnswer, isTimeOut = false) {
    this.isAnswered = true;
    clearInterval(this.timer);

    const isCorrect = selectedIdx === question.correctAnswer;
    const optionBtns = document.querySelectorAll(".option-btn");
    
    // Disable all options
    optionBtns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === question.correctAnswer) {
        btn.classList.add("selected-correct");
      } else if (idx === selectedIdx) {
        btn.classList.add("selected-wrong");
      }
    });

    const feedbackBox = document.getElementById("feedbackBox");
    const feedbackHeader = document.getElementById("feedbackHeader");
    const feedbackText = document.getElementById("feedbackText");
    const btnNext = document.getElementById("btnNextQuestion");

    feedbackBox.className = `feedback-box active ${isCorrect ? 'correct' : 'wrong'}`;
    
    if (isTimeOut) {
      feedbackHeader.innerHTML = `⏱️ Waktu Sensor Habis!`;
      feedbackText.innerHTML = `Sensor roket kelebihan panas sebelum kamu menjawab. <br><strong>Jawaban Benar:</strong> ${question.options[question.correctAnswer]}<br>${question.explanation}`;
      window.soundSystem.playIncorrect();
    } else if (isCorrect) {
      feedbackHeader.innerHTML = `✨ Luar Biasa! Jawabanmu Benar!`;
      feedbackText.innerHTML = `${question.explanation}`;
      window.soundSystem.playCorrect();
    } else {
      feedbackHeader.innerHTML = `⚠️ Kurang Tepat, Jangan Menyerah!`;
      feedbackText.innerHTML = `Pilihanmu belum tepat. <br><strong>Penjelasan Sains:</strong> ${question.explanation}`;
      window.soundSystem.playIncorrect();
    }

    // Perbarui state & HUD
    onAnswer(isCorrect, this.hintUsed);
    UIController.updateHUD();

    btnNext.style.display = "inline-flex";
    btnNext.focus();
    btnNext.onclick = () => {
      window.soundSystem.playClick();
      window.app.handleNextChallengeStep();
    };
  }
}

window.QuizEngine = QuizEngine;
