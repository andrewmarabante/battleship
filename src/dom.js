import { begin } from ".";

function changeShip1()
{
    currentShip = p1ship1;
}
function changeShip2()
{
    currentShip = p1ship2;
}
function changeShip3()
{
    currentShip = p1ship3;
}
function changeShip4()
{
    currentShip = p1ship4;
}
function changeShip5()
{
    currentShip = p1ship5;
}
function changeShip6()
{
    currentShip = p1ship6;
}

export function initialize()
{
    const gridContainer = document.getElementById('gridContainer');
    const grid1 = document.createElement('DIV');
    const grid2 = document.createElement('DIV');
    grid1.classList.add('grid');
    grid2.classList.add('grid');
    gridContainer.appendChild(grid1);
    gridContainer.appendChild(grid2);
    const ship1 = document.getElementById('p1ship1');
    ship1.addEventListener('click', changeShip1);
    const ship2 = document.getElementById('p1ship2');
    ship2.addEventListener('click', changeShip2);
    const ship3 = document.getElementById('p1ship3');
    ship3.addEventListener('click', changeShip3);
    const ship4 = document.getElementById('p1ship4');
    ship4.addEventListener('click', changeShip4);
    const ship5 = document.getElementById('p1ship5');
    ship5.addEventListener('click', changeShip5);
    const ship6 = document.getElementById('p1ship6');
    ship6.addEventListener('click', changeShip6);
    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++)
        {
        const grid1block = document.createElement('DIV');
        const grid2block = document.createElement('DIV');
        grid1block.setAttribute("id", `P[${i},${j}]`);
        grid2block.setAttribute("id", `C[${i},${j}]`);
        grid1block.classList.add('grid-element');
        grid2block.classList.add('grid-element');
        grid1block.addEventListener('click', gridClick);
        grid2block.addEventListener('click', gridClick);
        grid1.appendChild(grid1block);
        grid2.appendChild(grid2block);
        }
    }
    placeShipDOM([1,1]);
    placeShipDOM([2,10]);
    placeShipDOM([3,10]);
    placeShipDOM([6,2]);
    placeShipDOM([7,2]);
    placeShipDOM([8,2]);
    placeShipDOM([5,6]);
    placeShipDOM([6,6]);
    placeShipDOM([7,6]);
    placeShipDOM([2,4]);
    placeShipDOM([2,5]);
    placeShipDOM([2,6]);
    placeShipDOM([2,7]);
    placeShipDOM([10,4]);
    placeShipDOM([10,5]);
    placeShipDOM([10,6]);
    placeShipDOM([10,7]);
    placeShipDOM([10,8]);
}

export function gridClick()
{
    if(begin === false && this.id.slice(0,1) === 'P')
    {
        if(currentGrid == this)
        {
            changeAxis();
        }
        currentGrid = this;
        board1.placeShip(currentShip, getCoords(this.id));
    }
    if(begin === true && this.id.slice(0,1) === 'C' && board1.game === false)
    {
        board1.receiveAttack(getCoords(this.id))

    }
}

function getCoords(idString)
{
    let j = parseInt(idString.slice(2,3));
    let i = parseInt(idString.slice(4,5));
    let x = i+1;
    let y = (10-j);
    return [x,y];
}

export function getPId(x,y)
{
    let j = x-1;
    let i = 10-y;
    return `P[${i},${j}]`
}

export function getCId(x,y)
{
    let j = x-1;
    let i = 10-y;
    return `C[${i},${j}]`
}


window.placeShipDOM = function([x,y])
{
    document.getElementById(getPId(x,y)).classList.add('ship');
}

window.removeShipDOM = function([x,y])
{
    document.getElementById(getPId(x,y)).classList.remove('ship');
}

window.hitShipDOM = function([x,y])
{
    if(player1.myTurn === true)
    {
    document.getElementById(getCId(x,y)).classList.add('hit');
    }
    else if(player1.myTurn === false)
    {
    document.getElementById(getPId(x,y)).classList.add('hit');
    }
}

window.missedShipDOM = function([x,y])
{
    if(player1.myTurn === true)
    {
    document.getElementById(getCId(x,y)).classList.add('missed');
    }
    else if(player1.myTurn === false)
    {
    document.getElementById(getPId(x,y)).classList.add('missed');
    }
}

