import { updateBoard } from "../../Views/UpadateBoard.js";
import { checkForWin } from "../WinCheckers/WinChecker.js";
import { tryMove } from "./MoveMaker.js";
export function makeMove(board,positionX,positionY){
    if(!tryMove(board,positionX,positionY)){
        return;
    }
    updateBoard(board);
    if(!checkForWin(board)){
        return;
    }
    
}