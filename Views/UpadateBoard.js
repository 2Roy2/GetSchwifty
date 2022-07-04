
export function updateBoard(board){
    var buttons = document.getElementsByTagName('button');
    let blocks = board.blocks.flat();
    for (let i = 0; i <blocks.length; i++) {
        buttons[i].innerHTML=blocks[i].val;
    }
}