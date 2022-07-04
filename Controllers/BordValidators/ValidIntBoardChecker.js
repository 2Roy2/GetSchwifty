function evenRowBoardChecker(board){

}
function oddRowBoardChecker(board){

}
function checkBoard(board){
    if(board.blocks.length%2==0){
        return evenRowBoardChecker(board);
    }
    else{
        return oddRowBoardChecker(board);
    }
}