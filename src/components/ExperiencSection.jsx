import React from "react";
import '../styles/experiencesection.css'



const ExperienceSection = ({ experiences }) => {

    return (
        <div className="experience-section">
            <h3 className="header-text">Experience</h3>

            <div>
                {experiences.map((exp) => (
                    <div key={exp.id} className="experience-item">
                        <div className="experience-left">
                            <p>{exp.startDate} - {exp.endDate}</p>
                            <p>{exp.location}</p>
                        </div>
                        <div className="experience-right">
                            <p><strong>{exp.companyName}</strong></p>
                            <p>{exp.position}</p>
                            <p>{exp.description}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}


export default ExperienceSection;
