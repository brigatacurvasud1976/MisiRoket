/**
 * ATMOSPHERE PUZZLE & ROTATION LAB (BUMI)
 * Permainan interaktif menyusun 5 lapisan atmosfer Bumi (Troposfer s.d. Eksosfer)
 * dan simulasi perbandingan rotasi vs revolusi.
 */

class AtmospherePuzzle {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  render(onComplete) {
    if (!this.container) return;

    const layers = [
      { id: "troposfer", name: "1. Troposfer", alt: "0 - 12 km", desc: "Awan, hujan, dan kehidupan makhluk hidup." },
      { id: "stratosfer", name: "2. Stratosfer", alt: "12 - 50 km", desc: "Lapisan Ozon pelindung radiasi UV & lintasan pesawat jet." },
      { id: "mesosfer", name: "3. Mesosfer", alt: "50 - 85 km", desc: "Membakar meteoroid yang melesat menuju Bumi." },
      { id: "termosfer", name: "4. Termosfer", alt: "85 - 600 km", desc: "Suhu tinggi, orbit Stasiun Luar Angkasa (ISS), dan Aurora." },
      { id: "eksosfer", name: "5. Eksosfer", alt: "> 600 km", desc: "Lapisan terluar berbatasan dengan ruang hampa antariksa." }
    ];

    // Acak urutan kartu untuk disusun pemain
    const shuffled = [...layers].sort(() => Math.random() - 0.5);

    this.container.innerHTML = `
      <div class="mascot-card" style="margin-bottom: 16px;">
        <div class="mascot-avatar">
          <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07A7 7 0 0 1 5.07 11H5a1 1 0 0 1 0-2h.07A7 7 0 0 1 11 3.07V3a1 1 0 0 1 2 0v.07A7 7 0 0 1 18.93 9H19a1 1 0 0 1 0 2h-.07A7 7 0 0 1 13 16.93z"/></svg>
        </div>
        <div class="mascot-bubble">
          <div class="mascot-name">Kapti Astro</div>
          <div class="mascot-text">Susun kelima lapisan pelindung atmosfer Bumi secara berurutan dari yang <strong>paling rendah (dekat tanah)</strong> hingga <strong>paling tinggi (luar angkasa)</strong>! Klik atau ketuk kartu untuk memindahkannya ke urutan atas/bawah.</div>
        </div>
      </div>

      <div style="background: rgba(15, 23, 42, 0.6); padding: 16px; border-radius: var(--radius-lg); border: 1px solid var(--border-glass);">
        <div id="layerListContainer" style="display: flex; flex-direction: column; gap: 10px;"></div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 16px;">
        <span id="puzzleStatus" style="font-size: 0.95rem; color: var(--text-muted);">Urutkan: Lapisan #1 di posisi teratas</span>
        <button class="btn btn-success" id="btnCheckAtmosphere">
          Periksa Susunan Atmosfer ✔️
        </button>
      </div>
    `;

    this.renderList(shuffled);

    document.getElementById("btnCheckAtmosphere").onclick = () => {
      window.soundSystem.playClick();
      this.checkSolution(onComplete);
    };
  }

  renderList(items) {
    const container = document.getElementById("layerListContainer");
    if (!container) return;
    container.innerHTML = "";

    items.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "option-btn";
      card.style.justifyContent = "space-between";
      card.style.cursor = "default";
      card.setAttribute("data-id", item.id);

      card.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px;">
          <span class="option-index-badge">${index + 1}</span>
          <div>
            <div style="font-weight: 700; color: #38bdf8;">${item.name} <span style="font-size: 0.8rem; color: #94a3b8;">(${item.alt})</span></div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">${item.desc}</div>
          </div>
        </div>
        <div style="display: flex; gap: 6px;">
          <button class="btn btn-secondary btn-icon-only btn-move-up" style="width: 36px; height: 36px;" ${index === 0 ? 'disabled' : ''} aria-label="Geser Naik">▲</button>
          <button class="btn btn-secondary btn-icon-only btn-move-down" style="width: 36px; height: 36px;" ${index === items.length - 1 ? 'disabled' : ''} aria-label="Geser Turun">▼</button>
        </div>
      `;

      card.querySelector(".btn-move-up").onclick = (e) => {
        e.stopPropagation();
        if (index > 0) {
          const temp = items[index];
          items[index] = items[index - 1];
          items[index - 1] = temp;
          window.soundSystem.playClick();
          this.renderList(items);
        }
      };

      card.querySelector(".btn-move-down").onclick = (e) => {
        e.stopPropagation();
        if (index < items.length - 1) {
          const temp = items[index];
          items[index] = items[index + 1];
          items[index + 1] = temp;
          window.soundSystem.playClick();
          this.renderList(items);
        }
      };

      container.appendChild(card);
    });

    this.currentItems = items;
  }

  checkSolution(onComplete) {
    const correctOrder = ["troposfer", "stratosfer", "mesosfer", "termosfer", "eksosfer"];
    const currentOrder = this.currentItems.map(item => item.id);
    const isCorrect = JSON.stringify(correctOrder) === JSON.stringify(currentOrder);

    const statusEl = document.getElementById("puzzleStatus");
    const btnCheck = document.getElementById("btnCheckAtmosphere");

    if (isCorrect) {
      window.soundSystem.playCorrect();
      statusEl.innerHTML = `<span style="color: #10b981; font-weight: 700;">🎉 Sempurna! Susunan lapisan atmosfermu 100% akurat!</span>`;
      btnCheck.disabled = true;
      btnCheck.style.display = "none";
      setTimeout(() => {
        onComplete(true);
      }, 1500);
    } else {
      window.soundSystem.playIncorrect();
      statusEl.innerHTML = `<span style="color: #ef4444; font-weight: 700;">⚠️ Urutan belum tepat. Ingat: Troposfer paling bawah, Eksosfer paling atas!</span>`;
    }
  }
}

window.AtmospherePuzzle = AtmospherePuzzle;
