const API_URL = 'https://jsonplaceholder.typicode.com'
//instancia
const nombre =  new XMLHttpRequest();

//revisar el evento 
nombre.addEventListener('readystatechange', ()=>{
    
    console.log(nombre.response)
})
//construyendo peticion   con el metodo open abrimos la peticion
nombre.open('GET', API_URL);

//con el metodo send enviamos dicha peticion 
nombre.send();

console.log(nombre)