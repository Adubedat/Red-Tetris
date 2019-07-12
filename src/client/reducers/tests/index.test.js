import reducer from "../index";
import { updateSpectres } from "../../actions/actions";
import { updatePlayer } from "../../actions/player";
import { updateRooms, updateRoom } from "../../actions/room";

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
    initialState.player = player;
    expect(reducer(initialState, updatePlayer(player))).toEqual(expected);
  });
  test("should handle UPDATE_ROOM", () => {
    const room = {
      name: "Bob",
      hostId: "ID",
      playersCount: 2,
      isStarted: false
    };
    const expected = initialState;
    initialState.room = room;
    expect(reducer(initialState, updateRoom(room))).toEqual(expected);
  });
  test("should handle UPDATE_ROOMS", () => {
    const rooms = [
      { name: "Bob", playersCount: 3 },
      { name: "Jean", playersCount: 1 }
    ];
    const expected = initialState;
    initialState.rooms = rooms;
    expect(reducer(initialState, updateRooms(rooms))).toEqual(expected);
  });
  test("should handle UPDATE_SPECTRES", () => {
    const spectres = [{ board: [0, 0, 0] }];
    const expected = initialState;
    initialState.spectres = spectres;
    expect(reducer(initialState, updateSpectres(spectres))).toEqual(expected);
  });
});
