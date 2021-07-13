import { gameboard } from '../gameboard.js';
import { Player } from "../Player";

test('Shows player attacking the enemy gameboard', () => {
    const newGameBoard = gameboard();
    const newPlayer = Player();
    newPlayer.attackBoard(newGameBoard, 11);
    expect(newGameBoard.board[11]).toBe(-1);
});

test('Shows computer player randomly attacking the gameboard', () => {
    const newGameBoard = gameboard();
    const newPlayer = Player();
    const expected = [0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0];
    newPlayer.randomAttack(newGameBoard);
    expect(newGameBoard.board).not.toEqual(expected);
});