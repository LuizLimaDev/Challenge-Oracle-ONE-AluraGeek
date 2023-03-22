import { produtosService } from './products-service.js'
import { cardBuild } from './card-build.js'

//selecionando categorias de produtos
const allProducts = document.querySelector('.container-allProductsShow');

// Criando as sessoes dinamicamente
function cardBuilder(categoria) {
  let categoryList = ['starWars', 'consoles', 'diversos'];
  let categoryGroup = categoryList.map(valores => produtosService.productsList(valores))
  Promise.all(categoryGroup)

  produtosService.productsList(categoria)
    .then(data => {
      data.forEach(elemento => {
        allProducts.appendChild(cardBuild(elemento.imageUrl, elemento.alt, elemento.name, elemento.price))
      })
    })
}

cardBuilder('starWars')
cardBuilder('consoles')
cardBuilder('diversos')

