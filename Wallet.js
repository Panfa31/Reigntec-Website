// Get the element where the data will be displayed
const currencyCodeElement = document.getElementById("currency-code");
const balanceElement = document.getElementById("balance");

// URL of the API endpoint
const apiUrl =
  "https://api.valr.com/v1/account/balances?excludeZeroBalances=true";

// Fetch data from the API
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Update the content of the elements with the fetched data
    currencyCodeElement.textContent = data.currencyCode;
    balanceElement.textContent = `Balance: ${data.balance}`;
  })
  .catch((error) => {
    // Handle errors if the API request fails
    console.error("Error fetching data:", error);
    balanceElement.textContent = "Failed to load balance";
  });
