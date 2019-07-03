import Piece from "../piece/class";

class Player {
  constructor(name = "", id = "") {
    this._name = name;
    this._id = id;
    this._room = null;
    this._boardInfo = {
      board: Array(20)
        .fill(0)
        .map(() => Array(10).fill(0)),
      heap: Array(20)
        .fill(0)
        .map(() => Array(10).fill(0))
    };
    // this._board = Array(20)
    //   .fill(0)
    //   .map(() => Array(10).fill(0));
    // this._heap = Array(20)
    //   .fill(0)
    //   .map(() => Array(10).fill(0));
    this._piece = new Piece(this._boardInfo);
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }
  get board() {
    return this._board;
  }

  set board(board) {
    this._board = board;
  }

  get room() {
    return this._room;
  }

  set room(room) {
    this._room = room;
  }

  get piece() {
    return this._piece;
  }

  toObject() {
    const player = {};
    player.name = this._name;
    player.id = this._id;
    player.board = this._boardInfo.board;
    return player;
  }
}

export default Player;
