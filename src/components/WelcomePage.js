import React from "react";
import Header from './Header'
export const WelcomePage = () => {
  return (
    <section className="welcome-page">
      <Header /> <br />
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img ui centered medium circular image"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
