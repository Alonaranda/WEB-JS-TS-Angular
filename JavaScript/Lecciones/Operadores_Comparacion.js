/* OPERADORES DE COMPARACIÓN
== Es igual
=== Es igual y el tipo de dato tambien
!= Es diferente
!== Es diferente y el tipo de dato tambien
< Menor que
> Mayor que
<= Menor o igual que 
>= Mayor o igual que
*/
let a = 3, b = 2, c = "3", d = 3;

//En este caso ==  se revisa sin importar el tipo de dato
let z = (a == b);
console.log(z);

z = (a == c);
console.log(z);

z = (a == a);
console.log(z);

//Comparación estricta ===, revisa tambien el tipo de dato
z = (a === c);
console.log(z); //numerico es distinto a String


//Comparar si son distintos
z = (a != b);
console.log(z);

//Comparar si son distintos de forma estricta
z = (a !== c);
console.log(z);

z = (a !== d);
console.log(z);

z = a > b;
console.log(z);
