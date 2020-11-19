import React, {useState} from 'react'

function NewTodoComponent() {

    const [todos, setTodos] = useState([]);

    const [input, setInput] = useState('');

    const handleInputChange = event => {
        setInput(event.target.value);
    }

    const handleButtonClicked = () =>{
        addTodo(input);
        setInput('');
    }

    function addTodo(todo){
        setTodos([todo, ...todos]);
    }

    function printTodos(){
        const listOfTodos = todos.map((todo, index) => 
            <li key = {index}>{todo}</li>
        );
        return listOfTodos;
    }

    const handleSubmit = e =>{
        e.preventDefault();
    }

    return (
        <div>
            <h1>Lista de Afazeres</h1>
            <form onSubmit = {handleSubmit}>
                <input 
                    type = "text" 
                    onChange = {handleInputChange} 
                    name = "inputTodoValue"
                    placeholder = "Add a Todo" 
                    value = {input}
                />
                <button onClick = {handleButtonClicked}>Add Todo</button>
            </form>
            <ul>{printTodos()}</ul>
        </div>
    )
}

export default NewTodoComponent
