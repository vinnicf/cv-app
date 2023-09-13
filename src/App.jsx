import { useState } from 'react'
import Sidebar from './components/Sidebar';
import CVDisplay from './components/CVDisplay';
import initialData from './initial-data';


import './App.css'

function App() {

  return (
    <div className="app">

      <div >
        <Sidebar />
      </div>
      <div className="cvDisplay">
        <CVDisplay
          educations={initialData.sections.educations}
          personalInfo={initialData.personalInfo}
        />

      </div>
    </div>


  )
}

export default App
