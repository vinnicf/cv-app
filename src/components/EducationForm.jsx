import React, { useState } from 'react';

const EducationForm = ({ educations, addEducation, updateEducation }) => {
    const [showForm, setShowForm] = useState(false);
    const [newEducation, setNewEducation] = useState({
        degree: "",
        schoolName: "",
        location: "",
        startDate: "",
        endDate: "",
    });

    const [editingIndex, setEditingIndex] = useState(null);

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

    const handleCancel = () => {
        setNewEducation({});
        setShowForm(false);
    };

    const handleEditClick = (index) => {
        setEditingIndex(index);
        setNewEducation(educations[index]);
        setShowForm(true);

    }

    const handleSaveEdit = () => {
        updateEducation(editingIndex, newEducation);
        handleCancel();
    };

    return (
        <div className="form-card">
            <div className="education-form">
                <h3>Education</h3>


                {educations.map((education, index) => (
                    <div key={index} onClick={() => handleEditClick(index)}>
                        {education.schoolName}
                    </div>
                ))}

                {!showForm && (
                    <button onClick={() => setShowForm(true)}>+ Add Education</button>
                )}

                {showForm && (
                    <form >
                        <div className="input-group">
                            <label htmlFor="degree">Degree:</label>
                            <input
                                type="text"
                                id="degree"
                                name="degree"
                                placeholder="Degree"
                                value={newEducation.degree}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="schoolName">School Name:</label>
                            <input
                                type="text"
                                id="schoolName"
                                name="schoolName"
                                placeholder="School Name"
                                value={newEducation.schoolName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="location">Location:</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="Location"
                                value={newEducation.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="startDate">Start Date:</label>
                            <input
                                type="text"
                                id="startDate"
                                name="startDate"
                                placeholder="Start Date"
                                value={newEducation.startDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="endDate">End Date:</label>
                            <input
                                type="text"
                                id="endDate"
                                name="endDate"
                                placeholder="End Date"
                                value={newEducation.endDate}
                                onChange={handleChange}
                            />
                        </div>

                        {editingIndex !== null ? (
                            <button type="button" onClick={handleSaveEdit}>
                                Update
                            </button>
                        ) : (
                            <button type="button" onClick={handleSubmit}>
                                Save
                            </button>
                        )}

                        <button type="button" onClick={handleCancel}>
                            Cancel
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default EducationForm;
