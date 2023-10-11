import _ from 'lodash';

class ship 
{
  constructor(length)
  {
    this.length = length;
    this.numhits = 0;
    this.sunk = false;
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

let ship1 = new ship(2);
console.log(ship1.hit);
console.log(ship1.length);