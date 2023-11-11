const express = require("express");
const axios = require("axios");

const app = express();

app.get("/chart-data", async (req, res) => {
  try {
    const response = await axios.get("https://api.binance.com/api/v3/klines", {
      params: {
        symbol: "BTCUSDT",
        interval: "1d",
        limit: 365,
      },
    });

    const chartData = response.data.map((candle) => ({
      date: new Date(candle[0]).toISOString(),
      open: parseFloat(candle[1]),
      high: parseFloat(candle[2]),
      low: parseFloat(candle[3]),
      close: parseFloat(candle[4]),
      volume: parseFloat(candle[5]),
    }));

    res.json(chartData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
