document.addEventListener('DOMContentLoaded', () => {
  const cart = [];

  // Add product to cart (simplified version)
  const addToCart = (productName) => {
    cart.push(productName);
    alert(`${productName} added to cart!`);
  };

  document.querySelectorAll('.product button').forEach((button) => {
    button.addEventListener('click', (e) => {
      const productName = e.target.parentElement.querySelector('h3').textContent;
      addToCart(productName);
    });
  });
});
