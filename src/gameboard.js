const ship = require("./ship");

const gameboard = function() {

    const board = {
        1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    const placeShip = function (game, shipLength, startArr, endArr, startInd, endInd) {
        const newShip = ship(shipLength);
        if (startArr === endArr) {
            for (let i = startInd; i <= endInd; i++) {
                game.board[startArr][i] += newShip.length;
            }
        } else if (startArr !== endArr) {
            for (let i = startArr; i <= endArr; i++) {
                game.board[i][startInd] += newShip.length;
            }
        }
    }

    return { board, placeShip };
}
module.exports = gameboard;