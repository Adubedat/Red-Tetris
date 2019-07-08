import Piece from "../piece/class";

class Player {
  constructor(name = "", id = "") {
    this._name = name;
    this._id = id;
    this._room = null;
    this._heap = Array(20)
      .fill("")
      .map(() => Array(10).fill(""));
    this._piece = new Piece();
    this._indexPieces = 1;
    this._inGame = false;
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
  get inGame() {
    return this._inGame;
  }
  set inGame(inGame) {
    this._inGame = inGame;
  }

  newPiece() {
    const { pieces } = this._room;
    if (!this._piece.initNewPiece(pieces[this._indexPieces], this._heap)) {
      this._inGame = false;
      this._room.stillInGameCounter -= 1;
      if (this._room.stillInGameCounter === 0) {
        this._room.endGame();
      }
    } else {
      this._indexPieces += 1;
      if (this._indexPieces >= pieces.length - 1) this._room.extendPiecesList();
      console.log("NEW PIECE");
      console.log("INDEX : ", this._indexPieces);
      console.log(("PIECES LENGTH : ", pieces.length));
    }
  }

  clean() {
    this._inGame = false;
    this._heap = Array(20)
      .fill("")
      .map(() => Array(10).fill(""));
  }

  renderBoard() {
    if (!this._piece.pos) return;
    this._piece.updateShadow(this._heap);
    const piece = this._piece;
    const { pos, shadowPos, shape, color } = piece;
    let newBoard = this._heap.map(row => {
      return [...row];
    });
    newBoard = piece.printToBoard(shadowPos, shape, newBoard, color + "40"); //Add alpha to color for shadow
    newBoard = piece.printToBoard(pos, shape, newBoard, color);
    return newBoard;
  }

  removeLines() {
    this._heap.forEach((row, index) => {
      if (row.every(value => value)) {
        this._heap.splice(index, 1);
        this._heap.unshift(Array(10).fill(""));
      }
    });
  }

  updateHeap() {
    const piece = this._piece;
    const { pos, shape, color } = this._piece;
    this._heap = piece.printToBoard(pos, shape, this._heap, color);
    this.removeLines();
    this.newPiece();
  }

  toObject() {
    const player = {};
    player.name = this._name;
    player.id = this._id;
    player.board = this.renderBoard() || this._heap;
    return player;
  }
}

export default Player;
