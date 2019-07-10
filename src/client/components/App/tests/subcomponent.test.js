import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AppSub from "../subcomponent";

describe("<LoginSub />", () => {
  test("App rendering with a player in game", () => {
    const wrapper = shallow(<AppSub playerName="Adubedat" roomName="Room1" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("App rendering with a player in Lobby", () => {
    const wrapper = shallow(<AppSub playerName="Adubedat" roomName="" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("App rendering with an unconnected user", () => {
    const wrapper = shallow(<AppSub playerName="" roomName="" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
