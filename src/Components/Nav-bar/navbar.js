import React from 'react';
import './navbar.css';
import logo from '../Images/logo.d190050ad47a0a0f8b83.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCog, faEnvelope, faBox, faTag, faGift, faStore } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Vetri Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/">
                                    <FontAwesomeIcon icon={faHome} className="nav-icon" /> Home
                                </a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="/about-us">
                                    <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" /> About Us
                                </a>
                            </li>
                         
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon={faStore} className="nav-icon" /> Products
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Vetri Fresh</a></li>
                                    <li><a className="dropdown-item" href="/">Vetri Payslip</a></li>
                                    <li><a className="dropdown-item" href="/">Vetri Cabs</a></li>
                                    <li><a className="dropdown-item" href="/">Vetri Invoice</a></li>
                                    <li><a className="dropdown-item" href="/">Vetri Messaging</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon={faCog} className="nav-icon" /> Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Web Development</a></li>
                                    <li><a className="dropdown-item" href="/">Mobile Development</a></li>
                                    <li><a className="dropdown-item" href="/">Software Development</a></li>
                                    <li><a className="dropdown-item" href="/">Digital Marketing</a></li>
                                    <li><a className="dropdown-item" href="/">Software Testing</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    <FontAwesomeIcon icon={faEnvelope} className="nav-icon" /> Contact
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn custom-btn">Enquiry</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
