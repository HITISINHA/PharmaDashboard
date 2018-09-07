import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './images/banner.jpg';
import CarouselComponent from './Carousel.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header row">
       <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" />
        <CarouselComponent className="col-sm-6 col-xs-6 col-lg-6 col-md-6"/>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" />
      </div>
    );
  }
}

export default Header;
