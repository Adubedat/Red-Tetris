import React from "react";
import thunk from "redux-thunk";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import { Login } from "./index";

// const mockStore = configureStore([thunk]);
// const initialState = {
//   playerName: "",
//   currentRoom: ""
// };
// const store = mockStore(initialState);
// const props = {
//   newPlayer: jest.fn()
// };

const props = {
  newPlayer: jest.fn()
};

const wrapper = shallow(<Login {...props} />);
console.log(toJson(wrapper));

describe("<Login />", () => {
  test("test Login rendering without crashing", () => {
    const component = wrapper;

    expect(toJson(component)).toMatchSnapshot();
  });
  // test("newPlayer action", () => {
  //   const component = wrapper;

  //   component.props().newPlayer("test");
  //   expect(store.getActions()).toMatchSnapshot();
  // });
});
