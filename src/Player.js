const Player = function() {
    
    const attackBoard = function(game, point) {
        return game.receiveAttack(game, point);
    }

    const randomAttack = function(game) {
        const point = Math.floor(Math.random() * 100);
        return game.receiveAttack(game, point);
    }

    return { attackBoard, randomAttack }
}
export { Player }