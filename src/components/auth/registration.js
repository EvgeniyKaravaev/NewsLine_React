import AppInfo from '../app_info/app-info';

import { useState } from 'react';

async function postUser(credentials) {
    return fetch('http://localhost:4000/api/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

function Registration() {

    const [first_name, setFirstName] = useState('');

    const [last_name, setLastName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const param = await postUser({
            first_name,
            last_name,
            email,
            password
        });
        console.log(param);
    }

    return (
        <div className="App">
            <AppInfo title={"Зарегистрироваться"} />

            <form onSubmit={handleSubmit}>
                <ul>
                    <p>Имя</p>
                    <input type="first_name" onChange={e => setFirstName(e.target.value)} />
                </ul>
                <ul>
                    <p>Фамилия</p>
                    <input type="last_name" onChange={e => setLastName(e.target.value)} />
                </ul>
                <ul>
                    <p>Email</p>
                    <input type="email" onChange={e => setEmail(e.target.value)} />
                </ul>
                <ul>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </ul>
                <ul>
                    <button type="submit">Регистрация</button>
                </ul>
            </form>
        </div>
    );
}


export default Registration;