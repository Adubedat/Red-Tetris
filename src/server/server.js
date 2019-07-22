const express = require("express");
const { initListeners } = require("./listeners/index.js");
const http = require("http");
const socketIO = require("socket.io");
const params = require("../../params");

let port = process.env.PORT;
if (port == null || port == "") {
  port = params.server.port;
}

const app = express();

const server = http.createServer(app);

const io = socketIO(server, { pingInterval: 60000 });

initListeners(io);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
