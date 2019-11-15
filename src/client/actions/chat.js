import socket from "../services/socket-api";
import {
  ADD_CHAT_MESSAGE,
  NEW_CHAT_MESSAGE
} from "../../constants/actionTypes";

export const newChatMessage = message => {
  return () => {
    socket.emit(NEW_CHAT_MESSAGE, message);
  };
};

export const addChatMessage = message => ({
  type: ADD_CHAT_MESSAGE,
  message
});
