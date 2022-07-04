function getOppositeFromRow(board,index,number){
    let oppositeCounter=0;
    for(let i =index[0];i<board[0].length;i++){
        if(board[index[1]][i].val<number){
            oppositeCounter++;
        }
    }
    return oppositeCounter;
}
export function getOpposite(board,index){
    let oppositeCounter=0;
    let number =board[index[1]][index[0]];

    oppositeCounter+=getOppositeFromRow(board,index,number);

    return oppositeCounter;
}