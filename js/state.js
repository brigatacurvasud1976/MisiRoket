/**
 * GAME STATE MANAGEMENT
 * Mengelola siklus permainan, adaptasi kesulitan, skor, dan transisi layar.
 */

class GameState {
  constructor() {
    this.profile = window.StorageManager.load();
    this.currentScreen = "title";
    this.currentLevel = null;
    this.currentLevelIndex = 0;
    
    // Sesi Level Saat Ini
    this.session = {
      score: 0,
      fuel: 100,
      correctCount: 0,
      wrongCount: 0,
      currentQuestionIdx: 0,
      questions: [],
      hintsUsed: 0,
      isPracticeMode: false
    };

    // Adaptasi kesulitan dinamis
    this.difficultyStreak = 0; // > 0: beruntun benar, < 0: beruntun salah
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach(fn => fn(this));
    window.StorageManager.save(this.profile);
  }

  // Pilih level untuk dimainkan
  startLevel(levelId, isPractice = false) {
    const levelData = window.SOLAR_GAME_DATA.levels.find(l => l.id === levelId);
    if (!levelData) return false;

    // Cek apakah level terkunci jika bukan mode latihan
    if (!isPractice && !this.profile.unlockedLevels.includes(levelId)) {
      return false;
    }

    this.currentLevel = levelData;
    this.currentLevelIndex = window.SOLAR_GAME_DATA.levels.findIndex(l => l.id === levelId);
    
    // Siapkan soal dengan tingkat kesulitan adaptif
    // Pilih minimal 5 soal dari bank soal (atau semua 8 untuk latihan/ujian)
    const allQuestions = [...levelData.questions];
    // Acak urutan soal
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);

    this.session = {
      score: 0,
      fuel: 100,
      correctCount: 0,
      wrongCount: 0,
      currentQuestionIdx: 0,
      questions: shuffled,
      hintsUsed: 0,
      isPracticeMode: isPractice,
      userAnswers: []
    };

    return true;
  }

  // Catat Jawaban Pemain
  recordAnswer(isCorrect, hintUsed = false) {
    const currentQ = this.session.questions[this.session.currentQuestionIdx];
    this.session.userAnswers.push({
      question: currentQ,
      isCorrect,
      hintUsed
    });

    if (isCorrect) {
      this.session.correctCount++;
      this.difficultyStreak = Math.max(1, this.difficultyStreak + 1);
      
      // Poin: 100 poin dasar + bonus kesulitan - penalti petunjuk
      let points = 100 * (currentQ.difficulty || 1);
      if (hintUsed) points = Math.round(points * 0.7);
      this.session.score += points;

      // Bonus pemulihan bahan bakar
      this.session.fuel = Math.min(100, this.session.fuel + 10);
    } else {
      this.session.wrongCount++;
      this.difficultyStreak = Math.min(-1, this.difficultyStreak - 1);
      
      // Pengurangan bahan bakar karena salah perhitungan navigasi
      this.session.fuel = Math.max(10, this.session.fuel - 20);
    }

    this.profile.totalAnswered++;
    if (isCorrect) this.profile.totalCorrect++;

    return isCorrect;
  }

  // Selesaikan Level & Hitung Bintang
  completeCurrentLevel() {
    const totalQ = this.session.questions.length;
    const ratio = this.session.correctCount / Math.max(1, totalQ);
    
    let starsEarned = 1;
    if (ratio >= 0.85 && this.session.fuel >= 50) {
      starsEarned = 3;
    } else if (ratio >= 0.6) {
      starsEarned = 2;
    }

    const levelId = this.currentLevel.id;
    const oldScoreData = this.profile.levelScores[levelId] || { stars: 0, score: 0 };
    
    // Perbarui bintang tertinggi & skor jika lebih baik
    const newStars = Math.max(oldScoreData.stars || 0, starsEarned);
    const newScore = Math.max(oldScoreData.score || 0, this.session.score);

    this.profile.levelScores[levelId] = {
      completed: true,
      stars: newStars,
      score: newScore
    };

    // Hitung total akumulasi bintang
    let totalStars = 0;
    Object.values(this.profile.levelScores).forEach(rec => {
      totalStars += rec.stars || 0;
    });
    this.profile.stars = totalStars;

    // Buka Lencana jika ada
    if (this.currentLevel.badge && !this.profile.badges.includes(this.currentLevel.badge.id)) {
      this.profile.badges.push(this.currentLevel.badge.id);
    }

    // Buka level berikutnya dalam alur cerita
    const nextIdx = this.currentLevelIndex + 1;
    if (nextIdx < window.SOLAR_GAME_DATA.levels.length) {
      const nextLevel = window.SOLAR_GAME_DATA.levels[nextIdx];
      if (!this.profile.unlockedLevels.includes(nextLevel.id)) {
        this.profile.unlockedLevels.push(nextLevel.id);
      }
    }

    // Cek skin roket baru yang terbuka
    window.SOLAR_GAME_DATA.rocketSkins.forEach(skin => {
      if (this.profile.stars >= skin.starsRequired && !this.profile.unlockedSkins.includes(skin.id)) {
        this.profile.unlockedSkins.push(skin.id);
      }
    });

    this.notify();
    return {
      starsEarned,
      score: this.session.score,
      correctCount: this.session.correctCount,
      totalCount: totalQ,
      fuelRemaining: this.session.fuel
    };
  }

  isLevelUnlocked(levelId) {
    return this.profile.unlockedLevels.includes(levelId);
  }
}

window.gameState = new GameState();
