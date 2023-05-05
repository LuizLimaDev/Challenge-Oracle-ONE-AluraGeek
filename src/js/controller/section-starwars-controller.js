import { clienteService } from "../service/client-service.js";

// products card
function cardBuild(url, name, price, id) {
  const newProduct = document.createElement('div');
  newProduct.className = 'product-box';
  newProduct.innerHTML = `<img src="${url}" alt="imagem do produto" class="product-box-img">
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
  const sectionStarWars = document.querySelector('[data-starwars]');

  data.forEach(elemento => {
    if (elemento.section === 'Star Wars') {
      sectionStarWars.appendChild(cardBuild(elemento.url, elemento.name, elemento.price, elemento.id))
    }
  })
}

render();