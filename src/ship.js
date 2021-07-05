const ship = function(shipLength) {
    
    let length = shipLength;
    let hitWhere = [];
    let sunk = false;

    const hit = (hitArea) => {
        hitWhere.push(hitArea);
    }

    const isSunk = (ship) => {
        if (hitWhere.length == length) {
            ship.sunk = true;
        } else if (hitWhere.length !== length) {
            ship.sunk = false;
        }
    }

    return { length, hitWhere, sunk, hit, isSunk};
}
module.exports = ship;