import express from "express";
import { initListeners, initClientState } from "./socket/listeners/index.js";
import http from "http";
import socketIO from "socket.io";
import params from "../../params";

const { port } = params.server;

const app = express();

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", socket => {
  initClientState(socket);
  initListeners(socket);
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
