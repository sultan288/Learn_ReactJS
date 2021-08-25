import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

const Create = () => {
    const [users, setUsers] = useContext(UserContext);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');

    // console.log(id);

    const createId = (e) => {
        setId(e.target.value);
        console.log(setId);
    };
    const createName = (e) => {
        setName(e.target.value);
        // console.log(setName);
    };
    const createPosition = (e) => {
        setPosition(e.target.value);
    };
    const createSalary = (e) => {
        setSalary(e.target.value);
    };

    const addUser = (e) => {
        e.preventDefault();
        setUsers([...users, { id: id, name: name, position: position, salary: salary }]);
    };

    return (
        <div>
            <form onSubmit={addUser}>
                <label>ID No.</label>
                <input
                    type="text"
                    name="id"
                    value={id}
                    placeholder="Enter ID No."
                    onChange={createId}
                ></input>

                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Enter Name."
                    onChange={createName}
                ></input>

                <label>Position</label>
                <input
                    type="text"
                    name="position"
                    value={position}
                    placeholder="Enter Position"
                    onChange={createPosition}
                ></input>

                <label>Salary</label>
                <input
                    type="text"
                    name="salary"
                    value={salary}
                    placeholder="Enter Salary"
                    onChange={createSalary}
                ></input>
                <button type="submit" className="button crbutton">
                    Create User
                </button>
                <Link to="/">
                    <button className="button bhbutton">Back to Home</button>
                </Link>
            </form>
        </div>
    );
};

export default Create;
