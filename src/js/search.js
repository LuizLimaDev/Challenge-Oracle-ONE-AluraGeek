let produtos = [];
const endpointAPI = 'https://alura-geek-api.onrender.com/produtos'

async function searchProduct() {
  const conexaoAPI = await fetch(endpointAPI)
  const conexaoConvertida = await conexaoAPI.json()

  // interaçao input search
  const searchInput = document.querySelector('.search-input')

  searchInput.addEventListener('keydown', (event) => {

    if (event.code === 'Enter') {
      const searcValue = searchInput.value.toLowerCase();
      console.log(searcValue)

      const filterProduct = conexaoConvertida.filter(search => {
        const searchName = search.name.toLowerCase();
        if (searchName === searcValue) {
          console.log(searchName.indexOf(searchName));
          console.log(search)
        }
        return;
      })
      console.log(filterProduct)

      function renderProducts(filterProduct) {
        const searchOptions = document.querySelector('[data-options]');

        filterProduct.forEach((element) => {

          return searchOptions.innerHTML += `
          <option value="${element.name}" class="option-item">
          </option>`;

        })

      }

      renderProducts(filterProduct);

      // pesquisa
      // const pesquisaDosNomes = conexaoConvertida.forEach((event) => {

      //   if (searchValue === event.name.toLocaleLowerCase()) {
      //     founded = true;

      //     window.location.href = `..//../pages/product.details.html?id=${event.id}`
      //   }
      // });

      // if (!founded) {
      //   window.location.href = `..//../pages/product-not-founded.html`
      // }
    }
  });
}

searchProduct()
