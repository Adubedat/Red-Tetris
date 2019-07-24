const express = require("express");
const http = require("http");
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

const httpsServer = https.createServer(
  {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
  },
  app
);
// const httpServer = http.createServer(app);

const io = socketIO(httpsServer, { pingInterval: 60000 });

initListeners(io);

// httpServer.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

httpsServer.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
