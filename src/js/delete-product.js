import { produtosService } from "./products-service.js";

export function deleteProduct() {
  const deleteButton = document.querySelector('.product-delete');

  deleteButton.addEventListener('click', (event) => {
    const productTarget = event.target.closest('[data-idHtml]');
    let idHtml = product.dataset.id;
    produtosService.deleteProduct(idHtml)
      .then(() => {
        productTarget.remove()
      })
  });

  deleteButton.style.cursor = 'pointer';
}