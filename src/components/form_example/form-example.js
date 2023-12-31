
import './form-example.scss';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';

import Registration from '../auth/registration';

async function loginUser(credentials) {
  return fetch('http://localhost:4000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

function FormExample({ setToken }) {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
  }


  return (
    <div className="app-add-form">
      <form onSubmit={handleSubmit}>
        <ul>
          <p>Email</p>
          <input type="email" onChange={e => setEmail(e.target.value)} />
        </ul>
        <ul>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </ul>
        <ul>
          <button type="submit">Авторизация</button>
        </ul>
      </form>
    </div>
  );
}

export default FormExample;