"use strict";

var switchElement = document.getElementById("switch-1");
var moonIcon = document.querySelector(".moon"); // Function to toggle dark mode

function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode"); // Save the user's preference in local storage

  var isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode); // Change the icon based on dark mode state

  if (isDarkMode) {
    moonIcon.src = "Assets/sun.png";
  } else {
    moonIcon.src = "Assets/moon.png";
  }
} // Function to set dark mode as the default theme


function setDefaultDarkMode() {
  var body = document.body;
  var switchElement = document.getElementById("switch-1"); // Add dark mode class to body

  body.classList.add("dark-mode"); // Set switch element to checked

  switchElement.checked = true; // Save the user's preference in local storage

  localStorage.setItem("darkMode", true); // Change the icon to sun

  moonIcon.src = "Assets/sun.png";
}

document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;
  var switchElement = document.getElementById("switch-1");
  var prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches; // Set dark mode as the default theme

  if (prefersDarkMode) {
    body.classList.add("dark-mode");
    switchElement.checked = true;
    moonIcon.src = "Assets/sun.png";
  } else {
    setDefaultDarkMode();
  }

  switchElement.addEventListener("change", toggleDarkMode); // Toggle the icon when clicked

  moonIcon.addEventListener("click", function () {
    toggleDarkMode();
  }); // Intersection Observer functionality

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      console.log(entry);

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  var scrollElements = document.querySelectorAll(".hidden");
  scrollElements.forEach(function (el) {
    return observer.observe(el);
  });
});