const {board} = require('./objects');
const {ship} = require('./objects');
const {player} = require('./objects');

test('After Every missed attack the player turn switches',() => {
    const board1 = new board;
    board1.setBoard();
    board1.receiveAttack(1,1);
    expect(player1.myTurn).toBe(true);
    board1.receiveAttack(2,1);
    expect(player1.myTurn).toBe(true);
    board1.receiveAttack(3,1);
    expect(player1.myTurn).toBe(true);
    board1.receiveAttack(8,8);
    expect(player1.myTurn).toBe(false);

  });

  test('Computer function makes random guesses within 10x10',() => {
    const board1 = new board;
    board1.setBoard();
    expect(player1.randNum).toBeGreaterThanOrEqual(0);
    expect(player1.randNum).toBeLessThanOrEqual(10);
  });

  test('Computer function will not choose the same square',() => {
    const board1 = new board;
    board1.setBoard();
    const attack = player1.compAttack();
    expect(player1.compAttack).not.toEqual(attack);
  });