import game from "../game/class";

import {
  SOLO,
  BATTLEROYAL,
  MAX_PLAYER_SOLO,
  MAX_PLAYER_BATTLEROYAL
} from "../../constants/game";

class Room {
  constructor(name) {
    this._name = name;
    this._players = [];
    this._playersCount = 0;
    this._stillInGameCounter = 0;
    this._timer = null;
    this._isStarted = false;
    this._pieces = [];
    this._spectres = [];
    this._mode = SOLO;
    this._score = 0;
    this._level = 0;
    this._speed = 1000;
    this._linesRemovedCounter = 0;
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
  get mode() {
    return this._mode;
  }
  set mode(mode) {
    this._mode = mode;
  }
  get timer() {
    return this._timer;
  }
  set timer(timer) {
    this._timer = timer;
  }
  get score() {
    return this._score;
  }
  set score(score) {
    this._score = score;
  }
  get level() {
    return this._level;
  }
  set level(level) {
    this._level = level;
  }
  get speed() {
    return this._speed;
  }
  set speed(speed) {
    this._speed = speed;
  }

  newGame() {
    this.clean();
    this.extendPiecesList();
    this._isStarted = true;
    this._stillInGameCounter = this._players.length;
    this._players.forEach(player => player.newGame());
    this.initSpectres();
  }

  checkEndGame = () => {
    switch (this.mode) {
      case SOLO:
        if (this.playersCount === 0 || this.stillInGameCounter === 0) {
          this.endGame();
          game.updateHighScores(this._score, this._players[0].name);
        }
        break;
      case BATTLEROYAL:
        if (this.playersCount === 1 || this.stillInGameCounter === 1) {
          this.endGame();
        }
        break;
      default:
        return;
    }
  };

  endGame() {
    if (this._timer) this._timer.stop();
    this._isStarted = false;
  }

  clean() {
    if (this._timer) this._timer.stop();
    this._players.forEach(player => player.clean());
    this._pieces = [];
    this._isStarted = false;
    this._score = 0;
    this._level = 0;
    this._speed = 1000;
    this._linesRemovedCounter = 0;
  }

  addPlayer(player) {
    this._playersCount++;
    this._players.push(player);
  }

  updateHost() {
    this._players[0].isHost = true;
  }

  removePlayer(player) {
    this._playersCount--;
    this._players = this._players.filter(p => p.id !== player.id);
    this._spectres = this._spectres.filter(
      spectre => spectre.playerId !== player.id
    );
    if (player.isHost) {
      player.isHost = false;
      this.updateHost();
    }
    if (player.inGame) {
      this.stillInGameCounter -= 1;
    }
  }

  findPlayer(playerId) {
    return this._players.find(player => player.id === playerId);
  }

  isFull() {
    const maxPlayer =
      this._mode === SOLO ? MAX_PLAYER_SOLO : MAX_PLAYER_BATTLEROYAL;
    return this._playersCount >= maxPlayer;
  }

  extendPiecesList() {
    const tetris_bag = [];
    while (tetris_bag.length !== 7) {
      const shape_number = Math.floor(Math.random() * 7);
      if (tetris_bag.indexOf(shape_number) === -1) {
        tetris_bag.push(shape_number);
      }
    }
    this._pieces = this.pieces.concat(tetris_bag);
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

  updateScore = linesRemovedNbr => {
    switch (linesRemovedNbr) {
      case 1:
        this._score += 40 * (this._level + 1);
        break;
      case 2:
        this._score += 100 * (this._level + 1);
        break;
      case 3:
        this._score += 300 * (this._level + 1);
        break;
      case 4:
        this._score += 1200 * (this._level + 1);
        break;
      default:
        break;
    }
    this._linesRemovedCounter += linesRemovedNbr;
    if (this._linesRemovedCounter >= 3) {
      this._level += 1;
      this._linesRemovedCounter -= 3;
      this._speed = this._speed * (88 / 100);
      this._timer.reset(this._speed);
    }
  };

  toObject() {
    return {
      name: this._name,
      playersCount: this._playersCount,
      isStarted: this._isStarted,
      mode: this._mode,
      score: this._score,
      level: this._level
    };
  }
}

export default Room;
