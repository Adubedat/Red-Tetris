import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

export const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-around;
  padding: 20px;
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 2px 60px 2px 2px;
  .player-count {
    font-size: 2vh;
    flex: 1;
    display: flex;
    align-items: flex-end;
  }
`;

export const StyledRowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
  .description {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const StyledLabel = styled.label`
  font-size: 2vh;
  padding: 0.5vh;
`;

export const StyledMenuItem = withStyles({})(MenuItem);

export const StyledDescription = styled.p`
  font-family: Verdana;
  font-size: 1.1vh;
`;

export const StyledRoomName = styled.div`
  font-size: 3vh;
`;
