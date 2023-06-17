import React from 'react';
import { useNavigate } from 'react-router-dom';
import profile from "../../images/profile.svg";
import burgerMenu from "../../images/burgerMenu.svg";

import './NavigationMovies.css'
import './NavigationMovies__button.css'
import './NavigationMovies__account-button.css'
import './NavigationMovies__BurgerMenu-button.css'

function NavigationMovies({ onBurgerMenu }) {
  const navigate = useNavigate();

  function onClickMoviesButton() {
    navigate("/movies", { replace: true });
  }

  function onClickSavedMoviesButton() {
    navigate("/saved-movies", { replace: true });
  }

  function onClickProfileButton() {
    navigate("/profile", { replace: true });
  }

  return (
    <nav className="NavigationMovies">
      <div className="NavigationMovies__container">
        <button type="button" className="NavigationMovies__button" onClick={onClickMoviesButton}>Фильмы</button>
        <button type="button" className="NavigationMovies__button" onClick={onClickSavedMoviesButton}>Сохранённые фильмы</button>
      </div>
      <img className="NavigationMovies__account-button" src={profile} alt="Аккаунт" onClick={onClickProfileButton}/>
      <img className="NavigationMovies__BurgerMenu-button" src={burgerMenu} alt="Меню" onClick={onBurgerMenu}/>
    </nav>
  )
}

export default NavigationMovies;