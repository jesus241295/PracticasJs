// ciclos while 

function cicloWhile(num){
    let index = 0;
    index++
    while(index < num){
        console.log('ciclo repetido')
    }
}

// Ejercicio 1:
// Solicitar al usuario ingresar un numero
// Crear una funcion que genere un string con caracteres aleatorios,
// la longitud del string debe ser igual que el numero que ingreso el usuario
// input : 6
// output: ‘6AQX>H’

// PSEUDOCIDIGO
// crear una variable con un promt para pedir un numero al usuario
// crear otra vsariable que resiva el resultado
// crear variable con los caracteres que seran los aleatorios

// investigar como crar funciones aleatorias
// generar una funcion que genere un string con caracteres aleatorios 
// sacar la longitud con .lengh de el numero que ingreso el usuario
// mostrar en consola los caracteres aleatorios  dependiendo del numero ingresado

let usuario = prompt('Ingresa un nuemero');

function generarString(num){
    let result =String('') ;
    let caracter = 'abcdefghijklmnñopqrstuvwxyz123456789<>/()';
    let resultadoCaracteres = caracter.length
    // console.log(resultadoCaracteres)
    for (let index = 0; index < num ; index++) {
         result += caracter.charAt(Math.floor(Math.random() * resultadoCaracteres));
     
    }
    return `sus caraceteres son ${result}`

}
 let yaQuedo = generarString(usuario);

     console.log(yaQuedo);



// Ejercicio 2:
// Pedir al usuario usuario un numero entre 1 y 10
// Imprimir la tabla de multiplicar de ese número
// p.ej.
// 3 x 1 = 3
// 3 x 2 = 6
  


let tabla= prompt('Ingresa un numero del 1 al 10');
for (let index = 1; index <= 10; index++) {
    console.log((tabla + 'x'+ index  +  '=' + tabla*index))
}