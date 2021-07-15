import { game } from "./game.js";

const dom = {

    start: function() {

        // const inputDiv = document.createElement('div');
        const inputOne = document.createElement('input');
        const inputTwo = document.createElement('input');
        const inputThree = document.createElement('input');
        const inputFour = document.createElement('input');
        const inputFive = document.createElement('input');
        const content = document.getElementById('content');
        const buttonOne = document.createElement('button');
        // const buttonTwo = document.createElement('button');
        // const buttonThree = document.createElement('button');
        // const buttonFour = document.createElement('button');
        // const buttonFive = document.createElement('button');

        buttonOne.textContent = "PLACE SHIP";
        // buttonTwo.textContent = "PLACE SHIP";
        // buttonThree.textContent = "PLACE SHIP";
        // buttonFour.textContent = "PLACE SHIP";
        // buttonFive.textContent = "PLACE SHIP";

        // inputDiv.classList.add('inputdiv');
        // inputOne.setAttribute('data', 'one');
        // inputTwo.setAttribute('data', 'two');
        // inputThree.setAttribute('data', 'three');
        // inputFour.setAttribute('data', 'four');
        // inputFive.setAttribute('data', 'five');
        buttonOne.setAttribute('type', 'button');

        
        content.appendChild(buttonOne);
        content.appendChild(inputOne);
        content.appendChild(inputTwo);
        // inputDiv.appendChild(buttonTwo);
        content.appendChild(inputThree);
        // inputDiv.appendChild(buttonThree);
        content.appendChild(inputFour);
        // inputDiv.appendChild(buttonFour);
        content.appendChild(inputFive);
        // inputDiv.appendChild(buttonFive);

        buttonOne.addEventListener('click', () => {
            game.setup(Number(inputOne.value), Number(inputTwo.value), Number(inputThree.value), Number(inputFour.value), Number(inputFive.value));
        })

    },

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

    }
};

export { dom }