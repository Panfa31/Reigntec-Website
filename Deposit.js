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

function selectCurrency(currency) {
  if (currency === 'Fiat') {
      document.getElementById('dep-fiat').style.display = 'block';
      document.getElementById('dep-crypto').style.display = 'none';
  } else if (currency === 'Crypto') {
      document.getElementById('dep-fiat').style.display = 'none';
      document.getElementById('dep-crypto').style.display = 'block';
  }
}

// Add ids for each class if missing
document.querySelector('.dep-fiat').id = 'dep-fiat';
document.querySelector('.dep-crypto').id = 'dep-crypto';
document.getElementById('search').addEventListener('keyup', function() {
  var input = this.value.toLowerCase();
  var buttons = document.querySelectorAll('.dep-fiat button, .dep-crypto button');
  
  buttons.forEach(function(button) {
      var buttonText = button.textContent.toLowerCase();
      
      if (buttonText.includes(input)) {
          button.style.display = 'block';
      } else {
          button.style.display = 'none';
      }
  });
});

