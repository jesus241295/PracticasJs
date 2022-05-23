let arrayPersons = [
    {
        name: "Phibee", age: 25, vaccinated: true, gender: "mujer"
    },
    {
        name: "Katrinka", age: 26, vaccinated: false, gender: "mujer"
    },
    {
        name: "Bruno", age: 48, vaccinated: false, gender: "hombre"
    },
    {
        name: "Jon", age: 22, vaccinated: true, gender: "hombre"
    },
    {
        name: "Brian", age: 20, vaccinated: false, gender: "hombre"
    },
    {
        name: "Eugene", age: 38, vaccinated: true, gender: "hombre"
    },
    {
        name: "Big Bob", age: 29, vaccinated: true, gender: "hombre"
    },
    {
        name: "Ximena", age: 40, vaccinated: false, gender: "mujer"
    },
    {
        name: "Paulet", age: 37, vaccinated: false, gender: "mujer"
    },
    {
        name: "Harold", age: 45, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gerald", age: 22, vaccinated: false, gender: "hombre"
    },
    {
        name: "Arnold", age: 35, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gelga", age: 28, vaccinated: true, gender: "mujer"
    },
    {
        name: "Lila", age: 18, vaccinated: true, gender: "mujer"
    },
    {
        name: "Rhonda", age: 18, vaccinated: true, gender: "mujer"
    },
]
// - Un array con aquellas personas que se vacunaron
const list = (arrayList) =>{
   const listaKoders = arrayList.reduce((accum, item)=>{
       if(item.vaccinated === true){
           return [...accum, item]
       }
       return accum

   },[])
   return listaKoders

} 


const lista = list(arrayPersons)
console.log(lista)



// - la edad promedio de todos los vacunados
const promedio = (edadPromedio)=>{
    const edad1 = edadPromedio.reduce((accumu, age)=>{
         let edad = age.age
         return accumu + edad
    },0)
    return edad1 / lista.length
    
}
const promedioTotal = promedio(lista)

console.log(`La edad promedio de los vacunados es de: ${promedioTotal}`)


// - un array con aquellas personas que se vacunaron y que son menores a 30 años

const menoresDe = (menor)=>{
let menoresDeTreinta = menor.reduce((acumulador, element )=>{
    if (element.age <= 30){
        return [...acumulador, element]
    }
            return acumulador
        
        
        },[])
        return menoresDeTreinta 
}
console.log(menoresDe(lista))


// - la edad promedio de los no vacunados
const listaDeNoVacunados = (arrayList) =>{
    const listaKoders = arrayList.reduce((accum, item)=>{
        if(item.vaccinated === false){
            return [...accum, item]
        }
        return accum
 
    },[])
    return listaKoders
 
 } 
 
 
 const listafinal = listaDeNoVacunados(arrayPersons)
 console.log(listafinal)


 const promeedioNoVacunado = promedio(listafinal)
 console.log(`Este es el promedio de las personas No vacunadas ${promeedioNoVacunado}`)



//  - el porcentaje de vacunados vs no vacunados

let  total =  promedioTotal + promeedioNoVacunado
console.log(total)
function porcentaje (promedioVacunados, promedioNo){
    let formula = (100/ total) * promedioVacunados
    let formula2 = (100/ total )*promedioNo
    
     return `Porcentaje vacunado ${formula}% y porcentaje No ${formula2}%`
}
 let resultado = porcentaje(promedioTotal, promeedioNoVacunado )
 console.log(resultado)
    
// - el procentaje de mujeres que se vacunaron
function porcentajeMujeres(listaMujeres){
  let totalMujeres = listaMujeres.reduce((total, element)=>{
       if(element.gender === 'mujer'){
           return [...total, element]
       }
       return total
    },[])
    return totalMujeres
}


let mujer = porcentajeMujeres(lista)
console.log(mujer)


// - el porcentaje de los hombres que vacunarion
function totalHombres(hombres){
   let sumaDeVacunados = hombres.reduce((totales, elementos)=>{
        if (elementos.gender === 'hombre' ){
            return [... totales, elementos]
        }
        return totales 
    },[])
    return sumaDeVacunados

}
let totalDeHombres = totalHombres(lista)
console.log(totalDeHombres)