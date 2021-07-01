const gameboard = require('./src/gameboard');
const ship = require('./src/ship');

test('Check Ship has been placed at right coordinates for horizontal axis', () => {
    const newShip = ship(5);
    const newGameBoard = gameboard();
    newGameBoard.placeShip(newGameBoard, newShip.length, 1, 3);
    expect(newGameBoard.board).toMatchObject({
        1: [0, 0, 0, "X", "X", "X", "X", "X", 0, 0],
        2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    });
  });