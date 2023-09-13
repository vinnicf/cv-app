import { useState } from 'react'
import Sidebar from './components/Sidebar';
import CVDisplay from './components/CVDisplay';

import './App.css'

function App() {


  return (
    <div className="app">

      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="cvDisplay">
        <CVDisplay />
      </div>
    </div>


  )
}

export default App
