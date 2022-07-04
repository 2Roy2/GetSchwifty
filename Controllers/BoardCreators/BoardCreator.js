import {createBlocks} from '../../Views/CreateBoard.js';
import { getBoxValues } from '../GenerateBoard/NumberBlocks.js';
import {generateBoard} from '../GenerateBoard/BoardGenerator.js'
import { removeCreateGameElements } from './CreateBoardElementsRemover.js';
import { getBoardValues } from './ValueGetter.js';

export function createBoard(){
    let values = getBoardValues();
    let length = values.length;
    let width = values.width;
    let board =generateBoard(length,width,getBoxValues(length*width));
    removeCreateGameElements();
    createBlocks(board);
}
