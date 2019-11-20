import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import GameInfo from "../index";
import socket from "../../../services/socket-api";
import thunk from "redux-thunk";
import { SOLO } from "../../../../constants/game";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  room: {
    mode: SOLO,
    playersCount: 1,
    name: "Player1",
    isStarted: false
  },
  player: { isHost: true },
  onChangeGameMode: jest.fn()
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

describe("<GameInfo />", () => {
  test("GameInfo rendering with store without crashing", () => {
    const wrapper = shallow(<GameInfo store={store} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
