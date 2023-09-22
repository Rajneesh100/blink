import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDJPWK76soKCJASGoSJkqODmBVyNd_gXuA",
  authDomain: "team-meet-2e2a8.firebaseapp.com",
  projectId: "team-meet-2e2a8",
  storageBucket: "team-meet-2e2a8.appspot.com",
  messagingSenderId: "626525208876",
  appId: "1:626525208876:web:569fea0cb9aff959a72c89",

};

// const firebaseConfig = {
//   apiKey: "AIzaSyCdmVY9YjbpMGv-YEvoNMC9oRejQ-PsvuM",
//   authDomain: "blink-bc5ef.firebaseapp.com",
//   projectId: "blink-bc5ef",
//   storageBucket: "blink-bc5ef.appspot.com",
//   messagingSenderId: "634405456452",
//   appId: "1:634405456452:web:51c9843a08b523ec17ca11",
//   measurementId: "G-XLPL4338WJ"
// };



const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

export const db = app.firestore();
