/**
 * MARS LANDER PHYSICS SIMULATOR
 * Simulasi pendaratan roket di permukaan Mars dengan gaya gravitasi 38% Bumi.
 * Pemain mengendalikan semburan pendorong pendarat (Thrust) agar mendarat halus di pad.
 */

class MarsLander {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.canvas = null;
    this.ctx = null;
    this.animId = null;

    // Parameter Fisika
    this.gravity = 0.08; // 38% skala visual
    this.thrustPower = 0.22;
    this.fuel = 100;
    this.y = 30;
    this.x = 200;
    this.vy = 0;
    this.vx = 0;
    this.isThrusting = false;
    this.isGameOver = false;
    this.onComplete = null;
  }

  render(onComplete) {
    if (!this.container) return;
    this.onComplete = onComplete;
    this.fuel = 100;
    this.y = 40;
    this.vy = 0;
    this.vx = 0;
    this.isGameOver = false;

    this.container.innerHTML = `
      <div class="mascot-card" style="margin-bottom: 12px;">
        <div class="mascot-avatar">
          <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07A7 7 0 0 1 5.07 11H5a1 1 0 0 1 0-2h.07A7 7 0 0 1 11 3.07V3a1 1 0 0 1 2 0v.07A7 7 0 0 1 18.93 9H19a1 1 0 0 1 0 2h-.07A7 7 0 0 1 13 16.93z"/></svg>
        </div>
        <div class="mascot-bubble">
          <div class="mascot-name">Kapti Astro</div>
          <div class="mascot-text">Gravitasi Mars hanya <strong>38% gravitasi Bumi</strong>. Nyalakan pendorong roket dengan menahan tombol <strong>SEMBURAN DORONG</strong> atau tombol <strong>SPASI</strong> agar roket mendarat perlahan di landasan merah (Kecepatan vertikal harus &lt; 2.2 m/s)!</div>
        </div>
      </div>

      <div style="position: relative; width: 100%; max-width: 600px; margin: 0 auto;">
        <canvas id="marsCanvas" width="560" height="320" style="width: 100%; height: auto; background: #1e1111; border-radius: var(--radius-lg); border: 2px solid #7f1d1d; display: block;"></canvas>
        
        <div style="position: absolute; top: 12px; left: 16px; display: flex; gap: 14px; font-weight: 700; font-size: 0.9rem;">
          <span style="color: #38bdf8;">Bahan Bakar: <span id="landerFuelText">100</span>%</span>
          <span id="landerSpeedText" style="color: #4ade80;">Laju Turun: 0.0 m/s</span>
        </div>
      </div>

      <div style="display: flex; justify-content: center; gap: 16px; margin-top: 16px;">
        <button class="btn btn-primary" id="btnThrust" style="padding: 16px 36px; font-size: 1.15rem; min-width: 220px;" aria-label="Nyalakan Daya Dorong Roket">
          🔥 SEMBURAN DORONG (SPASI)
        </button>
        <button class="btn btn-secondary" id="btnResetLander" style="display: none;">
          Coba Ulang Pendaratan 🔄
        </button>
      </div>

      <div id="landerMessage" style="text-align: center; margin-top: 10px; font-weight: 700; font-size: 1.1rem; min-height: 28px;"></div>
    `;

    this.canvas = document.getElementById("marsCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2;

    this.bindEvents();
    this.loop();
  }

  bindEvents() {
    const btnThrust = document.getElementById("btnThrust");
    const btnReset = document.getElementById("btnResetLander");

    const startThrust = (e) => {
      e.preventDefault();
      if (!this.isGameOver && this.fuel > 0) {
        this.isThrusting = true;
        window.soundSystem.playThrust(0.3);
      }
    };

    const stopThrust = (e) => {
      e.preventDefault();
      this.isThrusting = false;
    };

    btnThrust.addEventListener("mousedown", startThrust);
    btnThrust.addEventListener("mouseup", stopThrust);
    btnThrust.addEventListener("mouseleave", stopThrust);
    btnThrust.addEventListener("touchstart", startThrust, { passive: false });
    btnThrust.addEventListener("touchend", stopThrust);

    window.addEventListener("keydown", (e) => {
      if (e.code === "Space" && !this.isGameOver) {
        e.preventDefault();
        this.isThrusting = true;
        window.soundSystem.playThrust(0.3);
      }
    });

    window.addEventListener("keyup", (e) => {
      if (e.code === "Space") {
        this.isThrusting = false;
      }
    });

    btnReset.addEventListener("click", () => {
      window.soundSystem.playClick();
      this.render(this.onComplete);
    });
  }

  loop() {
    if (this.isGameOver) return;

    // Update Physics
    if (this.isThrusting && this.fuel > 0) {
      this.vy -= this.thrustPower;
      this.fuel = Math.max(0, this.fuel - 0.4);
    }
    this.vy += this.gravity;
    this.y += this.vy;

    // Render Canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Permukaan Berbatu Mars
    this.ctx.fillStyle = "#991b1b";
    this.ctx.beginPath();
    this.ctx.moveTo(0, 280);
    this.ctx.lineTo(160, 285);
    this.ctx.lineTo(220, 275);
    this.ctx.lineTo(340, 275); // Landing Pad
    this.ctx.lineTo(400, 285);
    this.ctx.lineTo(this.canvas.width, 280);
    this.ctx.lineTo(this.canvas.width, this.canvas.height);
    this.ctx.lineTo(0, this.canvas.height);
    this.ctx.fill();

    // Landing Pad Biru Cerah
    this.ctx.fillStyle = "#38bdf8";
    this.ctx.fillRect(220, 274, 120, 6);

    // Roket Lander
    const rx = this.x;
    const ry = this.y;

    // Api jika thrust aktif
    if (this.isThrusting && this.fuel > 0) {
      this.ctx.fillStyle = "#f97316";
      this.ctx.beginPath();
      this.ctx.moveTo(rx - 6, ry + 16);
      this.ctx.lineTo(rx + 6, ry + 16);
      this.ctx.lineTo(rx, ry + 28 + Math.random() * 8);
      this.ctx.fill();
    }

    // Badan Kapsul Roket
    this.ctx.fillStyle = "#f8fafc";
    this.ctx.beginPath();
    this.ctx.moveTo(rx, ry - 14);
    this.ctx.lineTo(rx + 12, ry + 14);
    this.ctx.lineTo(rx - 12, ry + 14);
    this.ctx.closePath();
    this.ctx.fill();

    // Kaki Pendarat
    this.ctx.strokeStyle = "#cbd5e1";
    this.ctx.lineWidth = 2.5;
    this.ctx.beginPath();
    this.ctx.moveTo(rx - 8, ry + 12);
    this.ctx.lineTo(rx - 16, ry + 22);
    this.ctx.moveTo(rx + 8, ry + 12);
    this.ctx.lineTo(rx + 16, ry + 22);
    this.ctx.stroke();

    // Update HUD Teks
    const fuelText = document.getElementById("landerFuelText");
    const speedText = document.getElementById("landerSpeedText");
    if (fuelText) fuelText.textContent = Math.round(this.fuel);
    if (speedText) {
      const displaySpeed = Math.abs(this.vy * 2).toFixed(1);
      speedText.textContent = `Laju Turun: ${displaySpeed} m/s`;
      speedText.style.color = (this.vy * 2 <= 2.2) ? "#4ade80" : "#f87171";
    }

    // Cek Sentuhan Tanah
    if (this.y >= 254) {
      this.isGameOver = true;
      const finalSpeed = Math.abs(this.vy * 2);
      const isSafe = finalSpeed <= 2.2;
      const msgEl = document.getElementById("landerMessage");
      const btnReset = document.getElementById("btnResetLander");

      if (isSafe) {
        window.soundSystem.playVictory();
        msgEl.innerHTML = `<span style="color: #4ade80;">🚀 Pendaratan Sempurna di Mars! Laju sentuh: ${finalSpeed.toFixed(1)} m/s (Aman &lt; 2.2 m/s).</span>`;
        setTimeout(() => {
          if (this.onComplete) this.onComplete(true);
        }, 1800);
      } else {
        window.soundSystem.playIncorrect();
        msgEl.innerHTML = `<span style="color: #f87171;">💥 Pendaratan Terlalu Keras! Laju: ${finalSpeed.toFixed(1)} m/s. Gunakan dorongan pendorong lebih sering!</span>`;
        btnReset.style.display = "inline-flex";
      }
      return;
    }

    this.animId = requestAnimationFrame(() => this.loop());
  }
}

window.MarsLander = MarsLander;
