class Player {
  constructor(playerName = "", id = "", currentRoom = null) {
    this._name = playerName;
    this._id = id;
    this._currentRoom = currentRoom;
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get currentRoom() {
    return this._currentRoom;
  }

  set currentRoom(room) {
    this._currentRoom = room;
  }
}

export default Player;
