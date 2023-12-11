const switchElement = document.getElementById("switch-1");

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Save the user's preference in local storage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
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
  } else {
    setDefaultDarkMode();
  }

  switchElement.addEventListener("change", toggleDarkMode);
});
