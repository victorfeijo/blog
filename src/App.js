import React, { Component } from 'react'
import './css/App.css'
import SideMenu from './SideMenu'
import MainContent from './MainContent.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideMenu />
        <MainContent />
      </div>
    );
  }
}

export default App
