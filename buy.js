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
})

   // Function to calculate and display the exchange rate
   function calculateExchangeRate() {
    var coin = document.getElementById("coin").value;
    var payWith = document.getElementById("payWith").value;

    // Perform API call or calculation to get the exchange rate
    // Replace the following line with your own logic
    var exchangeRate = getExchangeRate(coin, payWith);

    // Display the exchange rate
    document.getElementById("exchangeRate").innerHTML =
      "1 " +
      coin.toUpperCase() +
      " = " +
      exchangeRate +
      " " +
      payWith.toUpperCase();
  }

  // Function to get the exchange rate
  function getExchangeRate(coin, payWith ,amount) {
    // Replace this with your own logic to fetch the exchange rate from an API or perform a calculation
    // For demonstration purposes, we'll return a random number between 1 and 10
    return Math.floor(Math.random() * 10) + 1;
  }

  // Call the calculateExchangeRate function when the coin or payWith dropdowns are changed
  document
    .getElementById("coin")
    .addEventListener("change", calculateExchangeRate);
  document
    .getElementById("payWith")
    .addEventListener("change", calculateExchangeRate);
    document
    .getElementById("amount")
    .addEventListener("change",calculateExchangeRate)        // Initial calculation on page load
  calculateExchangeRate();