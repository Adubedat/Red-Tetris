import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { App } from "./App";

describe("<App />", () => {
  test("test App rendering with a player in game", () => {
    const wrapper = shallow(<App playerName="Adubedat" currentRoom="Room1" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("test App rendering with a player in Lobby", () => {
    const wrapper = shallow(<App playerName="Adubedat" currentRoom="" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("test App rendering unconnected user", () => {
    const wrapper = shallow(<App playerName="" currentRoom="" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
