const switchElement = document.getElementById("switch-1");
switchElement.addEventListener("change", function () {
  const isDarkMode = switchElement.checked;
  localStorage.setItem("darkMode", isDarkMode);
});
// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Save the user's preference in local storage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const switchElement = document.getElementById("switch-1");
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // Check if the user prefers dark mode and set it accordingly
  if (!prefersDarkMode) {
    body.classList.add("dark-mode");
    switchElement.checked = true;
  }

  switchElement.addEventListener("change", toggleDarkMode);

  // Check local storage for theme preference
  const isDarkMode = localStorage.getItem("darkMode");
  if (isDarkMode === "true") {
    body.classList.add("dark-mode");
    switchElement.checked = true;
  }
});
