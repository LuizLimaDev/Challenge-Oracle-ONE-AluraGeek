import { clienteService } from "../service/client-service.js";

// product card
function cardBuild(url, name, price, id) {
  const newProduct = document.createElement('div');
  newProduct.className = 'product-box';
  newProduct.innerHTML = `
  <a href="..//../pages/product-details.html?id=${id}" class="product-box-link">
    <img src="${url}" alt="imagem do produto" class="product-box-img">
  </a>
  <h4 class="product-box-title">${name}</h4>
  <p class="product-box-price">R$ ${price}</p>
  <a href="..//../pages/product-details.html?id=${id}" class="product-box-link">Ver produto</a>
  `

  newProduct.dataset.id = id;

  return newProduct;
}


// render
const render = async () => {
  const data = await clienteService.productList()
  const sectionDiversos = document.querySelector('[data-diversos]');

  data.forEach(elemento => {
    if (elemento.section === 'Diversos') {
      sectionDiversos.appendChild(cardBuild(elemento.url, elemento.name, elemento.price, elemento.id))
    }
  })
}

render()