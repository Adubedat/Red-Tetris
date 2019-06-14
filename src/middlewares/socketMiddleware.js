import socketIOClient from "socket.io-client";

const socketMiddleware = () => {
  console.log("in middle");
  const socket = socketIOClient("localhost:4001");

  return ({ dispatch }) => next => action => {
    if (typeof action === "function") return next(action);

    const { event, leave, handle, ...rest } = action;
    if (!event) return next(action);
    if (leave) {
      socket.removeListener(event);
    }

    let handleEvent = handle;
    if (typeof handleEvent === "string") {
      handleEvent = result => dispatch({ type: handle, result, ...rest });
    }
    return socket.on(event, handleEvent);
  };
};

export default socketMiddleware;
