class Player {
  constructor(name = "", id = "") {
    this._name = name;
    this._id = id;
    this._room = null;
    this._board = Array(200).fill(0);
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

  setBoardAtIndex(index, value) {
    this._board[index] = value;
  }

  get room() {
    return this._room;
  }

  set room(room) {
    this._room = room;
  }

  createPublicPlayerObject() {
    const player = {};
    player.name = this._name;
    player.id = this._id;
    player.board = this._board;
    return player;
  }
}

export default Player;
