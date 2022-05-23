//  Metodos de string

// const nombre = 'Jesus Gonzalez Valencia'
  
// let resultado = nombre.indexOf('lez');
// resultado = nombre.includes('Valencia');
// resultado = nombre.slice(1, 5);
// resultado = nombre.substring(15);
// resultado = nombre.charAt(1);
// resultado = nombre.repeat(2);
// resultado = nombre.split(' ');
// resultado = nombre.startsWith('J');
// resultado = nombre.endsWith('cia');
// resultado = nombre.search('Gon');
// resultado = nombre.toLowerCase();
// resultado = nombre.toUpperCase();
// resultado = nombre.replace('Jesus', 'Daniel');



// // creamos otra constante para poder utilizar otros metodos 
// const nombre2 = ' Eduardo Gonzalez Valencia ';
// //  elimina los espacios al privcipio y al final
// resultado = nombre2.trim();

// // elimina espacios al principio o al final
// resultado = nombre2.trimStart(); 
// resultado = nombre2.trimEnd();


// // aqui se imprime en consola la variable de resultado
// console.log(resultado);
//////////////////////////////////////////////

// practicando una funcion

// function nombreCompleto(nombre){
//     console.log(`Hola mi nombre es ${nombre}`)

// }
// nombreCompleto('jesus');
// alert('que pedo mija');



/////////////////////////////////////

// OPERADOR TERNARIO
// utilizanbdo el operador ternario tenemos el resultado si el usuario puede votar o no 
// let usuario = 60

// let edad = (usuario >= 18) ? 'Puede votar ' : 'no puede votar';
// console.log(edad);

//////////////////////////////////////

// ejercicio de if/else


// let num = 1;

// if(num == 1){
//     console.log('el numero e 1');
// }
// else if (num == 2){
//     console.log('el numero es 2');
// }
// else if (num == 3 ){
//     console .log('el numero es 3');
// }
// else {
//     console.log('numero desconocido');
// }


/////////////////////////////////////////////////

// ejercicio de if/else tomando en cuenta las estaciones del año

// let estacion = prompt('Ingresa un numero de mes del añp');
// let mes;
// if (estacion == 1  || estacion == 2 || estacion == 12){
//    console.log('Estas en la estacion de Invierno' )
// }
// else if(estacion == 3 || estacion == 4 || estacion == 5){
//     console.log('Estas en la estacion de Primavera')
// }
// else if(estacion == 6 || estacion == 7 || estacion == 8){
//     console.log('Estas en la estacion de Verano')
// }
// else if(estacion == 9 || estacion == 10 || estacion == 11){
//     console.log('Estas en la estacion de Otoño')
// }
// else console.log('Introduce el numero de mes');

//////////////////////////////////////  

// Hacer una funcion que verifique si el primer numero que recibo como parametro es mayor, igual o menor al segundo parametro
// Input: 3, 4
// Output: "el 3 es menor al 4"

// function num (numero1, numero2){
//     if(numero1 > numero2){
//         return `el numero ${numero1} es mayor` 
//     }else if(numero1 < numero2){
//         return `el numero ${numero2} es mayor`
//     }else{
//         return 'los numeros son iguales'
//     } 
// }
//  let numeros = num(3, 3);
//  console.log(numeros);

// Hacer una funcion que reciba un arreglo de años y me regrese cual es bisiesto(se puede buscar en internet como calcular un año bisiesto)
// Para determinar si un año es bisiesto, siga estos pasos:

// Si el año es uniformemente divisible por 4, vaya al paso 2. De lo contrario, vaya al paso 5.
// Si el año es uniformemente divisible por 100, vaya al paso 3. De lo contrario, vaya al paso 4.
// Si el año es uniformemente divisible por 400, vaya al paso 4. De lo contrario, vaya al paso 5.
// El año es un año bisiesto (tiene 366 días).
// El año no es un año bisiesto (tiene 365 días).

 
// function calcularAñoBiciesto(año){
//     if (año % 4 == 0 && año % 100 == 0 && año % 400 == 0 ){
//         return 'el año es biciesto (tiene 366 dias)'
//     }else {
//         return 'el año no es biciesto (tiene 365 dias)'
//     }
// }
//  let añoBiciesto = calcularAñoBiciesto(2000);
//  console.log(añoBiciesto);


//  crear una suma de los elemntos del arreglo como resultado de 9 como salida optener el indice





// challenge  1 
const nums = [8,  1, 5, 11, 15  ];
const target  = 9


let numerototal = 0
let indexTotal = 0
nums.forEach((num, index)=>{
      if(num + numerototal === target){
            console.log(`el ${num} numero tiene la posicion ${index}`)
            console.log(`el ${numerototal} numero tiene la posicion ${indexTotal}`)
      }
      numerototal = num
      indexTotal = index
})
// let age = 21
// function hola(agepersona){
//       return
// }
// console.log(hola())