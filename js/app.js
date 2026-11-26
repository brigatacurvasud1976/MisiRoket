/**
 * APPLICATION ROUTER & EVENT ORCHESTRATOR
 * Mengontrol siklus permainan, navigasi layar, dialog modal, dan integrasi mini-game.
 */

class SolarMissionApp {
  constructor() {
    this.quizEngine = null;
    this.atmospherePuzzle = null;
    this.marsLander = null;
    this.sizeSorter = null;
    this.ringCatcher = null;
    this.cardMatcher = null;
    this.dwarfDetective = null;

    this.currentStepIndex = 0;
    this.challengeSteps = []; // urutan step tantangan untuk level aktif
  }

  init() {
    // Inisialisasi controller mini-game
    this.quizEngine = new QuizEngine("challengeDynamicArea");
    this.atmospherePuzzle = new AtmospherePuzzle("challengeDynamicArea");
    this.marsLander = new MarsLander("challengeDynamicArea");
    this.sizeSorter = new SizeSorter("challengeDynamicArea");
    this.ringCatcher = new RingCatcher("challengeDynamicArea");
    this.cardMatcher = new CardMatcher("challengeDynamicArea");
    this.dwarfDetective = new DwarfDetective("challengeDynamicArea");

    // Pasang Event Listeners Antarmuka
    this.bindEvents();

    // Perbarui HUD awal
    UIController.updateHUD();

    // Muat ke Layar Awal atau sesuai Hash URL
    if (window.location.hash === "#map") {
      this.openSolarMap();
    } else if (window.location.hash === "#briefing") {
      this.openBriefing("mercury");
    } else if (window.location.hash === "#earth") {
      this.openBriefing("earth");
      this.startCurrentLevelChallenge();
    } else if (window.location.hash === "#mars") {
      this.openBriefing("mars");
      this.startCurrentLevelChallenge();
    } else if (window.location.hash === "#jupiter") {
      this.openBriefing("jupiter");
      this.startCurrentLevelChallenge();
    } else if (window.location.hash === "#saturn") {
      this.openBriefing("saturn");
      this.startCurrentLevelChallenge();
    } else if (window.location.hash === "#challenge") {
      this.openBriefing("mercury");
      this.startCurrentLevelChallenge();
    } else if (window.location.hash === "#notebook") {
      this.openNotebookModal();
    } else if (window.location.hash === "#hangar") {
      this.openHangarModal();
    } else {
      this.showScreen("screenTitle");
    }
  }

