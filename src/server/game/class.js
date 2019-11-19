import { updateHighScoresInDb } from "../../database";
class Game {
  constructor() {
    this._rooms = [];
    this._players = [];
    this._highscores = [
      {
        score: 0,
        name: ""
      },
      {
        score: 0,
        name: ""
      },
      {
        score: 0,
        name: ""
      },
      {
        score: 0,
        name: ""
      },
      {
        score: 0,
        name: ""
      }
    ];
  }

  get rooms() {
    return this._rooms;
  }

  get players() {
    return this._players;
  }
  get highscores() {
    return this._highscores;
  }

  set highscores(highscores) {
    this._highscores = highscores;
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

  updateHighScores(score, playerName) {
    const newHighScore = { score, playerName };
    this._highscores.every((highscore, index) => {
      if (highscore.score < score) {
        this._highscores.splice(index, 0, newHighScore);
        this._highscores.length = 5;
        updateHighScoresInDb(this._highscores);
        return false;
      } else return true;
    });
  }

  createPublicRoomsArray() {
    return this._rooms.map(room => ({
      name: room.name,
      playersCount: room.playersCount,
      mode: room.mode,
      isStarted: room.isStarted
    }));
  }

  toObject() {
    return {
      rooms: this.createPublicRoomsArray(),
      highscores: this._highscores
    };
  }
}

const instance = new Game();

export default instance;
