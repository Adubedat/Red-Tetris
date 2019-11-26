import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import GameInfoSub from "../subcomponent";
import socket from "../../../services/socket-api";
import { SOLO, BATTLEROYAL } from "../../../../constants/game";
import Select from "../../common/Select";

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
  mode: SOLO,
  playersCount: 1,
  name: "Player1",
  isStarted: false,
  isHost: true,
  onChangeGameMode: jest.fn()
};

describe("<GameInfoSub />", () => {
  test("GameInfoSub rendering in solo mode", () => {
    const wrapper = shallow(<GameInfoSub {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("GameInfoSub rendering in battleroyal mode", () => {
    props.mode = BATTLEROYAL;
    const wrapper = shallow(<GameInfoSub {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("GameInfoSub call onChangeGameMode when the mode selector change", () => {
    props.mode = SOLO;
    const wrapper = shallow(<GameInfoSub {...props} />);
    const newMode = BATTLEROYAL;
    const event = { target: { value: newMode } };

    wrapper.find(Select).simulate("change", event);
    expect(props.onChangeGameMode).toHaveBeenCalled();
  });
});
