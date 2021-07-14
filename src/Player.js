import { indexOf } from "lodash";

const Player = function() {
    
    const attackBoard = function(game, point) {
        return game.receiveAttack(game, point);
    }

    const getRandomIntBetween = function(min, max, game) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let finalDigit;
        let index;

        do {
            finalDigit = Math.floor(Math.random() * (max - min + 1)) + min;
            index = game.board[finalDigit];
        } 
        // while (game.board.includes(finalDigit) === false);
        while (game.board[index] === -1)

        return finalDigit;
    }

    const randomAttack = function(game) {
        var point = game.board.indexOf(getRandomIntBetween(0, 99, game));
        // if (game.board[index] !== -1) {
        return game.receiveAttack(game, point);
    }
    // }
    return { attackBoard, getRandomIntBetween, randomAttack }
}
export { Player }