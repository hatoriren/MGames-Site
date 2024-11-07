import React, { useState, useEffect } from "react";
import '../style/style.css'; 
import logo from '../img/logo.png';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);  
      } else {
        setScrolling(false);
      }
    };


    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 


  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className={scrolling ? 'shadow' : ''}> 
      <a href="#home" className="logo">
        <img className="logo-pic" src={logo} alt="logo" />
        MGames
      </a>

      <div className="bx bx-menu" id="menu-icon"></div>
      <ul className="navbar">
        <li>
          <a 
            href="#home" 
            className={activeLink === 'home' ? 'active' : ''} 
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#coming" 
            className={activeLink === 'coming' ? 'active' : ''} 
            onClick={() => handleLinkClick('coming')}
          >
            Coming
          </a>
        </li>
        <li>
          <a 
            href="#games" 
            className={activeLink === 'games' ? 'active' : ''} 
            onClick={() => handleLinkClick('games')}
          >
            Our Games
          </a>
        </li>
        <li>
          <a 
            href="#newsletter" 
            className={activeLink === 'newsletter' ? 'active' : ''} 
            onClick={() => handleLinkClick('newsletter')}
          >
            Newsletter
          </a>
        </li>
        <li>
          <a 
            href="#footer" 
            className={activeLink === 'footer' ? 'active' : ''} 
            onClick={() => handleLinkClick('footer')}
          >
            Contact
          </a>
        </li>
      </ul>
      <a href="login.html" className="btn">Sign In</a>
    </header> 
  );
};

export default Header;
