class Player {
  constructor(name = "", id = "", board = []) {
    this._name = name;
    this._id = id;
    this._currentRoom = null;
    this._board = board;
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

  changeBoardAtIndex(index, value) {
    this._board[index] = value;
  }

  get currentRoom() {
    return this._currentRoom;
  }

  set currentRoom(room) {
    this._currentRoom = room;
  }
}

export default Player;
