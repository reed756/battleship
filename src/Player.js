const Player = function() {
    const attackBoard = function(game, point) {
        game.receiveAttack(game, point);
    }
    return { attackBoard }
}
module.exports = Player;