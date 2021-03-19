//Es un contrato que debemos de respetar, Objeto con atributos especificos 

interface Usuario{
    nombreUsuario:string;
    password:string;
    confirmarPassword?:string;
}

let usuario1:Usuario = {nombreUsuario: 'Chris', password: '1234'};
console.log(usuario1);
console.log(usuario1.nombreUsuario);

interface Abordar{
    abordarTransporte():void;
}

let avion:Abordar = {
    abordarTransporte: function(){
         console.log("Abordando");
    }
}

avion.abordarTransporte();