import { connect } from "react-redux";
import SpectreSub from "./subcomponent";

const mapStateToProps = state => {
  return { spectres: state.spectres };
};

const Spectre = connect(
  null,
  null
)(SpectreSub);

export default Spectre;
