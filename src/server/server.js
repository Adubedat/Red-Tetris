const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const params = require("../../params");

const { port } = params.server;

const app = express();

const server = http.createServer(app);

const io = socketIO(server);

let roomList = [];

io.on("connection", client => {
  console.log(client);

  client.on("createRoom", room => {
    roomList.push(room);
    console.log("Rooms list changed: ", roomList);
    io.sockets.emit("newRoomList", roomList);
  });

  client.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
