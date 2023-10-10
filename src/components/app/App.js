import './App.scss';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../home/home';
import Login from '../auth/login';
import Registration from '../auth/registration';
import Token from '../util/token';

function App() {

  const { token, setToken } = Token();

  if (!token) {
    return (
      <Login setToken={setToken} />
    )
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная страница</Link>
            </li>
            <li>
              <Link to="/registration">Страница регистрации</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
