/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.car = document.getElementById("player-car");
    this.gameContainer = document.getElementById("game-container");
    this.gameContainerWidth = parseInt(window.getComputedStyle(this.gameContainer).width);
    this.gameContainerHeight = parseInt(window.getComputedStyle(this.gameContainer).height);
    this.carWidth = parseInt(window.getComputedStyle(this.car).width);
    this.carHeight = parseInt(window.getComputedStyle(this.car).height);
    this.restartContainer = document.getElementById("restart-container");
    this.pauseContainer = document.getElementById("pause-container"); // this.restartBtn = document.getElementById("restart");
    // this.playBtn = document.getElementById("play");

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

  _createClass(Game, [{
    key: "reset",
    value: function reset() {
      this.restartContainer.style.display = "none";
      this.car.style.display = "";
      this.car.style.top = "80%";
      this.car.style.left = "20%";
      this.scoreCounter = 0;
      this.pointSpeed = 1;
      this.speed = 4;
      this.lineSpeed = 5;
      this.gameOver = false;
      this.handling = 5;
      this.car1.style.top = "-80px";
      this.car2.style.top = "-250px";
      this.car3.style.top = "-450px";
      this.car4.style.top = "-650px";
      this.car1.style.display = "";
      this.car2.style.display = "";
      this.car3.style.display = "";
      this.car4.style.display = "";
      this.score.innerText = "0";
      clearInterval(this.blinkEffect);
    }
  }, {
    key: "togglePause",
    value: function togglePause() {
      cancelAnimationFrame(this.moveRight);
      cancelAnimationFrame(this.moveLeft);
      cancelAnimationFrame(this.moveUp);
      cancelAnimationFrame(this.moveDown);

      if (this.pause) {
        this.pause = false;
        this.pauseContainer.style.display = "none";
        requestAnimationFrame(this.loop);
      } else {
        this.pause = true;
        this.pauseContainer.style.display = "flex";
      }
    }
  }, {
    key: "loop",
    value: function loop() {
      if (this.collision(this.car, this.car1) || this.collision(this.car, this.car2) || this.collision(this.car, this.car3) || this.collision(this.car, this.car4)) {
        this.crash.play();
        this.gameOver = true;
        this.lost();
        return;
      }

      this.scoreCounter++;

      if (this.scoreCounter % 20 == 0) {
        score.innerText = parseInt(score.innerText) + this.pointSpeed;
      }

      if (this.scoreCounter % 500 == 0) {
        this.speed++;
        this.lineSpeed++;
        this.pointSpeed++;
      }

      if (this.scoreCounter % 1000 == 0 && this.handling < 25) {
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
  }, {
    key: "carDown",
    value: function carDown(car) {
      var position = parseInt(window.getComputedStyle(car).top);

      if (position > this.gameContainerHeight) {
        position = -200;
        var positionLeft = parseInt(Math.random() * (this.gameContainerWidth - this.carWidth - 10));
        car.style.left = "".concat(positionLeft, "px");
        car.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
      }

      car.style.top = "".concat(position + this.speed, "px");
    }
  }, {
    key: "lineDown",
    value: function lineDown(line) {
      var position = parseInt(window.getComputedStyle(line).top);

      if (position > this.gameContainerHeight) {
        position = -300;
      }

      line.style.top = "".concat(position + this.lineSpeed, "px");
    }
  }, {
    key: "collision",
    value: function collision(playerCar, npcCar) {
      var playersTopLeft = playerCar.offsetLeft;
      var y1 = playerCar.offsetTop;
      var h1 = playerCar.offsetHeight;
      var w1 = playerCar.offsetWidth;
      var npcTopLeft = npcCar.offsetLeft;
      var y2 = npcCar.offsetTop;
      var h2 = npcCar.offsetHeight;
      var w2 = npcCar.offsetWidth;
      var playersYReach = y1 + h1 - 2;
      var playersXReach = playersTopLeft + w1 + 5;
      var npcYReach = y2 + h2 - 2;
      var npcXReach = npcTopLeft + w2 + 5;
      if (playersYReach < y2 || y1 > npcYReach || playersXReach < npcTopLeft || playersTopLeft > npcXReach) return false;
      this.blinkEffect = setInterval(function () {
        playerCar.style.display = playerCar.style.display == "none" ? "" : "none";
        npcCar.style.display = npcCar.style.display == "none" ? "" : "none";
      }, 500);
      return true;
    }
  }, {
    key: "lost",
    value: function lost() {
      cancelAnimationFrame(this.moveRight);
      cancelAnimationFrame(this.moveLeft);
      cancelAnimationFrame(this.moveUp);
      cancelAnimationFrame(this.moveDown);
      cancelAnimationFrame(this.loop);
      this.restartContainer.style.display = "flex";
      this.setHighScore();
    }
  }, {
    key: "setHighScore",
    value: function setHighScore() {
      if (parseInt(this.topScore) < parseInt(this.score.innerText)) {
        this.topScore = parseInt(this.score.innerText);
        localStorage.setItem("highScore", parseInt(this.score.innerText));
      }

      this.highScore.innerText = this.topScore;
    }
  }, {
    key: "keyDown",
    value: function keyDown() {
      document.addEventListener("keydown", this.keyDownHandler, true);
    }
  }, {
    key: "keyUp",
    value: function keyUp() {
      document.addEventListener("keyup", this.keyUpHandler, true);
    }
  }, {
    key: "keyDownHandler",
    value: function keyDownHandler(event) {
      event.preventDefault();
      debugger;

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

      debugger;

      if (this.gameOver && event.keyCode === 13) {
        this.reset();
        requestAnimationFrame(this.loop);
      }
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler(event) {
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
  }, {
    key: "left",
    value: function left() {
      var position = parseInt(window.getComputedStyle(this.car).left);

      if (!this.gameOver && position > 7) {
        this.car.style.left = "".concat(position - this.handling, "px");
        this.moveLeft = requestAnimationFrame(this.left);
      }
    }
  }, {
    key: "right",
    value: function right() {
      var position = parseInt(window.getComputedStyle(this.car).left);

      if (!this.gameOver && position < this.gameContainerWidth - this.carWidth - 7) {
        this.car.style.left = "".concat(position + this.handling, "px");
        this.moveRight = requestAnimationFrame(this.right);
      }
    }
  }, {
    key: "up",
    value: function up() {
      var position = parseInt(window.getComputedStyle(this.car).top);

      if (!this.gameOver && position > 20) {
        this.car.style.top = "".concat(position - 3, "px");
        this.moveUp = requestAnimationFrame(this.up);
      }
    }
  }, {
    key: "down",
    value: function down() {
      var position = parseInt(window.getComputedStyle(this.car).top);

      if (!this.gameOver && position < this.gameContainerHeight - this.carHeight - 2) {
        this.car.style.top = "".concat(position + 3, "px");
        this.moveDown = requestAnimationFrame(this.down);
      }
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music */ "./src/music.js");
/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_music__WEBPACK_IMPORTED_MODULE_1__);


window.addEventListener("DOMContentLoaded", function () {
  var toggleSound = document.getElementById("music");
  var restartBtn = document.getElementById("restart");
  var playBtn = document.getElementById("play"); // runGame();

  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();

  toggleSound.onclick = function () {
    document.querySelector(".fa-volume-mute").classList.toggle("fa-volume-off");
    Object(_music__WEBPACK_IMPORTED_MODULE_1__["togglePlay"])();
  };

  restartBtn.onclick = function () {
    game.reset();
    requestAnimationFrame(game.loop);
  };

  playBtn.onclick = function () {
    game.togglePause();
  };

  requestAnimationFrame(game.loop); // function runGame(){

  game.keyUp();
  game.keyDown(); // }
});

/***/ }),

/***/ "./src/music.js":
/*!**********************!*\
  !*** ./src/music.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var backgroundMusic = document.getElementById("background-music");
var isPlaying = false;

function togglePlay() {
  debugger;

  if (isPlaying) {
    backgroundMusic.pause();
  } else {
    backgroundMusic.play();
  }
}

;

backgroundMusic.onplaying = function () {
  debugger;
  isPlaying = true;
};

backgroundMusic.onpause = function () {
  isPlaying = false;
};

module.exports = {
  togglePlay: togglePlay
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tdXNpYy5qcyJdLCJuYW1lcyI6WyJHYW1lIiwiY2FyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdhbWVDb250YWluZXIiLCJnYW1lQ29udGFpbmVyV2lkdGgiLCJwYXJzZUludCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJ3aWR0aCIsImdhbWVDb250YWluZXJIZWlnaHQiLCJoZWlnaHQiLCJjYXJXaWR0aCIsImNhckhlaWdodCIsInJlc3RhcnRDb250YWluZXIiLCJwYXVzZUNvbnRhaW5lciIsInNjb3JlIiwiaGlnaFNjb3JlIiwidG9wU2NvcmUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaW5uZXJUZXh0Iiwic2NvcmVDb3VudGVyIiwicG9pbnRTcGVlZCIsInNwZWVkIiwibGluZVNwZWVkIiwicGF1c2UiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsIm1vdmVVcCIsIm1vdmVEb3duIiwiZ2FtZU92ZXIiLCJoYW5kbGluZyIsImNhcjEiLCJjYXIyIiwiY2FyMyIsImNhcjQiLCJsaW5lMSIsImxpbmUyIiwibGluZTMiLCJsaW5lNCIsImxpbmU1IiwibGluZTYiLCJsaW5lNyIsImNyYXNoIiwiQXVkaW8iLCJsb29wIiwiYmluZCIsInNldEhpZ2hTY29yZSIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwiY2FyRG93biIsInVwIiwiZG93biIsImxlZnQiLCJyaWdodCIsInN0eWxlIiwiZGlzcGxheSIsInRvcCIsImNsZWFySW50ZXJ2YWwiLCJibGlua0VmZmVjdCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29sbGlzaW9uIiwicGxheSIsImxvc3QiLCJsaW5lRG93biIsInBvc2l0aW9uIiwicG9zaXRpb25MZWZ0IiwiTWF0aCIsInJhbmRvbSIsImJhY2tncm91bmRDb2xvciIsImZsb29yIiwibGluZSIsInBsYXllckNhciIsIm5wY0NhciIsInBsYXllcnNUb3BMZWZ0Iiwib2Zmc2V0TGVmdCIsInkxIiwib2Zmc2V0VG9wIiwiaDEiLCJvZmZzZXRIZWlnaHQiLCJ3MSIsIm9mZnNldFdpZHRoIiwibnBjVG9wTGVmdCIsInkyIiwiaDIiLCJ3MiIsInBsYXllcnNZUmVhY2giLCJwbGF5ZXJzWFJlYWNoIiwibnBjWVJlYWNoIiwibnBjWFJlYWNoIiwic2V0SW50ZXJ2YWwiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJrZXlDb2RlIiwidG9nZ2xlUGF1c2UiLCJyZXNldCIsInRvZ2dsZVNvdW5kIiwicmVzdGFydEJ0biIsInBsYXlCdG4iLCJnYW1lIiwib25jbGljayIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVQbGF5Iiwia2V5VXAiLCJrZXlEb3duIiwiYmFja2dyb3VuZE11c2ljIiwiaXNQbGF5aW5nIiwib25wbGF5aW5nIiwib25wYXVzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixF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Q0FuQmdELENBb0JoRDs7QUFDRXlELE1BQUksQ0FBQ00sS0FBTDtBQUNBTixNQUFJLENBQUNPLE9BQUwsR0F0QjhDLENBdUJoRDtBQUlELENBM0JELEU7Ozs7Ozs7Ozs7O0FDSEEsSUFBTUMsZUFBZSxHQUFHN0csUUFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixDQUF4QjtBQUVBLElBQUk2RyxTQUFTLEdBQUcsS0FBaEI7O0FBRUEsU0FBU0osVUFBVCxHQUFzQjtBQUNwQjs7QUFDQSxNQUFJSSxTQUFKLEVBQWU7QUFDYkQsbUJBQWUsQ0FBQ3JGLEtBQWhCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xxRixtQkFBZSxDQUFDL0MsSUFBaEI7QUFDRDtBQUNGOztBQUFBOztBQUVEK0MsZUFBZSxDQUFDRSxTQUFoQixHQUE0QixZQUFZO0FBQ3RDO0FBQ0FELFdBQVMsR0FBRyxJQUFaO0FBQ0QsQ0FIRDs7QUFJQUQsZUFBZSxDQUFDRyxPQUFoQixHQUEwQixZQUFZO0FBQ3BDRixXQUFTLEdBQUcsS0FBWjtBQUNELENBRkQ7O0FBS0FHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUFFUixZQUFVLEVBQVZBO0FBQUYsQ0FBakIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLWNhclwiKTtcbiAgICB0aGlzLmdhbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY29udGFpbmVyXCIpO1xuICAgIHRoaXMuZ2FtZUNvbnRhaW5lcldpZHRoID0gcGFyc2VJbnQoXG4gICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmdhbWVDb250YWluZXIpLndpZHRoXG4gICAgKTtcbiAgICB0aGlzLmdhbWVDb250YWluZXJIZWlnaHQgPSBwYXJzZUludChcbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZ2FtZUNvbnRhaW5lcikuaGVpZ2h0XG4gICAgKTtcbiAgICB0aGlzLmNhcldpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLndpZHRoKTtcbiAgICB0aGlzLmNhckhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS5oZWlnaHQpO1xuICAgIHRoaXMucmVzdGFydENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGFydC1jb250YWluZXJcIik7XG4gICAgdGhpcy5wYXVzZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF1c2UtY29udGFpbmVyXCIpO1xuICAgIC8vIHRoaXMucmVzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGFydFwiKTtcbiAgICAvLyB0aGlzLnBsYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlcIik7XG4gICAgdGhpcy5zY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7XG4gICAgdGhpcy5oaWdoU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2gtc2NvcmVcIik7XG4gICAgdGhpcy50b3BTY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaFNjb3JlXCIpIHx8IDA7XG4gICAgdGhpcy5oaWdoU2NvcmUuaW5uZXJUZXh0ID0gdGhpcy50b3BTY29yZTtcbiAgICB0aGlzLnNjb3JlQ291bnRlciA9IDA7XG4gICAgdGhpcy5wb2ludFNwZWVkID0gMTtcbiAgICB0aGlzLnNwZWVkID0gNDtcbiAgICB0aGlzLmxpbmVTcGVlZCA9IDU7XG4gICAgdGhpcy5wYXVzZSA9IGZhbHNlO1xuICAgIHRoaXMubW92ZVJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZlTGVmdCA9IGZhbHNlO1xuICAgIHRoaXMubW92ZVVwID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZlRG93biA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmhhbmRsaW5nID0gNTtcblxuICAgIHRoaXMuY2FyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyMVwiKTtcbiAgICB0aGlzLmNhcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcjJcIik7XG4gICAgdGhpcy5jYXIzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXIzXCIpO1xuICAgIHRoaXMuY2FyNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyNFwiKTtcblxuICAgIHRoaXMubGluZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmUxXCIpO1xuICAgIHRoaXMubGluZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmUyXCIpO1xuICAgIHRoaXMubGluZTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmUzXCIpO1xuICAgIHRoaXMubGluZTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmU0XCIpO1xuICAgIHRoaXMubGluZTUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmU1XCIpO1xuICAgIHRoaXMubGluZTYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmU2XCIpO1xuICAgIHRoaXMubGluZTcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmU3XCIpO1xuXG4gICAgdGhpcy5jcmFzaCA9IG5ldyBBdWRpbyhcIi4vZGlzdC9jcmFzaC5tcDNcIik7XG5cbiAgICB0aGlzLmxvb3AgPSB0aGlzLmxvb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldEhpZ2hTY29yZSA9IHRoaXMuc2V0SGlnaFNjb3JlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYXJEb3duID0gdGhpcy5jYXJEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cCA9IHRoaXMudXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRvd24gPSB0aGlzLmRvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJpZ2h0ID0gdGhpcy5yaWdodC5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICByZXNldCgpe1xuICAgIHRoaXMucmVzdGFydENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGhpcy5jYXIuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgdGhpcy5jYXIuc3R5bGUudG9wID0gXCI4MCVcIjtcbiAgICB0aGlzLmNhci5zdHlsZS5sZWZ0ID0gXCIyMCVcIjtcbiAgICB0aGlzLnNjb3JlQ291bnRlciA9IDA7XG4gICAgdGhpcy5wb2ludFNwZWVkID0gMTtcbiAgICB0aGlzLnNwZWVkID0gNDtcbiAgICB0aGlzLmxpbmVTcGVlZCA9IDU7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuaGFuZGxpbmcgPSA1O1xuICAgIHRoaXMuY2FyMS5zdHlsZS50b3AgPSBcIi04MHB4XCI7XG4gICAgdGhpcy5jYXIyLnN0eWxlLnRvcCA9IFwiLTI1MHB4XCI7XG4gICAgdGhpcy5jYXIzLnN0eWxlLnRvcCA9IFwiLTQ1MHB4XCI7XG4gICAgdGhpcy5jYXI0LnN0eWxlLnRvcCA9IFwiLTY1MHB4XCI7XG4gICAgdGhpcy5jYXIxLnN0eWxlLmRpc3BsYXkgPSBcIlwiXG4gICAgdGhpcy5jYXIyLnN0eWxlLmRpc3BsYXkgPSBcIlwiXG4gICAgdGhpcy5jYXIzLnN0eWxlLmRpc3BsYXkgPSBcIlwiXG4gICAgdGhpcy5jYXI0LnN0eWxlLmRpc3BsYXkgPSBcIlwiXG4gICAgdGhpcy5zY29yZS5pbm5lclRleHQgPSBcIjBcIjtcbiAgICBjbGVhckludGVydmFsKHRoaXMuYmxpbmtFZmZlY3QpO1xuXG4gIH1cblxuICB0b2dnbGVQYXVzZSgpe1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVJpZ2h0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVMZWZ0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVVcCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlRG93bik7XG4gICAgaWYgKHRoaXMucGF1c2Upe1xuICAgICAgdGhpcy5wYXVzZSA9IGZhbHNlO1xuICAgICAgdGhpcy5wYXVzZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhdXNlID0gdHJ1ZTsgXG4gICAgICB0aGlzLnBhdXNlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9ICBcblxuICB9XG5cbiAgbG9vcCgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNvbGxpc2lvbih0aGlzLmNhciwgdGhpcy5jYXIxKSB8fFxuICAgICAgdGhpcy5jb2xsaXNpb24odGhpcy5jYXIsIHRoaXMuY2FyMikgfHxcbiAgICAgIHRoaXMuY29sbGlzaW9uKHRoaXMuY2FyLCB0aGlzLmNhcjMpIHx8XG4gICAgICB0aGlzLmNvbGxpc2lvbih0aGlzLmNhciwgdGhpcy5jYXI0KVxuICAgICkge1xuICAgICAgdGhpcy5jcmFzaC5wbGF5KCk7XG4gICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9zdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2NvcmVDb3VudGVyKys7XG5cbiAgICBpZiAodGhpcy5zY29yZUNvdW50ZXIgJSAyMCA9PSAwKSB7XG4gICAgICBzY29yZS5pbm5lclRleHQgPSBwYXJzZUludChzY29yZS5pbm5lclRleHQpICsgdGhpcy5wb2ludFNwZWVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5zY29yZUNvdW50ZXIgJSA1MDAgPT0gMCkge1xuICAgICAgdGhpcy5zcGVlZCsrO1xuICAgICAgdGhpcy5saW5lU3BlZWQrKztcbiAgICAgIHRoaXMucG9pbnRTcGVlZCsrO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5zY29yZUNvdW50ZXIgJSAxMDAwID09IDAgJiYgdGhpcy5oYW5kbGluZyA8IDI1KSB7XG4gICAgICB0aGlzLmhhbmRsaW5nKys7XG4gICAgfVxuXG4gICAgdGhpcy5jYXJEb3duKHRoaXMuY2FyMSk7XG4gICAgdGhpcy5jYXJEb3duKHRoaXMuY2FyMik7XG4gICAgdGhpcy5jYXJEb3duKHRoaXMuY2FyMyk7XG4gICAgdGhpcy5jYXJEb3duKHRoaXMuY2FyNCk7XG5cbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTEpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lMik7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmUzKTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTQpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lNSk7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmU2KTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTcpO1xuXG4gICAgaWYgKCF0aGlzLnBhdXNlKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKTtcbiAgfVxuXG4gIGNhckRvd24oY2FyKSB7XG4gICAgbGV0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoY2FyKS50b3ApO1xuICAgIGlmIChwb3NpdGlvbiA+IHRoaXMuZ2FtZUNvbnRhaW5lckhlaWdodCkge1xuICAgICAgcG9zaXRpb24gPSAtMjAwO1xuICAgICAgY29uc3QgcG9zaXRpb25MZWZ0ID0gcGFyc2VJbnQoXG4gICAgICAgIE1hdGgucmFuZG9tKCkgKiAodGhpcy5nYW1lQ29udGFpbmVyV2lkdGggLSB0aGlzLmNhcldpZHRoIC0gMTApXG4gICAgICApO1xuICAgICAgY2FyLnN0eWxlLmxlZnQgPSBgJHtwb3NpdGlvbkxlZnR9cHhgO1xuICAgICAgY2FyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgIFwicmdiKFwiICtcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSArXG4gICAgICAgIFwiLFwiICtcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSArXG4gICAgICAgIFwiLFwiICtcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSArXG4gICAgICAgIFwiKVwiO1xuICAgIH1cbiAgICBjYXIuc3R5bGUudG9wID0gYCR7cG9zaXRpb24gKyB0aGlzLnNwZWVkfXB4YDtcbiAgfVxuXG4gIGxpbmVEb3duKGxpbmUpIHtcbiAgICBsZXQgcG9zaXRpb24gPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShsaW5lKS50b3ApO1xuICAgIGlmIChwb3NpdGlvbiA+IHRoaXMuZ2FtZUNvbnRhaW5lckhlaWdodCkge1xuICAgICAgcG9zaXRpb24gPSAtMzAwO1xuICAgIH1cbiAgICBsaW5lLnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uICsgdGhpcy5saW5lU3BlZWR9cHhgO1xuICB9XG5cbiAgY29sbGlzaW9uKHBsYXllckNhciwgbnBjQ2FyKSB7XG4gICAgY29uc3QgcGxheWVyc1RvcExlZnQgPSBwbGF5ZXJDYXIub2Zmc2V0TGVmdDtcbiAgICBjb25zdCB5MSA9IHBsYXllckNhci5vZmZzZXRUb3A7XG4gICAgY29uc3QgaDEgPSBwbGF5ZXJDYXIub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IHcxID0gcGxheWVyQ2FyLm9mZnNldFdpZHRoO1xuXG4gICAgY29uc3QgbnBjVG9wTGVmdCA9IG5wY0Nhci5vZmZzZXRMZWZ0O1xuICAgIGNvbnN0IHkyID0gbnBjQ2FyLm9mZnNldFRvcDtcbiAgICBjb25zdCBoMiA9IG5wY0Nhci5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgdzIgPSBucGNDYXIub2Zmc2V0V2lkdGg7XG5cbiAgICBjb25zdCBwbGF5ZXJzWVJlYWNoID0geTEgKyBoMSAtIDI7XG4gICAgY29uc3QgcGxheWVyc1hSZWFjaCA9IHBsYXllcnNUb3BMZWZ0ICsgdzEgKyA1O1xuICAgIGNvbnN0IG5wY1lSZWFjaCA9IHkyICsgaDIgLSAyO1xuICAgIGNvbnN0IG5wY1hSZWFjaCA9IG5wY1RvcExlZnQgKyB3MiArIDU7XG5cbiAgICBpZiAoXG4gICAgICBwbGF5ZXJzWVJlYWNoIDwgeTIgfHxcbiAgICAgIHkxID4gbnBjWVJlYWNoIHx8XG4gICAgICBwbGF5ZXJzWFJlYWNoIDwgbnBjVG9wTGVmdCB8fFxuICAgICAgcGxheWVyc1RvcExlZnQgPiBucGNYUmVhY2hcbiAgICApXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgdGhpcy5ibGlua0VmZmVjdCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgcGxheWVyQ2FyLnN0eWxlLmRpc3BsYXkgPSBwbGF5ZXJDYXIuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIiA/IFwiXCIgOiBcIm5vbmVcIjtcbiAgICAgIG5wY0Nhci5zdHlsZS5kaXNwbGF5ID0gbnBjQ2FyLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIgPyBcIlwiIDogXCJub25lXCI7XG4gICAgfSwgNTAwKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGxvc3QoKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlUmlnaHQpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZUxlZnQpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVVwKTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVEb3duKTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xuICAgIHRoaXMucmVzdGFydENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgdGhpcy5zZXRIaWdoU2NvcmUoKTtcbiAgfVxuXG4gIHNldEhpZ2hTY29yZSgpIHtcbiAgICBpZiAocGFyc2VJbnQodGhpcy50b3BTY29yZSkgPCBwYXJzZUludCh0aGlzLnNjb3JlLmlubmVyVGV4dCkpIHtcbiAgICAgIHRoaXMudG9wU2NvcmUgPSBwYXJzZUludCh0aGlzLnNjb3JlLmlubmVyVGV4dCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhpZ2hTY29yZVwiLCBwYXJzZUludCh0aGlzLnNjb3JlLmlubmVyVGV4dCkpO1xuICAgIH1cbiAgICB0aGlzLmhpZ2hTY29yZS5pbm5lclRleHQgPSB0aGlzLnRvcFNjb3JlO1xuICB9XG5cbiAga2V5RG93bigpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyLCB0cnVlKTtcbiAgfVxuICBrZXlVcCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcEhhbmRsZXIsIHRydWUpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRlYnVnZ2VyXG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmICF0aGlzLnBhdXNlKSB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICBpZiAoIXRoaXMubW92ZURvd24pIHtcbiAgICAgICAgICAgIHRoaXMubW92ZURvd24gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kb3duKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgaWYgKCF0aGlzLm1vdmVVcCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlVXAgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgIGlmICghdGhpcy5tb3ZlTGVmdCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlTGVmdCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxlZnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgIGlmICghdGhpcy5tb3ZlUmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVJpZ2h0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmlnaHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICB0aGlzLnRvZ2dsZVBhdXNlKCk7XG4gICAgfVxuICAgIGRlYnVnZ2VyXG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIgJiYgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xuICAgIH1cbiAgfVxuICBrZXlVcEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlRG93bik7XG4gICAgICAgICAgdGhpcy5tb3ZlRG93biA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlVXApO1xuICAgICAgICAgIHRoaXMubW92ZVVwID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVMZWZ0KTtcbiAgICAgICAgICB0aGlzLm1vdmVMZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVSaWdodCk7XG4gICAgICAgICAgdGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGVmdCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS5sZWZ0KTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgcG9zaXRpb24gPiA3KSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24gLSB0aGlzLmhhbmRsaW5nfXB4YDtcbiAgICAgIHRoaXMubW92ZUxlZnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sZWZ0KTtcbiAgICB9XG4gIH1cblxuICByaWdodCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS5sZWZ0KTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgcG9zaXRpb24gPCB0aGlzLmdhbWVDb250YWluZXJXaWR0aCAtIHRoaXMuY2FyV2lkdGggLSA3KSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24gKyB0aGlzLmhhbmRsaW5nfXB4YDtcbiAgICAgIHRoaXMubW92ZVJpZ2h0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIHVwKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLnRvcCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIHBvc2l0aW9uID4gMjApIHtcbiAgICAgIHRoaXMuY2FyLnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uIC0gM31weGA7XG4gICAgICB0aGlzLm1vdmVVcCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwKTtcbiAgICB9XG4gIH1cblxuICBkb3duKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLnRvcCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIHBvc2l0aW9uIDwgdGhpcy5nYW1lQ29udGFpbmVySGVpZ2h0IC0gdGhpcy5jYXJIZWlnaHQgLSAyKSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbiArIDN9cHhgO1xuICAgICAgdGhpcy5tb3ZlRG93biA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRvd24pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIlxuaW1wb3J0IHsgdG9nZ2xlUGxheSB9IGZyb20gXCIuL211c2ljXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZVNvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtdXNpY1wiKTtcbiAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGFydFwiKTtcbiAgY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheVwiKTtcblxuICAvLyBydW5HYW1lKCk7XG4gIGxldCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgdG9nZ2xlU291bmQub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtdm9sdW1lLW11dGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImZhLXZvbHVtZS1vZmZcIik7XG4gICAgdG9nZ2xlUGxheSgpO1xuICB9O1xuICByZXN0YXJ0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgIGdhbWUucmVzZXQoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZS5sb29wKTtcbiAgfTtcbiAgcGxheUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICBnYW1lLnRvZ2dsZVBhdXNlKCk7XG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZS5sb29wKTtcbiAgLy8gZnVuY3Rpb24gcnVuR2FtZSgpe1xuICAgIGdhbWUua2V5VXAoKTtcbiAgICBnYW1lLmtleURvd24oKTtcbiAgLy8gfVxuXG4gIFxuXG59KTtcblxuXG5cbiIsImNvbnN0IGJhY2tncm91bmRNdXNpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZC1tdXNpY1wiKTtcblxubGV0IGlzUGxheWluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiB0b2dnbGVQbGF5KCkge1xuICBkZWJ1Z2dlclxuICBpZiAoaXNQbGF5aW5nKSB7XG4gICAgYmFja2dyb3VuZE11c2ljLnBhdXNlKClcbiAgfSBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kTXVzaWMucGxheSgpO1xuICB9XG59O1xuXG5iYWNrZ3JvdW5kTXVzaWMub25wbGF5aW5nID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1Z2dlclxuICBpc1BsYXlpbmcgPSB0cnVlO1xufTtcbmJhY2tncm91bmRNdXNpYy5vbnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICBpc1BsYXlpbmcgPSBmYWxzZTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7IHRvZ2dsZVBsYXkgfVxuXG4iXSwic291cmNlUm9vdCI6IiJ9