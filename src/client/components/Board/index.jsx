import { connect } from "react-redux";
import BoardSub from "./subcomponent";

const mapStateToProps = state => {
  return { players: state.players, playerId: state.player.id };
};

const Board = connect(
  mapStateToProps,
  null
)(BoardSub);

export default Board;
