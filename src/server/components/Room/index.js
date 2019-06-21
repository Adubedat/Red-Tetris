import Game from "../Game";

const MAX_PLAYER = 10;

class Room {
  constructor(name, hostId) {
    this._name = name;
    this._hostId = hostId;
    this._players = [];
    this._playersCount = 0;
  }

  get name() {
    return this._name;
  }

  get hostId() {
    return this._hostId;
  }

  get players() {
    return this._players;
  }

  addPlayer(player) {
    this._playersCount++;
    this._players.push(player);
  }

  removePlayer(playerId) {
    this._playersCount--;
    if (playerId === this._hostId) {
      if (this._playersCount > 1) {
        this._hostId = this._players[1].id;
      } else {
        Game.removeRoom(this._name);
        return;
      }
    }
    this._players = this._players.filter(player => player.id !== playerId);
  }

  findPlayer(playerId) {
    return this._players.find(player => player.id === playerId);
  }

  isFull() {
    return this._playersCount >= MAX_PLAYER;
  }
}

export default Room;
