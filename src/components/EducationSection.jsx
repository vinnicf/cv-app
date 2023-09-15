import React from 'react';
import '../styles/educationsection.css'

const EducationSection = ({ educations }) => {
    return (
        <div className="education-section">
            <h3 className='header-text'>Education</h3>
            {educations.map((edu, index) => (
                <div key={edu.id} className="education-item">
                    <div className="edu-date">
                        <p>{edu.location}</p>
                        <p>{edu.startDate} - {edu.endDate}</p>
                    </div>
                    <div className="edu-main">
                        <p><b>{edu.schoolName}</b></p>
                        <p>{edu.degree}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EducationSection;
