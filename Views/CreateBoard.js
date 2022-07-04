import { makeMove } from "../Controllers/MoveMakers/MoveMaker.js";

function createRow(row,board,rowIndex) {
    for (let i = 0; i < row.length; i++) {
        var button = document.createElement("button");
        button.innerHTML = row[i].val;

        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button);

        button.addEventListener("click", ()=>makeMove(board,i,rowIndex));
    }
}

export function createBlocks(board) {
    var body = document.getElementsByTagName("body")[0];

    for (let i = 0; i < board.blocks.length; i++) {
        createRow(board.blocks[i],board,i);
        let br = document.createElement("br");
        body.appendChild(br);
    }
}