/* eslint-disable */

const shapes = [
    [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0]
    ],
    [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ],
    [
        [0, 1, 1],
        [0, 1, 0],
        [0, 1, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0]
    ],
    [
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0]
    ],
    [
        [1, 1],
        [1, 1],
    ]
];

/* eslint-enable */

class Piece {
  constructor() {
    this._shape = shapes[2];
    this._pos = [0, 0];
  }

  get pos() {
    return this._pos;
  }

  get shape() {
    return this._shape;
  }

  moveDown() {
    this._pos[0] += 1;
  }

  moveLeft() {
    this._pos[1] -= 1;
  }

  moveRight() {
    this._pos[1] += 1;
  }
}

export default Piece;
