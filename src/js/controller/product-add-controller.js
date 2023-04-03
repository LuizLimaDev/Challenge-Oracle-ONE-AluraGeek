import { clienteService } from '../service/client-service.js';

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const url = event.target.querySelector('[data-url]').value;
  const section = event.target.querySelector('[data-section]').value;
  const name = event.target.querySelector('[data-name]').value;
  const price = event.target.querySelector('[data-price]').value;
  const description = event.target.querySelector('[data-description]').value;

  clienteService.createProduct(url, section, name, price, description);

  window.location.href = "..//../pages/product-add-success.html";

});

