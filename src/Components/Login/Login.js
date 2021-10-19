import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../useFirebase/useAuth';
import './Login.css';
const Login = () => {
    const {error, logInInput} = useAuth();
    return (
        <div className="login-container rgs-from">
            <div className='registation-from'>
            <h1>Please Login</h1>
            <input type="email" placeholder="type your email"  required />
            <br />
            <input type="password" placeholder="type your pass" required />
            <br />
            <button onClick={logInInput} className='mt-5'>Log In</button>
            <Link to="profile">
                <p className='text-danger'>{error}</p>
            <p>creat an accoutn</p>
            </Link>
            </div>
            <br />
            <br />
            <div className='mb-5'></div>
        </div>
    );
};

export default Login;