import React, { useState, useEffect } from "react";
import "./css/App.css";
import { fire } from "./firebase";
import {
  Title,
  Input,
  Container,
  Button,
  Wrapper,
  Task,
  Main,
  Background
} from "./components/text";
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
      <Background>
        <Title>Task Manager</Title>
        <Main>
          {todos.length > 0 &&
            todos.map((t, i) => (
              <Wrapper key={i} onClick={() => handleRemove(t)}>
                <Task>-> {t}</Task>
              </Wrapper>
            ))}
        </Main>
        <form onSubmit={e => handleSubmit(e, newTask)}>
          <Container>
            <Input
              type="text"
              required
              onChange={e => setNewTask(e.target.value)}
            />
            <Button type="submit">ADD</Button>
          </Container>
        </form>
      </Background>
    </>
  );
}

export default App;
