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
    board1.receiveAttack([1,1]);
    expect(board1.p1hit).toEqual([[1,1]]);
    board1.receiveAttack([8,8]);
    expect(board1.p1miss).toEqual([[8,8]]);
    board1.receiveAttack([1,1]);
    expect(board1.comphit).toEqual([[1,1]]);
    board1.receiveAttack([3,7]);
    expect(board1.compmiss).toEqual([[3,7]]);
  });

test('Sends a hit to corresponding ship if hit',() => {
    const board1 = new board;
    board1.setBoard();
    board1.receiveAttack([3,1]);
    board1.receiveAttack([3,2]);
    expect(compship3.numhits).toBe(2);
  });

  test('Doesnt allow for placement if ship will be off grid vertically',() => {
    const board1 = new board;
    board1.setBoard();
    board1.placeShip(p1ship5,[9,8]);
    expect(board1.placeShip(p1ship5,[9,8])).toBe('Invalid Placement');
    expect(p1ship5.coord).toEqual([[5,1],[5,2],[5,3],[5,4]])
    board1.placeShip(compship5,[5,2]);
    expect(compship5.coord).toEqual([[5,2],[5,3],[5,4],[5,5]])
  });

  test('checkGame will trigger alert if all ships are sunk',() => {
    const board1 = new board;
    board1.setBoard();
    compship2.sunk = true;
    compship3.sunk = true;
    compship4.sunk = true;
    compship5.sunk = true;
    compship6.sunk = true;
    board1.checkGame();
    expect(board1.game).toBe(false);
    board1.receiveAttack([1,1]);
    board1.checkGame();
    expect(board1.game).toBe(true);
  });
