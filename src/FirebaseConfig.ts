import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

const config = {
  apiKey: "AIzaSyDmgVa9G4ZjUxfikjQ-GedoLu-A0bPRM14",
  authDomain: "toptal-a70b0.firebaseapp.com",
  databaseURL: "https://toptal-a70b0-default-rtdb.firebaseio.com",
  projectId: "toptal-a70b0",
  storageBucket: "toptal-a70b0.appspot.com",
  messagingSenderId: "95283398379",
  appId: "1:95283398379:web:0190bc2118fab8715920ae",
  measurementId: "G-1XK2V739CP",
};

console.log("config", config);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
