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
    const axis = document.getElementById('axis');
    axis.addEventListener('click', changeAxis);
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
    placeShipDOM([2,1]);
    placeShipDOM([2,2]);
    placeShipDOM([3,1]);
    placeShipDOM([3,2]);
    placeShipDOM([3,3]);
    placeShipDOM([4,1]);
    placeShipDOM([4,2]);
    placeShipDOM([4,3]);
    placeShipDOM([5,1]);
    placeShipDOM([5,2]);
    placeShipDOM([5,3]);
    placeShipDOM([5,4]);
    placeShipDOM([6,1]);
    placeShipDOM([6,2]);
    placeShipDOM([6,3]);
    placeShipDOM([6,4]);
    placeShipDOM([6,5]);
}

export function gridClick()
{
    if(begin === false && this.id.slice(0,1) === 'P')
    {
        board1.placeShip(currentShip, getCoords(this.id));
    }
    if(begin === true && this.id.slice(0,1) === 'C')
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
        console.log([x,y])
    document.getElementById(getPId(x,y)).classList.add('missed');
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