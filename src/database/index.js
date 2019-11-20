import axios from "axios";
import admin from "firebase-admin";
import Game from "../server/game/class";
if (process.env.NODE_ENV !== "production") require("dotenv/config");

admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url:
      process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
  }),
  databaseURL: "https://tetris-orange-5a1ea.firebaseio.com"
});

const db = admin.database();
const ref = db.ref().child("node-client");
const highScoresRef = ref.child("highScores");

export const updateHighScoresInDb = highScores => {
  highScoresRef.update(highScores);
};

export const getHighScoresFromDb = async () => {
  const response = await axios.get(
    "https://tetris-orange-5a1ea.firebaseio.com/node-client/highScores.json"
  );
  if (response.data) Game.highscores = response.data;
};
