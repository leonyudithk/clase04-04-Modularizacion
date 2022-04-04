import { postApi } from "./AgregarApi.js";
import CrearCita from "./crearObjeto.js";
import { eliminarCita } from "./EliminarCita.js";
import { leerApi } from "./getData.js";
import { listarEnTabla } from "./listarCitas.js";


let formulario = document.getElementById('formulario')
let listarCita = document.getElementById('listarCita')

let url = 'https://f10-api.herokuapp.com/data/'
let objetoCita ={}
let arrayDatos = []

  
formulario.addEventListener('submit', e =>{
    e.preventDefault()
    objetoCita = CrearCita()
    postApi(url, objetoCita)
    console.log(objetoCita)
})

document.addEventListener('DOMContentLoaded', async()=>{
   arrayDatos= await leerApi(url)
   listarEnTabla(arrayDatos,listarCita)
})


listarCita.addEventListener('click', e =>{
  
    let idEliminar = e.target.id
    console.log(idEliminar)

    if(idEliminar !== ''){
        eliminarCita(url, idEliminar)
    }

})



