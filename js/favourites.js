let ProductsFavourite= localStorage.getItem("products")
if(ProductsFavourite){
    let items = JSON.parse(ProductsFavourite) ;
   console.log(items); 
   addfavouriteProducts(items.filter(a=>a.liked));
}

function addfavouriteProducts(data){
    var html='';
             $.each(data,function(i,v){
                var oldpr='';
                var stylered='';
                if(v.oldprice!=undefined && v.oldprice!=0){
                    oldpr=`<del>$ ${v.oldprice}</del>`; 
                    stylered='prodect-title2'; 
                }
    html+=`<div class="card col-3">
                 <div class="card-body1">
                    <img src="${v.url1}" class="card-img-top" alt="..."> 
                    <div class="card-body">
                    <div class="star">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                      <i class="fas fa-star star1"></i>
                      <i class="fas fa-star star1"></i>
                      <i class="fas fa-star star1"></i> 
                   </div>
                   <span>${v.title}</span>
                   <h2 class="prodect-title1 ${stylered}">
                   $${v.price}  ${oldpr}   
                  </h2>
                  </div>
                  </div>
                  <div class="product-overlay">
                    <img src="${v.url2}"  class="card-img-top" alt="...">
                    <div class="social">
                      <a href="#" class="remove" onclick="removeItem(this,${v.id})" >REMOVE TO favourite</a> 
                    </div>
                </div>
                </div>`
                });
    $('#productlist').html(html); 
     }
     function removeItem(el,id){
      el.closest(".card").remove();
    var products=  localStorage.getItem("ProductsFavourite")
    var items= JSON.parse(products);
  //  console.log(items)
   let choosenItem = items.filter((v) => v.id != id );
  //  console.log(choosenItem)
      localStorage.setItem('ProductsFavourite',JSON.stringify(choosenItem));
       
     }
  //// ////////////////////////////////////////////
  
