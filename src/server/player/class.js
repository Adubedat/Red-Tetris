import Piece from "../piece/class";

class Player {
  constructor(name = "", id = "") {
    this._name = name;
    this._id = id;
    this._room = null;
    this._board = Array(20)
      .fill("")
      .map(() => Array(10).fill(""));
    this._heap = Array(20)
      .fill("")
      .map(() => Array(10).fill(""));
    this._piece = new Piece();
    this._indexPieces = 1;
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
      .fill("")
      .map(() => Array(10).fill(""));
    this._heap = Array(20)
      .fill("")
      .map(() => Array(10).fill(""));
    // this._piece = new Piece(5);
  }
  updateBoard() {
    this._piece.updateShadow(this._heap);
    const piece = this._piece;
    const { pos, shadowPos, shape, color } = this._piece;
    let newBoard = this._heap.map(row => {
      return [...row];
    });
    newBoard = piece.printToBoard(shadowPos, shape, newBoard, color + "40"); //Add alpha to color for shadow
    newBoard = piece.printToBoard(pos, shape, newBoard, color);
    this._board = newBoard;
  }

  updateHeap() {
    const newHeap = this._board.map(row => {
      return [...row];
    });
    const { pieces } = this._room;
    this._heap = newHeap;
    console.log(pieces[this._indexPieces]);
    const updatePiece = this._piece.update(
      pieces[this._indexPieces],
      this._heap
    );
    if (!updatePiece) {
      this.endGame();
    } else this._indexPieces += 1;
  }

  endGame() {
    this._room.endGame();
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
