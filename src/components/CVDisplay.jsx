import React from 'react';
import '../styles/cvdisplay.css';
import EducationSection from './EducationSection';
import PersonalInfoSection from './PersonalInfoSection';

function CVDisplay({ educations, personalInfo }) {
    return (


        <div className="cv">
            <div className="cv-header">
                <PersonalInfoSection
                    fullName={personalInfo.fullName}
                    email={personalInfo.email}
                    phoneNumber={personalInfo.phoneNumber}
                    address={personalInfo.address}
                />

            </div>
            <div className="cv-body">
                <div className="cv-education">
                    <h2>Education</h2>
                    <EducationSection educations={educations} />
                </div>
                <div className="cv-experience">
                    <h2>Experience</h2>
                    <p>Software Engineer at XYZ Corp</p>
                </div>
            </div>
        </div>
    );
}

export default CVDisplay;