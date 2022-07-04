function getOppositeFromRow(board,positionX,positionY,number){
    let blocks = board.blocks;
    let oppositeCounter=0;
    for(let i =positionX;i<blocks[0].length;i++){
        if(blocks[positionY][i].val<number){
            oppositeCounter++;
        }
    }

    return oppositeCounter;
}
export function getOpposite(board,positionX,positionY){

    let oppositeCounter=0;
    let blocks = board.blocks;
    let number =blocks[positionY][[positionX]].val;

    oppositeCounter+=getOppositeFromRow(board,positionX,positionY,number);
    for(let i =positionY+1; i<blocks.length;i++){
        oppositeCounter+=getOppositeFromRow(board,0,i,number);

    }
    return oppositeCounter;
}