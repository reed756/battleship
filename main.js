(()=>{"use strict";const e=function(){for(var e=[],t=0;t<=99;t++)e.push(t);const a=function(e){var t=Math.floor(Math.random()*e.length),a=e[t];return e.splice(t,1),a};return{attackBoard:function(e,t){return e.receiveAttack(e,t)},getRandomIntBetween:a,randomAttack:function(t){var n=a(e);return console.log(n),t.receiveAttack(t,n)}}},t=function(e){let t=e,a=[];return{length:t,hitWhere:a,sunk:!1,hit:e=>{a.push(e)},isSunk:e=>{a.length==t?e.sunk=!0:a.length!==t&&(e.sunk=!1)}}},a=function(){return{board:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],fleet:{one:t(1),two:t(2),three:t(3),four:t(4),five:t(5)},placeShipHorizontally:function(e,t,a){for(let n=a;n<t+a;n++)e.board[n]+=t},placeShipVertically:function(e,t,a){for(let n=a;n<=10*t-10+a;n+=10)e.board[n]+=t},receiveAttack:function(e,t){if(0===e.board[t])return e.board[t]-=1;if(e.board[t]>0){if(1===e.board[t])return e.board[t]-=2,e.fleet.one.hit(t),e.fleet.one;if(2===e.board[t])return e.board[t]-=3,e.fleet.two.hit(t),e.fleet.two;if(3===e.board[t])return e.board[t]-=4,e.fleet.three.hit(t),e.fleet.three;if(4===e.board[t])return e.board[t]-=5,e.fleet.four.hit(t),e.fleet.four;if(5===e.board[t])return e.board[t]-=6,e.fleet.five.hit(t),e.fleet.five}e.board[t]},allSunk:function(e){return e.fleet.one.isSunk(e.fleet.one),e.fleet.two.isSunk(e.fleet.two),e.fleet.three.isSunk(e.fleet.three),e.fleet.four.isSunk(e.fleet.four),e.fleet.five.isSunk(e.fleet.five),!1!==e.fleet.one.sunk&&!1!==e.fleet.two.sunk&&!1!==e.fleet.three.sunk&&!1!==e.fleet.four.sunk&&!1!==e.fleet.five.sunk}}},n=function(e,t){const a=document.getElementById("content"),n=document.createElement("div"),o=document.createElement("h1"),d=document.createElement("div"),l=document.createElement("h2"),i=document.createElement("h2"),u=document.createElement("div"),c=document.createElement("div"),h=document.createElement("div"),m=document.createElement("div"),p=document.createElement("div"),s=document.createElement("input"),f=document.createElement("input"),B=document.createElement("input"),k=document.createElement("input"),b=document.createElement("input");a.innerHTML="",o.textContent="BATTLESHIP",l.textContent="HUMAN",i.textContent="COMPUTER",n.classList.add("gameboards"),d.classList.add("displays"),u.classList.add("gameboard-one"),c.classList.add("gameboard-two"),h.classList.add("thegameboard"),m.classList.add("thegameboard"),p.classList.add("inputdiv"),s.setAttribute("data","one"),f.setAttribute("data","two"),B.setAttribute("data","three"),k.setAttribute("data","four"),b.setAttribute("data","five"),u.appendChild(l),c.appendChild(i),u.appendChild(h),c.appendChild(m),u.appendChild(p),p.appendChild(s),p.appendChild(f),p.appendChild(B),p.appendChild(k),p.appendChild(b),e.board.forEach((e=>{let t=document.createElement("div");h.appendChild(t),t.textContent=`${e}`,t.classList.add("cell")}));let v=0;t.board.forEach((e=>{let t=document.createElement("div");m.appendChild(t),t.textContent=`${e}`,t.classList.add("cell"),t.setAttribute("data",`${v}`),-1!==e&&t.addEventListener("click",(()=>{r.takeTurn(t.attributes.data.value)})),v++})),d.appendChild(u),d.appendChild(c),n.appendChild(o),n.appendChild(d),a.appendChild(n)},r={humanBoard:new a,computerBoard:new a,human:new e,computer:new e,setup:function(){r.humanBoard.placeShipVertically(r.humanBoard,r.humanBoard.fleet.one.length,4),r.humanBoard.placeShipHorizontally(r.humanBoard,r.humanBoard.fleet.two.length,11),r.humanBoard.placeShipVertically(r.humanBoard,r.humanBoard.fleet.three.length,54),r.humanBoard.placeShipHorizontally(r.humanBoard,r.humanBoard.fleet.four.length,83),r.humanBoard.placeShipVertically(r.humanBoard,r.humanBoard.fleet.five.length,25),r.computerBoard.placeShipVertically(r.computerBoard,r.computerBoard.fleet.one.length,9),r.computerBoard.placeShipHorizontally(r.computerBoard,r.computerBoard.fleet.two.length,20),r.computerBoard.placeShipVertically(r.computerBoard,r.computerBoard.fleet.three.length,54),r.computerBoard.placeShipHorizontally(r.computerBoard,r.computerBoard.fleet.four.length,35),r.computerBoard.placeShipVertically(r.computerBoard,r.computerBoard.fleet.five.length,58),n(this.humanBoard,this.computerBoard)},takeTurn:function(e){this.human.attackBoard(this.computerBoard,e),this.computerBoard.allSunk(this.computerBoard),n(this.humanBoard,this.computerBoard),this.checkWinner(),this.computer.randomAttack(this.humanBoard),this.humanBoard.allSunk(this.humanBoard),this.checkWinner()},checkWinner:function(){(!0===this.computerBoard.allSunk(this.computerBoard)||!0===this.humanBoard.allSunk(this.humanBoard))&&(this.humanBoard=new a,this.computerBoard=new a,n(this.humanBoard,this.computerBoard))}};r.setup()})();