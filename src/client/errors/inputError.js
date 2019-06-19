import { isAlphaNumeric } from "../../utils/utils";

const inputError = value => {
  const error = {
    boolean: null,
    message: ""
  };
  if (value && !isAlphaNumeric(value)) {
    error.message = "Input may only contain alpha-numeric characters";
  } else if (value.length > 12) {
    error.message = "Input should be under 12 alpha-numeric characters";
  }
  if (error.message) error.boolean = true;
  return error;
};

export default inputError;
