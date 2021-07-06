const gameboard = require('../gameboard');
const Player = require('../Player');

test('Shows player attacking the enemy gameboard', () => {
    const newGameBoard = gameboard();
    const newPlayer = Player();
    newPlayer.attackBoard(newGameBoard, 11);
    expect(newGameBoard.board[11]).toBe(-1);
});