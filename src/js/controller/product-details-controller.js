import { clienteService } from "../service/client-service.js";

const getUrl = new URL(window.location);
const id = getUrl.searchParams.get('id')

//renderizacao
const sectionProduct = document.querySelector('[data-product]')

clienteService.productDetails(id)
  .then(data => {
    sectionProduct.innerHTML += `<section class= "${data.section}" data-category>
    <div class="product-box">
    <img src="${data.url}" class="product-img">
    <div class="container-product-box-description">
    <h4 class="product-box-title">${data.name}</h4>
    <p class="product-box-price">R$ ${data.price}</p>
    <p class="product-box-description">${data.description}</p>
    </div>
    </div>
    </section>
    `
  })

// produtos similares
const sectionSimilarProduct = document.querySelector('[data-similarProducts]');

// template de exibicao dos produtos
function cardBuild(url, name, price, id) {
  const newProduct = document.createElement('div');
  newProduct.className = 'product-similar';
  newProduct.innerHTML = `<img src="${url}" alt="imagem do produto" class="product-similar-img">
  <h4 class="product-similar-title">${name}</h4>
  <p class="product-similar-price">R$ ${price}</p>
  <a href="..//../pages/product.details.html?id=${id}" class="product-similar-link">Ver produto</a>
  `

  return newProduct;
}


clienteService.productList()
  .then(data => {
    const itemCategories = document.querySelector('[data-category]');

    data.forEach(elemento => {

      if (elemento.section === `${itemCategories.classList.value}`) {
        sectionSimilarProduct.appendChild(cardBuild(elemento.url, elemento.name, elemento.price, elemento.id))
      }

    })
  })
