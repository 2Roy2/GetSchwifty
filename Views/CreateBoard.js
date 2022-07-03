
function createRow(colomns){
    for(let i=0;i<colomns;i++){
        var button = document.createElement("button");
        button.innerHTML = "Do Something";
    
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button);
    
        button.addEventListener ("click", function() {
        alert("did something");
        });
    }
}
export function createBlocks(colomns,rows){
    var body = document.getElementsByTagName("body")[0];
    for(let i=0;i<rows;i++){
        createRow(colomns);
        let br = document.createElement("br");
        body.appendChild(br);
    }
}