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
    }

    const placeShipVertically = function (game, shipLength, start) {
        for (let i = start; i <= ((shipLength * 10) - 10 + start) ; i += 10) {
            game.board[i] += shipLength;
        }
    }

    const receiveAttack = function (game, point, fleet) {
        if (game.board[point] === 0) {
            game.board[point] -= 1;
        } else if (game.board[point] > 0) {
            switch(game.board[point]) {
                case 1:
                    fleet.one.hit(point);
                  break;
                case 2:
                    fleet.two.hit(point);
                  break;
                case 3:
                    fleet.three.hit(point);
                  break;
                case 4:
                    fleet.four.hit(point);
                  break;
                case 5:
                    fleet.five.hit(point);
                  break;
              }
        }
    }

    return { board, placeShipHorizontally, placeShipVertically, receiveAttack };
}
module.exports = gameboard;