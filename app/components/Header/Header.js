import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './images/banner.jpg';
import CarouselComponent from './Carousel.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        {/* <a href="https://twitter.com/flexdinesh">
          <img src={Banner} alt="react-redux-boilerplate - Logo" />
        </a> */}
        <CarouselComponent />
        <div className="nav-bar">
          {/* <Link className="router-link" to="/">
            Home
          </Link>
          <Link className="router-link" to="/features">
            Features
          </Link> */}
        </div>
      </div>
    );
  }
}

export default Header;
