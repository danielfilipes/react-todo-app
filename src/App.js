import React, {useState} from 'react'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);
  const addTodo = todo => {
    setTodos([todo, ...todos]);
  };

  return (
    <div className="todo-app">
      <TodoForm onSubmit = {addTodo} />
      <TodoList todos = {todos} />
    </div>
  );
}

export default App;
