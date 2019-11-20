import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import Game from "../index";
import socket from "../../../services/socket-api";
import { SOLO } from "../../../../constants/game";

const mockStore = configureStore();
const initialState = {
  room: { mode: SOLO }
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

describe("<Game />", () => {
  test("Game rendering with store without crashing", () => {
    const wrapper = shallow(<Game store={store} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
