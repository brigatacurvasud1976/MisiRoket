/**
 * PLANETARY SCALE SORTER (JUPITER)
 * Mengurutkan 8 planet dari ukuran diameter terkecil ke terbesar.
 */

class SizeSorter {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  render(onComplete) {
    if (!this.container) return;

    // 8 Planet dengan diameter resmi (km)
    const planets = [
      { id: "mercury", name: "Merkurius", diameter: "4.879 km", rank: 1 },
      { id: "mars", name: "Mars", diameter: "6.779 km", rank: 2 },
      { id: "venus", name: "Venus", diameter: "12.104 km", rank: 3 },
      { id: "earth", name: "Bumi", diameter: "12.742 km", rank: 4 },
      { id: "neptune", name: "Neptunus", diameter: "49.244 km", rank: 5 },
      { id: "uranus", name: "Uranus", diameter: "50.724 km", rank: 6 },
      { id: "saturn", name: "Saturnus", diameter: "116.460 km", rank: 7 },
      { id: "jupiter", name: "Jupiter", diameter: "139.820 km", rank: 8 }
    ];

    // Acak posisi awal
    const shuffled = [...planets].sort(() => Math.random() - 0.5);

    this.container.innerHTML = `
      <div class="mascot-card" style="margin-bottom: 14px;">
        <div class="mascot-avatar">
          <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07A7 7 0 0 1 5.07 11H5a1 1 0 0 1 0-2h.07A7 7 0 0 1 11 3.07V3a1 1 0 0 1 2 0v.07A7 7 0 0 1 18.93 9H19a1 1 0 0 1 0 2h-.07A7 7 0 0 1 13 16.93z"/></svg>
        </div>
        <div class="mascot-bubble">
          <div class="mascot-name">Kapti Astro</div>
          <div class="mascot-text">Jupiter adalah planet raksasa terbesar! Bantulah radar komando menyusun 8 planet dari yang <strong>TERKECIL (urutan 1)</strong> hingga <strong>TERBESAR (urutan 8)</strong>. Gunakan tombol panah atas/bawah untuk mengubah posisi!</div>
        </div>
      </div>

      <div style="background: rgba(15, 23, 42, 0.6); padding: 14px; border-radius: var(--radius-lg); border: 1px solid var(--border-glass); max-height: 380px; overflow-y: auto;">
        <div id="sorterListContainer" style="display: flex; flex-direction: column; gap: 8px;"></div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 14px;">
        <span id="sorterStatus" style="font-size: 0.95rem; color: var(--text-muted);">Urutan: #1 Terkecil ➔ #8 Terbesar</span>
        <button class="btn btn-success" id="btnCheckSizeSort">
          Kunci Urutan Ukuran ✔️
        </button>
      </div>
    `;

    this.renderItems(shuffled);

    document.getElementById("btnCheckSizeSort").onclick = () => {
      window.soundSystem.playClick();
      this.checkSolution(onComplete);
    };
  }

  renderItems(items) {
    const list = document.getElementById("sorterListContainer");
    if (!list) return;
    list.innerHTML = "";

    items.forEach((p, idx) => {
      const row = document.createElement("div");
      row.className = "option-btn";
      row.style.padding = "10px 14px";
      row.style.justifyContent = "space-between";
      row.style.cursor = "default";

      row.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px;">
          <span class="option-index-badge">${idx + 1}</span>
          <div style="font-weight: 700; color: #f8fafc;">
            ${p.name} <span style="font-size: 0.8rem; color: #94a3b8; font-weight: normal;">(Diameter: ${p.diameter})</span>
          </div>
        </div>
        <div style="display: flex; gap: 6px;">
          <button class="btn btn-secondary btn-icon-only btn-move-up" style="width: 32px; height: 32px;" ${idx === 0 ? 'disabled' : ''} aria-label="Naik">▲</button>
          <button class="btn btn-secondary btn-icon-only btn-move-down" style="width: 32px; height: 32px;" ${idx === items.length - 1 ? 'disabled' : ''} aria-label="Turun">▼</button>
        </div>
      `;

      row.querySelector(".btn-move-up").onclick = (e) => {
        e.stopPropagation();
        if (idx > 0) {
          const temp = items[idx];
          items[idx] = items[idx - 1];
          items[idx - 1] = temp;
          window.soundSystem.playClick();
          this.renderItems(items);
        }
      };

      row.querySelector(".btn-move-down").onclick = (e) => {
        e.stopPropagation();
        if (idx < items.length - 1) {
          const temp = items[idx];
          items[idx] = items[idx + 1];
          items[idx + 1] = temp;
          window.soundSystem.playClick();
          this.renderItems(items);
        }
      };

      list.appendChild(row);
    });

    this.currentList = items;
  }

  checkSolution(onComplete) {
    const isCorrect = this.currentList.every((p, i) => p.rank === i + 1);
    const statusEl = document.getElementById("sorterStatus");
    const btnCheck = document.getElementById("btnCheckSizeSort");

    if (isCorrect) {
      window.soundSystem.playCorrect();
      statusEl.innerHTML = `<span style="color: #10b981; font-weight: 700;">🌟 Fantastis! Urutan ukuran dari Merkurius hingga Jupiter tepat 100%!</span>`;
      btnCheck.disabled = true;
      btnCheck.style.display = "none";
      setTimeout(() => onComplete(true), 1500);
    } else {
      window.soundSystem.playIncorrect();
      statusEl.innerHTML = `<span style="color: #ef4444; font-weight: 700;">⚠️ Urutan masih ada yang tertukar. Periksa kembali diameter tiap planet!</span>`;
    }
  }
}

window.SizeSorter = SizeSorter;
