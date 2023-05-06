import { clienteService } from "../service/client-service.js";

// cards
function cardBuild(url, name, price, id, section) {
  const newProduct = document.createElement('div');
  newProduct.className = 'product-box';
  newProduct.innerHTML = `
  <a href="..//../pages/product-details.html?id=${id}" class="product-box-link">
    <img src="${url}" alt="imagem do produto" class="product-box-img">
  </a>
  <h4 class="product-box-title" id=${section} >${name}</h4>
  <p class="product-box-price">R$ ${price}</p>
  <a href="..//../pages/product-details.html?id=${id}" class="product-box-link">Ver produto
  `

  newProduct.dataset.id = id;

  return newProduct;
}

// render
const renderProducts = async () => {
  const data = await clienteService.productList()
  const sectionStarWars = document.querySelector('[data-starwars]');
  const sectionConsoles = document.querySelector('[data-consoles]');
  const sectionDiversos = document.querySelector('[data-diversos]');

  data.forEach(elemento => {
    if (elemento.section === 'Star Wars') {
      sectionStarWars.appendChild(cardBuild(elemento.url, elemento.name, elemento.price, elemento.id, elemento.section))
    }

    if (elemento.section === 'Consoles') {
      sectionConsoles.appendChild(cardBuild(elemento.url, elemento.name, elemento.price, elemento.id, elemento.section))
    }

    if (elemento.section === 'Diversos') {
      sectionDiversos.appendChild(cardBuild(elemento.url, elemento.name, elemento.price, elemento.id, elemento.section))
    }
  })
}

renderProducts();