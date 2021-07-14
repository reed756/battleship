import { Player } from "./Player.js";
import { gameboard } from "./gameboard.js";
import { dom } from "./dom.js";

const game = {

    humanBoard: new gameboard(),
    computerBoard: new gameboard(),
    human: new Player(),
    computer: new Player(),

    setup: function() {

        game.humanBoard.placeShipVertically(game.humanBoard, game.humanBoard.fleet.one.length, 4);
        game.humanBoard.placeShipHorizontally(game.humanBoard, game.humanBoard.fleet.two.length, 11);
        game.humanBoard.placeShipVertically(game.humanBoard, game.humanBoard.fleet.three.length, 54);
        game.humanBoard.placeShipHorizontally(game.humanBoard, game.humanBoard.fleet.four.length, 83);
        game.humanBoard.placeShipVertically(game.humanBoard, game.humanBoard.fleet.five.length, 25);

        game.computerBoard.placeShipVertically(game.computerBoard, game.computerBoard.fleet.one.length, 9);
        game.computerBoard.placeShipHorizontally(game.computerBoard, game.computerBoard.fleet.two.length, 20);
        game.computerBoard.placeShipVertically(game.computerBoard, game.computerBoard.fleet.three.length, 54);
        game.computerBoard.placeShipHorizontally(game.computerBoard, game.computerBoard.fleet.four.length, 35);
        game.computerBoard.placeShipVertically(game.computerBoard, game.computerBoard.fleet.five.length, 58);

        dom.render(game.humanBoard, game.computerBoard);
    },

    takeTurn: function(point) {
        this.human.attackBoard(this.computerBoard, point);
        this.computerBoard.allSunk(this.computerBoard);
        this.checkWinner();
        this.computer.randomAttack(this.humanBoard);
        this.humanBoard.allSunk(this.humanBoard);
        dom.render(this.humanBoard, this.computerBoard);
        this.checkWinner();
    },

    checkWinner: function() {
        if (this.computerBoard.allSunk(this.computerBoard) === true) {
            console.log('Human wins!');
        }
    }

}

export { game }