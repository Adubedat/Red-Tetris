const host = "0.0.0.0";

const port = "5000";

const localHost = "http://" + host + ":" + port;

const herokuHost = "https://desolate-meadow-30697.herokuapp.com/";

const params = {
  API_URL: process.env.NODE_ENV === "production" ? herokuHost : localHost
};

module.exports = params;
