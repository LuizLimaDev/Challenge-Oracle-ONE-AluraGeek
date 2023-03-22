import { conectaApi } from "./products-service.js";

const lista = document.querySelector('[data-starWars]');

function constroiCard(imageUrl, alt, name, price) {
  const produto = document.createElement('div');
  produto.className = 'product-box';
  produto.innerHTML = `<img src="${imageUrl}" alt="${alt}" class="product-box-img">
  <h4 class="product-box-title">${name}</h4>
  <p class="product-box-price">${price}</p>
  <a href="#" class="product-box-link">Ver produto</a>
  `

  return produto;
}

async function listaProdutos() {
  const listaApi = await conectaApi.listaProdutos();
  listaApi.forEach(element => lista.appendChild(
    constroiCard(element.imageUrl, element.alt, element.name, element.price)));
}

listaProdutos()