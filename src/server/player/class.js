import Piece from "../piece/class";

class Player {
  constructor(name = "", id = "") {
    this._name = name;
    this._id = id;
    this._room = null;
    this._board = Array(20)
      .fill(0)
      .map(() => Array(10).fill(0));
    this._currentPiece = new Piece();
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

  get currentPiece() {
    return this._currentPiece;
  }

  printPieceToBoard() {
    console.log("before: ", this._board);
    const [y, x] = this._currentPiece.pos;
    const shape = this._currentPiece.shape;
    let fakeBoard = [...this._board];
    for (let i = 0; i < shape.length; i++) {
      for (let j = 0; j < shape[i].length; j++) {
        if (shape[i][j]) fakeBoard[i + y][j + x] = 1;
      }
    }
    console.log("after: ", this._board);

    return fakeBoard;
  }

  toObject() {
    const player = {};
    player.name = this._name;
    player.id = this._id;
    player.board = this.printPieceToBoard();
    return player;
  }
}

export default Player;
