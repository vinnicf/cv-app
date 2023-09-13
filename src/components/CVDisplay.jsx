import React from 'react';
import '../styles/cvdisplay.css';

function CVDisplay() {
    return (
        <div className="cv">
            <div className="cv-header">
                <div>
                    <h1>John Doe</h1>
                    <div className="contact-info">
                        <div><p>Email: john.doe@example.com</p></div>
                        <div><p>Phone: (54) 99992-4001</p></div>
                        <div><p>City: London</p></div>
                    </div>
                </div></div>
            <div className="cv-body">
                <div className="cv-education">
                    <h2>Education</h2>
                    <p>College XYZ</p>
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