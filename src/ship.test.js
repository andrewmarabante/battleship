const {ship} = require('./objects');
const {board} = require('./objects');

test('Ship has a default length of 1',() => {
  const ship1 = new ship();
  expect(ship1.length).toBe(1);
});

test('Ship can take in different lengths', () => {
  const ship1 = new ship(2);
  const ship2 = new ship(1);
  const ship3 = new ship(3);
  expect(ship1.length).toBe(2);
  expect(ship2.length).toBe(1);
  expect(ship3.length).toBe(3);
});

test('Ship starts with 0 numhits by default',() => {
  const ship1 = new ship();
  expect(ship1.numhits).toBe(0);
});

test('Ship starts with sunk = false by default',() => {
  const ship1 = new ship();
  expect(ship1.sunk).toBe(false);
});


test('hit function adds 1 to numhits',() => {
  const ship1 = new ship();
  ship1.hit();
  ship1.hit();
  ship1.hit();
  expect(ship1.numhits).toBe(3);
});

test('isSunk checks if numhits = length, if so turns sunk from false to true',() => {
  const ship1 = new ship(3);
  expect(ship1.sunk).toBe(false);
  ship1.hit();
  expect(ship1.sunk).toBe(false);
  ship1.hit();
  expect(ship1.sunk).toBe(false);
  ship1.hit();
  ship1.isSunk();
  expect(ship1.sunk).toBe(true);
});

test('Hits will run isSunk function',() => {
  const board1 = new board;
  board1.setBoard();
  ship1.hit()
  expect(ship1.sunk).toBe(true)
  ship2.hit();
  ship2.hit();
  expect(ship2.sunk).toBe(true);
  expect(ship3.sunk).toBe(false);
});
