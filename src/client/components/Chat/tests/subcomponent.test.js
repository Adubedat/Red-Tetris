import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ChatSub from "../subcomponent";
import socket from "../../../services/socket-api";
import { StyledInput, StyledForm } from "../styles";

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
  chatMessages: [
    { type: "message", author: "Player1", text: "Hello world" },
    { type: "notification", text: "Player1 joined Lobby" }
  ],
  players: ["Player1", "Player2"],
  onSubmit: jest.fn()
};

describe("<ChatSub />", () => {
  test("ChatSub rendering without crashing", () => {
    const wrapper = shallow(<ChatSub {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("ChatSub input remove kaydown listener on focus event", () => {
    document.removeEventListener = jest.fn();

    const wrapper = shallow(<ChatSub {...props} />);
    wrapper.find(StyledInput).simulate("focus");
    expect(document.removeEventListener).toHaveBeenCalled();
  });
  test("ChatSub input add keydown listener on blur", () => {
    document.addEventListener = jest.fn();

    const wrapper = shallow(<ChatSub {...props} />);
    wrapper.find(StyledInput).simulate("blur");
    expect(document.addEventListener).toHaveBeenCalled();
  });
  test("ChatSub input add keydown listener on blur event", () => {
    document.addEventListener = jest.fn();

    const wrapper = shallow(<ChatSub {...props} />);
    wrapper.find(StyledInput).simulate("blur");
    expect(document.addEventListener).toHaveBeenCalled();
  });
  test("ChatSub input value change on change event // input value reset and onSubmit called on submit event", () => {
    const wrapper = shallow(<ChatSub {...props} />);
    const message = "Hello world !";
    const event = { target: { value: message } };

    wrapper.find(StyledInput).simulate("change", event);
    expect(wrapper.find(StyledInput).props().value).toBe(message);
    wrapper.find(StyledForm).simulate("submit", {
      preventDefault: () => {}
    });
    expect(wrapper.find(StyledInput).props().value).toBe("");
    expect(props.onSubmit).toHaveBeenCalled();
  });
});
