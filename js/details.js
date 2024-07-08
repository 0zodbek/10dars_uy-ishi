import {createDetailsCard , getData} from "./functions.js"
const details = document.querySelector('#details')
document.addEventListener('DOMContentLoaded',function(){
let url = window.location.href;
console.log(url);
let id = url.split('id=')[1];
console.log(id);
if(!id){
    window.location.assign("http://127.0.0.1:5500/index.html#")
return;
}
getData(`https://strapi-store-server.onrender.com/api/products/${id}`)
.then(data => {
    console.log(data);
if(data.data.id){
const card = createDetailsCard(data.data)
details.innerHTML = card;
}
})
.catch(err => {

})
})