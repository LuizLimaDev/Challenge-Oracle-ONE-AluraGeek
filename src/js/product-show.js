import { produtosService } from './products-service.js'
import { cardBuild } from './card-build.js'

//selecionando categorias de produtos
const starWarsList = document.querySelector('.starWars');
const consolesList = document.querySelector('.consoles');
const miscList = document.querySelector('.diversos');
const allProducts = document.querySelector('.container-allProductsShow');

// Criando as sessoes dinamicamente
function cardBuilder(list, categoria) {
  let categoryList = ['starWars', 'consoles', 'diversos'];
  let categoryGroup = categoryList.map(valores => produtosService.productsList(valores))
  Promise.all(categoryGroup)

  produtosService.productsList(categoria)
    .then(data => {
      data.forEach(elemento => {
        list.appendChild(cardBuild(elemento.imageUrl, elemento.alt, elemento.name, elemento.price, elemento.id, elemento.section))
      })
    })
}

cardBuilder(starWarsList, 'starWars')
cardBuilder(consolesList, 'consoles')
cardBuilder(miscList, 'diversos')

