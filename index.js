let div = document.getElementById("container-cards")
let events = data.events
div.innerHTML = ``




function insertEvents(events){
     for(let event of events){
         div.innerHTML += `<div class="card card-pastEvents col-md-3 m-3">
         <img src="${event.image}" alt="books">
         <h2>${event.name}</h2>   
         <p>${event.description}</p>
         <div class="item-card">
           <p>${event.price}</p>
           <input type="button" value="ver más">
         </div>
       </div>`
     }
   
   }

   insertEvents(events);
