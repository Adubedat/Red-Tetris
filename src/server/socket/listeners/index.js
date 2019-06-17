import { createRoom } from "../../../client/actions/actions";

const initListeners = socket => {
  socket.on("createRoom", data => createRoom(data, socket));

  socket.on("createRoom", data => deletePlayer(data, socket));
};

export default initListeners;
