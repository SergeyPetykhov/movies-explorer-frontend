import React from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import profile from "../../images/profile.svg";
import closeButton from "../../images/closeIcon.svg";

import './BurgerMenuPopUp.css';
import './BurgerMenuPopUp_is-opened.css';
import './BurgerMenuPopUp__menu.css';
import './BurgerMenuPopUp__сlose-button.css';
import './BurgerMenuPopUp__link-container.css';
import './BurgerMenuPopUp__link.css';
import './BurgerMenuPopUp__link_active.css';
import './BurgerMenuPopUp__account-button.css';

function BurgerMenuPopUp({ isOpen, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  let isPageMoviesOpen = false;
  let isPageSavedMoviesOpen = false;

  if(location.pathname === "/movies") {
    isPageMoviesOpen = true;
  }

  if(location.pathname === "/saved-movies") {
    isPageSavedMoviesOpen = true;
  }

  function onClickProfileButton() {
    navigate("/profile", { replace: true });
  }
 
  return (
    <section className={`BurgerMenuPopUp ${isOpen ? "BurgerMenuPopUp_is-opened" : ""}`} aria-label="Меню">
      <div className="BurgerMenuPopUp__menu" >
        <img className="BurgerMenuPopUp__сlose-button" src={closeButton} alt="Закрыть" onClick={onClose}></img>
        <div className="BurgerMenuPopUp__link-container">
          <a className="BurgerMenuPopUp__link" href="/">Главная</a>
          <a className={`BurgerMenuPopUp__link ${isPageMoviesOpen ? "BurgerMenuPopUp__link_active" : ""}`} href="/movies">Фильмы</a>
          <a className={`BurgerMenuPopUp__link ${isPageSavedMoviesOpen ? "BurgerMenuPopUp__link_active" : ""}`} href="/saved-movies">Сохранённые фильмы</a>
        </div>
        <img className="BurgerMenuPopUp__account-button" src={profile} alt="Аккаунт" onClick={onClickProfileButton} />
      </div>
    </section>
  )
}

export default BurgerMenuPopUp;
