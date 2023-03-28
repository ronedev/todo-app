import React from "react";
import "./App.css";
import AddModal from "./components/AddModal";
import { Todos } from "./components/Todos";
import { withSearch } from "./components/WithSearch";
import { TodoContext } from "./context/tasksContext";
import useModal from "./hook/useModal";

function App() {
  
  const {isOpened, toggle} = useModal()
  const todosContext = React.useContext(TodoContext);
  const todos = todosContext?.todos

  const TodosWithSearch = withSearch(Todos, todos)
  return (
    <div className="App">
      {isOpened && <AddModal />}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h2>Todo list</h2>
        <button onClick={toggle}>Add task</button>
      </div>
      <TodosWithSearch />
    </div>
  );
}

export default App;
