import React from 'react';
import NavTab from '../NavTab/NavTab.js';

import './Promo.css'
import './Promo__title.css'

function Promo() {
  return (
    <section className="Promo">
      <h2 className="Promo__title">Учебный проект студента факультета Веб-разработки.</h2>
      <NavTab />
    </section>
  )
}

export default Promo;
