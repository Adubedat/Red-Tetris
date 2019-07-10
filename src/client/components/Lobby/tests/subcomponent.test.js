import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LobbySub from "../subcomponent";

describe("<LobbySub>", () => {
  test("should render without crashing", () => {
    const wrapper = shallow(<LobbySub />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
