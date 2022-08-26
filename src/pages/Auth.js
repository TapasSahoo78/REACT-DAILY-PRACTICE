import React from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = ({ auth }) => {
    const navigate = useNavigate();
    const handleLogin = () => {
        // auth();
        navigate('/dashboard');
        alert('Login Success');
    }
    return (
        <>
            <h4>Plase Login</h4>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default Auth;