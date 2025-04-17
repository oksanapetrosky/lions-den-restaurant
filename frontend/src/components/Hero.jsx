import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import '../styles/main.scss';
import '../styles/hero.scss';
import '../styles/variables.scss';

const Hero = () => {
  return (
    <section className="hero">
      {/* Social Icons */}
      <div className="hero__social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>

      {/* Slideshow Container */}
      <div className="hero__slideshow">
        <img src="/images/hero1.jpg" alt="hero" className="hero__slide hero__slide--first" />
        <img src="/images/hero2.jpg" alt="hero" className="hero__slide hero__slide--second" />
        <img src="/images/hero3.jpg" alt="hero" className="hero__slide hero__slide--third" />
      </div>

      {/* Hero Text */}
      <div className="hero__content">
        <h1 className="hero__title">THE LION’S DEN</h1>
        <p className="hero__subtitle">Elegant Dining Meets Rustic Charm</p>
      </div>
    </section>
  );
};

export default Hero;
