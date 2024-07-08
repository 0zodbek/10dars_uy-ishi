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
export {getData,createCard}