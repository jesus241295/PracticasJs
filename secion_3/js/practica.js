/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/
const  nombre = prompt('Introduce tu nombre completo');

// function nombrePersona(nombre){

//     return nombre;
// }
// console.log(nombre.length);
// console.log(nombre.replaceAll(' ', '').length);

/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/



    let vocales = nombre.match(/[aeiou]/gi);


console.log(vocales);

