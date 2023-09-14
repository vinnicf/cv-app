import React from 'react';
import '../styles/sidebar.css'
import { PersonalInfoForm } from './PersonalInfoForm';


const Sidebar = ({ personalInfo, setPersonalInfo }) => {

    return (
        <div className='sidebar'>
            <h2>Edit Your CV</h2>
            <div className="form-container">
                <PersonalInfoForm
                    personalInfo={personalInfo}
                    setPersonalInfo={setPersonalInfo}
                />

                <div className="form-card">
                    <div className="education-form">
                        <h3>Education</h3>

                        <button>+ Add Education</button>
                    </div>
                </div>
                <div className="form-card">

                    <h3>Experience</h3>
                    <button>+ Add Experience</button>
                    <form className="experience-form"></form>
                </div></div>

        </div>

    )
}

export default Sidebar;