import axios from "axios";
import React, { useEffect, useState } from "react";


export const TodoContext = React.createContext();


const TodoContextProvider = (props) => {
    const [todoList, setTodoList] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('https://63271a1d5731f3db99531fe2.mockapi.io/todos');
            const data = await response.json()
            setTodoList(data)

        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [])


    const todoCreate = (todo) => {
        console.log(todo.todo + "con")
        const newTodo = {
            content: todo.todo,
            isCompleted: false,
            id: todo.id,
        }
        setTodoList([newTodo, ...todoList])

    }

    const handleClickDelete = (id) => {
        const data = todoList.filter(item => item.id !== id)
        setTodoList(data)

    }
    const handleClickEdit = (editTodo) => {
        setTodoList(todoList.map((todo) => todo.id === editTodo.id ? editTodo : todo))
        console.log(todoList)

    }

    const handleCheckboxChange = (id) => {
        const todolistCheck = todoList.map(item => item.id === id ? {
            ...item, isCompleted: true
        } : item)

        setTodoList(todolistCheck)
    }
    console.log(todoList)
    const methods = {
        todoList, todoCreate, handleClickDelete, handleClickEdit, handleCheckboxChange
    }

    return (
        <TodoContext.Provider value={methods}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;