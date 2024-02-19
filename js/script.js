
//////////////////////////////////////////////////////////////////////////////////
let userInfo = document.querySelector ("#user_info")
let userD = document.querySelector ("#user")
let links = document.querySelector ("#links")
let cartsProducts = document.querySelector(".carts_products")

if (localStorage.getItem("username")){
    links.remove()
    userInfo.style.display ="flex"
    userD.innerHTML = localStorage.getItem("username")
}

let logOutBtn = document.querySelector("#louout")
logOutBtn.addEventListener("click", function (){
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    } , 1500)
})

///////////////////////////////////
let products = [
    {
        id:1,
        title: "Veniam officiis voluptetes",
        price:122.00,

        url1 : "./Images/1-1.jpg",
        url2 : "./Images/1-2.jpg",
        num:1,
        itemcard:false,
        liked:false, 
    },
    {
        id:2,
        title: "Corporis sed excepturi",
        price:194.00,
        oldprice:241.00, 
        url1 : "./Images/2-1.jpg",
        url2 : "./Images/2-2.jpg",
        num:1,
        itemcard:false,
        liked:false, 
    },
    {
        id:3,
        title: "Quidem iusto sapiente",
        price:175.00,
        url1 : "./Images/3-1.jpg",
        url2 : "./Images/3-2.jpg",
        num:1,
        itemcard:false,
        liked:false, 
    },
    {
        id:4,
        title: "Ullam exceptuir nesciunt",
        price:145.00,
        oldprice:190.00,
        url1 : "./Images/1-1.jpg",
        url2 : "./Images/1-2.jpg",
        num:1,
        itemcard:false,
        liked:false, 
    },
    
];

function addProducts(data){
var html='';
         $.each(data,function(i,v){
            var oldpr='';
            var stylered='';
            if(v.oldprice!=undefined && v.oldprice!=0){
                oldpr=`<del>$ ${v.oldprice}</del>`; 
                stylered='prodect-title2'; 
            }
           
html+=`<div class="card col-lg-3 col-md-4 col-sm-12" >
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
                       <a href="#" class="add"  onclick="addProduct(${v.id})"style="background-color :${v.itemcard == true ?"red":""}" ><i class="fas fa-shopping-bag"></i> ${v.itemcard==true ?"remove from CART":"ADD TO CART"} </a>
                       <a href="#" class="fav" onclick="addFavourite(${v.id})" ><i class="fas fa-heart"style="color :${v.liked == true ?"red":""}" ></i></a>
                
                    </div>
                </div>
            </div>`
            });
         
$('#productlist').html(html); 
 }
 
 let cartProductDiv = document.querySelector(".carts_products #cart_Item")
 let badge = document.querySelector(".badge")
 let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];
 if(addedItem) {
    addedItem.map(item => {
        cartProductDiv.innerHTML += `<li>
        <span style="margin-right: 20px;">${item.title}</span>
       <div class="plus">
            <span style="margin-right: 0px;">${item.num}</span>
            <a href="#" class="pluss"><i class="fas fa-plus text-success" onclick="plusBtn(${item.id})"></i></a>
            <a href="#" class="minus"><i class="fas fa-minus text-danger" onclick="minusBtn(${item.id})"></i></a>
        </div>
    </li>`;
    })
   
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
}
let allItems =[]
function addProduct(id){
    if(localStorage.getItem("username")){   
        let prodect = products.find((v) => v.id === id );
        prodect.itemcard=true;
        let isInProdect =addedItem.find(v=> v.id===prodect.id);
        products.map(item=> {
            if(item.id === prodect.id){
                item.itemcard==true;
            }
        }) 
        if(isInProdect){
            addedItem =addedItem.map(p=>{
                if(p.id === prodect.id)
                p.num +=1;
            return p;
            })
        }else{
            addedItem.push(prodect)
        }
         cartProductDiv.innerHTML="";
         addedItem.forEach(item =>{
           cartProductDiv.innerHTML += `<li>
           <span style="margin-right: 20px;">${item.title}</span>
          <div class="plus">
               <span style="margin-right: 0px;">${item.num}</span>
               <a href="#" class="pluss"><i class="fas fa-plus text-success" onclick="plusBtn(${item.id})"></i></a>
               <a href="#" class="minus"><i class="fas fa-minus text-danger" onclick="minusBtn(${item.id})"></i></a>
           </div>
       </li> `;  
       })
                         
       
    //     addedItem = [...addedItem , choosenItem]
    //    let uniqueprodects = getUniqueArr(addedItem ,"id") 
        localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
        let cartProductsLength = document.querySelectorAll(".carts_products #cart_Item span")
        badge.style.display = "block";
        badge.innerHTML = cartProductsLength.length;
    }else {
        window.location="login.html";
    }
    localStorage.setItem("MyProducts" , JSON.stringify(products) )
    window.location.reload();
    cartsProducts.style.display=="block";
}


