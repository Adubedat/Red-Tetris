import { addChatMessage } from "../chat";
import { ADD_CHAT_MESSAGE } from "../../../constants/actionTypes";
import socket from "../../services/socket-api";

beforeEach(done => {
  // Setup
  if (socket.disconnected) {
    socket.connect();
  }
  socket.on("connect", () => {
    done();
  });
});

afterEach(done => {
  //   Cleanup;
  if (socket.connected) {
    socket.disconnect();
  }
  done();
});

describe("actions ", () => {
  test("updateSpectres create the corresponding action", () => {
    const message = [{ type: "notification", text: "Bob joined Lobby" }];
    const expectedAction = {
      type: ADD_CHAT_MESSAGE,
      message
    };
    expect(addChatMessage(message)).toEqual(expectedAction);
  });
});
