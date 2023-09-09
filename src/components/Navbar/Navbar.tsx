import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul style={{ listStyleType: 'none' }}>
            <li>
                <Link to="/" style={{ color: 'grey' }}>
                    Home
                </Link>
                &nbsp;&nbsp;
                <Link to="/custom-list" style={{ color: 'grey' }}>
                    Custom List
                </Link>
            </li>
        </ul>
    );
};

export default Navbar;