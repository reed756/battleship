const Player = function() {
    
    const attackBoard = function(game, point) {
        return game.receiveAttack(game, point);
    }

    const getRandomIntBetween = function() {

    var values = [];
    for (var i = 0; i <= 99; i++){
        values.push(i);
    }
        
    var random = values.splice(Math.random()*values.length,1)[0];
    return random;
    }

    const randomAttack = function(game) {
        var point = getRandomIntBetween();
        return game.receiveAttack(game, point);
    }
    // }
    return { attackBoard, getRandomIntBetween, randomAttack }
}
export { Player }