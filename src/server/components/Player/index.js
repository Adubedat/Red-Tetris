class Player {
  constructor(playerName, id) {
    this._name = playerName;
    this._id = id;
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }
}

export default Player;
