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
        <CarouselComponent />
        <div className="nav-bar">
        </div>
      </div>
    );
  }
}

export default Header;
