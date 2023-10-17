
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
    this.isSunk();
  }
  isSunk()
  {
    if(this.numhits === this.length && this.sunk!= true)
    {
      this.sunk = true;
    }
  }
}

class gameboard
{
  constructor()
  {
    this.p1miss = [];
    this.compmiss = []
    this.p1hit = [];
    this.comphit = [];
    this.game = false;
  }

    setBoard()
    {
      //player ships
      globalThis.p1ship1 = new ship(1,[[1,1]]);
      globalThis.p1ship2 = new ship(2,[[2,1],[2,2]]);
      globalThis.p1ship3 = new ship(3,[[3,1],[3,2],[3,3]]);
      globalThis.p1ship4 = new ship(3,[[4,1],[4,2],[4,3]]);
      globalThis.p1ship5 = new ship(4,[[5,1],[5,2],[5,3],[5,4]]);
      globalThis.p1ship6 = new ship(5,[[6,1],[6,2],[6,3],[6,4],[6,5]]);
      //computer ships
      globalThis.compship1 = new ship(1,[[1,1]]);
      globalThis.compship2 = new ship(2,[[2,1],[2,2]]);
      globalThis.compship3 = new ship(3,[[3,1],[3,2],[3,3]]);
      globalThis.compship4 = new ship(3,[[4,1],[4,2],[4,3]]);
      globalThis.compship5 = new ship(4,[[5,1],[5,2],[5,3],[5,4]]);
      globalThis.compship6 = new ship(5,[[6,1],[6,2],[6,3],[6,4],[6,5]]);

      globalThis.player1 = new player();
    }

    placeShip(ship,[x,y])
    {
      if(y+ship.length <=11)
      {
        for(let i=0;i< ship.length;i++)
        {
          removeShipDOM(ship.coord[i]);
        }
        ship.coord=[];
        for(let i=0;i< ship.length;i++)
        {
          let newcoord = [x,y+i];
          ship.coord.push(newcoord);
          placeShipDOM(newcoord);
        }
      }
      else{console.log('Invalid Placement')}
    }

    receiveAttack([x,y])
    {
      let hitconf = false;

      //ship1
      if(player1.myTurn === false)
      {
        if(p1ship1.coord[0][0] === x && p1ship1.coord[0][1] === y)
        {
          this.comphit.push([x,y]);
          hitconf = true;
          p1ship1.hit();
        }
        //ship2
          for(let i=0;i<=1;i++)
          {
              if(p1ship2.coord[i][0] === x && p1ship2.coord[i][1] ===y)
              {
                this.comphit.push([x,y]);
                hitconf = true;
                p1ship2.hit();
              }
          }
          //ship3
          for(let i=0;i<=2;i++)
          {
              if(p1ship3.coord[i][0] === x && p1ship3.coord[i][1] ===y)
              {
                this.comphit.push([x,y]);
                hitconf = true;
                p1ship3.hit();
              }
          }
          //ship4
          for(let i=0;i<=2;i++)
          {
              if(p1ship4.coord[i][0] === x && p1ship4.coord[i][1] ===y)
              {
                this.comphit.push([x,y]);
                hitconf = true;
                p1ship4.hit();
              }
          }
          //ship5
          for(let i=0;i<=3;i++)
          {
              if(p1ship5.coord[i][0] === x && p1ship5.coord[i][1] ===y)
              {
                this.comphit.push([x,y]);
                hitconf = true;
                p1ship5.hit();
              }
          }
          //ship6
          for(let i=0;i<=4;i++)
          {
              if(p1ship6.coord[i][0] === x && p1ship6.coord[i][1] ===y)
              {
                this.comphit.push([x,y]);
                hitconf = true;
                p1ship6.hit();
              }
          }

        if(hitconf === false)
        {
          this.compmiss.push([x,y]);
          player1.myTurn = true;
        }
      }

      if(player1.myTurn === true)
      {
        if(compship1.coord[0][0] === x && compship1.coord[0][1] === y)
        {
          this.p1hit.push([x,y]);
          hitconf = true;
          compship1.hit();
        }
        //ship2
          for(let i=0;i<=1;i++)
          {
              if(compship2.coord[i][0] === x && compship2.coord[i][1] ===y)
              {
                this.p1hit.push([x,y]);
                hitconf = true;
                compship2.hit();
              }
          }
          //ship3
          for(let i=0;i<=2;i++)
          {
              if(compship3.coord[i][0] === x && compship3.coord[i][1] ===y)
              {
                this.p1hit.push([x,y]);
                hitconf = true;
                compship3.hit();
              }
          }
          //ship4
          for(let i=0;i<=2;i++)
          {
              if(compship4.coord[i][0] === x && compship4.coord[i][1] ===y)
              {
                this.p1hit.push([x,y]);
                hitconf = true;
                compship4.hit();
              }
          }
          //ship5
          for(let i=0;i<=3;i++)
          {
              if(compship5.coord[i][0] === x && compship5.coord[i][1] ===y)
              {
                this.p1hit.push([x,y]);
                hitconf = true;
                compship5.hit();
              }
          }
          //ship6
          for(let i=0;i<=4;i++)
          {
              if(compship6.coord[i][0] === x && compship6.coord[i][1] ===y)
              {
                this.p1hit.push([x,y]);
                hitconf = true;
                compship6.hit();
              }
          }

        if(hitconf === false)
        {
          this.p1miss.push([x,y]);
          player1.myTurn = false;
        }
      }
    }

    checkGame()
    {
      if(p1ship1.sunk === true && p1ship2.sunk === true && p1ship3.sunk === true && p1ship4.sunk === true && p1ship5.sunk === true && p1ship6.sunk === true)
      {
        this.game = true;
        player1.wins++;
      }
      if(compship1.sunk === true && compship2.sunk === true && compship3.sunk === true && compship4.sunk === true && compship5.sunk === true && compship6.sunk === true)
      {
        this.game = true;
        player1.losses++;
      }
    }
}

class player
{
  constructor()
  {
    this.myTurn = true;
    this.wins = 0;
    this.compAttacks = [];
  }

  compAttack()
  {
    let x = Math.floor(Math.random()*10);
    let y = Math.floor(Math.random()*10);
    if(this.compAttacks.length<=100)
    {
      if(this.compAttacks.length !== 0)
      {
        for(let i=0; i<this.compAttacks.length; i++)
        {
          if(this.compAttacks[i][0] === x && this.compAttacks[i][1] === y )
          {
          return this.compAttack();
          }
        }
          this.compAttacks.push([x,y])
          return [x,y];
      }
      else{
        this.compAttacks.push([x,y]);
        return [x,y];}
      }else{return 'Invalid'}
    }
}

exports.board = gameboard;
exports.ship = ship;
exports.player = player;