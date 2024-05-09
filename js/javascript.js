let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`
fetch(url)
.then(res => res.json())
.then(objet => {

        let html =`` 
        for (const data of objet.drinks) {
        console.log(data)
            html +=`
            <div class="col mt-4 >
                <div class="card mt-4 mb-3 ms-1 border border-primary rounder" id="card">
                  <img src="${data.srtDrinkThumb}" class=" img-fluid mt-3 rounded" alt="${data.strGlass}">
                  <div class="card-body" id=card-body">
                    <h4 class="card-title text-center">${data.strCategory} - ${data.strGlass}</h4>
                    <p class="card-text text-start"><h4>${data.strInstructionsES}</h4></p>
                    <ul class="list-group list-group-flush">
                     <li class="list-group-item"><h5>${data.strIngredient1}</h5></li>
                     <li class="list-group-item"><h5>${data.strIngredient2}</h5></li>
                     <li class="list-group-item"><h5>${data.strIngredient3}</h5></li>
                    </ul>
                       
                  </div>
                  <a href="${data.srtDrinkThumb}" class="btn btn-primary mb-3">Enlace de Imagen</a>          
                </div>
            </div>`
          }
          html+=
          document.getElementById("container").innerHTML = html

 }
 )


   





