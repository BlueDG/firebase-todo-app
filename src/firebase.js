import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBCSq8cFg7TfxNiuCDgih8nqwCddronCFI",
  authDomain: "todo-list-c84ea.firebaseapp.com",
  databaseURL: "https://todo-list-c84ea.firebaseio.com",
  projectId: "todo-list-c84ea",
  storageBucket: "todo-list-c84ea.appspot.com",
  messagingSenderId: "981224174699",
  appId: "1:981224174699:web:40c8b0690eaa2866482d2e",
  measurementId: "G-624FZ8M2NF"
};

firebase.initializeApp(config);

export const fire = firebase
  .firestore()
  .collection("todos")
  .doc("data");

export default firebase;
