// Function to open Edit Profile Modal
function openEditProfileModal() {
  const modal = document.getElementById('editProfileModal');
  modal.style.display = 'block';
}

// Function to close Edit Profile Modal
function closeEditProfileModal() {
  const modal = document.getElementById('editProfileModal');
  modal.style.display = 'none';
}

// Function to handle logout (clear session data and redirect)
function logout() {
  // Remove session data (example)
  localStorage.removeItem('userLoggedIn');
  window.location.href = 'login.html'; // Redirect to login page
}

// Scroll to Top Functionality
window.onscroll = function() {
  let scrollTopBtn = document.getElementById('scrollTopBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
};

document.getElementById('scrollTopBtn').addEventListener('click', function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Set the year dynamically in the footer
document.getElementById('year').innerText = new Date().getFullYear();

// Subscribe to the newsletter
function subscribeNewsletter() {
  const email = document.getElementById('footer-newsletter').value;
  if (email) {
    document.getElementById('subscribeMsg').innerText = `Thank you for subscribing, ${email}!`;
  } else {
    document.getElementById('subscribeMsg').innerText = 'Please enter a valid email address.';
  }
}

// Event listeners for buttons
document.getElementById('editProfileBtn').addEventListener('click', openEditProfileModal);
document.getElementById('logoutBtn').addEventListener('click', logout);

// Close the modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('editProfileModal');
  if (event.target === modal) {
    closeEditProfileModal();
  }
};


// Open Edit Profile Modal
function openEditProfileModal() {
  document.getElementById("editProfileModal").style.display = "block";
}

// Close Edit Profile Modal
function closeEditProfileModal() {
  document.getElementById("editProfileModal").style.display = "none";
}

// Save Profile Changes (Optional: Customize the save functionality)
document.getElementById("editProfileForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission to refresh the page

  const name = document.getElementById("editName").value;
  const email = document.getElementById("editEmail").value;
  const phone = document.getElementById("editPhone").value;

  // Handle saving the data (this part is just an example)
  alert(`Profile saved! Name: ${name}, Email: ${email}, Phone: ${phone}`);

  // Close the modal after saving
  closeEditProfileModal();
});

// Add event listener to open modal (could be tied to a button or a specific action)
document.getElementById("openProfileModalBtn").addEventListener("click", openEditProfileModal);

