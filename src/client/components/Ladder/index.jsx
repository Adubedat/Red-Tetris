import { connect } from "react-redux";
import LadderSub from "./subcomponent";

const mapStateToProps = state => ({
  highscores: state.game.highscores
});

const Ladder = connect(
  mapStateToProps,
  null
)(LadderSub);

export default Ladder;
