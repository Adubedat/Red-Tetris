import express from "express";
import { initListeners } from "./listeners/index.js";
import http from "http";
import socketIO from "socket.io";
import params from "../../params";

const { port } = params.server;

const app = express();

const server = http.createServer(app);

const io = socketIO(server, { pingInterval: 60000 });

initListeners(io);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
