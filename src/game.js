class Game {
  constructor(playerCar) {
    this.car = playerCar;
    this.car.style.top = "80%";
    this.car.style.left = "20%";
    this.car.style.display = "flex"
    document.querySelectorAll(".line").forEach( el => el.style.display = "block" );
    this.gameContainer = document.getElementById("game-container");
    this.gameContainerWidth = parseInt(
      window.getComputedStyle(this.gameContainer).width
    );
    this.gameContainerHeight = parseInt(
      window.getComputedStyle(this.gameContainer).height
    );
    this.carWidth = parseInt(window.getComputedStyle(this.car).width);
    this.carHeight = parseInt(window.getComputedStyle(this.car).height);
    this.restartContainer = document.getElementById("restart-container");
    this.pauseContainer = document.getElementById("pause-container");
    this.score = document.getElementById("score");
    this.highScore = document.getElementById("high-score");
    this.topScore = localStorage.getItem("highScore") || 0;
    this.highScore.innerText = this.topScore;
    this.scoreCounter = 0;
    this.pointSpeed = 1;
    this.speed = 4;
    this.lineSpeed = 5;
    this.pause = false;
    this.moveRight = false;
    this.moveLeft = false;
    this.moveUp = false;
    this.moveDown = false;
    this.gameOver = false;
    this.handling = 5;

    this.car1 = document.getElementById("car1");
    this.car2 = document.getElementById("car2");
    this.car3 = document.getElementById("car3");
    this.car4 = document.getElementById("car4");

    this.line1 = document.getElementById("line1");
    this.line2 = document.getElementById("line2");
    this.line3 = document.getElementById("line3");
    this.line4 = document.getElementById("line4");
    this.line5 = document.getElementById("line5");
    this.line6 = document.getElementById("line6");
    this.line7 = document.getElementById("line7");

    this.crash = new Audio("./dist/crash.mp3");

    this.loop = this.loop.bind(this);
    this.setHighScore = this.setHighScore.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.carDown = this.carDown.bind(this);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    this.left = this.left.bind(this);
    this.right = this.right.bind(this);

  }

  reset(){
    this.restartContainer.style.display = "none";
    this.car.style.display = "flex";
    this.car.style.top = "80%";
    this.car.style.left = "20%";
    this.scoreCounter = 0;
    this.pointSpeed = 1;
    this.speed = 4;
    this.lineSpeed = 5;
    this.gameOver = false;
    this.handling = 4;
    this.car1.style.top = "-80px";
    this.car2.style.top = "-250px";
    this.car3.style.top = "-450px";
    this.car4.style.top = "-650px";
    this.car1.style.display = ""
    this.car2.style.display = ""
    this.car3.style.display = ""
    this.car4.style.display = ""
    this.score.innerText = "0";
    clearInterval(this.blinkEffect);

  }

  togglePause(){
    cancelAnimationFrame(this.moveRight);
    cancelAnimationFrame(this.moveLeft);
    cancelAnimationFrame(this.moveUp);
    cancelAnimationFrame(this.moveDown);
    if (this.pause){
      this.pause = false;
      this.pauseContainer.style.display = "none";
      requestAnimationFrame(this.loop)
    } else {
      this.pause = true; 
      this.pauseContainer.style.display = "flex";
    }  

  }

  loop() {
    if (
      this.collision(this.car, this.car1) ||
      this.collision(this.car, this.car2) ||
      this.collision(this.car, this.car3) ||
      this.collision(this.car, this.car4)
    ) {
      this.crash.play();
      this.gameOver = true;
      this.lost();
      return;
    }

    this.scoreCounter++;

    if (this.scoreCounter % 20 == 0) {
      score.innerText = parseInt(score.innerText) + this.pointSpeed;
      switch (this.car.id[this.car.id.length - 1]){
        case "4":
          this.score.innerText = parseInt(this.score.innerText) + 3;
          break;
        case "5":
          this.score.innerText = parseInt(this.score.innerText) + 3;
          break;
        case "6":
          this.score.innerText = parseInt(this.score.innerText) + 20;
          break;
        case "7":
          this.score.innerText = parseInt(this.score.innerText) + 20;
          break;

      }
    }
    if (this.scoreCounter % 500 == 0 && this.speed <= 15) {
      this.speed++;
      this.lineSpeed++;
      this.pointSpeed++;
    }

    if (this.scoreCounter % 3000 == 0 && this.speed > 15) {
      this.speed++;
      this.lineSpeed++;
      this.pointSpeed++;
    }
    
    if (this.scoreCounter % 1200 == 0 && this.handling <= 15) {
      this.handling++;
    }

    this.carDown(this.car1);
    this.carDown(this.car2);
    this.carDown(this.car3);
    this.carDown(this.car4);

    this.lineDown(this.line1);
    this.lineDown(this.line2);
    this.lineDown(this.line3);
    this.lineDown(this.line4);
    this.lineDown(this.line5);
    this.lineDown(this.line6);
    this.lineDown(this.line7);

    if (!this.pause) requestAnimationFrame(this.loop);
  }

  carDown(car) {
    let position = parseInt(window.getComputedStyle(car).top);
    if (position > this.gameContainerHeight) {
      position = -200;
      const positionLeft = parseInt(
        Math.random() * (this.gameContainerWidth - this.carWidth - 10)
      );
      car.style.left = `${positionLeft}px`;
      car.style.backgroundColor =
        "rgb(" +
        Math.floor(Math.random() * 256) +
        "," +
        Math.floor(Math.random() * 256) +
        "," +
        Math.floor(Math.random() * 256) +
        ")";
    }
    car.style.top = `${position + this.speed}px`;
  }

  lineDown(line) {
    let position = parseInt(window.getComputedStyle(line).top);
    if (position > this.gameContainerHeight) {
      position = -300;
    }
    line.style.top = `${position + this.lineSpeed}px`;
  }

  collision(playerCar, npcCar) {
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

    if (
      playersYReach < y2 ||
      y1 > npcYReach ||
      playersXReach < npcTopLeft ||
      playersTopLeft > npcXReach
    )
      return false;
    this.blinkEffect = setInterval(function() {
      playerCar.style.display = playerCar.style.display == "none" ? "flex" : "none";
      npcCar.style.display = npcCar.style.display == "none" ? "flex" : "none";
    }, 500);
    return true;
  }

  lost() {
    cancelAnimationFrame(this.moveRight);
    cancelAnimationFrame(this.moveLeft);
    cancelAnimationFrame(this.moveUp);
    cancelAnimationFrame(this.moveDown);
    cancelAnimationFrame(this.loop);
    this.restartContainer.style.display = "flex";
    this.setHighScore();
  }

  setHighScore() {
    if (parseInt(this.topScore) < parseInt(this.score.innerText)) {
      this.topScore = parseInt(this.score.innerText);
      localStorage.setItem("highScore", parseInt(this.score.innerText));
    }
    this.highScore.innerText = this.topScore;
  }

  keyDown() {
    document.addEventListener("keydown", this.keyDownHandler, true);
  }
  keyUp() {
    document.addEventListener("keyup", this.keyUpHandler, true);
  }

  keyDownHandler(event) {
    event.preventDefault();
    if (!this.gameOver && !this.pause) {
      switch (event.keyCode) {
        case 40:
          if (!this.moveDown) {
            this.moveDown = requestAnimationFrame(this.down);
          }
          break;
        case 38:
          if (!this.moveUp) {
            this.moveUp = requestAnimationFrame(this.up);
          }
          break;
        case 37:
          if (!this.moveLeft) {
            this.moveLeft = requestAnimationFrame(this.left);
          }
          break;

        case 39:
          if (!this.moveRight) {
            this.moveRight = requestAnimationFrame(this.right);
          }
          break;
      }
    }
    if (!this.gameOver && event.keyCode === 32) {
      this.togglePause();
    }
    if (this.gameOver && event.keyCode === 13) {
      this.reset();
      requestAnimationFrame(this.loop);
    }
  }
  keyUpHandler(event) {
    event.preventDefault();
    if (!this.gameOver) {
      switch (event.keyCode) {
        case 40:
          cancelAnimationFrame(this.moveDown);
          this.moveDown = false;
          break;

        case 38:
          cancelAnimationFrame(this.moveUp);
          this.moveUp = false;
          break;

        case 37:
          cancelAnimationFrame(this.moveLeft);
          this.moveLeft = false;
          break;

        case 39:
          cancelAnimationFrame(this.moveRight);
          this.moveRight = false;
          break;
          
        default:
          return;
      }
    }
  }

  left() {
    const position = parseInt(window.getComputedStyle(this.car).left);
    if (!this.gameOver && position > 7) {
      this.car.style.left = `${position - this.handling}px`;
      this.moveLeft = requestAnimationFrame(this.left);
    }
  }

  right() {
    const position = parseInt(window.getComputedStyle(this.car).left);
    if (!this.gameOver && position < this.gameContainerWidth - this.carWidth - 7) {
      this.car.style.left = `${position + this.handling}px`;
      this.moveRight = requestAnimationFrame(this.right);
    }
  }

  up() {
    const position = parseInt(window.getComputedStyle(this.car).top);
    if (!this.gameOver && position > 20) {
      this.score.innerText = `${parseInt(this.score.innerText) + 1}`;
      this.car.style.top = `${position - 3}px`;
      this.moveUp = requestAnimationFrame(this.up);
    }
  }

  down() {
    const position = parseInt(window.getComputedStyle(this.car).top);
    if (!this.gameOver && position < this.gameContainerHeight - this.carHeight - 2) {
      this.car.style.top = `${position + 3}px`;
      this.moveDown = requestAnimationFrame(this.down);
    }
  }
}

export default Game;