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
  constructor(boardInfo) {
    this._shape = shapes[2];
    this._pos = { x: 0, y: 0 };
    this._boardInfo = boardInfo;
  }

  get pos() {
    return this._pos;
  }

  get shape() {
    return this._shape;
  }

  updateBoard() {
    const { x, y } = this._pos;
    const shape = this._shape;
    const newBoard = this._boardInfo.heap.map(row => {
      return [...row];
    });
    for (let i = 0; i < shape.length; i++) {
      for (let j = 0; j < shape[i].length; j++) {
        if (shape[i][j]) newBoard[i + y][j + x] = 1;
      }
    }
    this._boardInfo.board = newBoard;
  }

  isPosAvailable(newPos) {
    const { x, y } = newPos;
    const shape = this._shape;
    for (let i = 0; i < shape.length; i++) {
      for (let j = 0; j < shape[i].length; j++) {
        if (shape[i][j]) {
          let heapY = i + y;
          let heapX = j + x;
          if (
            heapY >= 20 &&
            heapX < 0 &&
            heapX >= 10 &&
            this._boardInfo.heap[heapY][heapX]
          )
            return false;
        }
      }
    }
    return true;
  }

  moveDown() {
    console.log("before:", this._boardInfo.board);
    let newPos = { ...this._pos };
    newPos.y += 1;
    if (this.isPosAvailable(newPos)) {
      this._pos.y += 1;
      this.updateBoard();
    }
    console.log("after", this._board);
  }

  moveLeft() {
    let newPos = { ...this._pos };
    newPos.x -= 1;
    if (this.isPosAvailable(newPos)) {
      this._pos.x -= 1;
      this.updateBoard();
    }
  }

  moveRight() {
    let newPos = { ...this._pos };
    newPos.x += 1;
    if (this.isPosAvailable(newPos)) {
      this._pos.x += 1;
      this.updateBoard();
    }
  }
}

export default Piece;
