import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ReactUsers = () => {
    // eslint-disable-next-line no-unused-vars
    const [users, setUser] = useState([]);
    console.log(users);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const loadUsers = async () => {
        const result = await axios.get('http://localhost:3001/users');
        setUser(result.data);
    };
    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <div className="container">
            <div className="display-1">Users Data</div>
            <table className="table border shadow">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button type="button" className="btn btn-primary">
                                    View
                                </button>
                                <button type="button" className="btn btn-outline-primary">
                                    Edit
                                </button>
                                <button type="button" className="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
                <tbody>{users.map((user) => console.log(user))}</tbody>
            </table>
        </div>
    );
};
export default ReactUsers;
