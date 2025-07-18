import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Image } from 'react-bootstrap';
import { logout } from '../../actions/userActions';
import { IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineShoppingCart } from 'react-icons/md';
import Search from './Search';
import Navbar from './Navbar'; 

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [wishlistClicked, setWishlistClicked] = useState(false);
    const { isAuthenticated, user } = useSelector(state => state.authState);
    const { items: cartItems } = useSelector(state => state.cartState);
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistCount = wishlist.length;

    const logoutHandler = () => {
        dispatch(logout());
    };

    const handleWishlistClick = () => {
        setWishlistClicked(!wishlistClicked);
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top custom-header">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link to="/" className="navbar-brand">
                    <img width="90px" alt='logo' src="/images/logo.png" />
                </Link>
                {/* Navbar Component */}
                <Navbar />
                {/* Search Bar */}
                <div className="search-bar">
                    <Search />
                </div>
                {/* Icons */}
                <div className="icons d-flex align-items-center">
                    {isAuthenticated ? (
                        <Dropdown className='d-inline'>
                            <Dropdown.Toggle variant='default text-black pr-5' id='dropdown-basic'>
                                <figure className='avatar avatar-nav'>
                                    <Image src={user.avatar ?? './images/default_avatar.png'} />
                                </figure>
                                <span>{user.name}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {user.role === 'admin' && 
                                    <Dropdown.Item
                                        onClick={() => navigate('admin/dashboard')}
                                        className='text-dark'
                                    >
                                        Dashboard
                                    </Dropdown.Item>
                                }
                                <Dropdown.Item
                                    onClick={() => navigate('/myprofile')}
                                    className='text-dark'
                                >
                                    Profile
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => navigate('/orders')}
                                    className='text-dark'
                                >
                                    Orders
                                </Dropdown.Item>
                                {/* Add Report to dropdown */}
                                <Dropdown.Item
                                    onClick={() => navigate('/admin/reports')}
                                    className='text-dark'
                                >
                                    Report
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={logoutHandler}
                                    className='text-danger'
                                >
                                    Logout
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                        <Link to="/login" className="ubique-button">Login</Link>
                    )}
                    <Link to="/wishlist" className="wishlist-icon" onClick={handleWishlistClick}>
                        <IoMdHeartEmpty />
                        <span className="wishlist-count">{wishlistCount}</span>
                    </Link>

                    <Link to="/cart" className="cart-icon">
                        <MdOutlineShoppingCart />
                        <span className="cart-count">{cartItems.length}</span>
                    </Link>

                    {/* Add Report link here */}
                    <Link to="/admin/Report" className="report-link mx-3">
                        <i className="fa fa-file-alt"></i> Report
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
