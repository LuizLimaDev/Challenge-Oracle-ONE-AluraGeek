import { clienteService } from '../service/client-service.js';

export function deleteProduct() {
  const productBox = document.querySelector('.container-allProductsShow');

  productBox.addEventListener('click', async (event) => {

    if (event.target.className === 'product-delete') {
      const product = event.target.closest('[data-id]');
      const id = product.dataset.id;

      await clienteService.productDelete(id)
      product.remove()

    }

  })
}