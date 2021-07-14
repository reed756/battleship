const Player = function() {
    
    const attackBoard = function(game, point) {
        return game.receiveAttack(game, point);
    }

    var values = [];
    for (var i = 0; i <= 99; i++){
        values.push(i);
    }

    const getRandomIntBetween = function(array) {

        var index = Math.floor(Math.random() * array.length);
        var item = array[index];
        array.splice(index, 1);
        return item;
    };

    const randomAttack = function(game) {
        var point = getRandomIntBetween(values);
        console.log(point);
        return game.receiveAttack(game, point);
    }
    // }
    return { attackBoard, getRandomIntBetween, randomAttack }
}
export { Player }