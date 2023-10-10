import AppInfo from '../app_info/app-info';

import { useState } from 'react';

function Registration() {

    const [first_name, setFirstName] = useState('');

    const [last_name, setLastName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const onnAdd = async () => {
        await fetch('http://localhost:4000/api/create', {
            method: 'POST',
            body: JSON.stringify({
                first_name: first_name,
                last_Name: last_name,
                email: email,
                password: password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div className="App">
            <AppInfo title={"Зарегистрироваться"} />

            <form onSubmit={onnAdd}>
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