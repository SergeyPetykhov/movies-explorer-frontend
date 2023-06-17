import React from 'react';
import AboutMePhoto from "../../images/photo.jpg";
import Portfolio from '../Portfolio/Portfolio.js';

import './AboutMe.css';
import './AboutMe__title.css';
import './AboutMe__hr.css';
import './AboutMe__container.css';
import './AboutMe__data.css';
import './AboutMe__name.css';
import './AboutMe__specialization.css';
import './AboutMe__text.css';
import './AboutMe__link.css';
import './AboutMe__photo.css';


function AboutMe() {
  return (
    <section className="AboutMe" id="AboutMe">
      <h2 className="AboutMe__title">Студент</h2>
      <hr className="AboutMe__hr"></hr>
      <article className="AboutMe__container">
        <div className="AboutMe__data">
          <p className="AboutMe__name">Сергей</p>
          <p className="AboutMe__specialization">Фронтенд-разработчик, 35 лет</p>
          <p className="AboutMe__text">Я&nbsp;родился и&nbsp;живу в&nbsp;Санкт-Петербурге, закончил факультет прикладной информатики СПБГУСЭ. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь горными лыжами. После окончания курса Веб-разработчик и&nbsp;написания диплома, понял что и&nbsp;дальше хочу продолжать развивать свои навыки в&nbsp;IT. Знания полученые в&nbsp;процессе обучения позволяют мне уже сейчас делать несложные приложения.</p>
          <a className="AboutMe__link" href="https://github.com/SergeyPetykhov" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img className="AboutMe__photo" src={AboutMePhoto} alt="Фото студента"></img>
      </article>
      <Portfolio />
    </section>
  )
}

export default AboutMe;

// ДОДЕДЕЛАТЬ СТРАНИЦУ МАЙН ЧАСТЬ СТУДЕНТ для мобильной версии!!!!!