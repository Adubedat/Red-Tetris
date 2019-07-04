import Piece from "../piece/class";

class Player {
  constructor(name = "", id = "") {
    this._name = name;
    this._id = id;
    this._room = null;
    this._board = Array(20)
      .fill(0)
      .map(() => Array(10).fill(0));
    this._heap = Array(20)
      .fill(0)
      .map(() => Array(10).fill(0));
    this._piece = new Piece();
    this._indexPieces = 0;
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

  get heap() {
    return this._heap;
  }
  set heap(heap) {
    this.heap = heap;
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
  clean() {
    this._room = null;
    this._board = Array(20)
      .fill(0)
      .map(() => Array(10).fill(0));
    this._heap = Array(20)
      .fill(0)
      .map(() => Array(10).fill(0));
    this._piece = new Piece(5);
  }
  updateBoard() {
    const { x, y } = this._piece.pos;
    const shape = this._piece.shape;
    const newBoard = this._heap.map(row => {
      return [...row];
    });
    for (let i = 0; i < shape.length; i++) {
      for (let j = 0; j < shape[i].length; j++) {
        if (shape[i][j]) newBoard[i + y][j + x] = 1;
      }
    }
    this._board = newBoard;
  }

  updateHeap() {
    const newHeap = this._board.map(row => {
      return [...row];
    });
    const { _piece, _indexPieces } = this;
    const { pieces } = this._room;
    this._heap = newHeap;
    _piece.update(pieces[_indexPieces]);
  }

  toObject() {
    const player = {};
    player.name = this._name;
    player.id = this._id;
    player.board = this.board;
    return player;
  }
}

export default Player;
