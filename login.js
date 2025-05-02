document.addEventListener("DOMContentLoaded", () => {
  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  const switchToSignup = document.getElementById("switchToSignup");
  const switchToLogin = document.getElementById("switchToLogin");
  const formHeading = document.getElementById("formHeading");


  loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
    formHeading.textContent = "Login Form";
  });
  
  signupTab.addEventListener("click", () => {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
    formHeading.textContent = "Signup Form";
  });
  
  switchToSignup.addEventListener("click", (e) => {
    e.preventDefault();
    signupTab.click();
  });

  switchToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    loginTab.click();
  });

  // Optional: Form submission
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Logged in successfully!");
  });

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Signup complete!");
  });
});

// Forgot Password Link functionality (example, you can implement more complex functionality as needed)
forgotPasswordLink.addEventListener('click', (e) => {
  e.preventDefault();
  alert("Password recovery instructions have been sent to your email.");
});

// Handle Login form submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;
  
  // Simple validation (you can add more complex validation as per your requirement)
  if (email && password) {
    // Here you can check credentials with your database or API
    alert('Login successful!');
    // Redirect to the homepage or dashboard (example)
    window.location.href = 'home.html';
  } else {
    alert('Please fill in both email and password fields.');
  }
});

// Handle Signup form submission
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const fullName = signupForm.querySelector('input[type="text"]').value;
  const email = signupForm.querySelector('input[type="email"]').value;
  const password = signupForm.querySelector('input[type="password"]').value;
  
  // Simple validation (you can add more complex validation as per your requirement)
  if (fullName && email && password) {
    // Here you can save the user to your database or API
    alert('Signup successful!');
    // Redirect to the login page or homepage (example)
    window.location.href = 'login.html';
  } else {
    alert('Please fill in all the fields.');
  }
});