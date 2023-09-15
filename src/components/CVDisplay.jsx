import React from 'react';
import '../styles/cvdisplay.css';
import EducationSection from './EducationSection';
import PersonalInfoSection from './PersonalInfoSection';
import ExperienceSection from './ExperiencSection'

function CVDisplay({ educations, personalInfo, experiences }) {
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

                    <EducationSection educations={educations} />
                </div>
                <div className="cv-experience">
                    <ExperienceSection experiences={experiences} />
                </div>
            </div>
        </div>
    );
}

export default CVDisplay;