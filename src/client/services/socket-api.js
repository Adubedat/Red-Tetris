import openSocket from "socket.io-client";
import params from "../../../params";

const apiUrl = params.API_URL;
var socket = openSocket(apiUrl);

export default socket;
