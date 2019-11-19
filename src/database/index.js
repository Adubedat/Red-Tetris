import axios from "axios";
import admin from "firebase-admin";
import Game from "../server/game/class";
import serviceAccount from "../../serviceAccountKey.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
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
