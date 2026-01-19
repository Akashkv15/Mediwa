import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Profile() {
    const id = localStorage.getItem("shop");
    const [data, setData] = useState({});

    const viewprofile = async () => {
        try {
            const profile = await axios.get(`http://localhost:8000/api/shop/profile/${id}`);
            setData(profile.data.data);
        } catch (error) {
            console.log("error=", error);
        }
    };

    useEffect(() => {
        viewprofile();
    }, [id]);

    return (
        <div className="profile-wrapper">
            <div className="profile-card">
                <h2 className="profile-title">Your Profile</h2>

                <div className="profile-item">
                    <span className="label">Name</span>
                    <span className="value">{data.name}</span>
                </div>

                <div className="profile-item">
                    <span className="label">Email</span>
                    <span className="value">{data.email}</span>
                </div>

                <div className="profile-item">
                    <span className="label">Phone</span>
                    <span className="value">{data.number}</span>
                </div>

                <div className="profile-item">
                    <span className="label">Address</span>
                    <span className="value">{data.address}</span>
                </div>
            </div>
        </div>
    );
}

export default Profile;
