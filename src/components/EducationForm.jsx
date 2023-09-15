import React, { useState } from 'react';

const EducationForm = ({ addEducation }) => {
    const [showForm, setShowForm] = useState(false);
    const [newEducation, setNewEducation] = useState({
        degree: "",
        schoolName: "",
        location: "",
        startDate: "",
        endDate: "",
    });

    const handleChange = (e) => {
        setNewEducation({
            ...newEducation,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addEducation(newEducation);
        setNewEducation({
            degree: "",
            schoolName: "",
            location: "",
            startDate: "",
            endDate: "",
        });
        setShowForm(false);
    };

    return (
        <div className="form-card">
            <div className="education-form">
                <h3>Education</h3>
                <button onClick={() => setShowForm(!showForm)}>+ Add Education</button>

                {showForm && (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="degree"
                            placeholder="Degree"
                            value={newEducation.degree}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="schoolName"
                            placeholder="School Name"
                            value={newEducation.schoolName}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={newEducation.location}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="startDate"
                            placeholder="Start Date"
                            value={newEducation.startDate}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="endDate"
                            placeholder="End Date"
                            value={newEducation.endDate}
                            onChange={handleChange}
                        />

                        <input type="submit" value="Save" />
                    </form>
                )}
            </div>
        </div>
    );
};

export default EducationForm;
