import React from 'react'
import './App.css'
import Home from './pages/Home'
import NetflixShow from './pages/NetflixShow'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
     <div className="App">
  <Home/>
  <NetflixShow/>
   </div>
    </BrowserRouter>
   
  )
}

export default App
