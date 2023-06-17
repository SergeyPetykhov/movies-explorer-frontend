import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header.js';
import NavigationMovies from '../NavigationMovies/NavigationMovies.js';

import './Profile__container.css';
import './Profile__title.css';
import './Profile__form.css';
import './Profile__input-container.css';
import './Profile__input-label.css';
import './Profile__input.css';
import './Profile__input-data.css';
import './Profile__hr.css';
import './Profile__button.css';
import './Profile__button_pink.css';


function Profile() {
  const navigate = useNavigate();

  function onClickEditButton() {
    console.log("Редактировать");
  }
  
  function onClicExitButton() {
    navigate("/", { replace: true });
  }

  return (
    <>
      <Header
        classNameHeader='Header'
        classNameLogo='Header__logo'
        Navigation={NavigationMovies}
      />

      <section className="Profile" aria-label="Профиль пользователя">
        <div className='Profile__container'>
          <p className='Profile__title'>Привет, Виталий!</p>
          <form
            className='Profile__form'
            name='Profile__form'
          >
            <fieldset className='Profile__input-container'>
              {/* Поле ввода: Имя*/}
              <div className='Profile__input-data'>
                <label htmlFor="name" className='Profile__input-label'>Имя</label>
                <input
                  type="text"
                  className='Profile__input'
                  id="name"
                  name="name"
                  placeholder="Имя"
                  value="Виталий"
                  disabled
                />
              </div>
              <hr className="Profile__hr"></hr>
              {/* Поле ввода: Почта*/}
              <div className='Profile__input-data'>
                <label htmlFor="email" className='Profile__input-label'>E-mail</label>
                <input
                  type="email"
                  className='Profile__input'
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  value="pochta@yandex.ru"
                  disabled/>
              </div>
            </fieldset>
          </form>
          <button type="button" className="Profile__button" onClick={onClickEditButton}>Редактировать</button>
          <button type="button" className="Profile__button Profile__button_pink" onClick={onClicExitButton}>Выйти из аккаунта</button>
        </div>
      </section>
    </>
  )
}

export default Profile;