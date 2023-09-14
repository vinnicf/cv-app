import { useState } from 'react'
import Sidebar from './components/Sidebar';
import CVDisplay from './components/CVDisplay';
import initialData from './initial-data';


import './App.css'

function App() {

  const [personalInfo, setPersonalInfo] = useState(initialData.personalInfo)

  return (
    <div className="app">

      <div >
        <Sidebar
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}

        />
      </div>
      <div className="cvDisplay">
        <CVDisplay
          educations={initialData.sections.educations}
          personalInfo={personalInfo}
        />

      </div>
    </div>


  )
}

export default App
