import React from 'react';
import '../styles/sidebar.css'
import { PersonalInfoForm } from './PersonalInfoForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';


const Sidebar = ({ personalInfo, setPersonalInfo, addEducation, updateEducation, educations, experiences, updateExperience, addExperience }) => {

    return (
        <div className='sidebar'>
            <h2>Edit Your CV</h2>
            <div className="form-container">
                <PersonalInfoForm
                    personalInfo={personalInfo}
                    setPersonalInfo={setPersonalInfo}
                />

                <EducationForm
                    addEducation={addEducation}
                    educations={educations}
                    updateEducation={updateEducation}
                />


                <ExperienceForm
                    addExperience={addExperience}
                    experiences={experiences}
                    updateExperience={updateExperience}
                />

            </div></div>

    )
}

export default Sidebar;