import { Board } from '../../Common/Board.js';
import {Block} from '../../Common/Block.js';


function removeValueFromValues(values,value){
    return values.filter((element)=> element!==value) 
}

function generateRow(rowSize,values){
    let row = new Array();
    for(let i =0;i<rowSize;i++){
        let value =  values[Math.floor(Math.random()*values.length)];
        row.push(value);
        values=removeValueFromValues(values,value); 
    }
    let newValues = values;
    return {row,newValues};
}

 export function generateRandomBoard(columns,rows,givvenValues){
    let board = new Array();
    let values = givvenValues;
    for(let i =0;i<rows;i++){
        let {row,newValues}=generateRow(columns,values);
        board.push(row);
        values=newValues;
    }
    return new Board(board);
}