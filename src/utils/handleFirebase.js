import firebase, { fire } from "../firebase";

export async function fetchFirestore(res, setTodos) {
  try {
    const snapshot = await res.data().tasks;
    setTodos(snapshot);
  } catch (err) {
    throw new Error(err);
  }
}

export function handleSubmit(e, task) {
  e.preventDefault();
  e.target.reset();
  fire.update({
    tasks: firebase.firestore.FieldValue.arrayUnion(task)
  });
}

export function handleRemove(task) {
  fire.update({
    tasks: firebase.firestore.FieldValue.arrayRemove(task)
  });
}
