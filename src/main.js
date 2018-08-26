
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});

// Or with jQuery
$(document).ready(function () {
  $('.carousel').carousel();
})

//iniciar variables dom

const inputType = document.getElementById('search');
const btnSearch = document.getElementById('btnSearch');
let cardRest = document.querySelector('.card-columns');
const contRestaurants = document.getElementById("restaurantes");


let typeRest = '';
let search = '';
let resultSearch = '';
//recargar 
window.loadData = (buscar) => {

  firebase.database().ref('/restaurants').on('child_added', function (snapshot) {
  //resultSearch = crearElementos(name, type.value, address, district, shedule, description, photo)
  resultSearch = crearElementos("pollo", "polleria", "chosica", "chos", "", "pollito","pollerias/roky.jpg","parrillas");
  contRestaurants.innerHTML += resultSearch;
})



}

btnSearch.addEventListener('click',()=>{

  var buscar = inputType.value;
  loadData(buscar);



});

function crearElementos(name, type, address, district, shedule, description, photo) {

  var contRest = "";

  contRest += '<div class="col s12 m4"><div class="card"><div class="card-image">';

  contRest += '<img src="images/' + photo + '" width="150" height="200">';

  contRest += '<span class="card-title">Card Title</span></div><div class="card-content"><p>';

  contRest += '<b>Nombre: </b> <span>' + name + '</span>';
  contRest += '<br>';
  contRest += '<b>Nombre: </b> <span>' + district + '</span>';
  contRest += '<br>';
  contRest += '<b>Horario: </b> <span>' + shedule + '</span>';
  contRest += '<br>';
  contRest += '<b>Descripcion: </b> <span>' + description + '</span>';
  contRest += '<br>';
  contRest += '<b>Dirección: </b> <span>' + address + '</span>';
  contRest += '<br>';
  contRest += '<b>Categoría: </b> <span>' + type + '</span>';


  contRest += '</p></div><div class="card-action"><a href="#">Ver más</a></div></div></div>';

  return contRest;

  /*
  <div class="col s12 m4">
                          <div class="card">
                            <div class="card-image">
                              <img src="images/pollerias/norkys.jpg" width="150" height="200">
                              <span class="card-title">Card Title</span>
                            </div>
                            <div class="card-content">
                              <p>

                                <b>Nombre: </b> <span>Norkys</span>
                                <br>
                                <b>Dirección: </b> <span>Chosica</span>

                              </p>
                            </div>
                            <div class="card-action">
                              <a href="#">Ver más</a>
                            </div>
                          </div>

                        </div>
  */
}

//var imagen = snap.photo;
//<img src="images/ '+ imagen +' " class="sizePicture">
