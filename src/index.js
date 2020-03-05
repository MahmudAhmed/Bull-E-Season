import Game from "./game"
import { togglePlay } from "./music";

window.addEventListener("DOMContentLoaded", () => {
  const toggleSound = document.getElementById("music");
  const restartBtn = document.getElementById("restart");
  // runGame();
  let game = new Game();
  toggleSound.onclick = function() {
    document.querySelector(".fa-volume-mute").classList.toggle("fa-volume-off");
    togglePlay();
  };
  restartBtn.onclick = function() {
    game.reset();

    requestAnimationFrame(game.loop);

  };

  requestAnimationFrame(game.loop);
  // function runGame(){
    game.keyUp();
    game.keyDown();
  // }

  

});



