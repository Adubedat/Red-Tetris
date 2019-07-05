import React from "react";
import configureMockStore from "redux-mock-store";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ConnectedApp, { App } from ".";

const mockStore = configureMockStore();
const initialState = {
  playerName: "",
  currentRoom: ""
};
const store = mockStore(initialState);

describe("<App />", () => {
  test("App rendering with store without crashing", () => {
    const wrapper = shallow(<ConnectedApp store={store} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("App rendering with a player in game", () => {
    const wrapper = shallow(<App playerName="Adubedat" currentRoom="Room1" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("App rendering with a player in Lobby", () => {
    const wrapper = shallow(<App playerName="Adubedat" currentRoom="" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("App rendering with an unconnected user", () => {
    const wrapper = shallow(<App playerName="" currentRoom="" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
