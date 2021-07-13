import { ship } from '../ship.js';

test('Adds ship object with the following properties', () => {
  expect(ship(5)).toMatchObject({
      length: 5,
      hitWhere: [],
      sunk: false
  });
});

test('Hit function amends the hitWhere property', () => {
    const newShip = ship(5);
    newShip.hit(3);
    expect(newShip).toMatchObject({
        length: 5,
        hitWhere: [3],
        sunk: false
    });
});

test("Show that ship hasn't sunk after one hit", () => {
    const newShip = ship(5);
    newShip.hit(3);
    newShip.isSunk(newShip);
    expect(newShip.sunk).toEqual(false);
});

test("Show that ship has sunk after three hits", () => {
    const newShip = ship(3);
    newShip.hit(3);
    newShip.hit(2);
    newShip.hit(1);
    newShip.isSunk(newShip);
    expect(newShip.sunk).toEqual(true);
});

test("Show that ship hasn't sunk after two hits", () => {
    const newShip = ship(3);
    newShip.hit(2);
    newShip.hit(1);
    newShip.isSunk(newShip);
    expect(newShip.sunk).toEqual(false);
});

test("Show that ship has sunk after three hits", () => {
    const newShip = ship(2);
    newShip.hit(2);
    newShip.hit(1);
    newShip.isSunk(newShip);
    expect(newShip.sunk).toEqual(true);
});