const menuItem=document.querySelectorAll('.menuItem')
const sliderWrapper=document.querySelector('.sliderWrapper')

const products = [
   {
     id: 1,
     title: "Air Force",
     price: 119,
     colors: [
       {
         code: "black",
         img: "./einfachweb Ecomerce/1.png",
       },
       {
         code: "darkblue",
         img: "./einfachweb Ecomerce/2.png",
       },
     ],
   },
   {
     id: 2,
     title: "Air Jordan",
     price: 149,
     colors: [
       {
         code: "lightgray",
         img: "./einfachweb Ecomerce/j1.png",
       },
       {
         code: "green",
         img: "./einfachweb Ecomerce/j2.png",
       },
     ],
   },
   {
     id: 3,
     title: "Blazer",
     price: 109,
     colors: [
       {
         code: "lightgray",
         img: "./einfachweb Ecomerce/b1.png",
       },
       {
         code: "green",
         img: "./einfachweb Ecomerce/b2.png",
       },
     ],
   },
   {
     id: 4,
     title: "Crater",
     price: 129,
     colors: [
       {
         code: "black",
         img: "./einfachweb Ecomerce/c1.png",
       },
       {
         code: "lightgray",
         img: "./einfachweb Ecomerce/c2.png",
       },
     ],
   },
   {
     id: 5,
     title: "Hippie",
     price: 99,
     colors: [
       {
         code: "gray",
         img: "./einfachweb Ecomerce/h1.png",
       },
       {
         code: "black",
         img: "./einfachweb Ecomerce/h2.png",
       },
     ],
   },
 ];
 
 const productImg=document.querySelector('.productImg')
 const productTitle=document.querySelector('.productTitle')
 const productPrice=document.querySelector('.productPrice')
 const color=document.querySelectorAll('.color')
 const color1=document.querySelector('.colors')
 const productButton=document.querySelector('.productButton')
 

menuItem.forEach((item,index)=> {
   item.addEventListener('click',()=>{
    sliderWrapper.style.transform=` translateX(${-100*index}vw)`;
    
    productTitle.innerHTML=products[index].title;
    productPrice.innerHTML="$"+products[index].price;
    color.forEach((element,inde) =>{
      color[inde].style. backgroundColor=`${products[index].colors[inde].code}`
      productImg.src=`${products[index].colors[0].img}`;
      element.addEventListener('click',()=>{
         productImg.src=`${products[index].colors[inde].img}`;
      })
    })
   })
    })
 const payment=document.querySelector('.payment')
const closebtn=document.querySelector(".close")
productButton.addEventListener("click",()=>{
// payment.style.display="block"
payment.style.left="50%";

})
closebtn.addEventListener("click",()=>{
   // payment.style.display="none"
   payment.style.left="-200vw";
})