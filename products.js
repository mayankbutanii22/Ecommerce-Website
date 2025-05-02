// products.js

// Function to add product to cart
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product already exists in the cart
  let productIndex = cart.findIndex(item => item.name === product.name);

  if (productIndex === -1) {
    // If product is not in the cart, add it
    cart.push(product);
  } else {
    // If the product is already in the cart, increase quantity
    cart[productIndex].quantity++;
  }

  // Save the updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Redirect to cart page
  window.location.href = 'cart.html';
}

// Handling "Add to Cart" button click
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    const productCard = e.target.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = productCard.querySelector('p').textContent.replace('$', '');
    const productImage = productCard.querySelector('img').src;

    // Creating a product object
    const product = {
      name: productName,
      price: parseFloat(productPrice),
      image: productImage,
      quantity: 1
    };

    // Adding product to the cart
    addToCart(product);
  });
});
// Search box ma input javanu dhyan rakhe
document.getElementById('productSearch').addEventListener('input', function() {
  const searchValue = this.value.toLowerCase(); // Search value ne small letters ma lai
  const products = document.querySelectorAll('.product-card'); // Badha product-card select karo

  products.forEach(function(product) {
    const productName = product.getAttribute('data-name').toLowerCase(); // Product nu data-name attribute lavu

    // Check karo search value product ma che ke nahi
    if (productName.includes(searchValue)) {
      product.style.display = 'block'; // Match thay to dekhaadvo
    } else {
      product.style.display = 'none'; // Nathi match thato to hide karvo
    }
  });
});



