$(document).ready(function () {

  //jaalando  data


  //hallando categorias  que  se  colocaran en listas
  $.ajax({
    url: 'https://api.mercadolibre.com/categories/MPE1574',
    success: function (data) {
      var categorias = data.children_categories
      console.log(categorias)
      categorias.forEach(function (element) {
        const li = `<li  class="lisCategorias" data-id=${element.id}><a href="">${element.name}</a></li>`
        $(".right").append(li);
      });
    }

  });
  // jalando subcategorias
  $.ajax({
    url: 'https://api.mercadolibre.com/sites/MPE/search?category=MPE1574',
    success: function (data) {
      var children = data.results
      console.log(children);

      children.forEach(function (element) {
        const div = ` <div id= ${element.category_id} class="listProductos col s3 m3  l3">
       <img src="${element.thumbnail} alt="">
       <p>${element.title}</p>
       <p>${element.price}</p>
       <p>${element.category_id}</p>
       </div>`
        $(".row").append(div);
       // $(".listProductos").hide();

      })

    }
  });

  //evento que relaciona  la categoria  con las subcategorias.
  
  //$(".lisCategorias").click(function() {
   // if($(".lisCategorias").attr( "data-id" )=== $(".listProductos").attr("id")){
   //   $( ".lisProductos" ).show()
   // }
  //});


})


// ITERANDO CATEGORIAS

//


