"use strict";
//Es un contrato que debemos de respetar, Objeto con atributos especificos 
var usuario1 = { nombreUsuario: 'Chris', password: '1234' };
console.log(usuario1);
console.log(usuario1.nombreUsuario);
var avion = {
    abordarTransporte: function () {
        console.log("Abordando");
    }
};
avion.abordarTransporte();
