import Game from "./game"
import { togglePlay } from "./music";

window.addEventListener("DOMContentLoaded", () => {
  const toggleSound = document.getElementById("music");
  const restartBtn = document.getElementById("restart");
  const playBtn = document.getElementById("play");
  const startGame = document.getElementById("start-game")
  const startInstruction = document.getElementById("start-instruction")
  const unlocksAt = document.getElementById("unlocks_at")
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
    unlocksAt.innerText = "";
    playableCars[i].style.display = "";
    if (i === playableCars.length - 1) i = -1;
    i++;

    switch(i){
      case 3:
        if (topScore >= 1000){
          document.querySelector(`.locked${i + 1}`).style.display = "none";
        } else {
          unlocksAt.innerText = "Unlocks at 1000";
        }
        break;
      case 4:
        if (topScore >= 1000) {
          document.querySelector(`.locked${i + 1}`).style.display = "none";
        } else {
          unlocksAt.innerText = "Unlocks at 1000";
        }
        break;
      case 5:
        if (topScore >= 2500) {
          document.querySelector(`.locked${i + 1}`).style.display = "none";
        } else {
          unlocksAt.innerText = "Unlocks at 2500";
        }
        break;
      case 6:
        if (topScore >= 5000) {
          document.querySelector(`.locked${i + 1}`).style.display = "none";
        } else {
          unlocksAt.innerText = "Unlocks at 5000";
        }
        break;
    }
    playableCars[i].style.display = "flex";
  }

  leftBtn.onclick = function () {
    unlocksAt.innerText = "";
    playableCars[i].style.display = "";
    if (i === 0) i = playableCars.length;
    i--;

    switch (i) {
      case 3:
        if (topScore >= 1000) {
          document.querySelector(`.locked${i + 1}`).style.display = "none";
        } else {
          unlocksAt.innerText = "Unlocks at 1000";
        }
        break;
      case 4:
        if (topScore >= 1000) {
          document.querySelector(`.locked${i + 1}`).style.display = "none";
        } else {
          unlocksAt.innerText = "Unlocks at 1000";
        }
        break;
      case 5:
        if (topScore >= 2500) {
          document.querySelector(`.locked${i + 1}`).style.display = "none";
        } else {
          unlocksAt.innerText = "Unlocks at 2500";
        }
        break;
      case 6:
        if (topScore >= 5000) {
          document.querySelector(`.locked${i + 1}`).style.display = "none";
        } else {
          unlocksAt.innerText = "Unlocks at 5000";
        }
        break;
    }
    playableCars[i].style.display = "flex";
  }
  let game;
  startGame.onclick = function(){
    if ((i === 3 || i === 4) && topScore < 1000){
      no.play();
      return;
    }
    if ((i === 5) && topScore < 2500){
      no.play();
      return;
    }
    if ((i === 6) && topScore < 5000) {
      no.play();
      return;
    }
    startGame.style.display = "none";
    startInstruction.style.display = "none";
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



