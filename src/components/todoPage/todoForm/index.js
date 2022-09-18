import React, { useContext, useState } from 'react'
import { TodoContext } from '../../../contexts/TodoContext';
import "./TodoForm.css"
const TodoForm = () => {
    const { todoCreate } = useContext(TodoContext);
    const [todo, setTodo] = useState("");

    const handleSubmitTodo = () => {
        const newTodo = todo.length > 2 ? todoCreate({ id: Math.random() * 10, todo }) : ""
        setTodo("")
        return newTodo

    }

    return (
        <>
            <div className="todoForm">
                <input type="text"
                    autoFocus
                    value={todo}
                    onChange={(e) => { setTodo(e.target.value) }}
                />
                <button type="submit" onClick={handleSubmitTodo}>Ekle</button>
            </div>
        </>


    )
}

export default TodoForm
