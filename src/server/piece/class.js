import {
  VIVID_BLUE,
  CYAN_BLUE,
  CRIMSON,
  PURE_ORANGE,
  LIME_GREEN,
  PURE_VIOLET,
  PURE_YELLOW
} from "../../constants/colors";

/* eslint-disable */
import { BOARD_HEIGHT, BOARD_WIDTH } from "../../constants/game";

const pieces = [
  {
    shape: [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
    pos: { x: 3, y: -3 },
    color: VIVID_BLUE
  },
  {
    shape: [[1, 0, 0], [1, 1, 1], [0, 0, 0]],
    pos: { x: 4, y: -3 },
    color: CYAN_BLUE
  },
  {
    shape: [[0, 0, 1], [1, 1, 1], [0, 0, 0]],
    pos: { x: 4, y: -3 },
    color: CRIMSON
  },
  {
    shape: [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
    pos: { x: 4, y: -3 },
    color: PURE_ORANGE
  },
  {
    shape: [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
    pos: { x: 4, y: -3 },
    color: LIME_GREEN
  },
  {
    shape: [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
    pos: { x: 4, y: -3 },
    color: PURE_VIOLET
  },
  {
    shape: [[1, 1], [1, 1]],
    pos: { x: 4, y: -2 },
    color: PURE_YELLOW
  }
];

/* eslint-enable */

class Piece {
  get shape() {
    return this._shape;
  }
  get pos() {
    return this._pos;
  }
  get shadowPos() {
    return this._shadowPos;
  }
  get color() {
    return this._color;
  }

  initNewPiece(index, heap) {
    const piece = pieces[index];
    this._shape = [...piece.shape.map(row => [...row])];
    this._pos = { ...piece.pos };
    this._shadowPos = { ...piece.pos };
    this._color = piece.color;
    while (
      this._pos.y <= 0 &&
      this.isPosAvailable(this._pos, this._shape, heap)
    ) {
      this._pos.y += 1;
    }
    this._pos.y -= 1;
  }

  initNextPiece(index) {
    const piece = pieces[index];
    this._shape = [...piece.shape.map(row => [...row])];
    this._color = piece.color;
  }

  printToBoard(pos, shape, board, color) {
    const { x, y } = pos;
    for (let i = 0; i < shape.length; i++) {
      for (let j = 0; j < shape[i].length; j++) {
        if (shape[i][j]) {
          let boardY = i + y;
          let boardX = j + x;
          if (boardY >= 0) board[boardY][boardX] = color;
        }
      }
    }
    return board;
  }

  isPosAvailable(newPos, shape, heap) {
    const { x, y } = newPos;
    for (let i = 0; i < shape.length; i++) {
      for (let j = 0; j < shape[i].length; j++) {
        if (shape[i][j]) {
          let Y = i + y;
          let X = j + x;
          if (
            Y >= BOARD_HEIGHT ||
            X < 0 ||
            X >= BOARD_WIDTH ||
            (Y >= 0 && heap[Y][X])
          )
            return false;
        }
      }
    }
    return true;
  }

  isOverTheHeap() {
    for (let i = 0; i < this._shape.length; i++) {
      for (let j = 0; j < this._shape[i].length; j++) {
        if (this._shape[i][j] && i + this._pos.y < 0) {
          return true;
        }
      }
    }
    return false;
  }

  updateShadow(heap) {
    let newPos = { ...this._pos };
    while (this.isPosAvailable(newPos, this._shape, heap)) {
      newPos.y += 1;
    }
    newPos.y -= 1;
    this._shadowPos = newPos;
  }

  /*
   ** Rotate
   */

  rotationMatrice(shape) {
    let newShape = [];
    const blocksInShape = shape.length;
    for (let i = 0; i < blocksInShape; i++) {
      let row = shape.map(e => e[i]).reverse();
      newShape.push(row);
    }
    return newShape;
  }

  findNewPosAfterRotation(shape, pos, heap) {
    let newPos = { ...pos };
    let i = 0;
    while (i < 2) {
      newPos.x++;
      if (this.isPosAvailable(newPos, shape, heap)) return newPos;
      i++;
    }
    newPos = { ...pos };
    i = 0;
    while (i < 2) {
      newPos.x--;
      if (this.isPosAvailable(newPos, shape, heap)) return newPos;
      i++;
    }
    return null;
  }

  rotate(heap) {
    const { _shape: shape, _pos: pos } = this;
    const newShape = this.rotationMatrice(shape);
    if (!this.isPosAvailable(pos, newShape, heap)) {
      const newPos = this.findNewPosAfterRotation(newShape, pos, heap);
      if (newPos) this._pos = newPos;
      else return;
    }
    this._shape = newShape;
  }

  hardDrop() {
    this._pos = { ...this._shadowPos };
  }

  moveDown(heap) {
    let newPos = { ...this._pos };
    newPos.y += 1;
    if (this.isPosAvailable(newPos, this._shape, heap)) {
      this._pos.y += 1;
      return true;
    } else {
      return false;
    }
  }

  moveLeft(heap) {
    let newPos = { ...this._pos };
    newPos.x -= 1;
    if (this.isPosAvailable(newPos, this._shape, heap)) {
      this._pos.x -= 1;
    }
  }

  moveRight(heap) {
    let newPos = { ...this._pos };
    newPos.x += 1;
    if (this.isPosAvailable(newPos, this._shape, heap)) {
      this._pos.x += 1;
    }
  }

  toObject() {
    return {
      shape: this._shape,
      color: this._color
    };
  }
}

export default Piece;
