const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 5501 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
