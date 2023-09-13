import React from 'react';
import '../styles/personalinfo.css'; // Import the relevant styles

function PersonalInfoSection({ fullName, email, phoneNumber, address }) {
    return (
        <div className="personal-info-section">
            <h1>{fullName}</h1>
            <div className="contact-info">
                <div><p>Email: {email}</p></div>
                <div><p>Phone: {phoneNumber}</p></div>
                <div><p>Address: {address}</p></div>
            </div>
        </div>
    );
}

export default PersonalInfoSection;