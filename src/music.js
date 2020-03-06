const backgroundMusic = document.getElementById("background-music");

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


module.exports = { togglePlay }

