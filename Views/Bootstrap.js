import { Board } from '../Common/Board.js';
import {createBlocks} from './CreateBoard.js';
import {Block} from '../Common/Block.js';
import {updateBoard} from './UpadateBoard.js';
import {generateRandomBoard} from '../Controllers/GenerateBoard/GenerateRandomBoard.js';
import { getBoxValues } from '../Controllers/GenerateBoard/IntValues.js';
import{getOpposite} from '../Controllers/BordValidators/OppositeBoardGetter.js'


let board =generateRandomBoard(3,3,getBoxValues(9));

createBlocks(board);
console.log(getOpposite(board,[0,0]));

let updatedBoard = generateRandomBoard(3,3,getBoxValues(9));
await new Promise(r => setTimeout(r, 2000));

updateBoard(updatedBoard)