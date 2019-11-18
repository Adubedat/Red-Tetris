import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { leaveRoom, updateRoom, updateGame } from "../room";
import { UPDATE_ROOM, UPDATE_GAME } from "../../../constants/actionTypes";
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

describe("room actions", () => {
  test("leaveRoom clean room and hash", done => {
    const store = mockStore({
      room: {
        name: "Bob",
        hostId: "ID",
        playersCount: 2,
        isStarted: false
      }
    });
    const expectedActions = [{ type: "UPDATE_ROOM", room: {} }];
    window.location.hash = "#test[bob]";
    store.dispatch(leaveRoom());
    setTimeout(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(window.location.hash).toBe("");
      done();
    }, 50);
  });
  test("updateGame create the corresponding action", () => {
    const game = {
      rooms: [
        { name: "Bob", playersCount: 3 },
        { name: "Jean", playersCount: 1 }
      ]
    };
    const expectedAction = {
      type: UPDATE_GAME,
      game
    };
    expect(updateGame(game)).toEqual(expectedAction);
  });
  test("updateRoom create the corresponding action", () => {
    const room = {
      name: "Bob",
      hostId: "ID",
      playersCount: 2,
      isStarted: false
    };
    const expectedAction = {
      type: UPDATE_ROOM,
      room
    };
    expect(updateRoom(room)).toEqual(expectedAction);
  });
});
