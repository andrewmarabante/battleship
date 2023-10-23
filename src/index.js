import _, { get } from 'lodash';
import { initialize, gridClick} from './dom';
const {board} = require('./objects');
const {ship} = require('./objects');
const {player} = require('./objects');
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', runGame);
globalThis.board1 = new board;
export let begin = false;
globalThis.horizontal = false;
board1.setBoard();
globalThis.currentShip = p1ship1;
globalThis.currentGrid = {};
initialize();
player1.placeCompShips();
player1.placeCompShips();
player1.placeCompShips();
player1.placeCompShips();
player1.placeCompShips();
player1.placeCompShips();
player1.placeCompShips();
function runGame()
{
  if(board1.game === false)
  {
    begin = true;
    document.getElementById('startButton').innerHTML = 'In Progress';
    document.getElementById('top').innerHTML = 'Click On The Enemy Grid To Fire!';
  }
  else if(board1.game === true)
  {
    begin = false;
    board1.game = false;
    wipe();
    document.getElementById('top').innerHTML = 'Place your ships! Press Start When Ready!';
  }
}