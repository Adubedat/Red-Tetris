import { connect } from "react-redux";
import NextPiecesSub from "./subcomponent";

const mapStateToProps = state => ({
  nextPiece: state.player.nextPiece
});

const NextPieces = connect(
  mapStateToProps,
  null
)(NextPiecesSub);

export default NextPieces;
