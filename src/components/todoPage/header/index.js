import React, { useContext } from 'react'
import { LoginContext } from '../../../contexts/LoginContext';
import "./Header.css"
const Header = () => {
    const { user, logout } = useContext(LoginContext);



    return (
        <div className="headerContainer">
            <div className="user">{user}</div>
            <button type="submit" className="logout" onClick={logout}><span>Log Out</span></button>
        </div>
    )
}

export default Header
