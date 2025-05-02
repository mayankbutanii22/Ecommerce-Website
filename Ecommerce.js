// Scroll to top button
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  btn.style.display = window.scrollY > 200 ? "block" : "none";
};

document.getElementById("scrollTopBtn").onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Set year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Footer newsletter
function subscribeNewsletter() {
  const emailInput = document.getElementById("footer-newsletter");
  const msg = document.getElementById("subscribeMsg");
  if (emailInput.value.trim() !== "") {
    msg.textContent = "Subscribed successfully!";
    msg.style.color = "green";
    emailInput.value = "";
  } else {
    msg.textContent = "Please enter a valid email.";
    msg.style.color = "red";
  }
}

// Search logic with center alignment
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const productGrid = document.querySelector(".product-grid");
const productCards = document.querySelectorAll(".product-card");

if (searchForm) {
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const query = searchInput.value.toLowerCase().trim();
    let matches = 0;

    productCards.forEach((card) => {
      const productName = card.querySelector("h4").textContent.toLowerCase();
      if (productName.includes(query)) {
        card.style.display = "block";
        matches++;
      } else {
        card.style.display = "none";
      }
    });

    // If any match, center the result grid
    if (matches > 0) {
      productGrid.style.display = "flex";
      productGrid.style.justifyContent = "center";
      productGrid.style.flexWrap = "wrap";
    } else {
      alert("No products found.");
    }
  });
}















