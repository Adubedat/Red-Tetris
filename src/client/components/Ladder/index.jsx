import React from "react";
import { connect } from "react-redux";
import LadderSub from "./subcomponent";

let Ladder = () => {
  return <LadderSub />;
};

const mapStateToProps = state => {
  return {};
};

Ladder = connect(
  mapStateToProps,
  null
)(Ladder);

export default Ladder;
