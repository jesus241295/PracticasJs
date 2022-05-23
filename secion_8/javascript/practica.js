
const name1 = [
    'Jesus Gonzalez',
    'Ivan Diaz',
    'Fredy Krugger',
    'Danny Vazquez'
];

name1.forEach((nombres, index) => {console.log(`Koders ${index + 1}: ${nombres}`);});



// Ejercicio 2

// input:
const promedio = [
  {
    koder: 'Arnold',
    score: 9,
  },
  {
    koder: 'Gerald',
    score: 9,
  },
  {
    koder: 'Gelga',
    score: 9,
  },
  {
    koder: 'Peer',
    score: 9,
  },
  {
    koder: 'Thomas',
    score: 9,
  }
];
let alumnos = promedio.length;

let promedioTotal = 0;
promedio.forEach((koders, )=> {
     if (koders.koder === 'Arnold' ){
         promedioTotal += koders.score
         
     }
     else if (koders.koder == 'Gerald' ){
        promedioTotal += koders.score
        
    }
    else if (koders.koder == 'Gelga' ){
        promedioTotal += koders.score
        
    }
    else if (koders.koder === 'Peer' ){
        promedioTotal += koders.score
        
    }else if (koders.koder === 'Thomas' ){
        promedioTotal += koders.score
        
    }

if(koders.score <= 6){
    console.log('su caligicaion es F')
}else if(koders.score <= 7){
    console.log('su calificacion es D')
}else if(koders.score <= 8){
    console.log('su calificacion es C')
}else if (koders.score <= 9){
    console.log('su calificacion es B')
}else if (koders.score <= 10){
    console.log('su calificacion es A')
}else{
    'ingresa la calificacion entre 6 y 10'
}
console.log(`suma de las calificaciones es de ${promedioTotal}`)
})





// <60 F
// <70 D
// <80 C
// <90 B
// <100 A
// crear una constante para guardar mi array tipo objeto
// crear un foreach de mi constante 

// output: {
//   promedio del grupo: 90
//   calificacion del grupo: A
// }

