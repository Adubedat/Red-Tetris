import React from "react";
import { shallow, render } from "enzyme";
import toJson from "enzyme-to-json";
import RoomListSub from "../subcomponent";
import { StyledListItem } from "../styles";
import { SOLO, BATTLEROYAL } from "../../../../constants/game";

const props = {
  rooms: [
    { name: "Room1", playersCount: 2, isStarted: true, mode: BATTLEROYAL },
    { name: "Room2", playersCount: 1, isStarted: false, mode: SOLO }
  ],
  playerName: "Player1"
};

describe("<RoomListSub />", () => {
  test("should render without crashing", () => {
    const wrapper = render(<RoomListSub {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("should joinRoom when clicking a roomListItem", done => {
    const wrapper = shallow(<RoomListSub {...props} />);

    const item = wrapper.find(StyledListItem);
    expect(window.location.hash).toBe("");
    item.first().simulate("click");
    setTimeout(() => {
      expect(window.location.hash).toBe(
        "#" + props.rooms[0].name + "[" + props.playerName + "]"
      );
      done();
    }, 50);
  });
});
