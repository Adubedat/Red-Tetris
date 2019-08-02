class Game {
  constructor() {
    this._rooms = [];
    this._players = [];
  }

  get rooms() {
    return this._rooms;
  }

  get players() {
    return this._players;
  }

  addRoom(room) {
    this._rooms.push(room);
  }

  removeRoom(roomName) {
    this._rooms = this._rooms.filter(room => room.name !== roomName);
  }

  addPlayer(player) {
    this._players.push(player);
    return player;
  }

  removePlayer(playerId) {
    this._players = this._players.filter(player => player.id !== playerId);
  }

  findRoom(roomName) {
    return this._rooms.find(room => room.name === roomName);
  }

  findPlayer(playerId) {
    return this._players.find(player => player.id === playerId);
  }

  createPublicRoomsArray() {
    return this._rooms.map(room => ({
      name: room.name,
      playersCount: room.playersCount
    }));
  }
}

const instance = new Game();

export default instance;
