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
        <div className="dform">
            <h1>Are you Sure?</h1>
            <Link to="/">
                <button className="cancelbutton">Cancel</button>
                <button onClick={() => deleteUser(id)} className="delbutton">
                    Delete
                </button>
            </Link>
        </div>
    );
}
