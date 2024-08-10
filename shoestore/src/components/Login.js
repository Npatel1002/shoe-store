import React, { useState } from 'react';
import Admin from './Admin';
import '../assets/css/adminLogin.css';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // hardcoded password 
        if (password === 'NeelPatel') {
            setIsLoggedIn(true);
        } else {
            alert('Incorrect password');
        }
    };

    if (isLoggedIn) {
        return <Admin />;
    }

    return (
        <div className="login-container">
            <h2 className="text-center">Admin Login</h2>
            <div className="form-group">
                <input
                    type="password"
                    placeholder="Enter Admin Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                />
                <button onClick={handleLogin} className="btn btn-primary mt-3">Login</button>
            </div>
        </div>
    );
};

export default Login;
