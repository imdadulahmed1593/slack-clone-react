// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDenoAYO_dLLDZrw5eQBXSAQnh1YFPN2pU",
  authDomain: "slack-clone-react-b09cf.firebaseapp.com",
  databaseURL: "https://slack-clone-react-b09cf.firebaseio.com",
  projectId: "slack-clone-react-b09cf",
  storageBucket: "slack-clone-react-b09cf.appspot.com",
  messagingSenderId: "589060476821",
  appId: "1:589060476821:web:d25e34296da8733857b09c",
  measurementId: "G-247C5C2GLM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
