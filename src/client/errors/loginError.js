import { isAlphaNumeric } from "../../utils/utils";

const loginError = value => {
  if (value && !isAlphaNumeric(value)) {
    return "playerName may only contain alpha-numeric characters";
  } else if (value.length > 12) {
    return "playerName should be under 12 alpha-numeric characters";
  }
  return "";
};

export default loginError;
