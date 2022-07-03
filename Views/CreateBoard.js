
function createRow(row) {
    for (let i = 0; i < row.length; i++) {
        var button = document.createElement("button");
        button.innerHTML = row[i].val;

        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button);

        button.addEventListener("click", function () {
            alert("did something");
        });
    }
}

export function createBlocks(board) {
    var body = document.getElementsByTagName("body")[0];

    for (let i = 0; i < board.blocks.length; i++) {
        createRow(board.blocks[i]);
        let br = document.createElement("br");
        body.appendChild(br);
    }
}