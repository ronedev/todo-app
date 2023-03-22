import React from "react";
import { TodoContext } from "../context/tasksContext";
import { ITodo } from "../@types/types.todo";

export function Todos() {
  const todosContext = React.useContext(TodoContext);
  const todos = todosContext?.todos
  return (
    <ul>
      {todos?.length ? (
        todos.map((todo) => <li>{todo.title}</li>)
      ) : (
        <p style={{ color: "black" }}>No posee tareas</p>
      )}
    </ul>
  );
}
