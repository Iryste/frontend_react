import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;