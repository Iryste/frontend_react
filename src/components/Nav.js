import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
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
            </ul>
        </>
    );
};

export default Nav;