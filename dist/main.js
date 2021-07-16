(()=>{"use strict";const e=function(){for(var e=[],t=0;t<=99;t++)e.push(t);const n=function(e){var t=Math.floor(Math.random()*e.length),n=e[t];return e.splice(t,1),n};return{attackBoard:function(e,t){return e.receiveAttack(e,t)},getRandomIntBetween:n,randomAttack:function(t){var a=n(e);return t.receiveAttack(t,a)}}},t=function(e){let t=e,n=[];return{length:t,hitWhere:n,sunk:!1,hit:e=>{n.push(e)},isSunk:e=>{n.length==t?e.sunk=!0:n.length!==t&&(e.sunk=!1)}}},n=function(){return{board:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],fleet:{one:t(1),two:t(2),three:t(3),four:t(4),five:t(5)},placeShipHorizontally:function(e,t,n){for(let a=n;a<t+n;a++)e.board[a]+=t;return e},placeShipVertically:function(e,t,n){for(let a=n;a<=10*t-10+n;a+=10)e.board[a]+=t;return e},receiveAttack:function(e,t){if(0===e.board[t])return e.board[t]-=1;if(e.board[t]>0){if(1===e.board[t])return e.board[t]-=2,e.fleet.one.hit(t),e.fleet.one;if(2===e.board[t])return e.board[t]-=3,e.fleet.two.hit(t),e.fleet.two;if(3===e.board[t])return e.board[t]-=4,e.fleet.three.hit(t),e.fleet.three;if(4===e.board[t])return e.board[t]-=5,e.fleet.four.hit(t),e.fleet.four;if(5===e.board[t])return e.board[t]-=6,e.fleet.five.hit(t),e.fleet.five}e.board[t]},allSunk:function(e){return e.fleet.one.isSunk(e.fleet.one),e.fleet.two.isSunk(e.fleet.two),e.fleet.three.isSunk(e.fleet.three),e.fleet.four.isSunk(e.fleet.four),e.fleet.five.isSunk(e.fleet.five),!1!==e.fleet.one.sunk&&!1!==e.fleet.two.sunk&&!1!==e.fleet.three.sunk&&!1!==e.fleet.four.sunk&&!1!==e.fleet.five.sunk}}},a=function(){const e=document.createElement("input"),t=document.createElement("input"),n=document.createElement("input"),a=document.createElement("input"),r=document.createElement("input"),o=document.getElementById("content"),d=document.createElement("button"),u=document.createElement("form"),l=document.createElement("label"),h=document.createElement("label"),c=document.createElement("label"),m=document.createElement("label"),p=document.createElement("label"),s=document.createElement("br"),f=document.createElement("br"),b=document.createElement("br"),B=document.createElement("br"),C=document.createElement("br"),E=document.createElement("br"),S=document.createElement("div"),k=document.createElement("h1");o.innerHTML="",d.textContent="PLACE SHIPS",k.textContent="BATTLESHIP",d.setAttribute("type","button"),e.setAttribute("type","number"),t.setAttribute("type","number"),n.setAttribute("type","number"),a.setAttribute("type","number"),r.setAttribute("type","number"),e.setAttribute("min","0"),t.setAttribute("min","0"),n.setAttribute("min","0"),a.setAttribute("min","0"),r.setAttribute("min","0"),e.setAttribute("max","99"),t.setAttribute("max","99"),n.setAttribute("max","99"),a.setAttribute("max","99"),r.setAttribute("max","99"),l.textContent="SHIP ONE COORDINATES",h.textContent="SHIP TWO COORDINATES",c.textContent="SHIP THREE COORDINATES",m.textContent="SHIP FOUR COORDINATES",p.textContent="SHIP FIVE COORDINATES",S.classList.add("form"),u.appendChild(s),u.appendChild(l),u.appendChild(e),u.appendChild(f),u.appendChild(h),u.appendChild(t),u.appendChild(b),u.appendChild(c),u.appendChild(n),u.appendChild(B),u.appendChild(m),u.appendChild(a),u.appendChild(C),u.appendChild(p),u.appendChild(r),u.appendChild(E),u.appendChild(d),S.appendChild(k),S.appendChild(u),o.appendChild(S),d.addEventListener("click",(()=>{i.setup(Number(e.value),Number(t.value),Number(n.value),Number(a.value),Number(r.value))}))},r=function(e,t){const n=document.getElementById("content"),a=document.createElement("div"),r=document.createElement("h1"),o=document.createElement("div"),d=document.createElement("h3"),u=document.createElement("h2"),l=document.createElement("h2"),h=document.createElement("div"),c=document.createElement("div"),m=document.createElement("div"),p=document.createElement("div");n.innerHTML="",r.textContent="BATTLESHIP",u.textContent="HUMAN",l.textContent="COMPUTER",a.classList.add("gameboards"),o.classList.add("displays"),h.classList.add("gameboard-one"),c.classList.add("gameboard-two"),m.classList.add("thegameboard"),p.classList.add("thegameboard"),h.appendChild(u),c.appendChild(l),h.appendChild(m),c.appendChild(p),e.board.forEach((e=>{let t=document.createElement("div");m.appendChild(t),t.textContent=`${e}`,t.classList.add("cell")}));let s=0;t.board.forEach((e=>{let t=document.createElement("div");p.appendChild(t),t.textContent=`${e}`,t.classList.add("cell"),t.setAttribute("data",`${s}`),-1!==e&&t.addEventListener("click",(()=>{i.takeTurn(t.attributes.data.value)})),s++})),o.appendChild(h),o.appendChild(c),a.appendChild(r),a.appendChild(o),a.appendChild(d),n.appendChild(a)},o=function(e){document.querySelector("h3").textContent=`${e} won the game!`},i={humanBoard:new n,computerBoard:new n,human:new e,computer:new e,start:function(){a()},setup:function(e,t,n,a,o){this.humanBoard.placeShipVertically(this.humanBoard,this.humanBoard.fleet.one.length,e),this.humanBoard.placeShipHorizontally(this.humanBoard,this.humanBoard.fleet.two.length,t),this.humanBoard.placeShipVertically(this.humanBoard,this.humanBoard.fleet.three.length,n),this.humanBoard.placeShipHorizontally(this.humanBoard,this.humanBoard.fleet.four.length,a),this.humanBoard.placeShipVertically(this.humanBoard,this.humanBoard.fleet.five.length,o),this.computerBoard.placeShipVertically(this.computerBoard,this.computerBoard.fleet.one.length,9),this.computerBoard.placeShipHorizontally(this.computerBoard,this.computerBoard.fleet.two.length,20),this.computerBoard.placeShipVertically(this.computerBoard,this.computerBoard.fleet.three.length,54),this.computerBoard.placeShipHorizontally(this.computerBoard,this.computerBoard.fleet.four.length,35),this.computerBoard.placeShipVertically(this.computerBoard,this.computerBoard.fleet.five.length,58),r(this.humanBoard,this.computerBoard)},takeTurn:function(e){this.human.attackBoard(this.computerBoard,e),this.computerBoard.allSunk(this.computerBoard),r(this.humanBoard,this.computerBoard),this.checkWinner()||(this.computer.randomAttack(this.humanBoard),this.humanBoard.allSunk(this.humanBoard),r(this.humanBoard,this.computerBoard),this.checkWinner())},checkWinner:function(){return!0===this.computerBoard.allSunk(this.computerBoard)?(o("You"),setTimeout(a,3e3),this.humanBoard=new n,this.computerBoard=new n,!0):!0===this.humanBoard.allSunk(this.humanBoard)?(o("Computer"),setTimeout(a,3e3),this.humanBoard=new n,this.computerBoard=new n,!0):void 0}};i.start()})();