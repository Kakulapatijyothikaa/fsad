import React from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
    const location = useLocation();
    const username = location.state?.username || "Guest"; 

    return (
        <div>
            <h1>Profile page</h1>
            <h1>Hello {username}</h1> 
        </div>
    );
};

export default Profile;