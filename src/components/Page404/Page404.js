import React from 'react';

import './Page404.css'; 
import './Page404__text.css'; 
import './Page404__title.css';
import './Page404__link.css'; 

function Page404() {
  return (
      <section className="Page404" aria-label="Страница 404">
        <p className="Page404__text">404</p>
        <h2 className="Page404__title">Страница не найдена</h2>
        <a className="Page404__link" href="https://github.com/SergeyPetykhov" target="_blank" rel="noreferrer">Назад</a>
      </section>
  )
}

export default Page404;