import React, {useState} from 'react';
import Todo from './Todo';

function TodoList({todos, removeTodo, checkTodo}) {
    return (
        <div>
            <h2>Lista de Tarefas:</h2>
            
            {
                todos.map((todo) => (
                    <Todo 
                        key = {todo.id} 
                        todo = {todo} 
                        removeTodo = {removeTodo}
                        checkTodo = {checkTodo}
                    />
                ))
            }
        </div>
    )
}

export default TodoList
