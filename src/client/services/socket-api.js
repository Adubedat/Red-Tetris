import openSocket from "socket.io-client";
import params from "../../../params";

const { url } = params.server;

var socket = openSocket(url);

export default socket;
