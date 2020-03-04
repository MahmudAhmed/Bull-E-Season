window.addEventListener("DOMContentLoaded", () => {
  const car = document.getElementById("player-car")
  const gameContainer = document.getElementById("game-container")
  let gameLoop = requestAnimationFrame(loop);
  
  const crash = new Audio('./dist/crash.mp3');
  const backgroundMusic = document.getElementById("background-music");
  const toggleSound = document.getElementById("music")
  

  toggleSound.onclick = function() {
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
  


  const gameContainerWidth = parseInt(window.getComputedStyle(gameContainer).width);
  const gameContainerHeight = parseInt(window.getComputedStyle(gameContainer).height);
  const carWidth = parseInt(window.getComputedStyle(car).width);
  const carHeight = parseInt(window.getComputedStyle(car).height);

  let moveRight = false;
  let moveLeft = false;
  let moveUp = false;
  let moveDown = false;

  let gameOver = false;
  const restartContainer = document.getElementById("restart-container");
  const restartBtn = document.getElementById("restart");
  const score = document.getElementById("score");
  const highScore = document.getElementById("high-score");
  
  let topScore = localStorage.getItem('highScore');
  highScore.innerText = topScore;
  let scoreCounter = 0;
  let speed = 3;
  let lineSpeed = 4;
  let handling = 5;

  const car1 = document.getElementById("car1")
  const car2 = document.getElementById("car2")
  const car3 = document.getElementById("car3")
  const car4 = document.getElementById("car4")
  // const car5 = document.getElementById("car5")


  const line1 = document.getElementById("line1")
  const line2 = document.getElementById("line2")
  const line3 = document.getElementById("line3")
  const line4 = document.getElementById("line4")
  const line5 = document.getElementById("line5")
  const line6 = document.getElementById("line6")
  const line7 = document.getElementById("line7")

  window.addEventListener("keydown", function (event) {
    event.preventDefault();
    if (!gameOver){
      switch (event.keyCode) {
        case 40:
          if (!moveDown){
            requestAnimationFrame(down)  
          }            
          break;
        case 38:
          if (!moveUp){
            requestAnimationFrame(up)   
          }     
          break;
        case 37:
          if (!moveLeft){
            requestAnimationFrame(left)   
          }   
          break;

        case 39:
          if (!moveRight){
            requestAnimationFrame(right)   
          }  
          break;
  
        default:
          return; 
      } 
    }
    if (gameOver && event.keyCode === 13) {
      location.reload();
    }
  }, true);
  
  window.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (!gameOver){
      switch (event.keyCode) {
        case 40:
          cancelAnimationFrame(moveDown);
          moveDown = false;
          break;

        case 38:
          cancelAnimationFrame(moveUp);
          moveUp = false;
          break;

        case 37:
          cancelAnimationFrame(moveLeft);
          moveLeft = false;
          break;

        case 39:
          cancelAnimationFrame(moveRight);
          moveRight = false;
          break;

        default:
          return; 
      }
    }
  }, true);

  function left() {
    const position = parseInt(window.getComputedStyle(car).left)
    if (!gameOver && position > 5){
      car.style.left = `${position - handling}px`
      moveLeft = requestAnimationFrame(left);
    }
  }

  function right() {
    const position = parseInt(window.getComputedStyle(car).left)
    if (!gameOver && position < (gameContainerWidth - carWidth - 7)) {
      car.style.left = `${position + handling}px`
      moveRight = requestAnimationFrame(right);
    }
  }

  function up() {
    const position = parseInt(window.getComputedStyle(car).top)
    if (!gameOver && position > 20) {
      car.style.top = `${position - 3}px`
      moveUp = requestAnimationFrame(up);
    }
  }

  function down() {
    const position = parseInt(window.getComputedStyle(car).top)
    if (!gameOver && position < (gameContainerHeight - carHeight - 2)) {
      car.style.top = `${position + 3}px`
      moveDown = requestAnimationFrame(down);
    }
  }


  function loop() {
    if (collision(car, car1) || collision(car, car2) || collision(car, car3) || collision(car, car4)) {
      crash.play();
      gameOver = true
      lost();
      return;
    }

    scoreCounter++;

    if (scoreCounter % 20 == 0) {
      score.innerText = parseInt(score.innerText) + 1;
    }
    if (scoreCounter % 500 == 0) {
      speed++;
      lineSpeed++;
    }

    if (scoreCounter % 1000 == 0 && handling < 15) {
      handling++;
    }


    carDown(car1);
    carDown(car2);
    carDown(car3);
    carDown(car4);
    // carDown(car5);

    lineDown(line1);
    lineDown(line2);
    lineDown(line3);
    lineDown(line4);
    lineDown(line5);
    lineDown(line6);
    lineDown(line7);

    gameLoop = requestAnimationFrame(loop);
  }

  function carDown(car) {
    let position = parseInt(window.getComputedStyle(car).top);
    if (position > gameContainerHeight) {
      position = -200;
      const positionLeft = parseInt(Math.random() * (gameContainerWidth - carWidth - 10));
      car.style.left = `${positionLeft}px`;
      car.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    }
    car.style.top = `${position + speed}px`
  }

  function lineDown(line) {
    let position = parseInt(window.getComputedStyle(line).top);
    if (position > gameContainerHeight) {
      position = -300;
    }
    line.style.top = `${position + lineSpeed}px`
  }

  function collision(playerCar, npcCar) {

    const playersTopLeft = playerCar.offsetLeft;
    const y1 = playerCar.offsetTop;
    const h1 = playerCar.offsetHeight;
    const w1 = playerCar.offsetWidth;

    const npcTopLeft = npcCar.offsetLeft;
    const y2 = npcCar.offsetTop;
    const h2 = npcCar.offsetHeight;
    const w2 = npcCar.offsetWidth;

    const playersYReach = y1 + h1 - 2;
    const playersXReach = playersTopLeft + w1 + 5;
    const npcYReach = y2 + h2 - 2;
    const npcXReach = npcTopLeft + w2 + 5;

    if (playersYReach < y2 || y1 > npcYReach || playersXReach < npcTopLeft || playersTopLeft > npcXReach) return false;
    setInterval(function () {
      playerCar.style.display = (playerCar.style.display == 'none' ? '' : 'none');
      npcCar.style.display = (npcCar.style.display == 'none' ? '' : 'none');
    }, 500);
    return true;
  }

  restartBtn.onclick = function() {
    location.reload();
  }


  function lost() {
    cancelAnimationFrame(moveRight);
    cancelAnimationFrame(moveLeft);
    cancelAnimationFrame(moveUp);
    cancelAnimationFrame(moveDown);
    restartContainer.style.display = "flex";
    restartBtn.focus();
    setHighScore();
  }

  function setHighScore() {
  
    if (parseInt(topScore) < parseInt(score.innerText)){
      topScore = parseInt(score.innerText);
      localStorage.setItem("highScore", parseInt(score.innerText));
    }
    highScore.innerText = topScore;
  }




});



