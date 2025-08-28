// 🚀 Part 1: JavaScript Basics (Variables, Data Types, Operators, Conditionals)
function checkAvailability() {
  // Getting input from user
  let guests = document.getElementById("guests").value;
  let result = document.getElementById("availability-result");

  // Conditional check
  if (guests <= 0) {
    result.textContent = "Please enter a valid number of guests.";
  } else if (guests <= 4) {
    result.textContent = "✅ Rooms available for " + guests + " guests!";
  } else {
    result.textContent = "❌ Sorry, no rooms available for " + guests + " guests.";
  }
}

// ❤️ Part 2: Functions (Reusable logic)
function calculateBill(prices) {
  // Function to calculate total price from array
  let total = 0;
  for (let price of prices) {
    total += price;
  }
  return total;
}

function formatMenuItem(name, price) {
  // Function to format menu item string
  return `${name} - $${price}`;
}

// 🔁 Part 3: Loops (Iterating over arrays)
let menuItems = [
  { name: "Grilled Chicken", price: 12 },
  { name: "Caesar Salad", price: 8 },
  { name: "Pasta Alfredo", price: 10 },
  { name: "Cheesecake", price: 6 }
];

let menuList = document.getElementById("menu-list");
// Using for loop to populate menu
for (let i = 0; i < menuItems.length; i++) {
  let item = document.createElement("li");
  item.textContent = formatMenuItem(menuItems[i].name, menuItems[i].price);
  menuList.appendChild(item);
}

// 🌐 Part 4: DOM Interactions
// 1. Toggle menu visibility
document.getElementById("toggle-menu").addEventListener("click", function() {
  if (menuList.style.display === "none") {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
});

// 2. Add Today’s Special dynamically
document.getElementById("add-special").addEventListener("click", function() {
  document.getElementById("special").textContent = "🍲 Today’s Special: Tomato Soup - $5";
});

// 3. Example of updating content on page load
window.onload = function() {
  console.log("Hotel website loaded successfully! ✅");
};
