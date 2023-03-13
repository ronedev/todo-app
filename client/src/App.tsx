import React from "react";
import "./App.css";
import { TodoContext } from "./context/tasksContext";

function App() {
  const todosContext = React.useContext(TodoContext);
  console.log(todosContext);
  return (
    <div className="App">
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h2>Todo list</h2>
        <button>Add task</button>
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
