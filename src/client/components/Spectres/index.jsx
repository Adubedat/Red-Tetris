import { connect } from "react-redux";
import SpectreSub from "./subcomponent";

const mapStateToProps = state => {
  return { spectres: state.spectres };
};

const Spectre = connect(
  mapStateToProps,
  null
)(SpectreSub);

export default Spectre;
