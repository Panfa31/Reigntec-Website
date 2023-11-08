// Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Get the HTML element where we will display the market data
  const marketDataContainer = document.getElementById("market-data");

  // Replace the currency pair with the specific one you are interested in, like BTC-USD, ETH-USD, etc.
  const currencyPair = "BTCZAR";

  // Construct the API endpoint URL with the specific currency pair
  const apiUrl = `https://api.valr.com/v1/public/${currencyPair}/orderbook`;

  // Replace 'YOUR_API_KEY' with your actual Valr API key.
  const apiKey =
    "51d05a5b668475109e9c2cd8c28c8f991fdf6a2e7cdc9b6506495d366912c429";

  // Fetch the market data from the API using the constructed URL and API key
  fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Process the market data and format it as needed.
      const bids = data.bids
        .slice(0, 40)
        .map((bid) => {
          return {
            price: bid[0],
            quantity: bid[1],
          };
        })
        .reverse();

      const asks = data.asks.slice(0, 40).map((ask) => {
        return {
          price: ask[0],
          quantity: ask[1],
        };
      });

      // Update the HTML content with the market data.
      marketDataContainer.innerHTML = `
      <h2>Top 40 Bids</h2>
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          ${bids
            .map(
              (bid) => `
              <tr>
                <td>${bid.price}</td>
                <td>${bid.quantity}</td>
              </tr>
            `
            )
            .join("")}
        </tbody>
      </table>
      <h2>Top 40 Asks</h2>
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          ${asks
            .map(
              (ask) => `
              <tr>
                <td>${ask.price}</td>
                <td>${ask.quantity}</td>
              </tr>
            `
            )
            .join("")}
        </tbody>
      </table>
    `;
    })
    .catch((error) => {
      // Log any errors to the console and display an error message to the user
      console.error("Error fetching market data:", error);
      marketDataContainer.textContent = "Error fetching market data";
    });
});
