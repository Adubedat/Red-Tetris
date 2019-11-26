import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import Chat from "../index";
import socket from "../../../services/socket-api";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  chatMessages: [],
  players: []
};

const store = mockStore(initialState);

beforeEach(done => {
  // Setup
  if (socket.disconnected) {
    socket.connect();
  }
  socket.on("connect", () => {
    done();
  });
});

afterEach(done => {
  //   Cleanup;
  if (socket.connected) {
    socket.disconnect();
  }
  done();
});

describe("<Chat />", () => {
  test("Chat rendering with store without crashing", () => {
    const wrapper = shallow(<Chat store={store} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
