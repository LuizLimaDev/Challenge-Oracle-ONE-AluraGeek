//get
async function productsList(categoria) {
  const api = await fetch(`http://localhost:3000/${categoria}`);
  const json = await api.json();

  return json;
}

const createProduct = (url, section, name, price, description) => {
  fetch(`http://localhost:3000/${section}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: url,
      alt: "imagem do produto",
      name: name,
      price: price,
      section: section,
      description: description,
      deleteImg: "../img/adding-product/delete.svg",
      editImg: "../img/adding-product/edit.svg"
    })
  });
}

const deleteProduct = (section, id) => {
  fetch(`http://localhost:3000/produtos/${id}`, {
    method: 'DELETE',
  });
}

export const produtosService = {
  productsList,
  createProduct,
  deleteProduct
}