export const isAlphaNumeric = str => {
  const regexp = /^[a-zA-Z0-9]+$/i;
  const found = str.match(regexp);

  return found ? true : false;
};
