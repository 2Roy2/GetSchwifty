import { Block } from "../../Common/Block.js";

export function getBoxValues(boardSize){
    let values = new Array();
    values.push(new Block(0,'#'));
    for(let i = 1; i< boardSize;i++){
        values.push(new Block(i,i));
    }
    return values;
}