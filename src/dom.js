import { game } from "./game.js";

const dom = {

    render: function(player, computer) {

        const content = document.getElementById('content');
        const div = document.createElement('div');
        const heading = document.createElement('h1');
        const gameboards = document.createElement('div');
        const headOne = document.createElement('h2');
        const headTwo = document.createElement('h2');
        const gameboardOne = document.createElement('div');
        const gameboardTwo = document.createElement('div');
        const theGameBoardOne = document.createElement('div');
        const theGameBoardTwo = document.createElement('div');
        const inputDiv = document.createElement('div');
        const inputOne = document.createElement('input');
        const inputTwo = document.createElement('input');
        const inputThree = document.createElement('input');
        const inputFour = document.createElement('input');
        const inputFive = document.createElement('input');

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
        inputDiv.classList.add('inputdiv');
        inputOne.setAttribute('data', 'one');
        inputTwo.setAttribute('data', 'two');
        inputThree.setAttribute('data', 'three');
        inputFour.setAttribute('data', 'four');
        inputFive.setAttribute('data', 'five');

        gameboardOne.appendChild(headOne);
        gameboardTwo.appendChild(headTwo);
        gameboardOne.appendChild(theGameBoardOne);
        gameboardTwo.appendChild(theGameBoardTwo);
        gameboardOne.appendChild(inputDiv);
        inputDiv.appendChild(inputOne);
        inputDiv.appendChild(inputTwo);
        inputDiv.appendChild(inputThree);
        inputDiv.appendChild(inputFour);
        inputDiv.appendChild(inputFive);

        player.board.forEach(element => {
            let cellOne = document.createElement('div');
            theGameBoardOne.appendChild(cellOne);
            cellOne.textContent = `${element}`;
            cellOne.classList.add('cell');
        });

        let i = 0;
        computer.board.forEach(element => {
            let cellTwo = document.createElement('div');
            theGameBoardTwo.appendChild(cellTwo);
            cellTwo.textContent = `${element}`;
            cellTwo.classList.add('cell');
            cellTwo.setAttribute('data', `${i}`);
            if (element !== -1) {
                cellTwo.addEventListener('click', () => {
                    game.takeTurn(cellTwo.attributes.data.value);
                })
            }
            i++;
        });

        gameboards.appendChild(gameboardOne);
        gameboards.appendChild(gameboardTwo);
        div.appendChild(heading);
        div.appendChild(gameboards);
        content.appendChild(div);

    },
    setShips: function(input) {
        const inputOne = document.querySelector('[data = "one"]');
        const inputTwo = document.querySelector('[data = "two"]');
        const inputThree = document.querySelector('[data = "three"]');
        const inputFour = document.querySelector('[data = "four"]');
        const inputFive = document.querySelector('[data = "five"]');

        switch (input) {
            case 1: return inputOne.attributes.data.value;
            case 2: return inputTwo.attributes.data.value;
            case 3: return inputThree.attributes.data.value;
            case 4: return inputFour.attributes.data.value;
            case 5: return inputFive.attributes.data.value;
        }
    }
};

export { dom }