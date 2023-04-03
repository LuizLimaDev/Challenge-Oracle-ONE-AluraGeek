const productList = () => {
  return fetch(`https://alura-geek-api.onrender.com/produtos`)
    .then(resposta => {
      return resposta.json()
    })
}

const createProduct = (url, section, name, price, description) => {
  fetch(`https://alura-geek-api.onrender.com/produtos`, {
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
  return fetch(`https://alura-geek-api.onrender.com/produtos/${id}`, {
    method: 'DELETE'
  })
}

const productDetails = (id) => {
  return fetch(`https://alura-geek-api.onrender.com/produtos/${id}`)
    .then(resposta => {
      return resposta.json()
    })
}

const updateProduct = (url, section, name, price, description, id) => {
  fetch(`https://alura-geek-api.onrender.com/produtos/${id}`, {
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
