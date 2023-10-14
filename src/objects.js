class ship 
{
  constructor(length = 1, coord = [])
  {
    this.length = length;
    this.numhits = 0;
    this.sunk = false;
    this.coord = coord;
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
  }

    setBoard()
    {
      globalThis.ship1 = new ship(1,[[1,1]]);
      globalThis.ship2 = new ship(2,[[2,1],[2,2]]);
      globalThis.ship3 = new ship(3,[[3,1],[3,2],[3,3]]);
      globalThis.ship4 = new ship(3,[[4,1],[4,2],[4,3]]);
      globalThis.ship5 = new ship(4,[[5,1],[5,2],[5,3],[5,4]]);
      globalThis.ship6 = new ship(5,[[6,1],[6,2],[6,3],[6,4],[6,5]]);
    }

    placeShip(ship,[x,y])
    {
      ship.coord=[];
      for(let i=0;i< ship.length;i++)
      {
        let newcoord = [x,y+i];
        ship.coord.push(newcoord);
      }
    }

    receiveAttack([x,y])
    {
      let hitconf = false;

      //ship1
      if(ship1.coord[0][0] === x && ship1.coord[0][1] === y)
      {
        this.hit.push([x,y]);
        hitconf = true;
        ship1.hit();
      }
      //ship2
        for(let i=0;i<=1;i++)
        {
            if(ship2.coord[i][0] === x && ship2.coord[i][1] ===y)
            {
              this.hit.push([x,y]);
              hitconf = true;
              ship2.hit();
            }
        }
        //ship3
        for(let i=0;i<=2;i++)
        {
            if(ship3.coord[i][0] === x && ship3.coord[i][1] ===y)
            {
              this.hit.push([x,y]);
              hitconf = true;
              ship3.hit();
            }
        }
        //ship4
        for(let i=0;i<=2;i++)
        {
            if(ship4.coord[i][0] === x && ship4.coord[i][1] ===y)
            {
              this.hit.push([x,y]);
              hitconf = true;
              ship4.hit();
            }
        }
        //ship5
        for(let i=0;i<=3;i++)
        {
            if(ship5.coord[i][0] === x && ship5.coord[i][1] ===y)
            {
              this.hit.push([x,y]);
              hitconf = true;
              ship5.hit();
            }
        }
        //ship6
        for(let i=0;i<=4;i++)
        {
            if(ship6.coord[i][0] === x && ship6.coord[i][1] ===y)
            {
              this.hit.push([x,y]);
              hitconf = true;
              ship6.hit();
            }
        }

      if(hitconf === false)
      {
        this.miss.push([x,y]);
      }
    }

    checkGame()
    {

    }
}


exports.board = gameboard;
exports.ship = ship;