!function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t){const i=document.getElementById("background-music");let n=!1;i.onplaying=function(){n=!0},i.onpause=function(){n=!1},e.exports={togglePlay:function(){n?i.pause():i.play()}}},function(e,t,i){"use strict";i.r(t);var n=class{constructor(e){this.car=e,this.car.style.top="80%",this.car.style.left="20%",this.car.style.display="flex",document.querySelectorAll(".line").forEach(e=>e.style.display="block"),this.gameContainer=document.getElementById("game-container"),this.gameContainerWidth=parseInt(window.getComputedStyle(this.gameContainer).width),this.gameContainerHeight=parseInt(window.getComputedStyle(this.gameContainer).height),this.carWidth=parseInt(window.getComputedStyle(this.car).width),this.carHeight=parseInt(window.getComputedStyle(this.car).height),this.restartContainer=document.getElementById("restart-container"),this.pauseContainer=document.getElementById("pause-container"),this.score=document.getElementById("score"),this.highScore=document.getElementById("high-score"),this.topScore=localStorage.getItem("highScore")||0,this.highScore.innerText=this.topScore,this.scoreCounter=0,this.pointSpeed=1,this.speed=4,this.lineSpeed=5,this.pause=!1,this.moveRight=!1,this.moveLeft=!1,this.moveUp=!1,this.moveDown=!1,this.gameOver=!1,this.handling=5,this.car1=document.getElementById("car1"),this.car2=document.getElementById("car2"),this.car3=document.getElementById("car3"),this.car4=document.getElementById("car4"),this.line1=document.getElementById("line1"),this.line2=document.getElementById("line2"),this.line3=document.getElementById("line3"),this.line4=document.getElementById("line4"),this.line5=document.getElementById("line5"),this.line6=document.getElementById("line6"),this.line7=document.getElementById("line7"),this.crash=new Audio("./dist/crash.mp3"),this.loop=this.loop.bind(this),this.setHighScore=this.setHighScore.bind(this),this.keyDownHandler=this.keyDownHandler.bind(this),this.keyUpHandler=this.keyUpHandler.bind(this),this.carDown=this.carDown.bind(this),this.up=this.up.bind(this),this.down=this.down.bind(this),this.left=this.left.bind(this),this.right=this.right.bind(this)}reset(){this.restartContainer.style.display="none",this.car.style.display="flex",this.car.style.top="80%",this.car.style.left="20%",this.scoreCounter=0,this.pointSpeed=1,this.speed=4,this.lineSpeed=5,this.gameOver=!1,this.handling=4,this.car1.style.top="-80px",this.car2.style.top="-250px",this.car3.style.top="-450px",this.car4.style.top="-650px",this.car1.style.display="",this.car2.style.display="",this.car3.style.display="",this.car4.style.display="",this.score.innerText="0",clearInterval(this.blinkEffect)}togglePause(){cancelAnimationFrame(this.moveRight),cancelAnimationFrame(this.moveLeft),cancelAnimationFrame(this.moveUp),cancelAnimationFrame(this.moveDown),this.pause?(this.pause=!1,this.pauseContainer.style.display="none",requestAnimationFrame(this.loop)):(this.pause=!0,this.pauseContainer.style.display="flex")}loop(){if(this.collision(this.car,this.car1)||this.collision(this.car,this.car2)||this.collision(this.car,this.car3)||this.collision(this.car,this.car4))return this.crash.play(),this.gameOver=!0,void this.lost();if(this.scoreCounter++,this.scoreCounter%20==0)switch(score.innerText=parseInt(score.innerText)+this.pointSpeed,this.car.id[this.car.id.length-1]){case"4":case"5":this.score.innerText=parseInt(this.score.innerText)+3;break;case"6":case"7":this.score.innerText=parseInt(this.score.innerText)+10}this.scoreCounter%500==0&&this.speed<=15&&(this.speed++,this.lineSpeed++,this.pointSpeed++),this.scoreCounter%3e3==0&&this.speed>15&&(this.speed++,this.lineSpeed++,this.pointSpeed++),this.scoreCounter%1200==0&&this.handling<=15&&this.handling++,this.carDown(this.car1),this.carDown(this.car2),this.carDown(this.car3),this.carDown(this.car4),this.lineDown(this.line1),this.lineDown(this.line2),this.lineDown(this.line3),this.lineDown(this.line4),this.lineDown(this.line5),this.lineDown(this.line6),this.lineDown(this.line7),this.pause||requestAnimationFrame(this.loop)}carDown(e){let t=parseInt(window.getComputedStyle(e).top);if(t>this.gameContainerHeight){t=-200;const i=parseInt(Math.random()*(this.gameContainerWidth-this.carWidth-10));e.style.left=i+"px",e.style.backgroundColor="rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")"}e.style.top=t+this.speed+"px"}lineDown(e){let t=parseInt(window.getComputedStyle(e).top);t>this.gameContainerHeight&&(t=-300),e.style.top=t+this.lineSpeed+"px"}collision(e,t){const i=e.offsetLeft,n=e.offsetTop,s=e.offsetHeight,o=e.offsetWidth,r=t.offsetLeft,a=t.offsetTop,h=t.offsetHeight,l=t.offsetWidth;return!(n+s-2<a||n>a+h-2||i+o+5<r||i>r+l+5)&&(this.blinkEffect=setInterval((function(){e.style.display="none"==e.style.display?"flex":"none",t.style.display="none"==t.style.display?"flex":"none"}),500),!0)}lost(){cancelAnimationFrame(this.moveRight),cancelAnimationFrame(this.moveLeft),cancelAnimationFrame(this.moveUp),cancelAnimationFrame(this.moveDown),cancelAnimationFrame(this.loop),this.restartContainer.style.display="flex",this.setHighScore()}setHighScore(){parseInt(this.topScore)<parseInt(this.score.innerText)&&(this.topScore=parseInt(this.score.innerText),localStorage.setItem("highScore",parseInt(this.score.innerText))),this.highScore.innerText=this.topScore}keyDown(){document.addEventListener("keydown",this.keyDownHandler,!0)}keyUp(){document.addEventListener("keyup",this.keyUpHandler,!0)}keyDownHandler(e){if(e.preventDefault(),!this.gameOver&&!this.pause)switch(e.keyCode){case 40:this.moveDown||(this.moveDown=requestAnimationFrame(this.down));break;case 38:this.moveUp||(this.moveUp=requestAnimationFrame(this.up));break;case 37:this.moveLeft||(this.moveLeft=requestAnimationFrame(this.left));break;case 39:this.moveRight||(this.moveRight=requestAnimationFrame(this.right))}this.gameOver||32!==e.keyCode||this.togglePause(),this.gameOver&&13===e.keyCode&&(this.reset(),requestAnimationFrame(this.loop))}keyUpHandler(e){if(e.preventDefault(),!this.gameOver)switch(e.keyCode){case 40:cancelAnimationFrame(this.moveDown),this.moveDown=!1;break;case 38:cancelAnimationFrame(this.moveUp),this.moveUp=!1;break;case 37:cancelAnimationFrame(this.moveLeft),this.moveLeft=!1;break;case 39:cancelAnimationFrame(this.moveRight),this.moveRight=!1;break;default:return}}left(){const e=parseInt(window.getComputedStyle(this.car).left);!this.gameOver&&e>7&&(this.car.style.left=e-this.handling+"px",this.moveLeft=requestAnimationFrame(this.left))}right(){const e=parseInt(window.getComputedStyle(this.car).left);!this.gameOver&&e<this.gameContainerWidth-this.carWidth-7&&(this.car.style.left=e+this.handling+"px",this.moveRight=requestAnimationFrame(this.right))}up(){const e=parseInt(window.getComputedStyle(this.car).top);!this.gameOver&&e>20&&(this.score.innerText=""+(parseInt(this.score.innerText)+1),this.car.style.top=e-3+"px",this.moveUp=requestAnimationFrame(this.up))}down(){const e=parseInt(window.getComputedStyle(this.car).top);!this.gameOver&&e<this.gameContainerHeight-this.carHeight-2&&(this.car.style.top=e+3+"px",this.moveDown=requestAnimationFrame(this.down))}},s=i(0);window.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("music"),t=document.getElementById("restart"),i=document.getElementById("play"),o=document.getElementById("start-game"),r=document.getElementById("start-instruction"),a=document.getElementById("unlocks_at"),h=document.getElementById("left-icon"),l=document.getElementById("right-icon"),c=document.querySelectorAll(".playable-car"),d=document.getElementById("high-score"),m=localStorage.getItem("highScore")||0;d.innerText=m;const p=new Audio("./dist/no.mp3");let u,y=0;c[y].style.display="flex",l.onclick=function(){switch(a.innerText="",c[y].style.display="",y===c.length-1&&(y=-1),y++,y){case 3:case 4:m>=1e3?document.querySelector(".locked"+(y+1)).style.display="none":a.innerText="Unlocks at 1000";break;case 5:m>=2500?document.querySelector(".locked"+(y+1)).style.display="none":a.innerText="Unlocks at 2500";break;case 6:m>=5e3?document.querySelector(".locked"+(y+1)).style.display="none":a.innerText="Unlocks at 5000"}c[y].style.display="flex"},h.onclick=function(){switch(a.innerText="",c[y].style.display="",0===y&&(y=c.length),y--,y){case 3:case 4:m>=1e3?document.querySelector(".locked"+(y+1)).style.display="none":a.innerText="Unlocks at 1000";break;case 5:m>=2500?document.querySelector(".locked"+(y+1)).style.display="none":a.innerText="Unlocks at 2500";break;case 6:m>=5e3?document.querySelector(".locked"+(y+1)).style.display="none":a.innerText="Unlocks at 5000"}c[y].style.display="flex"},o.onclick=function(){(3===y||4===y)&&m<1e3||5===y&&m<2500||6===y&&m<5e3?p.play():(o.style.display="none",r.style.display="none",h.style.display="none",l.style.display="none",c[y].classList.remove("spin"),u=new n(c[y]),requestAnimationFrame(u.loop),u.keyUp(),u.keyDown())},e.onclick=function(){document.querySelector(".fa-volume-mute").classList.toggle("fa-volume-off"),Object(s.togglePlay)()},t.onclick=function(){u.reset(),requestAnimationFrame(u.loop)},i.onclick=function(){u.togglePause()}})}]);