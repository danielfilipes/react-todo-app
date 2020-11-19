import React, {useState} from 'react';
import Todo from './Todo';

function TodoList({todos}) {
    return (
        <div>
            <h2>Lista de Tarefas:</h2>
            <ul>
                {
                    todos.map((todo) => (
                        <Todo key = {todo.id} todo = {todo} />
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList
