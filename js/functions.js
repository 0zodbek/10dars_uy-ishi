function createCard(product){
return`
<div class="card" data-id="${product.id}">
<div class="card_img">
  <img
    src="${product.attributes.image}"
    alt=""
  />
</div>
<div class="card_info">
  <h1>${product.attributes.tittle}</h1>
  <h3 class="price">$${product.attributes.price}</h3>
</div>
</div>
`
}
async function getData(url){
try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
} catch (error) {
    return error
}
}
function createDetailsCard (product){
return `
<div class="info-product" id="infocard">
<div class="part-img">
    <img src="${product.attributes.image}" alt="">
</div>
<div class="part-info">
    <h2>${product.attributes.title}</h2>
    <h3 class="h3">${product.attributes.company}</h3>
    <h3 class="price">$${product.attributes.price}</h3>
    <p>${product.attributes.description}</p>
</div>
</div>
`
}
export {getData,createCard,createDetailsCard}