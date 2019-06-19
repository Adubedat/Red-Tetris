class Lobby {
  constructor() {
    this._rooms = [];
    this._players = [];
  }

  get rooms() {
    return this._rooms;
  }

  addRoom(roomName) {
    this._rooms.push(roomName);
  }

  addPlayer(playerName) {
    this._players.push(playerName);
  }

  findRoom(roomName) {
    return false;
  }
}

const instance = new Lobby();
Object.freeze(instance);

export default instance;
