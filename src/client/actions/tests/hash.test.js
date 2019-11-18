import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { checkHash, handleHash } from "../hash";
import socket from "../../services/socket-api";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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
  test("checkHash return undefined with no hash", () => {
    const result = checkHash();
    expect(result).toBe(undefined);
  });
  test("checkHash return undefine with an unvalid hash", () => {
    window.location.hash = "#asdf[ads@]";
    const result = checkHash();
    expect(result).toBe(undefined);
  });
  test("checkHash return playerName and roomName with a valid hash", () => {
    window.location.hash = "#Room[Name]";
    const result = checkHash();
    expect(result.roomName).toBe("Room");
    expect(result.playerName).toBe("Name");
  });
  test("handleHash does not crash", done => {
    const store = mockStore();
    window.location.hash = "#Room[Name]";
    handleHash(store.dispatch);
    setTimeout(() => {
      done();
    }, 50);
  });
});
