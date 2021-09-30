import React, { useState } from 'react';
import '../App.css';

function saveDate() {
    const lists = document.querySelector("li");
    let toList = [];

    lists.forEach(list => {
        toList.push(list.innerText);
    });
    localStorage.setItem("toList", JSON.stringify(toList));
}

//MEMOを追加

function TodoList() {

    const initialState = [
    ]

    const [todos, setTodo] = useState(initialState);

    const [task, setTask] = useState('')

    const handleNewTask = (event) => {
        setTask( event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(task === '')return
        setTodo(todos => [...todos,{ task, isCompleted: false}])
        setTask('')
        saveDate();
    }

    const handleRemoveTask = index => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodo(newTodos)
    }


    return (
        <div>
            <h1>MEMO</h1>
            <form onSubmit={ handleSubmit } className="form">
                memo : <input value={ task }
                placeholder="メモ" onChange={handleNewTask} />
            </form>
            <ul>
                { todos.map((todo, index) => ( 
                <li key={ index }>{ todo.task } <span onClick={ () => handleRemoveTask(index)}>✅</span></li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;