function minProduct(id){
    if(localStorage.getItem("username")){   
        let prodect = products.find((v) => v.id === id );
        prodect.itemcard=true;
        let isInProdect =addedItem.find(v=> v.id===prodect.id);
        products.map(item=> {
            if(item.id === prodect.id){
                item.itemcard==true;
            }
        }) 
        if(isInProdect){
            addedItem =addedItem.map(p=>{
                if(p.id === prodect.id)
                p.num -=1;
            return p;
            })
        }else{
           
        }
         cartProductDiv.innerHTML="";
         addedItem.forEach(item =>{
           cartProductDiv.innerHTML += `<li>
           <span style="margin-right: 20px;">${item.title}</span>
          <div class="plus">
               <span style="margin-right: 0px;">${item.num}</span>
               <a href="#" class="pluss"><i class="fas fa-plus text-success" onclick="plusBtn(${item.id})"></i></a>
               <a href="#" class="minus"><i class="fas fa-minus text-danger" onclick="minusBtn(${item.id})"></i></a>
           </div>
       </li> `;  
       })
       
       
    //     addedItem = [...addedItem , choosenItem]
    //    let uniqueprodects = getUniqueArr(addedItem ,"id") 
        localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
        let cartProductsLength = document.querySelectorAll(".carts_products div p")
        badge.style.display = "block";
        badge.innerHTML = cartProductsLength.length;
    }else {
        window.location="login.html";
    }
    localStorage.setItem("MyProducts" , JSON.stringify(products) )
    window.location.reload();
    cartsProducts.style.display=="block";
}
function getUniqueArr(arr , filterType){
    let unique =arr.map(item=>item[filterType])
    .map((item,i,final)=> final.indexOf(item) ===i && i)
    .filter((item)=>arr[item])
    .map((item)=>arr[item]);

     return unique;
}
/////////////////////////////////////////////////////////

function addFavourite(id){
    if(localStorage.getItem("username")){   
        let choosenItem = products.find((v) => v.id === id );
        
        products.map(item=> {
            if(item.id === choosenItem.id){
                item.liked=!choosenItem.liked;
            }
        }) ;
        localStorage.setItem('products',JSON.stringify(products) )
        addProducts(products) 
    }else {
        window.location="login.html";
    }
}
   
 /////////////////////////////////////////////////////////////
 let shoppingCartIcon = document.querySelector(".shopping-cart")

shoppingCartIcon.addEventListener("click", opencart)

function opencart(){
     if(cartProductDiv.innerHTML !=""){
         if(cartsProducts.style.display=="block"){
            cartsProducts.style.display="none"
         }else {
            cartsProducts.style.display="block"
         }
     } 
}
//////////////////////////////////////////



let input =document.getElementById("search");
input.addEventListener("keyup",function(e){
    search(e.target.value, products);
    if(e.target.value.trim()=== "")
       addProducts(products); 
});
function search(title, myArray){
   if(myArray){
    let arr =myArray.filter((item)=>item.title.toLowerCase().includes(title) );
     console.log(arr); 
    addProducts(arr); 
   } 
    
}


