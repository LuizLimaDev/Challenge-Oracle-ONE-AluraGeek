//template de cada card de produto
export function cardBuild(imageUrl, alt, name, price, id) {
  const product = document.createElement('div');
  product.className = 'product-box';
  product.innerHTML = `<img src="${imageUrl}" alt="${alt}" class="product-box-img">
  <h4 class="product-box-title">${name}</h4>
  <p class="product-box-price">${price}</p>
  <p class="product-id hide">#${id}</p>
  <a href="#" class="product-box-link">Ver produto</a>
  `

  return product;
}