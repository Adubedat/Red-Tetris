import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CreateRoomSub from "../subcomponent";
import { StyledForm, StyledInput } from "../styles";

const props = {
  playerName: "Bob"
};

describe("<CreateRoomSub />", () => {
  test("should render without crashing", () => {
    const wrapper = shallow(<CreateRoomSub {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("should update roomName and set error to true with a too long playerName", () => {
    const wrapper = shallow(<CreateRoomSub {...props} />);
    const roomName = "RoomNameTooLong";
    const event = { target: { value: roomName } };

    wrapper.find(StyledInput).simulate("change", event);
    expect(wrapper.find(StyledInput).props().value).toBe(roomName);
    expect(wrapper.find(StyledInput).props().error).toBeTruthy();
  });

  test("should update roomName and set error to true with an unvalid character", () => {
    const wrapper = shallow(<CreateRoomSub {...props} />);
    const roomName = "Room$";
    const event = { target: { value: roomName } };

    wrapper.find(StyledInput).simulate("change", event);
    expect(wrapper.find(StyledInput).props().value).toBe(roomName);
    expect(wrapper.find(StyledInput).props().error).toBeTruthy();
  });

  test("should update playerName, set error to false and call connectPlayer on Submit with a valid input", () => {
    const wrapper = shallow(<CreateRoomSub {...props} />);
    const roomName = "ValidRoom";
    const event = { target: { value: roomName } };

    wrapper.find(StyledInput).simulate("change", event);
    expect(wrapper.find(StyledInput).props().value).toBe(roomName);
    expect(wrapper.find(StyledInput).props().error).not.toBeTruthy();
    wrapper.find(StyledForm).simulate("submit", {
      preventDefault: () => {}
    });
    expect(window.location.hash).toBe(
      "#" + roomName + "[" + props.playerName + "]"
    );
  });
});
