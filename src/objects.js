class ship 
{
  constructor(length, numhits = 0, sunk = false)
  {
    this.length = length;
    this.numhits = numhits;
    this.sunk = sunk;
  }
  hit()
  {
  }
  isSunk()
  {
  }
}

module.exports = ship;