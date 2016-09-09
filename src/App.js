import React, { Component } from 'react'
import logo from './logo.svg'
import './css/App.css'
import SideMenu from './SideMenu'
import MainContent from './MainContent.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SideMenu />
        <MainContent />
      </div>
    );
  }
}

export default App
