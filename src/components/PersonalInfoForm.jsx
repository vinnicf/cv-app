import React from 'react';

export const PersonalInfoForm = ({ personalInfo, setPersonalInfo }) => {

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPersonalInfo({
            ...personalInfo,
            [name]: value
        });
    };

    return (
        <div className="form-card">
            <h3>Personal Info</h3>
            <form className="personal-info-form">
                <div className="input-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={personalInfo.fullName}
                        onChange={handleInputChange} />
                </div>

                <div className="input-group">
                    <label htmlFor="">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        value={personalInfo.email}
                        onChange={handleInputChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" name="phoneNumber" value={personalInfo.phoneNumber} onChange={handleInputChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" value={personalInfo.address} onChange={handleInputChange} />
                </div>


            </form>
        </div>
    );
};
