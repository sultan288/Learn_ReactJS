import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function Read() {
    const [users, setUsers] = useContext(UserContext);
    const { id } = useParams();

    const user = users.filter((user) => user.id == id);
    console.log(user);
    return (
        <div className="read">
            <h1>ID No: {user[0].id}</h1>
            <h2>Name: {user[0].name}</h2>
            <h2>Position: {user[0].position}</h2>
            <h2>Salary: {user[0].salary}/=</h2>
            <Link to="/">
                <button className="button rbhbutton">Back to Home</button>
            </Link>
        </div>
    );
}
