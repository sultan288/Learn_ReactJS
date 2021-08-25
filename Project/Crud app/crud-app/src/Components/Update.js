import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './UserContext';
export default function Update() {
    const [users, setUsers] = useContext(UserContext);
    const { id } = useParams();

    const user = users.filter((user) => user.id == id);

    const [name, setName] = useState(user[0].name);
    const [position, setPosition] = useState(user[0].position);
    const [salary, setSalary] = useState(user[0].salary);

    const UpdateName = (e) => {
        setName(e.target.value);
        const updatedName = name;
        user[0].name = updatedName;
    };
    const UpdatePosition = (e) => {
        setPosition(e.target.value);
        const updatedPosition = position;
        user[0].position = updatedPosition;
    };
    const UpdateSalary = (e) => {
        setSalary(e.target.value);
        const updatedSalary = salary;
        user[0].salary = updatedSalary;
    };
    const UpdateUser = (e) => {
        e.preventDefault();
        setUsers([...users]);
    };

    return (
        <div>
            <form className="uform">
                <div className="uid">ID No. {user[0].id}</div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder={user[0].name}
                    onChange={UpdateName}
                ></input>

                <label>Position</label>
                <input
                    type="text"
                    name="position"
                    value={position}
                    placeholder={users[0].position}
                    onChange={UpdatePosition}
                ></input>

                <label>Salary</label>
                <input
                    type="text"
                    name="salary"
                    value={salary}
                    placeholder={user[0].salary}
                    onChange={UpdateSalary}
                ></input>

                <Link to="/">
                    <button onSubmit={() => UpdateUser} type="submit" className="button ubutton">
                        Update User
                    </button>
                    <button className="button bhbutton">Back to Home</button>
                </Link>
            </form>
        </div>
    );
}