  bindEvents() {
    // Tombol Layar Judul
    document.getElementById("btnStartGame")?.addEventListener("click", () => {
      window.soundSystem.playClick();
      window.soundSystem.startAmbientBGM();
      this.openSolarMap();
    });

    document.getElementById("btnOpenNotebook")?.addEventListener("click", () => {
      window.soundSystem.playClick();
      this.openNotebookModal();
    });

    document.getElementById("btnOpenHangar")?.addEventListener("click", () => {
      window.soundSystem.playClick();
      this.openHangarModal();
    });

    // Brand Logo klik -> kembali ke Peta atau Judul
    document.getElementById("brandSection")?.addEventListener("click", () => {
      window.soundSystem.playClick();
      if (window.gameState.currentScreen === "title") {
        this.openSolarMap();
      } else {
        this.showScreen("screenTitle");
      }
    });

    // Tombol Mute Suara di Header
    document.getElementById("btnToggleSound")?.addEventListener("click", () => {
      window.soundSystem.toggleMute();
      UIController.updateHUD();
    });

    // Tombol Buku Catatan di Header
    document.getElementById("btnHeaderNotebook")?.addEventListener("click", () => {
      window.soundSystem.playClick();
      this.openNotebookModal();
    });

    // Tombol Hangar di Header
    document.getElementById("btnHeaderHangar")?.addEventListener("click", () => {
      window.soundSystem.playClick();
      this.openHangarModal();
    });

    // Tombol Kembali dari Peta ke Layar Judul
    document.getElementById("btnMapBack")?.addEventListener("click", () => {
      window.soundSystem.playClick();
      this.showScreen("screenTitle");
    });

    // Tombol Tutup Modal Universal
    document.querySelectorAll(".btn-close-modal").forEach(btn => {
      btn.addEventListener("click", () => {
        window.soundSystem.playClick();
        this.closeAllModals();
      });
    });

    // Tutup modal jika klik overlay luar
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          this.closeAllModals();
        }
      });
    });

    // Tombol Mulai Misi dari Layar Briefing
    document.getElementById("btnLaunchMission")?.addEventListener("click", () => {
      window.soundSystem.playClick();
      window.soundSystem.playThrust(0.5);
      this.startCurrentLevelChallenge();
    });

    // Tombol Kembali dari Briefing ke Peta
    document.getElementById("btnBriefingBack")?.addEventListener("click", () => {
      window.soundSystem.playClick();
      this.openSolarMap();
    });

    // Tombol Kembali dari Arena Tantangan ke Peta (dengan konfirmasi)
    document.getElementById("btnExitChallenge")?.addEventListener("click", () => {
      if (confirm("Apakah kamu yakin ingin kembali ke Peta Tata Surya? Progres misi saat ini akan diulang.")) {
        window.soundSystem.playClick();
        this.openSolarMap();
      }
    });

    // Tombol di Layar Hasil
    document.getElementById("btnResultNextPlanet")?.addEventListener("click", () => {
      window.soundSystem.playClick();
      this.openSolarMap();
    });

    document.getElementById("btnResultRetry")?.addEventListener("click", () => {
      window.soundSystem.playClick();
      this.startCurrentLevelChallenge();
    });

    // Tombol Reset Game di Pengaturan
    document.getElementById("btnResetSave")?.addEventListener("click", () => {
      if (confirm("⚠️ Apakah kamu yakin ingin mengulang seluruh progres petualangan dari awal? Semua bintang dan lencana akan direset.")) {
        window.gameState.profile = window.StorageManager.reset();
        UIController.updateHUD();
        this.closeAllModals();
        this.showScreen("screenTitle");
        alert("Progres telah direset ke awal.");
      }
    });
  }

  showScreen(screenId) {
    document.querySelectorAll(".game-screen").forEach(scr => scr.classList.remove("active"));
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add("active");
      window.gameState.currentScreen = screenId.replace("screen", "").toLowerCase();
      window.scrollTo(0, 0);
    }
  }

  closeAllModals() {
    document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
  }

  // 1. Peta Tata Surya
  openSolarMap() {
    UIController.renderSolarMap();
    UIController.updateHUD();
    this.showScreen("screenSolarMap");
  }

  // 2. Layar Ringkasan Materi (Briefing)
  openBriefing(levelId) {
    const levelData = window.SOLAR_GAME_DATA.levels.find(l => l.id === levelId);
    if (!levelData) return;

    window.gameState.startLevel(levelId);

    // Isi Konten Ringkasan Materi
    document.getElementById("briefingTitle").textContent = levelData.name;
    document.getElementById("briefingTagline").textContent = levelData.tagline;
    document.getElementById("briefingCategory").textContent = levelData.category;
    document.getElementById("briefingNarrative").textContent = levelData.summary;

    const orbContainer = document.getElementById("briefingPlanetOrb");
    if (orbContainer) {
      orbContainer.innerHTML = UIController.getPlanetSVG(levelData.id, 90);
    }

    // Grid Statistik
    const statsContainer = document.getElementById("briefingStatsGrid");
    if (statsContainer && levelData.stats) {
      statsContainer.innerHTML = `
        <div class="stat-box">
          <div class="stat-box-label">Jarak dari Matahari</div>
          <div class="stat-box-val">${levelData.stats.distanceFromSun || "-"}</div>
        </div>
        <div class="stat-box">
          <div class="stat-box-label">Diameter</div>
          <div class="stat-box-val">${levelData.stats.diameter || levelData.stats.plutoDiameter || "-"}</div>
        </div>
        <div class="stat-box">
          <div class="stat-box-label">Suhu Rata-rata</div>
          <div class="stat-box-val">${levelData.stats.surfaceTemp || "-"}</div>
        </div>
        <div class="stat-box">
          <div class="stat-box-label">Kala Revolusi (1 Tahun)</div>
          <div class="stat-box-val">${levelData.stats.revolutionPeriod || levelData.stats.plutoOrbit || "-"}</div>
        </div>
        <div class="stat-box">
          <div class="stat-box-label">Jumlah Satelit Alami</div>
          <div class="stat-box-val">${levelData.stats.satellites || levelData.stats.plutoMoons || "-"}</div>
        </div>
      `;
    }

    // Maskot Kapti Dialog
    const mascotBubble = document.getElementById("briefingMascotText");
    if (mascotBubble) {
      mascotBubble.innerHTML = `Halo Astronaut! Kita sedang mendekati <strong>${levelData.name}</strong>. Pelajari data sensor di atas sebelum memulai tantangan <em>${levelData.mechanicTitle}</em>!`;
    }

    this.showScreen("screenBriefing");
  }

  // 3. Memulai Arena Tantangan Level
  startCurrentLevelChallenge() {
    const level = window.gameState.currentLevel;
    if (!level) return;

    this.showScreen("screenChallenge");
    document.getElementById("challengeLevelTitle").textContent = `${level.order}. Misi ${level.name}`;
    document.getElementById("challengeSubTitle").textContent = level.mechanicTitle;

    // Rangkai langkah-langkah tantangan berdasarkan mekanik level
    this.challengeSteps = [];
    this.currentStepIndex = 0;

    switch (level.id) {
      case "mercury":
        // Mekanik Speed Quiz (5 soal cepat dengan timer 15 detik)
        window.gameState.session.questions.slice(0, 5).forEach((q, idx) => {
          this.challengeSteps.push({
            type: "speed_quiz",
            question: q,
            index: idx,
            total: 5
          });
        });
        break;

      case "venus":
        // Teka-teki Efek Rumah Kaca & Soal Venus
        this.challengeSteps.push({
          type: "quiz",
          question: level.questions[0], // Mengapa Venus terpanas
          index: 0,
          total: 4
        });
        this.challengeSteps.push({
          type: "quiz",
          question: level.questions[1], // Karbon dioksida 96%
          index: 1,
          total: 4
        });
        this.challengeSteps.push({
          type: "quiz",
          question: level.questions[3], // Rotasi retrograd
          index: 2,
          total: 4
        });
        this.challengeSteps.push({
          type: "quiz",
          question: level.questions[6], // Hari lebih panjang dari tahun
          index: 3,
          total: 4
        });
        break;

      case "earth":
        // 1. Mini-game Susun Lapisan Atmosfer
        this.challengeSteps.push({ type: "atmosphere_puzzle" });
        // 2. Kuis Rotasi vs Revolusi
        this.challengeSteps.push({
          type: "quiz",
          question: level.questions[0], // Rotasi = siang-malam
          index: 1,
          total: 3
        });
        this.challengeSteps.push({
          type: "quiz",
          question: level.questions[3], // Revolusi = musim & tahun
          index: 2,
          total: 3
        });
        break;

      case "mars":
        // 1. Mini-game Fisika Pendaratan Mars Lander
        this.challengeSteps.push({ type: "mars_lander" });
        // 2. Soal Besi Oksida & 2 Bulan
        this.challengeSteps.push({
          type: "quiz",
          question: level.questions[0], // Karat besi oksida
          index: 1,
          total: 3
        });
        this.challengeSteps.push({
          type: "quiz",
          question: level.questions[1], // Phobos & Deimos
          index: 2,
          total: 3
        });
        break;

      case "jupiter":
        // 1. Mini-game Urutkan Skala 8 Planet
        this.challengeSteps.push({ type: "size_sorter" });
        // 2. Soal Bintik Merah Raksasa & Satelit Ganymede
        this.challengeSteps.push({
          type: "quiz",
          question: level.questions[0], // Bintik Merah Raksasa
          index: 1,
          total: 3
        });
        this.challengeSteps.push({
          type: "quiz",
          question: level.questions[4], // Ganymede
          index: 2,
          total: 3
        });
        break;

      case "saturn":
        // 1. Mini-game Tangkap Partikel Cincin Es
        this.challengeSteps.push({ type: "ring_catcher" });
        // 2. Soal Komposisi Cincin & Mengapung di Air
        this.challengeSteps.push({
          type: "quiz",
          question: level.questions[0], // Komposisi partikel es cincin
          index: 1,
          total: 3
        });
        this.challengeSteps.push({
          type: "quiz",
          question: level.questions[1], // Mengapung di air
          index: 2,
          total: 3
        });
        break;

      case "uranus":
        // 1. Mini-game Kartu Karakteristik Uranus
        this.challengeSteps.push({ type: "card_matcher" });
        // 2. Soal Poros Miring & Raksasa Es
        this.challengeSteps.push({
          type: "quiz",
          question: level.questions[0], // Kemiringan 98 derajat
          index: 1,
          total: 3
        });
        this.challengeSteps.push({
          type: "quiz",
          question: level.questions[1], // Metana penyerap warna merah
          index: 2,
          total: 3
        });
        break;

      case "neptune":
        // Badai Supersonik & Kala Revolusi
        window.gameState.session.questions.slice(0, 5).forEach((q, idx) => {
          this.challengeSteps.push({
            type: "speed_quiz",
            question: q,
            index: idx,
            total: 5
          });
        });
        break;

      case "pluto_belt":
        // 1. Mini-game Detektif 3 Syarat Planet IAU
        this.challengeSteps.push({ type: "dwarf_detective" });
        // 2. Soal Sabuk Asteroid & Sabuk Kuiper
        this.challengeSteps.push({
          type: "quiz",
          question: level.questions[1], // Letak Sabuk Asteroid (Mars - Jupiter)
          index: 1,
          total: 3
        });
        this.challengeSteps.push({
          type: "quiz",
          question: level.questions[2], // Ceres
          index: 2,
          total: 3
        });
        break;

      case "commander_exam":
      default:
        // Ujian Komandan Antariksa: 6 Soal Sintesis Menyeluruh
        window.gameState.session.questions.slice(0, 6).forEach((q, idx) => {
          this.challengeSteps.push({
            type: "quiz",
            question: q,
            index: idx,
            total: 6
          });
        });
        break;
    }

    // Jalankan Langkah Pertama
    this.executeCurrentChallengeStep();
  }

  executeCurrentChallengeStep() {
    const step = this.challengeSteps[this.currentStepIndex];
    if (!step) {
      this.completeChallenge();
      return;
    }

    switch (step.type) {
      case "speed_quiz":
        this.quizEngine.render(step.question, step.index, step.total, (isCorrect, hintUsed) => {
          window.gameState.recordAnswer(isCorrect, hintUsed);
        }, true);
        break;

      case "quiz":
        this.quizEngine.render(step.question, step.index, step.total, (isCorrect, hintUsed) => {
          window.gameState.recordAnswer(isCorrect, hintUsed);
        }, false);
        break;

      case "atmosphere_puzzle":
        this.atmospherePuzzle.render((success) => {
          if (success) {
            window.gameState.session.score += 200;
            this.handleNextChallengeStep();
          }
        });
        break;

      case "mars_lander":
        this.marsLander.render((success) => {
          if (success) {
            window.gameState.session.score += 250;
            this.handleNextChallengeStep();
          }
        });
        break;

      case "size_sorter":
        this.sizeSorter.render((success) => {
          if (success) {
            window.gameState.session.score += 250;
            this.handleNextChallengeStep();
          }
        });
        break;

      case "ring_catcher":
        this.ringCatcher.render((success) => {
          if (success) {
            window.gameState.session.score += 250;
            this.handleNextChallengeStep();
          }
        });
        break;

      case "card_matcher":
        this.cardMatcher.render((success) => {
          if (success) {
            window.gameState.session.score += 200;
            this.handleNextChallengeStep();
          }
        });
        break;

      case "dwarf_detective":
        this.dwarfDetective.render((success) => {
          if (success) {
            window.gameState.session.score += 200;
            this.handleNextChallengeStep();
          }
        });
        break;
    }
  }

  handleNextChallengeStep() {
    this.currentStepIndex++;
    if (this.currentStepIndex < this.challengeSteps.length) {
      this.executeCurrentChallengeStep();
    } else {
      this.completeChallenge();
    }
  }

  // 4. Layar Hasil Tantangan & Umpan Balik
  completeChallenge() {
    const summary = window.gameState.completeCurrentLevel();
    const level = window.gameState.currentLevel;

    window.soundSystem.playVictory();

    // Render Bintang
    const starsContainer = document.getElementById("resultStarsRow");
    if (starsContainer) {
      starsContainer.innerHTML = "";
      for (let i = 1; i <= 3; i++) {
        const isEarned = i <= summary.starsEarned;
        const star = document.createElement("div");
        star.style.fontSize = "2.8rem";
        star.style.color = isEarned ? "#fbbf24" : "rgba(255, 255, 255, 0.2)";
        star.style.transition = `all 0.4s ease ${i * 0.2}s`;
        star.textContent = isEarned ? "★" : "☆";
        starsContainer.appendChild(star);
      }
    }

    document.getElementById("resultPlanetName").textContent = level.name;
    document.getElementById("resultScore").textContent = summary.score;
    document.getElementById("resultFuel").textContent = `${summary.fuelRemaining}%`;

    // Evaluasi Topik yang Perlu Diulang
    const wrongAnswers = window.gameState.session.userAnswers.filter(a => !a.isCorrect);
    const reviewBox = document.getElementById("resultReviewBox");
    const reviewList = document.getElementById("resultReviewList");

    if (wrongAnswers.length > 0 && reviewBox && reviewList) {
      reviewBox.style.display = "block";
      reviewList.innerHTML = "";
      wrongAnswers.forEach(item => {
        const li = document.createElement("li");
        li.style.marginBottom = "8px";
        li.innerHTML = `<strong>${item.question.question}</strong><br><span style="color: #94a3b8; font-size: 0.9rem;">${item.question.explanation}</span>`;
        reviewList.appendChild(li);
      });
    } else if (reviewBox) {
      reviewBox.style.display = "none";
    }

    // Notifikasi Lencana Baru jika ada
    const badgeBox = document.getElementById("resultBadgeBox");
    if (level.badge && badgeBox) {
      badgeBox.style.display = "flex";
      document.getElementById("resultBadgeTitle").textContent = level.badge.title;
      document.getElementById("resultBadgeDesc").textContent = level.badge.desc;
    }

    this.showScreen("screenResult");
  }

  // 5. Modal Buku Catatan Astronaut (Codex)
  openNotebookModal() {
    const modal = document.getElementById("modalNotebook");
    const container = document.getElementById("notebookPlanetsList");
    if (!modal || !container) return;

    container.innerHTML = "";
    const profile = window.gameState.profile;

    window.SOLAR_GAME_DATA.levels.forEach(lvl => {
      const isUnlocked = profile.unlockedLevels.includes(lvl.id);
      const card = document.createElement("div");
      card.style.background = "rgba(30, 41, 59, 0.5)";
      card.style.border = "1px solid var(--border-glass)";
      card.style.borderRadius = "var(--radius-md)";
      card.style.padding = "16px";
      card.style.marginBottom = "12px";

      if (!isUnlocked) {
        card.innerHTML = `
          <div style="display: flex; align-items: center; gap: 12px; opacity: 0.5;">
            <div style="font-size: 1.5rem;">🔒</div>
            <div>
              <div style="font-weight: 700; color: #94a3b8;">${lvl.name} (Terkunci)</div>
              <div style="font-size: 0.85rem; color: #64748b;">Selesaikan misi sebelumnya untuk membuka catatan sains planet ini.</div>
            </div>
          </div>
        `;
      } else {
        let factsHTML = "";
        lvl.notebookFacts.forEach(fact => {
          factsHTML += `<li style="margin-bottom: 6px; font-size: 0.95rem; line-height: 1.4;">${fact}</li>`;
        });

        card.innerHTML = `
          <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 12px;">
            <div style="width: 48px; height: 48px; flex-shrink: 0;">
              ${UIController.getPlanetSVG(lvl.id, 48)}
            </div>
            <div>
              <h4 style="font-size: 1.15rem; color: #38bdf8; margin-bottom: 2px;">${lvl.name}</h4>
              <div style="font-size: 0.85rem; color: #94a3b8;">${lvl.category}</div>
            </div>
          </div>
          <p style="font-size: 0.9rem; color: #cbd5e1; margin-bottom: 10px; line-height: 1.5;">${lvl.summary}</p>
          <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 14px; border-radius: var(--radius-sm); border-left: 3px solid #facc15;">
            <div style="font-size: 0.8rem; font-weight: 700; color: #facc15; text-transform: uppercase; margin-bottom: 6px;">Fakta Menakjubkan:</div>
            <ul style="padding-left: 18px; color: #f8fafc;">${factsHTML}</ul>
          </div>
        `;
      }

      container.appendChild(card);
    });

    modal.classList.add("active");
  }

  // 6. Modal Hangar Roket
  openHangarModal() {
    const modal = document.getElementById("modalHangar");
    const container = document.getElementById("hangarSkinsList");
    if (!modal || !container) return;

    container.innerHTML = "";
    const profile = window.gameState.profile;

    window.SOLAR_GAME_DATA.rocketSkins.forEach(skin => {
      const isUnlocked = profile.unlockedSkins.includes(skin.id);
      const isEquipped = profile.equippedSkin === skin.id;

      const card = document.createElement("div");
      card.className = "option-btn";
      card.style.justifyContent = "space-between";
      card.style.cursor = isUnlocked ? "pointer" : "not-allowed";
      if (isEquipped) {
        card.style.borderColor = "#38bdf8";
        card.style.background = "rgba(56, 189, 248, 0.15)";
      }

      card.innerHTML = `
        <div style="display: flex; align-items: center; gap: 16px;">
          <div style="width: 60px; height: 60px;">
            ${UIController.getRocketSVG(skin.id, 60, 60)}
          </div>
          <div>
            <div style="font-weight: 700; font-size: 1.05rem; color: #f8fafc;">${skin.name}</div>
            <div style="font-size: 0.85rem; color: #94a3b8;">${skin.desc}</div>
            <div style="font-size: 0.8rem; color: ${isUnlocked ? '#4ade80' : '#fbbf24'}; margin-top: 4px; font-weight: 600;">
              ${isUnlocked ? 'Terbuka' : `Butuh ${skin.starsRequired} Bintang (Miliki: ${profile.stars})`}
            </div>
          </div>
        </div>
        <div>
          ${isEquipped ? `
            <span class="btn btn-secondary" style="padding: 6px 14px; font-size: 0.85rem; cursor: default; color: #38bdf8;">Sedang Dipakai</span>
          ` : isUnlocked ? `
            <button class="btn btn-primary btn-equip-skin" data-skin-id="${skin.id}" style="padding: 8px 16px; font-size: 0.9rem;">Pasang Roket</button>
          ` : `
            <span style="font-size: 1.3rem;">🔒</span>
          `}
        </div>
      `;

      if (isUnlocked && !isEquipped) {
        card.querySelector(".btn-equip-skin").onclick = (e) => {
          e.stopPropagation();
          profile.equippedSkin = skin.id;
          window.StorageManager.save(profile);
          window.soundSystem.playClick();
          this.openHangarModal();
        };
      }

      container.appendChild(card);
    });

    modal.classList.add("active");
  }
}

// Inisialisasi Saat Dokumen Siap
window.addEventListener("DOMContentLoaded", () => {
  window.app = new SolarMissionApp();
  window.app.init();
});
