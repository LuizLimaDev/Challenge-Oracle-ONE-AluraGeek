//get
async function listaProdutos() {
  const api = await fetch(`http://localhost:3000/starWars`);
  const json = await api.json();

  return json
}

export const conectaApi = {
  listaProdutos
}