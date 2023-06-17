import React from 'react';
import './Footer.css';
import './Footer__title.css';
import './Footer__hr.css';
import './Footer__text.css';
import './Footer__info-container.css';
import './Footer__copyrights-container.css';
import './Footer__links-container.css';
import './Footer__link.css';

function Footer() {
  return (
    <footer className="Footer">
      <p className="Footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <hr className="Footer__hr"></hr>
      <div className="Footer__info-container">
        <div className="Footer__copyrights-container">
          <p className="Footer__text">&copy;&nbsp;{(new Date()).getFullYear()}</p>
        </div>
        <div className="Footer__links-container">
          <a className="Footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a className="Footer__link" href="https://github.com/SergeyPetykhov" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;