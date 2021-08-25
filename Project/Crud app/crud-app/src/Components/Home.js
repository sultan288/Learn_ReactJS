import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/Home.module.css';
import { UserContext } from './UserContext';

export default function Home() {
    const [users, setUsers] = useContext(UserContext);
    // console.log(users);
    return (
        <div>
            <div className={styles.ttbutton}>Users Data</div>
            <Link to="/create">
                <button className="button crbutton">Create User</button>
            </Link>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <th className={styles.th1}>Id</th>
                        <th className={styles.th1}>Name</th>
                        <th className={styles.th1}>Position</th>
                        <th className={styles.th1}>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.position}</td>
                            <td>{user.salary}</td>
                            <td>
                                <Link to={'/read/' + user.id}>
                                    <button className={styles.button}>Read</button>
                                </Link>
                                <Link to={'/update/' + user.id}>
                                    <button className="button2 button">Update</button>
                                </Link>
                                <Link to={'/delete/' + user.id}>
                                    <button className="button3 button">Delete</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
