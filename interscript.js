const product = [
   {
       id: 0,
       image: 'iphone.jpg',
       title: 'IPhone 15 Titanium Blue 256GB',
       price: 1050,
   },
   {
       id: 1,
       image: 'asusrog.webp',
       title: 'Asus Rog Strix G17 32GB Ryzen 7 6500 NVIDIA RTX 3050',
       price: 1000,
   },
   {
       id: 2,
       image: 'bose.webp',
       title: 'Bose Quiet Comfort Wireless Earbuds With ANC',
       price: 600,
   },
   {
       id: 3,
       image: 'sony.webp',
       title: 'Sony 65 Inch 4K Ultra HD TV X80K Series: LED Smart Google TV with Dolby Vision HDR KD65X80K',
       price: 577,
   },

    {   id: 4,
       image: 'jbl.webp',
       title: 'JBL Flip 6 - Portable Bluetooth Speaker, powerful sound and deep bass, IPX7 waterproof, 12 hours of playtime',
       price: 577,
    },

      {id: 5,
       image: 'samsung.webp',
       title: 'SAMSUNG Galaxy Watch 4 40mm Smartwatch with ECG Monitor Tracker for Health, Fitness, Running, Sleep Cycles, GPS Fall Detection, Bluetooth',
       price: 577,
      }
   
];
const categories = [...new Set(product.map((item)=>
   {return item}))]
   let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
   var {image, title, price} = item;
   return(
       `<div class='box'>
           <div class='img-box'>
               <img class='images' src=${image}></img>
           </div>
       <div class='bottom'>
       <p>${title}</p>
       <h2>$ ${price}.00</h2>`+
       "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
       `</div>
       </div>`
   )
}).join('')

var cart =[];

function addtocart(a){
   cart.push({...categories[a]});
   displaycart();
}
function delElement(a){
   cart.splice(a, 1);
   displaycart();
}

function displaycart(){
   let j = 0, total=0;
   document.getElementById("count").innerHTML=cart.length;
   if(cart.length==0){
       document.getElementById('cartItem').innerHTML = "Your cart is empty";
       document.getElementById("total").innerHTML = "$ "+0+".00";
   }
   else{
       document.getElementById("cartItem").innerHTML = cart.map((items)=>
       {
           var {image, title, price} = items;
           total=total+price;
           document.getElementById("total").innerHTML = "$ "+total+".00";
           return(
               `<div class='cart-item'>
               <div class='row-img'>
                   <img class='rowimg' src=${image}>
               </div>
               <p style='font-size:12px;'>${title}</p>
               <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
               "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
           );
       }).join('');
   }

   
}
