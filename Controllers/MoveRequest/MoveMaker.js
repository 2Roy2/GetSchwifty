export function tryMove(board,positionX,positionY){
    let isMoved;
    let blocks = board.blocks;
    if(blocks[0].length>positionX+1&&blocks[positionY][positionX+1].val==0){
        let temp =blocks[positionY][positionX+1];
        blocks[positionY][positionX+1]=blocks[positionY][positionX];
        blocks[positionY][positionX]=temp;
        isMoved=true;
    }
    else if(0<=positionX-1&&blocks[positionY][positionX-1].val==0){
        let temp =blocks[positionY][positionX-1];
        blocks[positionY][positionX-1]=blocks[positionY][positionX];
        blocks[positionY][positionX]=temp;
        isMoved=true;
    }
    else if(blocks.length>positionY+1&&blocks[positionY+1][positionX].val==0){
        let temp = blocks[positionY+1][positionX];
        blocks[positionY+1][positionX]=blocks[positionY][positionX];
        blocks[positionY][positionX]=temp;
        isMoved=true;
    }
    else if(0<=positionY-1&&blocks[positionY-1][positionX].val==0){
        let temp =blocks[positionY-1][positionX]; 
        blocks[positionY-1][positionX]=blocks[positionY][positionX];
        blocks[positionY][positionX]=temp;
        isMoved=true;
    }
    return isMoved;
}