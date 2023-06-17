import React from 'react';

import './NavTab.css'
import './NavTab__button.css'

function NavTab() {
  return (
    <nav className="NavTab">
      <button type="button" className="NavTab__button" onClick={() => window.location.href='#AboutProject'}>О проекте</button>
      <button type="button" className="NavTab__button" onClick={() => window.location.href='#Techs'}>Технологии</button>
      <button type="button" className="NavTab__button" onClick={() => window.location.href='#AboutMe'}>Студент</button>
    </nav>
  )
}

export default NavTab;