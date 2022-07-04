import { Board } from './Common/Board.js';
import {createBlocks} from './Views/CreateBoard.js';
import {Block} from './Common/Block.js';
import {updateBoard} from './Views/UpadateBoard.js';
import {generateRandomBoard} from './Controllers/GenerateBoard/GenerateRandomBoard.js';
import { getBoxValues } from './Controllers/GenerateBoard/NumberBlocks.js';
import{getOpposite} from './Controllers/BordValidators/OppositeBoardGetter.js'
import {generateBoard} from './Controllers/GenerateBoard/BoardGenerator.js'
import {createBoard} from './Controllers/BoardCreators/BoardCreator.js'

let createBoardBtn = document.getElementById("board_creator");
createBoardBtn.addEventListener("click",()=>createBoard());
