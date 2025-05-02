// Function to update cart display
function updateCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.querySelector('.cart-items');
  const checkoutButton = document.getElementById('checkoutBtn');
  const totalAmountElement = document.getElementById('totalAmount');
  
  // Clear existing cart items
  cartContainer.innerHTML = '';

  // Initialize total price
  let totalPrice = 0;

  // Check if the cart is empty
  if (cart.length === 0) {
    const emptyMessage = document.createElement('div');
    emptyMessage.classList.add('empty-cart-message');
    emptyMessage.textContent = "Your Cart is Empty";
    cartContainer.appendChild(emptyMessage);
    checkoutButton.style.display = 'none'; // Hide Checkout button if cart is empty
    totalAmountElement.textContent = '$0.00'; // Set total to 0 if cart is empty
  } else {
    // Display cart items
    cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div class="item-details">
          <h3>${item.name}</h3>
          <p>$${item.price}</p>
          <div class="quantity-controls">
            <button class="decrease-btn">-</button>
            <span>${item.quantity}</span>
            <button class="increase-btn">+</button>
          </div>
        </div>
        <button class="remove-btn">Remove</button>
      `;
      
      // Append cart item to cart
      cartContainer.appendChild(cartItem);
      
      // Calculate total price for the item
      totalPrice += item.price * item.quantity;

      // Handle Increase Quantity
      cartItem.querySelector('.increase-btn').addEventListener('click', () => {
        item.quantity++;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart(); // Update the cart display
      });

      // Handle Decrease Quantity
      cartItem.querySelector('.decrease-btn').addEventListener('click', () => {
        if (item.quantity > 1) {
          item.quantity--;
          localStorage.setItem('cart', JSON.stringify(cart));
          updateCart(); // Update the cart display
        }
      });

      // Handle Remove Item
      cartItem.querySelector('.remove-btn').addEventListener('click', () => {
        cart.splice(index, 1); // Remove the item from the cart
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart(); // Update the cart display
      });
    });

    // Update total amount displayed in the cart
    totalAmountElement.textContent = `$${totalPrice.toFixed(2)}`;

    checkoutButton.style.display = 'inline-block'; // Show Checkout button if cart has items
  }
    // Redirect to checkout page when the Proceed to Checkout button is clicked
    checkoutButton.addEventListener('click', function() {
      if (cart.length > 0) {
        window.location.href = 'checkout.html';  // Redirect to checkout page
      }
    });
}

// Call the function to update the cart display
updateCart();




