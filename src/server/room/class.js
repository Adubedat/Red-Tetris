import { MAX_PLAYER_BATTLEROYAL, SOLO } from "../../constants/constants";

class Room {
  constructor(name) {
    this._name = name;
    this._players = [];
    this._playersCount = 0;
    this._stillInGameCounter = 0;
    this._interval = null;
    this._isStarted = false;
    this._isGameOver = false;
    this._pieces = [];
    this._spectres = [];
    this._mode = SOLO;
  }

  get name() {
    return this._name;
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
  get stillInGameCounter() {
    return this._stillInGameCounter;
  }
  set stillInGameCounter(stillInGameCounter) {
    this._stillInGameCounter = stillInGameCounter;
  }
  get isGameOver() {
    return this._isGameOver;
  }
  set isGameOver(isGameOver) {
    this._isGameOver = isGameOver;
  }
  get mode() {
    return this._mode;
  }
  set mode(mode) {
    this._mode = mode;
  }

  clean() {
    if (this._interval) clearInterval(this._interval);
    this._players.forEach(player => player.clean());
    this._pieces = [];
    this._isStarted = false;
  }

  addPlayer(player) {
    this._playersCount++;
    this._players.push(player);
  }

  updateHost() {
    this._players[0].isHost = true;
  }

  removePlayer(playerId) {
    this._playersCount--;
    this._players = this._players.filter(player => player.id !== playerId);
    this._spectres = this._spectres.filter(
      spectre => spectre.playerId !== playerId
    );
  }

  findPlayer(playerId) {
    return this._players.find(player => player.id === playerId);
  }

  isFull() {
    return this._playersCount >= MAX_PLAYER_BATTLEROYAL;
  }

  extendPiecesList() {
    for (let i = 0; i < 10; i++) {
      this._pieces.push(Math.floor(Math.random() * 7));
    }
  }

  newGame() {
    this.clean();
    this.extendPiecesList();
    this._isStarted = true;
    this._isGameOver = false;
    this._stillInGameCounter = this._players.length;
    this._players.forEach(player => player.newGame());
    this.initSpectres();
  }

  endGame() {
    if (this._interval) clearInterval(this._interval);
    this._isGameOver = true;
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

  updateSpectre(playerId, heap) {
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
      playersCount: this._playersCount,
      isStarted: this._isStarted,
      isGameOver: this._isGameOver
    };
  }
}

export default Room;
