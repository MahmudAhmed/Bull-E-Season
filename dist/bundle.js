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
    this.restartBtn = document.getElementById("restart");
    this.score = document.getElementById("score");
    this.highScore = document.getElementById("high-score");
    this.topScore = localStorage.getItem("highScore") || 0;
    this.highScore.innerText = this.topScore;
    this.scoreCounter = 0;
    this.pointSpeed = 1;
    this.speed = 4;
    this.lineSpeed = 5;
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
      requestAnimationFrame(this.loop);
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
      setInterval(function () {
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

      if (!this.gameOver) {
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

          default:
            return;
        }
      }

      if (this.gameOver && event.keyCode === 13) {
        debugger;
        location.reload();
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

      if (!this.gameOver && position > 5) {
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

  toggleSound.onclick = function () {
    document.querySelector(".fa-volume-mute").classList.toggle("fa-volume-off");
    Object(_music__WEBPACK_IMPORTED_MODULE_1__["togglePlay"])();
  };

  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
  game.keyUp();
  game.keyDown();
  requestAnimationFrame(game.loop);

  restartBtn.onclick = function () {
    location.reload();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tdXNpYy5qcyJdLCJuYW1lcyI6WyJHYW1lIiwiY2FyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdhbWVDb250YWluZXIiLCJnYW1lQ29udGFpbmVyV2lkdGgiLCJwYXJzZUludCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJ3aWR0aCIsImdhbWVDb250YWluZXJIZWlnaHQiLCJoZWlnaHQiLCJjYXJXaWR0aCIsImNhckhlaWdodCIsInJlc3RhcnRDb250YWluZXIiLCJyZXN0YXJ0QnRuIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJ0b3BTY29yZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbm5lclRleHQiLCJzY29yZUNvdW50ZXIiLCJwb2ludFNwZWVkIiwic3BlZWQiLCJsaW5lU3BlZWQiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsIm1vdmVVcCIsIm1vdmVEb3duIiwiZ2FtZU92ZXIiLCJoYW5kbGluZyIsImNhcjEiLCJjYXIyIiwiY2FyMyIsImNhcjQiLCJsaW5lMSIsImxpbmUyIiwibGluZTMiLCJsaW5lNCIsImxpbmU1IiwibGluZTYiLCJsaW5lNyIsImNyYXNoIiwiQXVkaW8iLCJsb29wIiwiYmluZCIsInNldEhpZ2hTY29yZSIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwiY2FyRG93biIsInVwIiwiZG93biIsImxlZnQiLCJyaWdodCIsImNvbGxpc2lvbiIsInBsYXkiLCJsb3N0IiwibGluZURvd24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwb3NpdGlvbiIsInRvcCIsInBvc2l0aW9uTGVmdCIsIk1hdGgiLCJyYW5kb20iLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImZsb29yIiwibGluZSIsInBsYXllckNhciIsIm5wY0NhciIsInBsYXllcnNUb3BMZWZ0Iiwib2Zmc2V0TGVmdCIsInkxIiwib2Zmc2V0VG9wIiwiaDEiLCJvZmZzZXRIZWlnaHQiLCJ3MSIsIm9mZnNldFdpZHRoIiwibnBjVG9wTGVmdCIsInkyIiwiaDIiLCJ3MiIsInBsYXllcnNZUmVhY2giLCJwbGF5ZXJzWFJlYWNoIiwibnBjWVJlYWNoIiwibnBjWFJlYWNoIiwic2V0SW50ZXJ2YWwiLCJkaXNwbGF5IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJrZXlDb2RlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJ0b2dnbGVTb3VuZCIsIm9uY2xpY2siLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlUGxheSIsImdhbWUiLCJrZXlVcCIsImtleURvd24iLCJiYWNrZ3JvdW5kTXVzaWMiLCJpc1BsYXlpbmciLCJwYXVzZSIsIm9ucGxheWluZyIsIm9ucGF1c2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2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QVEsQ0FBQ0MsTUFBVDtBQUNELEdBRkQ7QUFLRCxDQW5CRCxFOzs7Ozs7Ozs7OztBQ0hBLElBQU1VLGVBQWUsR0FBR3hHLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBeEI7QUFFQSxJQUFJd0csU0FBUyxHQUFHLEtBQWhCOztBQUVBLFNBQVNMLFVBQVQsR0FBc0I7QUFDcEI7O0FBQ0EsTUFBSUssU0FBSixFQUFlO0FBQ2JELG1CQUFlLENBQUNFLEtBQWhCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xGLG1CQUFlLENBQUNsRCxJQUFoQjtBQUNEO0FBQ0Y7O0FBQUE7O0FBRURrRCxlQUFlLENBQUNHLFNBQWhCLEdBQTRCLFlBQVk7QUFDdEM7QUFDQUYsV0FBUyxHQUFHLElBQVo7QUFDRCxDQUhEOztBQUlBRCxlQUFlLENBQUNJLE9BQWhCLEdBQTBCLFlBQVk7QUFDcENILFdBQVMsR0FBRyxLQUFaO0FBQ0QsQ0FGRDs7QUFLQUksTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQUVWLFlBQVUsRUFBVkE7QUFBRixDQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXItY2FyXCIpO1xuICAgIHRoaXMuZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jb250YWluZXJcIik7XG4gICAgdGhpcy5nYW1lQ29udGFpbmVyV2lkdGggPSBwYXJzZUludChcbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZ2FtZUNvbnRhaW5lcikud2lkdGhcbiAgICApO1xuICAgIHRoaXMuZ2FtZUNvbnRhaW5lckhlaWdodCA9IHBhcnNlSW50KFxuICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5nYW1lQ29udGFpbmVyKS5oZWlnaHRcbiAgICApO1xuICAgIHRoaXMuY2FyV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcikud2lkdGgpO1xuICAgIHRoaXMuY2FySGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLmhlaWdodCk7XG4gICAgdGhpcy5yZXN0YXJ0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXJ0LWNvbnRhaW5lclwiKTtcbiAgICB0aGlzLnJlc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnRcIik7XG4gICAgdGhpcy5zY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7XG4gICAgdGhpcy5oaWdoU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2gtc2NvcmVcIik7XG4gICAgdGhpcy50b3BTY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaFNjb3JlXCIpIHx8IDA7XG4gICAgdGhpcy5oaWdoU2NvcmUuaW5uZXJUZXh0ID0gdGhpcy50b3BTY29yZTtcbiAgICB0aGlzLnNjb3JlQ291bnRlciA9IDA7XG4gICAgdGhpcy5wb2ludFNwZWVkID0gMTtcbiAgICB0aGlzLnNwZWVkID0gNDtcbiAgICB0aGlzLmxpbmVTcGVlZCA9IDU7XG5cbiAgICB0aGlzLm1vdmVSaWdodCA9IGZhbHNlO1xuICAgIHRoaXMubW92ZUxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmVVcCA9IGZhbHNlO1xuICAgIHRoaXMubW92ZURvd24gPSBmYWxzZTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5oYW5kbGluZyA9IDU7XG5cbiAgICB0aGlzLmNhcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcjFcIik7XG4gICAgdGhpcy5jYXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXIyXCIpO1xuICAgIHRoaXMuY2FyMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyM1wiKTtcbiAgICB0aGlzLmNhcjQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcjRcIik7XG5cbiAgICB0aGlzLmxpbmUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lMVwiKTtcbiAgICB0aGlzLmxpbmUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lMlwiKTtcbiAgICB0aGlzLmxpbmUzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lM1wiKTtcbiAgICB0aGlzLmxpbmU0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lNFwiKTtcbiAgICB0aGlzLmxpbmU1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lNVwiKTtcbiAgICB0aGlzLmxpbmU2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lNlwiKTtcbiAgICB0aGlzLmxpbmU3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lN1wiKTtcblxuICAgIHRoaXMuY3Jhc2ggPSBuZXcgQXVkaW8oXCIuL2Rpc3QvY3Jhc2gubXAzXCIpO1xuXG4gICAgdGhpcy5sb29wID0gdGhpcy5sb29wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRIaWdoU2NvcmUgPSB0aGlzLnNldEhpZ2hTY29yZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5rZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2FyRG93biA9IHRoaXMuY2FyRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXAgPSB0aGlzLnVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kb3duID0gdGhpcy5kb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5yaWdodCA9IHRoaXMucmlnaHQuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgbG9vcCgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNvbGxpc2lvbih0aGlzLmNhciwgdGhpcy5jYXIxKSB8fFxuICAgICAgdGhpcy5jb2xsaXNpb24odGhpcy5jYXIsIHRoaXMuY2FyMikgfHxcbiAgICAgIHRoaXMuY29sbGlzaW9uKHRoaXMuY2FyLCB0aGlzLmNhcjMpIHx8XG4gICAgICB0aGlzLmNvbGxpc2lvbih0aGlzLmNhciwgdGhpcy5jYXI0KVxuICAgICkge1xuICAgICAgdGhpcy5jcmFzaC5wbGF5KCk7XG4gICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9zdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2NvcmVDb3VudGVyKys7XG5cbiAgICBpZiAodGhpcy5zY29yZUNvdW50ZXIgJSAyMCA9PSAwKSB7XG4gICAgICBzY29yZS5pbm5lclRleHQgPSBwYXJzZUludChzY29yZS5pbm5lclRleHQpICsgdGhpcy5wb2ludFNwZWVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5zY29yZUNvdW50ZXIgJSA1MDAgPT0gMCkge1xuICAgICAgdGhpcy5zcGVlZCsrO1xuICAgICAgdGhpcy5saW5lU3BlZWQrKztcbiAgICAgIHRoaXMucG9pbnRTcGVlZCsrO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5zY29yZUNvdW50ZXIgJSAxMDAwID09IDAgJiYgdGhpcy5oYW5kbGluZyA8IDI1KSB7XG4gICAgICB0aGlzLmhhbmRsaW5nKys7XG4gICAgfVxuXG4gICAgdGhpcy5jYXJEb3duKHRoaXMuY2FyMSk7XG4gICAgdGhpcy5jYXJEb3duKHRoaXMuY2FyMik7XG4gICAgdGhpcy5jYXJEb3duKHRoaXMuY2FyMyk7XG4gICAgdGhpcy5jYXJEb3duKHRoaXMuY2FyNCk7XG5cbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTEpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lMik7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmUzKTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTQpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lNSk7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmU2KTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTcpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gIH1cblxuICBjYXJEb3duKGNhcikge1xuICAgIGxldCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNhcikudG9wKTtcbiAgICBpZiAocG9zaXRpb24gPiB0aGlzLmdhbWVDb250YWluZXJIZWlnaHQpIHtcbiAgICAgIHBvc2l0aW9uID0gLTIwMDtcbiAgICAgIGNvbnN0IHBvc2l0aW9uTGVmdCA9IHBhcnNlSW50KFxuICAgICAgICBNYXRoLnJhbmRvbSgpICogKHRoaXMuZ2FtZUNvbnRhaW5lcldpZHRoIC0gdGhpcy5jYXJXaWR0aCAtIDEwKVxuICAgICAgKTtcbiAgICAgIGNhci5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb25MZWZ0fXB4YDtcbiAgICAgIGNhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICBcInJnYihcIiArXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgK1xuICAgICAgICBcIixcIiArXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgK1xuICAgICAgICBcIixcIiArXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgK1xuICAgICAgICBcIilcIjtcbiAgICB9XG4gICAgY2FyLnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uICsgdGhpcy5zcGVlZH1weGA7XG4gIH1cblxuICBsaW5lRG93bihsaW5lKSB7XG4gICAgbGV0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUobGluZSkudG9wKTtcbiAgICBpZiAocG9zaXRpb24gPiB0aGlzLmdhbWVDb250YWluZXJIZWlnaHQpIHtcbiAgICAgIHBvc2l0aW9uID0gLTMwMDtcbiAgICB9XG4gICAgbGluZS5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbiArIHRoaXMubGluZVNwZWVkfXB4YDtcbiAgfVxuXG4gIGNvbGxpc2lvbihwbGF5ZXJDYXIsIG5wY0Nhcikge1xuICAgIGNvbnN0IHBsYXllcnNUb3BMZWZ0ID0gcGxheWVyQ2FyLm9mZnNldExlZnQ7XG4gICAgY29uc3QgeTEgPSBwbGF5ZXJDYXIub2Zmc2V0VG9wO1xuICAgIGNvbnN0IGgxID0gcGxheWVyQ2FyLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB3MSA9IHBsYXllckNhci5vZmZzZXRXaWR0aDtcblxuICAgIGNvbnN0IG5wY1RvcExlZnQgPSBucGNDYXIub2Zmc2V0TGVmdDtcbiAgICBjb25zdCB5MiA9IG5wY0Nhci5vZmZzZXRUb3A7XG4gICAgY29uc3QgaDIgPSBucGNDYXIub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IHcyID0gbnBjQ2FyLm9mZnNldFdpZHRoO1xuXG4gICAgY29uc3QgcGxheWVyc1lSZWFjaCA9IHkxICsgaDEgLSAyO1xuICAgIGNvbnN0IHBsYXllcnNYUmVhY2ggPSBwbGF5ZXJzVG9wTGVmdCArIHcxICsgNTtcbiAgICBjb25zdCBucGNZUmVhY2ggPSB5MiArIGgyIC0gMjtcbiAgICBjb25zdCBucGNYUmVhY2ggPSBucGNUb3BMZWZ0ICsgdzIgKyA1O1xuXG4gICAgaWYgKFxuICAgICAgcGxheWVyc1lSZWFjaCA8IHkyIHx8XG4gICAgICB5MSA+IG5wY1lSZWFjaCB8fFxuICAgICAgcGxheWVyc1hSZWFjaCA8IG5wY1RvcExlZnQgfHxcbiAgICAgIHBsYXllcnNUb3BMZWZ0ID4gbnBjWFJlYWNoXG4gICAgKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgcGxheWVyQ2FyLnN0eWxlLmRpc3BsYXkgPSBwbGF5ZXJDYXIuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIiA/IFwiXCIgOiBcIm5vbmVcIjtcbiAgICAgIG5wY0Nhci5zdHlsZS5kaXNwbGF5ID0gbnBjQ2FyLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIgPyBcIlwiIDogXCJub25lXCI7XG4gICAgfSwgNTAwKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGxvc3QoKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlUmlnaHQpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZUxlZnQpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVVwKTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVEb3duKTtcbiAgICB0aGlzLnJlc3RhcnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHRoaXMuc2V0SGlnaFNjb3JlKCk7XG4gIH1cblxuICBzZXRIaWdoU2NvcmUoKSB7XG4gICAgaWYgKHBhcnNlSW50KHRoaXMudG9wU2NvcmUpIDwgcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpKSB7XG4gICAgICB0aGlzLnRvcFNjb3JlID0gcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoU2NvcmVcIiwgcGFyc2VJbnQodGhpcy5zY29yZS5pbm5lclRleHQpKTtcbiAgICB9XG4gICAgdGhpcy5oaWdoU2NvcmUuaW5uZXJUZXh0ID0gdGhpcy50b3BTY29yZTtcbiAgfVxuXG4gIGtleURvd24oKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlciwgdHJ1ZSk7XG4gIH1cbiAga2V5VXAoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5VXBIYW5kbGVyLCB0cnVlKTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgIGlmICghdGhpcy5tb3ZlRG93bikge1xuICAgICAgICAgICAgdGhpcy5tb3ZlRG93biA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRvd24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICBpZiAoIXRoaXMubW92ZVVwKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVVcCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgaWYgKCF0aGlzLm1vdmVMZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVMZWZ0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubGVmdCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgaWYgKCF0aGlzLm1vdmVSaWdodCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlUmlnaHQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yaWdodCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5nYW1lT3ZlciAmJiBldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgZGVidWdnZXJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfVxuICBrZXlVcEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlRG93bik7XG4gICAgICAgICAgdGhpcy5tb3ZlRG93biA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlVXApO1xuICAgICAgICAgIHRoaXMubW92ZVVwID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVMZWZ0KTtcbiAgICAgICAgICB0aGlzLm1vdmVMZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVSaWdodCk7XG4gICAgICAgICAgdGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGVmdCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS5sZWZ0KTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgcG9zaXRpb24gPiA1KSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24gLSB0aGlzLmhhbmRsaW5nfXB4YDtcbiAgICAgIHRoaXMubW92ZUxlZnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sZWZ0KTtcbiAgICB9XG4gIH1cblxuICByaWdodCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS5sZWZ0KTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgcG9zaXRpb24gPCB0aGlzLmdhbWVDb250YWluZXJXaWR0aCAtIHRoaXMuY2FyV2lkdGggLSA3KSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24gKyB0aGlzLmhhbmRsaW5nfXB4YDtcbiAgICAgIHRoaXMubW92ZVJpZ2h0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIHVwKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLnRvcCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIHBvc2l0aW9uID4gMjApIHtcbiAgICAgIHRoaXMuY2FyLnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uIC0gM31weGA7XG4gICAgICB0aGlzLm1vdmVVcCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwKTtcbiAgICB9XG4gIH1cblxuICBkb3duKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLnRvcCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIHBvc2l0aW9uIDwgdGhpcy5nYW1lQ29udGFpbmVySGVpZ2h0IC0gdGhpcy5jYXJIZWlnaHQgLSAyKSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbiArIDN9cHhgO1xuICAgICAgdGhpcy5tb3ZlRG93biA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRvd24pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIlxuaW1wb3J0IHsgdG9nZ2xlUGxheSB9IGZyb20gXCIuL211c2ljXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZVNvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtdXNpY1wiKTtcbiAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGFydFwiKTtcblxuICB0b2dnbGVTb3VuZC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYS12b2x1bWUtbXV0ZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtdm9sdW1lLW9mZlwiKTtcbiAgICB0b2dnbGVQbGF5KCk7XG4gIH07XG5cbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gIGdhbWUua2V5VXAoKTtcbiAgZ2FtZS5rZXlEb3duKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lLmxvb3ApO1xuXG4gIHJlc3RhcnRCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9O1xuICBcblxufSk7XG5cblxuXG4iLCJjb25zdCBiYWNrZ3JvdW5kTXVzaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmQtbXVzaWNcIik7XG5cbmxldCBpc1BsYXlpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcbiAgZGVidWdnZXJcbiAgaWYgKGlzUGxheWluZykge1xuICAgIGJhY2tncm91bmRNdXNpYy5wYXVzZSgpXG4gIH0gZWxzZSB7XG4gICAgYmFja2dyb3VuZE11c2ljLnBsYXkoKTtcbiAgfVxufTtcblxuYmFja2dyb3VuZE11c2ljLm9ucGxheWluZyA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWdnZXJcbiAgaXNQbGF5aW5nID0gdHJ1ZTtcbn07XG5iYWNrZ3JvdW5kTXVzaWMub25wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgaXNQbGF5aW5nID0gZmFsc2U7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0geyB0b2dnbGVQbGF5IH1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==