// metodos de array (.map()     .filter())
const mentorsArray = [
    {
        name:"Ivan Diaz Perez",
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
        name:"Alejandra Paez Beltran",
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
        name:"Alan Hernandez Perez",
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
        name:"Jorge Perez Hernandez",
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
  ];


const nombres = mentorsArray.filter((nombre)=>{
   
    
    if(nombre.name[0].match(/[aeiou]/gi)){
        return nombre
    }
        
    

  })
  console.log(nombres);
  
  const miFuncion = (mentor) => {
  const mentores = mentor.map((mentor)=>{
        let  lista = '';
       let listaDeMentores =  mentor.name.split(' ') 
       listaDeMentores.forEach((name)=>{
            lista += name[0] + '.'
       })
        return lista
  })
  return mentores
}

const yaQuedo = miFuncion(mentorsArray)
console.log(yaQuedo)


