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

          case "7":
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

      case 6:
        if (topScore >= 10000) {
          document.querySelector(".locked".concat(i + 1)).style.display = "none";
        } else {
          unlocksAt.innerText = "Unlocks at 10000";
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

      case 6:
        if (topScore >= 10000) {
          document.querySelector(".locked".concat(i + 1)).style.display = "none";
        } else {
          unlocksAt.innerText = "Unlocks at 10000";
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

    if (i === 6 && topScore < 10000) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tdXNpYy5qcyJdLCJuYW1lcyI6WyJHYW1lIiwicGxheWVyQ2FyIiwiY2FyIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwiZGlzcGxheSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImdhbWVDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImdhbWVDb250YWluZXJXaWR0aCIsInBhcnNlSW50Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIndpZHRoIiwiZ2FtZUNvbnRhaW5lckhlaWdodCIsImhlaWdodCIsImNhcldpZHRoIiwiY2FySGVpZ2h0IiwicmVzdGFydENvbnRhaW5lciIsInBhdXNlQ29udGFpbmVyIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJ0b3BTY29yZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbm5lclRleHQiLCJzY29yZUNvdW50ZXIiLCJwb2ludFNwZWVkIiwic3BlZWQiLCJsaW5lU3BlZWQiLCJwYXVzZSIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwibW92ZVVwIiwibW92ZURvd24iLCJnYW1lT3ZlciIsImhhbmRsaW5nIiwiY2FyMSIsImNhcjIiLCJjYXIzIiwiY2FyNCIsImxpbmUxIiwibGluZTIiLCJsaW5lMyIsImxpbmU0IiwibGluZTUiLCJsaW5lNiIsImxpbmU3IiwiY3Jhc2giLCJBdWRpbyIsImxvb3AiLCJiaW5kIiwic2V0SGlnaFNjb3JlIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJjYXJEb3duIiwidXAiLCJkb3duIiwicmlnaHQiLCJjbGVhckludGVydmFsIiwiYmxpbmtFZmZlY3QiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvbGxpc2lvbiIsInBsYXkiLCJsb3N0IiwiaWQiLCJsZW5ndGgiLCJsaW5lRG93biIsInBvc2l0aW9uIiwicG9zaXRpb25MZWZ0IiwiTWF0aCIsInJhbmRvbSIsImJhY2tncm91bmRDb2xvciIsImZsb29yIiwibGluZSIsIm5wY0NhciIsInBsYXllcnNUb3BMZWZ0Iiwib2Zmc2V0TGVmdCIsInkxIiwib2Zmc2V0VG9wIiwiaDEiLCJvZmZzZXRIZWlnaHQiLCJ3MSIsIm9mZnNldFdpZHRoIiwibnBjVG9wTGVmdCIsInkyIiwiaDIiLCJ3MiIsInBsYXllcnNZUmVhY2giLCJwbGF5ZXJzWFJlYWNoIiwibnBjWVJlYWNoIiwibnBjWFJlYWNoIiwic2V0SW50ZXJ2YWwiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJrZXlDb2RlIiwidG9nZ2xlUGF1c2UiLCJyZXNldCIsInRvZ2dsZVNvdW5kIiwicmVzdGFydEJ0biIsInBsYXlCdG4iLCJzdGFydEdhbWUiLCJzdGFydEluc3RydWN0aW9uIiwidW5sb2Nrc0F0IiwibGVmdEJ0biIsInJpZ2h0QnRuIiwicGxheWFibGVDYXJzIiwibm8iLCJpIiwib25jbGljayIsInF1ZXJ5U2VsZWN0b3IiLCJnYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwia2V5VXAiLCJrZXlEb3duIiwidG9nZ2xlIiwidG9nZ2xlUGxheSIsImJhY2tncm91bmRNdXNpYyIsImlzUGxheWluZyIsIm9ucGxheWluZyIsIm9ucGF1c2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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QixpQkFBdkIsRUFBMENFLFNBQTFDLENBQW9ESSxNQUFwRCxDQUEyRCxlQUEzRDtBQUNBQyw2REFBVTtBQUNYLEdBSEQ7O0FBSUFsQixZQUFVLENBQUNVLE9BQVgsR0FBcUIsWUFBVTtBQUM3QkUsUUFBSSxDQUFDZCxLQUFMO0FBQ0F0Qyx5QkFBcUIsQ0FBQ29ELElBQUksQ0FBQ2hFLElBQU4sQ0FBckI7QUFDRCxHQUhEOztBQUlBcUQsU0FBTyxDQUFDUyxPQUFSLEdBQWtCLFlBQVU7QUFDMUJFLFFBQUksQ0FBQ2YsV0FBTDtBQUNELEdBRkQ7QUFRRCxDQXpJRCxFOzs7Ozs7Ozs7OztBQ0hBLElBQU1zQixlQUFlLEdBQUd0SCxRQUFRLENBQUNLLGNBQVQsQ0FBd0Isa0JBQXhCLENBQXhCO0FBRUEsSUFBSWtILFNBQVMsR0FBRyxLQUFoQjs7QUFFQSxTQUFTRixVQUFULEdBQXNCO0FBQ3BCOztBQUNBLE1BQUlFLFNBQUosRUFBZTtBQUNiRCxtQkFBZSxDQUFDM0YsS0FBaEI7QUFDRCxHQUZELE1BRU87QUFDTDJGLG1CQUFlLENBQUN6RCxJQUFoQjtBQUNEO0FBQ0Y7O0FBQUE7O0FBRUR5RCxlQUFlLENBQUNFLFNBQWhCLEdBQTRCLFlBQVk7QUFDdEM7QUFDQUQsV0FBUyxHQUFHLElBQVo7QUFDRCxDQUhEOztBQUlBRCxlQUFlLENBQUNHLE9BQWhCLEdBQTBCLFlBQVk7QUFDcENGLFdBQVMsR0FBRyxLQUFaO0FBQ0QsQ0FGRDs7QUFLQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQUVOLFlBQVUsRUFBVkE7QUFBRixDQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKHBsYXllckNhcikge1xuICAgIHRoaXMuY2FyID0gcGxheWVyQ2FyO1xuICAgIHRoaXMuY2FyLnN0eWxlLnRvcCA9IFwiODAlXCI7XG4gICAgdGhpcy5jYXIuc3R5bGUubGVmdCA9IFwiMjAlXCI7XG4gICAgdGhpcy5jYXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saW5lXCIpLmZvckVhY2goIGVsID0+IGVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIgKTtcbiAgICB0aGlzLmdhbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY29udGFpbmVyXCIpO1xuICAgIHRoaXMuZ2FtZUNvbnRhaW5lcldpZHRoID0gcGFyc2VJbnQoXG4gICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmdhbWVDb250YWluZXIpLndpZHRoXG4gICAgKTtcbiAgICB0aGlzLmdhbWVDb250YWluZXJIZWlnaHQgPSBwYXJzZUludChcbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZ2FtZUNvbnRhaW5lcikuaGVpZ2h0XG4gICAgKTtcbiAgICB0aGlzLmNhcldpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLndpZHRoKTtcbiAgICB0aGlzLmNhckhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS5oZWlnaHQpO1xuICAgIHRoaXMucmVzdGFydENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGFydC1jb250YWluZXJcIik7XG4gICAgdGhpcy5wYXVzZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF1c2UtY29udGFpbmVyXCIpO1xuICAgIHRoaXMuc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlXCIpO1xuICAgIHRoaXMuaGlnaFNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoLXNjb3JlXCIpO1xuICAgIHRoaXMudG9wU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpZ2hTY29yZVwiKSB8fCAwO1xuICAgIHRoaXMuaGlnaFNjb3JlLmlubmVyVGV4dCA9IHRoaXMudG9wU2NvcmU7XG4gICAgdGhpcy5zY29yZUNvdW50ZXIgPSAwO1xuICAgIHRoaXMucG9pbnRTcGVlZCA9IDE7XG4gICAgdGhpcy5zcGVlZCA9IDQ7XG4gICAgdGhpcy5saW5lU3BlZWQgPSA1O1xuICAgIHRoaXMucGF1c2UgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmVSaWdodCA9IGZhbHNlO1xuICAgIHRoaXMubW92ZUxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmVVcCA9IGZhbHNlO1xuICAgIHRoaXMubW92ZURvd24gPSBmYWxzZTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5oYW5kbGluZyA9IDU7XG5cbiAgICB0aGlzLmNhcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcjFcIik7XG4gICAgdGhpcy5jYXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXIyXCIpO1xuICAgIHRoaXMuY2FyMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyM1wiKTtcbiAgICB0aGlzLmNhcjQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcjRcIik7XG5cbiAgICB0aGlzLmxpbmUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lMVwiKTtcbiAgICB0aGlzLmxpbmUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lMlwiKTtcbiAgICB0aGlzLmxpbmUzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lM1wiKTtcbiAgICB0aGlzLmxpbmU0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lNFwiKTtcbiAgICB0aGlzLmxpbmU1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lNVwiKTtcbiAgICB0aGlzLmxpbmU2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lNlwiKTtcbiAgICB0aGlzLmxpbmU3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lN1wiKTtcblxuICAgIHRoaXMuY3Jhc2ggPSBuZXcgQXVkaW8oXCIuL2Rpc3QvY3Jhc2gubXAzXCIpO1xuXG4gICAgdGhpcy5sb29wID0gdGhpcy5sb29wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRIaWdoU2NvcmUgPSB0aGlzLnNldEhpZ2hTY29yZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5rZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2FyRG93biA9IHRoaXMuY2FyRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXAgPSB0aGlzLnVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kb3duID0gdGhpcy5kb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5yaWdodCA9IHRoaXMucmlnaHQuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgcmVzZXQoKXtcbiAgICB0aGlzLnJlc3RhcnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHRoaXMuY2FyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB0aGlzLmNhci5zdHlsZS50b3AgPSBcIjgwJVwiO1xuICAgIHRoaXMuY2FyLnN0eWxlLmxlZnQgPSBcIjIwJVwiO1xuICAgIHRoaXMuc2NvcmVDb3VudGVyID0gMDtcbiAgICB0aGlzLnBvaW50U3BlZWQgPSAxO1xuICAgIHRoaXMuc3BlZWQgPSA0O1xuICAgIHRoaXMubGluZVNwZWVkID0gNTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5oYW5kbGluZyA9IDQ7XG4gICAgdGhpcy5jYXIxLnN0eWxlLnRvcCA9IFwiLTgwcHhcIjtcbiAgICB0aGlzLmNhcjIuc3R5bGUudG9wID0gXCItMjUwcHhcIjtcbiAgICB0aGlzLmNhcjMuc3R5bGUudG9wID0gXCItNDUwcHhcIjtcbiAgICB0aGlzLmNhcjQuc3R5bGUudG9wID0gXCItNjUwcHhcIjtcbiAgICB0aGlzLmNhcjEuc3R5bGUuZGlzcGxheSA9IFwiXCJcbiAgICB0aGlzLmNhcjIuc3R5bGUuZGlzcGxheSA9IFwiXCJcbiAgICB0aGlzLmNhcjMuc3R5bGUuZGlzcGxheSA9IFwiXCJcbiAgICB0aGlzLmNhcjQuc3R5bGUuZGlzcGxheSA9IFwiXCJcbiAgICB0aGlzLnNjb3JlLmlubmVyVGV4dCA9IFwiMFwiO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5ibGlua0VmZmVjdCk7XG5cbiAgfVxuXG4gIHRvZ2dsZVBhdXNlKCl7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlUmlnaHQpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZUxlZnQpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVVwKTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVEb3duKTtcbiAgICBpZiAodGhpcy5wYXVzZSl7XG4gICAgICB0aGlzLnBhdXNlID0gZmFsc2U7XG4gICAgICB0aGlzLnBhdXNlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGF1c2UgPSB0cnVlOyBcbiAgICAgIHRoaXMucGF1c2VDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH0gIFxuXG4gIH1cblxuICBsb29wKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY29sbGlzaW9uKHRoaXMuY2FyLCB0aGlzLmNhcjEpIHx8XG4gICAgICB0aGlzLmNvbGxpc2lvbih0aGlzLmNhciwgdGhpcy5jYXIyKSB8fFxuICAgICAgdGhpcy5jb2xsaXNpb24odGhpcy5jYXIsIHRoaXMuY2FyMykgfHxcbiAgICAgIHRoaXMuY29sbGlzaW9uKHRoaXMuY2FyLCB0aGlzLmNhcjQpXG4gICAgKSB7XG4gICAgICB0aGlzLmNyYXNoLnBsYXkoKTtcbiAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5sb3N0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zY29yZUNvdW50ZXIrKztcblxuICAgIGlmICh0aGlzLnNjb3JlQ291bnRlciAlIDIwID09IDApIHtcbiAgICAgIHNjb3JlLmlubmVyVGV4dCA9IHBhcnNlSW50KHNjb3JlLmlubmVyVGV4dCkgKyB0aGlzLnBvaW50U3BlZWQ7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgc3dpdGNoICh0aGlzLmNhci5pZFt0aGlzLmNhci5pZC5sZW5ndGggLSAxXSl7XG4gICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgdGhpcy5zY29yZS5pbm5lclRleHQgPSBwYXJzZUludCh0aGlzLnNjb3JlLmlubmVyVGV4dCkgKyAzO1xuICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgIHRoaXMuc2NvcmUuaW5uZXJUZXh0ID0gcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpICsgMztcbiAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICB0aGlzLnNjb3JlLmlubmVyVGV4dCA9IHBhcnNlSW50KHRoaXMuc2NvcmUuaW5uZXJUZXh0KSArIDIwO1xuICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgIHRoaXMuc2NvcmUuaW5uZXJUZXh0ID0gcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpICsgMjA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnNjb3JlQ291bnRlciAlIDUwMCA9PSAwICYmIHRoaXMuc3BlZWQgPD0gMTUpIHtcbiAgICAgIHRoaXMuc3BlZWQrKztcbiAgICAgIHRoaXMubGluZVNwZWVkKys7XG4gICAgICB0aGlzLnBvaW50U3BlZWQrKztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY29yZUNvdW50ZXIgJSAzMDAwID09IDAgJiYgdGhpcy5zcGVlZCA+IDE1KSB7XG4gICAgICB0aGlzLnNwZWVkKys7XG4gICAgICB0aGlzLmxpbmVTcGVlZCsrO1xuICAgICAgdGhpcy5wb2ludFNwZWVkKys7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnNjb3JlQ291bnRlciAlIDEyMDAgPT0gMCAmJiB0aGlzLmhhbmRsaW5nIDw9IDE1KSB7XG4gICAgICB0aGlzLmhhbmRsaW5nKys7XG4gICAgfVxuXG4gICAgdGhpcy5jYXJEb3duKHRoaXMuY2FyMSk7XG4gICAgdGhpcy5jYXJEb3duKHRoaXMuY2FyMik7XG4gICAgdGhpcy5jYXJEb3duKHRoaXMuY2FyMyk7XG4gICAgdGhpcy5jYXJEb3duKHRoaXMuY2FyNCk7XG5cbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTEpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lMik7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmUzKTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTQpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lNSk7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmU2KTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTcpO1xuXG4gICAgaWYgKCF0aGlzLnBhdXNlKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKTtcbiAgfVxuXG4gIGNhckRvd24oY2FyKSB7XG4gICAgbGV0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoY2FyKS50b3ApO1xuICAgIGlmIChwb3NpdGlvbiA+IHRoaXMuZ2FtZUNvbnRhaW5lckhlaWdodCkge1xuICAgICAgcG9zaXRpb24gPSAtMjAwO1xuICAgICAgY29uc3QgcG9zaXRpb25MZWZ0ID0gcGFyc2VJbnQoXG4gICAgICAgIE1hdGgucmFuZG9tKCkgKiAodGhpcy5nYW1lQ29udGFpbmVyV2lkdGggLSB0aGlzLmNhcldpZHRoIC0gMTApXG4gICAgICApO1xuICAgICAgY2FyLnN0eWxlLmxlZnQgPSBgJHtwb3NpdGlvbkxlZnR9cHhgO1xuICAgICAgY2FyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgIFwicmdiKFwiICtcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSArXG4gICAgICAgIFwiLFwiICtcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSArXG4gICAgICAgIFwiLFwiICtcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSArXG4gICAgICAgIFwiKVwiO1xuICAgIH1cbiAgICBjYXIuc3R5bGUudG9wID0gYCR7cG9zaXRpb24gKyB0aGlzLnNwZWVkfXB4YDtcbiAgfVxuXG4gIGxpbmVEb3duKGxpbmUpIHtcbiAgICBsZXQgcG9zaXRpb24gPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShsaW5lKS50b3ApO1xuICAgIGlmIChwb3NpdGlvbiA+IHRoaXMuZ2FtZUNvbnRhaW5lckhlaWdodCkge1xuICAgICAgcG9zaXRpb24gPSAtMzAwO1xuICAgIH1cbiAgICBsaW5lLnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uICsgdGhpcy5saW5lU3BlZWR9cHhgO1xuICB9XG5cbiAgY29sbGlzaW9uKHBsYXllckNhciwgbnBjQ2FyKSB7XG4gICAgY29uc3QgcGxheWVyc1RvcExlZnQgPSBwbGF5ZXJDYXIub2Zmc2V0TGVmdDtcbiAgICBjb25zdCB5MSA9IHBsYXllckNhci5vZmZzZXRUb3A7XG4gICAgY29uc3QgaDEgPSBwbGF5ZXJDYXIub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IHcxID0gcGxheWVyQ2FyLm9mZnNldFdpZHRoO1xuXG4gICAgY29uc3QgbnBjVG9wTGVmdCA9IG5wY0Nhci5vZmZzZXRMZWZ0O1xuICAgIGNvbnN0IHkyID0gbnBjQ2FyLm9mZnNldFRvcDtcbiAgICBjb25zdCBoMiA9IG5wY0Nhci5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgdzIgPSBucGNDYXIub2Zmc2V0V2lkdGg7XG5cbiAgICBjb25zdCBwbGF5ZXJzWVJlYWNoID0geTEgKyBoMSAtIDI7XG4gICAgY29uc3QgcGxheWVyc1hSZWFjaCA9IHBsYXllcnNUb3BMZWZ0ICsgdzEgKyA1O1xuICAgIGNvbnN0IG5wY1lSZWFjaCA9IHkyICsgaDIgLSAyO1xuICAgIGNvbnN0IG5wY1hSZWFjaCA9IG5wY1RvcExlZnQgKyB3MiArIDU7XG5cbiAgICBpZiAoXG4gICAgICBwbGF5ZXJzWVJlYWNoIDwgeTIgfHxcbiAgICAgIHkxID4gbnBjWVJlYWNoIHx8XG4gICAgICBwbGF5ZXJzWFJlYWNoIDwgbnBjVG9wTGVmdCB8fFxuICAgICAgcGxheWVyc1RvcExlZnQgPiBucGNYUmVhY2hcbiAgICApXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgdGhpcy5ibGlua0VmZmVjdCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgcGxheWVyQ2FyLnN0eWxlLmRpc3BsYXkgPSBwbGF5ZXJDYXIuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIiA/IFwiZmxleFwiIDogXCJub25lXCI7XG4gICAgICBucGNDYXIuc3R5bGUuZGlzcGxheSA9IG5wY0Nhci5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcbiAgICB9LCA1MDApO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbG9zdCgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVSaWdodCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlTGVmdCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlVXApO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZURvd24pO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gICAgdGhpcy5yZXN0YXJ0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB0aGlzLnNldEhpZ2hTY29yZSgpO1xuICB9XG5cbiAgc2V0SGlnaFNjb3JlKCkge1xuICAgIGlmIChwYXJzZUludCh0aGlzLnRvcFNjb3JlKSA8IHBhcnNlSW50KHRoaXMuc2NvcmUuaW5uZXJUZXh0KSkge1xuICAgICAgdGhpcy50b3BTY29yZSA9IHBhcnNlSW50KHRoaXMuc2NvcmUuaW5uZXJUZXh0KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlnaFNjb3JlXCIsIHBhcnNlSW50KHRoaXMuc2NvcmUuaW5uZXJUZXh0KSk7XG4gICAgfVxuICAgIHRoaXMuaGlnaFNjb3JlLmlubmVyVGV4dCA9IHRoaXMudG9wU2NvcmU7XG4gIH1cblxuICBrZXlEb3duKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5RG93bkhhbmRsZXIsIHRydWUpO1xuICB9XG4gIGtleVVwKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleVVwSGFuZGxlciwgdHJ1ZSk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmICF0aGlzLnBhdXNlKSB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICBpZiAoIXRoaXMubW92ZURvd24pIHtcbiAgICAgICAgICAgIHRoaXMubW92ZURvd24gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kb3duKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgaWYgKCF0aGlzLm1vdmVVcCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlVXAgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgIGlmICghdGhpcy5tb3ZlTGVmdCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlTGVmdCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxlZnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgIGlmICghdGhpcy5tb3ZlUmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVJpZ2h0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmlnaHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICB0aGlzLnRvZ2dsZVBhdXNlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmdhbWVPdmVyICYmIGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKTtcbiAgICB9XG4gIH1cbiAga2V5VXBIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZURvd24pO1xuICAgICAgICAgIHRoaXMubW92ZURvd24gPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVVwKTtcbiAgICAgICAgICB0aGlzLm1vdmVVcCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlTGVmdCk7XG4gICAgICAgICAgdGhpcy5tb3ZlTGVmdCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlUmlnaHQpO1xuICAgICAgICAgIHRoaXMubW92ZVJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxlZnQoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcikubGVmdCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIHBvc2l0aW9uID4gNykge1xuICAgICAgdGhpcy5jYXIuc3R5bGUubGVmdCA9IGAke3Bvc2l0aW9uIC0gdGhpcy5oYW5kbGluZ31weGA7XG4gICAgICB0aGlzLm1vdmVMZWZ0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubGVmdCk7XG4gICAgfVxuICB9XG5cbiAgcmlnaHQoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcikubGVmdCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIHBvc2l0aW9uIDwgdGhpcy5nYW1lQ29udGFpbmVyV2lkdGggLSB0aGlzLmNhcldpZHRoIC0gNykge1xuICAgICAgdGhpcy5jYXIuc3R5bGUubGVmdCA9IGAke3Bvc2l0aW9uICsgdGhpcy5oYW5kbGluZ31weGA7XG4gICAgICB0aGlzLm1vdmVSaWdodCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJpZ2h0KTtcbiAgICB9XG4gIH1cblxuICB1cCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS50b3ApO1xuICAgIGlmICghdGhpcy5nYW1lT3ZlciAmJiBwb3NpdGlvbiA+IDIwKSB7XG4gICAgICB0aGlzLnNjb3JlLmlubmVyVGV4dCA9IGAke3BhcnNlSW50KHRoaXMuc2NvcmUuaW5uZXJUZXh0KSArIDF9YDtcbiAgICAgIHRoaXMuY2FyLnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uIC0gM31weGA7XG4gICAgICB0aGlzLm1vdmVVcCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwKTtcbiAgICB9XG4gIH1cblxuICBkb3duKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLnRvcCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIHBvc2l0aW9uIDwgdGhpcy5nYW1lQ29udGFpbmVySGVpZ2h0IC0gdGhpcy5jYXJIZWlnaHQgLSAyKSB7XG4gICAgICAvLyB0aGlzLnNjb3JlLmlubmVyVGV4dCA9IGAke3BhcnNlSW50KHRoaXMuc2NvcmUuaW5uZXJUZXh0KSAtIDF9YDtcbiAgICAgIHRoaXMuY2FyLnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uICsgM31weGA7XG4gICAgICB0aGlzLm1vdmVEb3duID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZG93bik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiXG5pbXBvcnQgeyB0b2dnbGVQbGF5IH0gZnJvbSBcIi4vbXVzaWNcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgdG9nZ2xlU291bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm11c2ljXCIpO1xuICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXJ0XCIpO1xuICBjb25zdCBwbGF5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5XCIpO1xuICBjb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWdhbWVcIilcbiAgY29uc3Qgc3RhcnRJbnN0cnVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtaW5zdHJ1Y3Rpb25cIilcbiAgY29uc3QgdW5sb2Nrc0F0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1bmxvY2tzX2F0XCIpXG4gIGNvbnN0IGxlZnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtaWNvblwiKVxuICBjb25zdCByaWdodEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtaWNvblwiKVxuICBjb25zdCBwbGF5YWJsZUNhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXlhYmxlLWNhclwiKVxuICBjb25zdCBoaWdoU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2gtc2NvcmVcIik7XG4gIGNvbnN0IHRvcFNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaWdoU2NvcmVcIikgfHwgMDtcbiAgaGlnaFNjb3JlLmlubmVyVGV4dCA9IHRvcFNjb3JlO1xuICBjb25zdCBubyA9IG5ldyBBdWRpbyhcIi4vZGlzdC9uby5tcDNcIik7XG4gIFxuICBcbiAgbGV0IGkgPSAwO1xuICBwbGF5YWJsZUNhcnNbaV0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBcbiAgcmlnaHRCdG4ub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgdW5sb2Nrc0F0LmlubmVyVGV4dCA9IFwiXCI7XG4gICAgcGxheWFibGVDYXJzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgIGlmIChpID09PSBwbGF5YWJsZUNhcnMubGVuZ3RoIC0gMSkgaSA9IC0xO1xuICAgIGkrKztcblxuICAgIHN3aXRjaChpKXtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaWYgKHRvcFNjb3JlID49IDIwMDApe1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5sb2NrZWQke2kgKyAxfWApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmxvY2tzQXQuaW5uZXJUZXh0ID0gXCJVbmxvY2tzIGF0IDIwMDBcIjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaWYgKHRvcFNjb3JlID49IDIwMDApIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubG9ja2VkJHtpICsgMX1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5sb2Nrc0F0LmlubmVyVGV4dCA9IFwiVW5sb2NrcyBhdCAyMDAwXCI7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGlmICh0b3BTY29yZSA+PSA1MDAwKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxvY2tlZCR7aSArIDF9YCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVubG9ja3NBdC5pbm5lclRleHQgPSBcIlVubG9ja3MgYXQgNTAwMFwiO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2OlxuICAgICAgICBpZiAodG9wU2NvcmUgPj0gMTAwMDApIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubG9ja2VkJHtpICsgMX1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5sb2Nrc0F0LmlubmVyVGV4dCA9IFwiVW5sb2NrcyBhdCAxMDAwMFwiO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBwbGF5YWJsZUNhcnNbaV0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9XG5cbiAgbGVmdEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHVubG9ja3NBdC5pbm5lclRleHQgPSBcIlwiO1xuICAgIHBsYXlhYmxlQ2Fyc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICBpZiAoaSA9PT0gMCkgaSA9IHBsYXlhYmxlQ2Fycy5sZW5ndGg7XG4gICAgaS0tO1xuXG4gICAgc3dpdGNoIChpKSB7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGlmICh0b3BTY29yZSA+PSAyMDAwKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxvY2tlZCR7aSArIDF9YCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVubG9ja3NBdC5pbm5lclRleHQgPSBcIlVubG9ja3MgYXQgMjAwMFwiO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBpZiAodG9wU2NvcmUgPj0gMjAwMCkge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5sb2NrZWQke2kgKyAxfWApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmxvY2tzQXQuaW5uZXJUZXh0ID0gXCJVbmxvY2tzIGF0IDIwMDBcIjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgaWYgKHRvcFNjb3JlID49IDUwMDApIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubG9ja2VkJHtpICsgMX1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5sb2Nrc0F0LmlubmVyVGV4dCA9IFwiVW5sb2NrcyBhdCA1MDAwXCI7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIGlmICh0b3BTY29yZSA+PSAxMDAwMCkge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5sb2NrZWQke2kgKyAxfWApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmxvY2tzQXQuaW5uZXJUZXh0ID0gXCJVbmxvY2tzIGF0IDEwMDAwXCI7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHBsYXlhYmxlQ2Fyc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH1cbiAgbGV0IGdhbWU7XG4gIHN0YXJ0R2FtZS5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICBpZiAoKGkgPT09IDMgfHwgaSA9PT0gNCkgJiYgdG9wU2NvcmUgPCAyMDAwKXtcbiAgICAgIG5vLnBsYXkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKChpID09PSA1KSAmJiB0b3BTY29yZSA8IDUwMDApe1xuICAgICAgbm8ucGxheSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKGkgPT09IDYpICYmIHRvcFNjb3JlIDwgMTAwMDApIHtcbiAgICAgIG5vLnBsYXkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhcnRHYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBzdGFydEluc3RydWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBsZWZ0QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICByaWdodEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcGxheWFibGVDYXJzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzcGluXCIpO1xuICAgIGdhbWUgPSBuZXcgR2FtZShwbGF5YWJsZUNhcnNbaV0pO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lLmxvb3ApO1xuICAgIGdhbWUua2V5VXAoKTtcbiAgICBnYW1lLmtleURvd24oKTtcbiAgfVxuXG4gIHRvZ2dsZVNvdW5kLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtdm9sdW1lLW11dGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImZhLXZvbHVtZS1vZmZcIik7XG4gICAgdG9nZ2xlUGxheSgpO1xuICB9O1xuICByZXN0YXJ0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgIGdhbWUucmVzZXQoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZS5sb29wKTtcbiAgfTtcbiAgcGxheUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICBnYW1lLnRvZ2dsZVBhdXNlKCk7XG4gIH1cblxuICBcblxuICBcblxufSk7XG5cblxuXG4iLCJjb25zdCBiYWNrZ3JvdW5kTXVzaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmQtbXVzaWNcIik7XG5cbmxldCBpc1BsYXlpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcbiAgZGVidWdnZXJcbiAgaWYgKGlzUGxheWluZykge1xuICAgIGJhY2tncm91bmRNdXNpYy5wYXVzZSgpXG4gIH0gZWxzZSB7XG4gICAgYmFja2dyb3VuZE11c2ljLnBsYXkoKTtcbiAgfVxufTtcblxuYmFja2dyb3VuZE11c2ljLm9ucGxheWluZyA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWdnZXJcbiAgaXNQbGF5aW5nID0gdHJ1ZTtcbn07XG5iYWNrZ3JvdW5kTXVzaWMub25wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgaXNQbGF5aW5nID0gZmFsc2U7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0geyB0b2dnbGVQbGF5IH1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==