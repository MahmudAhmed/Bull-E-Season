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
  const highScore = document.getElementById("high-score");
  const topScore = localStorage.getItem("highScore") || 0;
  highScore.innerText = topScore;
  const no = new Audio("./dist/no.mp3");


  let i = 0;
  playableCars[i].style.display = "flex";
  
  rightBtn.onclick = function(){
    debugger
    playableCars[i].style.display = "";
    if (i === playableCars.length - 1) i = -1;
    i++;
    if ((i === 3 || i === 4) && topScore >= 2000) document.querySelector(`.locked${i + 1}`).style.display = "none";
    if ((i === 5) && topScore >= 3000) document.querySelector(`.locked${i+1}`).style.display = "none";
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
    if ((i === 3 || i === 4) && topScore < 2000){
      no.play();
      return;
    }
    if ((i === 5) && topScore < 3000){
      no.play();
      return;
    }
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



