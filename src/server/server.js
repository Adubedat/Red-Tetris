const express = require("express");
const http = require("http");
const path = require("path");
const socketIO = require("socket.io");
const { initListeners } = require("./listeners/index.js");
const params = require("../../params");

let port = process.env.PORT;
if (port == null || port == "") {
  port = params.server.port;
}

const app = express();

app.use(express.static(path.join(__dirname + "../../../public")));

const server = http.createServer(app);

const io = socketIO(server, { pingInterval: 60000 });

initListeners(io);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
