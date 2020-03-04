let moveRight = false;
let moveLeft = false;
let moveUp = false;
let moveDown = false;
let gameOver = false;
const car = document.getElementById("player-car")

const controls = {
  keyUpHandler: function (event) {
    event.preventDefault();
    if (!gameOver) {
      switch (event.keyCode) {
        case 40:
          if (!moveDown) {
            moveDown = requestAnimationFrame(down);
          }
          break;
        case 38:
          if (!moveUp) {
            moveUp = requestAnimationFrame(up);
          }
          break;
        case 37:
          if (!moveLeft) {
            moveLeft = requestAnimationFrame(left);
          }
          break;

        case 39:
          if (!moveRight) {
            moveRight = requestAnimationFrame(right);
          }
          break;

        default:
          return;
      }
    }
    if (gameOver && event.keyCode === 13) {
      location.reload();
    }
  },
  keyDownHandler: function (event) {
    event.preventDefault();
    if (!gameOver) {
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
  }, 

  left: function() {
    const position = parseInt(window.getComputedStyle(car).left)
    if (!gameOver && position > 5) {
      car.style.left = `${position - handling}px`
      moveLeft = requestAnimationFrame(left);
    }
  },

  right: function() {
    const position = parseInt(window.getComputedStyle(car).left)
    if (!gameOver && position < (gameContainerWidth - carWidth - 7)) {
      car.style.left = `${position + handling}px`
      moveRight = requestAnimationFrame(right);
    }
  },

  up: function() {
    const position = parseInt(window.getComputedStyle(car).top)
    if (!gameOver && position > 20) {
      car.style.top = `${position - 3}px`
      moveUp = requestAnimationFrame(up);
    }
  },

  down: function() {
    const position = parseInt(window.getComputedStyle(car).top)
    if (!gameOver && position < (gameContainerHeight - carHeight - 2)) {
      car.style.top = `${position + 3}px`
      moveDown = requestAnimationFrame(down);
    }
  }, 
  keyDown: document.addEventListener("keydown", this.keyDownHandler, true),
  keyUp: document.addEventListener("keyup", this.keyUpHandler, true)
}

export { controls };