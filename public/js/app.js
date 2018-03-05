$(document).ready(function () {

  //jaalando  data


  //hallando categorias  que  se  colocaran en listas
  $.ajax({
    url: 'https://api.mercadolibre.com/categories/MPE1574',
    success: function (data) {
      const categorias = data.children_categories
     // console.log(categorias);
     
      categorias.forEach(function (element) {
        const li = `<li  class="lisCategorias" data-id=${element.id}><a href="">${element.name}</a></li>`
        $(".right").append(li);
   
       ;
      });
    }

  });
  
  // jalando subcategorias
  $.ajax({
    url: 'https://api.mercadolibre.com/sites/MPE/search?category=MPE1574',
    success: function (data) {
      const children = data.results
      //console.log(children);

      children.forEach(function (element) {
        const div = ` <div id= ${element.category_id} class="listProductos  card col s12 m3  l3" style="height: 280px; width:250px; margin:8px 9px " >
       <img src="${element.thumbnail} alt="">
       <p class="center-align">${element.title}</p>
       <p class="center-align " style="color: blue;"> costo :${element.price} </p>
       <p class="center-align">${element.category_id}</p>
       </div>`
        $(".row").append(div);
       // $(".listProductos").hide();

      })

    }
  });

 // evento que relaciona  la categoria  con las subcategorias.
  
  $(".lisCategorias").click(function() { 
    if($(".lisCategorias").attr( "id" )=== $(".listProductos").attr("catergory_id")){
     $( ".lisProductos" ).show()}
     else{$(".listProductos").hide()}
    
  });


})





