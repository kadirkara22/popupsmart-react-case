
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import LoginPage from './components/loginPage';
import TodoPage from './components/todoPage';
import LoginContextProvider from './contexts/LoginContext';
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <LoginContextProvider>
      <TodoContextProvider>
        <div className="App">
          <Router>
            <div>
              <Routes>
                <Route path="/login" element={<LoginPage />}>
                </Route>
                <Route path="/todos" element={<TodoPage />}>
                </Route>
                <Route path="/" element={<LoginPage />}>
                </Route>
              </Routes>
            </div>
          </Router>
        </div>
      </TodoContextProvider>
    </LoginContextProvider>
  );
}

export default App;
