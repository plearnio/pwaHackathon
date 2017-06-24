import React, { Component } from 'react'
import Random from './components/Random'
import logo from './logo.svg'
import './App.css'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Push si !</h2>
    </div>
    <Random />
  </div>
)

export default App;
