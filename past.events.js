let div = document.getElementById("container-cards-pastEvents")
let events = data.events
div.innerHTML = ``

for(let element of events){
    div.innerHTML= `<div class="card card-pastEvents col-md-3 m-3">
    <img src="${element.image}" alt="books">
    <h2>${element.name}</h2>
    <p>${element.description}</p>
    <div class="item-card">
      <p>${element.price}</p>
      <input type="button" value="ver más">
    </div>
  </div>
  <div class="card card-pastEvents  col-md-3 m-3">
    < <img src="${element.image}" alt="books">
    <h2>${element.name}</h2>
    <p>${element.description}</p>
    <div class="item-card">
      <p>${element.price}</p>
      <input type="button" value="ver más">
    </div>
  </div>
  <div class="card card-pastEvents  col-md-3 m-3" >
  <img src="${element.image}" alt="books">
  <h2>${element.name}</h2>
  <p>${element.description}</p>
  <div class="item-card">
    <p>${element.price}</p>
      <input type="button" value="ver más">
    </div>
  </div>
  <div class="card card-pastEvents  col-md-3 m-3">
     <img src="${element.image}" alt="books">
    <h2>${element.name}</h2>
    <p>${element.description}</p>
    <div class="item-card">
      <p>${element.price}</p>
      <input type="button" value="ver más">
    </div>
  </div>`
}