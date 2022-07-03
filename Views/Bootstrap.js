import { Board } from '../Common/Board.js';
import {createBlocks} from './CreateBoard.js';
import {Block} from '../Common/Block.js';
import {updateBoard} from './UpadateBoard.js';

let board = new Board([[new Block(1),new Block(2),new Block(3)],[new Block(1),new Block(2),new Block(3)],[new Block(1),new Block(2),new Block(3)]])
createBlocks(board);

let updatedBoard = new Board([[new Block(6),new Block(6),new Block(6)],[new Block(6),new Block(6),new Block(6)],[new Block(6),new Block(6),new Block(6)]])
await new Promise(r => setTimeout(r, 2000));

updateBoard(updatedBoard)