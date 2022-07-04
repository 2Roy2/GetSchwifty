import { makeMove } from "../Controllers/MoveRequest/MoveRequest.js";

function createRow(row,board,rowIndex) {
    for (let i = 0; i < row.length; i++) {
        var button = document.createElement("button");
        button.innerHTML = row[i].displayVal;

        var body = document.getElementById("game");
        body.appendChild(button);

        button.addEventListener("click", ()=>makeMove(board,i,rowIndex));
    }
}

export function createBlocks(board) {
    var body = document.getElementById("game");
    for (let i = 0; i < board.blocks.length; i++) {
        createRow(board.blocks[i],board,i);
        let br = document.createElement("br");
        body.appendChild(br);
    }
}