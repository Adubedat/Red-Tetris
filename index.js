const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
const socketIO = require("socket.io");
const { initListeners } = require("./src/server/listeners/index.js");
const params = require("./params");

let port = process.env.PORT;
if (port === null || port === "") {
  port = params.server.port;
}

const app = express();

app.use(express.static("public"));
app.use("/build", express.static("build"));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

const server = https.createServer(
  {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert")
  },
  app
);
// console.log(server);

const io = socketIO(server, { pingInterval: 60000 });

initListeners(io);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
