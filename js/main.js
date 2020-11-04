//llamar al documento, obtenga su elemento id, (que elemento va a obetener (color) recibiendo dos paramentro)
//get color es una funcion, llamar a una variable let col= pasando el elemento

document.getElementById('color').addEventListener('input', getColor);

function getColor(){
    let col = document.getElementById('color').value;

    document.getElementById('visualizar').style.background= col;
    document.getElementById('visualizar'). innerHTML=col;
}