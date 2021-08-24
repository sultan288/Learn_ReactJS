import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function Delete() {
    const [users, setUsers] = useContext(UserContext);
    const { id } = useParams();

    const deleteUser = (id) => {
        const user = users.filter((user) => user.id != id);
        setUsers(user);
    };

    return (
        <div>
            <h1>Are you Sure?</h1>
            <Link to="/">
                <button className="button1">Cancel</button>
                <button onClick={() => deleteUser(id)} className="button3">
                    Delete
                </button>
            </Link>
        </div>
    );
}
