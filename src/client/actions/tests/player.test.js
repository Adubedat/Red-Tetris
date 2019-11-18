import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {
  connectPlayer,
  disconnectPlayer,
  updatePlayer,
  updatePlayersList
} from "../player";
import {
  UPDATE_PLAYER,
  UPDATE_PLAYERS_LIST,
  UPDATE_ROOM
} from "../../../constants/actionTypes";
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

describe("player actions", () => {
  test("disconnectPlayer clean room, player and hash", done => {
    const store = mockStore({
      player: { name: "Bob", id: "ID", isHost: true, board: [0, 0, 0] }
    });
    const expectedActions = [
      { type: UPDATE_ROOM, room: {} },
      { type: UPDATE_PLAYER, player: {} }
    ];
    window.location.hash = "#test[bob]";
    store.dispatch(disconnectPlayer());
    setTimeout(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(window.location.hash).toBe("");
      done();
    }, 50);
  });
  test("connectPlayer updates player state", done => {
    const store = mockStore({ player: {} });
    const playerName = "Bob";
    store.dispatch(connectPlayer(playerName));
    setTimeout(() => {
      done();
    }, 50);
  });
  test("updatePlayer create the corresponding action", () => {
    const player = { name: "Bob", id: "ID", isHost: true, board: [0, 0, 0] };
    const expectedAction = {
      type: UPDATE_PLAYER,
      player
    };
    expect(updatePlayer(player)).toEqual(expectedAction);
  });
  test("updatePlayersList create the corresponding action", () => {
    const players = { name: "Bob", id: "ID", isHost: true, board: [0, 0, 0] };
    const expectedAction = {
      type: UPDATE_PLAYERS_LIST,
      players
    };
    expect(updatePlayersList(players)).toEqual(expectedAction);
  });
});
