const ship = function(shipLength) {
    let length = shipLength;
    let hitWhere = [];
    let sunk = false;

    const hit = hitArea => {
        hitWhere.push(hitArea);
    }

    const isSunk = () => {
        if (hitWhere.length == length) {
            return sunk = true;
        } else {
            return sunk = false;
        }
    }

    return { length, hitWhere, sunk, hit, isSunk};
}
module.exports = ship;