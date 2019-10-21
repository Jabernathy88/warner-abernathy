import React from 'react'
import axios from 'axios'
import '../styles/app.css'
import Header from '../components/Header'
import HomePage from '../components/HomePage'

function App() {
  const getTitles = async () => {
    const result = await axios(`/api/titles`)
    console.log("I am AXIOS result:", result)
  }

  return (
    <div className="app bg-blue-grey">
      <Header />
      <HomePage />
    </div>
  )
}

export default App
