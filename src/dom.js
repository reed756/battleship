import { game } from "./game.js";

const dom = {

    start: function() {

        const inputOne = document.createElement('input');
        const inputTwo = document.createElement('input');
        const inputThree = document.createElement('input');
        const inputFour = document.createElement('input');
        const inputFive = document.createElement('input');
        const content = document.getElementById('content');
        const buttonOne = document.createElement('button');
        const form = document.createElement('form');
        const labelOne = document.createElement('label');
        const labelTwo = document.createElement('label');
        const labelThree = document.createElement('label');
        const labelFour = document.createElement('label');
        const labelFive = document.createElement('label');
        const brOne = document.createElement('br');
        const brTwo = document.createElement('br');
        const brThree = document.createElement('br');
        const brFour = document.createElement('br');
        const brFive = document.createElement('br');
        const brSix = document.createElement('br');
        const div = document.createElement('div');
        const heading = document.createElement('h1');

        content.innerHTML = "";

        buttonOne.textContent = "PLACE SHIPS";
        heading.textContent = "BATTLESHIP";
        buttonOne.setAttribute('type', 'button');
        inputOne.setAttribute('type', 'number');
        inputTwo.setAttribute('type', 'number');
        inputThree.setAttribute('type', 'number');
        inputFour.setAttribute('type', 'number');
        inputFive.setAttribute('type', 'number');
        inputOne.setAttribute('min', '0');
        inputTwo.setAttribute('min', '0');
        inputThree.setAttribute('min', '0');
        inputFour.setAttribute('min', '0');
        inputFive.setAttribute('min', '0');
        inputOne.setAttribute('max', '99');
        inputTwo.setAttribute('max', '99');
        inputThree.setAttribute('max', '99');
        inputFour.setAttribute('max', '99');
        inputFive.setAttribute('max', '99');
        labelOne.textContent = "SHIP ONE COORDINATES";
        labelTwo.textContent = "SHIP TWO COORDINATES";
        labelThree.textContent = "SHIP THREE COORDINATES";
        labelFour.textContent = "SHIP FOUR COORDINATES";
        labelFive.textContent = "SHIP FIVE COORDINATES";
        div.classList.add('form');

        form.appendChild(brOne);
        form.appendChild(labelOne);
        form.appendChild(inputOne);
        form.appendChild(brTwo);
        form.appendChild(labelTwo);
        form.appendChild(inputTwo);
        form.appendChild(brThree);
        form.appendChild(labelThree);
        form.appendChild(inputThree);
        form.appendChild(brFour);
        form.appendChild(labelFour);
        form.appendChild(inputFour);
        form.appendChild(brFive);
        form.appendChild(labelFive);
        form.appendChild(inputFive);
        form.appendChild(brSix);
        form.appendChild(buttonOne);
        div.appendChild(heading);
        div.appendChild(form);
        content.appendChild(div);

        buttonOne.addEventListener('click', () => {
            game.setup(Number(inputOne.value), Number(inputTwo.value), Number(inputThree.value), Number(inputFour.value), Number(inputFive.value));
        })

    },

    render: function(player, computer) {

        const content = document.getElementById('content');
        const div = document.createElement('div');
        const heading = document.createElement('h1');
        const gameboards = document.createElement('div');
        const winner = document.createElement('h3');
        const headOne = document.createElement('h2');
        const headTwo = document.createElement('h2');
        const gameboardOne = document.createElement('div');
        const gameboardTwo = document.createElement('div');
        const theGameBoardOne = document.createElement('div');
        const theGameBoardTwo = document.createElement('div');

        content.innerHTML = "";

        heading.textContent = "BATTLESHIP";
        headOne.textContent = "HUMAN";
        headTwo.textContent = "COMPUTER";
        div.classList.add('gameboards');
        gameboards.classList.add('displays');
        gameboardOne.classList.add('gameboard-one');
        gameboardTwo.classList.add('gameboard-two');
        theGameBoardOne.classList.add('thegameboard');
        theGameBoardTwo.classList.add('thegameboard');

        gameboardOne.appendChild(headOne);
        gameboardTwo.appendChild(headTwo);
        gameboardOne.appendChild(theGameBoardOne);
        gameboardTwo.appendChild(theGameBoardTwo);

        player.board.forEach(element => {
            let cellOne = document.createElement('div');
            theGameBoardOne.appendChild(cellOne);
            // cellOne.textContent = `${element}`;
            cellOne.classList.add('cell');
            if (element === -1) {
                cellOne.style.backgroundColor = "red";
            }
            if (element === -2) {
                cellOne.style.backgroundColor = "darkred";
            }
        });

        let i = 0;
        computer.board.forEach(element => {
            let cellTwo = document.createElement('div');
            theGameBoardTwo.appendChild(cellTwo);
            // cellTwo.textContent = `${element}`;
            cellTwo.classList.add('cell-click');
            cellTwo.setAttribute('data', `${i}`);
            if (element !== -1) {
                cellTwo.addEventListener('click', () => {
                    game.takeTurn(cellTwo.attributes.data.value);
                })
            }
            if (element === -1) {
                cellTwo.style.backgroundColor = "red";
            }
            if (element === -2) {
                cellTwo.style.backgroundColor = "darkred";
            }
            i++;
        });

        gameboards.appendChild(gameboardOne);
        gameboards.appendChild(gameboardTwo);
        div.appendChild(heading);
        div.appendChild(gameboards);
        div.appendChild(winner);
        content.appendChild(div);

    },

    displayWinner: function(player) {
        const winner = document.querySelector('h3');
        winner.textContent = `${player} won the game!`;
    }
};

export { dom }