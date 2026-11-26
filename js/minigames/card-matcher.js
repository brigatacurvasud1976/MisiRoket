/**
 * TILTED CARD MATCHER (URANUS)
 * Mini-game mencocokkan pasangan kartu konsep sains Uranus:
 * 1. Kemiringan Poros 98° <-> Berotasi Menggelinding & Musim Ekstrem 42 Tahun
 * 2. Gas Metana (CH4) <-> Menyerap Cahaya Merah & Menghasilkan Warna Cyan
 * 3. Raksasa Es (Ice Giant) <-> Mantel Air, Amonia, dan Metana Beku
 * 4. Satelit Miranda <-> Tebing Ngarai Es Verona Rupes Setinggi 20 km
 */

class CardMatcher {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.selectedCard = null;
    this.matchesFound = 0;
    this.totalPairs = 4;
  }

  render(onComplete) {
    if (!this.container) return;
    this.selectedCard = null;
    this.matchesFound = 0;

    const cards = [
      { id: "p1", pairKey: 1, type: "concept", text: "Poros Rotasi Miring 98°" },
      { id: "p1_match", pairKey: 1, type: "desc", text: "Berputar menggelinding ke samping, memicu 42 tahun siang/malam di kutub" },

      { id: "p2", pairKey: 2, type: "concept", text: "Gas Metana di Atmosfer" },
      { id: "p2_match", pairKey: 2, type: "desc", text: "Menyerap spektrum cahaya merah matahari dan memantulkan warna cyan kehijauan" },

      { id: "p3", pairKey: 3, type: "concept", text: "Klasifikasi Raksasa Es" },
      { id: "p3_match", pairKey: 3, type: "desc", text: "Kaya mantel es air, amonia, dan hidrokarbon beku di atas inti padat" },

      { id: "p4", pairKey: 4, type: "concept", text: "Satelit Miranda" },
      { id: "p4_match", pairKey: 4, type: "desc", text: "Bulan berkawah dengan tebing curam tertinggi Verona Rupes (~20 km)" }
    ];

    // Acak urutan kartu
    const shuffled = [...cards].sort(() => Math.random() - 0.5);

    this.container.innerHTML = `
      <div class="mascot-card" style="margin-bottom: 14px;">
        <div class="mascot-avatar">
          <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07A7 7 0 0 1 5.07 11H5a1 1 0 0 1 0-2h.07A7 7 0 0 1 11 3.07V3a1 1 0 0 1 2 0v.07A7 7 0 0 1 18.93 9H19a1 1 0 0 1 0 2h-.07A7 7 0 0 1 13 16.93z"/></svg>
        </div>
        <div class="mascot-bubble">
          <div class="mascot-name">Kapti Astro</div>
          <div class="mascot-text">Uranus adalah planet penuh anomali unik. Cocokkan <strong>kartu konsep (warna biru)</strong> dengan <strong>kartu penjelasannya</strong> dengan mengetuk sepasang kartu yang saling berhubungan!</div>
        </div>
      </div>

      <div id="cardsGrid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;"></div>

      <div id="matchStatusText" style="text-align: center; margin-top: 14px; font-weight: 700; color: var(--accent-cyan);">
        Pasangan Ditemukan: <span id="matchCounter">0</span> / 4
      </div>
    `;

    const grid = document.getElementById("cardsGrid");

    shuffled.forEach(card => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.style.height = "100%";
      btn.style.flexDirection = "column";
      btn.style.alignItems = "flex-start";
      btn.style.justifyContent = "center";
      btn.style.border = card.type === "concept" ? "1.5px solid #38bdf8" : "1.5px solid rgba(255, 255, 255, 0.15)";
      btn.setAttribute("data-pair", card.pairKey);

      btn.innerHTML = `
        <span style="font-size: 0.75rem; text-transform: uppercase; color: ${card.type === 'concept' ? '#38bdf8' : '#94a3b8'}; font-weight: 700; margin-bottom: 4px;">
          ${card.type === 'concept' ? '📌 Konsep Sains' : '🔍 Penjelasan'}
        </span>
        <span style="font-size: 0.95rem; font-weight: 600; line-height: 1.4;">${card.text}</span>
      `;

      btn.onclick = () => {
        if (btn.classList.contains("selected-correct") || btn.disabled) return;
        window.soundSystem.playClick();
        this.handleCardClick(btn, card, onComplete);
      };

      grid.appendChild(btn);
    });
  }

  handleCardClick(btn, card, onComplete) {
    if (!this.selectedCard) {
      // Pilih kartu pertama
      this.selectedCard = { btn, card };
      btn.style.borderColor = "#facc15";
      btn.style.background = "rgba(250, 204, 21, 0.15)";
      return;
    }

    // Jika mengklik kartu yang sama
    if (this.selectedCard.btn === btn) {
      this.selectedCard.btn.style.borderColor = "";
      this.selectedCard.btn.style.background = "";
      this.selectedCard = null;
      return;
    }

    // Cek apakah sepasang (pairKey sama dan tipe berbeda)
    const first = this.selectedCard;
    if (first.card.pairKey === card.pairKey && first.card.type !== card.type) {
      // Cocok!
      window.soundSystem.playCorrect();
      first.btn.classList.add("selected-correct");
      btn.classList.add("selected-correct");
      first.btn.disabled = true;
      btn.disabled = true;

      this.matchesFound++;
      document.getElementById("matchCounter").textContent = this.matchesFound;
      this.selectedCard = null;

      if (this.matchesFound >= this.totalPairs) {
        window.soundSystem.playVictory();
        const status = document.getElementById("matchStatusText");
        status.innerHTML = `<span style="color: #4ade80;">🎉 Sempurna! Seluruh karakteristik sains Uranus berhasil kamu kuasai!</span>`;
        setTimeout(() => onComplete(true), 1500);
      }
    } else {
      // Salah
      window.soundSystem.playIncorrect();
      first.btn.style.borderColor = "#ef4444";
      btn.style.borderColor = "#ef4444";

      setTimeout(() => {
        first.btn.style.borderColor = "";
        first.btn.style.background = "";
        btn.style.borderColor = "";
        btn.style.background = "";
        this.selectedCard = null;
      }, 700);
    }
  }
}

window.CardMatcher = CardMatcher;
