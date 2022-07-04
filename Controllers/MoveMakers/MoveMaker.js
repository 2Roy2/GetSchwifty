import { updateBoard } from "../../Views/UpadateBoard.js";

export function makeMove(board,positionX,positionY){
    let blocks = board.blocks;
    if(blocks[0].length>positionX+1&&blocks[positionY][positionX+1].val==0){
        blocks[positionY][positionX+1].val=blocks[positionY][positionX].val;
        blocks[positionY][positionX].val=0;
    }
    else if(0<=positionX-1&&blocks[positionY][positionX-1].val==0){
        blocks[positionY][positionX-1].val=blocks[positionY][positionX].val;
        blocks[positionY][positionX].val=0;
    }
    else if(blocks.length>positionY+1&&blocks[positionY+1][positionX].val==0){
        blocks[positionY+1][positionX].val=blocks[positionY][positionX].val;
        blocks[positionY][positionX].val=0;
    }
    else if(0<=positionY-1&&blocks[positionY-1][positionX].val==0){
        blocks[positionY-1][positionX].val=blocks[positionY][positionX].val;
        blocks[positionY][positionX].val=0;
    }
    updateBoard(board);

}