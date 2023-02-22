import React from 'react';
import { Link } from 'react-router-dom';
import { FaKey, FaLock, FaUserCircle } from "react-icons/fa";
import './Login.css'

const Login = () => {
    return (
        <div className='container'>
            <div className='box'>
                <div className='cover'></div>
                <div className='shadow'></div>
                <div className='content'>
                    <div className='form'>
                        <h3 className='logo'>
                            <FaKey className='icon' />
                        </h3>
                        <h2>Sign In</h2>
                        <div className='inputBox'>
                            <input type='text' required />
                            <FaUserCircle className='icon' />
                            <span>Username</span>
                        </div>
                        <div className='inputBox'>
                            <input type='password' required />
                            <FaLock className='icon' />
                            <span>Password</span>
                        </div>
                        <div className='links'>
                            <a href='/'>Forgot Password</a>
                            <a href='/'>Signup</a>
                        </div>
                        <div className='inputBox'>
                            <input type='submit' value='Login' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;