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

// card simliar product
const sectionSimilarProduct = document.querySelector('[data-similarProducts]');

function cardBuild(url, name, price, id) {
  const newProduct = document.createElement('div');
  newProduct.className = 'product-similar';
  newProduct.innerHTML = `
  <a href="..//../pages/product-details.html?id=${id}">
    <img src="${url}" alt="imagem do produto" class="product-similar-img">
  </a>
  <h4 class="product-similar-title">${name}</h4>
  <p class="product-similar-price">R$ ${price}</p>
  <a href="..//../pages/product-details.html?id=${id}" class="product-similar-link">Ver produto</a>
  `

  return newProduct;
}

//similar product render
const renderProductsSimilar = async () => {
  const data = await clienteService.productList()

  const itemCategories = document.querySelector('[data-category]');

  data.forEach(elemento => {
    if (elemento.section === `${itemCategories.classList.value}`) {
      sectionSimilarProduct.appendChild(cardBuild(elemento.url, elemento.name, elemento.price, elemento.id))
    }
  })

}

renderProductsSimilar();
