const Player = require("../Player");
const gameboard = require("../gameboard");

describe('Main game loop', () => {

    const humanBoard = gameboard();
    const computerBoard = gameboard();

    const human = Player();
    const computer = Player();

    const expectedOne = [0,0,0,0,1,0,0,0,0,0,
        0,2,2,0,0,0,0,0,0,0,
        0,0,0,0,0,5,0,0,0,0,
        0,0,0,0,0,5,0,0,0,0,
        0,0,0,0,0,5,0,0,0,0,
        0,0,0,0,3,5,0,0,0,0,
        0,0,0,0,3,5,0,0,0,0,
        0,0,0,0,3,0,0,0,0,0,
        0,0,0,4,4,4,4,0,0,0,
        0,0,0,0,0,0,0,0,0,0]

    const expectedTwo = [0,0,0,0,0,0,0,0,0,1,
        0,0,0,0,0,0,0,0,0,0,
        2,2,0,0,0,0,0,0,0,0,
        0,0,0,0,0,4,4,4,4,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,3,0,0,0,5,0,
        0,0,0,0,3,0,0,0,5,0,
        0,0,0,0,3,0,0,0,5,0,
        0,0,0,0,0,0,0,0,5,0,
        0,0,0,0,0,0,0,0,5,0]

    it("Place one ship and matches where it's been put on the gameboard horizontally", () => {
        humanBoard.placeShipVertically(humanBoard, humanBoard.fleet.one.length, 4);
        humanBoard.placeShipHorizontally(humanBoard, humanBoard.fleet.two.length, 11);
        humanBoard.placeShipVertically(humanBoard, humanBoard.fleet.three.length, 54);
        humanBoard.placeShipHorizontally(humanBoard, humanBoard.fleet.four.length, 83);
        humanBoard.placeShipVertically(humanBoard, humanBoard.fleet.five.length, 25);
        expect(humanBoard.board).toEqual(expectedOne);
    });

    it("Place one ship and matches where it's been put on the gameboard horizontally", () => {
        computerBoard.placeShipVertically(computerBoard, computerBoard.fleet.one.length, 9);
        computerBoard.placeShipHorizontally(computerBoard, computerBoard.fleet.two.length, 20);
        computerBoard.placeShipVertically(computerBoard, computerBoard.fleet.three.length, 54);
        computerBoard.placeShipHorizontally(computerBoard, computerBoard.fleet.four.length, 35);
        computerBoard.placeShipVertically(computerBoard, computerBoard.fleet.five.length, 58);
        expect(computerBoard.board).toEqual(expectedTwo);
    });
});