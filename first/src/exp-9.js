import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const initialData = {
        uname: '',
        pass: ''
    };

    const [formData, setFormData] = useState(initialData);
    const navigate = useNavigate(); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleLogin = () => {
        if (formData.uname === formData.pass) {
            navigate('/profile', { state: { username: formData.uname } }); 
        } else {
            
            alert('Username and password do not match');
        }
    };

    return (
        <div>
            <h1>Username</h1>
            <input
                type='text'
                name="uname"
                value={formData.uname}
                placeholder="Enter username"
                onChange={handleInputChange}
            />
            <h1>Password</h1>
            <input
                type='password'
                name="pass"
                value={formData.pass}
                placeholder="Enter password"
                onChange={handleInputChange}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;