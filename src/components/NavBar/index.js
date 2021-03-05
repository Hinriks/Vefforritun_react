import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark box-shadow">
            <div className="container">
                <a className="navbar-brand" href="/">Bubblify</a>
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/bubbles"
                            className="nav-link">Products</NavLink>
                        {/* <a className="nav-link" href="/">Products</a> */}
                    </li>

                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/bundles"
                            className="nav-link">Bundles</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/about"
                            className="nav-link">About us </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/cart"
                            className="nav-link">Cart </NavLink>
                    </li>
                </ul>
            </div >
        </nav >

    )
};

export default NavBar;