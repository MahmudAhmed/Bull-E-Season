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
    key: "pause",
    value: function pause() {
      cancelAnimationFrame(this.moveRight);
      cancelAnimationFrame(this.moveLeft);
      cancelAnimationFrame(this.moveUp);
      cancelAnimationFrame(this.moveDown);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tdXNpYy5qcyJdLCJuYW1lcyI6WyJHYW1lIiwiY2FyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdhbWVDb250YWluZXIiLCJnYW1lQ29udGFpbmVyV2lkdGgiLCJwYXJzZUludCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJ3aWR0aCIsImdhbWVDb250YWluZXJIZWlnaHQiLCJoZWlnaHQiLCJjYXJXaWR0aCIsImNhckhlaWdodCIsInJlc3RhcnRDb250YWluZXIiLCJyZXN0YXJ0QnRuIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJ0b3BTY29yZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbm5lclRleHQiLCJzY29yZUNvdW50ZXIiLCJwb2ludFNwZWVkIiwic3BlZWQiLCJsaW5lU3BlZWQiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsIm1vdmVVcCIsIm1vdmVEb3duIiwiZ2FtZU92ZXIiLCJoYW5kbGluZyIsImNhcjEiLCJjYXIyIiwiY2FyMyIsImNhcjQiLCJsaW5lMSIsImxpbmUyIiwibGluZTMiLCJsaW5lNCIsImxpbmU1IiwibGluZTYiLCJsaW5lNyIsImNyYXNoIiwiQXVkaW8iLCJsb29wIiwiYmluZCIsInNldEhpZ2hTY29yZSIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwiY2FyRG93biIsInVwIiwiZG93biIsImxlZnQiLCJyaWdodCIsInN0eWxlIiwiZGlzcGxheSIsInRvcCIsImNsZWFySW50ZXJ2YWwiLCJibGlua0VmZmVjdCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY29sbGlzaW9uIiwicGxheSIsImxvc3QiLCJsaW5lRG93biIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBvc2l0aW9uIiwicG9zaXRpb25MZWZ0IiwiTWF0aCIsInJhbmRvbSIsImJhY2tncm91bmRDb2xvciIsImZsb29yIiwibGluZSIsInBsYXllckNhciIsIm5wY0NhciIsInBsYXllcnNUb3BMZWZ0Iiwib2Zmc2V0TGVmdCIsInkxIiwib2Zmc2V0VG9wIiwiaDEiLCJvZmZzZXRIZWlnaHQiLCJ3MSIsIm9mZnNldFdpZHRoIiwibnBjVG9wTGVmdCIsInkyIiwiaDIiLCJ3MiIsInBsYXllcnNZUmVhY2giLCJwbGF5ZXJzWFJlYWNoIiwibnBjWVJlYWNoIiwibnBjWFJlYWNoIiwic2V0SW50ZXJ2YWwiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJrZXlDb2RlIiwicmVzZXQiLCJ0b2dnbGVTb3VuZCIsImdhbWUiLCJvbmNsaWNrIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZVBsYXkiLCJrZXlVcCIsImtleURvd24iLCJiYWNrZ3JvdW5kTXVzaWMiLCJpc1BsYXlpbmciLCJwYXVzZSIsIm9ucGxheWluZyIsIm9ucGF1c2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEy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WixHQUFzQixZQUFXO0FBQy9CbEcsWUFBUSxDQUFDbUcsYUFBVCxDQUF1QixpQkFBdkIsRUFBMENDLFNBQTFDLENBQW9EQyxNQUFwRCxDQUEyRCxlQUEzRDtBQUNBQyw2REFBVTtBQUNYLEdBSEQ7O0FBSUF6RixZQUFVLENBQUNxRixPQUFYLEdBQXFCLFlBQVc7QUFDOUJELFFBQUksQ0FBQ0YsS0FBTDtBQUVBaEMseUJBQXFCLENBQUNrQyxJQUFJLENBQUN0RCxJQUFOLENBQXJCO0FBRUQsR0FMRDs7QUFPQW9CLHVCQUFxQixDQUFDa0MsSUFBSSxDQUFDdEQsSUFBTixDQUFyQixDQWhCZ0QsQ0FpQmhEOztBQUNFc0QsTUFBSSxDQUFDTSxLQUFMO0FBQ0FOLE1BQUksQ0FBQ08sT0FBTCxHQW5COEMsQ0FvQmhEO0FBSUQsQ0F4QkQsRTs7Ozs7Ozs7Ozs7QUNIQSxJQUFNQyxlQUFlLEdBQUd6RyxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLENBQXhCO0FBRUEsSUFBSXlHLFNBQVMsR0FBRyxLQUFoQjs7QUFFQSxTQUFTSixVQUFULEdBQXNCO0FBQ3BCOztBQUNBLE1BQUlJLFNBQUosRUFBZTtBQUNiRCxtQkFBZSxDQUFDRSxLQUFoQjtBQUNELEdBRkQsTUFFTztBQUNMRixtQkFBZSxDQUFDN0MsSUFBaEI7QUFDRDtBQUNGOztBQUFBOztBQUVENkMsZUFBZSxDQUFDRyxTQUFoQixHQUE0QixZQUFZO0FBQ3RDO0FBQ0FGLFdBQVMsR0FBRyxJQUFaO0FBQ0QsQ0FIRDs7QUFJQUQsZUFBZSxDQUFDSSxPQUFoQixHQUEwQixZQUFZO0FBQ3BDSCxXQUFTLEdBQUcsS0FBWjtBQUNELENBRkQ7O0FBS0FJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUFFVCxZQUFVLEVBQVZBO0FBQUYsQ0FBakIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLWNhclwiKTtcbiAgICB0aGlzLmdhbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY29udGFpbmVyXCIpO1xuICAgIHRoaXMuZ2FtZUNvbnRhaW5lcldpZHRoID0gcGFyc2VJbnQoXG4gICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmdhbWVDb250YWluZXIpLndpZHRoXG4gICAgKTtcbiAgICB0aGlzLmdhbWVDb250YWluZXJIZWlnaHQgPSBwYXJzZUludChcbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZ2FtZUNvbnRhaW5lcikuaGVpZ2h0XG4gICAgKTtcbiAgICB0aGlzLmNhcldpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLndpZHRoKTtcbiAgICB0aGlzLmNhckhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS5oZWlnaHQpO1xuICAgIHRoaXMucmVzdGFydENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGFydC1jb250YWluZXJcIik7XG4gICAgdGhpcy5yZXN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXJ0XCIpO1xuICAgIHRoaXMuc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlXCIpO1xuICAgIHRoaXMuaGlnaFNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoLXNjb3JlXCIpO1xuICAgIHRoaXMudG9wU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpZ2hTY29yZVwiKSB8fCAwO1xuICAgIHRoaXMuaGlnaFNjb3JlLmlubmVyVGV4dCA9IHRoaXMudG9wU2NvcmU7XG4gICAgdGhpcy5zY29yZUNvdW50ZXIgPSAwO1xuICAgIHRoaXMucG9pbnRTcGVlZCA9IDE7XG4gICAgdGhpcy5zcGVlZCA9IDQ7XG4gICAgdGhpcy5saW5lU3BlZWQgPSA1O1xuXG4gICAgdGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmVMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZlVXAgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmVEb3duID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuaGFuZGxpbmcgPSA1O1xuXG4gICAgdGhpcy5jYXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXIxXCIpO1xuICAgIHRoaXMuY2FyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyMlwiKTtcbiAgICB0aGlzLmNhcjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcjNcIik7XG4gICAgdGhpcy5jYXI0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXI0XCIpO1xuXG4gICAgdGhpcy5saW5lMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTFcIik7XG4gICAgdGhpcy5saW5lMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTJcIik7XG4gICAgdGhpcy5saW5lMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTNcIik7XG4gICAgdGhpcy5saW5lNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTRcIik7XG4gICAgdGhpcy5saW5lNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTVcIik7XG4gICAgdGhpcy5saW5lNiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTZcIik7XG4gICAgdGhpcy5saW5lNyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZTdcIik7XG5cbiAgICB0aGlzLmNyYXNoID0gbmV3IEF1ZGlvKFwiLi9kaXN0L2NyYXNoLm1wM1wiKTtcblxuICAgIHRoaXMubG9vcCA9IHRoaXMubG9vcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0SGlnaFNjb3JlID0gdGhpcy5zZXRIaWdoU2NvcmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMua2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNhckRvd24gPSB0aGlzLmNhckRvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwID0gdGhpcy51cC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZG93biA9IHRoaXMuZG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmlnaHQgPSB0aGlzLnJpZ2h0LmJpbmQodGhpcyk7XG5cbiAgfVxuXG4gIHJlc2V0KCl7XG4gICAgdGhpcy5yZXN0YXJ0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0aGlzLmNhci5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICB0aGlzLmNhci5zdHlsZS50b3AgPSBcIjgwJVwiO1xuICAgIHRoaXMuY2FyLnN0eWxlLmxlZnQgPSBcIjIwJVwiO1xuICAgIHRoaXMuc2NvcmVDb3VudGVyID0gMDtcbiAgICB0aGlzLnBvaW50U3BlZWQgPSAxO1xuICAgIHRoaXMuc3BlZWQgPSA0O1xuICAgIHRoaXMubGluZVNwZWVkID0gNTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5oYW5kbGluZyA9IDU7XG4gICAgdGhpcy5jYXIxLnN0eWxlLnRvcCA9IFwiLTgwcHhcIjtcbiAgICB0aGlzLmNhcjIuc3R5bGUudG9wID0gXCItMjUwcHhcIjtcbiAgICB0aGlzLmNhcjMuc3R5bGUudG9wID0gXCItNDUwcHhcIjtcbiAgICB0aGlzLmNhcjQuc3R5bGUudG9wID0gXCItNjUwcHhcIjtcbiAgICB0aGlzLmNhcjEuc3R5bGUuZGlzcGxheSA9IFwiXCJcbiAgICB0aGlzLmNhcjIuc3R5bGUuZGlzcGxheSA9IFwiXCJcbiAgICB0aGlzLmNhcjMuc3R5bGUuZGlzcGxheSA9IFwiXCJcbiAgICB0aGlzLmNhcjQuc3R5bGUuZGlzcGxheSA9IFwiXCJcbiAgICB0aGlzLnNjb3JlLmlubmVyVGV4dCA9IFwiMFwiO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5ibGlua0VmZmVjdCk7XG5cbiAgfVxuXG4gIHBhdXNlKCl7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlUmlnaHQpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZUxlZnQpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZVVwKTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVEb3duKTtcbiAgfVxuXG4gIGxvb3AoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jb2xsaXNpb24odGhpcy5jYXIsIHRoaXMuY2FyMSkgfHxcbiAgICAgIHRoaXMuY29sbGlzaW9uKHRoaXMuY2FyLCB0aGlzLmNhcjIpIHx8XG4gICAgICB0aGlzLmNvbGxpc2lvbih0aGlzLmNhciwgdGhpcy5jYXIzKSB8fFxuICAgICAgdGhpcy5jb2xsaXNpb24odGhpcy5jYXIsIHRoaXMuY2FyNClcbiAgICApIHtcbiAgICAgIHRoaXMuY3Jhc2gucGxheSgpO1xuICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICB0aGlzLmxvc3QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNjb3JlQ291bnRlcisrO1xuXG4gICAgaWYgKHRoaXMuc2NvcmVDb3VudGVyICUgMjAgPT0gMCkge1xuICAgICAgc2NvcmUuaW5uZXJUZXh0ID0gcGFyc2VJbnQoc2NvcmUuaW5uZXJUZXh0KSArIHRoaXMucG9pbnRTcGVlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2NvcmVDb3VudGVyICUgNTAwID09IDApIHtcbiAgICAgIHRoaXMuc3BlZWQrKztcbiAgICAgIHRoaXMubGluZVNwZWVkKys7XG4gICAgICB0aGlzLnBvaW50U3BlZWQrKztcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuc2NvcmVDb3VudGVyICUgMTAwMCA9PSAwICYmIHRoaXMuaGFuZGxpbmcgPCAyNSkge1xuICAgICAgdGhpcy5oYW5kbGluZysrO1xuICAgIH1cblxuICAgIHRoaXMuY2FyRG93bih0aGlzLmNhcjEpO1xuICAgIHRoaXMuY2FyRG93bih0aGlzLmNhcjIpO1xuICAgIHRoaXMuY2FyRG93bih0aGlzLmNhcjMpO1xuICAgIHRoaXMuY2FyRG93bih0aGlzLmNhcjQpO1xuXG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmUxKTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTIpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lMyk7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmU0KTtcbiAgICB0aGlzLmxpbmVEb3duKHRoaXMubGluZTUpO1xuICAgIHRoaXMubGluZURvd24odGhpcy5saW5lNik7XG4gICAgdGhpcy5saW5lRG93bih0aGlzLmxpbmU3KTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xuICB9XG5cbiAgY2FyRG93bihjYXIpIHtcbiAgICBsZXQgcG9zaXRpb24gPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYXIpLnRvcCk7XG4gICAgaWYgKHBvc2l0aW9uID4gdGhpcy5nYW1lQ29udGFpbmVySGVpZ2h0KSB7XG4gICAgICBwb3NpdGlvbiA9IC0yMDA7XG4gICAgICBjb25zdCBwb3NpdGlvbkxlZnQgPSBwYXJzZUludChcbiAgICAgICAgTWF0aC5yYW5kb20oKSAqICh0aGlzLmdhbWVDb250YWluZXJXaWR0aCAtIHRoaXMuY2FyV2lkdGggLSAxMClcbiAgICAgICk7XG4gICAgICBjYXIuc3R5bGUubGVmdCA9IGAke3Bvc2l0aW9uTGVmdH1weGA7XG4gICAgICBjYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgICAgXCJyZ2IoXCIgK1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICtcbiAgICAgICAgXCIsXCIgK1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICtcbiAgICAgICAgXCIsXCIgK1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpICtcbiAgICAgICAgXCIpXCI7XG4gICAgfVxuICAgIGNhci5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbiArIHRoaXMuc3BlZWR9cHhgO1xuICB9XG5cbiAgbGluZURvd24obGluZSkge1xuICAgIGxldCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGxpbmUpLnRvcCk7XG4gICAgaWYgKHBvc2l0aW9uID4gdGhpcy5nYW1lQ29udGFpbmVySGVpZ2h0KSB7XG4gICAgICBwb3NpdGlvbiA9IC0zMDA7XG4gICAgfVxuICAgIGxpbmUuc3R5bGUudG9wID0gYCR7cG9zaXRpb24gKyB0aGlzLmxpbmVTcGVlZH1weGA7XG4gIH1cblxuICBjb2xsaXNpb24ocGxheWVyQ2FyLCBucGNDYXIpIHtcbiAgICBjb25zdCBwbGF5ZXJzVG9wTGVmdCA9IHBsYXllckNhci5vZmZzZXRMZWZ0O1xuICAgIGNvbnN0IHkxID0gcGxheWVyQ2FyLm9mZnNldFRvcDtcbiAgICBjb25zdCBoMSA9IHBsYXllckNhci5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgdzEgPSBwbGF5ZXJDYXIub2Zmc2V0V2lkdGg7XG5cbiAgICBjb25zdCBucGNUb3BMZWZ0ID0gbnBjQ2FyLm9mZnNldExlZnQ7XG4gICAgY29uc3QgeTIgPSBucGNDYXIub2Zmc2V0VG9wO1xuICAgIGNvbnN0IGgyID0gbnBjQ2FyLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB3MiA9IG5wY0Nhci5vZmZzZXRXaWR0aDtcblxuICAgIGNvbnN0IHBsYXllcnNZUmVhY2ggPSB5MSArIGgxIC0gMjtcbiAgICBjb25zdCBwbGF5ZXJzWFJlYWNoID0gcGxheWVyc1RvcExlZnQgKyB3MSArIDU7XG4gICAgY29uc3QgbnBjWVJlYWNoID0geTIgKyBoMiAtIDI7XG4gICAgY29uc3QgbnBjWFJlYWNoID0gbnBjVG9wTGVmdCArIHcyICsgNTtcblxuICAgIGlmIChcbiAgICAgIHBsYXllcnNZUmVhY2ggPCB5MiB8fFxuICAgICAgeTEgPiBucGNZUmVhY2ggfHxcbiAgICAgIHBsYXllcnNYUmVhY2ggPCBucGNUb3BMZWZ0IHx8XG4gICAgICBwbGF5ZXJzVG9wTGVmdCA+IG5wY1hSZWFjaFxuICAgIClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLmJsaW5rRWZmZWN0ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICBwbGF5ZXJDYXIuc3R5bGUuZGlzcGxheSA9IHBsYXllckNhci5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiID8gXCJcIiA6IFwibm9uZVwiO1xuICAgICAgbnBjQ2FyLnN0eWxlLmRpc3BsYXkgPSBucGNDYXIuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIiA/IFwiXCIgOiBcIm5vbmVcIjtcbiAgICB9LCA1MDApO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbG9zdCgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVSaWdodCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlTGVmdCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlVXApO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZURvd24pO1xuICAgIHRoaXMucmVzdGFydENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgdGhpcy5zZXRIaWdoU2NvcmUoKTtcbiAgfVxuXG4gIHNldEhpZ2hTY29yZSgpIHtcbiAgICBpZiAocGFyc2VJbnQodGhpcy50b3BTY29yZSkgPCBwYXJzZUludCh0aGlzLnNjb3JlLmlubmVyVGV4dCkpIHtcbiAgICAgIHRoaXMudG9wU2NvcmUgPSBwYXJzZUludCh0aGlzLnNjb3JlLmlubmVyVGV4dCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhpZ2hTY29yZVwiLCBwYXJzZUludCh0aGlzLnNjb3JlLmlubmVyVGV4dCkpO1xuICAgIH1cbiAgICB0aGlzLmhpZ2hTY29yZS5pbm5lclRleHQgPSB0aGlzLnRvcFNjb3JlO1xuICB9XG5cbiAga2V5RG93bigpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyLCB0cnVlKTtcbiAgfVxuICBrZXlVcCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcEhhbmRsZXIsIHRydWUpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRlYnVnZ2VyXG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyKSB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICBpZiAoIXRoaXMubW92ZURvd24pIHtcbiAgICAgICAgICAgIHRoaXMubW92ZURvd24gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kb3duKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgaWYgKCF0aGlzLm1vdmVVcCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlVXAgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgIGlmICghdGhpcy5tb3ZlTGVmdCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlTGVmdCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxlZnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgIGlmICghdGhpcy5tb3ZlUmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVJpZ2h0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmlnaHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIgJiYgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xuICAgIH1cbiAgfVxuICBrZXlVcEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlRG93bik7XG4gICAgICAgICAgdGhpcy5tb3ZlRG93biA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlVXApO1xuICAgICAgICAgIHRoaXMubW92ZVVwID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVMZWZ0KTtcbiAgICAgICAgICB0aGlzLm1vdmVMZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm1vdmVSaWdodCk7XG4gICAgICAgICAgdGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGVmdCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS5sZWZ0KTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgcG9zaXRpb24gPiA3KSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24gLSB0aGlzLmhhbmRsaW5nfXB4YDtcbiAgICAgIHRoaXMubW92ZUxlZnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sZWZ0KTtcbiAgICB9XG4gIH1cblxuICByaWdodCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyKS5sZWZ0KTtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgcG9zaXRpb24gPCB0aGlzLmdhbWVDb250YWluZXJXaWR0aCAtIHRoaXMuY2FyV2lkdGggLSA3KSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24gKyB0aGlzLmhhbmRsaW5nfXB4YDtcbiAgICAgIHRoaXMubW92ZVJpZ2h0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIHVwKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLnRvcCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIHBvc2l0aW9uID4gMjApIHtcbiAgICAgIHRoaXMuY2FyLnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uIC0gM31weGA7XG4gICAgICB0aGlzLm1vdmVVcCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwKTtcbiAgICB9XG4gIH1cblxuICBkb3duKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jYXIpLnRvcCk7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyICYmIHBvc2l0aW9uIDwgdGhpcy5nYW1lQ29udGFpbmVySGVpZ2h0IC0gdGhpcy5jYXJIZWlnaHQgLSAyKSB7XG4gICAgICB0aGlzLmNhci5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbiArIDN9cHhgO1xuICAgICAgdGhpcy5tb3ZlRG93biA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRvd24pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIlxuaW1wb3J0IHsgdG9nZ2xlUGxheSB9IGZyb20gXCIuL211c2ljXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZVNvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtdXNpY1wiKTtcbiAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGFydFwiKTtcbiAgLy8gcnVuR2FtZSgpO1xuICBsZXQgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gIHRvZ2dsZVNvdW5kLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLXZvbHVtZS1tdXRlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJmYS12b2x1bWUtb2ZmXCIpO1xuICAgIHRvZ2dsZVBsYXkoKTtcbiAgfTtcbiAgcmVzdGFydEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgZ2FtZS5yZXNldCgpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWUubG9vcCk7XG5cbiAgfTtcblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZS5sb29wKTtcbiAgLy8gZnVuY3Rpb24gcnVuR2FtZSgpe1xuICAgIGdhbWUua2V5VXAoKTtcbiAgICBnYW1lLmtleURvd24oKTtcbiAgLy8gfVxuXG4gIFxuXG59KTtcblxuXG5cbiIsImNvbnN0IGJhY2tncm91bmRNdXNpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZC1tdXNpY1wiKTtcblxubGV0IGlzUGxheWluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiB0b2dnbGVQbGF5KCkge1xuICBkZWJ1Z2dlclxuICBpZiAoaXNQbGF5aW5nKSB7XG4gICAgYmFja2dyb3VuZE11c2ljLnBhdXNlKClcbiAgfSBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kTXVzaWMucGxheSgpO1xuICB9XG59O1xuXG5iYWNrZ3JvdW5kTXVzaWMub25wbGF5aW5nID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1Z2dlclxuICBpc1BsYXlpbmcgPSB0cnVlO1xufTtcbmJhY2tncm91bmRNdXNpYy5vbnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICBpc1BsYXlpbmcgPSBmYWxzZTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7IHRvZ2dsZVBsYXkgfVxuXG4iXSwic291cmNlUm9vdCI6IiJ9