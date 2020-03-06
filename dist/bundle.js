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
        debugger;

        switch (this.car.id[this.car.id.length - 1]) {
          case "4":
            this.score.innerText = parseInt(this.score.innerText) + 3;

          case "5":
            this.score.innerText = parseInt(this.score.innerText) + 3;

          case "6":
            this.score.innerText = parseInt(this.score.innerText) + 20;
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
        if (topScore >= 5000) {
          document.querySelector(".locked".concat(i + 1)).style.display = "none";
        } else {
          unlocksAt.innerText = "Unlocks at 5000";
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
        if (topScore >= 5000) {
          document.querySelector(".locked".concat(i + 1)).style.display = "none";
        } else {
          unlocksAt.innerText = "Unlocks at 5000";
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

    if (i === 5 && topScore < 5000) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tdXNpYy5qcyJdLCJuYW1lcyI6WyJHYW1lIiwicGxheWVyQ2FyIiwiY2FyIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwiZGlzcGxheSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImdhbWVDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImdhbWVDb250YWluZXJXaWR0aCIsInBhcnNlSW50Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIndpZHRoIiwiZ2FtZUNvbnRhaW5lckhlaWdodCIsImhlaWdodCIsImNhcldpZHRoIiwiY2FySGVpZ2h0IiwicmVzdGFydENvbnRhaW5lciIsInBhdXNlQ29udGFpbmVyIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJ0b3BTY29yZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbm5lclRleHQiLCJzY29yZUNvdW50ZXIiLCJwb2ludFNwZWVkIiwic3BlZWQiLCJsaW5lU3BlZWQiLCJwYXVzZSIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwibW92ZVVwIiwibW92ZURvd24iLCJnYW1lT3ZlciIsImhhbmRsaW5nIiwiY2FyMSIsImNhcjIiLCJjYXIzIiwiY2FyNCIsImxpbmUxIiwibGluZTIiLCJsaW5lMyIsImxpbmU0IiwibGluZTUiLCJsaW5lNiIsImxpbmU3IiwiY3Jhc2giLCJBdWRpbyIsImxvb3AiLCJiaW5kIiwic2V0SGlnaFNjb3JlIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJjYXJEb3duIiwidXAiLCJkb3duIiwicmlnaHQiLCJjbGVhckludGVydmFsIiwiYmxpbmtFZmZlY3QiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvbGxpc2lvbiIsInBsYXkiLCJsb3N0IiwiaWQiLCJsZW5ndGgiLCJsaW5lRG93biIsInBvc2l0aW9uIiwicG9zaXRpb25MZWZ0IiwiTWF0aCIsInJhbmRvbSIsImJhY2tncm91bmRDb2xvciIsImZsb29yIiwibGluZSIsIm5wY0NhciIsInBsYXllcnNUb3BMZWZ0Iiwib2Zmc2V0TGVmdCIsInkxIiwib2Zmc2V0VG9wIiwiaDEiLCJvZmZzZXRIZWlnaHQiLCJ3MSIsIm9mZnNldFdpZHRoIiwibnBjVG9wTGVmdCIsInkyIiwiaDIiLCJ3MiIsInBsYXllcnNZUmVhY2giLCJwbGF5ZXJzWFJlYWNoIiwibnBjWVJlYWNoIiwibnBjWFJlYWNoIiwic2V0SW50ZXJ2YWwiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJrZXlDb2RlIiwidG9nZ2xlUGF1c2UiLCJyZXNldCIsInRvZ2dsZVNvdW5kIiwicmVzdGFydEJ0biIsInBsYXlCdG4iLCJzdGFydEdhbWUiLCJzdGFydEluc3RydWN0aW9uIiwidW5sb2Nrc0F0IiwibGVmdEJ0biIsInJpZ2h0QnRuIiwicGxheWFibGVDYXJzIiwibm8iLCJpIiwib25jbGljayIsInF1ZXJ5U2VsZWN0b3IiLCJnYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwia2V5VXAiLCJrZXlEb3duIiwidG9nZ2xlIiwidG9nZ2xlUGxheSIsImJhY2tncm91bmRNdXNpYyIsImlzUGxheWluZyIsIm9ucGxheWluZyIsIm9ucGF1c2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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QUFZO0FBQ3BDRixXQUFTLEdBQUcsS0FBWjtBQUNELENBRkQ7O0FBS0FHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUFFTixZQUFVLEVBQVZBO0FBQUYsQ0FBakIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXJDYXIpIHtcbiAgICB0aGlzLmNhciA9IHBsYXllckNhcjtcbiAgICB0aGlzLmNhci5zdHlsZS50b3AgPSBcIjgwJVwiO1xuICAgIHRoaXMuY2FyLnN0eWxlLmxlZnQgPSBcIjIwJVwiO1xuICAgIHRoaXMuY2FyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGluZVwiKS5mb3JFYWNoKCBlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiICk7XG4gICAgdGhpcy5nYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNvbnRhaW5lclwiKTtcbiAgICB0aGlzLmdhbWVDb250YWluZXJXaWR0aCA9IHBhcnNlSW50KFxuICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5nYW1lQ29udGFpbmVyKS53aWR0aFxuICAgICk7XG4gICAgdGhpcy5nYW1lQ29udGFpbmVySGVpZ2h0ID0gcGFyc2VJbnQoXG4gICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmdhbWVDb250YWluZXIpLmhlaWdodFxuICAgICk7XG4gICAgdGhpcy5jYXJXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS53aWR0aCk7XG4gICAgdGhpcy5jYXJIZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcikuaGVpZ2h0KTtcbiAgICB0aGlzLnJlc3RhcnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnQtY29udGFpbmVyXCIpO1xuICAgIHRoaXMucGF1c2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlLWNvbnRhaW5lclwiKTtcbiAgICB0aGlzLnNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVwiKTtcbiAgICB0aGlzLmhpZ2hTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaC1zY29yZVwiKTtcbiAgICB0aGlzLnRvcFNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaWdoU2NvcmVcIikgfHwgMDtcbiAgICB0aGlzLmhpZ2hTY29yZS5pbm5lclRleHQgPSB0aGlzLnRvcFNjb3JlO1xuICAgIHRoaXMuc2NvcmVDb3VudGVyID0gMDtcbiAgICB0aGlzLnBvaW50U3BlZWQgPSAxO1xuICAgIHRoaXMuc3BlZWQgPSA0O1xuICAgIHRoaXMubGluZVNwZWVkID0gNTtcbiAgICB0aGlzLnBhdXNlID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmVMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZlVXAgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmVEb3duID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuaGFuZGxpbmcgPSA1O1xuXG4gICAgdGhpcy5jYXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXIxXCIpO1xuICAgIHRoaXMuY2FyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyMlwiKTtcbiAgICB0aGlzLmNhcjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcjNcIik7XG4gICAgdGhpcy5jYXI0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXI0XCIpO1xuXG4gICAgdGhpcy5saW5lMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTFcIik7XG4gICAgdGhpcy5saW5lMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTJcIik7XG4gICAgdGhpcy5saW5lMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTNcIik7XG4gICAgdGhpcy5saW5lNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTRcIik7XG4gICAgdGhpcy5saW5lNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTVcIik7XG4gICAgdGhpcy5saW5lNiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTZcIik7XG4gICAgdGhpcy5saW5lNyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTdcIik7XG5cbiAgICB0aGlzLmNyYXNoID0gbmV3IEF1ZGlvKFwiLi9kaXN0L2NyYXNoLm1wM1wiKTtcblxuICAgIHRoaXMubG9vcCA9IHRoaXMubG9vcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0SGlnaFNjb3JlID0gdGhpcy5zZXRIaWdoU2NvcmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMua2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNhckRvd24gPSB0aGlzLmNhckRvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwID0gdGhpcy51cC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZG93biA9IHRoaXMuZG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmlnaHQgPSB0aGlzLnJpZ2h0LmJpbmQodGhpcyk7XG5cbiAgfVxuXG4gIHJlc2V0KCl7XG4gICAgdGhpcy5yZXN0YXJ0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0aGlzLmNhci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgdGhpcy5jYXIuc3R5bGUudG9wID0gXCI4MCVcIjtcbiAgICB0aGlzLmNhci5zdHlsZS5sZWZ0ID0gXCIyMCVcIjtcbiAgICB0aGlzLnNjb3JlQ291bnRlciA9IDA7XG4gICAgdGhpcy5wb2ludFNwZWVkID0gMTtcbiAgICB0aGlzLnNwZWVkID0gNDtcbiAgICB0aGlzLmxpbmVTcGVlZCA9IDU7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuaGFuZGxpbmcgPSA0O1xuICAgIHRoaXMuY2FyMS5zdHlsZS50b3AgPSBcIi04MHB4XCI7XG4gICAgdGhpcy5jYXIyLnN0eWxlLnRvcCA9IFwiLTI1MHB4XCI7XG4gICAgdGhpcy5jYXIzLnN0eWxlLnRvcCA9IFwiLTQ1MHB4XCI7XG4gICAgdGhpcy5jYXI0LnN0eWxlLnRvcCA9IFwiLTY1MHB4XCI7XG4gICAgdGhpcy5jYXIxLnN0eWxlLmRpc3BsYXkgPSBcIlwiXG4gICAgdGhpcy5jYXIyLnN0eWxlLmRpc3BsYXkgPSBcIlwiXG4gICAgdGhpcy5jYXIzLnN0eWxlLmRpc3BsYXkgPSBcIlwiXG4gICAgdGhpcy5jYXI0LnN0eWxlLmRpc3BsYXkgPSBcIlwiXG4gICAgdGhpcy5zY29yZS5pbm5lclRleHQgPSBcIjBcIjtcbiAgICBjbGVhckludGVydmFsKHRoaXMuYmxpbmtFZmZlY3QpO1xuXG4gIH1cblxuICB0b2dnbGVQYXVzZSgpe1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVJpZ2h0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVMZWZ0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVVcCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlRG93bik7XG4gICAgaWYgKHRoaXMucGF1c2Upe1xuICAgICAgdGhpcy5wYXVzZSA9IGZhbHNlO1xuICAgICAgdGhpcy5wYXVzZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhdXNlID0gdHJ1ZTsgXG4gICAgICB0aGlzLnBhdXNlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9ICBcblxuICB9XG5cbiAgbG9vcCgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNvbGxpc2lvbih0aGlzLmNhciwgdGhpcy5jYXIxKSB8fFxuICAgICAgdGhpcy5jb2xsaXNpb24odGhpcy5jYXIsIHRoaXMuY2FyMikgfHxcbiAgICAgIHRoaXMuY29sbGlzaW9uKHRoaXMuY2FyLCB0aGlzLmNhcjMpIHx8XG4gICAgICB0aGlzLmNvbGxpc2lvbih0aGlzLmNhciwgdGhpcy5jYXI0KVxuICAgICkge1xuICAgICAgdGhpcy5jcmFzaC5wbGF5KCk7XG4gICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9zdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2NvcmVDb3VudGVyKys7XG5cbiAgICBpZiAodGhpcy5zY29yZUNvdW50ZXIgJSAyMCA9PSAwKSB7XG4gICAgICBzY29yZS5pbm5lclRleHQgPSBwYXJzZUludChzY29yZS5pbm5lclRleHQpICsgdGhpcy5wb2ludFNwZWVkO1xuICAgICAgZGVidWdnZXJcbiAgICAgIHN3aXRjaCAodGhpcy5jYXIuaWRbdGhpcy5jYXIuaWQubGVuZ3RoIC0gMV0pe1xuICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgIHRoaXMuc2NvcmUuaW5uZXJUZXh0ID0gcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpICsgMztcbiAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICB0aGlzLnNjb3JlLmlubmVyVGV4dCA9IHBhcnNlSW50KHRoaXMuc2NvcmUuaW5uZXJUZXh0KSArIDM7XG4gICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgdGhpcy5zY29yZS5pbm5lclRleHQgPSBwYXJzZUludCh0aGlzLnNjb3JlLmlubmVyVGV4dCkgKyAyMDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc2NvcmVDb3VudGVyICUgNTAwID09IDAgJiYgdGhpcy5zcGVlZCA8PSAxNSkge1xuICAgICAgdGhpcy5zcGVlZCsrO1xuICAgICAgdGhpcy5saW5lU3BlZWQrKztcbiAgICAgIHRoaXMucG9pbnRTcGVlZCsrO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNjb3JlQ291bnRlciAlIDMwMDAgPT0gMCAmJiB0aGlzLnNwZWVkID4gMTUpIHtcbiAgICAgIHRoaXMuc3BlZWQrKztcbiAgICAgIHRoaXMubGluZVNwZWVkKys7XG4gICAgICB0aGlzLnBvaW50U3BlZWQrKztcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuc2NvcmVDb3VudGVyICUgMTIwMCA9PSAwICYmIHRoaXMuaGFuZGxpbmcgPD0gMTUpIHtcbiAgICAgIHRoaXMuaGFuZGxpbmcrKztcbiAgICB9XG5cbiAgICB0aGlzLmNhckRvd24odGhpcy5jYXIxKTtcbiAgICB0aGlzLmNhckRvd24odGhpcy5jYXIyKTtcbiAgICB0aGlzLmNhckRvd24odGhpcy5jYXIzKTtcbiAgICB0aGlzLmNhckRvd24odGhpcy5jYXI0KTtcblxuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lMSk7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmUyKTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTMpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lNCk7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmU1KTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTYpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lNyk7XG5cbiAgICBpZiAoIXRoaXMucGF1c2UpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xuICB9XG5cbiAgY2FyRG93bihjYXIpIHtcbiAgICBsZXQgcG9zaXRpb24gPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYXIpLnRvcCk7XG4gICAgaWYgKHBvc2l0aW9uID4gdGhpcy5nYW1lQ29udGFpbmVySGVpZ2h0KSB7XG4gICAgICBwb3NpdGlvbiA9IC0yMDA7XG4gICAgICBjb25zdCBwb3NpdGlvbkxlZnQgPSBwYXJzZUludChcbiAgICAgICAgTWF0aC5yYW5kb20oKSAqICh0aGlzLmdhbWVDb250YWluZXJXaWR0aCAtIHRoaXMuY2FyV2lkdGggLSAxMClcbiAgICAgICk7XG4gICAgICBjYXIuc3R5bGUubGVmdCA9IGAke3Bvc2l0aW9uTGVmdH1weGA7XG4gICAgICBjYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgICAgXCJyZ2IoXCIgK1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICtcbiAgICAgICAgXCIsXCIgK1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICtcbiAgICAgICAgXCIsXCIgK1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICtcbiAgICAgICAgXCIpXCI7XG4gICAgfVxuICAgIGNhci5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbiArIHRoaXMuc3BlZWR9cHhgO1xuICB9XG5cbiAgbGluZURvd24obGluZSkge1xuICAgIGxldCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGxpbmUpLnRvcCk7XG4gICAgaWYgKHBvc2l0aW9uID4gdGhpcy5nYW1lQ29udGFpbmVySGVpZ2h0KSB7XG4gICAgICBwb3NpdGlvbiA9IC0zMDA7XG4gICAgfVxuICAgIGxpbmUuc3R5bGUudG9wID0gYCR7cG9zaXRpb24gKyB0aGlzLmxpbmVTcGVlZH1weGA7XG4gIH1cblxuICBjb2xsaXNpb24ocGxheWVyQ2FyLCBucGNDYXIpIHtcbiAgICBjb25zdCBwbGF5ZXJzVG9wTGVmdCA9IHBsYXllckNhci5vZmZzZXRMZWZ0O1xuICAgIGNvbnN0IHkxID0gcGxheWVyQ2FyLm9mZnNldFRvcDtcbiAgICBjb25zdCBoMSA9IHBsYXllckNhci5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgdzEgPSBwbGF5ZXJDYXIub2Zmc2V0V2lkdGg7XG5cbiAgICBjb25zdCBucGNUb3BMZWZ0ID0gbnBjQ2FyLm9mZnNldExlZnQ7XG4gICAgY29uc3QgeTIgPSBucGNDYXIub2Zmc2V0VG9wO1xuICAgIGNvbnN0IGgyID0gbnBjQ2FyLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB3MiA9IG5wY0Nhci5vZmZzZXRXaWR0aDtcblxuICAgIGNvbnN0IHBsYXllcnNZUmVhY2ggPSB5MSArIGgxIC0gMjtcbiAgICBjb25zdCBwbGF5ZXJzWFJlYWNoID0gcGxheWVyc1RvcExlZnQgKyB3MSArIDU7XG4gICAgY29uc3QgbnBjWVJlYWNoID0geTIgKyBoMiAtIDI7XG4gICAgY29uc3QgbnBjWFJlYWNoID0gbnBjVG9wTGVmdCArIHcyICsgNTtcblxuICAgIGlmIChcbiAgICAgIHBsYXllcnNZUmVhY2ggPCB5MiB8fFxuICAgICAgeTEgPiBucGNZUmVhY2ggfHxcbiAgICAgIHBsYXllcnNYUmVhY2ggPCBucGNUb3BMZWZ0IHx8XG4gICAgICBwbGF5ZXJzVG9wTGVmdCA+IG5wY1hSZWFjaFxuICAgIClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLmJsaW5rRWZmZWN0ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICBwbGF5ZXJDYXIuc3R5bGUuZGlzcGxheSA9IHBsYXllckNhci5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcbiAgICAgIG5wY0Nhci5zdHlsZS5kaXNwbGF5ID0gbnBjQ2FyLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIgPyBcImZsZXhcIiA6IFwibm9uZVwiO1xuICAgIH0sIDUwMCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBsb3N0KCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVJpZ2h0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVMZWZ0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVVcCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlRG93bik7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKTtcbiAgICB0aGlzLnJlc3RhcnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHRoaXMuc2V0SGlnaFNjb3JlKCk7XG4gIH1cblxuICBzZXRIaWdoU2NvcmUoKSB7XG4gICAgaWYgKHBhcnNlSW50KHRoaXMudG9wU2NvcmUpIDwgcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpKSB7XG4gICAgICB0aGlzLnRvcFNjb3JlID0gcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoU2NvcmVcIiwgcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpKTtcbiAgICB9XG4gICAgdGhpcy5oaWdoU2NvcmUuaW5uZXJUZXh0ID0gdGhpcy50b3BTY29yZTtcbiAgfVxuXG4gIGtleURvd24oKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlciwgdHJ1ZSk7XG4gIH1cbiAga2V5VXAoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5VXBIYW5kbGVyLCB0cnVlKTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgIXRoaXMucGF1c2UpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgIGlmICghdGhpcy5tb3ZlRG93bikge1xuICAgICAgICAgICAgdGhpcy5tb3ZlRG93biA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRvd24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICBpZiAoIXRoaXMubW92ZVVwKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVVcCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgaWYgKCF0aGlzLm1vdmVMZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVMZWZ0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubGVmdCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgaWYgKCF0aGlzLm1vdmVSaWdodCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlUmlnaHQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yaWdodCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgIHRoaXMudG9nZ2xlUGF1c2UoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIgJiYgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xuICAgIH1cbiAgfVxuICBrZXlVcEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlRG93bik7XG4gICAgICAgICAgdGhpcy5tb3ZlRG93biA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlVXApO1xuICAgICAgICAgIHRoaXMubW92ZVVwID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVMZWZ0KTtcbiAgICAgICAgICB0aGlzLm1vdmVMZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVSaWdodCk7XG4gICAgICAgICAgdGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGVmdCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS5sZWZ0KTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgcG9zaXRpb24gPiA3KSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24gLSB0aGlzLmhhbmRsaW5nfXB4YDtcbiAgICAgIHRoaXMubW92ZUxlZnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sZWZ0KTtcbiAgICB9XG4gIH1cblxuICByaWdodCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS5sZWZ0KTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgcG9zaXRpb24gPCB0aGlzLmdhbWVDb250YWluZXJXaWR0aCAtIHRoaXMuY2FyV2lkdGggLSA3KSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24gKyB0aGlzLmhhbmRsaW5nfXB4YDtcbiAgICAgIHRoaXMubW92ZVJpZ2h0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIHVwKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLnRvcCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIHBvc2l0aW9uID4gMjApIHtcbiAgICAgIHRoaXMuc2NvcmUuaW5uZXJUZXh0ID0gYCR7cGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpICsgMX1gO1xuICAgICAgdGhpcy5jYXIuc3R5bGUudG9wID0gYCR7cG9zaXRpb24gLSAzfXB4YDtcbiAgICAgIHRoaXMubW92ZVVwID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXApO1xuICAgIH1cbiAgfVxuXG4gIGRvd24oKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcikudG9wKTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgcG9zaXRpb24gPCB0aGlzLmdhbWVDb250YWluZXJIZWlnaHQgLSB0aGlzLmNhckhlaWdodCAtIDIpIHtcbiAgICAgIC8vIHRoaXMuc2NvcmUuaW5uZXJUZXh0ID0gYCR7cGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpIC0gMX1gO1xuICAgICAgdGhpcy5jYXIuc3R5bGUudG9wID0gYCR7cG9zaXRpb24gKyAzfXB4YDtcbiAgICAgIHRoaXMubW92ZURvd24gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kb3duKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCJcbmltcG9ydCB7IHRvZ2dsZVBsYXkgfSBmcm9tIFwiLi9tdXNpY1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCB0b2dnbGVTb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXVzaWNcIik7XG4gIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnRcIik7XG4gIGNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlcIik7XG4gIGNvbnN0IHN0YXJ0R2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtZ2FtZVwiKVxuICBjb25zdCBzdGFydEluc3RydWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1pbnN0cnVjdGlvblwiKVxuICBjb25zdCB1bmxvY2tzQXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVubG9ja3NfYXRcIilcbiAgY29uc3QgbGVmdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1pY29uXCIpXG4gIGNvbnN0IHJpZ2h0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1pY29uXCIpXG4gIGNvbnN0IHBsYXlhYmxlQ2FycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWFibGUtY2FyXCIpXG4gIGNvbnN0IGhpZ2hTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaC1zY29yZVwiKTtcbiAgY29uc3QgdG9wU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpZ2hTY29yZVwiKSB8fCAwO1xuICBoaWdoU2NvcmUuaW5uZXJUZXh0ID0gdG9wU2NvcmU7XG4gIGNvbnN0IG5vID0gbmV3IEF1ZGlvKFwiLi9kaXN0L25vLm1wM1wiKTtcbiAgXG4gIFxuICBsZXQgaSA9IDA7XG4gIHBsYXlhYmxlQ2Fyc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIFxuICByaWdodEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICB1bmxvY2tzQXQuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBwbGF5YWJsZUNhcnNbaV0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgaWYgKGkgPT09IHBsYXlhYmxlQ2Fycy5sZW5ndGggLSAxKSBpID0gLTE7XG4gICAgaSsrO1xuXG4gICAgc3dpdGNoKGkpe1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpZiAodG9wU2NvcmUgPj0gMjAwMCl7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxvY2tlZCR7aSArIDF9YCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVubG9ja3NBdC5pbm5lclRleHQgPSBcIlVubG9ja3MgYXQgMjAwMFwiO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBpZiAodG9wU2NvcmUgPj0gMjAwMCkge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5sb2NrZWQke2kgKyAxfWApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmxvY2tzQXQuaW5uZXJUZXh0ID0gXCJVbmxvY2tzIGF0IDIwMDBcIjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgaWYgKHRvcFNjb3JlID49IDUwMDApIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubG9ja2VkJHtpICsgMX1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5sb2Nrc0F0LmlubmVyVGV4dCA9IFwiVW5sb2NrcyBhdCA1MDAwXCI7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHBsYXlhYmxlQ2Fyc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH1cblxuICBsZWZ0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdW5sb2Nrc0F0LmlubmVyVGV4dCA9IFwiXCI7XG4gICAgcGxheWFibGVDYXJzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgIGlmIChpID09PSAwKSBpID0gcGxheWFibGVDYXJzLmxlbmd0aDtcbiAgICBpLS07XG5cbiAgICBzd2l0Y2ggKGkpIHtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaWYgKHRvcFNjb3JlID49IDIwMDApIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubG9ja2VkJHtpICsgMX1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5sb2Nrc0F0LmlubmVyVGV4dCA9IFwiVW5sb2NrcyBhdCAyMDAwXCI7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGlmICh0b3BTY29yZSA+PSAyMDAwKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxvY2tlZCR7aSArIDF9YCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVubG9ja3NBdC5pbm5lclRleHQgPSBcIlVubG9ja3MgYXQgMjAwMFwiO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICBpZiAodG9wU2NvcmUgPj0gNTAwMCkge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5sb2NrZWQke2kgKyAxfWApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmxvY2tzQXQuaW5uZXJUZXh0ID0gXCJVbmxvY2tzIGF0IDUwMDBcIjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcGxheWFibGVDYXJzW2ldLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgfVxuICBsZXQgZ2FtZTtcbiAgc3RhcnRHYW1lLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgIGlmICgoaSA9PT0gMyB8fCBpID09PSA0KSAmJiB0b3BTY29yZSA8IDIwMDApe1xuICAgICAgbm8ucGxheSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKGkgPT09IDUpICYmIHRvcFNjb3JlIDwgNTAwMCl7XG4gICAgICBuby5wbGF5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXJ0R2FtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgc3RhcnRJbnN0cnVjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgbGVmdEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcmlnaHRCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHBsYXlhYmxlQ2Fyc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwic3BpblwiKTtcbiAgICBnYW1lID0gbmV3IEdhbWUocGxheWFibGVDYXJzW2ldKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZS5sb29wKTtcbiAgICBnYW1lLmtleVVwKCk7XG4gICAgZ2FtZS5rZXlEb3duKCk7XG4gIH1cblxuICB0b2dnbGVTb3VuZC5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLXZvbHVtZS1tdXRlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJmYS12b2x1bWUtb2ZmXCIpO1xuICAgIHRvZ2dsZVBsYXkoKTtcbiAgfTtcbiAgcmVzdGFydEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICBnYW1lLnJlc2V0KCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWUubG9vcCk7XG4gIH07XG4gIHBsYXlCdG4ub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgZ2FtZS50b2dnbGVQYXVzZSgpO1xuICB9XG5cbiAgXG5cbiAgXG5cbn0pO1xuXG5cblxuIiwiY29uc3QgYmFja2dyb3VuZE11c2ljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kLW11c2ljXCIpO1xuXG5sZXQgaXNQbGF5aW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHRvZ2dsZVBsYXkoKSB7XG4gIGRlYnVnZ2VyXG4gIGlmIChpc1BsYXlpbmcpIHtcbiAgICBiYWNrZ3JvdW5kTXVzaWMucGF1c2UoKVxuICB9IGVsc2Uge1xuICAgIGJhY2tncm91bmRNdXNpYy5wbGF5KCk7XG4gIH1cbn07XG5cbmJhY2tncm91bmRNdXNpYy5vbnBsYXlpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnZ2VyXG4gIGlzUGxheWluZyA9IHRydWU7XG59O1xuYmFja2dyb3VuZE11c2ljLm9ucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlzUGxheWluZyA9IGZhbHNlO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgdG9nZ2xlUGxheSB9XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=