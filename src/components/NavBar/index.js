import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">Bubblify</a>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Bundles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Cart</a>
                    </li>
                </ul>
            </div>
        </nav>
        
    )
};

export default NavBar;