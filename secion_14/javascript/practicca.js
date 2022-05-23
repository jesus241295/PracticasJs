const boton = document.querySelector('#enviar')
const tabla = document.querySelector('tbody');
boton.addEventListener('click',()=>{
    const inputNombre = document.querySelector('#nombre').value;
   
    const inputApellido = document.querySelector('#apellido').value;
    const person = {
        nombre: inputNombre,
        apellido: inputApellido
    }
    const listPerson = []
    listPerson.push(person)
   console.log(listPerson)
pintar(inputNombre, inputApellido)
})
function eliminarElemento(trEliminar){
    // El método Element.remove() elimina el elemento del DOM.
    trEliminar.remove()

}
function pintar(nombre, apellido){
    let tdNombre = document.createElement('td');
    let tdApellido = document.createElement('td');
    let tdBoton = document.createElement('td')
    let tr = document.createElement('tr');
   
    let eliminar = document.createElement('button');
    eliminar.classList.add('btn');
    eliminar.classList.add('btn-danger');

    eliminar.textContent = 'Eliminar'
    tdNombre.textContent = nombre
    tdApellido.textContent = apellido
    tabla.appendChild(tr)
    tr.appendChild(tdNombre)
    tr.appendChild(tdApellido)
    eliminar.addEventListener('click',()=>{
       
        eliminarElemento(tr)
        
    })
    tdBoton.appendChild(eliminar)
    tr.appendChild(tdBoton)
    
}







