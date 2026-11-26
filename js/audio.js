/**
 * AUDIO SYNTHESIZER (Web Audio API)
 * Zero external audio files required! Synthesizes sound effects and ambient cosmic music directly.
 */

class SoundSystem {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.bgmPlaying = false;
    this.bgmTimer = null;
    this.masterGain = null;
    this.sfxGain = null;
    this.bgmGain = null;

    // Baca preferensi mute dari localStorage
    const savedMute = localStorage.getItem("solarmission_muted");
    if (savedMute !== null) {
      this.isMuted = savedMute === "true";
    }
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.sfxGain = this.ctx.createGain();
        this.bgmGain = this.ctx.createGain();

        this.sfxGain.connect(this.masterGain);
        this.bgmGain.connect(this.masterGain);
        this.masterGain.connect(this.ctx.destination);

        this.updateGainLevels();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  updateGainLevels() {
    if (!this.masterGain) return;
    this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.8, this.ctx.currentTime);
    this.sfxGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
    this.bgmGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
  }

  toggleMute() {
    this.init();
    this.isMuted = !this.isMuted;
    localStorage.setItem("solarmission_muted", this.isMuted.toString());
    this.updateGainLevels();
    return this.isMuted;
  }

  // SFX: Klik Tombol UI
  playClick() {
    this.init();
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // SFX: Jawaban Benar (Arpeggio Nada Sukses C5 - E5 - G5 - C6)
  playCorrect() {
    this.init();
    if (this.isMuted || !this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, index) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = this.ctx.currentTime + index * 0.07;
        const dur = 0.18;

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.3, start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, start + dur);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(start);
        osc.stop(start + dur);
      });
    } catch (e) {}
  }

  // SFX: Jawaban Kurang Tepat (Nada Rendah Lembut)
  playIncorrect() {
    this.init();
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(130, now + 0.25);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.26);
    } catch (e) {}
  }

  // SFX: Pendorong Roket (Thrust Noise)
  playThrust(duration = 0.3) {
    this.init();
    if (this.isMuted || !this.ctx) return;
    try {
      const bufferSize = this.ctx.sampleRate * duration;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(450, this.ctx.currentTime);
      filter.frequency.linearRampToValueAtTime(200, this.ctx.currentTime + duration);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.sfxGain);

      whiteNoise.start();
      whiteNoise.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  // SFX: Bintang Diraih (Chime Berkilau)
  playStar() {
    this.init();
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = "sine";
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(1800, now + 0.2);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {}
  }

  // SFX: Level Selesai / Fanfar Kemenangan
  playVictory() {
    this.init();
    if (this.isMuted || !this.ctx) return;
    try {
      const notes = [
        { f: 523.25, d: 0.12, t: 0 },
        { f: 659.25, d: 0.12, t: 0.12 },
        { f: 783.99, d: 0.12, t: 0.24 },
        { f: 1046.5, d: 0.4, t: 0.36 }
      ];
      notes.forEach(n => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = this.ctx.currentTime + n.t;

        osc.type = "triangle";
        osc.frequency.setValueAtTime(n.f, start);

        gain.gain.setValueAtTime(0.35, start);
        gain.gain.exponentialRampToValueAtTime(0.01, start + n.d);

        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(start);
        osc.stop(start + n.d);
      });
    } catch (e) {}
  }

  // BGM Kosmik Ambient Sintetis
  startAmbientBGM() {
    this.init();
    if (this.bgmPlaying || !this.ctx) return;
    this.bgmPlaying = true;

    const chords = [
      [130.81, 196.00, 261.63], // C3, G3, C4
      [146.83, 220.00, 293.66], // D3, A3, D4
      [164.81, 246.94, 329.63], // E3, B3, E4
      [174.61, 261.63, 349.23]  // F3, C4, F4
    ];
    let step = 0;

    const playChordStep = () => {
      if (!this.bgmPlaying || this.isMuted) {
        this.bgmTimer = setTimeout(playChordStep, 4000);
        return;
      }
      try {
        const chord = chords[step % chords.length];
        step++;
        chord.forEach(freq => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const now = this.ctx.currentTime;
          const dur = 3.6;

          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now);

          gain.gain.setValueAtTime(0.001, now);
          gain.gain.linearRampToValueAtTime(0.04, now + 1.2);
          gain.gain.linearRampToValueAtTime(0.001, now + dur);

          osc.connect(gain);
          gain.connect(this.bgmGain);
          osc.start(now);
          osc.stop(now + dur);
        });
      } catch (e) {}
      this.bgmTimer = setTimeout(playChordStep, 3800);
    };

    playChordStep();
  }

  stopAmbientBGM() {
    this.bgmPlaying = false;
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
  }
}

window.soundSystem = new SoundSystem();
