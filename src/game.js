const Player = require("./Player");
const gameboard = require("./gameboard");
import { dom } from "./dom.js";

const game = function() {
    const humanBoard = gameboard();
    const computerBoard = gameboard();

    const human = Player();
    const computer = Player();

    humanBoard.placeShipVertically(humanBoard, humanBoard.fleet.one.length, 4);
    humanBoard.placeShipHorizontally(humanBoard, humanBoard.fleet.two.length, 11);
    humanBoard.placeShipVertically(humanBoard, humanBoard.fleet.three.length, 54);
    humanBoard.placeShipHorizontally(humanBoard, humanBoard.fleet.four.length, 83);
    humanBoard.placeShipVertically(humanBoard, humanBoard.fleet.five.length, 25);

    computerBoard.placeShipVertically(computerBoard, computerBoard.fleet.one.length, 9);
    computerBoard.placeShipHorizontally(computerBoard, computerBoard.fleet.two.length, 20);
    computerBoard.placeShipVertically(computerBoard, computerBoard.fleet.three.length, 54);
    computerBoard.placeShipHorizontally(computerBoard, computerBoard.fleet.four.length, 35);
    computerBoard.placeShipVertically(computerBoard, computerBoard.fleet.five.length, 58);

    dom(humanBoard, computerBoard);
}

export { game }