//get
async function productsList(categoria) {
  const api = await fetch(`http://localhost:3000/${categoria}`);
  const json = await api.json();

  return json;
}

export const produtosService = {
  productsList
}