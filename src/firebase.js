import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBCSq8cFg7TfxNiuCDgih8nqwCddronCFI",
  authDomain: "todo-list-c84ea.firebaseapp.com",
  databaseURL: "https://todo-list-c84ea.firebaseio.com",
  projectId: "todo-list-c84ea"
};

firebase.initializeApp(config);

export const fire = firebase
  .firestore()
  .collection("todos")
  .doc("data");

export default firebase;
