import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" to="/">
                    React Users
                </a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/users">
                                Users
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" to="/">
                                    Action
                                </a>
                                <a className="dropdown-item" to="/">
                                    Another action
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" to="/">
                                    Something else here
                                </a>
                            </div>
                        </li>
                        <li className="nav-item" />
                    </ul>
                </div>
            </div>
        </nav>
    );
}
