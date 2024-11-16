import React from 'react';
import './style.css';
import { useUser } from '../../contexts/UserContext';

function Profile() {
    const { user } = useUser();

    if (!user) {
        return <p>Loading...</p>;
    }
    return (
        <div className="profile-container mt-3">
            <h1 className="profile-title">Profile</h1>
            <div className="profile-content">
                <div className="profile-info">
                    <h2 className="profile-subtitle">User Information</h2>
                    <div className="profile-details">
                        <div>
                            <span className="label">Name: </span>
                            <span className="value">{user.name}</span>
                        </div>
                        <div>
                            <span className="label">Email: </span>
                            <span className="value">{user.email}</span>
                        </div>
                        <div>
                            <span className="label">Phone: </span>
                            <span className="value">{user.phone}</span>
                        </div>
                        <div>
                            <span className="label">Address: </span>
                            <span className="value">{user.address}</span>
                        </div>
                    </div>
                </div>
                <div className="profile-image" style={{ position: 'relative' }}>
                    <img
                        src="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-gray-solid-color-background-image_557027.jpg"
                        alt="Profile"
                        className="image"
                        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                    />
                    <div
                        className="center-letter"
                        style={{
                            position: 'relative',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -300%)',
                            fontSize: '5rem',
                            fontWeight: 'bold',
                            color: '#fff',
                            zIndex: 1,
                        }}
                    >
                        {user.name?.substring(0, 1)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;