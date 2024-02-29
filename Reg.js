// Define the countries array
const countries = [
  
  { code: "", name: "Select a Country" },
  { code: "ZAR", name: "South Africa" },
  { code: "USA", name: "United States" },
  { code: "CAN", name: "Canada" },
  { code: "UK", name: "United Kingdom" },
  { code: "AUS", name: "Australia" },

  // Add more countries as needed
];
countries.forEach((country) => {
  console.log(country.name);
});
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
// Get the name, surname, email, password, confirm checkbox and country input fields
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmCheckbox = document.querySelector("#confirm");
const countryDropdown = document.getElementById("country");

// Regular expression to validate email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Regular expression to check if password is strong
const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/\\|]).{8,}$/;

// Populate the country dropdown options
countries.forEach((country) => {
  const option = document.createElement("option");
  option.value = country.code;
  option.text = country.name;
  countryDropdown.appendChild(option);
});

// Add event listener to the form submit event
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Get the name, surname, email, password and country values
  const name = nameInput.value.trim();
  const surname = surnameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const country = countryDropdown.value;

  // Check if the name, surname, email, password, country and confirm checkbox are not empty
  if (
    name !== "" &&
    surname !== "" &&
    email !== "" &&
    password !== "" &&
    country !== "" &&
    confirmCheckbox.checked
  ) {
    // Check if the email is valid
    if (emailRegex.test(email)) {
      // Check if the password is strong
      if (passwordRegex.test(password)) {
        // Store the email, password and country in localStorage
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("country", country);

        // Redirect to the welcome page
        window.location.href = "Trading.html";
      } else {
        // Display an error message with password suggestions
        const suggestions = [
          "Use at least 8 characters",
          "Include uppercase and lowercase letters",
          "Include numbers and symbols",
        ];
        alert(
          `Password must be strong. Suggestions: ${suggestions.join(", ")}`
        );
      }
    } else {
      // Display an error message
      alert("Please enter a valid email address.");
    }
  } else {
    // Display an error message
    alert(
      "Please enter your name, surname, email, password, country and confirm that you have read and agree to the privacy policy."
    );
  }
});

// Add event listener to the login link click event
const loginLink = document.querySelector(".login-gold");
loginLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the link from navigating

  // Redirect to the login page
  window.location.href = "login page.html";
});


function togglePassword() {
  var passwordField = document.getElementById("password");
  var eyeIcon = document.getElementById("eye-icon");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}