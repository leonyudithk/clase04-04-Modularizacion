const CrearCita = () =>{
    let nombre = document.getElementById('nombre').value
    let fecha = document.getElementById('fecha').value
    let hora= document.getElementById('hora').value
    let sintomas = document.getElementById('sintomas').value

    console.log(nombre, fecha)

    const cita ={
        nombre,
        fecha,
        hora,
        sintomas
    }
    return cita

}
export default CrearCita