let ProductsInCart = localStorage.getItem("ProductsInCart")
let totalPrice=0;
if(ProductsInCart){
    let items = JSON.parse(ProductsInCart) ;
   console.log(items); 
    addProducts(items);
    $.each(items,function(i,v){
      totalPrice+=v.price * v.num; 
    });
    $('.total').html(totalPrice);
}

function addProducts(data){
    var html='';
             $.each(data,function(i,v){
                var oldpr='';
                var stylered='';
                if(v.oldprice!=undefined && v.oldprice!=0){
                    oldpr=`<del>$ ${v.oldprice}</del>`; 
                    stylered='prodect-title2'; 
                }
    html+=`<div class="card col-lg-3 col-md-4 col-sm-12 " >
                  <div class="card-body1">
                         <img src="${v.url1}" class="card-img-top " alt="..."> 
                         <div class="card-body">
                             <p>${v.title}</p>
                             <h2 class="prodect-title1 ${stylered}">
                              $${v.price}  ${oldpr}   
                             </h2>
                             <span class="span1" id="num_${v.id}"> ${v.num}</span>
                             <a href="#" class="pluss"><i class="fas fa-plus text-success" onclick="addProduct(${v.id})"></i></a>
                             <a href="#" class="minus"><i class="fas fa-minus text-danger" onclick="minProduct(${v.id})"></i></a>
                             <div style="margin: 10px;">  <a href="#" class="remove" onclick="removeItem(this,${v.id})" >Remove</a>  </div>
                   
                    
                          </div>
                    </div>
                </div>`
                });
    $('#productlist').html(html); 
     }
     function removeItem(el,id){
      el.closest(".card").remove();
    var products=  localStorage.getItem("ProductsInCart")
    var items= JSON.parse(products);
 
     let choosenItem = items.filter((v) => v.id != id );
      localStorage.setItem('ProductsInCart',JSON.stringify(choosenItem));
             window.location.reload();
     }
  //// ////////////////////////////////////////////
  
  let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(ProductsInCart) : [];
  function addProduct(id){
        let prodect = addedItem.find((v) => v.id === id );
        let isInProdect =addedItem.find(v=> v.id===prodect.id);
        if(isInProdect){
            addedItem =addedItem.map(p=>{
                if(p.id === prodect.id)
                p.num +=1;
            return p;
            })
        }
        var sysid="num_"+id;
        document.getElementById(sysid).innerHTML= prodect.num;
        localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
         window.location.reload();
}


function minProduct(id){
  let prodect = addedItem.find((v) => v.id === id );
  if(prodect.num>1){
    let isInProdect =addedItem.find(v=> v.id===prodect.id);
    if(isInProdect){
        addedItem =addedItem.map(p=>{
            if(p.id === prodect.id)
              p.num -=1;
              return p;
        })
      }
      localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
  }else{
    let choosenItem = addedItem.filter((v) => v.id != id );
    localStorage.setItem('ProductsInCart',JSON.stringify(choosenItem));
  }

   window.location.reload(); 
}