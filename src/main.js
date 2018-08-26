
 document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
});

// Or with jQuery
$(document).ready(function () {
    $('.carousel').carousel();
})

//
const btnEthnic = document.getElementById('ethnic');
const btnBudget = document.getElementById('budget');
//const inputdistrict = document.getElementById('search');
const btnSearch = document.getElementById('btnsearch');
let cardRest = document.querySelector('.card-columns');


let districtRest = '';
let search = '';

const data = (search) => {


  fetch('https://patriciamont.github.io/lim-2018-01-foodmap/data/restaurants.json')
    .then(response =>
      response.json())
    .then(result => {

      cardRest.innerHTML = '';

      const restArray = searchRestaurants(result, search)
      showRestaurant(restArray)
      console.log(restArray);
    })


}
window.onload=()=>{data('')}

showRestaurant = (restArray) => {


  restArray.forEach(element => {

    cardRest.innerHTML +=
      `<div class="card">
<img class="card-img-top" src="https://patriciamont.github.io/lim-2018-01-foodmap/img/${element.photo}" alt="Card image cap">
<div class="card-body">
<h5 class="card-title">${element.name}</h5>
<div class="container">
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Más Info</button>
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">${element.name}</h3>
        </div>
        <div class="modal-body">
          <h6>Dirección: ${element.address}</h6>
          <h6>Horario: ${element.schedule}</h6>
          <h6 class="text-justify">Descripción: ${element.description}</h6>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Pedir Ahora</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>
</div>
</div>
`
  });

}

btnSearch.addEventListener('click', () => {

  search = inputdistrict.value;
  /* dataRest('') */

  data(search)


})

