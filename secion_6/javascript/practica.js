// Ejercio 1
// -Pedir al usuarui un numero entre el 1 y el 10
// -imprimir todos los numeros pares que existen entre 1 y el numero selccionado

// let usuario = Number(prompt('Ingresa un numero del 1 al 10'));

// function numeroPar(numero){
//     const pares = [];
//     for (let index = 1; index <= numero ; index++){
//         if (index % 2 == 0){
//             pares.push(index)
//         }
//     }
//     return pares;

// }
//  console.log('Los numeros pares son ' + numeroPar(usuario));



// Ejercicio 2
// imprimir en consla la sumaa total de todos los digitos de una cantidad
// input: 1234
// output: 10
// let secuencia= prompt("Ingrese una secuencia de números");


// function sumaNumeros(secuencia){
    
//     let total=0;

//     let numString = secuencia.toString();

//     for(let index=0; index < numString.length ;index++){

//         let singleNumber=parseInt(numString[index])
        
//         total += singleNumber
//     }


//     return total
// }

// console.log(sumaNumeros(secuencia));

// Ejercicio 3



// mostar en consola el sigueinte patron
// *
// **
// ***
// ****
// *****
// ******
// *******
// let ingresaUnAsterisco = Number(prompt("Ingresa la longitud del ultimo piso de la fugura"))
// resultado=""
// function formarFigura(asterisco){
//     for(let index = 0; index < asterisco; index++){
//         resultado +="1"
//         console.log(resultado)
//     }
// }
// formarFigura(ingresaUnAsterisco)

// tarea 

let koders = [

    ['Jose', 'De Anda'],
    ['Danny', 'Vazquez'],
    ['Aaron', 'Encino'],
    ['Jesus', 'Gonzalez'],
    ['Ivan', 'Diaz']

];


let resultado = [];

for (let index = 0; index < koders.length; index++) {
    let nombres = {
        Nombre: koders[index][0],
        Apellido: koders[index][1]
    };
    resultado.push(nombres);
}
console.log(resultado);

