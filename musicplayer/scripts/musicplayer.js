const audio = document.getElementById("player");
const playPause = document.getElementById("playPause");
const seekBar = document.getElementById("seekBar");

playPause.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPause.textContent = "⏸";
  } else {
    audio.pause();
    playPause.textContent = "▶";
  }
});

audio.addEventListener("timeupdate", () => {
  seekBar.max = audio.duration;
  seekBar.value = audio.currentTime;
});

seekBar.addEventListener("input", () => {
  audio.currentTime = seekBar.value;
});
