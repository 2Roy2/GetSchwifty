import { getOpposite } from "./OppositeBoardGetter.js";

function getZeroRow(board){
    let blocks = board.blocks;
    for(let rows=0;rows<blocks.length;rows++){
        for(let columns=0;columns<blocks[0].length;columns++){
            if(blocks[rows][columns].val==0){
                return rows;
            }
        }
    }
}
function getAllOpposites(board){
    let oppositeCounter=0;
    let blocks = board.blocks;
    for(let rows=0;rows<blocks.length;rows++){
        for(let columns=0;columns<blocks[0].length;columns++){
            oppositeCounter+=getOpposite(board,columns,rows);
        }
    }
    return oppositeCounter;
}
function evenRowBoardChecker(opposites,board){
    opposites+=getZeroRow(board)+1;
    if(opposites%2==0){
        return true;
    }
    else{
        return false;
    }
}
function oddRowBoardChecker(opposites){
    if(opposites%2==0){
        return true;
    }
    else{
        return false;
    }
}
export function checkBoard(board){
    let blocks = board.blocks;
    let opposites = getAllOpposites(board);
    if(blocks.length%2==0){
        return evenRowBoardChecker(opposites,board);
    }
    else{
        return oddRowBoardChecker(opposites);
    }
}