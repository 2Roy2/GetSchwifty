import { Board } from '../Common/Board.js';
import {createBlocks} from './CreateBoard.js';
import {Block} from '../Common/Block.js';
import {updateBoard} from './UpadateBoard.js';
import {generateRandomBoard} from '../Models/GenerateRandomIntBoard.js';
import{getOpposite} from '../Models/BordValidators/OppositeBoardGetter.js'


let board =generateRandomBoard(3,3);

createBlocks(board);
console.log(getOpposite(board,[0,0]));

let updatedBoard = generateRandomBoard(3,3);
await new Promise(r => setTimeout(r, 2000));

updateBoard(updatedBoard)