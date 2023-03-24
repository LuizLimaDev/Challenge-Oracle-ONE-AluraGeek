import { produtosService } from './products-service.js'
import { cardBuild } from './card-build.js'
// import { clienteService } from '../../../../Alura/Java Script/Projeto 13 - CRUD/service/cliente-service.js';
// import { deleteProduct } from './delete-product.js';

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
        allProducts.appendChild(cardBuild(elemento.url, elemento.deleteImg, elemento.editImg, elemento.alt, elemento.name, elemento.price, elemento.id, elemento.idHtml))
      })
    })
}

cardBuilder('starWars')
cardBuilder('consoles')
cardBuilder('diversos')




