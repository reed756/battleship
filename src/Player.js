const Player = function() {
    
    const attackBoard = function(game, point) {
        game.receiveAttack(game, point);
    }

    const randomAttack = function(game) {
        const point = Math.floor(Math.random() * 100);
        game.receiveAttack(game, point);
    }

    return { attackBoard, randomAttack }
}
module.exports = Player;