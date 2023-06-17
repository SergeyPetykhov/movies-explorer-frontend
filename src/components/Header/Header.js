import React from 'react';
import { useNavigate } from 'react-router-dom';
import headerLogo from "../../images/header_logo.svg";

import './Header.css'
import './Header_page_authentication.css'
import './Header__logo.css'


function Header({classNameHeader, Navigation, onBurgerMenu }) {
  const navigate = useNavigate();

  function onClickHeaderLogo() {
    navigate("/", { replace: true });
  }

  return (
    <header className={classNameHeader}>
        <img className="Header__logo" src={headerLogo} alt="Логотип" onClick={onClickHeaderLogo}/>
        {Navigation && <Navigation onBurgerMenu={ onBurgerMenu }/>}
    </header>
  )
}

export default Header;