import React from 'react';
import useAuth from '../../useFirebase/useAuth';
import './Profile.css';

const Profile = () => {
    const { SignInGoogle, error, handleRegistation, handlepasswordCheng, handleEmailCheng } = useAuth();
    return (
        <div className="login-container rgs-from">

            <div className='registation-from'>
            <form onSubmit={handleRegistation}>
            <input type="text" placeholder="name"/> <br />
            <input type="text" placeholder="last name"/> 
            <br />
            <input onBlur={handleEmailCheng} type="email" placeholder="type your email"/>
             <br />
            <input onBlur={handlepasswordCheng} type="password" placeholder="type password"/> 
            <br />
            <input type="checkbox" name="male" id="" /> Male 
            <input type="checkbox" name="male" id="" /> Female <br /> <br />
                <h3 className='text-danger'>{error} </h3>

                <input className='btn btn-primary' type="submit" value="submit" />

           
            </form>
            <button className='btn btn-primary mt-3' onClick={SignInGoogle}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Profile;