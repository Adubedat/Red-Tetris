class Player {
  constructor(name = "", id = "", board = []) {
    this._name = name;
    this._id = id;
    this._currentRoom = null;
    this._board = board;
  }

  // info() {
  //   return {
  //     name: this._name,
  //     id: this._id,
  //     room: this._currentRoom,
  //     board: this._board
  //   };
  // }
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

  setBoardAtIndex(index, value) {
    this._board[index] = value;
  }

  get currentRoom() {
    return this._currentRoom;
  }

  set currentRoom(room) {
    this._currentRoom = room;
  }
  createPublicObject() {
    const player = {};
    player.name = this._name;
    player.id = this._id;
    player.board = this._board;
    return player;
  }
}

export default Player;
