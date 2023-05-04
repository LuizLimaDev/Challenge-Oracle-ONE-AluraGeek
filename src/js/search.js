let produtos = [];
const endpointAPI = 'https://alura-geek-api.onrender.com/produtos'

const searchInput = document.querySelector('.search-input');


async function searchProduct() {
  const conexaoAPI = await fetch(endpointAPI)
  const conexaoConvertida = await conexaoAPI.json()

  //search

  searchInput.addEventListener('keypress', (event) => {
    if (event.code === 'Enter') {
      const result = conexaoConvertida.filter((product) => {
        return product.name.toLowerCase().includes(searchInput.value.toLowerCase());
      });

      renderSearchedProduct(result);
      searchInput.value = '';
    }
  })
}

function renderSearchedProduct(result) {
  const titleText = document.querySelector('.searched-title');
  const resultContainer = document.querySelector('.searched-result');

  if (result.length <= 0) {
    titleText.textContent = 'Produto não encontrado! 🥲'
  }

  titleText.textContent = 'Produtos encontrados!'

  resultContainer.innerHTML = '';

  result.forEach((product) => {
    console.log(product.name, product.url, product.price)
    resultContainer.innerHTML += `
    <a href="..//../pages/product.details.html?id=${product.id}" class="product-searched-link">
    <div class="product-searched-card">
      <img src="${product.url}" alt="imagem do produto" class="product-searched-img">
      <h3 class="product-searched-title">${product.name}</h3>
      <p>${product.price}</p>
    </div>
    `
  });
}

searchProduct()

