function getOppositeFromRow(board,positionX,positionY,number){
    let oppositeCounter=0;
    for(let i =positionX;i<board.blocks[0].length;i++){
        if(board.blocks[positionY][i].val<number){
            oppositeCounter++;
        }
    }
    return oppositeCounter;
}
export function getOpposite(board,positionX,positionY){
    let oppositeCounter=0;
    let blocks = board.blocks;
    let number =blocks[positionY][[positionX]];

    oppositeCounter+=getOppositeFromRow(board,positionX,positionY,number);
    for(let i =positionY+1; i<blocks.length;i++){
        oppositeCounter+=getOppositeFromRow(board,0,i,number);
    }
    return oppositeCounter;
}