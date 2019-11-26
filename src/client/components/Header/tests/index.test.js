import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import Header from "../index";
import socket from "../../../services/socket-api";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  room: { name: "Room" },
  player: { name: "Player1" }
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

describe("<Header />", () => {
  test("Header rendering with store without crashing", () => {
    const wrapper = shallow(<Header store={store} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
