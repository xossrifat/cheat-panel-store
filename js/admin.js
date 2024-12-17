document.getElementById('product-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const productName = document.getElementById('product-name').value;
  const productPrice = document.getElementById('product-price').value;

  const productList = document.getElementById('product-list');
  const li = document.createElement('li');
  li.textContent = `${productName} - $${productPrice}`;
  productList.appendChild(li);

  document.getElementById('product-name').value = '';
  document.getElementById('product-price').value = '';
});
