import { useState, useEffect } from "react";

function Home() {
    const [users, setUsers] = useState([]);

    const fetchUserData = () => {
        fetch("http://localhost:4000/api/allusers")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    };

    useEffect(() => {
        fetchUserData()
    }, []);

    return (
        <div className="app-add-form">
        <h1>Главная страница приложения</h1>
        <div>
            {users.length > 0 && (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>{user.first_name}{user.last_name}{user.email}</li>
                    ))}
                </ul>
            )}
        </div>

        </div>
    );
}

export default Home;