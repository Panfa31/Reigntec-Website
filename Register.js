const countries = [
  { code: "USA", name: "United States" },
  { code: "CAN", name: "Canada" },
  { code: "UK", name: "United Kingdom" },
  { code: "AUS", name: "Australia" },
  // Add more countries as needed
];

// Select the country dropdown
const countryDropdown = document.getElementById("country");

// Populate the country dropdown options
countries.forEach((country) => {
  const option = document.createElement("option");
  option.value = country.code;
  option.text = country.name;
  countryDropdown.appendChild(option);
});
