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
  //   get(id) {
  //     return this._data.find(d => d.id === id);
  //   }
}

const instance = new Lobby();
Object.freeze(instance);

export default instance;
