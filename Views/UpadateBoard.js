export function updateBoard(board){
    let game = document.getElementById("game");
    var buttons = game.getElementsByTagName('button');
    let blocks = board.blocks.flat();
    for (let i = 0; i <blocks.length; i++) {
        buttons[i].innerHTML=blocks[i].displayVal;
    }
}