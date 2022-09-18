import React, { useContext, useState } from 'react'
import { TodoContext } from '../../../contexts/TodoContext';
import EditList from './EditList';
import "./TodoList.css"
const TodoList = () => {
    const { todoList, handleClickDelete, handleCheckboxChange } = useContext(TodoContext);

    const [show, setShow] = useState(false);
    const [todoItem, setTodoItem] = useState();
    return (
        <div className="listContainer">
            {
                todoList.length > 0 && todoList.map((item, i) => (
                    <div key={i} className="listContent">
                        <div className="todolistCheck" >
                            <input type="checkbox" defaultChecked={item.isCompleted} onClick={() => handleCheckboxChange(item.id)}></input>
                            <div className="todoContent">{item.content}</div>
                        </div>
                        <div className="edit-delete">
                            <button className="edit" onClick={() => { setShow(true); setTodoItem(item) }}>Edit</button>
                            <button className="delete" onClick={() => handleClickDelete(item.id)}>Delete</button>
                        </div>
                    </div>
                ))

            }
            <EditList show={show} todoItem={todoItem} onClose={() => setShow(false)} />

        </div>
    )
}

export default TodoList
