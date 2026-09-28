document.addEventListener("DOMContentLoaded", function () {
  const countEl = document.getElementById("count");
  const totalEl = document.getElementById("total");
  const clickSound = new Audio("audio/click.mp3");

  // one state per layout (Windows / Mac)
  const state = {};
  ["windows", "mac"].forEach((os) => {
    const board = document.getElementById("kb-" + os);
    const keys = [...board.querySelectorAll(".key[data-code]")];
    const map = {};
    keys.forEach((k) => (map[k.dataset.code] = k));
    state[os] = { board, keys, map, tested: new Set() };
  });
  let current = "windows";

  function updateCounter() {
    countEl.textContent = state[current].tested.size;
    totalEl.textContent = state[current].keys.length;
  }
  updateCounter();

  function playSound() {
    // clone so several sounds can overlap when keys are pressed together
    clickSound
      .cloneNode()
      .play()
      .catch(() => {});
  }

  function clearHeld() {
    document
      .querySelectorAll(".key.held")
      .forEach((k) => k.classList.remove("held"));
  }

  function press(e) {
    const st = state[current];
    const el = st.map[e.code];
    if (!el) return;
    el.classList.add("held", "active");
    st.tested.add(e.code);
    updateCounter();
    if (!e.repeat) playSound();
  }

  function release(e) {
    const el = state[current].map[e.code];
    if (el) el.classList.remove("held");
  }

  window.addEventListener("keydown", function (e) {
    e.preventDefault(); // stops F5 refresh, F1 help, Tab focus, Space scroll, etc.
    console.log(e.code + " is pressed");
    press(e);
  });

  window.addEventListener("keyup", function (e) {
    e.preventDefault();
    // Windows often fires only keyup for PrintScreen, so count it here too
    if (e.code === "PrintScreen") press(e);
    release(e);
  });

  window.addEventListener("blur", clearHeld);

  // OS tabs
  document.querySelectorAll(".os-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      current = this.dataset.os;
      document
        .querySelectorAll(".os-btn")
        .forEach((b) => b.classList.toggle("active", b === this));
      Object.keys(state).forEach((os) =>
        state[os].board.classList.toggle("hidden", os !== current),
      );
      clearHeld();
      updateCounter();
      this.blur();
    });
  });

  // Reset (current layout only)
  document.getElementById("resetBtn").addEventListener("click", function () {
    state[current].tested.clear();
    state[current].keys.forEach((k) => k.classList.remove("active", "held"));
    updateCounter();
    this.blur();
  });

  // Fullscreen
  const fullscreenBtn = document.getElementById("fullscreenBtn");
  const exitFullscreenBtn = document.getElementById("exitFullscreenBtn");

  fullscreenBtn.addEventListener("click", function () {
    if (!document.fullscreenElement)
      document.documentElement.requestFullscreen();
    this.blur();
  });
  exitFullscreenBtn.addEventListener("click", function () {
    if (document.exitFullscreen) document.exitFullscreen();
    this.blur();
  });

  document.addEventListener("fullscreenchange", function () {
    const on = !!document.fullscreenElement;
    fullscreenBtn.style.display = on ? "none" : "block";
    exitFullscreenBtn.style.display = on ? "block" : "none";

    
    if (navigator.keyboard) {
      if (on && navigator.keyboard.lock)
        navigator.keyboard.lock().catch(() => {});
      else if (!on && navigator.keyboard.unlock) navigator.keyboard.unlock();
    }
  });
});
