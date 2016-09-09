import React, { Component } from 'react'
import './css/SideMenu.css'

class SideMenu extends Component {

  clickMenu() {
   
  }

  render() {
    return (
      <div className='SideMenu'>

        <div className='Item' onMouseOver={this.clickMenu}>
          <p> i am a item </p>
        </div>

      </div>
    );
  }
}

export default SideMenu
