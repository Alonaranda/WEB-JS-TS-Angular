window.onload = iniciaDatos;

function iniciaDatos(){
    document.getElementById('link').onclick = validaSalir;
    document.getElementById('linkSearch').onclick = busqueda;
}
function validaSalir(){
    if(confirm("Desea salir del sitio?")){
        alert("Nos vamos a google");
        return true;
    }else{
        alert("Nos quedamos en este sitio");
        return false;
    }
}
function busqueda(){
    var respuesta = prompt("Escribe lo que quieres buscar: ", "");
    if(respuesta){
        alert("Tu respuesta fue: " + respuesta);
        var nuevoLink = this + "search?q=" + respuesta;
        alert("Nuevo Link: " + nuevoLink);
        //Redireccionamos
        window.location = nuevoLink;
        return false;
    }else{
        alert("No hay nada a buscar");
        return false;
    }
}



document.getElementById('imagen').onmouseover = cambiarImagen;
document.getElementById('imagen').onmouseout = regresarImgen;
function cambiarImagen(){
    console.log('Estor sobre el elemento');
    document.getElementById('imagen').src = "http://globalmentoring.com.mx/imagenes/javascript.png";
}
function regresarImgen(){
    console.log("Estoy fuera del elemento");
    document.getElementById('imagen').src = "http://globalmentoring.com.mx/imagenes/html5.png";
}




function sumar(){
    console.log(document.getElementById('valor1').value);
    console.log(document.getElementById('valor2').value);
    let resultado = (Number(document.getElementById('valor1').value) + Number(document.getElementById('valor2').value));
    console.log(resultado);
    return document.getElementById('resultado').innerHTML = resultado;
}

function restar(){
    console.log(document.getElementById('valor1').value);
    console.log(document.getElementById('valor2').value);
    let resultado = (Number(document.getElementById('valor1').value) - Number(document.getElementById('valor2').value));
    console.log(resultado);
    return document.getElementById('resultado').innerHTML = resultado;
}

function multiplicar(){
    console.log(document.getElementById('valor1').value);
    console.log(document.getElementById('valor2').value);
    let resultado = (Number(document.getElementById('valor1').value) * Number(document.getElementById('valor2').value));
    console.log(resultado);
    return document.getElementById('resultado').innerHTML = resultado;
}

function dividir(){
    console.log(document.getElementById('valor1').value);
    console.log(document.getElementById('valor2').value);
    let resultado = (Number(document.getElementById('valor1').value) / Number(document.getElementById('valor2').value));
    console.log(resultado);
    return document.getElementById('resultado').innerHTML = resultado;
}
