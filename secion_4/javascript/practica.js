/*
Ejercicio 1:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/
// let parrafo = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado";

// let numeroEstudiante = parrafo.match(/estudiante/gi).length;
    
//     console.log(numeroEstudiante)
//     console.log(parrafo.replace(/estudiante/g,"koder"));


/*
Ejercicio 2:
    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/

// let string1 = "string 1";
// let string2 = "Some large string";

//     if(string1.length > string2.length){
//         console.log("el string " + string1 +" es el más largo")
//     }else{
//         console.log("el string \"" + string2 +"\" es el más largo")
//     }

/*
    Ejercicio 3:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/

// let stringTwoWords = "Programación Javascript"
// let sliced = stringTwoWords.split(" ");
//     if(sliced[0]>sliced[1]){
//     console.log(sliced[0]);
//     }else{
//     console.log(sliced[1]);
//     }

/*
Ejercicio 4
    Crear una funcion o funciones que permitan elegir al usuario
    una operacion basica, indicar dos valores y ejecutar la operacion 
    seleccionada. imprimir el resultado
    output: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"
    "suma", 20,10 -> La suma de 20 y 10 es 30
*/

// let entrada = prompt("Escoge una operacion y dos numeros separados por una , ");
// let elementoSplit = entrada.split(",");
// console.log(elementoSplit);
// let operacion = elementoSplit[0]

//     elementoSplit[1] =Number(elementoSplit[1])
//     elementoSplit[2] =Number(elementoSplit[2])
// switch (operacion) {
//     case "suma":
//         console.log(elementoSplit[1]+elementoSplit[2])
//         break;
//     case "resta":
//             console.log(elementoSplit[1]-elementoSplit[2])
//          break;
//     case "multiplicacion":
//                 console.log(elementoSplit[1]*elementoSplit[2])
//          break;
//     case "division":
//             console.log(elementoSplit[1]/elementoSplit[2])
//         break;
//     default: console.log("Introduce una operacion,  numero1 , numero2")
//         break;
// }