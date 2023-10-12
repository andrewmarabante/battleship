const {board} = require('./objects');

test('Can place ships at specific coordinates',() => {
    const board1 = new board;
    board1.placeShip(ship3,[5,6]);
    expect(board1.ship3).toBe([[5,6],[5,7],[5,8]])
  });

test('Takes an attack,determines hit or miss, and records it',() => {
    const board1 = new board;
    board1.receiveAttack([9,9]);
    expect(board1.miss).toBe([9,9])
    board1.receiveAttack([1,1]);
    expect(board1.hit).toBe([1,1])
  });

test('Sends a hit to corresponding ship if hit',() => {
    const board1 = new board;
    board1.receiveAttack([1,1]);
    expect(ship1.numhits).toBe(1);
    expect(ship1.sunk).toBe(true);
  });
