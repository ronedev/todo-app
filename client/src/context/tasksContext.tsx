import React from "react";
import { ITodo, TodoContextType } from "../@types/types.todo";

interface Props {
  children: React.ReactNode;
}

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<Props> = ({ children }) => {
    const [todos, setTodos] = React.useState<ITodo[]>([
        {
          id: 1,
          title: 'post 1',
          description: 'this is a description',
          status: false,
        },
        {
          id: 2,
          title: 'post 2',
          description: 'this is a description',
          status: true,
        },
      ])
      
      return <TodoContext.Provider value={{todos}}>{children}</TodoContext.Provider>;
};

export default TodoProvider