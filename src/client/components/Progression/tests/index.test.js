import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import Progression from "../index";
import socket from "../../../services/socket-api";

const mockStore = configureStore();
const initialState = {
  room: {
    score: 45230,
    level: 23
  }
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

describe("<Progression />", () => {
  test("Progression rendering with store without crashing", () => {
    const wrapper = shallow(<Progression store={store} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
