import React from 'react';
import { useLocation } from 'react-router-dom';
import TempPoster from "../../images/tempPoster.jpg"; // временный постер для фильма

import './MoviesCard.css';
import './MoviesCard__container.css';
import './MoviesCard__title.css';
import './MoviesCard__time.css';
import './MoviesCard__link.css';
import './MoviesCard__image.css';
import './MoviesCard__save-button.css';
import './MoviesCard__save-button_active.css';
import './MoviesCard__save-button_delete.css';

function MoviesCard({ isSaved }) {
  const location = useLocation();


  const MoviesCardSaveButtonClassName = (
    `MoviesCard__save-button ${isSaved && 'MoviesCard__save-button_active'} ${location.pathname === "/saved-movies" && 'MoviesCard__save-button_delete'}`
  );

  return (
    // карточка фильма
    <li className="MoviesCard">
      <div className="MoviesCard__container">
        <div className="MoviesCard__about">
          <h2 className="MoviesCard__title">33 слова о дизайне</h2>
          <p className="MoviesCard__time">1ч 47м</p>
        </div>
        <button type="button"
          className={MoviesCardSaveButtonClassName}
          aria-label="Сохранить"
          onClick={() => {
            const active = document.querySelector('.MoviesCard__save-button');
            active.classList.toggle('MoviesCard__save-button_active');
          }}
        >
        </button>
      </div>
      <a className="MoviesCard__link" href="https://www.youtube.com/watch?v=UXcqcdYABFw" target="_blank" rel="noreferrer"> 
        <img className="MoviesCard__image"
          alt='Постер к фильму "33 слова о дизайне"'
          src={TempPoster}
        />
      </a>
    </li>
  )
}

export default MoviesCard;