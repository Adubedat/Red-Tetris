import Piece from "../piece/class";
import { MALUS } from "../../constants/colors";
import { SOLO, BATTLEROYAL } from "../../constants/game";

class Player {
  constructor(name = "", id = "") {
    this._name = name;
    this._id = id;
    this._room = null;
    this._heap = Array(20)
      .fill("")
      .map(() => Array(10).fill(""));
    this._piece = new Piece();
    this._nextPiece = new Piece();
    this._indexPieces = 0;
    this._inGame = false;
    this._isHost = false;
    this._hasLost = false;
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
  get isHost() {
    return this._isHost;
  }
  set isHost(isHost) {
    this._isHost = isHost;
  }

  newGame() {
    this.newPiece();
    this._inGame = true;
  }

  gameOver() {
    this._inGame = false;
    this._hasLost = true;
    this._room.stillInGameCounter -= 1;
    this._room.checkEndGame();
  }

  newPiece() {
    const { pieces } = this._room;
    this._piece.initNewPiece(pieces[this._indexPieces], this._heap);
    this._indexPieces += 1;
    if (this._indexPieces >= pieces.length - 1) {
      this._room.extendPiecesList();
    }
    this._nextPiece.initNextPiece(pieces[this._indexPieces]);
  }

  clean() {
    this._inGame = false;
    this._hasLost = false;
    this._indexPieces = 0;
    this._piece = new Piece();
    this._nextPiece = new Piece();
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
    newBoard = piece.printToBoard(shadowPos, shape, newBoard, color + "30"); //Add alpha to color for shadow
    newBoard = piece.printToBoard(pos, shape, newBoard, color);
    return newBoard;
  }

  removeLines() {
    let counter = 0;
    this._heap.forEach((row, index) => {
      if (row.every(value => value && value !== MALUS)) {
        this._heap.splice(index, 1);
        this._heap.unshift(Array(10).fill(""));
        counter += 1;
      }
    });
    if (this._room.mode === BATTLEROYAL) {
      this.sendMalus(counter - 1);
    }
    if (this._room.mode === SOLO) {
      this._room.updateScore(counter);
    }
  }

  sendMalus(counter) {
    const players = this._room.players.filter(
      player => player.id !== this._id && player.inGame
    );
    players.forEach(player => {
      for (let i = 0; i < counter; i++) {
        player.heap.splice(0, 1);
        player.heap.push(Array(10).fill(MALUS));
        player.room.updateSpectre(player.id, player.heap);
      }
    });
  }

  updateHeap() {
    const piece = this._piece;
    const { pos, shape, color } = this._piece;
    if (piece.isOverTheHeap()) this.gameOver();
    this._heap = piece.printToBoard(pos, shape, this._heap, color);
    this.removeLines();
    this._room.updateSpectre(this._id, this._heap);
    if (this._inGame) this.newPiece();
  }

  toObject() {
    return {
      name: this._name,
      id: this._id,
      isHost: this._isHost,
      inGame: this._inGame,
      hasLost: this._hasLost,
      nextPiece: this._nextPiece.toObject(),
      board: this.renderBoard() || this._heap
    };
  }
}

export default Player;
