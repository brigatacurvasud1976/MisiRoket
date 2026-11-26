/**
 * RING PARTICLE CATCHER (SATURNUS)
 * Mini-game refleks kanvas: mengendalikan roket secara horizontal
 * untuk menangkap 8 partikel kristal es cincin dan menghindari batuan bahaya.
 */

class RingCatcher {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.canvas = null;
    this.ctx = null;
    this.animId = null;
    this.score = 0;
    this.targetScore = 6;
    this.playerX = 250;
    this.particles = [];
    this.isGameOver = false;
    this.onComplete = null;
  }

  render(onComplete) {
    if (!this.container) return;
    this.onComplete = onComplete;
    this.score = 0;
    this.particles = [];
    this.isGameOver = false;
    this.playerX = 250;

    this.container.innerHTML = `
      <div class="mascot-card" style="margin-bottom: 12px;">
        <div class="mascot-avatar">
          <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07A7 7 0 0 1 5.07 11H5a1 1 0 0 1 0-2h.07A7 7 0 0 1 11 3.07V3a1 1 0 0 1 2 0v.07A7 7 0 0 1 18.93 9H19a1 1 0 0 1 0 2h-.07A7 7 0 0 1 13 16.93z"/></svg>
        </div>
        <div class="mascot-bubble">
          <div class="mascot-name">Kapti Astro</div>
          <div class="mascot-text">Cincin Saturnus tersusun dari <strong>miliaran partikel es air murni</strong>! Gerakkan roketmu ke kiri dan kanan untuk mengumpulkan <strong>6 kristal es biru/putih</strong> dan hindari serpihan batu merah!</div>
        </div>
      </div>

      <div style="position: relative; width: 100%; max-width: 560px; margin: 0 auto;">
        <canvas id="ringCanvas" width="540" height="320" style="width: 100%; height: auto; background: #0c1222; border-radius: var(--radius-lg); border: 2px solid #eab308; display: block;"></canvas>
        <div style="position: absolute; top: 12px; left: 16px; font-weight: 700; color: #facc15;">
          Partikel Es Terkumpul: <span id="ringScoreText">0</span> / 6
        </div>
      </div>

      <!-- Kontrol Layar Sentuh & Tombol Navigasi -->
      <div style="display: flex; justify-content: center; gap: 20px; margin-top: 14px;">
        <button class="btn btn-secondary" id="btnMoveLeft" style="min-width: 110px; font-size: 1.2rem;" aria-label="Geser Kiri">
          ◀ KIRI
        </button>
        <button class="btn btn-secondary" id="btnMoveRight" style="min-width: 110px; font-size: 1.2rem;" aria-label="Geser Kanan">
          KANAN ▶
        </button>
      </div>

      <div id="ringStatusMsg" style="text-align: center; margin-top: 8px; font-weight: 700; min-height: 24px;"></div>
    `;

    this.canvas = document.getElementById("ringCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.bindEvents();
    this.loop();
  }

  bindEvents() {
    const moveLeft = () => {
      this.playerX = Math.max(30, this.playerX - 35);
    };
    const moveRight = () => {
      this.playerX = Math.min(this.canvas.width - 30, this.playerX + 35);
    };

    document.getElementById("btnMoveLeft").onclick = moveLeft;
    document.getElementById("btnMoveRight").onclick = moveRight;

    window.addEventListener("keydown", (e) => {
      if (this.isGameOver) return;
      if (e.key === "ArrowLeft" || e.key === "a") moveLeft();
      if (e.key === "ArrowRight" || e.key === "d") moveRight();
    });

    // Kontrol geser sentuh canvas
    let touchStartX = 0;
    this.canvas.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    this.canvas.addEventListener("touchmove", (e) => {
      const diff = e.touches[0].clientX - touchStartX;
      this.playerX = Math.max(30, Math.min(this.canvas.width - 30, this.playerX + diff * 0.3));
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
  }

  spawnParticle() {
    if (Math.random() < 0.04) {
      const isHazard = Math.random() < 0.25;
      this.particles.push({
        x: Math.random() * (this.canvas.width - 40) + 20,
        y: -10,
        speed: Math.random() * 2 + 2,
        isHazard,
        radius: isHazard ? 9 : 7
      });
    }
  }

  loop() {
    if (this.isGameOver) return;

    this.spawnParticle();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Garis Orbit Partikel Cincin Latar Belakang
    this.ctx.strokeStyle = "rgba(234, 179, 8, 0.15)";
    this.ctx.lineWidth = 1.5;
    for (let i = 40; i < this.canvas.height; i += 50) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, i);
      this.ctx.lineTo(this.canvas.width, i);
      this.ctx.stroke();
    }

    // Update & Render Partikel
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.y += p.speed;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.isHazard ? "#ef4444" : "#38bdf8";
      this.ctx.shadowColor = p.isHazard ? "#f87171" : "#7dd3fc";
      this.ctx.shadowBlur = 8;
      this.ctx.fill();
      this.ctx.shadowBlur = 0;

      // Cek Tabrakan dengan Roket di bawah (y = 280)
      const dist = Math.hypot(p.x - this.playerX, p.y - 280);
      if (dist < p.radius + 18) {
        if (p.isHazard) {
          window.soundSystem.playIncorrect();
          // Kurangi skor jika terkena hazard
          this.score = Math.max(0, this.score - 1);
        } else {
          window.soundSystem.playStar();
          this.score++;
        }

        const scoreEl = document.getElementById("ringScoreText");
        if (scoreEl) scoreEl.textContent = this.score;

        this.particles.splice(i, 1);

        // Cek Kemenangan
        if (this.score >= this.targetScore) {
          this.isGameOver = true;
          window.soundSystem.playVictory();
          const status = document.getElementById("ringStatusMsg");
          status.innerHTML = `<span style="color: #4ade80;">✨ Target tercapai! Koleksi partikel es cincin Saturnus berhasil dianalisis!</span>`;
          setTimeout(() => {
            if (this.onComplete) this.onComplete(true);
          }, 1500);
          return;
        }
        continue;
      }

      if (p.y > this.canvas.height + 20) {
        this.particles.splice(i, 1);
      }
    }

    // Gambar Roket Pemain
    const rx = this.playerX;
    const ry = 280;
    this.ctx.fillStyle = "#ffffff";
    this.ctx.beginPath();
    this.ctx.moveTo(rx, ry - 14);
    this.ctx.lineTo(rx + 14, ry + 12);
    this.ctx.lineTo(rx - 14, ry + 12);
    this.ctx.closePath();
    this.ctx.fill();

    // Sayap Roket
    this.ctx.fillStyle = "#eab308";
    this.ctx.fillRect(rx - 16, ry + 4, 32, 6);

    this.animId = requestAnimationFrame(() => this.loop());
  }
}

window.RingCatcher = RingCatcher;
