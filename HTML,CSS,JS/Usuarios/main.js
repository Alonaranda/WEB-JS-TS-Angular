let usuarios = [];
let i = 0
let usuario = "";

function agregar(){
    usuarios.push(document.getElementById('usuario').value);
    console.log(usuarios);
    //document.getElementById('listado').innerHTML = `<p>${j} : ${document.getElementById('usuario').value}<p/>`;
    for(let i = 0; i < usuarios.length; i++){
        usuario = i + ': ' + usuarios[i];
        document.getElementById('listado').innerHTML += usuario + "<br/>";
    }
    limpiar();
}

function buscar(){
    let palabra = document.getElementById('buscador').value;
    let indice = usuarios.indexOf(palabra);
    if(usuarios[indice] == palabra){
        document.getElementById('posicion').innerHTML = indice;
    }else{
        document.getElementById('posicion').innerHTML = 'No tengo ese usuario';
    }
    limpiar();
}

function limpiar(){
    document.getElementById('usuario').value = "";
    document.getElementById('buscador').value = "";
}