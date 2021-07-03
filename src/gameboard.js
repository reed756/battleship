const ship = require("./ship");

const gameboard = function() {

    const board = [
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
    ]

    const placeShipHorizontally = function (game, shipLength, start) {
        for (let i = start; i <= (shipLength + start); i++) {
            game.board[i] += shipLength;
        }
        return game.board;
    }

    const placeShipVertically = function (game, shipLength, start) {
        for (let i = start; i <= ((shipLength * 10) - 10 + start) ; i += 10) {
            game.board[i] += shipLength;
        }
        return game.board;
    }

    return { board, placeShipHorizontally, placeShipVertically };
}
module.exports = gameboard;



// {
//     1: [0, 0, 0, 5, 5, 5, 5, 5, 0, 0],
//     2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// }

// return game.board = [0,0,0,0,5,5,5,5,5,0,
        //     0,0,0,0,0,0,0,0,0,0,
        //     0,0,0,0,0,0,0,0,0,0,
        //     0,0,0,0,0,0,0,0,0,0,
        //     0,0,0,0,0,0,0,0,0,0,
        //     0,0,0,0,0,0,0,0,0,0,
        //     0,0,0,0,0,0,0,0,0,0,
        //     0,0,0,0,0,0,0,0,0,0,
        //     0,0,0,0,0,0,0,0,0,0,
        //     0,0,0,0,0,0,0,0,0,0]