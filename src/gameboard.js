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

    const fleet = {
        one: ship(1),
        two: ship(2),
        three: ship(3),
        four: ship(4),
        five: ship(5)
    }

    const placeShipHorizontally = function (game, shipLength, start) {
        for (let i = start; i < (shipLength + start); i++) {
            game.board[i] += shipLength;
        }
    }

    const placeShipVertically = function (game, shipLength, start) {
        for (let i = start; i <= ((shipLength * 10) - 10 + start) ; i += 10) {
            game.board[i] += shipLength;
        }
    }

    const receiveAttack = function (game, point) {

        if (game.board[point] === 0) {
            game.board[point] -= 1;
        } 
        
        if (game.board[point] > 0) {
            if (game.board[point] === 1) {
                game.board[point] -= 2;
                game.fleet.one.hit(point);
                return game.fleet.one;
            } else if (game.board[point] === 2) {
                game.board[point] -= 3;
                game.fleet.two.hit(point);
                return game.fleet.two;
            } else if (game.board[point] === 3) {
                game.board[point] -= 4;
                game.fleet.three.hit(point);
                return game.fleet.three;
            } else if (game.board[point] === 4) {
                game.board[point] -= 5;
                game.fleet.four.hit(point);
                return game.fleet.four;
            } else if (game.board[point] === 5) {
                game.board[point] -= 6;
                game.fleet.five.hit(point);
                return game.fleet.five;
            }
        }

        if (game.board[point] === -1) {
            return;
        }

    }

    const allSunk = function (game) {
        game.fleet.one.isSunk(game.fleet.one);
        game.fleet.two.isSunk(game.fleet.two);
        game.fleet.three.isSunk(game.fleet.three);
        game.fleet.four.isSunk(game.fleet.four);
        game.fleet.five.isSunk(game.fleet.five);

        if (game.fleet.one.sunk === false) {
            return false;
        } else if (game.fleet.two.sunk === false) {
            return false;
        } else if (game.fleet.three.sunk === false) {
            return false;
        } else if (game.fleet.four.sunk === false) {
            return false;
        } else if (game.fleet.five.sunk === false) {
            return false;
        } else { 
            return true;
        }
    }

    return { board, fleet, placeShipHorizontally, placeShipVertically, receiveAttack, allSunk };
}
module.exports = gameboard;