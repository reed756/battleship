(()=>{"use strict";const e=function(){return{attackBoard:function(e,t){return e.receiveAttack(e,t)},randomAttack:function(e){const t=Math.floor(100*Math.random());return e.receiveAttack(e,t)}}},t=function(e){let t=e,a=[];return{length:t,hitWhere:a,sunk:!1,hit:e=>{a.push(e)},isSunk:e=>{a.length==t?e.sunk=!0:a.length!==t&&(e.sunk=!1)}}},a=function(){return{board:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],fleet:{one:t(1),two:t(2),three:t(3),four:t(4),five:t(5)},placeShipHorizontally:function(e,t,a){for(let o=a;o<t+a;o++)e.board[o]+=t},placeShipVertically:function(e,t,a){for(let o=a;o<=10*t-10+a;o+=10)e.board[o]+=t},receiveAttack:function(e,t){if(0===e.board[t])return e.board[t]-=1;if(e.board[t]>0){if(1===e.board[t])return e.board[t]-=2,e.fleet.one.hit(t),e.fleet.one;if(2===e.board[t])return e.board[t]-=3,e.fleet.two.hit(t),e.fleet.two;if(3===e.board[t])return e.board[t]-=4,e.fleet.three.hit(t),e.fleet.three;if(4===e.board[t])return e.board[t]-=5,e.fleet.four.hit(t),e.fleet.four;if(5===e.board[t])return e.board[t]-=6,e.fleet.five.hit(t),e.fleet.five}e.board[t]},allSunk:function(e){return e.fleet.one.isSunk(e.fleet.one),e.fleet.two.isSunk(e.fleet.two),e.fleet.three.isSunk(e.fleet.three),e.fleet.four.isSunk(e.fleet.four),e.fleet.five.isSunk(e.fleet.five),!1!==e.fleet.one.sunk&&!1!==e.fleet.two.sunk&&!1!==e.fleet.three.sunk&&!1!==e.fleet.four.sunk&&!1!==e.fleet.five.sunk}}},o=function(e,t){const a=document.getElementById("content"),o=document.createElement("div"),n=document.createElement("h1"),d=document.createElement("div"),l=document.createElement("h2"),u=document.createElement("h2"),c=document.createElement("div"),i=document.createElement("div"),h=document.createElement("div"),m=document.createElement("div");a.innerHTML="",n.textContent="BATTLESHIP",l.textContent="HUMAN",u.textContent="COMPUTER",o.classList.add("gameboards"),d.classList.add("displays"),c.classList.add("gameboard-one"),i.classList.add("gameboard-two"),h.classList.add("thegameboard"),m.classList.add("thegameboard"),c.appendChild(l),i.appendChild(u),c.appendChild(h),i.appendChild(m),e.board.forEach((e=>{let t=document.createElement("div");h.appendChild(t),t.textContent=`${e}`,t.classList.add("cell")}));let f=0;t.board.forEach((e=>{let t=document.createElement("div");m.appendChild(t),t.textContent=`${e}`,t.classList.add("cell"),t.setAttribute("data",`${f}`),t.addEventListener("click",(()=>{r.attack(t.attributes.data.value)})),f++})),d.appendChild(c),d.appendChild(i),o.appendChild(n),o.appendChild(d),a.appendChild(o)},r={humanBoard:new a,computerBoard:new a,human:new e,computer:new e,setup:function(){r.humanBoard.placeShipVertically(r.humanBoard,r.humanBoard.fleet.one.length,4),r.humanBoard.placeShipHorizontally(r.humanBoard,r.humanBoard.fleet.two.length,11),r.humanBoard.placeShipVertically(r.humanBoard,r.humanBoard.fleet.three.length,54),r.humanBoard.placeShipHorizontally(r.humanBoard,r.humanBoard.fleet.four.length,83),r.humanBoard.placeShipVertically(r.humanBoard,r.humanBoard.fleet.five.length,25),r.computerBoard.placeShipVertically(r.computerBoard,r.computerBoard.fleet.one.length,9),r.computerBoard.placeShipHorizontally(r.computerBoard,r.computerBoard.fleet.two.length,20),r.computerBoard.placeShipVertically(r.computerBoard,r.computerBoard.fleet.three.length,54),r.computerBoard.placeShipHorizontally(r.computerBoard,r.computerBoard.fleet.four.length,35),r.computerBoard.placeShipVertically(r.computerBoard,r.computerBoard.fleet.five.length,58),o(r.humanBoard,r.computerBoard)},loop:function(e){r.human.attackBoard(r.computerBoard,e),o(r.humanBoard,r.computerBoard)},attack:function(e){r.human.attackBoard(r.computerBoard,e),r.computer.randomAttack(r.humanBoard),o(r.humanBoard,r.computerBoard),console.log(this.humanBoard),console.log(this.computerBoard)}};r.setup()})();