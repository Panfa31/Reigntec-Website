let coins = ["btcusdt", "ethusdt", "adausdt", "bnbusdt"].slice(0, 4); // modify to only include top four coins
let ws = new WebSocket(
  `wss://stream.binance.com:9443/ws/${coins.join("@trade/")}@trade`
);
let StockPriceElements = document.querySelectorAll(".coin-price");
let PercentageElements = document.querySelectorAll(".coin-percentage");
let lastprices = [null, null, null, null];
let hourPrices = [null, null, null, null];
ws.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let coin = stockObject.s.toLowerCase();
  let index = coins.indexOf(coin);
  if (index !== -1) {
    let price = parseFloat(stockObject.p).toFixed(2);
    let lastPrice = lastprices[index];
    let hourPrice = hourPrices[index];
    let percentage = 0;
    if (lastPrice) {
      percentage = ((price - lastPrice) / lastPrice) * 100;
    }
    if (hourPrice) {
      percentage = ((price - hourPrice) / hourPrice) * 100;
    }
    StockPriceElements[index].innerText = `Last Price: $${price}`;
    PercentageElements[index].innerText = `Percentage: ${percentage.toFixed(
      2
    )}%`;
    PercentageElements[index].style.color = percentage >= 0 ? "green" : "red";
    lastprices[index] = price;
    if (hourPrices[index] === null) {
      hourPrices[index] = price;
    }
  }
};
