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
  function Game(playerCar) {
    _classCallCheck(this, Game);

    this.car = playerCar;
    this.car.style.top = "80%";
    this.car.style.left = "20%";
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

        switch (this.car.id[this.car.id.length - 1]) {
          case "4":
            this.score.innerText = parseInt(this.score.innerText) + 3;

          case "5":
            this.score.innerText = parseInt(this.score.innerText) + 3;

          case "6":
            this.score.innerText = parseInt(this.score.innerText) + 10;
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
        playerCar.style.display = playerCar.style.display == "none" ? "flex" : "none";
        npcCar.style.display = npcCar.style.display == "none" ? "flex" : "none";
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
  var startGame = document.getElementById("start-game");
  var startInstruction = document.getElementById("start-instruction");
  var unlocksAt = document.getElementById("unlocks_at");
  var leftBtn = document.getElementById("left-icon");
  var rightBtn = document.getElementById("right-icon");
  var playableCars = document.querySelectorAll(".playable-car");
  var highScore = document.getElementById("high-score");
  var topScore = localStorage.getItem("highScore") || 0;
  highScore.innerText = topScore;
  var no = new Audio("./dist/no.mp3");
  var i = 0;
  playableCars[i].style.display = "flex";

  rightBtn.onclick = function () {
    unlocksAt.innerText = "";
    playableCars[i].style.display = "";
    if (i === playableCars.length - 1) i = -1;
    i++;

    switch (i) {
      case 3:
        if (topScore >= 2000) {
          document.querySelector(".locked".concat(i + 1)).style.display = "none";
        } else {
          unlocksAt.innerText = "Unlocks at 2000";
        }

        break;

      case 4:
        if (topScore >= 2000) {
          document.querySelector(".locked".concat(i + 1)).style.display = "none";
        } else {
          unlocksAt.innerText = "Unlocks at 2000";
        }

        break;

      case 5:
        if (topScore >= 3000) {
          document.querySelector(".locked".concat(i + 1)).style.display = "none";
        } else {
          unlocksAt.innerText = "Unlocks at 3000";
        }

        break;
    }

    playableCars[i].style.display = "flex";
  };

  leftBtn.onclick = function () {
    unlocksAt.innerText = "";
    playableCars[i].style.display = "";
    if (i === 0) i = playableCars.length;
    i--;

    switch (i) {
      case 3:
        if (topScore >= 2000) {
          document.querySelector(".locked".concat(i + 1)).style.display = "none";
        } else {
          unlocksAt.innerText = "Unlocks at 2000";
        }

        break;

      case 4:
        if (topScore >= 2000) {
          document.querySelector(".locked".concat(i + 1)).style.display = "none";
        } else {
          unlocksAt.innerText = "Unlocks at 2000";
        }

        break;

      case 5:
        if (topScore >= 3000) {
          document.querySelector(".locked".concat(i + 1)).style.display = "none";
        } else {
          unlocksAt.innerText = "Unlocks at 3000";
        }

        break;
    }

    playableCars[i].style.display = "flex";
  };

  var game;

  startGame.onclick = function () {
    if ((i === 3 || i === 4) && topScore < 2000) {
      no.play();
      return;
    }

    if (i === 5 && topScore < 3000) {
      no.play();
      return;
    }

    startGame.style.display = "none";
    startInstruction.style.display = "none";
    leftBtn.style.display = "none";
    rightBtn.style.display = "none";
    playableCars[i].classList.remove("spin");
    game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](playableCars[i]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tdXNpYy5qcyJdLCJuYW1lcyI6WyJHYW1lIiwicGxheWVyQ2FyIiwiY2FyIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwiZGlzcGxheSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImdhbWVDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImdhbWVDb250YWluZXJXaWR0aCIsInBhcnNlSW50Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIndpZHRoIiwiZ2FtZUNvbnRhaW5lckhlaWdodCIsImhlaWdodCIsImNhcldpZHRoIiwiY2FySGVpZ2h0IiwicmVzdGFydENvbnRhaW5lciIsInBhdXNlQ29udGFpbmVyIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJ0b3BTY29yZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbm5lclRleHQiLCJzY29yZUNvdW50ZXIiLCJwb2ludFNwZWVkIiwic3BlZWQiLCJsaW5lU3BlZWQiLCJwYXVzZSIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwibW92ZVVwIiwibW92ZURvd24iLCJnYW1lT3ZlciIsImhhbmRsaW5nIiwiY2FyMSIsImNhcjIiLCJjYXIzIiwiY2FyNCIsImxpbmUxIiwibGluZTIiLCJsaW5lMyIsImxpbmU0IiwibGluZTUiLCJsaW5lNiIsImxpbmU3IiwiY3Jhc2giLCJBdWRpbyIsImxvb3AiLCJiaW5kIiwic2V0SGlnaFNjb3JlIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJjYXJEb3duIiwidXAiLCJkb3duIiwicmlnaHQiLCJjbGVhckludGVydmFsIiwiYmxpbmtFZmZlY3QiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvbGxpc2lvbiIsInBsYXkiLCJsb3N0IiwiaWQiLCJsZW5ndGgiLCJsaW5lRG93biIsInBvc2l0aW9uIiwicG9zaXRpb25MZWZ0IiwiTWF0aCIsInJhbmRvbSIsImJhY2tncm91bmRDb2xvciIsImZsb29yIiwibGluZSIsIm5wY0NhciIsInBsYXllcnNUb3BMZWZ0Iiwib2Zmc2V0TGVmdCIsInkxIiwib2Zmc2V0VG9wIiwiaDEiLCJvZmZzZXRIZWlnaHQiLCJ3MSIsIm9mZnNldFdpZHRoIiwibnBjVG9wTGVmdCIsInkyIiwiaDIiLCJ3MiIsInBsYXllcnNZUmVhY2giLCJwbGF5ZXJzWFJlYWNoIiwibnBjWVJlYWNoIiwibnBjWFJlYWNoIiwic2V0SW50ZXJ2YWwiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJrZXlDb2RlIiwidG9nZ2xlUGF1c2UiLCJyZXNldCIsInRvZ2dsZVNvdW5kIiwicmVzdGFydEJ0biIsInBsYXlCdG4iLCJzdGFydEdhbWUiLCJzdGFydEluc3RydWN0aW9uIiwidW5sb2Nrc0F0IiwibGVmdEJ0biIsInJpZ2h0QnRuIiwicGxheWFibGVDYXJzIiwibm8iLCJpIiwib25jbGljayIsInF1ZXJ5U2VsZWN0b3IiLCJnYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwia2V5VXAiLCJrZXlEb3duIiwidG9nZ2xlIiwidG9nZ2xlUGxheSIsImJhY2tncm91bmRNdXNpYyIsImlzUGxheWluZyIsIm9ucGxheWluZyIsIm9ucGF1c2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGTUEsSTtBQUNKLGdCQUFZQyxTQUFaLEVBQXVCO0FBQUE7O0FBQ3JCLFNBQUtDLEdBQUwsR0FBV0QsU0FBWDtBQUNBLFNBQUtDLEdBQUwsQ0FBU0MsS0FBVCxDQUFlQyxHQUFmLEdBQXFCLEtBQXJCO0FBQ0EsU0FBS0YsR0FBTCxDQUFTQyxLQUFULENBQWVFLElBQWYsR0FBc0IsS0FBdEI7QUFDQSxTQUFLSCxHQUFMLENBQVNDLEtBQVQsQ0FBZUcsT0FBZixHQUF5QixNQUF6QjtBQUNBQyxZQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DQyxPQUFuQyxDQUE0QyxVQUFBQyxFQUFFO0FBQUEsYUFBSUEsRUFBRSxDQUFDUCxLQUFILENBQVNHLE9BQVQsR0FBbUIsT0FBdkI7QUFBQSxLQUE5QztBQUNBLFNBQUtLLGFBQUwsR0FBcUJKLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixnQkFBeEIsQ0FBckI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQkMsUUFBUSxDQUNoQ0MsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixLQUFLTCxhQUE3QixFQUE0Q00sS0FEWixDQUFsQztBQUdBLFNBQUtDLG1CQUFMLEdBQTJCSixRQUFRLENBQ2pDQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLEtBQUtMLGFBQTdCLEVBQTRDUSxNQURYLENBQW5DO0FBR0EsU0FBS0MsUUFBTCxHQUFnQk4sUUFBUSxDQUFDQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLEtBQUtkLEdBQTdCLEVBQWtDZSxLQUFuQyxDQUF4QjtBQUNBLFNBQUtJLFNBQUwsR0FBaUJQLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixLQUFLZCxHQUE3QixFQUFrQ2lCLE1BQW5DLENBQXpCO0FBQ0EsU0FBS0csZ0JBQUwsR0FBd0JmLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixtQkFBeEIsQ0FBeEI7QUFDQSxTQUFLVyxjQUFMLEdBQXNCaEIsUUFBUSxDQUFDSyxjQUFULENBQXdCLGlCQUF4QixDQUF0QjtBQUNBLFNBQUtZLEtBQUwsR0FBYWpCLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixPQUF4QixDQUFiO0FBQ0EsU0FBS2EsU0FBTCxHQUFpQmxCLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLFNBQUtjLFFBQUwsR0FBZ0JDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixLQUFxQyxDQUFyRDtBQUNBLFNBQUtILFNBQUwsQ0FBZUksU0FBZixHQUEyQixLQUFLSCxRQUFoQztBQUNBLFNBQUtJLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEtBQWI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLENBQWhCO0FBRUEsU0FBS0MsSUFBTCxHQUFZbEMsUUFBUSxDQUFDSyxjQUFULENBQXdCLE1BQXhCLENBQVo7QUFDQSxTQUFLOEIsSUFBTCxHQUFZbkMsUUFBUSxDQUFDSyxjQUFULENBQXdCLE1BQXhCLENBQVo7QUFDQSxTQUFLK0IsSUFBTCxHQUFZcEMsUUFBUSxDQUFDSyxjQUFULENBQXdCLE1BQXhCLENBQVo7QUFDQSxTQUFLZ0MsSUFBTCxHQUFZckMsUUFBUSxDQUFDSyxjQUFULENBQXdCLE1BQXhCLENBQVo7QUFFQSxTQUFLaUMsS0FBTCxHQUFhdEMsUUFBUSxDQUFDSyxjQUFULENBQXdCLE9BQXhCLENBQWI7QUFDQSxTQUFLa0MsS0FBTCxHQUFhdkMsUUFBUSxDQUFDSyxjQUFULENBQXdCLE9BQXhCLENBQWI7QUFDQSxTQUFLbUMsS0FBTCxHQUFheEMsUUFBUSxDQUFDSyxjQUFULENBQXdCLE9BQXhCLENBQWI7QUFDQSxTQUFLb0MsS0FBTCxHQUFhekMsUUFBUSxDQUFDSyxjQUFULENBQXdCLE9BQXhCLENBQWI7QUFDQSxTQUFLcUMsS0FBTCxHQUFhMUMsUUFBUSxDQUFDSyxjQUFULENBQXdCLE9BQXhCLENBQWI7QUFDQSxTQUFLc0MsS0FBTCxHQUFhM0MsUUFBUSxDQUFDSyxjQUFULENBQXdCLE9BQXhCLENBQWI7QUFDQSxTQUFLdUMsS0FBTCxHQUFhNUMsUUFBUSxDQUFDSyxjQUFULENBQXdCLE9BQXhCLENBQWI7QUFFQSxTQUFLd0MsS0FBTCxHQUFhLElBQUlDLEtBQUosQ0FBVSxrQkFBVixDQUFiO0FBRUEsU0FBS0MsSUFBTCxHQUFZLEtBQUtBLElBQUwsQ0FBVUMsSUFBVixDQUFlLElBQWYsQ0FBWjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQkQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDQSxTQUFLRSxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0JGLElBQXBCLENBQXlCLElBQXpCLENBQXRCO0FBQ0EsU0FBS0csWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCSCxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNBLFNBQUtJLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFKLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZjtBQUNBLFNBQUtLLEVBQUwsR0FBVSxLQUFLQSxFQUFMLENBQVFMLElBQVIsQ0FBYSxJQUFiLENBQVY7QUFDQSxTQUFLTSxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVTixJQUFWLENBQWUsSUFBZixDQUFaO0FBQ0EsU0FBS2xELElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVVrRCxJQUFWLENBQWUsSUFBZixDQUFaO0FBQ0EsU0FBS08sS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV1AsSUFBWCxDQUFnQixJQUFoQixDQUFiO0FBRUQ7Ozs7NEJBRU07QUFDTCxXQUFLakMsZ0JBQUwsQ0FBc0JuQixLQUF0QixDQUE0QkcsT0FBNUIsR0FBc0MsTUFBdEM7QUFDQSxXQUFLSixHQUFMLENBQVNDLEtBQVQsQ0FBZUcsT0FBZixHQUF5QixNQUF6QjtBQUNBLFdBQUtKLEdBQUwsQ0FBU0MsS0FBVCxDQUFlQyxHQUFmLEdBQXFCLEtBQXJCO0FBQ0EsV0FBS0YsR0FBTCxDQUFTQyxLQUFULENBQWVFLElBQWYsR0FBc0IsS0FBdEI7QUFDQSxXQUFLeUIsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFdBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxXQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxXQUFLTSxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFdBQUtDLElBQUwsQ0FBVXRDLEtBQVYsQ0FBZ0JDLEdBQWhCLEdBQXNCLE9BQXRCO0FBQ0EsV0FBS3NDLElBQUwsQ0FBVXZDLEtBQVYsQ0FBZ0JDLEdBQWhCLEdBQXNCLFFBQXRCO0FBQ0EsV0FBS3VDLElBQUwsQ0FBVXhDLEtBQVYsQ0FBZ0JDLEdBQWhCLEdBQXNCLFFBQXRCO0FBQ0EsV0FBS3dDLElBQUwsQ0FBVXpDLEtBQVYsQ0FBZ0JDLEdBQWhCLEdBQXNCLFFBQXRCO0FBQ0EsV0FBS3FDLElBQUwsQ0FBVXRDLEtBQVYsQ0FBZ0JHLE9BQWhCLEdBQTBCLEVBQTFCO0FBQ0EsV0FBS29DLElBQUwsQ0FBVXZDLEtBQVYsQ0FBZ0JHLE9BQWhCLEdBQTBCLEVBQTFCO0FBQ0EsV0FBS3FDLElBQUwsQ0FBVXhDLEtBQVYsQ0FBZ0JHLE9BQWhCLEdBQTBCLEVBQTFCO0FBQ0EsV0FBS3NDLElBQUwsQ0FBVXpDLEtBQVYsQ0FBZ0JHLE9BQWhCLEdBQTBCLEVBQTFCO0FBQ0EsV0FBS2tCLEtBQUwsQ0FBV0ssU0FBWCxHQUF1QixHQUF2QjtBQUNBa0MsbUJBQWEsQ0FBQyxLQUFLQyxXQUFOLENBQWI7QUFFRDs7O2tDQUVZO0FBQ1hDLDBCQUFvQixDQUFDLEtBQUs5QixTQUFOLENBQXBCO0FBQ0E4QiwwQkFBb0IsQ0FBQyxLQUFLN0IsUUFBTixDQUFwQjtBQUNBNkIsMEJBQW9CLENBQUMsS0FBSzVCLE1BQU4sQ0FBcEI7QUFDQTRCLDBCQUFvQixDQUFDLEtBQUszQixRQUFOLENBQXBCOztBQUNBLFVBQUksS0FBS0osS0FBVCxFQUFlO0FBQ2IsYUFBS0EsS0FBTCxHQUFhLEtBQWI7QUFDQSxhQUFLWCxjQUFMLENBQW9CcEIsS0FBcEIsQ0FBMEJHLE9BQTFCLEdBQW9DLE1BQXBDO0FBQ0E0RCw2QkFBcUIsQ0FBQyxLQUFLWixJQUFOLENBQXJCO0FBQ0QsT0FKRCxNQUlPO0FBQ0wsYUFBS3BCLEtBQUwsR0FBYSxJQUFiO0FBQ0EsYUFBS1gsY0FBTCxDQUFvQnBCLEtBQXBCLENBQTBCRyxPQUExQixHQUFvQyxNQUFwQztBQUNEO0FBRUY7OzsyQkFFTTtBQUNMLFVBQ0UsS0FBSzZELFNBQUwsQ0FBZSxLQUFLakUsR0FBcEIsRUFBeUIsS0FBS3VDLElBQTlCLEtBQ0EsS0FBSzBCLFNBQUwsQ0FBZSxLQUFLakUsR0FBcEIsRUFBeUIsS0FBS3dDLElBQTlCLENBREEsSUFFQSxLQUFLeUIsU0FBTCxDQUFlLEtBQUtqRSxHQUFwQixFQUF5QixLQUFLeUMsSUFBOUIsQ0FGQSxJQUdBLEtBQUt3QixTQUFMLENBQWUsS0FBS2pFLEdBQXBCLEVBQXlCLEtBQUswQyxJQUE5QixDQUpGLEVBS0U7QUFDQSxhQUFLUSxLQUFMLENBQVdnQixJQUFYO0FBQ0EsYUFBSzdCLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxhQUFLOEIsSUFBTDtBQUNBO0FBQ0Q7O0FBRUQsV0FBS3ZDLFlBQUw7O0FBRUEsVUFBSSxLQUFLQSxZQUFMLEdBQW9CLEVBQXBCLElBQTBCLENBQTlCLEVBQWlDO0FBQy9CTixhQUFLLENBQUNLLFNBQU4sR0FBa0JmLFFBQVEsQ0FBQ1UsS0FBSyxDQUFDSyxTQUFQLENBQVIsR0FBNEIsS0FBS0UsVUFBbkQ7O0FBQ0EsZ0JBQVEsS0FBSzdCLEdBQUwsQ0FBU29FLEVBQVQsQ0FBWSxLQUFLcEUsR0FBTCxDQUFTb0UsRUFBVCxDQUFZQyxNQUFaLEdBQXFCLENBQWpDLENBQVI7QUFDRSxlQUFLLEdBQUw7QUFDRSxpQkFBSy9DLEtBQUwsQ0FBV0ssU0FBWCxHQUF1QmYsUUFBUSxDQUFDLEtBQUtVLEtBQUwsQ0FBV0ssU0FBWixDQUFSLEdBQWlDLENBQXhEOztBQUNGLGVBQUssR0FBTDtBQUNFLGlCQUFLTCxLQUFMLENBQVdLLFNBQVgsR0FBdUJmLFFBQVEsQ0FBQyxLQUFLVSxLQUFMLENBQVdLLFNBQVosQ0FBUixHQUFpQyxDQUF4RDs7QUFDRixlQUFLLEdBQUw7QUFDRSxpQkFBS0wsS0FBTCxDQUFXSyxTQUFYLEdBQXVCZixRQUFRLENBQUMsS0FBS1UsS0FBTCxDQUFXSyxTQUFaLENBQVIsR0FBaUMsRUFBeEQ7QUFOSjtBQVFEOztBQUNELFVBQUksS0FBS0MsWUFBTCxHQUFvQixHQUFwQixJQUEyQixDQUEzQixJQUFnQyxLQUFLRSxLQUFMLElBQWMsRUFBbEQsRUFBc0Q7QUFDcEQsYUFBS0EsS0FBTDtBQUNBLGFBQUtDLFNBQUw7QUFDQSxhQUFLRixVQUFMO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLRCxZQUFMLEdBQW9CLElBQXBCLElBQTRCLENBQTVCLElBQWlDLEtBQUtFLEtBQUwsR0FBYSxFQUFsRCxFQUFzRDtBQUNwRCxhQUFLQSxLQUFMO0FBQ0EsYUFBS0MsU0FBTDtBQUNBLGFBQUtGLFVBQUw7QUFDRDs7QUFFRCxVQUFJLEtBQUtELFlBQUwsR0FBb0IsSUFBcEIsSUFBNEIsQ0FBNUIsSUFBaUMsS0FBS1UsUUFBTCxJQUFpQixFQUF0RCxFQUEwRDtBQUN4RCxhQUFLQSxRQUFMO0FBQ0Q7O0FBRUQsV0FBS21CLE9BQUwsQ0FBYSxLQUFLbEIsSUFBbEI7QUFDQSxXQUFLa0IsT0FBTCxDQUFhLEtBQUtqQixJQUFsQjtBQUNBLFdBQUtpQixPQUFMLENBQWEsS0FBS2hCLElBQWxCO0FBQ0EsV0FBS2dCLE9BQUwsQ0FBYSxLQUFLZixJQUFsQjtBQUVBLFdBQUs0QixRQUFMLENBQWMsS0FBSzNCLEtBQW5CO0FBQ0EsV0FBSzJCLFFBQUwsQ0FBYyxLQUFLMUIsS0FBbkI7QUFDQSxXQUFLMEIsUUFBTCxDQUFjLEtBQUt6QixLQUFuQjtBQUNBLFdBQUt5QixRQUFMLENBQWMsS0FBS3hCLEtBQW5CO0FBQ0EsV0FBS3dCLFFBQUwsQ0FBYyxLQUFLdkIsS0FBbkI7QUFDQSxXQUFLdUIsUUFBTCxDQUFjLEtBQUt0QixLQUFuQjtBQUNBLFdBQUtzQixRQUFMLENBQWMsS0FBS3JCLEtBQW5CO0FBRUEsVUFBSSxDQUFDLEtBQUtqQixLQUFWLEVBQWlCZ0MscUJBQXFCLENBQUMsS0FBS1osSUFBTixDQUFyQjtBQUNsQjs7OzRCQUVPcEQsRyxFQUFLO0FBQ1gsVUFBSXVFLFFBQVEsR0FBRzNELFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QmQsR0FBeEIsRUFBNkJFLEdBQTlCLENBQXZCOztBQUNBLFVBQUlxRSxRQUFRLEdBQUcsS0FBS3ZELG1CQUFwQixFQUF5QztBQUN2Q3VELGdCQUFRLEdBQUcsQ0FBQyxHQUFaO0FBQ0EsWUFBTUMsWUFBWSxHQUFHNUQsUUFBUSxDQUMzQjZELElBQUksQ0FBQ0MsTUFBTCxNQUFpQixLQUFLL0Qsa0JBQUwsR0FBMEIsS0FBS08sUUFBL0IsR0FBMEMsRUFBM0QsQ0FEMkIsQ0FBN0I7QUFHQWxCLFdBQUcsQ0FBQ0MsS0FBSixDQUFVRSxJQUFWLGFBQW9CcUUsWUFBcEI7QUFDQXhFLFdBQUcsQ0FBQ0MsS0FBSixDQUFVMEUsZUFBVixHQUNFLFNBQ0FGLElBQUksQ0FBQ0csS0FBTCxDQUFXSCxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBM0IsQ0FEQSxHQUVBLEdBRkEsR0FHQUQsSUFBSSxDQUFDRyxLQUFMLENBQVdILElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUEzQixDQUhBLEdBSUEsR0FKQSxHQUtBRCxJQUFJLENBQUNHLEtBQUwsQ0FBV0gsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQTNCLENBTEEsR0FNQSxHQVBGO0FBUUQ7O0FBQ0QxRSxTQUFHLENBQUNDLEtBQUosQ0FBVUMsR0FBVixhQUFtQnFFLFFBQVEsR0FBRyxLQUFLekMsS0FBbkM7QUFDRDs7OzZCQUVRK0MsSSxFQUFNO0FBQ2IsVUFBSU4sUUFBUSxHQUFHM0QsUUFBUSxDQUFDQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCK0QsSUFBeEIsRUFBOEIzRSxHQUEvQixDQUF2Qjs7QUFDQSxVQUFJcUUsUUFBUSxHQUFHLEtBQUt2RCxtQkFBcEIsRUFBeUM7QUFDdkN1RCxnQkFBUSxHQUFHLENBQUMsR0FBWjtBQUNEOztBQUNETSxVQUFJLENBQUM1RSxLQUFMLENBQVdDLEdBQVgsYUFBb0JxRSxRQUFRLEdBQUcsS0FBS3hDLFNBQXBDO0FBQ0Q7Ozs4QkFFU2hDLFMsRUFBVytFLE0sRUFBUTtBQUMzQixVQUFNQyxjQUFjLEdBQUdoRixTQUFTLENBQUNpRixVQUFqQztBQUNBLFVBQU1DLEVBQUUsR0FBR2xGLFNBQVMsQ0FBQ21GLFNBQXJCO0FBQ0EsVUFBTUMsRUFBRSxHQUFHcEYsU0FBUyxDQUFDcUYsWUFBckI7QUFDQSxVQUFNQyxFQUFFLEdBQUd0RixTQUFTLENBQUN1RixXQUFyQjtBQUVBLFVBQU1DLFVBQVUsR0FBR1QsTUFBTSxDQUFDRSxVQUExQjtBQUNBLFVBQU1RLEVBQUUsR0FBR1YsTUFBTSxDQUFDSSxTQUFsQjtBQUNBLFVBQU1PLEVBQUUsR0FBR1gsTUFBTSxDQUFDTSxZQUFsQjtBQUNBLFVBQU1NLEVBQUUsR0FBR1osTUFBTSxDQUFDUSxXQUFsQjtBQUVBLFVBQU1LLGFBQWEsR0FBR1YsRUFBRSxHQUFHRSxFQUFMLEdBQVUsQ0FBaEM7QUFDQSxVQUFNUyxhQUFhLEdBQUdiLGNBQWMsR0FBR00sRUFBakIsR0FBc0IsQ0FBNUM7QUFDQSxVQUFNUSxTQUFTLEdBQUdMLEVBQUUsR0FBR0MsRUFBTCxHQUFVLENBQTVCO0FBQ0EsVUFBTUssU0FBUyxHQUFHUCxVQUFVLEdBQUdHLEVBQWIsR0FBa0IsQ0FBcEM7QUFFQSxVQUNFQyxhQUFhLEdBQUdILEVBQWhCLElBQ0FQLEVBQUUsR0FBR1ksU0FETCxJQUVBRCxhQUFhLEdBQUdMLFVBRmhCLElBR0FSLGNBQWMsR0FBR2UsU0FKbkIsRUFNRSxPQUFPLEtBQVA7QUFDRixXQUFLaEMsV0FBTCxHQUFtQmlDLFdBQVcsQ0FBQyxZQUFXO0FBQ3hDaEcsaUJBQVMsQ0FBQ0UsS0FBVixDQUFnQkcsT0FBaEIsR0FBMEJMLFNBQVMsQ0FBQ0UsS0FBVixDQUFnQkcsT0FBaEIsSUFBMkIsTUFBM0IsR0FBb0MsTUFBcEMsR0FBNkMsTUFBdkU7QUFDQTBFLGNBQU0sQ0FBQzdFLEtBQVAsQ0FBYUcsT0FBYixHQUF1QjBFLE1BQU0sQ0FBQzdFLEtBQVAsQ0FBYUcsT0FBYixJQUF3QixNQUF4QixHQUFpQyxNQUFqQyxHQUEwQyxNQUFqRTtBQUNELE9BSDZCLEVBRzNCLEdBSDJCLENBQTlCO0FBSUEsYUFBTyxJQUFQO0FBQ0Q7OzsyQkFFTTtBQUNMMkQsMEJBQW9CLENBQUMsS0FBSzlCLFNBQU4sQ0FBcEI7QUFDQThCLDBCQUFvQixDQUFDLEtBQUs3QixRQUFOLENBQXBCO0FBQ0E2QiwwQkFBb0IsQ0FBQyxLQUFLNUIsTUFBTixDQUFwQjtBQUNBNEIsMEJBQW9CLENBQUMsS0FBSzNCLFFBQU4sQ0FBcEI7QUFDQTJCLDBCQUFvQixDQUFDLEtBQUtYLElBQU4sQ0FBcEI7QUFDQSxXQUFLaEMsZ0JBQUwsQ0FBc0JuQixLQUF0QixDQUE0QkcsT0FBNUIsR0FBc0MsTUFBdEM7QUFDQSxXQUFLa0QsWUFBTDtBQUNEOzs7bUNBRWM7QUFDYixVQUFJMUMsUUFBUSxDQUFDLEtBQUtZLFFBQU4sQ0FBUixHQUEwQlosUUFBUSxDQUFDLEtBQUtVLEtBQUwsQ0FBV0ssU0FBWixDQUF0QyxFQUE4RDtBQUM1RCxhQUFLSCxRQUFMLEdBQWdCWixRQUFRLENBQUMsS0FBS1UsS0FBTCxDQUFXSyxTQUFaLENBQXhCO0FBQ0FGLG9CQUFZLENBQUN1RSxPQUFiLENBQXFCLFdBQXJCLEVBQWtDcEYsUUFBUSxDQUFDLEtBQUtVLEtBQUwsQ0FBV0ssU0FBWixDQUExQztBQUNEOztBQUNELFdBQUtKLFNBQUwsQ0FBZUksU0FBZixHQUEyQixLQUFLSCxRQUFoQztBQUNEOzs7OEJBRVM7QUFDUm5CLGNBQVEsQ0FBQzRGLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLEtBQUsxQyxjQUExQyxFQUEwRCxJQUExRDtBQUNEOzs7NEJBQ087QUFDTmxELGNBQVEsQ0FBQzRGLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUt6QyxZQUF4QyxFQUFzRCxJQUF0RDtBQUNEOzs7bUNBRWMwQyxLLEVBQU87QUFDcEJBLFdBQUssQ0FBQ0MsY0FBTjs7QUFDQSxVQUFJLENBQUMsS0FBSzlELFFBQU4sSUFBa0IsQ0FBQyxLQUFLTCxLQUE1QixFQUFtQztBQUNqQyxnQkFBUWtFLEtBQUssQ0FBQ0UsT0FBZDtBQUNFLGVBQUssRUFBTDtBQUNFLGdCQUFJLENBQUMsS0FBS2hFLFFBQVYsRUFBb0I7QUFDbEIsbUJBQUtBLFFBQUwsR0FBZ0I0QixxQkFBcUIsQ0FBQyxLQUFLTCxJQUFOLENBQXJDO0FBQ0Q7O0FBQ0Q7O0FBQ0YsZUFBSyxFQUFMO0FBQ0UsZ0JBQUksQ0FBQyxLQUFLeEIsTUFBVixFQUFrQjtBQUNoQixtQkFBS0EsTUFBTCxHQUFjNkIscUJBQXFCLENBQUMsS0FBS04sRUFBTixDQUFuQztBQUNEOztBQUNEOztBQUNGLGVBQUssRUFBTDtBQUNFLGdCQUFJLENBQUMsS0FBS3hCLFFBQVYsRUFBb0I7QUFDbEIsbUJBQUtBLFFBQUwsR0FBZ0I4QixxQkFBcUIsQ0FBQyxLQUFLN0QsSUFBTixDQUFyQztBQUNEOztBQUNEOztBQUVGLGVBQUssRUFBTDtBQUNFLGdCQUFJLENBQUMsS0FBSzhCLFNBQVYsRUFBcUI7QUFDbkIsbUJBQUtBLFNBQUwsR0FBaUIrQixxQkFBcUIsQ0FBQyxLQUFLSixLQUFOLENBQXRDO0FBQ0Q7O0FBQ0Q7QUFyQko7QUF1QkQ7O0FBQ0QsVUFBSSxDQUFDLEtBQUt2QixRQUFOLElBQWtCNkQsS0FBSyxDQUFDRSxPQUFOLEtBQWtCLEVBQXhDLEVBQTRDO0FBQzFDLGFBQUtDLFdBQUw7QUFDRDs7QUFDRCxVQUFJLEtBQUtoRSxRQUFMLElBQWlCNkQsS0FBSyxDQUFDRSxPQUFOLEtBQWtCLEVBQXZDLEVBQTJDO0FBQ3pDLGFBQUtFLEtBQUw7QUFDQXRDLDZCQUFxQixDQUFDLEtBQUtaLElBQU4sQ0FBckI7QUFDRDtBQUNGOzs7aUNBQ1k4QyxLLEVBQU87QUFDbEJBLFdBQUssQ0FBQ0MsY0FBTjs7QUFDQSxVQUFJLENBQUMsS0FBSzlELFFBQVYsRUFBb0I7QUFDbEIsZ0JBQVE2RCxLQUFLLENBQUNFLE9BQWQ7QUFDRSxlQUFLLEVBQUw7QUFDRXJDLGdDQUFvQixDQUFDLEtBQUszQixRQUFOLENBQXBCO0FBQ0EsaUJBQUtBLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQTs7QUFFRixlQUFLLEVBQUw7QUFDRTJCLGdDQUFvQixDQUFDLEtBQUs1QixNQUFOLENBQXBCO0FBQ0EsaUJBQUtBLE1BQUwsR0FBYyxLQUFkO0FBQ0E7O0FBRUYsZUFBSyxFQUFMO0FBQ0U0QixnQ0FBb0IsQ0FBQyxLQUFLN0IsUUFBTixDQUFwQjtBQUNBLGlCQUFLQSxRQUFMLEdBQWdCLEtBQWhCO0FBQ0E7O0FBRUYsZUFBSyxFQUFMO0FBQ0U2QixnQ0FBb0IsQ0FBQyxLQUFLOUIsU0FBTixDQUFwQjtBQUNBLGlCQUFLQSxTQUFMLEdBQWlCLEtBQWpCO0FBQ0E7O0FBRUY7QUFDRTtBQXRCSjtBQXdCRDtBQUNGOzs7MkJBRU07QUFDTCxVQUFNc0MsUUFBUSxHQUFHM0QsUUFBUSxDQUFDQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLEtBQUtkLEdBQTdCLEVBQWtDRyxJQUFuQyxDQUF6Qjs7QUFDQSxVQUFJLENBQUMsS0FBS2tDLFFBQU4sSUFBa0JrQyxRQUFRLEdBQUcsQ0FBakMsRUFBb0M7QUFDbEMsYUFBS3ZFLEdBQUwsQ0FBU0MsS0FBVCxDQUFlRSxJQUFmLGFBQXlCb0UsUUFBUSxHQUFHLEtBQUtqQyxRQUF6QztBQUNBLGFBQUtKLFFBQUwsR0FBZ0I4QixxQkFBcUIsQ0FBQyxLQUFLN0QsSUFBTixDQUFyQztBQUNEO0FBQ0Y7Ozs0QkFFTztBQUNOLFVBQU1vRSxRQUFRLEdBQUczRCxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsS0FBS2QsR0FBN0IsRUFBa0NHLElBQW5DLENBQXpCOztBQUNBLFVBQUksQ0FBQyxLQUFLa0MsUUFBTixJQUFrQmtDLFFBQVEsR0FBRyxLQUFLNUQsa0JBQUwsR0FBMEIsS0FBS08sUUFBL0IsR0FBMEMsQ0FBM0UsRUFBOEU7QUFDNUUsYUFBS2xCLEdBQUwsQ0FBU0MsS0FBVCxDQUFlRSxJQUFmLGFBQXlCb0UsUUFBUSxHQUFHLEtBQUtqQyxRQUF6QztBQUNBLGFBQUtMLFNBQUwsR0FBaUIrQixxQkFBcUIsQ0FBQyxLQUFLSixLQUFOLENBQXRDO0FBQ0Q7QUFDRjs7O3lCQUVJO0FBQ0gsVUFBTVcsUUFBUSxHQUFHM0QsUUFBUSxDQUFDQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLEtBQUtkLEdBQTdCLEVBQWtDRSxHQUFuQyxDQUF6Qjs7QUFDQSxVQUFJLENBQUMsS0FBS21DLFFBQU4sSUFBa0JrQyxRQUFRLEdBQUcsRUFBakMsRUFBcUM7QUFDbkMsYUFBS2pELEtBQUwsQ0FBV0ssU0FBWCxhQUEwQmYsUUFBUSxDQUFDLEtBQUtVLEtBQUwsQ0FBV0ssU0FBWixDQUFSLEdBQWlDLENBQTNEO0FBQ0EsYUFBSzNCLEdBQUwsQ0FBU0MsS0FBVCxDQUFlQyxHQUFmLGFBQXdCcUUsUUFBUSxHQUFHLENBQW5DO0FBQ0EsYUFBS3BDLE1BQUwsR0FBYzZCLHFCQUFxQixDQUFDLEtBQUtOLEVBQU4sQ0FBbkM7QUFDRDtBQUNGOzs7MkJBRU07QUFDTCxVQUFNYSxRQUFRLEdBQUczRCxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsS0FBS2QsR0FBN0IsRUFBa0NFLEdBQW5DLENBQXpCOztBQUNBLFVBQUksQ0FBQyxLQUFLbUMsUUFBTixJQUFrQmtDLFFBQVEsR0FBRyxLQUFLdkQsbUJBQUwsR0FBMkIsS0FBS0csU0FBaEMsR0FBNEMsQ0FBN0UsRUFBZ0Y7QUFDOUU7QUFDQSxhQUFLbkIsR0FBTCxDQUFTQyxLQUFULENBQWVDLEdBQWYsYUFBd0JxRSxRQUFRLEdBQUcsQ0FBbkM7QUFDQSxhQUFLbkMsUUFBTCxHQUFnQjRCLHFCQUFxQixDQUFDLEtBQUtMLElBQU4sQ0FBckM7QUFDRDtBQUNGOzs7Ozs7QUFHWTdELG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQWUsTUFBTSxDQUFDb0YsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFDaEQsTUFBTU0sV0FBVyxHQUFHbEcsUUFBUSxDQUFDSyxjQUFULENBQXdCLE9BQXhCLENBQXBCO0FBQ0EsTUFBTThGLFVBQVUsR0FBR25HLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixTQUF4QixDQUFuQjtBQUNBLE1BQU0rRixPQUFPLEdBQUdwRyxRQUFRLENBQUNLLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBaEI7QUFDQSxNQUFNZ0csU0FBUyxHQUFHckcsUUFBUSxDQUFDSyxjQUFULENBQXdCLFlBQXhCLENBQWxCO0FBQ0EsTUFBTWlHLGdCQUFnQixHQUFHdEcsUUFBUSxDQUFDSyxjQUFULENBQXdCLG1CQUF4QixDQUF6QjtBQUNBLE1BQU1rRyxTQUFTLEdBQUd2RyxRQUFRLENBQUNLLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBbEI7QUFDQSxNQUFNbUcsT0FBTyxHQUFHeEcsUUFBUSxDQUFDSyxjQUFULENBQXdCLFdBQXhCLENBQWhCO0FBQ0EsTUFBTW9HLFFBQVEsR0FBR3pHLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLE1BQU1xRyxZQUFZLEdBQUcxRyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGVBQTFCLENBQXJCO0FBQ0EsTUFBTWlCLFNBQVMsR0FBR2xCLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixZQUF4QixDQUFsQjtBQUNBLE1BQU1jLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLEtBQXFDLENBQXREO0FBQ0FILFdBQVMsQ0FBQ0ksU0FBVixHQUFzQkgsUUFBdEI7QUFDQSxNQUFNd0YsRUFBRSxHQUFHLElBQUk3RCxLQUFKLENBQVUsZUFBVixDQUFYO0FBR0EsTUFBSThELENBQUMsR0FBRyxDQUFSO0FBQ0FGLGNBQVksQ0FBQ0UsQ0FBRCxDQUFaLENBQWdCaEgsS0FBaEIsQ0FBc0JHLE9BQXRCLEdBQWdDLE1BQWhDOztBQUVBMEcsVUFBUSxDQUFDSSxPQUFULEdBQW1CLFlBQVU7QUFDM0JOLGFBQVMsQ0FBQ2pGLFNBQVYsR0FBc0IsRUFBdEI7QUFFQW9GLGdCQUFZLENBQUNFLENBQUQsQ0FBWixDQUFnQmhILEtBQWhCLENBQXNCRyxPQUF0QixHQUFnQyxFQUFoQztBQUNBLFFBQUk2RyxDQUFDLEtBQUtGLFlBQVksQ0FBQzFDLE1BQWIsR0FBc0IsQ0FBaEMsRUFBbUM0QyxDQUFDLEdBQUcsQ0FBQyxDQUFMO0FBQ25DQSxLQUFDOztBQUVELFlBQU9BLENBQVA7QUFDRSxXQUFLLENBQUw7QUFDRSxZQUFJekYsUUFBUSxJQUFJLElBQWhCLEVBQXFCO0FBQ25CbkIsa0JBQVEsQ0FBQzhHLGFBQVQsa0JBQWlDRixDQUFDLEdBQUcsQ0FBckMsR0FBMENoSCxLQUExQyxDQUFnREcsT0FBaEQsR0FBMEQsTUFBMUQ7QUFDRCxTQUZELE1BRU87QUFDTHdHLG1CQUFTLENBQUNqRixTQUFWLEdBQXNCLGlCQUF0QjtBQUNEOztBQUNEOztBQUNGLFdBQUssQ0FBTDtBQUNFLFlBQUlILFFBQVEsSUFBSSxJQUFoQixFQUFzQjtBQUNwQm5CLGtCQUFRLENBQUM4RyxhQUFULGtCQUFpQ0YsQ0FBQyxHQUFHLENBQXJDLEdBQTBDaEgsS0FBMUMsQ0FBZ0RHLE9BQWhELEdBQTBELE1BQTFEO0FBQ0QsU0FGRCxNQUVPO0FBQ0x3RyxtQkFBUyxDQUFDakYsU0FBVixHQUFzQixpQkFBdEI7QUFDRDs7QUFDRDs7QUFDRixXQUFLLENBQUw7QUFDRSxZQUFJSCxRQUFRLElBQUksSUFBaEIsRUFBc0I7QUFDcEJuQixrQkFBUSxDQUFDOEcsYUFBVCxrQkFBaUNGLENBQUMsR0FBRyxDQUFyQyxHQUEwQ2hILEtBQTFDLENBQWdERyxPQUFoRCxHQUEwRCxNQUExRDtBQUNELFNBRkQsTUFFTztBQUNMd0csbUJBQVMsQ0FBQ2pGLFNBQVYsR0FBc0IsaUJBQXRCO0FBQ0Q7O0FBQ0Q7QUFyQko7O0FBdUJBb0YsZ0JBQVksQ0FBQ0UsQ0FBRCxDQUFaLENBQWdCaEgsS0FBaEIsQ0FBc0JHLE9BQXRCLEdBQWdDLE1BQWhDO0FBQ0QsR0EvQkQ7O0FBaUNBeUcsU0FBTyxDQUFDSyxPQUFSLEdBQWtCLFlBQVk7QUFDNUJOLGFBQVMsQ0FBQ2pGLFNBQVYsR0FBc0IsRUFBdEI7QUFDQW9GLGdCQUFZLENBQUNFLENBQUQsQ0FBWixDQUFnQmhILEtBQWhCLENBQXNCRyxPQUF0QixHQUFnQyxFQUFoQztBQUNBLFFBQUk2RyxDQUFDLEtBQUssQ0FBVixFQUFhQSxDQUFDLEdBQUdGLFlBQVksQ0FBQzFDLE1BQWpCO0FBQ2I0QyxLQUFDOztBQUVELFlBQVFBLENBQVI7QUFDRSxXQUFLLENBQUw7QUFDRSxZQUFJekYsUUFBUSxJQUFJLElBQWhCLEVBQXNCO0FBQ3BCbkIsa0JBQVEsQ0FBQzhHLGFBQVQsa0JBQWlDRixDQUFDLEdBQUcsQ0FBckMsR0FBMENoSCxLQUExQyxDQUFnREcsT0FBaEQsR0FBMEQsTUFBMUQ7QUFDRCxTQUZELE1BRU87QUFDTHdHLG1CQUFTLENBQUNqRixTQUFWLEdBQXNCLGlCQUF0QjtBQUNEOztBQUNEOztBQUNGLFdBQUssQ0FBTDtBQUNFLFlBQUlILFFBQVEsSUFBSSxJQUFoQixFQUFzQjtBQUNwQm5CLGtCQUFRLENBQUM4RyxhQUFULGtCQUFpQ0YsQ0FBQyxHQUFHLENBQXJDLEdBQTBDaEgsS0FBMUMsQ0FBZ0RHLE9BQWhELEdBQTBELE1BQTFEO0FBQ0QsU0FGRCxNQUVPO0FBQ0x3RyxtQkFBUyxDQUFDakYsU0FBVixHQUFzQixpQkFBdEI7QUFDRDs7QUFDRDs7QUFDRixXQUFLLENBQUw7QUFDRSxZQUFJSCxRQUFRLElBQUksSUFBaEIsRUFBc0I7QUFDcEJuQixrQkFBUSxDQUFDOEcsYUFBVCxrQkFBaUNGLENBQUMsR0FBRyxDQUFyQyxHQUEwQ2hILEtBQTFDLENBQWdERyxPQUFoRCxHQUEwRCxNQUExRDtBQUNELFNBRkQsTUFFTztBQUNMd0csbUJBQVMsQ0FBQ2pGLFNBQVYsR0FBc0IsaUJBQXRCO0FBQ0Q7O0FBQ0Q7QUFyQko7O0FBdUJBb0YsZ0JBQVksQ0FBQ0UsQ0FBRCxDQUFaLENBQWdCaEgsS0FBaEIsQ0FBc0JHLE9BQXRCLEdBQWdDLE1BQWhDO0FBQ0QsR0E5QkQ7O0FBK0JBLE1BQUlnSCxJQUFKOztBQUNBVixXQUFTLENBQUNRLE9BQVYsR0FBb0IsWUFBVTtBQUM1QixRQUFJLENBQUNELENBQUMsS0FBSyxDQUFOLElBQVdBLENBQUMsS0FBSyxDQUFsQixLQUF3QnpGLFFBQVEsR0FBRyxJQUF2QyxFQUE0QztBQUMxQ3dGLFFBQUUsQ0FBQzlDLElBQUg7QUFDQTtBQUNEOztBQUNELFFBQUsrQyxDQUFDLEtBQUssQ0FBUCxJQUFhekYsUUFBUSxHQUFHLElBQTVCLEVBQWlDO0FBQy9Cd0YsUUFBRSxDQUFDOUMsSUFBSDtBQUNBO0FBQ0Q7O0FBQ0R3QyxhQUFTLENBQUN6RyxLQUFWLENBQWdCRyxPQUFoQixHQUEwQixNQUExQjtBQUNBdUcsb0JBQWdCLENBQUMxRyxLQUFqQixDQUF1QkcsT0FBdkIsR0FBaUMsTUFBakM7QUFDQXlHLFdBQU8sQ0FBQzVHLEtBQVIsQ0FBY0csT0FBZCxHQUF3QixNQUF4QjtBQUNBMEcsWUFBUSxDQUFDN0csS0FBVCxDQUFlRyxPQUFmLEdBQXlCLE1BQXpCO0FBQ0EyRyxnQkFBWSxDQUFDRSxDQUFELENBQVosQ0FBZ0JJLFNBQWhCLENBQTBCQyxNQUExQixDQUFpQyxNQUFqQztBQUNBRixRQUFJLEdBQUcsSUFBSXRILDZDQUFKLENBQVNpSCxZQUFZLENBQUNFLENBQUQsQ0FBckIsQ0FBUDtBQUNBakQseUJBQXFCLENBQUNvRCxJQUFJLENBQUNoRSxJQUFOLENBQXJCO0FBQ0FnRSxRQUFJLENBQUNHLEtBQUw7QUFDQUgsUUFBSSxDQUFDSSxPQUFMO0FBQ0QsR0FsQkQ7O0FBb0JBakIsYUFBVyxDQUFDVyxPQUFaLEdBQXNCLFlBQVU7QUFDOUI3RyxZQUFRLENBQUM4RyxhQUFULENBQXVCLGlCQUF2QixFQUEwQ0UsU0FBMUMsQ0FBb0RJLE1BQXBELENBQTJELGVBQTNEO0FBQ0FDLDZEQUFVO0FBQ1gsR0FIRDs7QUFJQWxCLFlBQVUsQ0FBQ1UsT0FBWCxHQUFxQixZQUFVO0FBQzdCRSxRQUFJLENBQUNkLEtBQUw7QUFDQXRDLHlCQUFxQixDQUFDb0QsSUFBSSxDQUFDaEUsSUFBTixDQUFyQjtBQUNELEdBSEQ7O0FBSUFxRCxTQUFPLENBQUNTLE9BQVIsR0FBa0IsWUFBVTtBQUMxQkUsUUFBSSxDQUFDZixXQUFMO0FBQ0QsR0FGRDtBQVFELENBeEhELEU7Ozs7Ozs7Ozs7O0FDSEEsSUFBTXNCLGVBQWUsR0FBR3RILFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixrQkFBeEIsQ0FBeEI7QUFFQSxJQUFJa0gsU0FBUyxHQUFHLEtBQWhCOztBQUVBLFNBQVNGLFVBQVQsR0FBc0I7QUFDcEI7O0FBQ0EsTUFBSUUsU0FBSixFQUFlO0FBQ2JELG1CQUFlLENBQUMzRixLQUFoQjtBQUNELEdBRkQsTUFFTztBQUNMMkYsbUJBQWUsQ0FBQ3pELElBQWhCO0FBQ0Q7QUFDRjs7QUFBQTs7QUFFRHlELGVBQWUsQ0FBQ0UsU0FBaEIsR0FBNEIsWUFBWTtBQUN0QztBQUNBRCxXQUFTLEdBQUcsSUFBWjtBQUNELENBSEQ7O0FBSUFELGVBQWUsQ0FBQ0csT0FBaEIsR0FBMEIsWUFBWTtBQUNwQ0YsV0FBUyxHQUFHLEtBQVo7QUFDRCxDQUZEOztBQUtBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFBRU4sWUFBVSxFQUFWQTtBQUFGLENBQWpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IocGxheWVyQ2FyKSB7XG4gICAgdGhpcy5jYXIgPSBwbGF5ZXJDYXI7XG4gICAgdGhpcy5jYXIuc3R5bGUudG9wID0gXCI4MCVcIjtcbiAgICB0aGlzLmNhci5zdHlsZS5sZWZ0ID0gXCIyMCVcIjtcbiAgICB0aGlzLmNhci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpbmVcIikuZm9yRWFjaCggZWwgPT4gZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIiApO1xuICAgIHRoaXMuZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jb250YWluZXJcIik7XG4gICAgdGhpcy5nYW1lQ29udGFpbmVyV2lkdGggPSBwYXJzZUludChcbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZ2FtZUNvbnRhaW5lcikud2lkdGhcbiAgICApO1xuICAgIHRoaXMuZ2FtZUNvbnRhaW5lckhlaWdodCA9IHBhcnNlSW50KFxuICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5nYW1lQ29udGFpbmVyKS5oZWlnaHRcbiAgICApO1xuICAgIHRoaXMuY2FyV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcikud2lkdGgpO1xuICAgIHRoaXMuY2FySGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLmhlaWdodCk7XG4gICAgdGhpcy5yZXN0YXJ0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXJ0LWNvbnRhaW5lclwiKTtcbiAgICB0aGlzLnBhdXNlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXVzZS1jb250YWluZXJcIik7XG4gICAgdGhpcy5zY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7XG4gICAgdGhpcy5oaWdoU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2gtc2NvcmVcIik7XG4gICAgdGhpcy50b3BTY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaFNjb3JlXCIpIHx8IDA7XG4gICAgdGhpcy5oaWdoU2NvcmUuaW5uZXJUZXh0ID0gdGhpcy50b3BTY29yZTtcbiAgICB0aGlzLnNjb3JlQ291bnRlciA9IDA7XG4gICAgdGhpcy5wb2ludFNwZWVkID0gMTtcbiAgICB0aGlzLnNwZWVkID0gNDtcbiAgICB0aGlzLmxpbmVTcGVlZCA9IDU7XG4gICAgdGhpcy5wYXVzZSA9IGZhbHNlO1xuICAgIHRoaXMubW92ZVJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZlTGVmdCA9IGZhbHNlO1xuICAgIHRoaXMubW92ZVVwID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZlRG93biA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmhhbmRsaW5nID0gNTtcblxuICAgIHRoaXMuY2FyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyMVwiKTtcbiAgICB0aGlzLmNhcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcjJcIik7XG4gICAgdGhpcy5jYXIzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXIzXCIpO1xuICAgIHRoaXMuY2FyNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyNFwiKTtcblxuICAgIHRoaXMubGluZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmUxXCIpO1xuICAgIHRoaXMubGluZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmUyXCIpO1xuICAgIHRoaXMubGluZTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmUzXCIpO1xuICAgIHRoaXMubGluZTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmU0XCIpO1xuICAgIHRoaXMubGluZTUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmU1XCIpO1xuICAgIHRoaXMubGluZTYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmU2XCIpO1xuICAgIHRoaXMubGluZTcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmU3XCIpO1xuXG4gICAgdGhpcy5jcmFzaCA9IG5ldyBBdWRpbyhcIi4vZGlzdC9jcmFzaC5tcDNcIik7XG5cbiAgICB0aGlzLmxvb3AgPSB0aGlzLmxvb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldEhpZ2hTY29yZSA9IHRoaXMuc2V0SGlnaFNjb3JlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYXJEb3duID0gdGhpcy5jYXJEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cCA9IHRoaXMudXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRvd24gPSB0aGlzLmRvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJpZ2h0ID0gdGhpcy5yaWdodC5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICByZXNldCgpe1xuICAgIHRoaXMucmVzdGFydENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGhpcy5jYXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHRoaXMuY2FyLnN0eWxlLnRvcCA9IFwiODAlXCI7XG4gICAgdGhpcy5jYXIuc3R5bGUubGVmdCA9IFwiMjAlXCI7XG4gICAgdGhpcy5zY29yZUNvdW50ZXIgPSAwO1xuICAgIHRoaXMucG9pbnRTcGVlZCA9IDE7XG4gICAgdGhpcy5zcGVlZCA9IDQ7XG4gICAgdGhpcy5saW5lU3BlZWQgPSA1O1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmhhbmRsaW5nID0gNDtcbiAgICB0aGlzLmNhcjEuc3R5bGUudG9wID0gXCItODBweFwiO1xuICAgIHRoaXMuY2FyMi5zdHlsZS50b3AgPSBcIi0yNTBweFwiO1xuICAgIHRoaXMuY2FyMy5zdHlsZS50b3AgPSBcIi00NTBweFwiO1xuICAgIHRoaXMuY2FyNC5zdHlsZS50b3AgPSBcIi02NTBweFwiO1xuICAgIHRoaXMuY2FyMS5zdHlsZS5kaXNwbGF5ID0gXCJcIlxuICAgIHRoaXMuY2FyMi5zdHlsZS5kaXNwbGF5ID0gXCJcIlxuICAgIHRoaXMuY2FyMy5zdHlsZS5kaXNwbGF5ID0gXCJcIlxuICAgIHRoaXMuY2FyNC5zdHlsZS5kaXNwbGF5ID0gXCJcIlxuICAgIHRoaXMuc2NvcmUuaW5uZXJUZXh0ID0gXCIwXCI7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmJsaW5rRWZmZWN0KTtcblxuICB9XG5cbiAgdG9nZ2xlUGF1c2UoKXtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVSaWdodCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlTGVmdCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlVXApO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZURvd24pO1xuICAgIGlmICh0aGlzLnBhdXNlKXtcbiAgICAgIHRoaXMucGF1c2UgPSBmYWxzZTtcbiAgICAgIHRoaXMucGF1c2VDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXVzZSA9IHRydWU7IFxuICAgICAgdGhpcy5wYXVzZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfSAgXG5cbiAgfVxuXG4gIGxvb3AoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jb2xsaXNpb24odGhpcy5jYXIsIHRoaXMuY2FyMSkgfHxcbiAgICAgIHRoaXMuY29sbGlzaW9uKHRoaXMuY2FyLCB0aGlzLmNhcjIpIHx8XG4gICAgICB0aGlzLmNvbGxpc2lvbih0aGlzLmNhciwgdGhpcy5jYXIzKSB8fFxuICAgICAgdGhpcy5jb2xsaXNpb24odGhpcy5jYXIsIHRoaXMuY2FyNClcbiAgICApIHtcbiAgICAgIHRoaXMuY3Jhc2gucGxheSgpO1xuICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICB0aGlzLmxvc3QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNjb3JlQ291bnRlcisrO1xuXG4gICAgaWYgKHRoaXMuc2NvcmVDb3VudGVyICUgMjAgPT0gMCkge1xuICAgICAgc2NvcmUuaW5uZXJUZXh0ID0gcGFyc2VJbnQoc2NvcmUuaW5uZXJUZXh0KSArIHRoaXMucG9pbnRTcGVlZDtcbiAgICAgIHN3aXRjaCAodGhpcy5jYXIuaWRbdGhpcy5jYXIuaWQubGVuZ3RoIC0gMV0pe1xuICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgIHRoaXMuc2NvcmUuaW5uZXJUZXh0ID0gcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpICsgMztcbiAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICB0aGlzLnNjb3JlLmlubmVyVGV4dCA9IHBhcnNlSW50KHRoaXMuc2NvcmUuaW5uZXJUZXh0KSArIDM7XG4gICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgdGhpcy5zY29yZS5pbm5lclRleHQgPSBwYXJzZUludCh0aGlzLnNjb3JlLmlubmVyVGV4dCkgKyAxMDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc2NvcmVDb3VudGVyICUgNTAwID09IDAgJiYgdGhpcy5zcGVlZCA8PSAxNSkge1xuICAgICAgdGhpcy5zcGVlZCsrO1xuICAgICAgdGhpcy5saW5lU3BlZWQrKztcbiAgICAgIHRoaXMucG9pbnRTcGVlZCsrO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNjb3JlQ291bnRlciAlIDMwMDAgPT0gMCAmJiB0aGlzLnNwZWVkID4gMTUpIHtcbiAgICAgIHRoaXMuc3BlZWQrKztcbiAgICAgIHRoaXMubGluZVNwZWVkKys7XG4gICAgICB0aGlzLnBvaW50U3BlZWQrKztcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuc2NvcmVDb3VudGVyICUgMTIwMCA9PSAwICYmIHRoaXMuaGFuZGxpbmcgPD0gMTUpIHtcbiAgICAgIHRoaXMuaGFuZGxpbmcrKztcbiAgICB9XG5cbiAgICB0aGlzLmNhckRvd24odGhpcy5jYXIxKTtcbiAgICB0aGlzLmNhckRvd24odGhpcy5jYXIyKTtcbiAgICB0aGlzLmNhckRvd24odGhpcy5jYXIzKTtcbiAgICB0aGlzLmNhckRvd24odGhpcy5jYXI0KTtcblxuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lMSk7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmUyKTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTMpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lNCk7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmU1KTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTYpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lNyk7XG5cbiAgICBpZiAoIXRoaXMucGF1c2UpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xuICB9XG5cbiAgY2FyRG93bihjYXIpIHtcbiAgICBsZXQgcG9zaXRpb24gPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYXIpLnRvcCk7XG4gICAgaWYgKHBvc2l0aW9uID4gdGhpcy5nYW1lQ29udGFpbmVySGVpZ2h0KSB7XG4gICAgICBwb3NpdGlvbiA9IC0yMDA7XG4gICAgICBjb25zdCBwb3NpdGlvbkxlZnQgPSBwYXJzZUludChcbiAgICAgICAgTWF0aC5yYW5kb20oKSAqICh0aGlzLmdhbWVDb250YWluZXJXaWR0aCAtIHRoaXMuY2FyV2lkdGggLSAxMClcbiAgICAgICk7XG4gICAgICBjYXIuc3R5bGUubGVmdCA9IGAke3Bvc2l0aW9uTGVmdH1weGA7XG4gICAgICBjYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgICAgXCJyZ2IoXCIgK1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICtcbiAgICAgICAgXCIsXCIgK1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICtcbiAgICAgICAgXCIsXCIgK1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICtcbiAgICAgICAgXCIpXCI7XG4gICAgfVxuICAgIGNhci5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbiArIHRoaXMuc3BlZWR9cHhgO1xuICB9XG5cbiAgbGluZURvd24obGluZSkge1xuICAgIGxldCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGxpbmUpLnRvcCk7XG4gICAgaWYgKHBvc2l0aW9uID4gdGhpcy5nYW1lQ29udGFpbmVySGVpZ2h0KSB7XG4gICAgICBwb3NpdGlvbiA9IC0zMDA7XG4gICAgfVxuICAgIGxpbmUuc3R5bGUudG9wID0gYCR7cG9zaXRpb24gKyB0aGlzLmxpbmVTcGVlZH1weGA7XG4gIH1cblxuICBjb2xsaXNpb24ocGxheWVyQ2FyLCBucGNDYXIpIHtcbiAgICBjb25zdCBwbGF5ZXJzVG9wTGVmdCA9IHBsYXllckNhci5vZmZzZXRMZWZ0O1xuICAgIGNvbnN0IHkxID0gcGxheWVyQ2FyLm9mZnNldFRvcDtcbiAgICBjb25zdCBoMSA9IHBsYXllckNhci5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgdzEgPSBwbGF5ZXJDYXIub2Zmc2V0V2lkdGg7XG5cbiAgICBjb25zdCBucGNUb3BMZWZ0ID0gbnBjQ2FyLm9mZnNldExlZnQ7XG4gICAgY29uc3QgeTIgPSBucGNDYXIub2Zmc2V0VG9wO1xuICAgIGNvbnN0IGgyID0gbnBjQ2FyLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB3MiA9IG5wY0Nhci5vZmZzZXRXaWR0aDtcblxuICAgIGNvbnN0IHBsYXllcnNZUmVhY2ggPSB5MSArIGgxIC0gMjtcbiAgICBjb25zdCBwbGF5ZXJzWFJlYWNoID0gcGxheWVyc1RvcExlZnQgKyB3MSArIDU7XG4gICAgY29uc3QgbnBjWVJlYWNoID0geTIgKyBoMiAtIDI7XG4gICAgY29uc3QgbnBjWFJlYWNoID0gbnBjVG9wTGVmdCArIHcyICsgNTtcblxuICAgIGlmIChcbiAgICAgIHBsYXllcnNZUmVhY2ggPCB5MiB8fFxuICAgICAgeTEgPiBucGNZUmVhY2ggfHxcbiAgICAgIHBsYXllcnNYUmVhY2ggPCBucGNUb3BMZWZ0IHx8XG4gICAgICBwbGF5ZXJzVG9wTGVmdCA+IG5wY1hSZWFjaFxuICAgIClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLmJsaW5rRWZmZWN0ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICBwbGF5ZXJDYXIuc3R5bGUuZGlzcGxheSA9IHBsYXllckNhci5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcbiAgICAgIG5wY0Nhci5zdHlsZS5kaXNwbGF5ID0gbnBjQ2FyLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIgPyBcImZsZXhcIiA6IFwibm9uZVwiO1xuICAgIH0sIDUwMCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBsb3N0KCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVJpZ2h0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVMZWZ0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVVcCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlRG93bik7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKTtcbiAgICB0aGlzLnJlc3RhcnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHRoaXMuc2V0SGlnaFNjb3JlKCk7XG4gIH1cblxuICBzZXRIaWdoU2NvcmUoKSB7XG4gICAgaWYgKHBhcnNlSW50KHRoaXMudG9wU2NvcmUpIDwgcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpKSB7XG4gICAgICB0aGlzLnRvcFNjb3JlID0gcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoU2NvcmVcIiwgcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpKTtcbiAgICB9XG4gICAgdGhpcy5oaWdoU2NvcmUuaW5uZXJUZXh0ID0gdGhpcy50b3BTY29yZTtcbiAgfVxuXG4gIGtleURvd24oKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlciwgdHJ1ZSk7XG4gIH1cbiAga2V5VXAoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5VXBIYW5kbGVyLCB0cnVlKTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgIXRoaXMucGF1c2UpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgIGlmICghdGhpcy5tb3ZlRG93bikge1xuICAgICAgICAgICAgdGhpcy5tb3ZlRG93biA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRvd24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICBpZiAoIXRoaXMubW92ZVVwKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVVcCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgaWYgKCF0aGlzLm1vdmVMZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVMZWZ0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubGVmdCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgaWYgKCF0aGlzLm1vdmVSaWdodCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlUmlnaHQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yaWdodCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgIHRoaXMudG9nZ2xlUGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIgJiYgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xuICAgIH1cbiAgfVxuICBrZXlVcEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlRG93bik7XG4gICAgICAgICAgdGhpcy5tb3ZlRG93biA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlVXApO1xuICAgICAgICAgIHRoaXMubW92ZVVwID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVMZWZ0KTtcbiAgICAgICAgICB0aGlzLm1vdmVMZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVSaWdodCk7XG4gICAgICAgICAgdGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGVmdCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS5sZWZ0KTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgcG9zaXRpb24gPiA3KSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24gLSB0aGlzLmhhbmRsaW5nfXB4YDtcbiAgICAgIHRoaXMubW92ZUxlZnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sZWZ0KTtcbiAgICB9XG4gIH1cblxuICByaWdodCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS5sZWZ0KTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgcG9zaXRpb24gPCB0aGlzLmdhbWVDb250YWluZXJXaWR0aCAtIHRoaXMuY2FyV2lkdGggLSA3KSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24gKyB0aGlzLmhhbmRsaW5nfXB4YDtcbiAgICAgIHRoaXMubW92ZVJpZ2h0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIHVwKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLnRvcCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIHBvc2l0aW9uID4gMjApIHtcbiAgICAgIHRoaXMuc2NvcmUuaW5uZXJUZXh0ID0gYCR7cGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpICsgMX1gO1xuICAgICAgdGhpcy5jYXIuc3R5bGUudG9wID0gYCR7cG9zaXRpb24gLSAzfXB4YDtcbiAgICAgIHRoaXMubW92ZVVwID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXApO1xuICAgIH1cbiAgfVxuXG4gIGRvd24oKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcikudG9wKTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgcG9zaXRpb24gPCB0aGlzLmdhbWVDb250YWluZXJIZWlnaHQgLSB0aGlzLmNhckhlaWdodCAtIDIpIHtcbiAgICAgIC8vIHRoaXMuc2NvcmUuaW5uZXJUZXh0ID0gYCR7cGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpIC0gMX1gO1xuICAgICAgdGhpcy5jYXIuc3R5bGUudG9wID0gYCR7cG9zaXRpb24gKyAzfXB4YDtcbiAgICAgIHRoaXMubW92ZURvd24gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kb3duKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCJcbmltcG9ydCB7IHRvZ2dsZVBsYXkgfSBmcm9tIFwiLi9tdXNpY1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCB0b2dnbGVTb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXVzaWNcIik7XG4gIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnRcIik7XG4gIGNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlcIik7XG4gIGNvbnN0IHN0YXJ0R2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtZ2FtZVwiKVxuICBjb25zdCBzdGFydEluc3RydWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1pbnN0cnVjdGlvblwiKVxuICBjb25zdCB1bmxvY2tzQXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVubG9ja3NfYXRcIilcbiAgY29uc3QgbGVmdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1pY29uXCIpXG4gIGNvbnN0IHJpZ2h0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1pY29uXCIpXG4gIGNvbnN0IHBsYXlhYmxlQ2FycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWFibGUtY2FyXCIpXG4gIGNvbnN0IGhpZ2hTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaC1zY29yZVwiKTtcbiAgY29uc3QgdG9wU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpZ2hTY29yZVwiKSB8fCAwO1xuICBoaWdoU2NvcmUuaW5uZXJUZXh0ID0gdG9wU2NvcmU7XG4gIGNvbnN0IG5vID0gbmV3IEF1ZGlvKFwiLi9kaXN0L25vLm1wM1wiKTtcbiAgXG4gIFxuICBsZXQgaSA9IDA7XG4gIHBsYXlhYmxlQ2Fyc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIFxuICByaWdodEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICB1bmxvY2tzQXQuaW5uZXJUZXh0ID0gXCJcIjtcblxuICAgIHBsYXlhYmxlQ2Fyc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICBpZiAoaSA9PT0gcGxheWFibGVDYXJzLmxlbmd0aCAtIDEpIGkgPSAtMTtcbiAgICBpKys7XG5cbiAgICBzd2l0Y2goaSl7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGlmICh0b3BTY29yZSA+PSAyMDAwKXtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubG9ja2VkJHtpICsgMX1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5sb2Nrc0F0LmlubmVyVGV4dCA9IFwiVW5sb2NrcyBhdCAyMDAwXCI7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGlmICh0b3BTY29yZSA+PSAyMDAwKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxvY2tlZCR7aSArIDF9YCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVubG9ja3NBdC5pbm5lclRleHQgPSBcIlVubG9ja3MgYXQgMjAwMFwiO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICBpZiAodG9wU2NvcmUgPj0gMzAwMCkge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5sb2NrZWQke2kgKyAxfWApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmxvY2tzQXQuaW5uZXJUZXh0ID0gXCJVbmxvY2tzIGF0IDMwMDBcIjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcGxheWFibGVDYXJzW2ldLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgfVxuXG4gIGxlZnRCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB1bmxvY2tzQXQuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBwbGF5YWJsZUNhcnNbaV0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgaWYgKGkgPT09IDApIGkgPSBwbGF5YWJsZUNhcnMubGVuZ3RoO1xuICAgIGktLTtcblxuICAgIHN3aXRjaCAoaSkge1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpZiAodG9wU2NvcmUgPj0gMjAwMCkge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5sb2NrZWQke2kgKyAxfWApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmxvY2tzQXQuaW5uZXJUZXh0ID0gXCJVbmxvY2tzIGF0IDIwMDBcIjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaWYgKHRvcFNjb3JlID49IDIwMDApIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubG9ja2VkJHtpICsgMX1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5sb2Nrc0F0LmlubmVyVGV4dCA9IFwiVW5sb2NrcyBhdCAyMDAwXCI7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGlmICh0b3BTY29yZSA+PSAzMDAwKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxvY2tlZCR7aSArIDF9YCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVubG9ja3NBdC5pbm5lclRleHQgPSBcIlVubG9ja3MgYXQgMzAwMFwiO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBwbGF5YWJsZUNhcnNbaV0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9XG4gIGxldCBnYW1lO1xuICBzdGFydEdhbWUub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgaWYgKChpID09PSAzIHx8IGkgPT09IDQpICYmIHRvcFNjb3JlIDwgMjAwMCl7XG4gICAgICBuby5wbGF5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgoaSA9PT0gNSkgJiYgdG9wU2NvcmUgPCAzMDAwKXtcbiAgICAgIG5vLnBsYXkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhcnRHYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBzdGFydEluc3RydWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBsZWZ0QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICByaWdodEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcGxheWFibGVDYXJzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzcGluXCIpO1xuICAgIGdhbWUgPSBuZXcgR2FtZShwbGF5YWJsZUNhcnNbaV0pO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lLmxvb3ApO1xuICAgIGdhbWUua2V5VXAoKTtcbiAgICBnYW1lLmtleURvd24oKTtcbiAgfVxuXG4gIHRvZ2dsZVNvdW5kLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtdm9sdW1lLW11dGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImZhLXZvbHVtZS1vZmZcIik7XG4gICAgdG9nZ2xlUGxheSgpO1xuICB9O1xuICByZXN0YXJ0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgIGdhbWUucmVzZXQoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZS5sb29wKTtcbiAgfTtcbiAgcGxheUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICBnYW1lLnRvZ2dsZVBhdXNlKCk7XG4gIH1cblxuICBcblxuICBcblxufSk7XG5cblxuXG4iLCJjb25zdCBiYWNrZ3JvdW5kTXVzaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmQtbXVzaWNcIik7XG5cbmxldCBpc1BsYXlpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcbiAgZGVidWdnZXJcbiAgaWYgKGlzUGxheWluZykge1xuICAgIGJhY2tncm91bmRNdXNpYy5wYXVzZSgpXG4gIH0gZWxzZSB7XG4gICAgYmFja2dyb3VuZE11c2ljLnBsYXkoKTtcbiAgfVxufTtcblxuYmFja2dyb3VuZE11c2ljLm9ucGxheWluZyA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWdnZXJcbiAgaXNQbGF5aW5nID0gdHJ1ZTtcbn07XG5iYWNrZ3JvdW5kTXVzaWMub25wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgaXNQbGF5aW5nID0gZmFsc2U7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0geyB0b2dnbGVQbGF5IH1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==