import { connect } from "react-redux";
import NextPiecesSub from "./subcomponent";

const mapStateToProps = state => {
  return {};
};

const NextPieces = connect(
  mapStateToProps,
  null
)(NextPiecesSub);

export default NextPieces;
