
   users.forEach(user => {
       user.jackets.forEach(element =>{
        console.log(element)
        const html=
        `
         <div class="card lg-3 my-3 mx-3" style="width: 18rem">
             <img
               class="card-img-top"
               src="${element.image}"
               alt="#"
             />
             <div class="card-body">
               <h5 class="mt-2">${element.name}</h5>
               <h3 class="mt-2">${element.jacketName}</h3>
               <h5 class="mt-1">${element.price}</h5>
               <p class="card-text">${element.fabric}</p>
               <a class="btn bi bi-heart">${element.gender}</a>
               <a href="#" class="btn btn-primary">Buy</a>
             </div>
           </div>
     `
     
       });
       
    });
    