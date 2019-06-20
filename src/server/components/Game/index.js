import Lobby from "../Lobby";

const MAX_PLAYER = 10;

class Game {
  constructor(name, hostId) {
    this._name = name;
    this._hostId = hostId;
    this._players = [];
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
    this._players.push(player);
  }

  removePlayer(playerId) {
    if (playerId === this._hostId) {
      Lobby.removeRoom(this._name);
      return;
    }
    this._players = this._players.filter(player => player.id !== playerId);
  }

  findPlayer(playerId) {
    return this._players.find(player => player.id === playerId);
  }

  isFull() {
    return this._players.length >= MAX_PLAYER;
  }
}

export default Game;
