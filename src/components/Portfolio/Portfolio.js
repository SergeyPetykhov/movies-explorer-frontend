import React from 'react';
import arrow from "../../images/arrow.svg";

import './Portfolio.css';
import './Portfolio__title.css';
import './Portfolio__list.css';
import './Portfolio__element.css';
import './Portfolio__link-text.css';
import './Portfolio__link-arrow.css';


function Portfolio() {
  return (
    <section className="Portfolio">
      <h2 className="Portfolio__title">Портфолио</h2>

      {/* таблица с информацией об используемых технологиях */}
      <ul className="Portfolio__list">
        <li className="Portfolio__element" onClick={() => window.open('https://github.com/SergeyPetykhov/how-to-learn')}>
          <p className="Portfolio__link-text">Статичный сайт</p>
          <img className="Portfolio__link-arrow" src={arrow} alt="Логотип" />
        </li>
        <li className="Portfolio__element" onClick={() => window.open('https://github.com/SergeyPetykhov/russian-travel')}>
          <p className="Portfolio__link-text">Адаптивный сайт</p>
          <img className="Portfolio__link-arrow" src={arrow} alt="Логотип" />
        </li>
        <li className="Portfolio__element" onClick={() => window.open('https://github.com/SergeyPetykhov/react-mesto-api-full-gha')}>
          <p className="Portfolio__link-text">Одностраничное приложение</p>
          <img className="Portfolio__link-arrow" src={arrow} alt="Логотип" />
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;