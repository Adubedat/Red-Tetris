import { updateSpectres } from "../game";
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
  test("updateSpectres create the corresponding action", () => {
    const spectres = [{ board: [0, 0, 0] }];
    const expectedAction = {
      type: UPDATE_SPECTRES,
      spectres
    };
    expect(updateSpectres(spectres)).toEqual(expectedAction);
  });
});
