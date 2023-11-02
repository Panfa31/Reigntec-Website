function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass === "dark-mode" ? "light-mode" : "dark-mode";

  // Get all elements with class "invert-color" and toggle their class
  var elementsToInvert = document.querySelectorAll(".invert-color");
  elementsToInvert.forEach(function (element) {
    element.classList.toggle("invert");
  });
}
const apiKey =
  "b175a3608b2fb4d1bb0a7172199742c8d462dc9ce066b0725b53facdc9b759c7";
