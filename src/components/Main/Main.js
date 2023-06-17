import React from 'react';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation.js';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <>
      <Header
        classNameHeader="Header"
        classNameLogo="Header__logo"
        Navigation={Navigation}
      />
      <section className="Main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </section>
      <Footer />
    </>
  )
}

export default Main;