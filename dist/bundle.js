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
    this.car.style.display = "flex";
    document.querySelectorAll(".line").forEach(function (el) {
      return el.style.display = "block";
    });
    this.gameContainer = document.getElementById("game-container");
    this.gameContainerWidth = parseInt(window.getComputedStyle(this.gameContainer).width);
    this.gameContainerHeight = parseInt(window.getComputedStyle(this.gameContainer).height);
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

  _createClass(Game, [{
    key: "reset",
    value: function reset() {
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
        this.score.innerText = "".concat(parseInt(this.score.innerText) + 1);
        this.car.style.top = "".concat(position - 3, "px");
        this.moveUp = requestAnimationFrame(this.up);
      }
    }
  }, {
    key: "down",
    value: function down() {
      var position = parseInt(window.getComputedStyle(this.car).top);

      if (!this.gameOver && position < this.gameContainerHeight - this.carHeight - 2) {
        // this.score.innerText = `${parseInt(this.score.innerText) - 1}`;
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
  var playBtn = document.getElementById("play");
  var startGame = document.getElementById("start-game-container");
  var game; // debugger

  startGame.onclick = function () {
    startGame.style.display = "none";
    game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
    requestAnimationFrame(game.loop);
    game.keyUp();
    game.keyDown();
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tdXNpYy5qcyJdLCJuYW1lcyI6WyJHYW1lIiwiY2FyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJnYW1lQ29udGFpbmVyIiwiZ2FtZUNvbnRhaW5lcldpZHRoIiwicGFyc2VJbnQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwid2lkdGgiLCJnYW1lQ29udGFpbmVySGVpZ2h0IiwiaGVpZ2h0IiwiY2FyV2lkdGgiLCJjYXJIZWlnaHQiLCJyZXN0YXJ0Q29udGFpbmVyIiwicGF1c2VDb250YWluZXIiLCJzY29yZSIsImhpZ2hTY29yZSIsInRvcFNjb3JlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImlubmVyVGV4dCIsInNjb3JlQ291bnRlciIsInBvaW50U3BlZWQiLCJzcGVlZCIsImxpbmVTcGVlZCIsInBhdXNlIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJtb3ZlVXAiLCJtb3ZlRG93biIsImdhbWVPdmVyIiwiaGFuZGxpbmciLCJjYXIxIiwiY2FyMiIsImNhcjMiLCJjYXI0IiwibGluZTEiLCJsaW5lMiIsImxpbmUzIiwibGluZTQiLCJsaW5lNSIsImxpbmU2IiwibGluZTciLCJjcmFzaCIsIkF1ZGlvIiwibG9vcCIsImJpbmQiLCJzZXRIaWdoU2NvcmUiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImNhckRvd24iLCJ1cCIsImRvd24iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJjbGVhckludGVydmFsIiwiYmxpbmtFZmZlY3QiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvbGxpc2lvbiIsInBsYXkiLCJsb3N0IiwibGluZURvd24iLCJwb3NpdGlvbiIsInBvc2l0aW9uTGVmdCIsIk1hdGgiLCJyYW5kb20iLCJiYWNrZ3JvdW5kQ29sb3IiLCJmbG9vciIsImxpbmUiLCJwbGF5ZXJDYXIiLCJucGNDYXIiLCJwbGF5ZXJzVG9wTGVmdCIsIm9mZnNldExlZnQiLCJ5MSIsIm9mZnNldFRvcCIsImgxIiwib2Zmc2V0SGVpZ2h0IiwidzEiLCJvZmZzZXRXaWR0aCIsIm5wY1RvcExlZnQiLCJ5MiIsImgyIiwidzIiLCJwbGF5ZXJzWVJlYWNoIiwicGxheWVyc1hSZWFjaCIsIm5wY1lSZWFjaCIsIm5wY1hSZWFjaCIsInNldEludGVydmFsIiwic2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwia2V5Q29kZSIsInRvZ2dsZVBhdXNlIiwicmVzZXQiLCJ0b2dnbGVTb3VuZCIsInJlc3RhcnRCdG4iLCJwbGF5QnRuIiwic3RhcnRHYW1lIiwiZ2FtZSIsIm9uY2xpY2siLCJrZXlVcCIsImtleURvd24iLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlUGxheSIsImJhY2tncm91bmRNdXNpYyIsImlzUGxheWluZyIsIm9ucGxheWluZyIsIm9ucGF1c2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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O0FBQUE7O0FBRURnRCxlQUFlLENBQUNFLFNBQWhCLEdBQTRCLFlBQVk7QUFDdEM7QUFDQUQsV0FBUyxHQUFHLElBQVo7QUFDRCxDQUhEOztBQUlBRCxlQUFlLENBQUNHLE9BQWhCLEdBQTBCLFlBQVk7QUFDcENGLFdBQVMsR0FBRyxLQUFaO0FBQ0QsQ0FGRDs7QUFLQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQUVOLFlBQVUsRUFBVkE7QUFBRixDQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXItY2FyXCIpO1xuICAgIHRoaXMuY2FyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGluZVwiKS5mb3JFYWNoKCBlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiICk7XG4gICAgdGhpcy5nYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNvbnRhaW5lclwiKTtcbiAgICB0aGlzLmdhbWVDb250YWluZXJXaWR0aCA9IHBhcnNlSW50KFxuICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5nYW1lQ29udGFpbmVyKS53aWR0aFxuICAgICk7XG4gICAgdGhpcy5nYW1lQ29udGFpbmVySGVpZ2h0ID0gcGFyc2VJbnQoXG4gICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmdhbWVDb250YWluZXIpLmhlaWdodFxuICAgICk7XG4gICAgdGhpcy5jYXJXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS53aWR0aCk7XG4gICAgdGhpcy5jYXJIZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcikuaGVpZ2h0KTtcbiAgICB0aGlzLnJlc3RhcnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnQtY29udGFpbmVyXCIpO1xuICAgIHRoaXMucGF1c2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlLWNvbnRhaW5lclwiKTtcbiAgICB0aGlzLnNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVwiKTtcbiAgICB0aGlzLmhpZ2hTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaC1zY29yZVwiKTtcbiAgICB0aGlzLnRvcFNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaWdoU2NvcmVcIikgfHwgMDtcbiAgICB0aGlzLmhpZ2hTY29yZS5pbm5lclRleHQgPSB0aGlzLnRvcFNjb3JlO1xuICAgIHRoaXMuc2NvcmVDb3VudGVyID0gMDtcbiAgICB0aGlzLnBvaW50U3BlZWQgPSAxO1xuICAgIHRoaXMuc3BlZWQgPSA0O1xuICAgIHRoaXMubGluZVNwZWVkID0gNTtcbiAgICB0aGlzLnBhdXNlID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmVMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZlVXAgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmVEb3duID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuaGFuZGxpbmcgPSA1O1xuXG4gICAgdGhpcy5jYXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXIxXCIpO1xuICAgIHRoaXMuY2FyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyMlwiKTtcbiAgICB0aGlzLmNhcjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcjNcIik7XG4gICAgdGhpcy5jYXI0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXI0XCIpO1xuXG4gICAgdGhpcy5saW5lMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTFcIik7XG4gICAgdGhpcy5saW5lMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTJcIik7XG4gICAgdGhpcy5saW5lMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTNcIik7XG4gICAgdGhpcy5saW5lNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTRcIik7XG4gICAgdGhpcy5saW5lNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTVcIik7XG4gICAgdGhpcy5saW5lNiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTZcIik7XG4gICAgdGhpcy5saW5lNyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTdcIik7XG5cbiAgICB0aGlzLmNyYXNoID0gbmV3IEF1ZGlvKFwiLi9kaXN0L2NyYXNoLm1wM1wiKTtcblxuICAgIHRoaXMubG9vcCA9IHRoaXMubG9vcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0SGlnaFNjb3JlID0gdGhpcy5zZXRIaWdoU2NvcmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMua2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNhckRvd24gPSB0aGlzLmNhckRvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwID0gdGhpcy51cC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZG93biA9IHRoaXMuZG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmlnaHQgPSB0aGlzLnJpZ2h0LmJpbmQodGhpcyk7XG5cbiAgfVxuXG4gIHJlc2V0KCl7XG4gICAgdGhpcy5yZXN0YXJ0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0aGlzLmNhci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgdGhpcy5jYXIuc3R5bGUudG9wID0gXCI4MCVcIjtcbiAgICB0aGlzLmNhci5zdHlsZS5sZWZ0ID0gXCIyMCVcIjtcbiAgICB0aGlzLnNjb3JlQ291bnRlciA9IDA7XG4gICAgdGhpcy5wb2ludFNwZWVkID0gMTtcbiAgICB0aGlzLnNwZWVkID0gNDtcbiAgICB0aGlzLmxpbmVTcGVlZCA9IDU7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuaGFuZGxpbmcgPSA0O1xuICAgIHRoaXMuY2FyMS5zdHlsZS50b3AgPSBcIi04MHB4XCI7XG4gICAgdGhpcy5jYXIyLnN0eWxlLnRvcCA9IFwiLTI1MHB4XCI7XG4gICAgdGhpcy5jYXIzLnN0eWxlLnRvcCA9IFwiLTQ1MHB4XCI7XG4gICAgdGhpcy5jYXI0LnN0eWxlLnRvcCA9IFwiLTY1MHB4XCI7XG4gICAgdGhpcy5jYXIxLnN0eWxlLmRpc3BsYXkgPSBcIlwiXG4gICAgdGhpcy5jYXIyLnN0eWxlLmRpc3BsYXkgPSBcIlwiXG4gICAgdGhpcy5jYXIzLnN0eWxlLmRpc3BsYXkgPSBcIlwiXG4gICAgdGhpcy5jYXI0LnN0eWxlLmRpc3BsYXkgPSBcIlwiXG4gICAgdGhpcy5zY29yZS5pbm5lclRleHQgPSBcIjBcIjtcbiAgICBjbGVhckludGVydmFsKHRoaXMuYmxpbmtFZmZlY3QpO1xuXG4gIH1cblxuICB0b2dnbGVQYXVzZSgpe1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVJpZ2h0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVMZWZ0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVVcCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlRG93bik7XG4gICAgaWYgKHRoaXMucGF1c2Upe1xuICAgICAgdGhpcy5wYXVzZSA9IGZhbHNlO1xuICAgICAgdGhpcy5wYXVzZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhdXNlID0gdHJ1ZTsgXG4gICAgICB0aGlzLnBhdXNlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9ICBcblxuICB9XG5cbiAgbG9vcCgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNvbGxpc2lvbih0aGlzLmNhciwgdGhpcy5jYXIxKSB8fFxuICAgICAgdGhpcy5jb2xsaXNpb24odGhpcy5jYXIsIHRoaXMuY2FyMikgfHxcbiAgICAgIHRoaXMuY29sbGlzaW9uKHRoaXMuY2FyLCB0aGlzLmNhcjMpIHx8XG4gICAgICB0aGlzLmNvbGxpc2lvbih0aGlzLmNhciwgdGhpcy5jYXI0KVxuICAgICkge1xuICAgICAgdGhpcy5jcmFzaC5wbGF5KCk7XG4gICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9zdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2NvcmVDb3VudGVyKys7XG5cbiAgICBpZiAodGhpcy5zY29yZUNvdW50ZXIgJSAyMCA9PSAwKSB7XG4gICAgICBzY29yZS5pbm5lclRleHQgPSBwYXJzZUludChzY29yZS5pbm5lclRleHQpICsgdGhpcy5wb2ludFNwZWVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5zY29yZUNvdW50ZXIgJSA1MDAgPT0gMCAmJiB0aGlzLnNwZWVkIDw9IDE1KSB7XG4gICAgICB0aGlzLnNwZWVkKys7XG4gICAgICB0aGlzLmxpbmVTcGVlZCsrO1xuICAgICAgdGhpcy5wb2ludFNwZWVkKys7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2NvcmVDb3VudGVyICUgMzAwMCA9PSAwICYmIHRoaXMuc3BlZWQgPiAxNSkge1xuICAgICAgdGhpcy5zcGVlZCsrO1xuICAgICAgdGhpcy5saW5lU3BlZWQrKztcbiAgICAgIHRoaXMucG9pbnRTcGVlZCsrO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5zY29yZUNvdW50ZXIgJSAxMjAwID09IDAgJiYgdGhpcy5oYW5kbGluZyA8PSAxNSkge1xuICAgICAgdGhpcy5oYW5kbGluZysrO1xuICAgIH1cblxuICAgIHRoaXMuY2FyRG93bih0aGlzLmNhcjEpO1xuICAgIHRoaXMuY2FyRG93bih0aGlzLmNhcjIpO1xuICAgIHRoaXMuY2FyRG93bih0aGlzLmNhcjMpO1xuICAgIHRoaXMuY2FyRG93bih0aGlzLmNhcjQpO1xuXG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmUxKTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTIpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lMyk7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmU0KTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTUpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lNik7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmU3KTtcblxuICAgIGlmICghdGhpcy5wYXVzZSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gIH1cblxuICBjYXJEb3duKGNhcikge1xuICAgIGxldCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNhcikudG9wKTtcbiAgICBpZiAocG9zaXRpb24gPiB0aGlzLmdhbWVDb250YWluZXJIZWlnaHQpIHtcbiAgICAgIHBvc2l0aW9uID0gLTIwMDtcbiAgICAgIGNvbnN0IHBvc2l0aW9uTGVmdCA9IHBhcnNlSW50KFxuICAgICAgICBNYXRoLnJhbmRvbSgpICogKHRoaXMuZ2FtZUNvbnRhaW5lcldpZHRoIC0gdGhpcy5jYXJXaWR0aCAtIDEwKVxuICAgICAgKTtcbiAgICAgIGNhci5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb25MZWZ0fXB4YDtcbiAgICAgIGNhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICBcInJnYihcIiArXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgK1xuICAgICAgICBcIixcIiArXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgK1xuICAgICAgICBcIixcIiArXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgK1xuICAgICAgICBcIilcIjtcbiAgICB9XG4gICAgY2FyLnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uICsgdGhpcy5zcGVlZH1weGA7XG4gIH1cblxuICBsaW5lRG93bihsaW5lKSB7XG4gICAgbGV0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUobGluZSkudG9wKTtcbiAgICBpZiAocG9zaXRpb24gPiB0aGlzLmdhbWVDb250YWluZXJIZWlnaHQpIHtcbiAgICAgIHBvc2l0aW9uID0gLTMwMDtcbiAgICB9XG4gICAgbGluZS5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbiArIHRoaXMubGluZVNwZWVkfXB4YDtcbiAgfVxuXG4gIGNvbGxpc2lvbihwbGF5ZXJDYXIsIG5wY0Nhcikge1xuICAgIGNvbnN0IHBsYXllcnNUb3BMZWZ0ID0gcGxheWVyQ2FyLm9mZnNldExlZnQ7XG4gICAgY29uc3QgeTEgPSBwbGF5ZXJDYXIub2Zmc2V0VG9wO1xuICAgIGNvbnN0IGgxID0gcGxheWVyQ2FyLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB3MSA9IHBsYXllckNhci5vZmZzZXRXaWR0aDtcblxuICAgIGNvbnN0IG5wY1RvcExlZnQgPSBucGNDYXIub2Zmc2V0TGVmdDtcbiAgICBjb25zdCB5MiA9IG5wY0Nhci5vZmZzZXRUb3A7XG4gICAgY29uc3QgaDIgPSBucGNDYXIub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IHcyID0gbnBjQ2FyLm9mZnNldFdpZHRoO1xuXG4gICAgY29uc3QgcGxheWVyc1lSZWFjaCA9IHkxICsgaDEgLSAyO1xuICAgIGNvbnN0IHBsYXllcnNYUmVhY2ggPSBwbGF5ZXJzVG9wTGVmdCArIHcxICsgNTtcbiAgICBjb25zdCBucGNZUmVhY2ggPSB5MiArIGgyIC0gMjtcbiAgICBjb25zdCBucGNYUmVhY2ggPSBucGNUb3BMZWZ0ICsgdzIgKyA1O1xuXG4gICAgaWYgKFxuICAgICAgcGxheWVyc1lSZWFjaCA8IHkyIHx8XG4gICAgICB5MSA+IG5wY1lSZWFjaCB8fFxuICAgICAgcGxheWVyc1hSZWFjaCA8IG5wY1RvcExlZnQgfHxcbiAgICAgIHBsYXllcnNUb3BMZWZ0ID4gbnBjWFJlYWNoXG4gICAgKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuYmxpbmtFZmZlY3QgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgIHBsYXllckNhci5zdHlsZS5kaXNwbGF5ID0gcGxheWVyQ2FyLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIgPyBcIlwiIDogXCJub25lXCI7XG4gICAgICBucGNDYXIuc3R5bGUuZGlzcGxheSA9IG5wY0Nhci5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiID8gXCJcIiA6IFwibm9uZVwiO1xuICAgIH0sIDUwMCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBsb3N0KCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVJpZ2h0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVMZWZ0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVVcCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlRG93bik7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKTtcbiAgICB0aGlzLnJlc3RhcnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHRoaXMuc2V0SGlnaFNjb3JlKCk7XG4gIH1cblxuICBzZXRIaWdoU2NvcmUoKSB7XG4gICAgaWYgKHBhcnNlSW50KHRoaXMudG9wU2NvcmUpIDwgcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpKSB7XG4gICAgICB0aGlzLnRvcFNjb3JlID0gcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoU2NvcmVcIiwgcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpKTtcbiAgICB9XG4gICAgdGhpcy5oaWdoU2NvcmUuaW5uZXJUZXh0ID0gdGhpcy50b3BTY29yZTtcbiAgfVxuXG4gIGtleURvd24oKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlciwgdHJ1ZSk7XG4gIH1cbiAga2V5VXAoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5VXBIYW5kbGVyLCB0cnVlKTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgIXRoaXMucGF1c2UpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgIGlmICghdGhpcy5tb3ZlRG93bikge1xuICAgICAgICAgICAgdGhpcy5tb3ZlRG93biA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRvd24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICBpZiAoIXRoaXMubW92ZVVwKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVVcCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgaWYgKCF0aGlzLm1vdmVMZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVMZWZ0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubGVmdCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgaWYgKCF0aGlzLm1vdmVSaWdodCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlUmlnaHQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yaWdodCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgIHRoaXMudG9nZ2xlUGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIgJiYgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xuICAgIH1cbiAgfVxuICBrZXlVcEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlRG93bik7XG4gICAgICAgICAgdGhpcy5tb3ZlRG93biA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlVXApO1xuICAgICAgICAgIHRoaXMubW92ZVVwID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVMZWZ0KTtcbiAgICAgICAgICB0aGlzLm1vdmVMZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVSaWdodCk7XG4gICAgICAgICAgdGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGVmdCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS5sZWZ0KTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgcG9zaXRpb24gPiA3KSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24gLSB0aGlzLmhhbmRsaW5nfXB4YDtcbiAgICAgIHRoaXMubW92ZUxlZnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sZWZ0KTtcbiAgICB9XG4gIH1cblxuICByaWdodCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS5sZWZ0KTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgcG9zaXRpb24gPCB0aGlzLmdhbWVDb250YWluZXJXaWR0aCAtIHRoaXMuY2FyV2lkdGggLSA3KSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24gKyB0aGlzLmhhbmRsaW5nfXB4YDtcbiAgICAgIHRoaXMubW92ZVJpZ2h0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIHVwKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLnRvcCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIHBvc2l0aW9uID4gMjApIHtcbiAgICAgIHRoaXMuc2NvcmUuaW5uZXJUZXh0ID0gYCR7cGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpICsgMX1gO1xuICAgICAgdGhpcy5jYXIuc3R5bGUudG9wID0gYCR7cG9zaXRpb24gLSAzfXB4YDtcbiAgICAgIHRoaXMubW92ZVVwID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXApO1xuICAgIH1cbiAgfVxuXG4gIGRvd24oKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcikudG9wKTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgcG9zaXRpb24gPCB0aGlzLmdhbWVDb250YWluZXJIZWlnaHQgLSB0aGlzLmNhckhlaWdodCAtIDIpIHtcbiAgICAgIC8vIHRoaXMuc2NvcmUuaW5uZXJUZXh0ID0gYCR7cGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpIC0gMX1gO1xuICAgICAgdGhpcy5jYXIuc3R5bGUudG9wID0gYCR7cG9zaXRpb24gKyAzfXB4YDtcbiAgICAgIHRoaXMubW92ZURvd24gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kb3duKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCJcbmltcG9ydCB7IHRvZ2dsZVBsYXkgfSBmcm9tIFwiLi9tdXNpY1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCB0b2dnbGVTb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXVzaWNcIik7XG4gIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnRcIik7XG4gIGNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlcIik7XG4gIGNvbnN0IHN0YXJ0R2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtZ2FtZS1jb250YWluZXJcIilcbiAgbGV0IGdhbWU7XG4gIC8vIGRlYnVnZ2VyXG4gIHN0YXJ0R2FtZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHN0YXJ0R2FtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWUubG9vcCk7XG4gICAgZ2FtZS5rZXlVcCgpO1xuICAgIGdhbWUua2V5RG93bigpO1xuICB9XG5cbiAgdG9nZ2xlU291bmQub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtdm9sdW1lLW11dGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImZhLXZvbHVtZS1vZmZcIik7XG4gICAgdG9nZ2xlUGxheSgpO1xuICB9O1xuICByZXN0YXJ0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgIGdhbWUucmVzZXQoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZS5sb29wKTtcbiAgfTtcbiAgcGxheUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICBnYW1lLnRvZ2dsZVBhdXNlKCk7XG4gIH1cblxuICBcblxuICBcblxufSk7XG5cblxuXG4iLCJjb25zdCBiYWNrZ3JvdW5kTXVzaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmQtbXVzaWNcIik7XG5cbmxldCBpc1BsYXlpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcbiAgZGVidWdnZXJcbiAgaWYgKGlzUGxheWluZykge1xuICAgIGJhY2tncm91bmRNdXNpYy5wYXVzZSgpXG4gIH0gZWxzZSB7XG4gICAgYmFja2dyb3VuZE11c2ljLnBsYXkoKTtcbiAgfVxufTtcblxuYmFja2dyb3VuZE11c2ljLm9ucGxheWluZyA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWdnZXJcbiAgaXNQbGF5aW5nID0gdHJ1ZTtcbn07XG5iYWNrZ3JvdW5kTXVzaWMub25wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgaXNQbGF5aW5nID0gZmFsc2U7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0geyB0b2dnbGVQbGF5IH1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==