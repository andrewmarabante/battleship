import _ from 'lodash';

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
    console.log('working1');
  }
  isSunk()
  {
    console.log('working2');
  }
}

let ship1 = new ship(3);
console.log(ship1.isSunk);
console.log(ship1.sunk);