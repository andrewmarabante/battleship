class ship 
{
  constructor(length = 1, numhits = 0, sunk = false)
  {
    this.length = length;
    this.numhits = numhits;
    this.sunk = sunk;
  }
  hit()
  {
    this.numhits++;
  }
  isSunk()
  {
    if(this.numhits === this.length && this.sunk!== true)
    {
      this.sunk = true;
    }
  }
}

class gameboard
{
  constructor()
  {
    this.miss = [];
    this.hit = [];
    this.ship1 = [[1,1]];
    this.ship2 = [[2,1],[2,2]];
    this.ship3 = [[3,1],[3,2],[3,3]];
    this.ship4 = [[4,1],[4,2],[4,3]];
    this.ship5 = [[5,1],[5,2],[5,3],[5,4]];
    this.ship6 = [[6,1],[6,2],[6,3],[6,4],[6,5]];
  }

    placeShip()
    {

    }

    receiveAttack()
    {

    }

    checkGame()
    {

    }
}


  const ship1 = new ship(1);
  const ship2 = new ship(2);
  const ship3 = new ship(3);
  const ship4 = new ship(3);
  const ship5 = new ship(4);
  const ship6 = new ship(5);

exports.board = gameboard;
exports.ship = ship;