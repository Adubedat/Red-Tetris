import reducer from "../index";
import {
  UPDATE_PLAYER,
  UPDATE_ROOM,
  UPDATE_ROOMS,
  UPDATE_SPECTRES
} from "../../../constants/actionTypes";

const initialState = {
  player: {},
  spectres: [],
  room: {},
  rooms: []
};

describe("Reducer", () => {
  test("should handle UPDATE_PLAYER", () => {
    const player = { name: "Bob", id: "ID", isHost: true, board: [0, 0, 0] };
    const expected = initialState;
    const action = { type: UPDATE_PLAYER, player };
    initialState.player = player;
    expect(reducer(initialState, action)).toEqual(expected);
  });
  test("should handle UPDATE_ROOM", () => {
    const room = {
      name: "Bob",
      hostId: "ID",
      playersCount: 2,
      isStarted: false
    };
    const expected = initialState;
    const action = { type: UPDATE_ROOM, room };
    initialState.room = room;
    expect(reducer(initialState, action)).toEqual(expected);
  });
  test("should handle UPDATE_ROOMS", () => {
    const rooms = [
      { name: "Bob", playersCount: 3 },
      { name: "Jean", playersCount: 1 }
    ];
    const expected = initialState;
    const action = { type: UPDATE_ROOMS, rooms };
    initialState.rooms = rooms;
    expect(reducer(initialState, action)).toEqual(expected);
  });
  test("should handle UPDATE_SPECTRES", () => {
    const spectres = [{ board: [0, 0, 0] }];
    const expected = initialState;
    const action = { type: UPDATE_SPECTRES, spectres };
    initialState.spectres = spectres;
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
