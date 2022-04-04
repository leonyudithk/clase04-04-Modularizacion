export const eliminarCita = async (url, id) =>{
    await axios.delete(url+id)
}