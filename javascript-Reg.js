// Get the form element
const form = document.querySelector("form");

// Get the name, surname, email and password input fields
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
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

  // Get the name, surname, email and password values
  const name = nameInput.value.trim();
  const surname = surnameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Check if the name, surname, email and password are not empty
  if (name !== "" && surname !== "" && email !== "" && password !== "") {
    // Check if the email is valid
    if (emailRegex.test(email)) {
      // Check if the password is strong
      if (passwordRegex.test(password)) {
        // Store the email and password in localStorage
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        // Redirect to the welcome page
        window.location.href = "Homepage.html";
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
