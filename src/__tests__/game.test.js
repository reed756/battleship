import { Player } from "../Player";
import { gameboard } from "../gameboard.js";
import { game } from "../game.js";

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

    it("Set up the player's game board and ships.", () => {
        humanBoard.placeShipVertically(humanBoard, humanBoard.fleet.one.length, 4);
        humanBoard.placeShipHorizontally(humanBoard, humanBoard.fleet.two.length, 11);
        humanBoard.placeShipVertically(humanBoard, humanBoard.fleet.three.length, 54);
        humanBoard.placeShipHorizontally(humanBoard, humanBoard.fleet.four.length, 83);
        humanBoard.placeShipVertically(humanBoard, humanBoard.fleet.five.length, 25);
        expect(humanBoard.board).toEqual(expectedOne);
    });

    it("Set up the computer's game board and ships.", () => {
        computerBoard.placeShipVertically(computerBoard, computerBoard.fleet.one.length, 9);
        computerBoard.placeShipHorizontally(computerBoard, computerBoard.fleet.two.length, 20);
        computerBoard.placeShipVertically(computerBoard, computerBoard.fleet.three.length, 54);
        computerBoard.placeShipHorizontally(computerBoard, computerBoard.fleet.four.length, 35);
        computerBoard.placeShipVertically(computerBoard, computerBoard.fleet.five.length, 58);
        expect(computerBoard.board).toEqual(expectedTwo);
    });
});

// test('shows ship is sunk', () => {
//     game.computerBoard;
//     game.computerBoard.placeShipVertically(game.computerBoard, game.computerBoard.fleet.one.length, 9);
//     game.computerBoard.placeShipHorizontally(game.computerBoard, game.computerBoard.fleet.two.length, 20);
//     game.computerBoard.placeShipVertically(game.computerBoard, game.computerBoard.fleet.three.length, 54);
//     game.computerBoard.placeShipHorizontally(game.computerBoard, game.computerBoard.fleet.four.length, 35);
//     game.computerBoard.placeShipVertically(game.computerBoard, game.computerBoard.fleet.five.length, 58);
//     game.takeTurn(game.computerBoard, 20);
//     game.takeTurn(game.computerBoard, 21);
//     game.computerBoard.fleet.two.isSunk(game.computerBoard.fleet.two);
//     expect(computerBoard.fleet.two.sunk).toEqual(true);
// });