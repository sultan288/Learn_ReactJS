import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { UserContext } from './UserContext';

export default function Home() {
    const [users, setUsers] = useContext(UserContext);
    // console.log(users);
    return (
        <div>
            <h1>Home Page</h1>
            <table>
                <caption>User Details</caption>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr>
                            <th>{user.id}</th>
                            <th>{user.name}</th>
                            <th>{user.position}</th>
                            <th>{user.salary}</th>
                            <th>
                                <button className="button1">View</button>
                                <button className="button2">Edit</button>
                                <Link to={'/delete/' + user.id}>
                                    <button className="button3">Delete</button>
                                </Link>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
