import { checkHash, updateSpectres } from "../actions";
import { UPDATE_SPECTRES } from "../../../constants/actionTypes";
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
  test("updateSpectres create the corresponding action", () => {
    const spectres = [{ board: [0, 0, 0] }];
    const expectedAction = {
      type: UPDATE_SPECTRES,
      spectres
    };
    expect(updateSpectres(spectres)).toEqual(expectedAction);
  });
  // expect(store.getActions()).toEqual(expectedActions);
});
