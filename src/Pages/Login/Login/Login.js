import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const redirect_URL = location.state?.from || '/';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_URL);
        })
    }
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleSignIn} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;