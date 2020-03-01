import React, { useState, useEffect } from "react";
import { fire } from "./firebase";
import {
  fetchFirestore,
  handleRemove,
  handleSubmit
} from "./utils/handleFirebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fire.onSnapshot(res => fetchFirestore(res, setTodos));
  }, []);

  return (
    <>
      <h1>Task Manager</h1>
      {todos.length > 0 &&
        todos.map((t, i) => (
          <div key={i} onClick={() => handleRemove(t)}>
            {t}
          </div>
        ))}
      <form onSubmit={e => handleSubmit(e, newTask)}>
        <input type="text" onChange={e => setNewTask(e.target.value)} />
        <button type="submit">ADD</button>
      </form>
    </>
  );
}

export default App;
