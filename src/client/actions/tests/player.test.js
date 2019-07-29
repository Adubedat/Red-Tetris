import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { connectPlayer, disconnectPlayer, updatePlayer } from "../player";
import { UPDATE_PLAYER } from "../../../constants/actionTypes";
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
    window.location.hash = "#test[bob]";
    store.dispatch(disconnectPlayer());
    setTimeout(() => {
      store.getActions().forEach(action => expect(action).toMatchSnapshot());
      expect(window.location.hash).toBe("");
      done();
    }, 50);
  });
  test("connectPlayer updates player state with a valid name", done => {
    const store = mockStore({ player: {} });
    const playerName = "Bob";
    store.dispatch(connectPlayer(playerName));
    setTimeout(() => {
      const action = store.getActions()[0];
      delete action.player.id;
      expect(action).toMatchSnapshot();
      done();
    }, 50);
  });
  test("connectPlayer does not update player state with an unvalid name", done => {
    const store = mockStore({ player: {} });
    store.dispatch(connectPlayer("Bobadkjfhaskjdfghajkhsf"));
    setTimeout(() => {
      expect(store.getActions()[0]).toMatchSnapshot();
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
});
