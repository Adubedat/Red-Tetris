import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import GameSub from "../subcomponent";
import socket from "../../../services/socket-api";
import { SOLO, BATTLEROYAL } from "../../../../constants/game";

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

describe("<GameSub />", () => {
  test("GameSub rendering in solo mode", () => {
    const wrapper = shallow(<GameSub mode={SOLO} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("GameSub rendering in battleroyal mode", () => {
    const wrapper = shallow(<GameSub mode={BATTLEROYAL} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
