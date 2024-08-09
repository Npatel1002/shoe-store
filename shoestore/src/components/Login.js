import React, { useState } from 'react';
import Admin from './Admin';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Simple hardcoded password check
        if (password === 'admin123') {
            setIsLoggedIn(true);
        } else {
            alert('Incorrect password');
        }
    };

    if (isLoggedIn) {
        return <Admin />;
    }

    return (
        <div className="container">
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