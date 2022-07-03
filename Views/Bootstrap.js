import { Board } from '../Common/Board.js';
import {createBlocks} from './CreateBoard.js';
import {Block} from '../Common/Block.js';

let board = new Board([[new Block(1),new Block(56),new Block(3)],[new Block(1),new Block(2),new Block(3)],[new Block(1),new Block(2),new Block(3)]])
createBlocks(board);
