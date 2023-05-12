const url = "https://json-server-favoriteflix-np0z3b1i5-devluizlima.vercel.app/produtos"

const createProduct = (url, section, name, price, description) => {
  return fetch(`https://json-server-favoriteflix-np0z3b1i5-devluizlima.vercel.app/produtos`, {
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
async function productDetails(id) {
  const resposta = await fetch(`${url}/${id}`)
  const data = await resposta.json();

  return data

}

const updateProduct = (url, section, name, price, description, id) => {
  return fetch(`https://json-server-favoriteflix-np0z3b1i5-devluizlima.vercel.app/produtos/${id}`, {
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
      window.location.href = "..//../pages/products.html"

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
