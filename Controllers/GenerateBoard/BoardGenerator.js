import { generateRandomBoard } from "./GenerateRandomBoard.js"
import { checkBoard } from "../BordValidators/ValidIntBoardChecker.js";

export function generateBoard(columns,rows,boxValues){
    let board = generateRandomBoard(columns,rows,boxValues);
    console.log(checkBoard(board));

    while(!checkBoard(board)){
        board = generateRandomBoard(columns,rows,boxValues);
    }
    return board;
}