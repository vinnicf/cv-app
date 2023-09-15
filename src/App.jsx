import { useState } from 'react'
import Sidebar from './components/Sidebar';
import CVDisplay from './components/CVDisplay';
import initialData from './initial-data';
import uniqid from 'uniqid';
import './App.css'

function App() {

  const [personalInfo, setPersonalInfo] = useState(initialData.personalInfo)
  const [educations, setEducations] = useState(initialData.sections.educations); // initial state of educations array
  const [experiences, setExperiences] = useState(initialData.sections.experiences);

  const addEducation = (newEducation) => {
    const newEducationWithId = { ...newEducation, id: uniqid() }; // Add a unique ID to the new education
    setEducations([...educations, newEducationWithId]);
  };

  const updateEducation = (index, updatedEducation) => {
    const newEducations = [...educations];
    newEducations[index] = updatedEducation;
    setEducations(newEducations);
  };

  const addExperience = (newExperience) => {
    const newExperienceWithId = { ...newExperience, id: uniqid() };
    setExperiences([...experiences, newExperienceWithId]);
  };

  const updateExperience = (index, updatedExperience) => {
    const newExperiences = [...experiences];
    newExperiences[index] = updatedExperience;
    setExperiences(newExperiences);
  };


  return (
    <div className="app">

      <Sidebar
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        addEducation={addEducation}
        educations={educations}
        updateEducation={updateEducation}
        addExperience={addExperience}
        updateExperience={updateExperience}
        experiences={experiences}

      />

      <div className="cvDisplay">
        <CVDisplay
          educations={educations}
          personalInfo={personalInfo}
          experiences={experiences}
        />

      </div>
    </div>


  )
}

export default App
