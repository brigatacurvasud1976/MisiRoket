/**
 * STORAGE MANAGER (localStorage)
 * Menyimpan dan memuat progres pemain, bintang, level terbuka, lencana, dan skin roket.
 */

const STORAGE_KEY = "solarmission_save_v1";

const DEFAULT_STATE = {
  fuel: 100,
  maxFuel: 100,
  stars: 0,
  unlockedLevels: ["mercury"], // Level pertama terbuka secara default
  levelScores: {}, // { mercury: { stars: 3, score: 950, completed: true } }
  badges: [], // ['badge_mercury', ...]
  unlockedSkins: ["classic_explorer"],
  equippedSkin: "classic_explorer",
  consecutiveCorrect: 0,
  consecutiveWrong: 0,
  totalCorrect: 0,
  totalAnswered: 0
};

class StorageManager {
  static load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return { ...DEFAULT_STATE };
      const parsed = JSON.parse(data);
      return { ...DEFAULT_STATE, ...parsed };
    } catch (e) {
      console.warn("Gagal memuat save game:", e);
      return { ...DEFAULT_STATE };
    }
  }

  static save(state) {
    try {
      const payload = {
        fuel: state.fuel,
        maxFuel: state.maxFuel,
        stars: state.stars,
        unlockedLevels: state.unlockedLevels,
        levelScores: state.levelScores,
        badges: state.badges,
        unlockedSkins: state.unlockedSkins,
        equippedSkin: state.equippedSkin,
        totalCorrect: state.totalCorrect,
        totalAnswered: state.totalAnswered
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
      console.warn("Gagal menyimpan game:", e);
    }
  }

  static reset() {
    localStorage.removeItem(STORAGE_KEY);
    return { ...DEFAULT_STATE };
  }
}

window.StorageManager = StorageManager;
