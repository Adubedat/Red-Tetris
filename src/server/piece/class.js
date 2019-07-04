/* eslint-disable */

const tetriminos = [
  {
    shape: [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]],
    pos: { x: 3, y: 0 },
    color: "#143cdc",
  },
  {
    shape: [[1, 1, 0], [0, 1, 0], [0, 1, 0]],
    pos: { x: 4, y: 0 },
    color: "#14d4dc",
  },
  {
    shape: [[0, 1, 1], [0, 1, 0], [0, 1, 0]],
    pos: { x: 4, y: 0 },
    color: "#dc143c",
  },
  {
    shape: [[0, 1, 0], [0, 1, 1], [0, 1, 0]],
    pos: { x: 4, y: 0 },
    color: "#ff8b00",
  },
  {
    shape: [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
    pos: { x: 4, y: 0 },
    color: "#3cdc14",
  },
  {
    shape: [[0, 0, 1], [0, 1, 1], [0, 1, 0]],
    pos: { x: 4, y: 0 },
    color: "#b600ff",
  },
  {
    shape: [[1, 1], [1, 1]],
    pos: { x: 4, y: 0 },
    color: "#fff400",
  },
];

/* eslint-enable */

class Piece {
  // constructor() {
  //   this._shape = tetriminos[6].shape;
  //   this._pos = tetriminos[6].pos;
  //   this._shadowPos = tetriminos[6].pos;
  //   this._color = tetriminos[6].color;
  // }

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

  update(index) {
    const newTetri = { ...tetriminos[index] };
    this._shape = [...newTetri.shape.map(row => [...row])];
    this._pos = { ...newTetri.pos };
    this._shadowPos = { ...newTetri.pos };
    this._color = newTetri.color;
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
          let heapY = i + y;
          let heapX = j + x;
          if (heapY >= 20 || heapX < 0 || heapX >= 10 || heap[heapY][heapX])
            return false;
        }
      }
    }
    return true;
  }

  updateShadow(heap) {
    let newPos = { ...this._pos };
    while (this.isPosAvailable(newPos, this._shape, heap)) {
      newPos.y += 1;
    }
    newPos.y -= 1;
    this._shadowPos = newPos;
  }

  rotate(heap) {
    let newShape = [];
    for (let i = 0; i < this._shape[0].length; i++) {
      let row = this._shape.map(e => e[i]).reverse();
      newShape.push(row);
    }
    if (this.isPosAvailable(this._pos, newShape, heap)) {
      this._shape = newShape;
    }
    this.updateShadow(heap);
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
      this.updateShadow(heap);
    }
  }

  moveRight(heap) {
    let newPos = { ...this._pos };
    newPos.x += 1;
    if (this.isPosAvailable(newPos, this._shape, heap)) {
      this._pos.x += 1;
      this.updateShadow(heap);
    }
  }
}

export default Piece;
