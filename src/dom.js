const gameboard = require("./gameboard");

const dom = function() {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    const heading = document.createElement('h1');
    const gameboards = document.createElement('div');
    const headOne = document.createElement('h2');
    const headTwo = document.createElement('h2');
    const gameboardOne = document.createElement('div');
    const gameboardTwo = document.createElement('div');

    heading.textContent = "BATTLESHIP";
    headOne.textContent = "HUMAN";
    headTwo.textContent = "COMPUTER";

    gameboardOne.appendChild(headOne);
    gameboardTwo.appendChild(headTwo);
    gameboards.appendChild(gameboardOne);
    gameboards.appendChild(gameboardTwo);
    div.appendChild(heading);
    div.appendChild(gameboards);
    content.appendChild(div);
}

export { dom }