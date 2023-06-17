import React from 'react';

import Header from '../Header/Header';
import NavigationMovies from '../NavigationMovies/NavigationMovies.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import More from '../More/More.js';
import Footer from '../Footer/Footer';

function Movies({ onBurgerMenu }) {

  return (
    <>
      <Header
        classNameHeader="Header"
        classNameLogo="Header__logo"
        Navigation={NavigationMovies}
        onBurgerMenu={onBurgerMenu}
      />
      <section className="Movies">
        <SearchForm />
        <MoviesCardList />
        <More />
      </section>
      <Footer />
    </>
  )
}

export default Movies;