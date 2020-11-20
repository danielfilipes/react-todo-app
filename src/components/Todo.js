import React, {useState} from 'react'
import TodoForm from './TodoForm';

function Todo({todo, removeTodo, checkTodo}) {

    function handleRemoveClick(){
        removeTodo(todo.id);
    }

    function handleCheckTodo(){
        // console.log(todo.id);
        checkTodo(todo.id);
    }

    return(
        <div>
            <input 
                onClick = {handleCheckTodo} 
                type = "checkbox"  
            />
            <div style = { todo.completed ? {textDecorationLine: "line-through"} : {textDecorationLine: "none"}} >
                {todo.value}
            </div>
            <button onClick = {handleRemoveClick}>X</button>
        </div>
    );
}

export default Todo
