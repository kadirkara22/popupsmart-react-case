import React, { useContext, useState } from 'react'
import { Navigate, redirect, useLocation } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext';
import "./LoginPage.css"
const LoginPage = () => {
    const { user, login } = useContext(LoginContext);
    const [username, setUsername] = useState("");

    const { pathname } = useLocation();

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        return username !== "" ? login({ id: Math.random() * 10, username }) : ""
    }

    if (user && pathname === "/login") return <Navigate to="/todos" />
    if (user && pathname === "/") return <Navigate to="/todos" />
    return (
        <form className="AppForm" onSubmit={handleSubmitLogin}>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <input type="text" className="inputLogin" onChange={(e) => {
                        setUsername(e.target.value)
                    }} name="userName" id="userName" placeholder="Username" />
                </div>
                <button type="submit" >Login</button>

            </div>
        </form>
    )
}

export default LoginPage