window.sinkShipDOM = function (shipName)
{
    document.getElementById(shipName).classList.add('sunk');
}

function removeSunkShipDOM(shipName)
{
    if(document.getElementById(shipName).classList.contains('sunk') === true)
    {
    document.getElementById(shipName).classList.remove('sunk');
    }
}

function changeAxis()
{
    if (horizontal === false)
    {
        horizontal = true;
    }
    else if(horizontal === true)
    {
        horizontal = false;
    }
}

window.displayGame = function (winner)
{
    let top = document.getElementById('top');
    if(winner === 'comp')
    {
        top.innerHTML = 'Computer Wins!'
    }
    else if(winner === 'player')
    {
        top.innerHTML = 'Player Wins!'
    }
}

window.wipe = function ()
{
    p1ship1.coord = [[1,1]];
    p1ship2.coord = [[2,10],[3,10]];
    p1ship3.coord = [[6,2],[7,2],[8,2]];
    p1ship4.coord = [[5,6],[6,6],[7,6]];
    p1ship5.coord = [[2,4],[2,5],[2,6],[2,7]];
    p1ship6.coord = [[10,4],[10,5],[10,6],[10,7],[10,8]];

    placeShipDOM([1,1]);
    placeShipDOM([2,10]);
    placeShipDOM([3,10]);
    placeShipDOM([6,2]);
    placeShipDOM([7,2]);
    placeShipDOM([8,2]);
    placeShipDOM([5,6]);
    placeShipDOM([6,6]);
    placeShipDOM([7,6]);
    placeShipDOM([2,4]);
    placeShipDOM([2,5]);
    placeShipDOM([2,6]);
    placeShipDOM([2,7]);
    placeShipDOM([10,4]);
    placeShipDOM([10,5]);
    placeShipDOM([10,6]);
    placeShipDOM([10,7]);
    placeShipDOM([10,8]);

    p1ship1.sunk = false;
    p1ship2.sunk = false;
    p1ship3.sunk = false;
    p1ship4.sunk = false;
    p1ship5.sunk = false;
    p1ship6.sunk = false;

    p1ship1.numhits = 0;
    p1ship2.numhits = 0;
    p1ship3.numhits = 0;
    p1ship4.numhits = 0;
    p1ship5.numhits = 0;
    p1ship6.numhits = 0;

    compship1.sunk = false;
    compship2.sunk = false;
    compship3.sunk = false;
    compship4.sunk = false;
    compship5.sunk = false;
    compship6.sunk = false;

    compship1.numhits = 0;
    compship2.numhits = 0;
    compship3.numhits = 0;
    compship4.numhits = 0;
    compship5.numhits = 0;
    compship6.numhits = 0;

    board1.p1miss = [];
    board1.compmiss = []
    board1.p1hit = [];
    board1.comphit = [];

    player1.compAttacks = [];

    shipHunt = false;
    shipHuntCoord = [];
    shipHuntNextCoord = [];
    huntRight = true;
    huntLeft = true;
    huntUp = true;
    huntDown = true;

    removeSunkShipDOM('p1ship1');
    removeSunkShipDOM('p1ship2');
    removeSunkShipDOM('p1ship3');
    removeSunkShipDOM('p1ship4');
    removeSunkShipDOM('p1ship5');
    removeSunkShipDOM('p1ship6');
    removeSunkShipDOM('compship1');
    removeSunkShipDOM('compship2');
    removeSunkShipDOM('compship3');
    removeSunkShipDOM('compship4');
    removeSunkShipDOM('compship5');
    removeSunkShipDOM('compship6');

    for(let i=1; i<=10;i++)
    {
        for(let j=1;j<=10;j++)
        {
            if(document.getElementById(getPId(i,j)).classList.contains('missed'))
            {
                document.getElementById(getPId(i,j)).classList.remove('missed')                
            }
            if(document.getElementById(getPId(i,j)).classList.contains('hit'))
            {
                document.getElementById(getPId(i,j)).classList.remove('hit')
            }
            if(document.getElementById(getCId(i,j)).classList.contains('missed'))
            {
                document.getElementById(getCId(i,j)).classList.remove('missed')
            }
            if(document.getElementById(getCId(i,j)).classList.contains('hit'))
            {
                document.getElementById(getCId(i,j)).classList.remove('hit')
            }
        }
    }
}