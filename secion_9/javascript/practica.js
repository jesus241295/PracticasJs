// -obtener el score promeddio de cada materia (HTML, CSS, JS, ReactJS)

// -obtener el promedio individual de cada mentor
// -crear un array de strings con la siguiente forma:

//     "Mi nombre es {nombre} y mi promedio es de {promedio}"
// -obtener la lista de mentores cuyo promedio sea mayor a 9.5 


const mentorsArray = [
    {
        name:"Ivan",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"Alejandra",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Alan",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            { 
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Oscar",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
  ]
  
// -obtener el score promeddio de cada materia (HTML, CSS, JS, ReactJS)
// function  mentoresPromedio(mentors){
// let mentores = mentors.length;
// let promedioHtml = 0;
// let promedioJs = 0;
// let promedioReactJs = 0;
// let promedioCss = 0;
// mentors.forEach((mentor, ) => {
//     mentor.scores.forEach((score, ) => {
//         if(score.signature === "HTML"){
//             promedioHtml += score.score
//         }
    
//     } )
//     mentor.scores.forEach((score ) => {
//         if(score.signature === "CSS"){
//             promedioCss += score.score
//         }  
//     } )
//     mentor.scores.forEach((score ) => {
//         if(score.signature === "JS"){
//             promedioJs += score.score
//         }
//     } )
//     mentor.scores.forEach((score ) => {
//         if(score.signature === "ReactJS"){
//             promedioReactJs += score.score
//         }
//     } )
// } )
// const result = {
//     HTML: promedioHtml / mentores, 
//     CSS: promedioCss / mentores,
//     JS: promedioJs / mentores,
//     REACTJS: promedioReactJs / mentores,
// }
// return result
// }
// let yaQuedo = mentoresPromedio(mentorsArray)
// console.log(yaQuedo);




// -obtener el promedio individual de cada mentor
function calificacionMentor(mentors){
   let mentores = mentors.length
let pormedioIvan = 0;
let pormedioAle = 0;
let pormedioAlan = 0;
let pormedioOscar = 0;
 mentors.forEach((mentor)=>{
    mentor.scores.forEach((score)=>{
        if(mentor.name === "Ivan"){
            pormedioIvan += score.score
        }
    });
    mentor.scores.forEach((score)=>{
        if(mentor.name === "Alejandra"){
            pormedioAle += score.score
        }
    });
    mentor.scores.forEach((score)=>{
        if(mentor.name === "Alan"){
            pormedioAlan += score.score
        }
    });
    mentor.scores.forEach((score)=>{
        if(mentor.name === "Oscar"){
            pormedioOscar += score.score
        }
    });
 });
let result ={
    Ivan:pormedioIvan / mentores,
    Ale:pormedioAle / mentores,
    Alan: pormedioAlan / mentores,
    Oscar: pormedioOscar / mentores
}  
        return result
}
let miFuntion = calificacionMentor(mentorsArray);
console.log (miFuntion)

// -crear un array de strings con la siguiente forma:

//     "Mi nombre es {nombre} y mi promedio es de {promedio}"

 
  
    function listaMentores(mentores){
        let list = []
        mentores.forEach((mentor) =>{
            const noSe = `mi nombre es ${mentor.name} y mi promedio es ${mentor.miFuntion} `
            list.push(noSe)
        })
        return list
    }
    let niIdea= listaMentores(mentorsArray)
    console.log(niIdea);



