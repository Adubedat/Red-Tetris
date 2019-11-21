import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import SpectresSub from "../subcomponent";
import socket from "../../../services/socket-api";

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

const spectres = [
  {
    board: [0, 0, 0],
    playerName: "Player"
  }
];

describe("<LoginSub />", () => {
  test("SpectresSub rendering with no spectres", () => {
    const wrapper = shallow(<SpectresSub spectres={spectres} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
