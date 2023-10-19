
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
    board1.checkGame();
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

    placeShip(ship,[x,y], player = true)
    {
      if(player === true)
      {
        if(y+ship.length <=11 && horizontal === false && isOverlap(ship,[x,y]) === false)
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
        else if(x+ship.length <=11 && horizontal === true && isOverlap(ship,[x,y]) === false)
        {
          for(let i=0;i< ship.length;i++)
          {
            removeShipDOM(ship.coord[i]);
          }
          ship.coord=[];
          for(let i=0;i< ship.length;i++)
          {
            let newcoord = [x+i,y];
            ship.coord.push(newcoord);
            placeShipDOM(newcoord);
          }
        }
      }
      else if(player === false)
      {
        console.log('working')
        if(y+ship.length <=11 && horizontal === false && isOverlap(ship,[x,y], false) === false)
        {
          ship.coord=[];
          for(let i=0;i< ship.length;i++)
          {
            let newcoord = [x,y+i];
            ship.coord.push(newcoord);
          }
        }
        else if(x+ship.length <=11 && horizontal === true && isOverlap(ship,[x,y], false) === false)
        {
          ship.coord=[];
          for(let i=0;i< ship.length;i++)
          {
            let newcoord = [x+i,y];
            ship.coord.push(newcoord);
          }
        }
      }
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
              hitShipDOM([x,y]);
              board1.receiveAttack(player1.compAttack())
            }
            //ship2
              for(let i=0;i<=1;i++)
              {
                  if(p1ship2.coord[i][0] === x && p1ship2.coord[i][1] ===y)
                  {
                    this.comphit.push([x,y]);
                    hitconf = true;
                    p1ship2.hit();
                    hitShipDOM([x,y]);
                    board1.receiveAttack(player1.compAttack())
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
                    hitShipDOM([x,y]);
                    board1.receiveAttack(player1.compAttack())
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
                    hitShipDOM([x,y]);
                    board1.receiveAttack(player1.compAttack())
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
                    hitShipDOM([x,y]);
                    board1.receiveAttack(player1.compAttack())
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
                    hitShipDOM([x,y]);
                    board1.receiveAttack(player1.compAttack())
                  }
              }

            if(hitconf === false)
            {
              missedShipDOM([x,y]);
              this.compmiss.push([x,y]);
              player1.myTurn = true;
            }
        }

      else if(player1.myTurn === true)
      {
        let beenhit = false;
        for(let i=0; i<board1.p1hit.length; i++)
        {
          if(board1.p1hit[i][0] === x && board1.p1hit[i][1] === y)
          {
            beenhit = true;
          }
        }
        for(let i=0; i<board1.p1miss.length; i++)
        {
          if(board1.p1miss[i][0] === x && board1.p1miss[i][1] === y)
          {
            beenhit = true;
          }
        }
        if(beenhit ===false)
        {
            if(compship1.coord[0][0] === x && compship1.coord[0][1] === y)
            {
              this.p1hit.push([x,y]);
              hitconf = true;
              compship1.hit();
              hitShipDOM([x,y]);
            }
            //ship2
              for(let i=0;i<=1;i++)
              {
                  if(compship2.coord[i][0] === x && compship2.coord[i][1] ===y)
                  {
                    this.p1hit.push([x,y]);
                    hitconf = true;
                    compship2.hit();
                    hitShipDOM([x,y]);
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
                    hitShipDOM([x,y]);
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
                    hitShipDOM([x,y]);
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
                    hitShipDOM([x,y]);
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
                    hitShipDOM([x,y]);
                  }
              }

            if(hitconf === false)
            {
              missedShipDOM([x,y]);
              this.p1miss.push([x,y]);
              player1.myTurn = false;
              board1.receiveAttack(player1.compAttack());
            }
          }
        }
    }

    checkGame()
    {
      if(p1ship1.sunk === true && p1ship2.sunk === true && p1ship3.sunk === true && p1ship4.sunk === true && p1ship5.sunk === true && p1ship6.sunk === true)
      {
        alert('Computer Wins');
        this.game = true;
        player1.wins++;
      }
      if(compship1.sunk === true && compship2.sunk === true && compship3.sunk === true && compship4.sunk === true && compship5.sunk === true && compship6.sunk === true)
      {
        alert('Player Wins');
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
    let x = Math.floor(Math.random()*10)+1;
    let y = Math.floor(Math.random()*10)+1;
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

    randNum()
    {
      return Math.floor(Math.random()*10)+1;
    }

    placeCompShips()
    {
      let x = Math.floor(Math.random()*10)+1;
      if(x <=5){horizontal = true
      }else{horizontal = false};
      board1.placeShip(compship6,[player1.randNum(),player1.randNum()],false)
      x = Math.floor(Math.random()*10)+1;
      if(x <=5){horizontal = true
      }else{horizontal = false};
      board1.placeShip(compship5,[player1.randNum(),player1.randNum()],false)
      x = Math.floor(Math.random()*10)+1;
      if(x <=5){horizontal = true
      }else{horizontal = false};
      board1.placeShip(compship4,[player1.randNum(),player1.randNum()],false)
      x = Math.floor(Math.random()*10)+1;
      if(x <=5){horizontal = true
      }else{horizontal = false};
      board1.placeShip(compship3,[player1.randNum(),player1.randNum()],false)
      x = Math.floor(Math.random()*10)+1;
      if(x <=5){horizontal = true
      }else{horizontal = false};
      board1.placeShip(compship2,[player1.randNum(),player1.randNum()],false)
      x = Math.floor(Math.random()*10)+1;
      if(x <=5){horizontal = true
      }else{horizontal = false};
      board1.placeShip(compship1,[player1.randNum(),player1.randNum()],false)
      horizontal = false
      console.log(compship6.coord)
      console.log(compship5.coord)
      console.log(compship4.coord)
      console.log(compship3.coord)
      console.log(compship2.coord)
      console.log(compship1.coord)
    }
}

function isOverlap(ship,[x,y], player = true)
{
  if (player === true)
  {
    if (horizontal === false)
    {
      for(let i=0;  i<ship.length; i++)
      {
        //check ship1
        if(ship != p1ship1)
        {
          if(p1ship1.coord[0][0] === x && p1ship1.coord[0][1] === y+i)
          {
            return true;
          }
        }
        //check ship2
        if(ship != p1ship2)
        {
          for(let j = 0; j<p1ship2.length; j++)
          {
            if(p1ship2.coord[j][0] === x && p1ship2.coord[j][1] === y+i)
            {
              return true;
            }
          }
        }
        //check ship3
        if(ship != p1ship3)
        {
          for(let j = 0; j<p1ship3.length; j++)
          {
            if(p1ship3.coord[j][0] === x && p1ship3.coord[j][1] === y+i)
            {
              return true;
            }
          }
        }
        //check ship4
        if(ship != p1ship4)
        {
          for(let j = 0; j<p1ship4.length; j++)
          {
            if(p1ship4.coord[j][0] === x && p1ship4.coord[j][1] === y+i)
            {
              return true;
            }
          }
        }
        //check ship5
        if(ship != p1ship5)
        {
          for(let j = 0; j<p1ship5.length; j++)
          {
            if(p1ship5.coord[j][0] === x && p1ship5.coord[j][1] === y+i)
            {
              return true;
            }
          }
        }
        //check ship6
        if(ship != p1ship6)
        {
          for(let j = 0; j<p1ship6.length; j++)
          {
            if(p1ship6.coord[j][0] === x && p1ship6.coord[j][1] === y+i)
            {
              return true;
            }
          }
        }
      }
      return false;
    }
    else if (horizontal === true)
    {
      for(let i=0;  i<ship.length; i++)
      {
        //check ship1
        if(ship != p1ship1)
        {
          if(p1ship1.coord[0][0] === x+i && p1ship1.coord[0][1] === y)
          {
            return true;
          }
        }
        //check ship2
        if(ship != p1ship2)
        {
          for(let j = 0; j<p1ship2.length; j++)
          {
            if(p1ship2.coord[j][0] === x+i && p1ship2.coord[j][1] === y)
            {
              return true;
            }
          }
        }
        //check ship3
        if(ship != p1ship3)
        {
          for(let j = 0; j<p1ship3.length; j++)
          {
            if(p1ship3.coord[j][0] === x+i && p1ship3.coord[j][1] === y)
            {
              return true;
            }
          }
        }
        //check ship4
        if(ship != p1ship4)
        {
          for(let j = 0; j<p1ship4.length; j++)
          {
            if(p1ship4.coord[j][0] === x+i && p1ship4.coord[j][1] === y)
            {
              return true;
            }
          }
        }
        //check ship5
        if(ship != p1ship5)
        {
          for(let j = 0; j<p1ship5.length; j++)
          {
            if(p1ship5.coord[j][0] === x+i && p1ship5.coord[j][1] === y)
            {
              return true;
            }
          }
        }
        //check ship6
        if(ship != p1ship6)
        {
          for(let j = 0; j<p1ship6.length; j++)
          {
            if(p1ship6.coord[j][0] === x+i && p1ship6.coord[j][1] === y)
            {
              return true;
            }
          }
        }
      }
      return false;
    }
  }
  else if(player === false)
  {
    console.log('overlap running')
    if (horizontal === false)
    {
      for(let i=0;  i<ship.length; i++)
      {
        //check ship1
        if(ship != compship1)
        {
          if(compship1.coord[0][0] === x && compship1.coord[0][1] === y+i)
          {
            return true;
          }
        }
        //check ship2
        if(ship != compship2)
        {
          for(let j = 0; j<compship2.length; j++)
          {
            if(compship2.coord[j][0] === x && compship2.coord[j][1] === y+i)
            {
              return true;
            }
          }
        }
        //check ship3
        if(ship != compship3)
        {
          for(let j = 0; j<compship3.length; j++)
          {
            if(compship3.coord[j][0] === x && compship3.coord[j][1] === y+i)
            {
              return true;
            }
          }
        }
        //check ship4
        if(ship != compship4)
        {
          for(let j = 0; j<compship4.length; j++)
          {
            if(compship4.coord[j][0] === x && compship4.coord[j][1] === y+i)
            {
              return true;
            }
          }
        }
        //check ship5
        if(ship != compship5)
        {
          for(let j = 0; j<compship5.length; j++)
          {
            if(compship5.coord[j][0] === x && compship5.coord[j][1] === y+i)
            {
              return true;
            }
          }
        }
        //check ship6
        if(ship != compship6)
        {
          for(let j = 0; j<compship6.length; j++)
          {
            if(compship6.coord[j][0] === x && compship6.coord[j][1] === y+i)
            {
              return true;
            }
          }
        }
      }
      console.log('hitting false')
      return false;
    }
    else if (horizontal === true)
    {
      for(let i=0;  i<ship.length; i++)
      {
        //check ship1
        if(ship != compship1)
        {
          if(compship1.coord[0][0] === x+i && compship1.coord[0][1] === y)
          {
            return true;
          }
        }
        //check ship2
        if(ship != compship2)
        {
          for(let j = 0; j<compship2.length; j++)
          {
            if(compship2.coord[j][0] === x+i && compship2.coord[j][1] === y)
            {
              return true;
            }
          }
        }
        //check ship3
        if(ship != compship3)
        {
          for(let j = 0; j<compship3.length; j++)
          {
            if(compship3.coord[j][0] === x+i && compship3.coord[j][1] === y)
            {
              return true;
            }
          }
        }
        //check ship4
        if(ship != compship4)
        {
          for(let j = 0; j<compship4.length; j++)
          {
            if(compship4.coord[j][0] === x+i && compship4.coord[j][1] === y)
            {
              return true;
            }
          }
        }
        //check ship5
        if(ship != compship5)
        {
          for(let j = 0; j<compship5.length; j++)
          {
            if(compship5.coord[j][0] === x+i && compship5.coord[j][1] === y)
            {
              return true;
            }
          }
        }
        //check ship6
        if(ship != compship6)
        {
          for(let j = 0; j<compship6.length; j++)
          {
            if(compship6.coord[j][0] === x+i && compship6.coord[j][1] === y)
            {
              return true;
            }
          }
        }
      }
      return false;
    }
  }
}

exports.board = gameboard;
exports.ship = ship;
exports.player = player;