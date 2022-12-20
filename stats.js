let conteinerTabla = document.getElementById("conteiner-tabla")
let td = document.getElementById("tdUno")
let tdDos = document.getElementById("tdDos")


let url = 'https://amazing-events.onrender.com/api/events'

fetch(url)
.then(respuesta => respuesta.json())
.then(data => {
     datos = data
     console.log(datos)
     mayorPorcentaje(datos.events, td)
     menorPorcentaje(datos.events, tdDos)
     let upcomingEvents = (datos.events).filter(function (event) {
        return event.date >= data.currentDate;
      });
      let pastEvents = (datos.events).filter(function (event) {
        return event.date <= data.currentDate;
      });
      console.log(pastEvents)
      console.log(upcomingEvents)
     crearCategoriasTabla(upcomingEvents, upcomingContainer )
     crearCategoriasTablaPast(pastEvents, pastConteiner )
})



function mayorPorcentaje(array, conteiner){
    let arrayConAsistencias = [...array.filter(element => element.assistance)]
    let arrayMayorPorcentaje = []
    arrayConAsistencias.forEach(element => {
        let porcentaje = element.assistance / element.capacity * 100 
        console.log(porcentaje)
        if (porcentaje > 94){
            return arrayMayorPorcentaje.push(`${element.name}, ${(porcentaje).toFixed(2)}%`)
        }
    })
    
    console.log(arrayMayorPorcentaje)
    conteiner.innerHTML = `<td>${arrayMayorPorcentaje}</td>`

}


function menorPorcentaje(array, conteiner){
    let arrayConAsistencias = [...array.filter(element => element.assistance)]
    let arrayMenorPorcentaje = []
    arrayConAsistencias.forEach(element => {
        let porcentaje = element.assistance / element.capacity * 100 
        console.log(porcentaje)
        if (porcentaje < 70){
            return arrayMenorPorcentaje.push(`${element.name}, ${(porcentaje).toFixed(2)}%`)
        }
    })
    
    console.log(arrayMenorPorcentaje)
    conteiner.innerHTML = `<td>${arrayMenorPorcentaje}</td>`

}





let categoriesTableUpcoming = document.getElementById("tr-categories")
let upcomingContainer = document.getElementById("upcoming-conteiner")
let pastConteiner = document.getElementById("past-conteiner")

 function crearCategoriasTabla(category, conteiner){
    conteiner.innerHTML = `    <tr>
    <td >Categories</td>
    <td>Revenues</td>
    <td>Percentage of attendace</td>
</tr>
<tr id="tr-categories">
    <td>${category[0].category}</td>
    <td>${category[0].estimate * category[0].price}</td>
    <td>${(category[0].estimate * 100 / category[0].capacity).toFixed(3)}</td>
</tr>
<tr>
<td>${category[1].category}</td>
<td>${category[1].estimate * category[1].price}</td>
<td>${(category[1].estimate * 100 / category[1].capacity).toFixed(3)}</td>
</tr>
<tr>
<td>${category[2].category}</td>
<td>${category[2].estimate * category[2].price}</td>
<td>${(category[2].estimate * 100 / category[2].capacity).toFixed(3)}</td>
</tr>
<tr>
<td>${category[3].category}</td>
<td>${category[3].estimate * category[3].price}</td>
<td>${(category[3].estimate * 100 / category[3].capacity).toFixed(3)}</td>
</tr>
<tr>
<td>${category[4].category}</td>
<td>${category[4].estimate * category[4].price}</td>
<td>${(category[4].estimate * 100 / category[4].capacity).toFixed(3)}</td>
</tr>
<tr>
<td>${category[5].category}</td>
<td>${category[5].estimate * category[5].price}</td>
<td>${(category[5].estimate * 100 / category[5].capacity).toFixed(3)}</td>
</tr>
<tr>
<td>${category[6].category}</td>
<td>${category[6].estimate * category[6].price}</td>
<td>${(category[6].estimate * 100 / category[6].capacity).toFixed(3)}</td>
</tr>`
 }


 function crearCategoriasTablaPast(category, conteiner){
    conteiner.innerHTML = `    <tr>
    <td >Categories</td>
    <td>Revenues</td>
    <td>Percentage of attendace</td>
</tr>
<tr id="tr-categories">
    <td>${category[0].category}</td>
    <td>${category[0].assistance * category[0].price}</td>
    <td>${(category[0].assistance * 100 / category[0].capacity).toFixed(3)}</td>
</tr>
<tr>
<td>${category[1].category}</td>
<td>${category[1].assistance * category[1].price}</td>
<td>${(category[1].assistance * 100 / category[1].capacity).toFixed(3)}</td>
</tr>
<tr>
<td>${category[2].category}</td>
<td>${category[2].assistance * category[2].price}</td>
<td>${(category[2].assistance * 100 / category[2].capacity).toFixed(3)}</td>
</tr>
<tr>
<td>${category[3].category}</td>
<td>${category[3].assistance * category[3].price}</td>
<td>${(category[3].assistance * 100 / category[3].capacity).toFixed(3)}</td>
</tr>
<tr>
<td>${category[4].category}</td>
<td>${category[4].assistance * category[4].price}</td>
<td>${(category[4].assistance * 100 / category[4].capacity).toFixed(3)}</td>
</tr>
<tr>
<td>${category[5].category}</td>
<td>${category[5].assistance * category[5].price}</td>
<td>${(category[5].assistance * 100 / category[5].capacity).toFixed(3)}</td>
</tr>
<tr>
<td>${category[6].category}</td>
<td>${category[6].assistance * category[6].price}</td>
<td>${(category[6].assistance * 100 / category[6].capacity).toFixed(3)}</td>
</tr>`
 }
