import React, {useState} from 'react'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);
  
  const addTodo = todo => {
    setTodos([todo, ...todos]);
  };

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id));
  };

  function checkTodo(id){
    // setTodos(
    //   todos.map((todo) => {
    //     if(todo.id === id){
    //       return {
    //         ...todo,
    //         completed: !todo.completed
    //       }
    //     }
    //   })
    // )

    let auxTodo = todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    });
    setTodos(auxTodo);
  }

  return (
    <div className="todo-app">
      <TodoForm onSubmit = {addTodo} />
      <TodoList 
        todos = {todos} 
        removeTodo = {removeTodo} 
        checkTodo = {checkTodo}
      />
    </div>
  );
}

export default App;
