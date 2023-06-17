import React from 'react';
import TempPoster from "../../images/tempPoster.jpg";

import './MoviesCard__list-item.css';
import './MoviesCard__container.css';
import './MoviesCard__title.css';
import './MoviesCard__time.css';
import './MoviesCard__image.css';
import './MoviesCard__save-button.css';
import './MoviesCard__save-button_active.css';

function MoviesCard({isSaved}) {
  const MoviesCardSaveButtonClassName = (
    `MoviesCard__save-button ${isSaved && 'MoviesCard__save-button_active'}`
  );

  return (
    // карточка фильма
    <li className="MoviesCard__list-item">
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

      <img className="MoviesCard__image"
        alt="Постер к фильму"
        src={TempPoster}
        onClick={() => console.log("Постер к фильму")}
      />
    </li>
  )
}

export default MoviesCard;