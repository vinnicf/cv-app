import { useState } from 'react'
import Sidebar from './components/Sidebar';
import CVDisplay from './components/CVDisplay';
import initialData from './initial-data';
import uniqid from 'uniqid';
import './App.css'

function App() {

  const [personalInfo, setPersonalInfo] = useState(initialData.personalInfo)
  const [educations, setEducations] = useState(initialData.sections.educations); // initial state of educations array

  const addEducation = (newEducation) => {
    const newEducationWithId = { ...newEducation, id: uniqid() }; // Add a unique ID to the new education
    setEducations([...educations, newEducationWithId]);
  };

  const updateEducation = (index, updatedEducation) => {
    const newEducations = [...educations];
    newEducations[index] = updatedEducation;
    setEducations(newEducations);
  };


  return (
    <div className="app">

      <div >
        <Sidebar
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          addEducation={addEducation}
          educations={educations}
          updateEducation={updateEducation}

        />
      </div>
      <div className="cvDisplay">
        <CVDisplay
          educations={educations}
          personalInfo={personalInfo}
          experiences={initialData.sections.experiences}
        />

      </div>
    </div>


  )
}

export default App
