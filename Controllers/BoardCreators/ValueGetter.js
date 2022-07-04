export function getBoardValues(){
    let width= Number(document.getElementById("width").value);
    let length= Number(document.getElementById("length").value);
    if(!Number.isInteger(width)||!Number.isInteger(length)){
        return null;
    }
    return {width, length};
}