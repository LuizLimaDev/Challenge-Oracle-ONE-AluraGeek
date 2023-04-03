import { clienteService } from "../service/client-service.js";
import { deleteProduct } from "./product-delete-controller.js";

// template de exibicao dos produtos
function cardBuild(id, url, deleteImg, editImg, name, price) {
  const newProduct = document.createElement('div');
  newProduct.className = 'product-box';
  newProduct.innerHTML = `<img src="${url}" alt="imagem do produto" class="product-box-img">
  <img src="${deleteImg}" alt="deletar produto" class="product-delete">
  <a href='..//../pages/product-edit.html?id=${id}'><img src="${editImg}" alt="editar produto" class="product-edit"></a>
  <h4 class="product-box-title">${name}</h4>
  <p class="product-box-price">R$ ${price}</p>
  <p class="product-id hide">#${id}</p>
  `

  newProduct.dataset.id = id;

  return newProduct;
}

// output dos produtos

const productSection = document.querySelector('.container-allProductsShow')

clienteService.productList()
  .then(data => {
    data.forEach(elemento => {
      productSection.appendChild(cardBuild(elemento.id, elemento.url, elemento.deleteImg, elemento.editImg, elemento.name, elemento.price))
    })
  })

// funcao deletear
deleteProduct()
