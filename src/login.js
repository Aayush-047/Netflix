// import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function Login() {

    return (
        <div className='body'>
            <a className="logo" href="https://www.netflix.com/" target="_blank"><img src="https://bit.ly/2VdIFUK" alt="Netflix Logo" /></a>
            <div className="login">
                <h1 className="login__title">Login</h1>
                <div className="login__group">
                    <input className="login__group__input" type="text" required />
                    <label className="login__group__label">Email or phone number</label>
                </div>
                <div className="login__group">
                    <input className="login__group__input" type="password" required />
                    <label className="login__group__label">Password</label>
                </div>
                <div className='Navbar'>
                    <nav style={{ position: 'fixed', zIndex: 1, display: 'flex', marginLeft: 20, alignItems: 'center' }}>
                        <ul className='nav navbar-nav' style={{ display: 'contents' }}>
                            <li>
                                <Link to="/Home">
                                    <div className="navbar-header">
                                        <button className="login__sign-in" type="button" >
                                            Sign In
                                        </button>
                                    </div>
                                </Link>

                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Login;
