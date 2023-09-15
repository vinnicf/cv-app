import React, { useState } from 'react';

const ExperienceForm = ({ experiences, addExperience, updateExperience }) => {
    const [showForm, setShowForm] = useState(false);
    const [newExperience, setNewExperience] = useState({
        companyName: "",
        position: "",
        startDate: "",
        endDate: "",
    });

    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange = (e) => {
        setNewExperience({
            ...newExperience,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addExperience(newExperience);
        setNewExperience({
            companyName: "",
            position: "",
            startDate: "",
            endDate: "",
        });
        setShowForm(false);
    };

    const handleCancel = () => {
        setNewExperience({});
        setShowForm(false);
    };

    const handleEditClick = (index) => {
        setEditingIndex(index);
        setNewExperience(experiences[index]);
        setShowForm(true);

    }

    const handleSaveEdit = () => {
        updateExperience(editingIndex, newExperience);
        handleCancel();
    };

    return (
        <div className="form-card">
            <div className="experience-form">
                <h3>Experience</h3>


                {experiences.map((experience, index) => (
                    <div key={index} onClick={() => handleEditClick(index)}>
                        {experience.companyName}
                    </div>
                ))}

                {!showForm && (
                    <button onClick={() => setShowForm(true)}>+ Add Experience</button>
                )}

                {showForm && (
                    <form >
                        <div className="input-group">
                            <label htmlFor="companyName">Company:</label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                placeholder="Company Name"
                                value={newExperience.companyName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="position">Position:</label>
                            <input
                                type="text"
                                id="position"
                                name="position"
                                placeholder="Position"
                                value={newExperience.position}
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
                                value={newExperience.location}
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
                                value={newExperience.startDate}
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
                                value={newExperience.endDate}
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

export default ExperienceForm;
