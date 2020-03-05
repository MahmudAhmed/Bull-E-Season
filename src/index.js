import Game from "./game"
import { togglePlay } from "./music";

window.addEventListener("DOMContentLoaded", () => {
  const toggleSound = document.getElementById("music");
  const restartBtn = document.getElementById("restart");
  const playBtn = document.getElementById("play");
  const startGame = document.getElementById("start-game")
  const leftBtn = document.getElementById("left-icon")
  const rightBtn = document.getElementById("right-icon")
  const playableCars = document.querySelectorAll(".playable-car")
  
  let i = 0;
  playableCars[i].style.display = "flex";
  
  rightBtn.onclick = function(){
    playableCars[i].style.display = "";
    if (i === playableCars.length - 1) i = -1;
    i++;
    playableCars[i].style.display = "flex";
  }

  leftBtn.onclick = function () {
    playableCars[i].style.display = "";
    if (i === 0) i = playableCars.length;
    i--;
    playableCars[i].style.display = "flex";
  }
  let game;
  // debugger
  startGame.onclick = function(){
    startGame.style.display = "none";
    leftBtn.style.display = "none";
    rightBtn.style.display = "none";
    playableCars[i].classList.remove("spin");
    game = new Game(playableCars[i]);
    requestAnimationFrame(game.loop);
    game.keyUp();
    game.keyDown();
  }

  toggleSound.onclick = function(){
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



