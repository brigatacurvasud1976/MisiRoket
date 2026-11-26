/**
 * UI CONTROLLER & SVG VISUAL GENERATOR
 * Merender grafik planet, antarmuka HUD, peta tata surya, dan dialog interaktif.
 */

class UIController {
  constructor() {
    this.starCanvas = null;
    this.starCtx = null;
    this.stars = [];
    this.initStars();
  }

  // 1. Inisialisasi Kanvas Bintang Kosmik Parallax
  initStars() {
    this.starCanvas = document.getElementById("starCanvas");
    if (!this.starCanvas) return;
    this.starCtx = this.starCanvas.getContext("2d");

    const resize = () => {
      this.starCanvas.width = window.innerWidth;
      this.starCanvas.height = window.innerHeight;
      this.createStars(Math.floor((window.innerWidth * window.innerHeight) / 3500));
    };

    window.addEventListener("resize", resize);
    resize();
    this.animateStars();
  }

  createStars(count) {
    this.stars = [];
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.starCanvas.width,
        y: Math.random() * this.starCanvas.height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleDir: Math.random() > 0.5 ? 1 : -1
      });
    }
  }

  animateStars() {
    if (!this.starCtx) return;
    this.starCtx.clearRect(0, 0, this.starCanvas.width, this.starCanvas.height);

    for (let s of this.stars) {
      s.alpha += s.twinkleSpeed * s.twinkleDir;
      if (s.alpha > 1) { s.alpha = 1; s.twinkleDir = -1; }
      else if (s.alpha < 0.2) { s.alpha = 0.2; s.twinkleDir = 1; }

      this.starCtx.beginPath();
      this.starCtx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      this.starCtx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
      this.starCtx.fill();
    }
    requestAnimationFrame(() => this.animateStars());
  }

  // 2. Generator Visual Planet Berbasis SVG
  static getPlanetSVG(planetId, size = 80) {
    switch (planetId) {
      case "mercury":
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="grad_mercury" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#e5e5e5"/>
                <stop offset="60%" stop-color="#a3a3a3"/>
                <stop offset="100%" stop-color="#404040"/>
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="42" fill="url(#grad_mercury)"/>
            <circle cx="36" cy="38" r="7" fill="#737373" opacity="0.6"/>
            <circle cx="62" cy="45" r="9" fill="#525252" opacity="0.6"/>
            <circle cx="48" cy="65" r="5" fill="#737373" opacity="0.6"/>
            <circle cx="32" cy="62" r="4" fill="#525252" opacity="0.5"/>
          </svg>`;

      case "venus":
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="grad_venus" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#fef08a"/>
                <stop offset="50%" stop-color="#f59e0b"/>
                <stop offset="100%" stop-color="#b45309"/>
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="44" fill="url(#grad_venus)"/>
            <path d="M 15 42 Q 50 32 85 45" stroke="#fef08a" stroke-width="4" fill="none" opacity="0.4" stroke-linecap="round"/>
            <path d="M 12 58 Q 50 68 88 54" stroke="#fef08a" stroke-width="5" fill="none" opacity="0.3" stroke-linecap="round"/>
          </svg>`;

      case "earth":
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="grad_earth" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#60a5fa"/>
                <stop offset="55%" stop-color="#2563eb"/>
                <stop offset="100%" stop-color="#1e3a8a"/>
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="44" fill="url(#grad_earth)"/>
            <!-- Benua & Daratan Hijau -->
            <path d="M 32 30 Q 42 22 55 26 Q 60 38 48 45 Q 36 42 32 30 Z" fill="#22c55e" opacity="0.9"/>
            <path d="M 52 52 Q 68 48 64 68 Q 48 78 44 65 Z" fill="#16a34a" opacity="0.9"/>
            <!-- Awan Putih -->
            <path d="M 22 40 Q 45 44 60 36" stroke="#ffffff" stroke-width="3" fill="none" opacity="0.6" stroke-linecap="round"/>
            <path d="M 38 65 Q 65 60 78 68" stroke="#ffffff" stroke-width="3.5" fill="none" opacity="0.6" stroke-linecap="round"/>
          </svg>`;

      case "mars":
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="grad_mars" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#f87171"/>
                <stop offset="55%" stop-color="#dc2626"/>
                <stop offset="100%" stop-color="#7f1d1d"/>
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="42" fill="url(#grad_mars)"/>
            <!-- Tudung Es Kutub -->
            <ellipse cx="50" cy="12" rx="14" ry="4" fill="#ffffff" opacity="0.85"/>
            <!-- Ngarai & Kawah Besi Oksida -->
            <path d="M 25 48 Q 50 56 75 46" stroke="#991b1b" stroke-width="4" fill="none" opacity="0.7"/>
            <circle cx="36" cy="62" r="6" fill="#991b1b" opacity="0.6"/>
            <circle cx="65" cy="35" r="4" fill="#991b1b" opacity="0.6"/>
          </svg>`;

      case "jupiter":
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="grad_jup" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#fed7aa"/>
                <stop offset="50%" stop-color="#f97316"/>
                <stop offset="100%" stop-color="#9a3412"/>
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="46" fill="url(#grad_jup)"/>
            <!-- Jalur Garis Awan Gas -->
            <line x1="6" y1="34" x2="94" y2="34" stroke="#c2410c" stroke-width="5" opacity="0.6"/>
            <line x1="4" y1="46" x2="96" y2="46" stroke="#fdba74" stroke-width="6" opacity="0.5"/>
            <line x1="6" y1="60" x2="94" y2="60" stroke="#7c2d12" stroke-width="5" opacity="0.7"/>
            <!-- Bintik Merah Raksasa (Great Red Spot) -->
            <ellipse cx="68" cy="62" rx="10" ry="6" fill="#dc2626" stroke="#fca5a5" stroke-width="1.5"/>
          </svg>`;

      case "saturn":
        return `
          <svg width="${size * 1.35}" height="${size}" viewBox="0 0 140 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="grad_sat" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#fef08a"/>
                <stop offset="55%" stop-color="#eab308"/>
                <stop offset="100%" stop-color="#854d0e"/>
              </radialGradient>
            </defs>
            <!-- Cincin Belakang -->
            <ellipse cx="70" cy="50" rx="60" ry="18" fill="none" stroke="rgba(254, 240, 138, 0.45)" stroke-width="8" stroke-dasharray="100 300" stroke-dashoffset="100"/>
            <!-- Bola Planet -->
            <circle cx="70" cy="50" r="34" fill="url(#grad_sat)"/>
            <!-- Cincin Depan -->
            <ellipse cx="70" cy="50" rx="60" ry="18" fill="none" stroke="rgba(254, 240, 138, 0.85)" stroke-width="9" stroke-dasharray="200 200"/>
            <ellipse cx="70" cy="50" rx="50" ry="14" fill="none" stroke="rgba(202, 138, 4, 0.7)" stroke-width="4" stroke-dasharray="200 200"/>
          </svg>`;

      case "uranus":
        return `
          <svg width="${size * 1.15}" height="${size}" viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="grad_ura" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#bae6fd"/>
                <stop offset="60%" stop-color="#38bdf8"/>
                <stop offset="100%" stop-color="#0284c7"/>
              </radialGradient>
            </defs>
            <!-- Poros Miring & Cincin Vertikal -->
            <ellipse cx="60" cy="50" rx="14" ry="46" fill="none" stroke="rgba(186, 230, 253, 0.5)" stroke-width="3" transform="rotate(-15 60 50)"/>
            <circle cx="60" cy="50" r="36" fill="url(#grad_ura)"/>
          </svg>`;

      case "neptune":
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="grad_nep" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#93c5fd"/>
                <stop offset="50%" stop-color="#2563eb"/>
                <stop offset="100%" stop-color="#172554"/>
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="42" fill="url(#grad_nep)"/>
            <!-- Great Dark Spot & Badai Supersonik -->
            <ellipse cx="40" cy="45" rx="8" ry="5" fill="#1e1b4b" opacity="0.8"/>
            <path d="M 20 62 Q 50 54 80 64" stroke="#93c5fd" stroke-width="3" fill="none" opacity="0.5"/>
          </svg>`;

      case "pluto_belt":
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="grad_plu" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#cbd5e1"/>
                <stop offset="60%" stop-color="#64748b"/>
                <stop offset="100%" stop-color="#334155"/>
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="32" fill="url(#grad_plu)"/>
            <!-- Hati Raksasa Tombaugh Regio -->
            <path d="M 44 48 C 42 42 32 44 34 52 C 36 60 44 65 50 70 C 56 65 64 60 66 52 C 68 44 58 42 56 48 Z" fill="#f8fafc" opacity="0.75"/>
            <!-- Asteroid Pengiring -->
            <circle cx="15" cy="25" r="4" fill="#94a3b8"/>
            <circle cx="82" cy="72" r="3.5" fill="#64748b"/>
            <circle cx="85" cy="20" r="3" fill="#cbd5e1"/>
          </svg>`;

      case "commander_exam":
      default:
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="grad_cmd" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#f472b6"/>
                <stop offset="60%" stop-color="#db2777"/>
                <stop offset="100%" stop-color="#831843"/>
              </radialGradient>
            </defs>
            <polygon points="50,8 63,38 95,38 69,57 78,88 50,70 22,88 31,57 5,38 37,38" fill="url(#grad_cmd)" stroke="#fbcfe8" stroke-width="2"/>
            <circle cx="50" cy="50" r="14" fill="#ffffff" opacity="0.3"/>
          </svg>`;
    }
  }

  // 3. Render Roket Pemain Berdasarkan Skin Terpilih
  static getRocketSVG(skinId = "classic_explorer", width = 80, height = 80) {
    const skin = window.SOLAR_GAME_DATA.rocketSkins.find(s => s.id === skinId) || window.SOLAR_GAME_DATA.rocketSkins[0];
    const mainCol = skin.color || "#ffffff";
    const accentCol = skin.accent || "#ef4444";

    return `
      <svg width="${width}" height="${height}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <!-- Api Pendorong (Thruster Flame) -->
        <polygon points="44,82 50,96 56,82" fill="#f97316">
          <animate attributeName="points" dur="0.2s" repeatCount="indefinite" values="44,82 50,96 56,82; 43,82 50,102 57,82; 44,82 50,96 56,82"/>
        </polygon>
        <polygon points="46,82 50,90 54,82" fill="#fef08a"/>
        <!-- Sayap Samping -->
        <polygon points="26,76 38,58 38,78" fill="${accentCol}"/>
        <polygon points="74,76 62,58 62,78" fill="${accentCol}"/>
        <!-- Badan Roket -->
        <path d="M 50 12 Q 36 38 38 80 L 62 80 Q 64 38 50 12 Z" fill="${mainCol}" stroke="#0f172a" stroke-width="1.5"/>
        <!-- Ujung Roket -->
        <path d="M 50 12 Q 42 28 39 36 L 61 36 Q 58 28 50 12 Z" fill="${accentCol}"/>
        <!-- Kaca Kokpit -->
        <circle cx="50" cy="44" r="8" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>
        <circle cx="48" cy="42" r="2.5" fill="#ffffff" opacity="0.8"/>
      </svg>`;
  }

  // 4. Render Peta Tata Surya
  static renderSolarMap() {
    const container = document.getElementById("solarMapGrid");
    if (!container) return;
    container.innerHTML = "";

    const profile = window.gameState.profile;

    window.SOLAR_GAME_DATA.levels.forEach((lvl, idx) => {
      const isUnlocked = profile.unlockedLevels.includes(lvl.id);
      const scoreData = profile.levelScores[lvl.id] || { stars: 0, score: 0 };
      const starsCount = scoreData.stars || 0;

      const card = document.createElement("div");
      card.className = `planet-node-card ${isUnlocked ? "" : "locked"}`;
      card.setAttribute("data-level-id", lvl.id);
      card.setAttribute("tabindex", isUnlocked ? "0" : "-1");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Level ${idx + 1}: ${lvl.name}, ${isUnlocked ? 'Terbuka' : 'Terkunci'}`);

      // Bintang (1-3)
      let starsHTML = "";
      for (let s = 1; s <= 3; s++) {
        const filled = s <= starsCount;
        starsHTML += `
          <svg class="${filled ? 'star-filled' : 'star-empty'}" viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>`;
      }

      card.innerHTML = `
        <span class="planet-order-badge">${lvl.order}</span>
        ${!isUnlocked ? `
          <div class="planet-lock-badge" title="Terkunci: Selesaikan planet sebelumnya">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#94a3b8">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
            </svg>
          </div>
        ` : ''}
        <div class="planet-visual-orb">
          ${UIController.getPlanetSVG(lvl.id, 70)}
        </div>
        <h3 class="planet-name">${lvl.name}</h3>
        <p class="planet-category-label">${lvl.category}</p>
        <div class="planet-stars-indicator">
          ${starsHTML}
        </div>
      `;

      if (isUnlocked) {
        card.addEventListener("click", () => {
          window.soundSystem.playClick();
          window.app.openBriefing(lvl.id);
        });
        card.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            window.soundSystem.playClick();
            window.app.openBriefing(lvl.id);
          }
        });
      }

      container.appendChild(card);
    });
  }

  // 5. Perbarui Status HUD (Bahan Bakar & Bintang)
  static updateHUD() {
    const profile = window.gameState.profile;
    const session = window.gameState.session;

    const fuelEl = document.getElementById("hudFuelValue");
    if (fuelEl) {
      const fuelVal = window.gameState.currentScreen === "challenge" ? session.fuel : profile.fuel;
      fuelEl.textContent = `${fuelVal}%`;
    }

    const starsEl = document.getElementById("hudStarsValue");
    if (starsEl) {
      starsEl.textContent = `${profile.stars}`;
    }

    const soundBtn = document.getElementById("btnToggleSound");
    if (soundBtn) {
      const isMuted = window.soundSystem.isMuted;
      soundBtn.setAttribute("aria-label", isMuted ? "Aktifkan Suara" : "Bisukan Suara");
      soundBtn.innerHTML = isMuted ? `
        <svg viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
      ` : `
        <svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
      `;
    }
  }
}

window.uiController = new UIController();
