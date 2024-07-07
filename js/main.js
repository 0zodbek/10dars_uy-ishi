import { getData,createCard } from "./functions.js"

const wrapper = document.querySelector('#wrapper')

document.addEventListener('DOMContentLoaded',function(){
getData("https://strapi-store-server.onrender.com/api/products")
.then(data=> {
data.data.length > 0 && data.data.forEach(el => {
    let card = createCard(el);
    wrapper.innerHTML += card;
    
});
})
.catch(err=>{
console.log(err);
})
})
