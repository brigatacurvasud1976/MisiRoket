/**
 * DWARF PLANET DETECTIVE (PLUTO & SABUK ASTEROID)
 * Menyelidiki 3 kriteria resmi planet menurut Resolusi IAU 2006
 * dan mengklasifikasikan Pluto serta benda Sabuk Asteroid.
 */

class DwarfDetective {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  render(onComplete) {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="mascot-card" style="margin-bottom: 14px;">
        <div class="mascot-avatar">
          <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07A7 7 0 0 1 5.07 11H5a1 1 0 0 1 0-2h.07A7 7 0 0 1 11 3.07V3a1 1 0 0 1 2 0v.07A7 7 0 0 1 18.93 9H19a1 1 0 0 1 0 2h-.07A7 7 0 0 1 13 16.93z"/></svg>
        </div>
        <div class="mascot-bubble">
          <div class="mascot-name">Kapti Astro</div>
          <div class="mascot-text">Pada Sidang Umum IAU 2006 di Praha, astronom menetapkan <strong>3 Syarat Mutlak</strong> bagi sebuah objek untuk disebut planet utama. Analisis kasus <strong>Pluto</strong> di bawah ini dengan mencentang kriteria yang dipenuhi!</div>
        </div>
      </div>

      <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid var(--border-glass); border-radius: var(--radius-lg); padding: 20px;">
        <h4 style="color: #f8fafc; margin-bottom: 14px; font-size: 1.15rem;">Kasus Penyelidikan: Benda Langit "Pluto"</h4>
        
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <label class="option-btn" style="cursor: pointer;">
            <input type="checkbox" id="crit1" style="width: 20px; height: 20px; accent-color: #38bdf8;">
            <span><strong>Syarat 1:</strong> Mengorbit Matahari secara langsung (bukan satelit yang mengelilingi planet lain).</span>
          </label>

          <label class="option-btn" style="cursor: pointer;">
            <input type="checkbox" id="crit2" style="width: 20px; height: 20px; accent-color: #38bdf8;">
            <span><strong>Syarat 2:</strong> Memiliki massa cukup agar gravitasinya membentuk tubuhnya menjadi bola bulat seimbang.</span>
          </label>

          <label class="option-btn" style="cursor: pointer;">
            <input type="checkbox" id="crit3" style="width: 20px; height: 20px; accent-color: #38bdf8;">
            <span><strong>Syarat 3:</strong> Telah membersihkan area lingkungan orbitnya dari objek dan serpihan es/batuan lain.</span>
          </label>
        </div>

        <div style="margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--border-glass);">
          <div style="font-weight: 700; margin-bottom: 8px;">Berdasarkan centang di atas, kesimpulan status resmi Pluto adalah:</div>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <button class="btn btn-secondary choice-verdict" data-verdict="planet">Planet Utama</button>
            <button class="btn btn-secondary choice-verdict" data-verdict="dwarf">Planet Kerdil (Dwarf Planet)</button>
            <button class="btn btn-secondary choice-verdict" data-verdict="asteroid">Komet Berekor</button>
          </div>
        </div>
      </div>

      <div id="detectiveFeedback" style="margin-top: 14px; text-align: center; font-weight: 700; min-height: 28px;"></div>
    `;

    const verdictBtns = document.querySelectorAll(".choice-verdict");
    verdictBtns.forEach(btn => {
      btn.onclick = () => {
        window.soundSystem.playClick();
        const c1 = document.getElementById("crit1").checked;
        const c2 = document.getElementById("crit2").checked;
        const c3 = document.getElementById("crit3").checked;
        const verdict = btn.getAttribute("data-verdict");
        const fb = document.getElementById("detectiveFeedback");

        // Jawaban sains yang benar:
        // Syarat 1 = Ya (Pluto mengorbit matahari)
        // Syarat 2 = Ya (Pluto bulat)
        // Syarat 3 = TIDAK dicentang (Pluto belum membersihkan orbitnya di Sabuk Kuiper)
        // Kesimpulan: Planet Kerdil (Dwarf Planet)
        if (c1 && c2 && !c3 && verdict === "dwarf") {
          window.soundSystem.playVictory();
          btn.classList.remove("btn-secondary");
          btn.classList.add("btn-success");
          fb.innerHTML = `<span style="color: #4ade80;">🎯 Analisis Tepat 100%! Pluto memenuhi syarat 1 & 2 namun gagal di syarat 3 karena berbagi jalur dengan ribuan objek Sabuk Kuiper, sehingga resmi berstatus Planet Kerdil!</span>`;
          setTimeout(() => onComplete(true), 2000);
        } else {
          window.soundSystem.playIncorrect();
          fb.innerHTML = `<span style="color: #f87171;">⚠️ Kurang Tepat! Ingat: Pluto memang bulat dan mengitari matahari, tapi orbitnya masih penuh serpihan es Sabuk Kuiper (syarat 3 gagal). Statusnya adalah Planet Kerdil.</span>`;
        }
      };
    });
  }
}

window.DwarfDetective = DwarfDetective;
