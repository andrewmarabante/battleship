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

module.exports = ship;