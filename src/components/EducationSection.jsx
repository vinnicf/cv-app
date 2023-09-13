import React from 'react';

const EducationSection = ({ educations }) => {
    return (
        <div className="education-section">
            <h3>Education</h3>
            {educations.map((edu, index) => (
                <div key={edu.id} className="education-item">
                    <h4>{edu.degree} at {edu.schoolName}</h4>
                    <p>{edu.location}</p>
                    <p>{edu.startDate} - {edu.endDate}</p>
                    <div className="additional-info">
                        {edu.isCollapsed && <p>Details are collapsed</p>}
                        {edu.isHidden && <p>This item is hidden</p>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EducationSection;
