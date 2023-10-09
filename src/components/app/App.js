import './App.scss';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../home/home';
import Login from '../auth/login';

function App() {

  const [token, setToken] = useState();

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
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
