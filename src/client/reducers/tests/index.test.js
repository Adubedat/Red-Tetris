import reducer from "../index";
import {
  UPDATE_PLAYER,
  UPDATE_SPECTRES,
  UPDATE_GAME,
  UPDATE_ROOM,
  ADD_CHAT_MESSAGE,
  UPDATE_PLAYERS_LIST
} from "../../../constants/actionTypes";

const initialState = {
  player: {},
  spectres: [],
  room: {},
  game: { rooms: [], highscores: [] },
  chatMessages: [],
  players: []
};

describe("Reducer", () => {
  test("should handle UPDATE_PLAYER", () => {
    const player = { name: "Bob", id: "ID", isHost: true, board: [0, 0, 0] };
    const action = { type: UPDATE_PLAYER, player };
    expect(reducer(initialState, action).player).toEqual(player);
  });
  test("should handle UPDATE_ROOM", () => {
    const room = {
      name: "Bob",
      hostId: "ID",
      playersCount: 2,
      isStarted: false
    };
    const action = { type: UPDATE_ROOM, room };
    expect(reducer(initialState, action).room).toEqual(room);
  });
  test("should handle UPDATE_GAME", () => {
    const game = {
      rooms: [
        { name: "Bob", playersCount: 3 },
        { name: "Jean", playersCount: 1 }
      ]
    };
    const action = { type: UPDATE_GAME, game };
    expect(reducer(initialState, action).game).toEqual(game);
  });
  test("should handle ADD_CHAT_MESSAGE", () => {
    const message = { type: "notification", text: "Player joined Lobby" };
    const action = { type: ADD_CHAT_MESSAGE, message };
    expect(reducer(initialState, action).chatMessages[0]).toEqual(message);
  });
  test("should handle UPDATE_SPECTRES", () => {
    const spectres = [{ board: [0, 0, 0] }];
    const action = { type: UPDATE_SPECTRES, spectres };
    expect(reducer(initialState, action).spectres).toEqual(spectres);
  });
  test("should handle UPDATE_PLAYERS_LIST", () => {
    const players = [
      { name: "Bob", id: "ID", isHost: true, board: [0, 0, 0] },
      { name: "Bob2", id: "ID2", isHost: true, board: [0, 0, 0] }
    ];
    const action = { type: UPDATE_PLAYERS_LIST, players };
    expect(reducer(initialState, action).players).toEqual(players);
  });
});
