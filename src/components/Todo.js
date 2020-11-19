import React, {useState} from 'react'
import TodoForm from './TodoForm';

function Todo({todo}) {
    return(
        <div>
            <input type = "checkbox" />
            <li>{todo.value}</li>
            <button>X</button>
        </div>
    );
}

export default Todo
