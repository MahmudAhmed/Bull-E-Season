const crash = new Audio('./dist/crash.mp3');
const backgroundMusic = document.getElementById("background-music");
const toggleSound = document.getElementById("music")


toggleSound.onclick = function () {
  document.querySelector(".fa-volume-mute").classList.toggle("fa-volume-off")
  togglePlay();
}


let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    backgroundMusic.pause()
  } else {
    backgroundMusic.play();
  }
};

backgroundMusic.onplaying = function () {
  isPlaying = true;
};
backgroundMusic.onpause = function () {
  isPlaying = false;
};


