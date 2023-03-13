import React from "react";
import { ITodo, TodoContextType } from "../@types/types.todo";
import { useLocalStorage } from "../hook/useLocalStorage";

interface Props {
  children: React.ReactNode;
}

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<Props> = ({ children }) => {
    const [todos, setTodos] = useLocalStorage('tasks', [])
      
      return <TodoContext.Provider value={{todos}}>{children}</TodoContext.Provider>;
};

export default TodoProvider