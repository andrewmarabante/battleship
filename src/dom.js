export function setGrids()
{
    const gridContainer = document.getElementById('gridContainer');
    const grid1 = document.createElement('DIV');
    const grid2 = document.createElement('DIV');
    grid1.classList.add('grid');
    grid2.classList.add('grid');
    gridContainer.appendChild(grid1);
    gridContainer.appendChild(grid2);
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
}

function gridClick()
{
    getCoords(this.id);
}

function getCoords(idString)
{
    let j = parseInt(idString.slice(2,3));
    let i = parseInt(idString.slice(4,5));
    let x = i+1;
    let y = (10-j);
    console.log(x,y);
}