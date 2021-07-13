import { gameboard } from '../gameboard.js';

describe('arrayContaining', () => {
    const newGameBoard = gameboard();
    const expected = [0,0,0,0,5,5,5,5,5,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0]
    newGameBoard.placeShipHorizontally(newGameBoard, newGameBoard.fleet.five.length, 4)
    it("Place one ship and matches where it's been put on the gameboard horizontally", () => {
        expect(newGameBoard.board).toEqual(expected);
    });
});

describe('arrayContaining', () => {
    const newGameBoard = gameboard();
    const expected = [0,0,0,0,5,0,0,0,0,0,
        0,0,0,0,5,0,0,0,0,0,
        0,0,0,0,5,0,0,0,0,0,
        0,0,0,0,5,0,0,0,0,0,
        0,0,0,0,5,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0]
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.five.length, 4)
    it("Place one ship and matches where it's been put on the gameboard vertically", () => {
        expect(newGameBoard.board).toEqual(expected);
    });
});

describe('arrayContaining', () => {
    const newGameBoard = gameboard();
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.one.length, 4);
    newGameBoard.placeShipHorizontally(newGameBoard, newGameBoard.fleet.two.length, 11);
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.three.length, 54);
    newGameBoard.placeShipHorizontally(newGameBoard, newGameBoard.fleet.four.length, 83);
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.five.length, 25);
    const expected = [0,0,0,0,1,0,0,0,0,0,
        0,2,2,0,0,0,0,0,0,0,
        0,0,0,0,0,5,0,0,0,0,
        0,0,0,0,0,5,0,0,0,0,
        0,0,0,0,0,5,0,0,0,0,
        0,0,0,0,3,5,0,0,0,0,
        0,0,0,0,3,5,0,0,0,0,
        0,0,0,0,3,0,0,0,0,0,
        0,0,0,4,4,4,4,0,0,0,
        0,0,0,0,0,0,0,0,0,0]
    it("Place multiple ships and matches where it's been put on the gameboard", () => {
        expect(newGameBoard.board).toEqual(expected);
    });
});

describe('arrayContaining', () => {
    const newGameBoard = gameboard();
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.one.length, 4);
    newGameBoard.placeShipHorizontally(newGameBoard, newGameBoard.fleet.two.length, 11);
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.three.length, 54);
    newGameBoard.placeShipHorizontally(newGameBoard, newGameBoard.fleet.four.length, 83);
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.five.length, 25);
    newGameBoard.receiveAttack(newGameBoard, 5);
    newGameBoard.receiveAttack(newGameBoard, 15);
    newGameBoard.receiveAttack(newGameBoard, 46);
    const expected = [0,0,0,0,1,-1,0,0,0,0,
        0,2,2,0,0,-1,0,0,0,0,
        0,0,0,0,0,5,0,0,0,0,
        0,0,0,0,0,5,0,0,0,0,
        0,0,0,0,0,5,-1,0,0,0,
        0,0,0,0,3,5,0,0,0,0,
        0,0,0,0,3,5,0,0,0,0,
        0,0,0,0,3,0,0,0,0,0,
        0,0,0,4,4,4,4,0,0,0,
        0,0,0,0,0,0,0,0,0,0]
    it("Check that shots show as missed on gameboard", () => {
        expect(newGameBoard.board).toEqual(expected);
    });
});

test('Shows ship has been hit on ship object', () => {
    const newGameBoard = gameboard();
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.one.length, 4);
    newGameBoard.placeShipHorizontally(newGameBoard, newGameBoard.fleet.two.length, 11);
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.three.length, 54);
    newGameBoard.placeShipHorizontally(newGameBoard, newGameBoard.fleet.four.length, 83);
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.five.length, 25);
    newGameBoard.receiveAttack(newGameBoard, 11);
    expect(newGameBoard.fleet.two).toMatchObject({
        length: 2,
        hitWhere: [11],
        sunk: false
    });
});

test('Shows ship has been sunk on ship object', () => {
    const newGameBoard = gameboard();
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.one.length, 4);
    newGameBoard.placeShipHorizontally(newGameBoard, newGameBoard.fleet.two.length, 11);
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.three.length, 54);
    newGameBoard.placeShipHorizontally(newGameBoard, newGameBoard.fleet.four.length, 83);
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.five.length, 25);
    newGameBoard.receiveAttack(newGameBoard, 11);
    newGameBoard.receiveAttack(newGameBoard, 12);
    newGameBoard.fleet.two.isSunk(newGameBoard.fleet.two);
    expect(newGameBoard.fleet.two.sunk).toEqual(true);
});

test('Shows all ships have been sunk on gameboard object', () => {
    const newGameBoard = gameboard();
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.one.length, 4);
    newGameBoard.placeShipHorizontally(newGameBoard, newGameBoard.fleet.two.length, 11);
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.three.length, 54);
    newGameBoard.placeShipHorizontally(newGameBoard, newGameBoard.fleet.four.length, 83);
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.five.length, 25);
    newGameBoard.receiveAttack(newGameBoard, 4);
    newGameBoard.receiveAttack(newGameBoard, 11);
    newGameBoard.receiveAttack(newGameBoard, 12);
    newGameBoard.receiveAttack(newGameBoard, 54);
    newGameBoard.receiveAttack(newGameBoard, 64);
    newGameBoard.receiveAttack(newGameBoard, 74);
    newGameBoard.receiveAttack(newGameBoard, 83);
    newGameBoard.receiveAttack(newGameBoard, 84);
    newGameBoard.receiveAttack(newGameBoard, 85);
    newGameBoard.receiveAttack(newGameBoard, 86);
    newGameBoard.receiveAttack(newGameBoard, 25);
    newGameBoard.receiveAttack(newGameBoard, 35);
    newGameBoard.receiveAttack(newGameBoard, 45);
    newGameBoard.receiveAttack(newGameBoard, 55);
    newGameBoard.receiveAttack(newGameBoard, 65);
    expect(newGameBoard.allSunk(newGameBoard)).toEqual(true);
});

test('Shows all ships have not been sunk on gameboard object', () => {
    const newGameBoard = gameboard();
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.one.length, 4);
    newGameBoard.placeShipHorizontally(newGameBoard, newGameBoard.fleet.two.length, 11);
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.three.length, 54);
    newGameBoard.placeShipHorizontally(newGameBoard, newGameBoard.fleet.four.length, 83);
    newGameBoard.placeShipVertically(newGameBoard, newGameBoard.fleet.five.length, 25);
    newGameBoard.receiveAttack(newGameBoard, 4);
    newGameBoard.receiveAttack(newGameBoard, 11);
    newGameBoard.receiveAttack(newGameBoard, 55);
    newGameBoard.receiveAttack(newGameBoard, 75);    
    expect(newGameBoard.allSunk(newGameBoard)).toEqual(false);
});



