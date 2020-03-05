import Game from "./game"
import { togglePlay } from "./music";

window.addEventListener("DOMContentLoaded", () => {
  const toggleSound = document.getElementById("music");
  const restartBtn = document.getElementById("restart");
  const playBtn = document.getElementById("play");
  const startGame = document.getElementById("start-game-container")
  let game;
  // debugger
  startGame.onclick = () => {
    startGame.style.display = "none";
    game = new Game();
    requestAnimationFrame(game.loop);
    game.keyUp();
    game.keyDown();
  }

  toggleSound.onclick = function() {
    document.querySelector(".fa-volume-mute").classList.toggle("fa-volume-off");
    togglePlay();
  };
  restartBtn.onclick = function(){
    game.reset();
    requestAnimationFrame(game.loop);
  };
  playBtn.onclick = function(){
    game.togglePause();
  }

  

  

});



