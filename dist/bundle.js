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
    this.pauseContainer = document.getElementById("pause-container");
    this.restartBtn = document.getElementById("restart");
    this.playBtn = document.getElementById("play");
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
  var restartBtn = document.getElementById("restart"); // runGame();

  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();

  toggleSound.onclick = function () {
    document.querySelector(".fa-volume-mute").classList.toggle("fa-volume-off");
    Object(_music__WEBPACK_IMPORTED_MODULE_1__["togglePlay"])();
  };

  restartBtn.onclick = function () {
    game.reset();
    requestAnimationFrame(game.loop);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tdXNpYy5qcyJdLCJuYW1lcyI6WyJHYW1lIiwiY2FyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdhbWVDb250YWluZXIiLCJnYW1lQ29udGFpbmVyV2lkdGgiLCJwYXJzZUludCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJ3aWR0aCIsImdhbWVDb250YWluZXJIZWlnaHQiLCJoZWlnaHQiLCJjYXJXaWR0aCIsImNhckhlaWdodCIsInJlc3RhcnRDb250YWluZXIiLCJwYXVzZUNvbnRhaW5lciIsInJlc3RhcnRCdG4iLCJwbGF5QnRuIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJ0b3BTY29yZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbm5lclRleHQiLCJzY29yZUNvdW50ZXIiLCJwb2ludFNwZWVkIiwic3BlZWQiLCJsaW5lU3BlZWQiLCJwYXVzZSIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwibW92ZVVwIiwibW92ZURvd24iLCJnYW1lT3ZlciIsImhhbmRsaW5nIiwiY2FyMSIsImNhcjIiLCJjYXIzIiwiY2FyNCIsImxpbmUxIiwibGluZTIiLCJsaW5lMyIsImxpbmU0IiwibGluZTUiLCJsaW5lNiIsImxpbmU3IiwiY3Jhc2giLCJBdWRpbyIsImxvb3AiLCJiaW5kIiwic2V0SGlnaFNjb3JlIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJjYXJEb3duIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0Iiwic3R5bGUiLCJkaXNwbGF5IiwidG9wIiwiY2xlYXJJbnRlcnZhbCIsImJsaW5rRWZmZWN0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb2xsaXNpb24iLCJwbGF5IiwibG9zdCIsImxpbmVEb3duIiwicG9zaXRpb24iLCJwb3NpdGlvbkxlZnQiLCJNYXRoIiwicmFuZG9tIiwiYmFja2dyb3VuZENvbG9yIiwiZmxvb3IiLCJsaW5lIiwicGxheWVyQ2FyIiwibnBjQ2FyIiwicGxheWVyc1RvcExlZnQiLCJvZmZzZXRMZWZ0IiwieTEiLCJvZmZzZXRUb3AiLCJoMSIsIm9mZnNldEhlaWdodCIsIncxIiwib2Zmc2V0V2lkdGgiLCJucGNUb3BMZWZ0IiwieTIiLCJoMiIsIncyIiwicGxheWVyc1lSZWFjaCIsInBsYXllcnNYUmVhY2giLCJucGNZUmVhY2giLCJucGNYUmVhY2giLCJzZXRJbnRlcnZhbCIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImtleUNvZGUiLCJ0b2dnbGVQYXVzZSIsInJlc2V0IiwidG9nZ2xlU291bmQiLCJnYW1lIiwib25jbGljayIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVQbGF5Iiwia2V5VXAiLCJrZXlEb3duIiwiYmFja2dyb3VuZE11c2ljIiwiaXNQbGF5aW5nIiwib25wbGF5aW5nIiwib25wYXVzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixF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SSxDQUFDTSxLQUFMO0FBQ0FOLE1BQUksQ0FBQ08sT0FBTCxHQW5COEMsQ0FvQmhEO0FBSUQsQ0F4QkQsRTs7Ozs7Ozs7Ozs7QUNIQSxJQUFNQyxlQUFlLEdBQUc3RyxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLENBQXhCO0FBRUEsSUFBSTZHLFNBQVMsR0FBRyxLQUFoQjs7QUFFQSxTQUFTSixVQUFULEdBQXNCO0FBQ3BCOztBQUNBLE1BQUlJLFNBQUosRUFBZTtBQUNiRCxtQkFBZSxDQUFDbkYsS0FBaEI7QUFDRCxHQUZELE1BRU87QUFDTG1GLG1CQUFlLENBQUM3QyxJQUFoQjtBQUNEO0FBQ0Y7O0FBQUE7O0FBRUQ2QyxlQUFlLENBQUNFLFNBQWhCLEdBQTRCLFlBQVk7QUFDdEM7QUFDQUQsV0FBUyxHQUFHLElBQVo7QUFDRCxDQUhEOztBQUlBRCxlQUFlLENBQUNHLE9BQWhCLEdBQTBCLFlBQVk7QUFDcENGLFdBQVMsR0FBRyxLQUFaO0FBQ0QsQ0FGRDs7QUFLQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQUVSLFlBQVUsRUFBVkE7QUFBRixDQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXItY2FyXCIpO1xuICAgIHRoaXMuZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jb250YWluZXJcIik7XG4gICAgdGhpcy5nYW1lQ29udGFpbmVyV2lkdGggPSBwYXJzZUludChcbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZ2FtZUNvbnRhaW5lcikud2lkdGhcbiAgICApO1xuICAgIHRoaXMuZ2FtZUNvbnRhaW5lckhlaWdodCA9IHBhcnNlSW50KFxuICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5nYW1lQ29udGFpbmVyKS5oZWlnaHRcbiAgICApO1xuICAgIHRoaXMuY2FyV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcikud2lkdGgpO1xuICAgIHRoaXMuY2FySGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLmhlaWdodCk7XG4gICAgdGhpcy5yZXN0YXJ0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXJ0LWNvbnRhaW5lclwiKTtcbiAgICB0aGlzLnBhdXNlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXVzZS1jb250YWluZXJcIik7XG4gICAgdGhpcy5yZXN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXJ0XCIpO1xuICAgIHRoaXMucGxheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheVwiKTtcbiAgICB0aGlzLnNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVwiKTtcbiAgICB0aGlzLmhpZ2hTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaC1zY29yZVwiKTtcbiAgICB0aGlzLnRvcFNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaWdoU2NvcmVcIikgfHwgMDtcbiAgICB0aGlzLmhpZ2hTY29yZS5pbm5lclRleHQgPSB0aGlzLnRvcFNjb3JlO1xuICAgIHRoaXMuc2NvcmVDb3VudGVyID0gMDtcbiAgICB0aGlzLnBvaW50U3BlZWQgPSAxO1xuICAgIHRoaXMuc3BlZWQgPSA0O1xuICAgIHRoaXMubGluZVNwZWVkID0gNTtcbiAgICB0aGlzLnBhdXNlID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmVMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZlVXAgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmVEb3duID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuaGFuZGxpbmcgPSA1O1xuXG4gICAgdGhpcy5jYXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXIxXCIpO1xuICAgIHRoaXMuY2FyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyMlwiKTtcbiAgICB0aGlzLmNhcjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcjNcIik7XG4gICAgdGhpcy5jYXI0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXI0XCIpO1xuXG4gICAgdGhpcy5saW5lMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTFcIik7XG4gICAgdGhpcy5saW5lMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTJcIik7XG4gICAgdGhpcy5saW5lMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTNcIik7XG4gICAgdGhpcy5saW5lNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTRcIik7XG4gICAgdGhpcy5saW5lNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTVcIik7XG4gICAgdGhpcy5saW5lNiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTZcIik7XG4gICAgdGhpcy5saW5lNyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTdcIik7XG5cbiAgICB0aGlzLmNyYXNoID0gbmV3IEF1ZGlvKFwiLi9kaXN0L2NyYXNoLm1wM1wiKTtcblxuICAgIHRoaXMubG9vcCA9IHRoaXMubG9vcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0SGlnaFNjb3JlID0gdGhpcy5zZXRIaWdoU2NvcmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMua2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNhckRvd24gPSB0aGlzLmNhckRvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwID0gdGhpcy51cC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZG93biA9IHRoaXMuZG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmlnaHQgPSB0aGlzLnJpZ2h0LmJpbmQodGhpcyk7XG5cbiAgfVxuXG4gIHJlc2V0KCl7XG4gICAgdGhpcy5yZXN0YXJ0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0aGlzLmNhci5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICB0aGlzLmNhci5zdHlsZS50b3AgPSBcIjgwJVwiO1xuICAgIHRoaXMuY2FyLnN0eWxlLmxlZnQgPSBcIjIwJVwiO1xuICAgIHRoaXMuc2NvcmVDb3VudGVyID0gMDtcbiAgICB0aGlzLnBvaW50U3BlZWQgPSAxO1xuICAgIHRoaXMuc3BlZWQgPSA0O1xuICAgIHRoaXMubGluZVNwZWVkID0gNTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5oYW5kbGluZyA9IDU7XG4gICAgdGhpcy5jYXIxLnN0eWxlLnRvcCA9IFwiLTgwcHhcIjtcbiAgICB0aGlzLmNhcjIuc3R5bGUudG9wID0gXCItMjUwcHhcIjtcbiAgICB0aGlzLmNhcjMuc3R5bGUudG9wID0gXCItNDUwcHhcIjtcbiAgICB0aGlzLmNhcjQuc3R5bGUudG9wID0gXCItNjUwcHhcIjtcbiAgICB0aGlzLmNhcjEuc3R5bGUuZGlzcGxheSA9IFwiXCJcbiAgICB0aGlzLmNhcjIuc3R5bGUuZGlzcGxheSA9IFwiXCJcbiAgICB0aGlzLmNhcjMuc3R5bGUuZGlzcGxheSA9IFwiXCJcbiAgICB0aGlzLmNhcjQuc3R5bGUuZGlzcGxheSA9IFwiXCJcbiAgICB0aGlzLnNjb3JlLmlubmVyVGV4dCA9IFwiMFwiO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5ibGlua0VmZmVjdCk7XG5cbiAgfVxuXG4gIHRvZ2dsZVBhdXNlKCl7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlUmlnaHQpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZUxlZnQpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVVwKTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVEb3duKTtcbiAgICBpZiAodGhpcy5wYXVzZSl7XG4gICAgICB0aGlzLnBhdXNlID0gZmFsc2U7XG4gICAgICB0aGlzLnBhdXNlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGF1c2UgPSB0cnVlOyBcbiAgICAgIHRoaXMucGF1c2VDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH0gIFxuXG4gIH1cblxuICBsb29wKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY29sbGlzaW9uKHRoaXMuY2FyLCB0aGlzLmNhcjEpIHx8XG4gICAgICB0aGlzLmNvbGxpc2lvbih0aGlzLmNhciwgdGhpcy5jYXIyKSB8fFxuICAgICAgdGhpcy5jb2xsaXNpb24odGhpcy5jYXIsIHRoaXMuY2FyMykgfHxcbiAgICAgIHRoaXMuY29sbGlzaW9uKHRoaXMuY2FyLCB0aGlzLmNhcjQpXG4gICAgKSB7XG4gICAgICB0aGlzLmNyYXNoLnBsYXkoKTtcbiAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5sb3N0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zY29yZUNvdW50ZXIrKztcblxuICAgIGlmICh0aGlzLnNjb3JlQ291bnRlciAlIDIwID09IDApIHtcbiAgICAgIHNjb3JlLmlubmVyVGV4dCA9IHBhcnNlSW50KHNjb3JlLmlubmVyVGV4dCkgKyB0aGlzLnBvaW50U3BlZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnNjb3JlQ291bnRlciAlIDUwMCA9PSAwKSB7XG4gICAgICB0aGlzLnNwZWVkKys7XG4gICAgICB0aGlzLmxpbmVTcGVlZCsrO1xuICAgICAgdGhpcy5wb2ludFNwZWVkKys7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnNjb3JlQ291bnRlciAlIDEwMDAgPT0gMCAmJiB0aGlzLmhhbmRsaW5nIDwgMjUpIHtcbiAgICAgIHRoaXMuaGFuZGxpbmcrKztcbiAgICB9XG5cbiAgICB0aGlzLmNhckRvd24odGhpcy5jYXIxKTtcbiAgICB0aGlzLmNhckRvd24odGhpcy5jYXIyKTtcbiAgICB0aGlzLmNhckRvd24odGhpcy5jYXIzKTtcbiAgICB0aGlzLmNhckRvd24odGhpcy5jYXI0KTtcblxuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lMSk7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmUyKTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTMpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lNCk7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmU1KTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTYpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lNyk7XG5cbiAgICBpZiAoIXRoaXMucGF1c2UpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xuICB9XG5cbiAgY2FyRG93bihjYXIpIHtcbiAgICBsZXQgcG9zaXRpb24gPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYXIpLnRvcCk7XG4gICAgaWYgKHBvc2l0aW9uID4gdGhpcy5nYW1lQ29udGFpbmVySGVpZ2h0KSB7XG4gICAgICBwb3NpdGlvbiA9IC0yMDA7XG4gICAgICBjb25zdCBwb3NpdGlvbkxlZnQgPSBwYXJzZUludChcbiAgICAgICAgTWF0aC5yYW5kb20oKSAqICh0aGlzLmdhbWVDb250YWluZXJXaWR0aCAtIHRoaXMuY2FyV2lkdGggLSAxMClcbiAgICAgICk7XG4gICAgICBjYXIuc3R5bGUubGVmdCA9IGAke3Bvc2l0aW9uTGVmdH1weGA7XG4gICAgICBjYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgICAgXCJyZ2IoXCIgK1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICtcbiAgICAgICAgXCIsXCIgK1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICtcbiAgICAgICAgXCIsXCIgK1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICtcbiAgICAgICAgXCIpXCI7XG4gICAgfVxuICAgIGNhci5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbiArIHRoaXMuc3BlZWR9cHhgO1xuICB9XG5cbiAgbGluZURvd24obGluZSkge1xuICAgIGxldCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGxpbmUpLnRvcCk7XG4gICAgaWYgKHBvc2l0aW9uID4gdGhpcy5nYW1lQ29udGFpbmVySGVpZ2h0KSB7XG4gICAgICBwb3NpdGlvbiA9IC0zMDA7XG4gICAgfVxuICAgIGxpbmUuc3R5bGUudG9wID0gYCR7cG9zaXRpb24gKyB0aGlzLmxpbmVTcGVlZH1weGA7XG4gIH1cblxuICBjb2xsaXNpb24ocGxheWVyQ2FyLCBucGNDYXIpIHtcbiAgICBjb25zdCBwbGF5ZXJzVG9wTGVmdCA9IHBsYXllckNhci5vZmZzZXRMZWZ0O1xuICAgIGNvbnN0IHkxID0gcGxheWVyQ2FyLm9mZnNldFRvcDtcbiAgICBjb25zdCBoMSA9IHBsYXllckNhci5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgdzEgPSBwbGF5ZXJDYXIub2Zmc2V0V2lkdGg7XG5cbiAgICBjb25zdCBucGNUb3BMZWZ0ID0gbnBjQ2FyLm9mZnNldExlZnQ7XG4gICAgY29uc3QgeTIgPSBucGNDYXIub2Zmc2V0VG9wO1xuICAgIGNvbnN0IGgyID0gbnBjQ2FyLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB3MiA9IG5wY0Nhci5vZmZzZXRXaWR0aDtcblxuICAgIGNvbnN0IHBsYXllcnNZUmVhY2ggPSB5MSArIGgxIC0gMjtcbiAgICBjb25zdCBwbGF5ZXJzWFJlYWNoID0gcGxheWVyc1RvcExlZnQgKyB3MSArIDU7XG4gICAgY29uc3QgbnBjWVJlYWNoID0geTIgKyBoMiAtIDI7XG4gICAgY29uc3QgbnBjWFJlYWNoID0gbnBjVG9wTGVmdCArIHcyICsgNTtcblxuICAgIGlmIChcbiAgICAgIHBsYXllcnNZUmVhY2ggPCB5MiB8fFxuICAgICAgeTEgPiBucGNZUmVhY2ggfHxcbiAgICAgIHBsYXllcnNYUmVhY2ggPCBucGNUb3BMZWZ0IHx8XG4gICAgICBwbGF5ZXJzVG9wTGVmdCA+IG5wY1hSZWFjaFxuICAgIClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLmJsaW5rRWZmZWN0ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICBwbGF5ZXJDYXIuc3R5bGUuZGlzcGxheSA9IHBsYXllckNhci5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiID8gXCJcIiA6IFwibm9uZVwiO1xuICAgICAgbnBjQ2FyLnN0eWxlLmRpc3BsYXkgPSBucGNDYXIuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIiA/IFwiXCIgOiBcIm5vbmVcIjtcbiAgICB9LCA1MDApO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbG9zdCgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVSaWdodCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlTGVmdCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlVXApO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZURvd24pO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gICAgdGhpcy5yZXN0YXJ0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB0aGlzLnNldEhpZ2hTY29yZSgpO1xuICB9XG5cbiAgc2V0SGlnaFNjb3JlKCkge1xuICAgIGlmIChwYXJzZUludCh0aGlzLnRvcFNjb3JlKSA8IHBhcnNlSW50KHRoaXMuc2NvcmUuaW5uZXJUZXh0KSkge1xuICAgICAgdGhpcy50b3BTY29yZSA9IHBhcnNlSW50KHRoaXMuc2NvcmUuaW5uZXJUZXh0KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlnaFNjb3JlXCIsIHBhcnNlSW50KHRoaXMuc2NvcmUuaW5uZXJUZXh0KSk7XG4gICAgfVxuICAgIHRoaXMuaGlnaFNjb3JlLmlubmVyVGV4dCA9IHRoaXMudG9wU2NvcmU7XG4gIH1cblxuICBrZXlEb3duKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5RG93bkhhbmRsZXIsIHRydWUpO1xuICB9XG4gIGtleVVwKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleVVwSGFuZGxlciwgdHJ1ZSk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZGVidWdnZXJcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgIXRoaXMucGF1c2UpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgIGlmICghdGhpcy5tb3ZlRG93bikge1xuICAgICAgICAgICAgdGhpcy5tb3ZlRG93biA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRvd24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICBpZiAoIXRoaXMubW92ZVVwKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVVcCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgaWYgKCF0aGlzLm1vdmVMZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVMZWZ0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubGVmdCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgaWYgKCF0aGlzLm1vdmVSaWdodCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlUmlnaHQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yaWdodCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgIHRoaXMudG9nZ2xlUGF1c2UoKTtcbiAgICB9XG4gICAgZGVidWdnZXJcbiAgICBpZiAodGhpcy5nYW1lT3ZlciAmJiBldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gICAgfVxuICB9XG4gIGtleVVwSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyKSB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVEb3duKTtcbiAgICAgICAgICB0aGlzLm1vdmVEb3duID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVVcCk7XG4gICAgICAgICAgdGhpcy5tb3ZlVXAgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZUxlZnQpO1xuICAgICAgICAgIHRoaXMubW92ZUxlZnQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVJpZ2h0KTtcbiAgICAgICAgICB0aGlzLm1vdmVSaWdodCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsZWZ0KCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLmxlZnQpO1xuICAgIGlmICghdGhpcy5nYW1lT3ZlciAmJiBwb3NpdGlvbiA+IDcpIHtcbiAgICAgIHRoaXMuY2FyLnN0eWxlLmxlZnQgPSBgJHtwb3NpdGlvbiAtIHRoaXMuaGFuZGxpbmd9cHhgO1xuICAgICAgdGhpcy5tb3ZlTGVmdCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxlZnQpO1xuICAgIH1cbiAgfVxuXG4gIHJpZ2h0KCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLmxlZnQpO1xuICAgIGlmICghdGhpcy5nYW1lT3ZlciAmJiBwb3NpdGlvbiA8IHRoaXMuZ2FtZUNvbnRhaW5lcldpZHRoIC0gdGhpcy5jYXJXaWR0aCAtIDcpIHtcbiAgICAgIHRoaXMuY2FyLnN0eWxlLmxlZnQgPSBgJHtwb3NpdGlvbiArIHRoaXMuaGFuZGxpbmd9cHhgO1xuICAgICAgdGhpcy5tb3ZlUmlnaHQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yaWdodCk7XG4gICAgfVxuICB9XG5cbiAgdXAoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcikudG9wKTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgcG9zaXRpb24gPiAyMCkge1xuICAgICAgdGhpcy5jYXIuc3R5bGUudG9wID0gYCR7cG9zaXRpb24gLSAzfXB4YDtcbiAgICAgIHRoaXMubW92ZVVwID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXApO1xuICAgIH1cbiAgfVxuXG4gIGRvd24oKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcikudG9wKTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgcG9zaXRpb24gPCB0aGlzLmdhbWVDb250YWluZXJIZWlnaHQgLSB0aGlzLmNhckhlaWdodCAtIDIpIHtcbiAgICAgIHRoaXMuY2FyLnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uICsgM31weGA7XG4gICAgICB0aGlzLm1vdmVEb3duID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZG93bik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiXG5pbXBvcnQgeyB0b2dnbGVQbGF5IH0gZnJvbSBcIi4vbXVzaWNcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgdG9nZ2xlU291bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm11c2ljXCIpO1xuICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXJ0XCIpO1xuICAvLyBydW5HYW1lKCk7XG4gIGxldCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgdG9nZ2xlU291bmQub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtdm9sdW1lLW11dGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImZhLXZvbHVtZS1vZmZcIik7XG4gICAgdG9nZ2xlUGxheSgpO1xuICB9O1xuICByZXN0YXJ0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBnYW1lLnJlc2V0KCk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZS5sb29wKTtcblxuICB9O1xuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lLmxvb3ApO1xuICAvLyBmdW5jdGlvbiBydW5HYW1lKCl7XG4gICAgZ2FtZS5rZXlVcCgpO1xuICAgIGdhbWUua2V5RG93bigpO1xuICAvLyB9XG5cbiAgXG5cbn0pO1xuXG5cblxuIiwiY29uc3QgYmFja2dyb3VuZE11c2ljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kLW11c2ljXCIpO1xuXG5sZXQgaXNQbGF5aW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHRvZ2dsZVBsYXkoKSB7XG4gIGRlYnVnZ2VyXG4gIGlmIChpc1BsYXlpbmcpIHtcbiAgICBiYWNrZ3JvdW5kTXVzaWMucGF1c2UoKVxuICB9IGVsc2Uge1xuICAgIGJhY2tncm91bmRNdXNpYy5wbGF5KCk7XG4gIH1cbn07XG5cbmJhY2tncm91bmRNdXNpYy5vbnBsYXlpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnZ2VyXG4gIGlzUGxheWluZyA9IHRydWU7XG59O1xuYmFja2dyb3VuZE11c2ljLm9ucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlzUGxheWluZyA9IGZhbHNlO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgdG9nZ2xlUGxheSB9XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=