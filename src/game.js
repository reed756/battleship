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

    loop: function(point) {
        // let turnNo = 0;
        game.human.attackBoard(game.computerBoard, point);
        dom.render(game.humanBoard, game.computerBoard);
        // for (let i = 0; i < game.computerBoard.board.length; i++) {
        // if (game.computerBoard.board[i] === -1) {
        //         game.computerBoard.randomAttack(game.humanBoard);
        //         dom.render(game.humanBoard, game.computerBoard);
        //         turnNo++;
        //     }
        // }
    },

    attack: function(point) {
        game.human.attackBoard(game.computerBoard, point);
        game.computer.randomAttack(game.humanBoard);
        dom.render(game.humanBoard, game.computerBoard);
        console.log(this.humanBoard);
        console.log(this.computerBoard);
    }

}

export { game }