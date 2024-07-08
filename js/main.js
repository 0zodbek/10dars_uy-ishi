import { getData,createCard } from "./functions.js"
const header = document.querySelector('header')
const wrapper = document.querySelector('#wrapper')
const loader =document.querySelector('#loader')
const id = document.querySelector("#data-id")
const firstBtn = document.querySelector('#firstpage')
const secondBtn = document.querySelector('#secondpage')
const thirdBtn = document.querySelector('#thirdpage')
document.addEventListener('DOMContentLoaded',function(){
getData("https://strapi-store-server.onrender.com/api/products")
.then(data=> {
data.data.length > 0 && data.data.forEach(el => {
    wrapper.style.display = 'flex'
    header.style.display = 'flex'
    let card = createCard(el);
    wrapper.innerHTML += card;
    
});
const cards = document.querySelectorAll('.card');
cards.length > 0 && cards.forEach(function(card){
    card.addEventListener('click',function(event){
        const cardId = card.getAttribute('data-id')
        console.log(cardId);
        if(cardId){
        window.location.assign(`http://127.0.0.1:5500/pages/details.html?id=${cardId}`)
        }
    })
});
})
.catch(err=>{
console.log(err);
})
.finally(function(){
    loader.style.display = 'none'
    })
})
firstBtn.addEventListener('click',function(){
    wrapper.innerHTML = ''
    getData("https://strapi-store-server.onrender.com/api/products")
    .then(data=> {
    data.data.length > 0 && data.data.forEach(el => {
        wrapper.style.display = 'flex'
        header.style.display = 'flex'
        let card = createCard(el);
        wrapper.innerHTML += card;
        
    });
    const cards = document.querySelectorAll('.card');
    cards.length > 0 && cards.forEach(el => {
        el.addEventListener('click',function(event){
        console.log(this.id);
        })
    });
    })
    .catch(err=>{
    console.log(err);
    })
    .finally(function(){
        loader.style.display = 'none'
        })
    })
    secondBtn.addEventListener('click',function(){
        wrapper.innerHTML = ''
        getData("https://strapi-store-server.onrender.com/api/products?page=2")
        .then(data=> {
        data.data.length > 0 && data.data.forEach(el => {
            wrapper.style.display = 'flex'
            header.style.display = 'flex'
            let card = createCard(el);
            wrapper.innerHTML += card;
            
        });
        const cards = document.querySelectorAll('.card');
        cards.length > 0 && cards.forEach(el => {
            el.addEventListener('click',function(event){
            console.log(this.id);
            })
        });
        })
        .catch(err=>{
        console.log(err);
        })
        .finally(function(){
            loader.style.display = 'none'
            })
        })
        thirdBtn.addEventListener('click',function(){
            wrapper.innerHTML = ''
            getData("https://strapi-store-server.onrender.com/api/products?page=3")
            .then(data=> {
            data.data.length > 0 && data.data.forEach(el => {
                wrapper.style.display = 'flex'
                header.style.display = 'flex'
                let card = createCard(el);
                wrapper.innerHTML += card;
                
            });
            const cards = document.querySelectorAll('.card');
            cards.length > 0 && cards.forEach(el => {
                el.addEventListener('click',function(event){
                console.log(this.id);
                })
            });
            })
            .catch(err=>{
            console.log(err);
            })
            .finally(function(){
                loader.style.display = 'none'
                })
            })