import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Select from "../Select";

describe("<Select />", () => {
  test("Select rendering without helperText", () => {
    const wrapper = shallow(<Select />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("Select rendering with helperText", () => {
    const wrapper = shallow(<Select helperText={"helperText"} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
