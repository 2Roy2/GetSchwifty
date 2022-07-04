import { Block } from "../../Common/Block.js";

export function getBoxValues(boardSize){
    let values = new Array();
    for(let i = 0; i< boardSize;i++){
        values.push(new Block(i,i));
    }
    return values;
}