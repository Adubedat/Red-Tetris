import { MAX_PLAYER } from "../../constants/constants";

class Room {
  constructor(name, hostId) {
    this._name = name;
    this._hostId = hostId;
    this._players = [];
    this._playersCount = 0;
    this._stillInGameCounter = 0;
    this._interval = null;
    this._isStarted = false;
    this._pieces = [];
    this.initPieces();
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
  get isStarted() {
    return this._isStarted;
  }
  set isStarted(bool) {
    this._isStarted = bool;
  }
  get interval() {
    return this._interval;
  }
  set interval(interval) {
    this._interval = interval;
  }
  get pieces() {
    return this._pieces;
  }
  set pieces(pieces) {
    this._pieces = pieces;
  }
  get _stillInGameCounter() {
    return this.__stillInGameCounter;
  }
  set _stillInGameCounter(stillInGameCounter) {
    this.__stillInGameCounter = stillInGameCounter;
  }

  clean() {
    if (this._interval) clearInterval(this._interval);
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

  initPieces() {
    this._pieces = [...Array(1000)].map(() => {
      return Math.floor(Math.random() * 7);
    });
  }

  createPublicPlayersArray() {
    return this._players.map(player => player.toObject());
  }

  endGame() {
    if (this._interval) clearInterval(this._interval);
    this._isStarted = false;
  }

  toObject() {
    const room = {};
    room.name = this._name;
    room.hostId = this._hostId;
    room.players = this.createPublicPlayersArray();
    room.playersCount = this._playersCount;
    room.isStarted = this._isStarted;
    return room;
  }
}

export default Room;
