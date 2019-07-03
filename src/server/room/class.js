import { MAX_PLAYER } from "../../constants/constants";

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

  get playersCount() {
    return this._playersCount;
  }

  addPlayer(player) {
    this._playersCount++;
    this._players.push(player);
  }

  updateHostId() {
    this._hostId = this._players[0].id;
  }
  removePlayer(playerId) {
    this._playersCount--;
    this._players = this._players.filter(player => player.id !== playerId);
  }

  findPlayer(playerId) {
    return this._players.find(player => player.id === playerId);
  }

  isFull() {
    return this._playersCount >= MAX_PLAYER;
  }

  createPublicPlayersArray() {
    return this._players.map(player => player.toObject());
  }

  toObject() {
    const room = {};
    room.name = this._name;
    room.hostId = this._hostId;
    room.players = this.createPublicPlayersArray();
    room.playersCount = this._playersCount;
    return room;
  }
}

export default Room;
