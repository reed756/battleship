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

    const placeShip = function (game, shipLength, start, end) {
        const newShip = ship(shipLength);
        if (start - end >= -0.9) {
            for (let i = start; i <= end; i++) {
                game.board[i] += shipLength;
            }
        } else if (start - end < -0.9) {
            for (let i = start; i <= end; i+10) {
                game.board[i] += shipLength;
            }
        }
    }

    return { board, placeShip };
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