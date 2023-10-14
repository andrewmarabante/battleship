const {board} = require('./objects');
const {ship} = require('./objects');

test('Can place ships at specific coordinates',() => {
    const board1 = new board;
    const ship3 = new ship(3,[[3,1],[3,2],[3,3]]);
    board1.placeShip(ship3,[1,2]);
    expect(ship3.coord).toEqual([[1,2],[1,3],[1,4]])
  });

test('Takes an attack,determines hit or miss, and records it',() => {
    const board1 = new board;
    board1.setBoard();
    board1.receiveAttack([5,2]);
    board1.receiveAttack([4,2]);
    board1.receiveAttack([1,2]);
    board1.receiveAttack([6,2]);
    board1.receiveAttack([8,2]);
    board1.receiveAttack([9,3]);
    expect(board1.hit).toEqual([[5,2],[4,2],[6,2]]);
    expect(board1.miss).toEqual([[1,2],[8,2],[9,3]]);
  });

test('Sends a hit to corresponding ship if hit',() => {
    const board1 = new board;
    board1.setBoard;
    board1.receiveAttack([3,1]);
    board1.receiveAttack([3,2]);
    expect(ship3.numhits).toBe(2);
  });

  test('Doesnt allow for placement if ship will be off grid horizontally',() => {
    const board1 = new board;
    board1.setBoard;
    expect(board1.placeShip(ship5,([9,8]))).toBe('Invalid Placement');
  });

  test('checkGame will trigger alert if all ships are sunk',() => {
    const board1 = new board;
    board1.setBoard;
    ship2.sunk = true;
    ship3.sunk = true;
    ship4.sunk = true;
    ship5.sunk = true;
    ship6.sunk = true;
    board1.receiveAttack([1,1])
    expect(board1.isGame).toBe(true);
  });
