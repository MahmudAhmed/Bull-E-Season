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
        score.innerText = parseInt(score.innerText) + 1;
      }

      if (this.scoreCounter % 500 == 0) {
        this.speed++;
        this.lineSpeed++;
      }

      if (this.scoreCounter % 1000 == 0 && this.handling < 15) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tdXNpYy5qcyJdLCJuYW1lcyI6WyJHYW1lIiwiY2FyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdhbWVDb250YWluZXIiLCJnYW1lQ29udGFpbmVyV2lkdGgiLCJwYXJzZUludCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJ3aWR0aCIsImdhbWVDb250YWluZXJIZWlnaHQiLCJoZWlnaHQiLCJjYXJXaWR0aCIsImNhckhlaWdodCIsInJlc3RhcnRDb250YWluZXIiLCJyZXN0YXJ0QnRuIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJ0b3BTY29yZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbm5lclRleHQiLCJzY29yZUNvdW50ZXIiLCJzcGVlZCIsImxpbmVTcGVlZCIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwibW92ZVVwIiwibW92ZURvd24iLCJnYW1lT3ZlciIsImhhbmRsaW5nIiwiY2FyMSIsImNhcjIiLCJjYXIzIiwiY2FyNCIsImxpbmUxIiwibGluZTIiLCJsaW5lMyIsImxpbmU0IiwibGluZTUiLCJsaW5lNiIsImxpbmU3IiwiY3Jhc2giLCJBdWRpbyIsImxvb3AiLCJiaW5kIiwic2V0SGlnaFNjb3JlIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJjYXJEb3duIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiY29sbGlzaW9uIiwicGxheSIsImxvc3QiLCJsaW5lRG93biIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBvc2l0aW9uIiwidG9wIiwicG9zaXRpb25MZWZ0IiwiTWF0aCIsInJhbmRvbSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZmxvb3IiLCJsaW5lIiwicGxheWVyQ2FyIiwibnBjQ2FyIiwicGxheWVyc1RvcExlZnQiLCJvZmZzZXRMZWZ0IiwieTEiLCJvZmZzZXRUb3AiLCJoMSIsIm9mZnNldEhlaWdodCIsIncxIiwib2Zmc2V0V2lkdGgiLCJucGNUb3BMZWZ0IiwieTIiLCJoMiIsIncyIiwicGxheWVyc1lSZWFjaCIsInBsYXllcnNYUmVhY2giLCJucGNZUmVhY2giLCJucGNYUmVhY2giLCJzZXRJbnRlcnZhbCIsImRpc3BsYXkiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImtleUNvZGUiLCJsb2NhdGlvbiIsInJlbG9hZCIsInRvZ2dsZVNvdW5kIiwib25jbGljayIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVQbGF5IiwiZ2FtZSIsImtleVVwIiwia2V5RG93biIsImJhY2tncm91bmRNdXNpYyIsImlzUGxheWluZyIsInBhdXNlIiwib25wbGF5aW5nIiwib25wYXVzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFl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R0FBR3ZHLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBeEI7QUFFQSxJQUFJdUcsU0FBUyxHQUFHLEtBQWhCOztBQUVBLFNBQVNMLFVBQVQsR0FBc0I7QUFDcEI7O0FBQ0EsTUFBSUssU0FBSixFQUFlO0FBQ2JELG1CQUFlLENBQUNFLEtBQWhCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xGLG1CQUFlLENBQUNsRCxJQUFoQjtBQUNEO0FBQ0Y7O0FBQUE7O0FBRURrRCxlQUFlLENBQUNHLFNBQWhCLEdBQTRCLFlBQVk7QUFDdEM7QUFDQUYsV0FBUyxHQUFHLElBQVo7QUFDRCxDQUhEOztBQUlBRCxlQUFlLENBQUNJLE9BQWhCLEdBQTBCLFlBQVk7QUFDcENILFdBQVMsR0FBRyxLQUFaO0FBQ0QsQ0FGRDs7QUFLQUksTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQUVWLFlBQVUsRUFBVkE7QUFBRixDQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXItY2FyXCIpO1xuICAgIHRoaXMuZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jb250YWluZXJcIik7XG4gICAgdGhpcy5nYW1lQ29udGFpbmVyV2lkdGggPSBwYXJzZUludChcbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZ2FtZUNvbnRhaW5lcikud2lkdGhcbiAgICApO1xuICAgIHRoaXMuZ2FtZUNvbnRhaW5lckhlaWdodCA9IHBhcnNlSW50KFxuICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5nYW1lQ29udGFpbmVyKS5oZWlnaHRcbiAgICApO1xuICAgIHRoaXMuY2FyV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcikud2lkdGgpO1xuICAgIHRoaXMuY2FySGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLmhlaWdodCk7XG4gICAgdGhpcy5yZXN0YXJ0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXJ0LWNvbnRhaW5lclwiKTtcbiAgICB0aGlzLnJlc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnRcIik7XG4gICAgdGhpcy5zY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7XG4gICAgdGhpcy5oaWdoU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2gtc2NvcmVcIik7XG4gICAgdGhpcy50b3BTY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaFNjb3JlXCIpIHx8IDA7XG4gICAgdGhpcy5oaWdoU2NvcmUuaW5uZXJUZXh0ID0gdGhpcy50b3BTY29yZTtcbiAgICB0aGlzLnNjb3JlQ291bnRlciA9IDA7XG4gICAgdGhpcy5zcGVlZCA9IDQ7XG4gICAgdGhpcy5saW5lU3BlZWQgPSA1O1xuXG4gICAgdGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmVMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZlVXAgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmVEb3duID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuaGFuZGxpbmcgPSA1O1xuXG4gICAgdGhpcy5jYXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXIxXCIpO1xuICAgIHRoaXMuY2FyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyMlwiKTtcbiAgICB0aGlzLmNhcjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcjNcIik7XG4gICAgdGhpcy5jYXI0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXI0XCIpO1xuXG4gICAgdGhpcy5saW5lMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTFcIik7XG4gICAgdGhpcy5saW5lMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTJcIik7XG4gICAgdGhpcy5saW5lMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTNcIik7XG4gICAgdGhpcy5saW5lNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTRcIik7XG4gICAgdGhpcy5saW5lNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTVcIik7XG4gICAgdGhpcy5saW5lNiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTZcIik7XG4gICAgdGhpcy5saW5lNyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTdcIik7XG5cbiAgICB0aGlzLmNyYXNoID0gbmV3IEF1ZGlvKFwiLi9kaXN0L2NyYXNoLm1wM1wiKTtcblxuICAgIHRoaXMubG9vcCA9IHRoaXMubG9vcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0SGlnaFNjb3JlID0gdGhpcy5zZXRIaWdoU2NvcmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMua2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNhckRvd24gPSB0aGlzLmNhckRvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwID0gdGhpcy51cC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZG93biA9IHRoaXMuZG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmlnaHQgPSB0aGlzLnJpZ2h0LmJpbmQodGhpcyk7XG5cbiAgfVxuXG4gIGxvb3AoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jb2xsaXNpb24odGhpcy5jYXIsIHRoaXMuY2FyMSkgfHxcbiAgICAgIHRoaXMuY29sbGlzaW9uKHRoaXMuY2FyLCB0aGlzLmNhcjIpIHx8XG4gICAgICB0aGlzLmNvbGxpc2lvbih0aGlzLmNhciwgdGhpcy5jYXIzKSB8fFxuICAgICAgdGhpcy5jb2xsaXNpb24odGhpcy5jYXIsIHRoaXMuY2FyNClcbiAgICApIHtcbiAgICAgIHRoaXMuY3Jhc2gucGxheSgpO1xuICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICB0aGlzLmxvc3QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNjb3JlQ291bnRlcisrO1xuXG4gICAgaWYgKHRoaXMuc2NvcmVDb3VudGVyICUgMjAgPT0gMCkge1xuICAgICAgc2NvcmUuaW5uZXJUZXh0ID0gcGFyc2VJbnQoc2NvcmUuaW5uZXJUZXh0KSArIDE7XG4gICAgfVxuICAgIGlmICh0aGlzLnNjb3JlQ291bnRlciAlIDUwMCA9PSAwKSB7XG4gICAgICB0aGlzLnNwZWVkKys7XG4gICAgICB0aGlzLmxpbmVTcGVlZCsrO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNjb3JlQ291bnRlciAlIDEwMDAgPT0gMCAmJiB0aGlzLmhhbmRsaW5nIDwgMTUpIHtcbiAgICAgIHRoaXMuaGFuZGxpbmcrKztcbiAgICB9XG5cbiAgICB0aGlzLmNhckRvd24odGhpcy5jYXIxKTtcbiAgICB0aGlzLmNhckRvd24odGhpcy5jYXIyKTtcbiAgICB0aGlzLmNhckRvd24odGhpcy5jYXIzKTtcbiAgICB0aGlzLmNhckRvd24odGhpcy5jYXI0KTtcblxuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lMSk7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmUyKTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTMpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lNCk7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmU1KTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTYpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lNyk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKTtcbiAgfVxuXG4gIGNhckRvd24oY2FyKSB7XG4gICAgbGV0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoY2FyKS50b3ApO1xuICAgIGlmIChwb3NpdGlvbiA+IHRoaXMuZ2FtZUNvbnRhaW5lckhlaWdodCkge1xuICAgICAgcG9zaXRpb24gPSAtMjAwO1xuICAgICAgY29uc3QgcG9zaXRpb25MZWZ0ID0gcGFyc2VJbnQoXG4gICAgICAgIE1hdGgucmFuZG9tKCkgKiAodGhpcy5nYW1lQ29udGFpbmVyV2lkdGggLSB0aGlzLmNhcldpZHRoIC0gMTApXG4gICAgICApO1xuICAgICAgY2FyLnN0eWxlLmxlZnQgPSBgJHtwb3NpdGlvbkxlZnR9cHhgO1xuICAgICAgY2FyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgIFwicmdiKFwiICtcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSArXG4gICAgICAgIFwiLFwiICtcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSArXG4gICAgICAgIFwiLFwiICtcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSArXG4gICAgICAgIFwiKVwiO1xuICAgIH1cbiAgICBjYXIuc3R5bGUudG9wID0gYCR7cG9zaXRpb24gKyB0aGlzLnNwZWVkfXB4YDtcbiAgfVxuXG4gIGxpbmVEb3duKGxpbmUpIHtcbiAgICBsZXQgcG9zaXRpb24gPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShsaW5lKS50b3ApO1xuICAgIGlmIChwb3NpdGlvbiA+IHRoaXMuZ2FtZUNvbnRhaW5lckhlaWdodCkge1xuICAgICAgcG9zaXRpb24gPSAtMzAwO1xuICAgIH1cbiAgICBsaW5lLnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uICsgdGhpcy5saW5lU3BlZWR9cHhgO1xuICB9XG5cbiAgY29sbGlzaW9uKHBsYXllckNhciwgbnBjQ2FyKSB7XG4gICAgY29uc3QgcGxheWVyc1RvcExlZnQgPSBwbGF5ZXJDYXIub2Zmc2V0TGVmdDtcbiAgICBjb25zdCB5MSA9IHBsYXllckNhci5vZmZzZXRUb3A7XG4gICAgY29uc3QgaDEgPSBwbGF5ZXJDYXIub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IHcxID0gcGxheWVyQ2FyLm9mZnNldFdpZHRoO1xuXG4gICAgY29uc3QgbnBjVG9wTGVmdCA9IG5wY0Nhci5vZmZzZXRMZWZ0O1xuICAgIGNvbnN0IHkyID0gbnBjQ2FyLm9mZnNldFRvcDtcbiAgICBjb25zdCBoMiA9IG5wY0Nhci5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgdzIgPSBucGNDYXIub2Zmc2V0V2lkdGg7XG5cbiAgICBjb25zdCBwbGF5ZXJzWVJlYWNoID0geTEgKyBoMSAtIDI7XG4gICAgY29uc3QgcGxheWVyc1hSZWFjaCA9IHBsYXllcnNUb3BMZWZ0ICsgdzEgKyA1O1xuICAgIGNvbnN0IG5wY1lSZWFjaCA9IHkyICsgaDIgLSAyO1xuICAgIGNvbnN0IG5wY1hSZWFjaCA9IG5wY1RvcExlZnQgKyB3MiArIDU7XG5cbiAgICBpZiAoXG4gICAgICBwbGF5ZXJzWVJlYWNoIDwgeTIgfHxcbiAgICAgIHkxID4gbnBjWVJlYWNoIHx8XG4gICAgICBwbGF5ZXJzWFJlYWNoIDwgbnBjVG9wTGVmdCB8fFxuICAgICAgcGxheWVyc1RvcExlZnQgPiBucGNYUmVhY2hcbiAgICApXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICBwbGF5ZXJDYXIuc3R5bGUuZGlzcGxheSA9IHBsYXllckNhci5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiID8gXCJcIiA6IFwibm9uZVwiO1xuICAgICAgbnBjQ2FyLnN0eWxlLmRpc3BsYXkgPSBucGNDYXIuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIiA/IFwiXCIgOiBcIm5vbmVcIjtcbiAgICB9LCA1MDApO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbG9zdCgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVSaWdodCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlTGVmdCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlVXApO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZURvd24pO1xuICAgIHRoaXMucmVzdGFydENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgdGhpcy5zZXRIaWdoU2NvcmUoKTtcbiAgfVxuXG4gIHNldEhpZ2hTY29yZSgpIHtcbiAgICBpZiAocGFyc2VJbnQodGhpcy50b3BTY29yZSkgPCBwYXJzZUludCh0aGlzLnNjb3JlLmlubmVyVGV4dCkpIHtcbiAgICAgIHRoaXMudG9wU2NvcmUgPSBwYXJzZUludCh0aGlzLnNjb3JlLmlubmVyVGV4dCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhpZ2hTY29yZVwiLCBwYXJzZUludCh0aGlzLnNjb3JlLmlubmVyVGV4dCkpO1xuICAgIH1cbiAgICB0aGlzLmhpZ2hTY29yZS5pbm5lclRleHQgPSB0aGlzLnRvcFNjb3JlO1xuICB9XG5cbiAga2V5RG93bigpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyLCB0cnVlKTtcbiAgfVxuICBrZXlVcCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcEhhbmRsZXIsIHRydWUpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgaWYgKCF0aGlzLm1vdmVEb3duKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVEb3duID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZG93bik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgIGlmICghdGhpcy5tb3ZlVXApIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVVwID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICBpZiAoIXRoaXMubW92ZUxlZnQpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZUxlZnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sZWZ0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICBpZiAoIXRoaXMubW92ZVJpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVSaWdodCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJpZ2h0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmdhbWVPdmVyICYmIGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICB9XG4gIGtleVVwSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyKSB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVEb3duKTtcbiAgICAgICAgICB0aGlzLm1vdmVEb3duID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVVcCk7XG4gICAgICAgICAgdGhpcy5tb3ZlVXAgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZUxlZnQpO1xuICAgICAgICAgIHRoaXMubW92ZUxlZnQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVJpZ2h0KTtcbiAgICAgICAgICB0aGlzLm1vdmVSaWdodCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxlZnQoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcikubGVmdCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIHBvc2l0aW9uID4gNSkge1xuICAgICAgdGhpcy5jYXIuc3R5bGUubGVmdCA9IGAke3Bvc2l0aW9uIC0gdGhpcy5oYW5kbGluZ31weGA7XG4gICAgICB0aGlzLm1vdmVMZWZ0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubGVmdCk7XG4gICAgfVxuICB9XG5cbiAgcmlnaHQoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcikubGVmdCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIHBvc2l0aW9uIDwgdGhpcy5nYW1lQ29udGFpbmVyV2lkdGggLSB0aGlzLmNhcldpZHRoIC0gNykge1xuICAgICAgdGhpcy5jYXIuc3R5bGUubGVmdCA9IGAke3Bvc2l0aW9uICsgdGhpcy5oYW5kbGluZ31weGA7XG4gICAgICB0aGlzLm1vdmVSaWdodCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJpZ2h0KTtcbiAgICB9XG4gIH1cblxuICB1cCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS50b3ApO1xuICAgIGlmICghdGhpcy5nYW1lT3ZlciAmJiBwb3NpdGlvbiA+IDIwKSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbiAtIDN9cHhgO1xuICAgICAgdGhpcy5tb3ZlVXAgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cCk7XG4gICAgfVxuICB9XG5cbiAgZG93bigpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS50b3ApO1xuICAgIGlmICghdGhpcy5nYW1lT3ZlciAmJiBwb3NpdGlvbiA8IHRoaXMuZ2FtZUNvbnRhaW5lckhlaWdodCAtIHRoaXMuY2FySGVpZ2h0IC0gMikge1xuICAgICAgdGhpcy5jYXIuc3R5bGUudG9wID0gYCR7cG9zaXRpb24gKyAzfXB4YDtcbiAgICAgIHRoaXMubW92ZURvd24gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kb3duKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCJcbmltcG9ydCB7IHRvZ2dsZVBsYXkgfSBmcm9tIFwiLi9tdXNpY1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCB0b2dnbGVTb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXVzaWNcIik7XG4gIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnRcIik7XG5cbiAgdG9nZ2xlU291bmQub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtdm9sdW1lLW11dGVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImZhLXZvbHVtZS1vZmZcIik7XG4gICAgdG9nZ2xlUGxheSgpO1xuICB9O1xuXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICBnYW1lLmtleVVwKCk7XG4gIGdhbWUua2V5RG93bigpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZS5sb29wKTtcblxuICByZXN0YXJ0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfTtcbiAgXG5cbn0pO1xuXG5cblxuIiwiY29uc3QgYmFja2dyb3VuZE11c2ljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kLW11c2ljXCIpO1xuXG5sZXQgaXNQbGF5aW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHRvZ2dsZVBsYXkoKSB7XG4gIGRlYnVnZ2VyXG4gIGlmIChpc1BsYXlpbmcpIHtcbiAgICBiYWNrZ3JvdW5kTXVzaWMucGF1c2UoKVxuICB9IGVsc2Uge1xuICAgIGJhY2tncm91bmRNdXNpYy5wbGF5KCk7XG4gIH1cbn07XG5cbmJhY2tncm91bmRNdXNpYy5vbnBsYXlpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnZ2VyXG4gIGlzUGxheWluZyA9IHRydWU7XG59O1xuYmFja2dyb3VuZE11c2ljLm9ucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlzUGxheWluZyA9IGZhbHNlO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgdG9nZ2xlUGxheSB9XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=