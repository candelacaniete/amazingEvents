let events = data.events

 console.log(events )

 let div = document.getElementById("conteiner-cards")
div.innerHTML = ``

 function renderCards (datos, contenedor){
   contenedor.innerHTML = ""
   let eventosString = ""
   datos.forEach((element) => {
     eventosString += `<div class="card card-pastEvents col-md-3 m-3">
     <img src="${element.image}" alt="books">
     <h2>${element.name}</h2>   
     <p>${element.description}</p>
     <div class="item-card">
       <p>$${element.price}</p>
       <a href="./details.html?id=${element._id}" class="btn btn-primary">View more</a>
     </div>
     </div>`
     })
     contenedor.innerHTML = eventosString
 }

 renderCards(events, div)



 let categoryConteiner = document.getElementById("checkbox")
 let categoryConteinerPadre = document.getElementById("form-father")

 let categorias = (Array.from (new Set(events.map(elemento => elemento.category))))

 console.log(categorias)

 function renderCheckboxs(category, conteiner){
   let checkboxs = ""
   category.forEach(element => {
   checkboxs += `<label class="text-white m-2" for="${element}">${element}</label>
   <input type="checkbox" name="category" value="${element}" id="${element}">`
 })
 conteiner.innerHTML += checkboxs
 }
  
 renderCheckboxs(categorias, categoryConteiner)


 categoryConteinerPadre.addEventListener("change", (element) => {
   let filtradoPorCategoria = filtrar()
   console.log(filtradoPorCategoria)
   renderCards(filtradoPorCategoria, div)
 } )


 function filtrarPorCategoria(eventos, category){
   let checked = (Array.from(document.querySelectorAll("input[type ='checkbox']:checked"))
   .map((element) => element.value));
   let arrayFiltrado = checked
     .map((value) =>
       eventos.filter((elemento) => {
         return elemento.category === value;
       })
     ).flat();
     if (checked.length == false ) {
       return events;
     } else {
       return arrayFiltrado;
     }
    }

    let input = document.getElementById("input-texto")

    input.addEventListener("input", () => {
      let filtradoPorBusqueda = filtrar()
      renderCards(filtradoPorBusqueda, div)
    })

    function filtrarPorBusqueda(eventos, valueSearch){
      return eventos.filter(evento => (evento.name).toLowerCase().includes(valueSearch.toLowerCase()))
    }

    function filtrar(){
      let filtradoPorCategoria = filtrarPorCategoria(events, categorias)
      let filtradoPorBusqueda = filtrarPorBusqueda (filtradoPorCategoria, input.value)
      return filtradoPorBusqueda 
    }