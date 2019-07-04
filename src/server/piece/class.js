/* eslint-disable */

const shapes = [
  [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]],
  [[1, 1, 0], [0, 1, 0], [0, 1, 0]],
  [[0, 1, 1], [0, 1, 0], [0, 1, 0]],
  [[0, 1, 0], [0, 1, 1], [0, 1, 0]],
  [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
  [[1, 1], [1, 1]],
];

/* eslint-enable */

class Piece {
  constructor(shape) {
    this._shape = shapes[shape];
    this._pos = { x: 0, y: 0 };
  }

  get pos() {
    return this._pos;
  }

  get shape() {
    return this._shape;
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
}

export default Piece;
