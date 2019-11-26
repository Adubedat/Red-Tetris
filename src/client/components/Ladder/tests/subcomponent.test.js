import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";
import LadderSub from "../subcomponent";
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

const props = {
  highscores: [
    { score: 10500, playerName: "Player" },
    { score: 10500, playerName: "Player" },
    { score: 10500, playerName: "Player" },
    { score: 10500, playerName: "Player" },
    { score: 10500, playerName: "Player" }
  ]
};

describe("<LoginSub />", () => {
  test("LadderSub rendering", () => {
    const wrapper = render(<LadderSub {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
