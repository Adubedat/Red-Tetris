import Game from "../class";
import Player from "../../player/class";
import Room from "../../room/class";

describe("Game class tests", () => {
  test("AddRoom, removeRoom methods + room getter tests", () => {
    const room = new Room("Room1", "hostID");
    Game.addRoom(room);
    expect(Game.rooms.length).toBe(1);
    expect(Game.rooms[0]).toBe(room);
    Game.removeRoom(room.name);
    expect(Game.rooms.length).toBe(0);
  });
  test("AddPlayer, removePlayer methods + player getter tests", () => {
    const player = new Player("Player1", "ID1");
    Game.addPlayer(player);
    expect(Game.players.length).toBe(1);
    expect(Game.players[0]).toBe(player);
    Game.removePlayer(player.id);
    expect(Game.players.length).toBe(0);
  });
  test("findRoom method test", () => {
    const room1 = new Room("Room1", "hostID1");
    const room2 = new Room("Room2", "hostID2");
    const room3 = new Room("Room3", "hostID3");
    Game.addRoom(room1);
    Game.addRoom(room2);
    Game.addRoom(room3);
    const result = Game.findRoom(room2.name);
    expect(result).toBe(room2);
  });
  test("findPlayer method test", () => {
    const player1 = new Player("player1", "ID1");
    const player2 = new Player("player2", "ID2");
    const player3 = new Player("player3", "ID3");
    Game.addPlayer(player1);
    Game.addPlayer(player2);
    Game.addPlayer(player3);
    const result = Game.findPlayer(player2.id);
    expect(result).toBe(player2);
  });
  test("createRoomsArray method", () => {
    const result = Game.createPublicRoomsArray();
    expect(result).toMatchSnapshot();
  });
});
