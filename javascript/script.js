let cart = [];

function addToCart(productName, price, imageUrl) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: productName, price: price, image: imageUrl });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`🛒 ${productName} added to cart!`);
}
function getCartItems() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function buyNow(productName, price, imageUrl) {
  const order = { name: productName, price: price, image: imageUrl };
  localStorage.setItem("checkoutItem", JSON.stringify(order));
  window.location.href = "checkout.html";
}

function closeModal() {
  document.getElementById("buyNowModal").style.display = "none";
}

function completePayment() {
  alert("✅ Payment successful! Thank you for shopping with TechNova.");
  closeModal();
}

function buyNow(productName, price) {
  const order = { name: productName, price: price };
  localStorage.setItem("checkoutItem", JSON.stringify(order));
  window.location.href = "checkout.html";
}
document.getElementById("checkoutForm").addEventListener("submit", function(e) {
  e.preventDefault();
  localStorage.removeItem("checkoutItem");
  document.getElementById("successAnimation").style.display = "block";
  setTimeout(() => {
    window.location.href = "home.html";
  }, 3000);
}
);
