import { getData,createCard } from "./functions.js"
const header = document.querySelector('header')
const wrapper = document.querySelector('#wrapper')
const loader =document.querySelector('#loader')
document.addEventListener('DOMContentLoaded',function(){
getData("https://strapi-store-server.onrender.com/api/products")
.then(data=> {
data.data.length > 0 && data.data.forEach(el => {
    wrapper.style.display = 'flex'
    header.style.display = 'flex'
    let card = createCard(el);
    wrapper.innerHTML += card;
    
});
})
.catch(err=>{
console.log(err);
})
.finally(function(){
    loader.style.display = 'none'
    })
})
