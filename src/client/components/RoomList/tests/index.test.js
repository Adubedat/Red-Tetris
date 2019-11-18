import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import RoomList from "../index";

const mockStore = configureStore();
const initialState = {
  game: {
    rooms: [
      { roomName: "Room1", playersCount: 2 },
      { roomName: "Room2", playersCount: 3 }
    ],
    highscores: []
  },
  player: { name: "Player1" }
};
const store = mockStore(initialState);

describe("<RoomList />", () => {
  test("RoomList rendering with store without crashing", () => {
    const wrapper = shallow(<RoomList store={store} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
