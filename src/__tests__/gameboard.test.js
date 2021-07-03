const gameboard = require('../gameboard');
const ship = require('../ship');

describe('arrayContaining', () => {
    const newGameBoard = gameboard();
    const newShip = ship(5);
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
    it("Place one ship and matches where it's been put on the gameboard horizontally", () => {
        expect(newGameBoard.placeShipHorizontally(newGameBoard, newShip.length, 4)).toEqual(expect.arrayContaining(expected));
    });
});

describe('arrayContaining', () => {
    const newGameBoard = gameboard();
    const newShip = ship(5);
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
    it("Place one ship and matches where it's been put on the gameboard vertically", () => {
        expect(newGameBoard.placeShipVertically(newGameBoard, newShip.length, 4)).toEqual(expect.arrayContaining(expected));
    });
});






// test('Check Ship has been placed at right coordinates for vertical axis', () => {
//     const newGameBoard = gameboard();
//     newGameBoard.placeShip(newGameBoard, 5, 3, 7, 3, 3);
//     expect(newGameBoard.board).toMatchObject({
//         1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         3: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
//         4: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
//         5: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
//         6: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
//         7: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
//         8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     });
// });

// test('Place multiple ships', () => {
//     const newGameBoard = gameboard();
//     newGameBoard.placeShip(newGameBoard, 5, 3, 7, 3, 3);
//     newGameBoard.placeShip(newGameBoard, 3, 4, 4, 6, 8);
//     expect(newGameBoard.board).toMatchObject({
//         1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         3: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
//         4: [0, 0, 0, 5, 0, 0, 3, 3, 3, 0],
//         5: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
//         6: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
//         7: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
//         8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     });
// });

// test('Place multiple ships', () => {
//     const newGameBoard = gameboard();
//     newGameBoard.placeShip(newGameBoard, 5, 3, 7, 3, 3);
//     newGameBoard.placeShip(newGameBoard, 3, 4, 4, 6, 8);
//     newGameBoard.placeShip(newGameBoard, 2, 1, 1, 6, 7);
//     newGameBoard.placeShip(newGameBoard, 4, 6, 9, 1, 1);
//     expect(newGameBoard.board).toMatchObject({
//         1: [0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
//         2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         3: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
//         4: [0, 0, 0, 5, 0, 0, 3, 3, 3, 0],
//         5: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
//         6: [0, 4, 0, 5, 0, 0, 0, 0, 0, 0],
//         7: [0, 4, 0, 5, 0, 0, 0, 0, 0, 0],
//         8: [0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
//         9: [0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
//         10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     });
// });