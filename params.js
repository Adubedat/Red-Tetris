const host = "0.0.0.0";

const port = "5000";

const localHost = "http://" + host + ":" + port;

const herokuHost = "https://tetris-orange.herokuapp.com/";

const params = {
  API_URL: process.env.NODE_ENV === "production" ? herokuHost : localHost,
  host,
  port
};

module.exports = params;
