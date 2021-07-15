import { Player } from "./Player.js";
import { gameboard } from "./gameboard.js";
import { dom } from "./dom.js";

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

        // this.humanBoard.placeShipVertically(this.humanBoard, this.humanBoard.fleet.one.length, 4);
        // this.humanBoard.placeShipHorizontally(this.humanBoard, this.humanBoard.fleet.two.length, 11);
        // this.humanBoard.placeShipVertically(this.humanBoard, this.humanBoard.fleet.three.length, 54);
        // this.humanBoard.placeShipHorizontally(this.humanBoard, this.humanBoard.fleet.four.length, 83);
        // this.humanBoard.placeShipVertically(this.humanBoard, this.humanBoard.fleet.five.length, 25);

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
        this.checkWinner();
        this.computer.randomAttack(this.humanBoard);
        this.humanBoard.allSunk(this.humanBoard);
        dom.render(this.humanBoard, this.computerBoard);
        this.checkWinner();
    },

    checkWinner: function() {
        if (this.computerBoard.allSunk(this.computerBoard) === true) {
            this.humanBoard = new gameboard();
            this.computerBoard = new gameboard();
            dom.render(this.humanBoard, this.computerBoard);
        } else if (this.humanBoard.allSunk(this.humanBoard) === true) {
            this.humanBoard = new gameboard();
            this.computerBoard = new gameboard();
            dom.render(this.humanBoard, this.computerBoard);
        }
    },

    render: function() {
        dom.render(this.humanBoard, this.computerBoard);
    }

}

export { game }