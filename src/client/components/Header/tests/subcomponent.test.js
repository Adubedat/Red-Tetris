import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import HeaderSub from "../subcomponent";
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
  roomName: "Room",
  playerName: "Player",
  onBackHome: jest.fn()
};

describe("<HeaderSub />", () => {
  test("HeaderSub rendering with inside a room", () => {
    const wrapper = shallow(<HeaderSub {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("HeaderSub rendering outside of a room", () => {
    props.roomName = "";
    const wrapper = shallow(<HeaderSub {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
