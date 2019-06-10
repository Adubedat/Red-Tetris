export const CONNECT_USER = "CONNECT_USER";

export function connectUser(username) {
  return { type: CONNECT_USER, username };
}
