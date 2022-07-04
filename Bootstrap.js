import { Board } from './Common/Board.js';
import {createBlocks} from './Views/CreateBoard.js';
import {Block} from './Common/Block.js';
import {updateBoard} from './Views/UpadateBoard.js';
import {generateRandomBoard} from './Controllers/GenerateBoard/GenerateRandomBoard.js';
import { getBoxValues } from './Controllers/GenerateBoard/IntValues.js';
import{getOpposite} from './Controllers/BordValidators/OppositeBoardGetter.js'
import {generateBoard} from './Controllers/GenerateBoard/BoardGenerator.js';
let rows =3;
let columns=3;
let size =rows*columns;


let board =generateBoard(rows,columns,getBoxValues(size));
createBlocks(board);
// console.log(getOpposite(board,[0,0]));

// let updatedBoard = generateRandomBoard(3,3,getBoxValues(9));
// await new Promise(r => setTimeout(r, 2000));

// updateBoard(updatedBoard)