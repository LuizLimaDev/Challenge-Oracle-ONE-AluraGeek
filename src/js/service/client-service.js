const url = "https://alura-geek-api.onrender.com/produtos"

const createProduct = (url, section, name, price, description) => {
  fetch(url, {
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
  })
}

async function productList() {
  const resposta = await fetch(url)
  const data = await resposta.json();

  return data

}

const productDetails = (id) => {
  return fetch(`${url}/${id}`)
    .then(resposta => {
      return resposta.json()
    })
}

const updateProduct = (url, section, name, price, description, id) => {
  fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: url,
      section: section,
      name: name,
      price: price,
      description: description,
      deleteImg: "../img/adding-product/delete.svg",
      editImg: "../img/adding-product/edit.svg"
    })
  })
    .then(resposta => {
      return resposta.json()
    })
}

const productDelete = (id) => {
  return fetch(`${url}/${id}`, {
    method: 'DELETE'
  })
}

export const clienteService = {
  productList,
  createProduct,
  productDelete,
  productDetails,
  updateProduct
}
