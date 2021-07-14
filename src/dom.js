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
}

export { dom }