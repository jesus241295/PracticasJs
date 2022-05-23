
  
  // Teniendo la siguiente coleccion de koders genera una coleccion de objetos de tipo koder
  // Agregando ademas las siguientes funciones:
  
  // Prototipo koder
  
  
  // -Obtener promedio de sus scores
  // -Tenga el name
  // -Tenga el lastName
  // -bootcamp
  
  // ----------
  
  // Obtener una coleccion de Koder que pertenezca a Javascript
  // Obtener una coleccion de Koder que pertenezca a Python



  
  const koders = [
    {
      name: "Harold",
      lastName: "López",
      birthday: "1996/06/24",
      generation: 9,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 90
        },
        {
          module: "Backend",
          score: 80
        },
        {
          module: "Cloud",
          score: 80
        }
      ]
    },
    {
      name: "Arnold",
      lastName: "Osborn",
      birthday: "1998/05/12",
      generation: 1,
      bootcamp: "Python",
      scores: [
        {
          module: "Frontend",
          score: 90
        },
        {
          module: "Backend",
          score: 100
        },
        {
          module: "Cloud",
          score: 100
        }
      ]
    },
    {
      name: "Peter",
      lastName: "Parker",
      birthday: "1994/10/26",
      generation: 10,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 100
        },
        {
          module: "Backend",
          score: 95
        },
        {
          module: "Cloud",
          score: 80
        }
      ]
    },
    {
      name: "Homer",
      lastName: "Simpson",
      birthday: "1996/06/24",
      generation: 1,
      bootcamp: "Python",
      scores: [
        {
          module: "Frontend",
          score: 98
        },
        {
          module: "Backend",
          score: 100
        },
        {
          module: "Cloud",
          score: 70
        }
      ]
    },
    {
      name: "Ren",
      lastName: "López",
      birthday: "1996/06/24",
      generation: 9,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 80
        },
        {
          module: "Backend",
          score: 90
        },
        {
          module: "Cloud", 
          score: 100
        }
      ]
    }
  ];
  // Teniendo la siguiente coleccion de koders genera una coleccion de objetos de tipo koder
  // Agregando ademas las siguientes funciones:
  // Prototipo koder
  // -Obtener la edad a partir de la fecha de nacimiento
  // -Obtener promedio de sus scores
  // -Tenga el name
  // -Tenga el lastName
  // -bootcamp
  // ----------
  // Obtener una coleccion de Koder que pertenezca a Javascript
  // Obtener una coleccion de Koder que pertenezca a Python
class Koder {
  constructor(name, lastname, bootcamp, birthday, scores) {
    this.name = name;
    this.lastName = lastname;
    this.bootcamp = bootcamp;
    this.birthday = birthday;
    this.score = scores;
  }
}

let socres = koders.map((koder)=>{
  const {name:nombre, lastName, bootcamp, birthday, scores } = koders
 const  koder1 = new Koder(nombre, lastName, bootcamp, birthday,scores )
  console.log(koder1.scores)
})

new Koder(koders)



 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
//   const persona = {
//     nombre: 'jesus',
//     apellido: 'GONZALEZ'
//   }
// function nombreDePersona (cambio){
//     cambio.nombre = 'daniel'
//     cambio.apellido = 'perez'
// }
// nombreDePersona(persona)
// console.log(persona)