export const listarEnTabla = (datos, listarHTML)=>{
       datos.forEach(cita=>{
           const {nombre, fecha, hora, sintomas, id}=cita

           listarHTML.innerHTML +=`
           <td>${nombre}</td>
           <td>${fecha}</td>
           <td>${hora}</td>
           <td>${sintomas}</td>
           <td> <button id=${id} type="submit" class="btn btn-primary">Borrar</button></td>
           `
       })
 

}