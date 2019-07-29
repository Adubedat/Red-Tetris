import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import App from "../index";
import socket from "../../../services/socket-api";

const mockStore = configureStore();
const initialState = {
  player: { name: "" },
  room: { name: "" }
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

describe("<App />", () => {
  test("App rendering with store without crashing", () => {
    const wrapper = shallow(<App store={store} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
