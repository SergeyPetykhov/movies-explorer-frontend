import React from 'react';

import Header from '../Header/Header';
import NavigationMovies from '../NavigationMovies/NavigationMovies.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Footer from '../Footer/Footer';

function SavedMovies({ onBurgerMenu }) {
  return (
    <>
      <Header
        classNameHeader="Header"
        classNameLogo="Header__logo"
        Navigation={NavigationMovies}
        onBurgerMenu={onBurgerMenu}
      />
      <section className="SavedMovies">
        <SearchForm />
        <MoviesCardList />
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies;