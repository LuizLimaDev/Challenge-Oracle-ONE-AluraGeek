import { clienteService } from '../service/client-service.js';

(async () => {
  const getUrl = new URL(window.location);

  const id = getUrl.searchParams.get('id')

  const inputUrl = document.querySelector('[data-url]');
  const inputSection = document.querySelector('[data-section]');
  const inputName = document.querySelector('[data-name]');
  const inputPrice = document.querySelector('[data-price]');
  const inputDescription = document.querySelector('[data-description]');

  const dados = await clienteService.productDetails(id)
  inputUrl.value = dados.url;
  inputSection.value = dados.section;
  inputName.value = dados.name;
  inputPrice.value = dados.price;
  inputDescription.value = dados.description;

  //edit
  const editForm = document.querySelector('[data-form]');

  editForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    await clienteService.updateProduct(inputUrl.value, inputSection.value, inputName.value, inputPrice.value, inputDescription.value, id)

    // await redirect

    // const buttonEdit = document.querySelector('.addProduct-button');
    // buttonEdit.addEventListener('click', async () => {

    // })
  });


})()
