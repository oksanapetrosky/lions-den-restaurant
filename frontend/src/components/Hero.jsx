import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import '../styles/main.scss'; // Import global Sass


const Hero = () => {
  return (
    <section className="hero">
      {/* Dark overlay */}
      
      {/* Social Icons on top */}
      <div className="hero__social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>

      {/* Background image */}

      <div className="hero__overlay">
      <img
        src="your-image.jpg"
        alt="Hero"
        className="hero__background"
      />
      </div>
       
      {/* Text content */}
      <div className="hero__content">
        <h1 className="hero__title">THE LION’S DEN</h1>
        <p className="hero__subtitle">Elegant Dining Meets Rustic Charm</p>
      </div>
    </section>
  );
};

export default Hero;
