import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
           <ul className="nav-menu">
            <li><Link to="/" className="no-underline">Home</Link></li>
            <li><Link to="/contact" className="no-underline">Contact</Link></li>
            <li><Link to="/about" className="no-underline">About</Link></li>
            <li><Link to="/wishlist" className="no-underline">Wishlist</Link></li>
        </ul>
        </nav>
    );
};

export default Navbar;
