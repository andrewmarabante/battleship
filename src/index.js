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
initialize();
function runGame()
{
  begin = true;
}