import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { LoginContext } from '../../contexts/LoginContext';
import { TodoContext } from '../../contexts/TodoContext';
import Loading from '../Loading';
import Header from './header';
import TodoForm from './todoForm';
import TodoList from './todoList';
import "./TodoPage.css"

const TodoPage = () => {
    const { user } = useContext(LoginContext);
    const { todoList } = useContext(TodoContext);

    const { pathname } = useLocation();

    if (!user && pathname === "/todos") return <Navigate to="/login" />
    //if (!user && pathname === "//:userid") return <Navigate to="/login" />
    return (
        <div className="todoPage">
            <Header />
            <TodoForm />
            {
                todoList ? <TodoList /> : <Loading />
            }


        </div>
    )
}

export default TodoPage
