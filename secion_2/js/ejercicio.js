// Pseudocodigo
// evalar calificaciones
// solicitar al usuario una calificacion de 1 a 100
// crear 5 variables y asignarles un valor 
// variable 'A' calificaion es de 100 
// variable 'B' calificaion es de 90
// variable 'C' calificaion es de 80   
// variable 'D' calificaion es de 70 
// variable 'F' calificaion es de 60
// crear un if si su calificacion es A, B ,C ,D ,F
// evvaluar con un switch su calificacion 

let calificacion = Number(prompt('Ingresa un Numero del 1 al 100'));

    let promedio;

if (calificacion <= 60 ){
   promedio = 'F' 
}
else if(calificacion <= 70){
    promedio = 'D'
}
else if (calificacion <= 80){
    promedio = 'C'
}
else if (calificacion <= 90){
    promedio = 'B'
}
else if( calificacion <= 100 ){
    promedio = 'A'
}else{
    promedio = 'dato invalido '
}
console.log(promedio)


























// let calification = prompt(“Ingresa una calificacion del 0 al 100”);
// calification = Number(calification)
// switch (calification) {
//     case 60:
//         console.log(“La calificacion es F lo sentimos no aprobaste”)
//     break;
//     case 70:
//         console.log(“La calificacion es D sigue esforzandote”)
//     break;
//     case 80:
//         console.log(“La calificacion es C  bien”)
//     break;
//     case 90:
//         console.log(“La calificacion es B muy bien”)
//     break;
//     case 100:
//         console.log(“La calificacion es A excelente”)
//     break;
//     default:
//         console.log(“Reingresa una calificacion correcta”)
//     break;
// }
