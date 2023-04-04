let produtos = [];
const endpointAPI = 'https://alura-geek-api.onrender.com/produtos'

async function searchProduct() {
  const conexaoAPI = await fetch(endpointAPI)
  const conexaoConvertida = await conexaoAPI.json()

  // interaçao input search
  const searchInput = document.querySelector('.search-input')
  let searchValue = '';

  searchInput.addEventListener('keydown', (event) => {
    let founded = false;

    if (event.code === 'Enter') {
      const valorInput = searchInput.value;

      searchValue = valorInput.toLocaleLowerCase();

      // pesquisa
      const pesquisaDosNomes = conexaoConvertida.forEach((event) => {

        if (searchValue === event.name.toLocaleLowerCase()) {
          founded = true;

          window.location.href = `..//../pages/product.details.html?id=${event.id}`
        }
      });

      if (!founded) {
        window.location.href = `..//../pages/product-not-founded.html`
      }
    }
  });
}

searchProduct()
