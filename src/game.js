import { Player } from "./Player.js";
import { gameboard } from "./gameboard.js";
import { dom } from "./dom.js";
import { reset } from "./index.js";

const game = {

    humanBoard: new gameboard(),
    computerBoard: new gameboard(),
    human: new Player(),
    computer: new Player(),

    start: function() {
        dom.start();
    },

    setup: function(onev, twov, threev, fourv, fivev) {

        this.humanBoard.placeShipVertically(this.humanBoard, this.humanBoard.fleet.one.length, onev);
        this.humanBoard.placeShipHorizontally(this.humanBoard, this.humanBoard.fleet.two.length, twov);
        this.humanBoard.placeShipVertically(this.humanBoard, this.humanBoard.fleet.three.length, threev);
        this.humanBoard.placeShipHorizontally(this.humanBoard, this.humanBoard.fleet.four.length, fourv);
        this.humanBoard.placeShipVertically(this.humanBoard, this.humanBoard.fleet.five.length, fivev);

        this.computerBoard.placeShipVertically(this.computerBoard, this.computerBoard.fleet.one.length, 9);
        this.computerBoard.placeShipHorizontally(this.computerBoard, this.computerBoard.fleet.two.length, 20);
        this.computerBoard.placeShipVertically(this.computerBoard, this.computerBoard.fleet.three.length, 54);
        this.computerBoard.placeShipHorizontally(this.computerBoard, this.computerBoard.fleet.four.length, 35);
        this.computerBoard.placeShipVertically(this.computerBoard, this.computerBoard.fleet.five.length, 58);

        dom.render(this.humanBoard, this.computerBoard);
    },

    takeTurn: function(point) {

        this.human.attackBoard(this.computerBoard, point);
        this.computerBoard.allSunk(this.computerBoard);
        dom.render(this.humanBoard, this.computerBoard);

        if (!this.checkWinner()) {
            this.computer.randomAttack(this.humanBoard);
            this.humanBoard.allSunk(this.humanBoard);
            dom.render(this.humanBoard, this.computerBoard);
            this.checkWinner();
        }
        
    },

    checkWinner: function() {
        if (this.computerBoard.allSunk(this.computerBoard) === true) {
            dom.start();
            this.humanBoard = new gameboard();
            this.computerBoard = new gameboard();
            return true;
        } else if (this.humanBoard.allSunk(this.humanBoard) === true) {
            dom.start();
            this.humanBoard = new gameboard();
            this.computerBoard = new gameboard();
            return true;
        }
    }

}

export { game }