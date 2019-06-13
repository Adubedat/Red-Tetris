export const CONNECT_USER = "CONNECT_USER";

export const HASH_ERROR = "HASH_ERROR";

export const connectUser = username => ({ type: "CONNECT_USER", username });

export const setHashError = value => ({ type: "HASH_ERROR", hashError: value });
