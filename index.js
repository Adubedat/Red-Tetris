const express = require("express");
const http = require("http");
const path = require("path");
const socketIO = require("socket.io");
const { initListeners } = require("./src/server/listeners/index.js");
const params = require("./params");

let port = process.env.PORT;
if ((port === null || port === "", port === undefined)) {
  port = params.port;
}

const app = express();

/*
 A comment is needed for the piece of code below 
*/

app.use(express.static("public"));
app.use("/build", express.static("build"));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

const server = http.createServer(app);

const io = socketIO(server, { pingInterval: 60000 });

initListeners(io);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
