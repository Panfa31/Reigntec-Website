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
  localStorage.setItem("darkMode",true);

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
// Get the form element
const form = document.querySelector("form");

// Get the email and password input fields
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

// Regular expression to validate email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Regular expression to check if password is strong
const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/\\|]).{8,}$/;

// Add event listener to the form submit event
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Get the email and password values
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Check if the email and password are not empty
  if (email !== "" && password !== "") {
    // Check if the email is valid
    if (emailRegex.test(email)) {
      // Check if the password is strong
      if (passwordRegex.test(password)) {
        // Store the email and password in localStorage
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        // Redirect to the wallet page
        window.location.href = "wallet.html";
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
    alert("Please enter your name, surname, email and password.");
  }
});

// Add event listener to the login link click event
const loginLink = document.querySelector(".login-gold");
loginLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the link from navigating

  // Redirect to the login page
  window.location.href = "login page.html";
});

// Get the remember me checkbox
const rememberMeCheckbox = document.querySelector("#remember-me");

// Get the login button
const loginButton = document.querySelector(".Login-btn");

// Get the register link
const registerLink = document.querySelector(".register-link");

// Get the forgot password link
const forgotPasswordLink = document.querySelector(".forgot-password-link");

// Add event listener to the register link click event
registerLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the link from navigating

  // Redirect to the registration page
  window.location.href = "Register Page.html";
});

// Add event listener to the forgot password link click event
forgotPasswordLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the link from navigating

  // Get the email value
  const email = emailInput.value.trim();

  // Check if the email is not empty
  if (email !== "") {
    // Send a password reset email to the user's email address
    // Implement a secure password reset process here
    alert("A password reset link has been sent to your email address.");
  } else {
    // Display an error message
    alert("Please enter your email.");
  }
});

// Check if the email and password are stored in localStorage
const storedEmail = localStorage.getItem("email");
const storedPassword = localStorage.getItem("password");

if (storedEmail && storedPassword) {
  // Set the email and password values
  emailInput.value = storedEmail;
  passwordInput.value = storedPassword;

  // Check the remember me checkbox
  rememberMeCheckbox.checked = true;
}
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
