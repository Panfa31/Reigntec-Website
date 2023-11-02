function handleLoginFormSubmit(event) {
  event.preventDefault();

  // Get user input values
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const rememberMe = validateRememberMe();

  // Flag to track form validity
  let isValid = true;

  // Validate email
  if (!validateEmail(email)) {
    // Display error message for invalid email
    isValid = false;
    alert("Invalid email address.");
  }

  // Validate password
  if (!validatePassword(password)) {
    // Display error message for invalid password
    isValid = false;
    alert("Password must be at least 8 characters long.");
  }

  // Validate 'Remember me' checkbox
  if (rememberMe && !validateRememberMe()) {
    // Display error message for invalid 'Remember me' checkbox
    isValid = false;
    alert("Please check the 'Remember me' checkbox.");
  }

  // If the form is valid, submit it; otherwise, do not submit
  if (isValid) {
    event.target.submit();
  }
}
