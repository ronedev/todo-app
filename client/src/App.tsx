import React from "react";
import "./App.css";
import AddModal from "./components/AddModal";
import { TodoContext } from "./context/tasksContext";
import useModal from "./hook/useModal";

function App() {
  const todosContext = React.useContext(TodoContext);
  const {isOpened, toggle} = useModal()
  console.log(todosContext);
  return (
    <div className="App">
      {isOpened && <AddModal />}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h2>Todo list</h2>
        <button onClick={toggle}>Add task</button>
      </div>
      <ul>
        {todosContext?.todos.length ? (
          todosContext.todos.map((todo) => <li>{todo.title}</li>)
        ) : (
          <p style={{ color: "black" }}>No posee tareas</p>
        )}
      </ul>
    </div>
  );
}

export default App;
