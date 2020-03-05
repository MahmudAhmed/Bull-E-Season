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
    debugger;
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

      if (this.scoreCounter % 700 == 0) {
        this.speed++;
        this.lineSpeed++;
        this.pointSpeed++;
      }

      if (this.scoreCounter % 1200 == 0 && this.handling < 25) {
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

  startGame.onclick = function () {
    startGame.style.display = "none";
    var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tdXNpYy5qcyJdLCJuYW1lcyI6WyJHYW1lIiwiY2FyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJnYW1lQ29udGFpbmVyIiwiZ2FtZUNvbnRhaW5lcldpZHRoIiwicGFyc2VJbnQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwid2lkdGgiLCJnYW1lQ29udGFpbmVySGVpZ2h0IiwiaGVpZ2h0IiwiY2FyV2lkdGgiLCJjYXJIZWlnaHQiLCJyZXN0YXJ0Q29udGFpbmVyIiwicGF1c2VDb250YWluZXIiLCJzY29yZSIsImhpZ2hTY29yZSIsInRvcFNjb3JlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImlubmVyVGV4dCIsInNjb3JlQ291bnRlciIsInBvaW50U3BlZWQiLCJzcGVlZCIsImxpbmVTcGVlZCIsInBhdXNlIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJtb3ZlVXAiLCJtb3ZlRG93biIsImdhbWVPdmVyIiwiaGFuZGxpbmciLCJjYXIxIiwiY2FyMiIsImNhcjMiLCJjYXI0IiwibGluZTEiLCJsaW5lMiIsImxpbmUzIiwibGluZTQiLCJsaW5lNSIsImxpbmU2IiwibGluZTciLCJjcmFzaCIsIkF1ZGlvIiwibG9vcCIsImJpbmQiLCJzZXRIaWdoU2NvcmUiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImNhckRvd24iLCJ1cCIsImRvd24iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJjbGVhckludGVydmFsIiwiYmxpbmtFZmZlY3QiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvbGxpc2lvbiIsInBsYXkiLCJsb3N0IiwibGluZURvd24iLCJwb3NpdGlvbiIsInBvc2l0aW9uTGVmdCIsIk1hdGgiLCJyYW5kb20iLCJiYWNrZ3JvdW5kQ29sb3IiLCJmbG9vciIsImxpbmUiLCJwbGF5ZXJDYXIiLCJucGNDYXIiLCJwbGF5ZXJzVG9wTGVmdCIsIm9mZnNldExlZnQiLCJ5MSIsIm9mZnNldFRvcCIsImgxIiwib2Zmc2V0SGVpZ2h0IiwidzEiLCJvZmZzZXRXaWR0aCIsIm5wY1RvcExlZnQiLCJ5MiIsImgyIiwidzIiLCJwbGF5ZXJzWVJlYWNoIiwicGxheWVyc1hSZWFjaCIsIm5wY1lSZWFjaCIsIm5wY1hSZWFjaCIsInNldEludGVydmFsIiwic2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwia2V5Q29kZSIsInRvZ2dsZVBhdXNlIiwicmVzZXQiLCJ0b2dnbGVTb3VuZCIsInJlc3RhcnRCdG4iLCJwbGF5QnRuIiwic3RhcnRHYW1lIiwib25jbGljayIsImdhbWUiLCJrZXlVcCIsImtleURvd24iLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlUGxheSIsImJhY2tncm91bmRNdXNpYyIsImlzUGxheWluZyIsIm9ucGxheWluZyIsIm9ucGF1c2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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R0FBaUI7QUFBRU4sWUFBVSxFQUFWQTtBQUFGLENBQWpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci1jYXJcIik7XG4gICAgdGhpcy5jYXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgZGVidWdnZXJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpbmVcIikuZm9yRWFjaCggZWwgPT4gZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIiApO1xuICAgIHRoaXMuZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jb250YWluZXJcIik7XG4gICAgdGhpcy5nYW1lQ29udGFpbmVyV2lkdGggPSBwYXJzZUludChcbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZ2FtZUNvbnRhaW5lcikud2lkdGhcbiAgICApO1xuICAgIHRoaXMuZ2FtZUNvbnRhaW5lckhlaWdodCA9IHBhcnNlSW50KFxuICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5nYW1lQ29udGFpbmVyKS5oZWlnaHRcbiAgICApO1xuICAgIHRoaXMuY2FyV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcikud2lkdGgpO1xuICAgIHRoaXMuY2FySGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLmhlaWdodCk7XG4gICAgdGhpcy5yZXN0YXJ0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXJ0LWNvbnRhaW5lclwiKTtcbiAgICB0aGlzLnBhdXNlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXVzZS1jb250YWluZXJcIik7XG4gICAgdGhpcy5zY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7XG4gICAgdGhpcy5oaWdoU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2gtc2NvcmVcIik7XG4gICAgdGhpcy50b3BTY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaFNjb3JlXCIpIHx8IDA7XG4gICAgdGhpcy5oaWdoU2NvcmUuaW5uZXJUZXh0ID0gdGhpcy50b3BTY29yZTtcbiAgICB0aGlzLnNjb3JlQ291bnRlciA9IDA7XG4gICAgdGhpcy5wb2ludFNwZWVkID0gMTtcbiAgICB0aGlzLnNwZWVkID0gNDtcbiAgICB0aGlzLmxpbmVTcGVlZCA9IDU7XG4gICAgdGhpcy5wYXVzZSA9IGZhbHNlO1xuICAgIHRoaXMubW92ZVJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZlTGVmdCA9IGZhbHNlO1xuICAgIHRoaXMubW92ZVVwID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZlRG93biA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmhhbmRsaW5nID0gNTtcblxuICAgIHRoaXMuY2FyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyMVwiKTtcbiAgICB0aGlzLmNhcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcjJcIik7XG4gICAgdGhpcy5jYXIzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXIzXCIpO1xuICAgIHRoaXMuY2FyNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyNFwiKTtcblxuICAgIHRoaXMubGluZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmUxXCIpO1xuICAgIHRoaXMubGluZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmUyXCIpO1xuICAgIHRoaXMubGluZTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmUzXCIpO1xuICAgIHRoaXMubGluZTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmU0XCIpO1xuICAgIHRoaXMubGluZTUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmU1XCIpO1xuICAgIHRoaXMubGluZTYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmU2XCIpO1xuICAgIHRoaXMubGluZTcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmU3XCIpO1xuXG4gICAgdGhpcy5jcmFzaCA9IG5ldyBBdWRpbyhcIi4vZGlzdC9jcmFzaC5tcDNcIik7XG5cbiAgICB0aGlzLmxvb3AgPSB0aGlzLmxvb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldEhpZ2hTY29yZSA9IHRoaXMuc2V0SGlnaFNjb3JlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYXJEb3duID0gdGhpcy5jYXJEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cCA9IHRoaXMudXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRvd24gPSB0aGlzLmRvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJpZ2h0ID0gdGhpcy5yaWdodC5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICByZXNldCgpe1xuICAgIHRoaXMucmVzdGFydENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGhpcy5jYXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHRoaXMuY2FyLnN0eWxlLnRvcCA9IFwiODAlXCI7XG4gICAgdGhpcy5jYXIuc3R5bGUubGVmdCA9IFwiMjAlXCI7XG4gICAgdGhpcy5zY29yZUNvdW50ZXIgPSAwO1xuICAgIHRoaXMucG9pbnRTcGVlZCA9IDE7XG4gICAgdGhpcy5zcGVlZCA9IDQ7XG4gICAgdGhpcy5saW5lU3BlZWQgPSA1O1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmhhbmRsaW5nID0gNTtcbiAgICB0aGlzLmNhcjEuc3R5bGUudG9wID0gXCItODBweFwiO1xuICAgIHRoaXMuY2FyMi5zdHlsZS50b3AgPSBcIi0yNTBweFwiO1xuICAgIHRoaXMuY2FyMy5zdHlsZS50b3AgPSBcIi00NTBweFwiO1xuICAgIHRoaXMuY2FyNC5zdHlsZS50b3AgPSBcIi02NTBweFwiO1xuICAgIHRoaXMuY2FyMS5zdHlsZS5kaXNwbGF5ID0gXCJcIlxuICAgIHRoaXMuY2FyMi5zdHlsZS5kaXNwbGF5ID0gXCJcIlxuICAgIHRoaXMuY2FyMy5zdHlsZS5kaXNwbGF5ID0gXCJcIlxuICAgIHRoaXMuY2FyNC5zdHlsZS5kaXNwbGF5ID0gXCJcIlxuICAgIHRoaXMuc2NvcmUuaW5uZXJUZXh0ID0gXCIwXCI7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmJsaW5rRWZmZWN0KTtcblxuICB9XG5cbiAgdG9nZ2xlUGF1c2UoKXtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVSaWdodCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlTGVmdCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlVXApO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZURvd24pO1xuICAgIGlmICh0aGlzLnBhdXNlKXtcbiAgICAgIHRoaXMucGF1c2UgPSBmYWxzZTtcbiAgICAgIHRoaXMucGF1c2VDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXVzZSA9IHRydWU7IFxuICAgICAgdGhpcy5wYXVzZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfSAgXG5cbiAgfVxuXG4gIGxvb3AoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jb2xsaXNpb24odGhpcy5jYXIsIHRoaXMuY2FyMSkgfHxcbiAgICAgIHRoaXMuY29sbGlzaW9uKHRoaXMuY2FyLCB0aGlzLmNhcjIpIHx8XG4gICAgICB0aGlzLmNvbGxpc2lvbih0aGlzLmNhciwgdGhpcy5jYXIzKSB8fFxuICAgICAgdGhpcy5jb2xsaXNpb24odGhpcy5jYXIsIHRoaXMuY2FyNClcbiAgICApIHtcbiAgICAgIHRoaXMuY3Jhc2gucGxheSgpO1xuICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICB0aGlzLmxvc3QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNjb3JlQ291bnRlcisrO1xuXG4gICAgaWYgKHRoaXMuc2NvcmVDb3VudGVyICUgMjAgPT0gMCkge1xuICAgICAgc2NvcmUuaW5uZXJUZXh0ID0gcGFyc2VJbnQoc2NvcmUuaW5uZXJUZXh0KSArIHRoaXMucG9pbnRTcGVlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2NvcmVDb3VudGVyICUgNzAwID09IDApIHtcbiAgICAgIHRoaXMuc3BlZWQrKztcbiAgICAgIHRoaXMubGluZVNwZWVkKys7XG4gICAgICB0aGlzLnBvaW50U3BlZWQrKztcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuc2NvcmVDb3VudGVyICUgMTIwMCA9PSAwICYmIHRoaXMuaGFuZGxpbmcgPCAyNSkge1xuICAgICAgdGhpcy5oYW5kbGluZysrO1xuICAgIH1cblxuICAgIHRoaXMuY2FyRG93bih0aGlzLmNhcjEpO1xuICAgIHRoaXMuY2FyRG93bih0aGlzLmNhcjIpO1xuICAgIHRoaXMuY2FyRG93bih0aGlzLmNhcjMpO1xuICAgIHRoaXMuY2FyRG93bih0aGlzLmNhcjQpO1xuXG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmUxKTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTIpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lMyk7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmU0KTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTUpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lNik7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmU3KTtcblxuICAgIGlmICghdGhpcy5wYXVzZSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gIH1cblxuICBjYXJEb3duKGNhcikge1xuICAgIGxldCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNhcikudG9wKTtcbiAgICBpZiAocG9zaXRpb24gPiB0aGlzLmdhbWVDb250YWluZXJIZWlnaHQpIHtcbiAgICAgIHBvc2l0aW9uID0gLTIwMDtcbiAgICAgIGNvbnN0IHBvc2l0aW9uTGVmdCA9IHBhcnNlSW50KFxuICAgICAgICBNYXRoLnJhbmRvbSgpICogKHRoaXMuZ2FtZUNvbnRhaW5lcldpZHRoIC0gdGhpcy5jYXJXaWR0aCAtIDEwKVxuICAgICAgKTtcbiAgICAgIGNhci5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb25MZWZ0fXB4YDtcbiAgICAgIGNhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICBcInJnYihcIiArXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgK1xuICAgICAgICBcIixcIiArXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgK1xuICAgICAgICBcIixcIiArXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgK1xuICAgICAgICBcIilcIjtcbiAgICB9XG4gICAgY2FyLnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uICsgdGhpcy5zcGVlZH1weGA7XG4gIH1cblxuICBsaW5lRG93bihsaW5lKSB7XG4gICAgbGV0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUobGluZSkudG9wKTtcbiAgICBpZiAocG9zaXRpb24gPiB0aGlzLmdhbWVDb250YWluZXJIZWlnaHQpIHtcbiAgICAgIHBvc2l0aW9uID0gLTMwMDtcbiAgICB9XG4gICAgbGluZS5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbiArIHRoaXMubGluZVNwZWVkfXB4YDtcbiAgfVxuXG4gIGNvbGxpc2lvbihwbGF5ZXJDYXIsIG5wY0Nhcikge1xuICAgIGNvbnN0IHBsYXllcnNUb3BMZWZ0ID0gcGxheWVyQ2FyLm9mZnNldExlZnQ7XG4gICAgY29uc3QgeTEgPSBwbGF5ZXJDYXIub2Zmc2V0VG9wO1xuICAgIGNvbnN0IGgxID0gcGxheWVyQ2FyLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB3MSA9IHBsYXllckNhci5vZmZzZXRXaWR0aDtcblxuICAgIGNvbnN0IG5wY1RvcExlZnQgPSBucGNDYXIub2Zmc2V0TGVmdDtcbiAgICBjb25zdCB5MiA9IG5wY0Nhci5vZmZzZXRUb3A7XG4gICAgY29uc3QgaDIgPSBucGNDYXIub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IHcyID0gbnBjQ2FyLm9mZnNldFdpZHRoO1xuXG4gICAgY29uc3QgcGxheWVyc1lSZWFjaCA9IHkxICsgaDEgLSAyO1xuICAgIGNvbnN0IHBsYXllcnNYUmVhY2ggPSBwbGF5ZXJzVG9wTGVmdCArIHcxICsgNTtcbiAgICBjb25zdCBucGNZUmVhY2ggPSB5MiArIGgyIC0gMjtcbiAgICBjb25zdCBucGNYUmVhY2ggPSBucGNUb3BMZWZ0ICsgdzIgKyA1O1xuXG4gICAgaWYgKFxuICAgICAgcGxheWVyc1lSZWFjaCA8IHkyIHx8XG4gICAgICB5MSA+IG5wY1lSZWFjaCB8fFxuICAgICAgcGxheWVyc1hSZWFjaCA8IG5wY1RvcExlZnQgfHxcbiAgICAgIHBsYXllcnNUb3BMZWZ0ID4gbnBjWFJlYWNoXG4gICAgKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuYmxpbmtFZmZlY3QgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgIHBsYXllckNhci5zdHlsZS5kaXNwbGF5ID0gcGxheWVyQ2FyLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIgPyBcIlwiIDogXCJub25lXCI7XG4gICAgICBucGNDYXIuc3R5bGUuZGlzcGxheSA9IG5wY0Nhci5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiID8gXCJcIiA6IFwibm9uZVwiO1xuICAgIH0sIDUwMCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBsb3N0KCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVJpZ2h0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVMZWZ0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVVcCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlRG93bik7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKTtcbiAgICB0aGlzLnJlc3RhcnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHRoaXMuc2V0SGlnaFNjb3JlKCk7XG4gIH1cblxuICBzZXRIaWdoU2NvcmUoKSB7XG4gICAgaWYgKHBhcnNlSW50KHRoaXMudG9wU2NvcmUpIDwgcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpKSB7XG4gICAgICB0aGlzLnRvcFNjb3JlID0gcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoU2NvcmVcIiwgcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpKTtcbiAgICB9XG4gICAgdGhpcy5oaWdoU2NvcmUuaW5uZXJUZXh0ID0gdGhpcy50b3BTY29yZTtcbiAgfVxuXG4gIGtleURvd24oKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlciwgdHJ1ZSk7XG4gIH1cbiAga2V5VXAoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5VXBIYW5kbGVyLCB0cnVlKTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkZWJ1Z2dlclxuICAgIGlmICghdGhpcy5nYW1lT3ZlciAmJiAhdGhpcy5wYXVzZSkge1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgaWYgKCF0aGlzLm1vdmVEb3duKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVEb3duID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZG93bik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgIGlmICghdGhpcy5tb3ZlVXApIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVVwID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICBpZiAoIXRoaXMubW92ZUxlZnQpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZUxlZnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sZWZ0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICBpZiAoIXRoaXMubW92ZVJpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVSaWdodCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJpZ2h0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGhpcy5nYW1lT3ZlciAmJiBldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgdGhpcy50b2dnbGVQYXVzZSgpO1xuICAgIH1cbiAgICBkZWJ1Z2dlclxuICAgIGlmICh0aGlzLmdhbWVPdmVyICYmIGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKTtcbiAgICB9XG4gIH1cbiAga2V5VXBIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZURvd24pO1xuICAgICAgICAgIHRoaXMubW92ZURvd24gPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVVwKTtcbiAgICAgICAgICB0aGlzLm1vdmVVcCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlTGVmdCk7XG4gICAgICAgICAgdGhpcy5tb3ZlTGVmdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlUmlnaHQpO1xuICAgICAgICAgIHRoaXMubW92ZVJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxlZnQoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcikubGVmdCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIHBvc2l0aW9uID4gNykge1xuICAgICAgdGhpcy5jYXIuc3R5bGUubGVmdCA9IGAke3Bvc2l0aW9uIC0gdGhpcy5oYW5kbGluZ31weGA7XG4gICAgICB0aGlzLm1vdmVMZWZ0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubGVmdCk7XG4gICAgfVxuICB9XG5cbiAgcmlnaHQoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcikubGVmdCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIHBvc2l0aW9uIDwgdGhpcy5nYW1lQ29udGFpbmVyV2lkdGggLSB0aGlzLmNhcldpZHRoIC0gNykge1xuICAgICAgdGhpcy5jYXIuc3R5bGUubGVmdCA9IGAke3Bvc2l0aW9uICsgdGhpcy5oYW5kbGluZ31weGA7XG4gICAgICB0aGlzLm1vdmVSaWdodCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJpZ2h0KTtcbiAgICB9XG4gIH1cblxuICB1cCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS50b3ApO1xuICAgIGlmICghdGhpcy5nYW1lT3ZlciAmJiBwb3NpdGlvbiA+IDIwKSB7XG4gICAgICB0aGlzLnNjb3JlLmlubmVyVGV4dCA9IGAke3BhcnNlSW50KHRoaXMuc2NvcmUuaW5uZXJUZXh0KSArIDF9YDtcbiAgICAgIHRoaXMuY2FyLnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uIC0gM31weGA7XG4gICAgICB0aGlzLm1vdmVVcCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwKTtcbiAgICB9XG4gIH1cblxuICBkb3duKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLnRvcCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIHBvc2l0aW9uIDwgdGhpcy5nYW1lQ29udGFpbmVySGVpZ2h0IC0gdGhpcy5jYXJIZWlnaHQgLSAyKSB7XG4gICAgICAvLyB0aGlzLnNjb3JlLmlubmVyVGV4dCA9IGAke3BhcnNlSW50KHRoaXMuc2NvcmUuaW5uZXJUZXh0KSAtIDF9YDtcbiAgICAgIHRoaXMuY2FyLnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uICsgM31weGA7XG4gICAgICB0aGlzLm1vdmVEb3duID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZG93bik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiXG5pbXBvcnQgeyB0b2dnbGVQbGF5IH0gZnJvbSBcIi4vbXVzaWNcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgdG9nZ2xlU291bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm11c2ljXCIpO1xuICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXJ0XCIpO1xuICBjb25zdCBwbGF5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5XCIpO1xuICBjb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWdhbWUtY29udGFpbmVyXCIpXG5cbiAgc3RhcnRHYW1lLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgc3RhcnRHYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZS5sb29wKTtcbiAgICBnYW1lLmtleVVwKCk7XG4gICAgZ2FtZS5rZXlEb3duKCk7XG4gIH1cblxuICB0b2dnbGVTb3VuZC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYS12b2x1bWUtbXV0ZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtdm9sdW1lLW9mZlwiKTtcbiAgICB0b2dnbGVQbGF5KCk7XG4gIH07XG4gIHJlc3RhcnRCdG4ub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgZ2FtZS5yZXNldCgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lLmxvb3ApO1xuICB9O1xuICBwbGF5QnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgIGdhbWUudG9nZ2xlUGF1c2UoKTtcbiAgfVxuXG4gIFxuXG4gIFxuXG59KTtcblxuXG5cbiIsImNvbnN0IGJhY2tncm91bmRNdXNpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZC1tdXNpY1wiKTtcblxubGV0IGlzUGxheWluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiB0b2dnbGVQbGF5KCkge1xuICBkZWJ1Z2dlclxuICBpZiAoaXNQbGF5aW5nKSB7XG4gICAgYmFja2dyb3VuZE11c2ljLnBhdXNlKClcbiAgfSBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kTXVzaWMucGxheSgpO1xuICB9XG59O1xuXG5iYWNrZ3JvdW5kTXVzaWMub25wbGF5aW5nID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1Z2dlclxuICBpc1BsYXlpbmcgPSB0cnVlO1xufTtcbmJhY2tncm91bmRNdXNpYy5vbnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICBpc1BsYXlpbmcgPSBmYWxzZTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7IHRvZ2dsZVBsYXkgfVxuXG4iXSwic291cmNlUm9vdCI6IiJ9