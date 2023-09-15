import React from 'react';
import '../styles/sidebar.css'
import { PersonalInfoForm } from './PersonalInfoForm';
import EducationForm from './EducationForm';


const Sidebar = ({ personalInfo, setPersonalInfo, addEducation, updateEducation, educations }) => {

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


                <div className="form-card">

                    <h3>Experience</h3>
                    <button>+ Add Experience</button>
                    <form className="experience-form"></form>
                </div></div>

        </div>

    )
}

export default Sidebar;