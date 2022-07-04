export function checkForWin(board){
    let blocks = board.blocks.flat();
    for(let i =1;i<blocks.length;i++){
        if(blocks[i-1].val!==i){
            return false;
        }
    }
    return true;
}