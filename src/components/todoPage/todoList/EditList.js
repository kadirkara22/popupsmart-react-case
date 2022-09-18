import React, { useContext, useState } from 'react'
import { TodoContext } from '../../../contexts/TodoContext';

const EditList = ({ show, todoItem, onClose, setShow }) => {

    const { todoCreate } = useContext(TodoContext);
    const [todo, setTodo] = useState(todoItem);
    if (!show) {
        return null
    }
    const handleSubmitTodo = () => {
        const newTodo = todo.length > 2 ? todoCreate({ todo }) : ""
        setTodo("")
        return newTodo

    }
    console.log(todoItem)
    console.log(todo)
    return (
        <div>
            {
                <div>
                    <div className="todoForm">
                        <input type="text"
                            autoFocus
                            value={todo}
                            onChange={(e) => { setTodo(e.target.value) }}
                        />
                    </div>
                    <div className="edit-delete">
                        <button type="submit" onClick={() => handleSubmitTodo}>Edit</button>
                        <button className="close" onClick={onClose}>Close</button>

                    </div>
                </div>

            }


        </div>
    )
}

export default EditList
