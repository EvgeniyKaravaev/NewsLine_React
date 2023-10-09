
import './form-example.scss';
import { useState } from 'react';

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

function FormExample({setToken}) {

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
            <h3>Авторизуйтесь</h3>

            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input type="email" onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Авторизация</button>
                </div>
            </form>
        </div>
    );
}

export default FormExample;