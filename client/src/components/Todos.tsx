import React from "react";
import { TodoContext } from "../context/tasksContext";
import { ITodo } from "../@types/types.todo";

interface TodosProps{
  data: ITodo[]
}

export function Todos({data}: TodosProps) {
  return (
    <ul>
      {data?.length ? (
        data.map((todo) => <li>{todo.title}</li>)
      ) : (
        <p style={{ color: "red" }}>No posee tareas</p>
      )}
    </ul>
  );
}
