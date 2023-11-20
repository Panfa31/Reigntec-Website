// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", function () {
  // TradingView widget initialization code goes here
  new TradingView.widget({
    autosize: true,
    symbol: "BINANCE:BTCUSDT",
    interval: "D",
    timezone: "Etc/UTC",
    theme: "light",
    style: "1",
    locale: "en",
    enable_publishing: false,
    allow_symbol_change: true,
    container_id: "tradingview_92fb7",
  });
});
