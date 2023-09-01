function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

//Registetion
document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password-error");
  const registerButton = document.getElementById("register-button");
  const nameInput = document.getElementById("name");
  const surnameInput = document.getElementById("surname");
  const emailInput = document.getElementById("email");

  function validateForm() {
    const isNameValid = nameInput.value.trim() !== "";
    const isSurnameValid = surnameInput.value.trim() !== "";
    const isEmailValid = emailInput.value.trim() !== "";
    const isPasswordValid =
      passwordInput.value.trim() !== "" &&
      /[A-Z]/.test(passwordInput.value) &&
      /[a-z]/.test(passwordInput.value) &&
      /\d/.test(passwordInput.value) &&
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(passwordInput.value) &&
      passwordInput.value.length >= 8;

    if (isNameValid && isSurnameValid && isEmailValid && isPasswordValid) {
      passwordError.textContent = "";
      registerButton.disabled = false;
    } else {
      passwordError.textContent = "Please fill in all fields correctly.";
      registerButton.disabled = true;
    }
  }

  passwordInput.addEventListener("input", validateForm);
  nameInput.addEventListener("input", validateForm);
  surnameInput.addEventListener("input", validateForm);
  emailInput.addEventListener("input", validateForm);
});

// Dark mode
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode", darkModeToggle.checked);
});
