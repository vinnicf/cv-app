import React from 'react';
import '../styles/sidebar.css'


const Sidebar = () => {

    return (
        <div className='sidebar'>
            <h2>Edit Your CV</h2>
            <div className="form-container">
                <div className="form-card">
                    <h3>Personal Info</h3>
                    <form className="personal-info-form">
                        <div className="input-group">
                            <label htmlFor="">Full Name</label>
                            <input type="text" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Email</label>
                            <input type="text" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Phone Number</label>
                            <input type="text" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Adress</label>
                            <input type="text" />
                        </div>
                    </form>
                </div>

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