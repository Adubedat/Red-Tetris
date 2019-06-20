class Player {
  constructor(playerName, id, currentRoom) {
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

  set currentRoom(newRoomName) {
    this._currentRoom = newRoomName;
  }
}

export default Player;
