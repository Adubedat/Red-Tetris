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
    this._spectres = [];
    this.extendPiecesList();
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
  get spectres() {
    return this._spectres;
  }
  set spectres(spectres) {
    this._spectres = spectres;
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

  extendPiecesList() {
    for (let i = 0; i < 10; i++) {
      this._pieces.push(Math.floor(Math.random() * 7));
    }
    console.log("EXTEND PIECES");
    console.log(this._pieces);
  }

  endGame() {
    if (this._interval) clearInterval(this._interval);
    this._isStarted = false;
  }

  fillHeap(heap) {
    const spectre = heap.map(row => [...row]);
    for (let i = 1; i < spectre.length; i++) {
      for (const j in spectre[i]) {
        if (spectre[i - 1][j]) spectre[i][j] = spectre[i - 1][j];
      }
    }
    return spectre;
  }

  initSpectres() {
    this._spectres = this._players.map(player => {
      return {
        playerId: player.id,
        playerName: player.name,
        board: player.heap.map(row => [...row])
      };
    });
  }

  updateSpectres(playerId, heap) {
    this._spectres = this._spectres.map(spectre => {
      if (spectre.playerId === playerId) {
        spectre.board = this.fillHeap(heap);
        return spectre;
      } else return spectre;
    });
  }

  toObject() {
    return {
      name: this._name,
      hostId: this._hostId,
      playersCount: this._playersCount,
      isStarted: this._isStarted
    };
  }
}

export default Room;
