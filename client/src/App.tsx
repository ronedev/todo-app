import React from 'react'
import './App.css'
import { TodoContext } from './context/tasksContext'

function App() {
  const todos = React.useContext(TodoContext)
  console.log(todos)
  return (
    <div className="App">
      <h2>Todo list</h2>
      <ul>
        <li></li>
      </ul>
    </div>
  )
}

export default App
