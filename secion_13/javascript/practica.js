// -Con el array de mentores vamos a generar  una tabla con esta estrucutura

const mentorsArray = [
  {
      name:"Ivan Diaz Alarcon",
      scores:[
          {
              signature:"HTML",
              score:5
          },
          {
              signature:"CSS",
              score:6
          },
          {
              signature:"JS",
              score:6
          },
          {
              signature:"ReactJS",
              score:5
          }
      ]
  },
  {
      name:"Alejandra Saenz Gonzalez",
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
      name:"Alan Hernandex Hernandex",
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
      name:"Raul Aguirre Salazar",
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
  },
  {
    name:"Pepito Potter Ron",
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



 const tabla = document.createElement('table')
 const tabla1 = document.createElement('thead')
 const body = document.createElement('tbody')
 const fila = document.createElement('tr')
 const col1 = document.createElement('th')
 col1.textContent = 'Mentor'
 const col2 = document.createElement('th')
 col2.textContent = 'HTML'
 const col3= document.createElement('th')
 col3.textContent = 'CSS'
 const col4 = document.createElement('th')
 col4.textContent = 'JS'
 const col5 = document.createElement('th')
 col5.textContent = 'ReactJS'
 const promedio = document.createElement('th')
 promedio.textContent = 'Promedio'
 const accion = document.createElement('th')
 accion.textContent = 'Seleccionar'
tabla.appendChild(tabla1)
tabla1.appendChild(fila)
fila.appendChild(col1)
fila.appendChild(col2)
fila.appendChild(col3)
fila.appendChild(col4)
fila.appendChild(col5)
fila.appendChild(promedio)
fila.appendChild(accion)

document.body.appendChild(tabla)

const creandoLista = (nombre) => {
    let nombres = nombre.name
    let nombresMentores = nombres.split(' ')[0]
    let totalHtml = 0
    let totalCss = 0
    let totalJs = 0
    let totalReactJs = 0
    let promedioHtml = 0

    let divicion = nombre.scores.length
    // console.log(divicion.length)
     nombre.scores.forEach((asignatura)=>{
        if(asignatura.signature === 'HTML'){totalHtml += asignatura.score}
        if(asignatura.signature === 'CSS'){totalCss += asignatura.score}
        if(asignatura.signature === 'JS'){totalJs += asignatura.score}
        if(asignatura.signature === 'ReactJS'){totalReactJs += asignatura.score}
    })
    nombre.scores.forEach((promedio)=> {
        if(nombresMentores === 'Ivan'){promedioHtml += promedio.score /divicion}
        if(nombresMentores === 'Alejandra'){promedioHtml += promedio.score /divicion}
        if(nombresMentores === 'Alan'){promedioHtml += promedio.score /divicion}
        if(nombresMentores === 'Raul'){promedioHtml += promedio.score /divicion}
        if(nombresMentores === 'Pepito'){ promedioHtml += promedio.score /divicion}
        
    })
let fila2 = document.createElement('tr')
let columna = document.createElement('td')
let columna1 = document.createElement('td')
let columna2 = document.createElement('td')
let columna3 = document.createElement('td')
let columna4 = document.createElement('td')
let promedioTotal =document.createElement('td')
let boton = document.createElement('button')
body.appendChild(fila2)
columna.textContent = nombresMentores
columna1.textContent = totalHtml
columna2.textContent = totalCss
columna3.textContent = totalJs
columna4.textContent = totalReactJs
promedioTotal.textContent = promedioHtml
boton.textContent = 'Selecionar'
boton.classList.add('btn')
boton.classList.add('btn-primary')
let botones = document.querySelectorAll('.btn')



botones.forEach((seleccionar)=>{

    seleccionar.addEventListener('click', () => {
        console.log(`esto es el   `)
        
    })
})
document.body.appendChild(columna)
fila2.appendChild(columna)
fila2.appendChild(columna1)
fila2.appendChild(columna2)
fila2.appendChild(columna3)
fila2.appendChild(columna4)
fila2.appendChild(promedioTotal)
fila2.appendChild(boton)

tabla.appendChild(body)
}
mentorsArray.forEach((item)=>{
     creandoLista (item)
    })










