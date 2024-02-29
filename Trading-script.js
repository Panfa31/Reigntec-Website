const switchElement = document.getElementById("switch-1");
const moonIcon = document.querySelector(".moon");

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Save the user's preference in local storage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);

  // Change the icon based on dark mode state
  if (isDarkMode) {
    moonIcon.src = "Assets/sun.png";
  } else {
    moonIcon.src = "Assets/moon.png";
  }
}

// Function to set dark mode as the default theme
function setDefaultDarkMode() {
  const body = document.body;
  const switchElement = document.getElementById("switch-1");

  // Add dark mode class to body
  body.classList.add("dark-mode");

  // Set switch element to checked
  switchElement.checked = true;

  // Save the user's preference in local storage
  localStorage.setItem("darkMode", true);

  // Change the icon to sun
  moonIcon.src = "Assets/sun.png";
}

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const switchElement = document.getElementById("switch-1");
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // Set dark mode as the default theme
  if (prefersDarkMode) {
    body.classList.add("dark-mode");
    switchElement.checked = true;
    moonIcon.src = "Assets/sun.png";
  } else {
    setDefaultDarkMode();
  }

  switchElement.addEventListener("change", toggleDarkMode);

  // Toggle the icon when clicked
  moonIcon.addEventListener("click", function () {
    toggleDarkMode();
  });

  // Intersection Observer functionality
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const scrollElements = document.querySelectorAll(".hidden");
  scrollElements.forEach((el) => observer.observe(el));
});

let coins = ["btcusdt", "ethusdt", "adausdt", "bnbusdt"];
let ws = new WebSocket(
  `wss://stream.binance.com:9443/ws/${coins.join("@trade/")}@trade`
);
let StockPriceElements = document.querySelectorAll(".coin-price");
let PercentageElements = document.querySelectorAll(".coin-percentage");
let lastprices = [null, null, null, null];
let hourPrices = [null, null, null, null];
ws.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let coin = stockObject.s.toLowerCase();
  let index = coins.indexOf(coin);
  if (index !== -1) {
    let price = parseFloat(stockObject.p).toFixed(2);
    let lastPrice = lastprices[index];
    let hourPrice = hourPrices[index];
    let percentage = 0;
    if (lastPrice) {
      percentage = ((price - lastPrice) / lastPrice) * 100;
    }
    if (hourPrice) {
      percentage = ((price - hourPrice) / hourPrice) * 100;
    }
    StockPriceElements[index].innerText = ` Last Price: $${price}`;
    PercentageElements[index].innerText = `Percentage: ${percentage.toFixed(
      2
    )}%`;
    PercentageElements[index].style.color = percentage >= 0 ? "green" : "red";
    lastprices[index] = price;
    if (hourPrices[index] === null) {
      hourPrices[index] = price;
    }
  }
};
