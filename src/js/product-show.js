import { produtosService } from './products-service.js'
import { cardBuild } from './card-build.js'

//selecionando categorias de produtos
const starWarsList = document.querySelector('.starWars');
const consolesList = document.querySelector('.consoles');
const miscList = document.querySelector('.diversos');


// Criando as sessoes dinamicamente
produtosService.productsList('starWars')
  .then(data => {
    data.forEach(elemento => {
      starWarsList.appendChild(cardBuild(elemento.imageUrl, elemento.alt, elemento.name, elemento.price))
    });
  })

produtosService.productsList('consoles')
  .then(data => {
    data.forEach(elemento => {
      consolesList.appendChild(cardBuild(elemento.imageUrl, elemento.alt, elemento.name, elemento.price))
    });
  })

produtosService.productsList('diversos')
  .then(data => {
    data.forEach(elemento => {
      miscList.appendChild(cardBuild(elemento.imageUrl, elemento.alt, elemento.name, elemento.price))
    });
  })
