import React, { Component } from 'react'
import '../styles/app.css'
import Header from '../components/Header'
import HomePage from '../components/HomePage'

class App extends Component {
  render() {
    return (
      <div className="app bg-blue-grey">
        <Header />
        <HomePage />
      </div>
    )
  }
}

export default App
