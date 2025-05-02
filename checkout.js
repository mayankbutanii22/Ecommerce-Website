// Function to update the order summary with items in the cart
function updateOrderSummary() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const orderSummary = document.getElementById('orderSummary');
  const totalAmountElement = document.getElementById('totalAmountCheckout');
  let totalAmount = 0;

  // Clear existing summary
  orderSummary.innerHTML = '';

  // Check if the cart is empty
  if (cart.length === 0) {
    orderSummary.innerHTML = '<p>Your cart is empty.</p>';
    totalAmountElement.textContent = '$0.00';
    return;
  }

  // Display cart items in order summary
  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('order-item');
    itemDiv.innerHTML = `
      <p><strong>${item.name}</strong> - $${item.price} x ${item.quantity}</p>
    `;
    orderSummary.appendChild(itemDiv);
    totalAmount += item.price * item.quantity;
  });

  // Update total amount
  totalAmountElement.textContent = totalAmount.toFixed(2);
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const paymentMethod = document.getElementById('paymentMethod').value;

  // Additional payment info based on the selected method
  let paymentDetails = {};
  
  if (paymentMethod === "creditCard") {
    paymentDetails.card = document.getElementById('card').value;
    paymentDetails.expiry = document.getElementById('expiry').value;
    paymentDetails.cvv = document.getElementById('cvv').value;
  } else if (paymentMethod === "paypal") {
    paymentDetails.paypalEmail = document.getElementById('paypalEmail').value;
  } else if (paymentMethod === "bankTransfer") {
    paymentDetails.bankAccount = document.getElementById('bankAccount').value;
  }

  // Validate all fields (this can be extended based on requirements)
  if (!name || !email || !address || (paymentMethod === 'creditCard' && (!paymentDetails.card || !paymentDetails.expiry || !paymentDetails.cvv)) ||
      (paymentMethod === 'paypal' && !paymentDetails.paypalEmail) || 
      (paymentMethod === 'bankTransfer' && !paymentDetails.bankAccount)) {
    alert('Please fill in all the details correctly.');
    return;
  }

  // Create the order object
  const order = {
    name,
    email,
    address,
    paymentMethod,
    paymentDetails,
    totalAmount: parseFloat(document.getElementById('totalAmountCheckout').textContent),
    items: JSON.parse(localStorage.getItem('cart')) || []
  };

  // Log the order (can be sent to the server)
  console.log('Order submitted:', order);

  // Simulate successful order submission
  localStorage.removeItem('cart');
  alert('Your order has been placed successfully!');

  // Redirect to Thank You page or confirmation
  window.location.href = 'thankyou.html'; // Adjust URL for your "Thank You" page
}

// Event listener for the form submission
document.getElementById('checkoutForm').addEventListener('submit', handleFormSubmit);

// Function to show/hide payment fields based on selected payment method
function handlePaymentMethodChange() {
  const paymentMethod = document.getElementById('paymentMethod').value;
  const allPaymentFields = document.querySelectorAll('.payment-fields');

  // Hide all payment fields first
  allPaymentFields.forEach(field => {
    field.style.display = 'none';
  });

  // Show relevant payment fields based on selected payment method
  if (paymentMethod === 'creditCard') {
    document.getElementById('creditCardFields').style.display = 'block';
  } else if (paymentMethod === 'paypal') {
    document.getElementById('paypalFields').style.display = 'block';
  } else if (paymentMethod === 'bankTransfer') {
    document.getElementById('bankTransferFields').style.display = 'block';
  } else if (paymentMethod === 'cashOnDelivery') {
    document.getElementById('cashOnDeliveryFields').style.display = 'block';
  }
}

// Add event listener for payment method change
document.getElementById('paymentMethod').addEventListener('change', handlePaymentMethodChange);

// Call the function to update the order summary when the page loads
updateOrderSummary();
handlePaymentMethodChange(); // Initialize based on default payment method


// Get the elements from the DOM
const submitOrderBtn = document.getElementById('submitOrderBtn');
const checkoutForm = document.getElementById('checkoutForm');
const totalAmountCheckout = document.getElementById('totalAmountCheckout');

// Function to calculate the total order amount from localStorage (cart items)
function calculateTotal() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity; // Calculate total by multiplying price and quantity
  });

  // Display total amount in the checkout page
  totalAmountCheckout.textContent = total.toFixed(2);
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form from reloading the page

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const card = document.getElementById('card').value;
  const expiry = document.getElementById('expiry').value;
  const cvv = document.getElementById('cvv').value;
  const paymentMethod = document.getElementById('paymentMethod').value;

  // Basic form validation (you can add more validation as needed)
  if (!name || !email || !address || !card || !expiry || !cvv || !paymentMethod) {
    alert('Please fill out all the fields.');
    return; // Stop the form submission if validation fails
  }

  // If validation passes, show a success message or perform the payment action
  alert(`Order successfully placed!\n\nTotal Amount: $${totalAmountCheckout.textContent}\n\nPayment Method: ${paymentMethod}`);
  
  // Optionally, clear the cart after successful submission
  localStorage.removeItem('cart');
  // Redirect to a "Thank You" page or any other page after order submission
  window.location.href = 'thank-you.html'; // Example redirection
}

// Add event listener to the submit button
submitOrderBtn.addEventListener('click', handleFormSubmit);

// Call calculateTotal to show the correct total amount on page load
calculateTotal();

