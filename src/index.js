import Game from "./game"
import { togglePlay } from "./music";

window.addEventListener("DOMContentLoaded", () => {
  const toggleSound = document.getElementById("music");
  const restartBtn = document.getElementById("restart");

  toggleSound.onclick = function() {
    document.querySelector(".fa-volume-mute").classList.toggle("fa-volume-off");
    togglePlay();
  };

  const game = new Game();
  game.keyUp();
  game.keyDown();
  requestAnimationFrame(game.loop);

  restartBtn.onclick = function() {
    location.reload();
  };
  

});



