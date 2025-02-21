import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import languagesData from '../data'

function App() {
  
  return (
    <>
    <div>
      <h1>Programming Multiverse</h1>
      <div className='title'>
        {languagesData.map((lD,index)=>(
          <div key={index} className="quote-box">
          <h3>{lD.name}</h3>
          <p>Year of Start- {lD.year}</p>
          <p>Creator- {lD.creator}</p>
          <p>Use Case- {lD.usecase}</p>
          
      </div>
        )
        )}

        
      </div>
    </div>
    
    </>
  )
  
}

export default App
