const productList = () => {
  return fetch(`http://localhost:3000/produtos/`)
    .then(resposta => {
      return resposta.json()
    })
}

const createProduct = (url, section, name, price, description) => {
  fetch(`http://localhost:3000/produtos/`, {
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

const productDelete = (id) => {
  return fetch(`http://localhost:3000/produtos/${id}`, {
    method: 'DELETE'
  })
}

const productDetails = (id) => {
  return fetch(`http://localhost:3000/produtos/${id}`)
    .then(resposta => {
      return resposta.json()
    })
}

const updateProduct = (url, section, name, price, description, id) => {
  fetch(`http://localhost:3000/produtos/${id}`, {
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


export const clienteService = {
  productList,
  createProduct,
  productDelete,
  productDetails,
  updateProduct
}
