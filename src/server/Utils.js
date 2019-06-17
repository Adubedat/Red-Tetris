export const isAlphaNumeric = str => {
  const regexp = /^[a-z0-9]+$/i;
  const found = str.match(regexp);

  return found ? true : false;
};
