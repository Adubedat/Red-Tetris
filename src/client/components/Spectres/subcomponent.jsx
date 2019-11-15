import React from "react";
import PropTypes from "prop-types";
import BoardSub from "../Board/subcomponent";
import { StyledContainer } from "./styles";

const SpectreSub = ({ spectres }) => {
  return (
    <StyledContainer>
      {spectres.map((spectre, index) => (
        <div key={index}>
          <BoardSub
            board={spectre.board}
            playerName={spectre.playerName}
            isSpectre={true}
          />
          <p style={{ textAlign: "center" }}>{spectre.playerName}</p>
        </div>
      ))}
    </StyledContainer>
  );
};

SpectreSub.propTypes = {
  spectres: PropTypes.array.isRequired
};

export default SpectreSub;
