import React, { useEffect, useState } from "react";


export const LoginContext = React.createContext();

const LoginContextProvider = (props) => {
    const [user, setUser] = useState(null);

    const login = (user) => {
        setUser(user.username);
        localStorage.setItem("todo_login", JSON.stringify(user))
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("todo_login");
    };


    useEffect(() => {
        const userNameLoginForm = localStorage.getItem("todo_login");
        if (userNameLoginForm) {
            const userObject = JSON.parse(userNameLoginForm);
            //console.log(userObject)
            setUser(userObject.username);
        }

    }, []);

    const methods = {
        login, logout, user
    }

    return (
        <LoginContext.Provider value={methods}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider;