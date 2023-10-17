import _, { get } from 'lodash';
import { initialize, gridClick} from './dom';
const {board} = require('./objects');
const {ship} = require('./objects');
const {player} = require('./objects');
globalThis.currentShip = p1ship1;
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', runGame);
export const board1 = new board;
export let begin = false;

board1.setBoard();
initialize();
function runGame()
{
  begin = true;
  console.log(begin)
}